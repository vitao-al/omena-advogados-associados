export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "1", //"Quanto tempo demora um processo trabalhista?"
    answer: "O prazo médio é de 12 a 24 meses, mas pode variar dependendo da complexidade do caso e da região do tribunal.",
    category: "Trabalhista"
  },
  {
    id: 2,
    question: "2",//"Como funciona a primeira consulta?",
    answer: "A primeira consulta é uma análise inicial do seu caso, com duração média de 1 hora. Nela, avaliamos a viabilidade jurídica e traçamos as possíveis estratégias.",
    category: "Geral"
  },
  {
    id: 3,
    question: "3",//"Quais documentos preciso levar na primeira consulta?",
    answer: "Documentos pessoais (RG, CPF), comprovante de residência e documentos relacionados ao seu caso (contratos, notificações, etc).",
    category: "Geral"
  },
  {
    id: 4,
     question: "4",//"Quanto custa para entrar com uma ação?",
    answer: "Os custos variam de acordo com o tipo e complexidade do processo. Na primeira consulta, apresentamos um orçamento detalhado e as opções de pagamento.",
    category: "Geral"
  }
];