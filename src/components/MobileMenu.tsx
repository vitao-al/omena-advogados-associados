import React, { useEffect } from 'react';
import { X, Scale } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0"onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-80 bg-neutral-900 transform transition-transform duration-300 ease-out">
        <div className=" p-2 border-neutral-800 rounded">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Scale className="h-6 w-6 text-gold-500" />
              <span className="text-lg font-semibold text-white">Omena & Advogados</span>
            </div>
            <button 
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
        <nav className="p-6 space-y-4 bg-neutral-800 rounded-lg">
          <a 
            href="#inicio" 
            onClick={onClose}
            className="block text-lg text-neutral-400 hover:text-white transition-colors"
          >
            Início
          </a>
          <a 
            href="#sobre" 
            onClick={onClose}
            className="block text-lg text-neutral-400 hover:text-white transition-colors"
          >
            Sobre
          </a>
          <a 
            href="#servicos" 
            onClick={onClose}
            className="block text-lg text-neutral-400 hover:text-white transition-colors"
          >
            Serviços
          </a>
          <a 
            href="#contato" 
            onClick={onClose}
            className="block text-lg text-neutral-400 hover:text-white transition-colors"
          >
            Contato
          </a>
        </nav>
      </div>
    </div>
  );
}