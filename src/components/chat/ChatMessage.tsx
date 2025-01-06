import React from 'react';

interface ChatMessageProps {
  message: string;
  isBot: boolean;
}

export default function ChatMessage({ message, isBot }: ChatMessageProps) {
  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}>
      <div
        className={`max-w-[80%] rounded-lg px-4 py-2 ${
          isBot
            ? 'bg-gray-600 text-white'
            : 'bg-gold-500 text-white'
        }`}
      >
        {/* Mapeando as linhas do texto com quebra de linha */}
        {message.split("\n").map((line, index) => (
          <p key={index} className="text-sm mb-1">{line}</p>
        ))}
      </div>
    </div>
  );
}
