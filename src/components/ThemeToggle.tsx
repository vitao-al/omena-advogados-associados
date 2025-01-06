import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-gold-500 dark:hover:bg-gold-500 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5 text-black hover:text-neutral-900 dark:bg-gold-500" />
      ) : (
        <Sun className="h-5 w-5 text-gold-500 dark:text-gold-500 dark:hover:text-white" />
      )}
    </button>
  );
}