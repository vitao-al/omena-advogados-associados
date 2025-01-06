import React from 'react';

export default function Hero() {
  return (
    <section id="inicio" className="pt-20 lg:pt-24">
      <div className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80"
            alt="Escritório de advocacia"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Excelência e Compromisso em Advocacia
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Defendendo seus direitos com dedicação e profissionalismo há mais de 20 anos
            </p>
            <a
              href="#contato"
              className="inline-block bg-gold-500 dark:bg-gold-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-gold-500 dark:hover:bg-white hover:dark:text-gold-500 transition-colors"
            >
              Agende uma Consulta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}