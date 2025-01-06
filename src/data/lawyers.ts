export interface Lawyer {
  id: number;
  name: string;
  role: string;
  specialties: string[];
  image: string;
  oab: string;
}

export const lawyers: Lawyer[] = [
  {
    id: 1,
    name: 'Dr. Joanisio Omena',
    role: 'Advogado criminalista',
    specialties: ['Direito Empresarial', 'Direito Tributário'],
    image: './assets/joanisioomena.jpeg',
    oab: 'OAB/AL 8.101'
  },
  {
    id: 2,
    name: 'Dra. Kyvia Maciel',
    role: 'Sócia',
    specialties: ['Direito Civil', 'Direito de Família'],
    image: './assets/kyviamaciel.jpeg',
    oab: 'OAB/AL 16.724'
  },

];