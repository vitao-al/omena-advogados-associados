import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-20 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Entre em Contato</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Estamos à disposição para atender suas necessidades jurídicas
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white dark:bg-neutral-800 p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-gold-500 dark:text-gold-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Endereço</h4>
                    <p className="text-gray-600 dark:text-gray-400">Rua João Calheiros Gato, Nº 66, Levada, Maceió/AL</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-gold-500 dark:text-gold-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Telefone</h4>
                    <p className="text-gray-600 dark:text-gray-400">(11) 3000-0000</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-gold-500 dark:text-gold-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">E-mail</h4>
                    <p className="text-gray-600 dark:text-gray-400">contato@silvaassociados.com.br</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-gold-500 dark:text-gold-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Horário de Atendimento</h4>
                    <p className="text-gray-600 dark:text-gray-400">Segunda a Sexta: 9h às 18h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[400px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d597.9185671258899!2d-35.747728678738014!3d-9.663682236913095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7014fa799b76cd1%3A0x61a72b25d44a0b96!2sOmena%20%26%20Advogados!5e1!3m2!1spt-BR!2sbr!4v1736020845941!5m2!1spt-BR!2sbr"
              className="w-full h-full rounded-lg border-2 border-gray-200 dark:border-gray-700"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}