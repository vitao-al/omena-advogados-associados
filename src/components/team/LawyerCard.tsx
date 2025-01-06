import React from 'react';
import type { Lawyer } from '../../data/lawyers';

interface LawyerCardProps {
  lawyer: Lawyer;
}

export default function LawyerCard({ lawyer }: LawyerCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden w-64">
      <div className="aspect-[3/4] relative">
        <img
          src={lawyer.image || '/path/to/default-image.jpg'}
          alt={`${lawyer.name} imagem de perfil`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {lawyer.name}
        </h3>
        <p className="text-[#D0AB64] font-medium text-sm mb-2">{lawyer.role}</p>
        <p className="text-xs text-gray-600 mb-2">{lawyer.oab}</p>
        <div className="space-x-1">
          {lawyer.specialties.map((specialty) => (
            <span
              key={specialty}
              className="inline-block text-xs bg-blue-50 text-[#D0AB64] px-2 py-1 rounded-full"
            >
              {specialty}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
