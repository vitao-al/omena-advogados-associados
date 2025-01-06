import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { findBestMatch } from '../../utils/chatUtils';
import { faqs } from '../../data/faq';

interface Message {
  text: string;
  isBot: boolean;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Olá! Sou o assistente virtual do Omena & Advogados associados. Como posso ajudar? \n1 - Quanto tempo demora um processo trabalhista? \n2 - Como funciona a primeira consulta? \n3 - Quais documentos preciso levar na primeira consulta? \n4 - Quanto custa para entrar com uma ação?",
      isBot: true
    }
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (message: string) => {
    // Add user message
    setMessages(prev => [...prev, { text: message, isBot: false }]);

    // Find best matching response
    const response = findBestMatch(message, faqs);
    
    // Add bot response with a small delay
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: response,
        isBot: true
      }]);
    }, 500);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl w-[350px] h-[500px] flex flex-col">
          <div className="bg-gold-500 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-serif text-black dark:text-white">Chat Omena & Advogados associados</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-black hover:text-gray-200"
            >
              ✕
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 bg-neutral-800 dark:bg-gray-900">
            {messages.map((message, index) => (
              <ChatMessage
                key={index}
                message={message.text}
                isBot={message.isBot}
              />
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t bg-neutral-900">
            <ChatInput onSend={handleSend} />
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="
          bg-gold-500
          text-black 
          hover:bg-gray-200 
          hover:text-gold-500
          text-netral-900 
          p-4 rounded-full 
          shadow-lg 
          transition-colors"
        >
          <MessageSquare className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}