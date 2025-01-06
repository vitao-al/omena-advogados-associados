import React, { useState } from 'react';
import { Scale, Menu } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Scale className="h-8 w-8 text-gold-500" />
            <span className="text-2xl font-serif  text-black dark:text-white">Omena & Advogados associados</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              <a href="#inicio" className="text-neutral-900 hover:text-gold-500 dark:text-gold-500 dark:hover:text-white transition-colors">Início</a>
              <a href="#sobre" className="text-neutral-900 hover:text-gold-500 dark:text-gold-500 dark:hover:text-white transition-colors">Sobre</a>
              <a href="#servicos" className="text-neutral-900 hover:text-gold-500 dark:text-gold-500 dark:hover:text-white transition-colors">Serviços</a>
              <a href="#contato" className="text-neutral-900 hover:text-gold-500 dark:text-gold-500 dark:hover:text-white transition-colors">Contato</a>
            </nav>
            <ThemeToggle />
          </div>
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-black hover:text-gold-500 dark:text-gold-500 dark:hover:text-white transition-colors"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  );
}