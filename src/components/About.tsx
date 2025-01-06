import React from 'react';
import { Award, Users, Building } from 'lucide-react';

const stats = [
  {
    icon: <Award className="h-6 w-6" />,
    value: '20+',
    label: 'Anos de Experiência'
  },
  {
    icon: <Users className="h-6 w-6" />,
    value: '1000+',
    label: 'Clientes Atendidos'
  },
  {
    icon: <Building className="h-6 w-6" />,
    value: '95%',
    label: 'Taxa de Sucesso'
  }
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gold-500 mb-6">
              Tradição e Excelência em Serviços Jurídicos
            </h2>
            <p className="text-neutral-900 dark:text-white mb-6">
              Fundado em 2004, o escritório Silva & Associados construiu uma sólida reputação
              baseada na excelência dos serviços prestados e no compromisso com os interesses
              de nossos clientes.
            </p>
            <p className="text-neutral-900 dark:text-white mb-8">
              Nossa equipe é formada por profissionais altamente qualificados, com experiência
              em diversas áreas do direito, prontos para oferecer soluções jurídicas
              personalizadas e eficientes.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-gold-500 dark:text-gold-500 flex justify-center mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1593115057322-e94b77572f20?auto=format&fit=crop&q=80"
              alt="Escritório"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}