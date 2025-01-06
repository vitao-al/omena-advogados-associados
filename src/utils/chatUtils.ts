import { FAQ, faqs } from '../data/faq';

function similarity(s1: string, s2: string): number {
  const normalize = (str: string) => 
    str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  const a = normalize(s1);
  const b = normalize(s2);

  // Simple word matching
  const wordsA = new Set(a.split(' '));
  const wordsB = new Set(b.split(' '));
  const intersection = new Set([...wordsA].filter(x => wordsB.has(x)));
  
  return intersection.size / Math.max(wordsA.size, wordsB.size);
}

export function findBestMatch(query: string, faqs: FAQ[]): string {
  const defaultResponse = "Desculpe, não encontrei uma resposta específica para sua pergunta. Por favor, entre em contato conosco para um atendimento personalizado.";
  
  let bestMatch = {
    score: 0,
    answer: defaultResponse
  };

  for (const faq of faqs) {
    const score = similarity(query, faq.question);
    if (score > bestMatch.score && score > 0.3) {
      bestMatch = {
        score,
        answer: faq.answer
      };
    }
  }

  return bestMatch.answer;
}