import React from 'react';
import { Scale } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-neutral-400">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Scale className="h-8 w-8 text-gold-500" />
            <span className="text-xl font-semibold text-white">Omena & Advogados</span>
          </div>
          <div className="text-sm">
            © {new Date().getFullYear()} Omena & Advogados. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}