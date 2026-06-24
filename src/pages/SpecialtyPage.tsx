import { CardGrid, PillList } from '../components/Cards';
import { ContactButton } from '../components/ContactButton';
import { Section } from '../components/Section';
import type { Specialty } from '../data/site';
import { clinic } from '../data/site';
import { setSeo } from '../utils/seo';

const seo = {
  odontologia: { title: 'Odontología en Santa Fe | Consultorios Lo Grau', description: 'Dr. Gustavo Adrián Badía: odontología general, implantes dentales, ortodoncia, prótesis y estética dental en Santa Fe.', keywords: ['odontólogo en Santa Fe', 'implantes dentales Santa Fe', 'ortodoncia Santa Fe'] },
  oftalmologia: { title: 'Oftalmología en Santa Fe | Consultorios Lo Grau', description: 'Oftalmología general, pediátrica, OCT, campo visual, glaucoma, cataratas y estudios complementarios en Santa Fe.', keywords: ['oftalmólogo en Santa Fe', 'oftalmología Santa Fe'] },
};

export function SpecialtyPage({ specialty }: { specialty: Specialty }) {
  setSeo({ ...seo[specialty.id], path: specialty.path });
  return <>
    <section className="page-hero"><p className="eyebrow">{clinic.name}</p><h1>{specialty.name}</h1><p>{specialty.summary}</p><ContactButton specialty={specialty} /></section>
    <Section eyebrow="Profesionales" title="Equipo médico"><div className="professionals">{specialty.professionals.map((name) => <article key={name}><span>{specialty.name}</span><strong>{name}</strong></article>)}</div></Section>
    <Section eyebrow="Servicios" title={specialty.id === 'oftalmologia' ? 'Servicios y estudios disponibles' : 'Tratamientos disponibles'} tone="soft"><PillList items={specialty.services} /></Section>
    <Section eyebrow="Beneficios" title="Atención pensada para cada paciente"><CardGrid items={specialty.highlights} /></Section>
    <Section eyebrow="Contacto" title="Coordiná tu consulta"><p className="lead">{specialty.contact.value}</p><ContactButton specialty={specialty} /></Section>
  </>;
}
