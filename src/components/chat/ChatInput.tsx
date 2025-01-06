import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSend: (message: string) => void;
}

export default function ChatInput({ onSend }: ChatInputProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message.trim());
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="
    flex 
    gap-2">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Digite sua pergunta..."
        className="
            bg-black
            text-white
            border-gray-300
            focus:ring-gold-500
            flex-1 
            rounded-lg 
            border
            px-4 
            py-2 
            focus:outline-none 
            focus:ring-2"
      />
      <button
        type="submit"
        className="
        bg-gold-500
        text-white
        hover:bg-blue-700 
        focus:ring-blue-500
        rounded-lg
        px-4 
        py-2
        focus:outline-none 
        focus:ring-2"
      >
        <Send className="
        h-5 
        w-5" />
      </button>
    </form>
  );
}