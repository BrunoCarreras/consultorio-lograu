export type Specialty = {
  id: 'odontologia' | 'oftalmologia';
  name: string;
  path: string;
  summary: string;
  professionals: string[];
  services: string[];
  highlights: string[];
  contact: { label: string; value: string; href?: string; whatsapp?: { phone: string; message: string } };
};

export const clinic = {
  name: 'Consultorios Lo Grau',
  subtitle: 'Odontología y Oftalmología en Santa Fe con atención profesional y personalizada.',
  address: 'Av. General Paz 5230, Santa Fe, Argentina',
  city: 'Santa Fe',
  colors: ['#FDF6ED', '#EAECF0', '#B5BAFF', '#BDA6CE', '#767F9E'],
};

export const specialties: Specialty[] = [
  {
    id: 'odontologia',
    name: 'Odontología',
    path: '/odontologia',
    summary: 'Salud bucal integral con criterios actuales, planificación personalizada y una atención cercana para cada etapa del tratamiento.',
    professionals: ['Dr. Gustavo Adrián Badía'],
    services: ['Odontología General', 'Implantes', 'Prótesis', 'Ortodoncia', 'Ortopedia', 'Endodoncia', 'Placas para Bruxismo', 'Extracciones', 'Estética Dental'],
    highlights: ['Diagnóstico claro y seguimiento personalizado', 'Tratamientos integrales en un entorno confortable', 'Soluciones estéticas y funcionales para sonrisas saludables'],
    contact: {
      label: 'Solicitar turno por WhatsApp',
      value: '+54 9 342 434 9199',
      whatsapp: { phone: '5493424349199', message: 'Hola Dr. Gustavo Badía, quisiera solicitar un turno.' },
    },
  },
  {
    id: 'oftalmologia',
    name: 'Oftalmología',
    path: '/oftalmologia',
    summary: 'Atención oftalmológica clínica, pediátrica y estudios complementarios con mirada preventiva y orientación profesional.',
    professionals: ['Dr. Guillermo J. Badia', 'Dra. María Cecilia Allevi'],
    services: ['Consulta Oftalmológica General', 'Oftalmología Pediátrica', 'OCT', 'Campo Visual Computado', 'Topografía Corneal', 'Retinografía', 'Tratamiento de Glaucoma', 'Cirugía de Cataratas', 'Aplicaciones Láser', 'Estudios Complementarios'],
    highlights: ['Evaluación integral de la salud visual', 'Estudios diagnósticos disponibles', 'Estructura preparada para sumar nuevos canales digitales'],
    contact: { label: 'Consultar por turnos', value: '3424230015', href: 'tel:3424230015' },
  },
];
