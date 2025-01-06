import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { lawyers } from '../../data/lawyers';
import LawyerCard from './LawyerCard';

export default function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((current) =>
      current === lawyers.length - 1 ? 0 : current + 1
    );
  };

  const prev = () => {
    setCurrentIndex((current) =>
      current === 0 ? lawyers.length - 1 : current - 1
    );
  };

  return (
    <section id="equipe" className="py-20 bg-gray-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#D0AB64] mb-4">Nossa Equipe</h2>
          <p className="text-neutral-900 dark:text-white max-w-2xl mx-auto">
            Conheça nossos advogados especializados, comprometidos em oferecer o melhor
            serviço jurídico para nossos clientes
          </p>
        </div>
        <div className="relative max-w-5xl mx-auto flex flex-col items-center">
          <div className="flex items-center justify-center min-h-[300px]">
            {/* Carrossel */}
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {lawyers.map((lawyer) => (
                <div
                  key={lawyer.id}
                  className="w-full flex-shrink-0 px-4 flex justify-center"
                >
                  <LawyerCard lawyer={lawyer} />
                </div>
              ))}
            </div>
          </div>

          {/* Botões de navegação */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-2 rounded-full shadow-md hover:bg-gray-50"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-2 rounded-full shadow-md hover:bg-gray-50"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>

          {/* Indicadores de navegação */}
          <div className="flex justify-center mt-6 space-x-2">
            {lawyers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? ' bg-gold-500 ' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
