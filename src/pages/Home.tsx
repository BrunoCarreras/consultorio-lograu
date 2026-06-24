import { CardGrid } from '../components/Cards';
import { Section } from '../components/Section';
import { clinic, specialties } from '../data/site';
import { setSeo } from '../utils/seo';

export function Home() {
  setSeo({ title: 'Consultorios Lo Grau | Centro médico en Santa Fe', description: 'Odontología y Oftalmología en Santa Fe con atención profesional y personalizada en Consultorios Lo Grau.', keywords: ['consultorios en Santa Fe', 'odontólogo en Santa Fe', 'oftalmólogo en Santa Fe'] });
  return <>
    <section className="hero">
      <div className="hero-copy"><p className="eyebrow">Centro médico privado en Santa Fe</p><h1>{clinic.name}</h1><p>{clinic.subtitle}</p><div className="actions"><a className="button button-primary" href="/odontologia">Ver Odontología</a><a className="button button-secondary" href="/oftalmologia">Ver Oftalmología</a></div></div>
      <div className="hero-panel"><span>Atención profesional</span><strong>Salud integral con calidez, criterio y tecnología.</strong></div>
    </section>
    <Section eyebrow="Institucional" title="Un espacio moderno para cuidar tu salud">
      <p className="lead">Consultorios Lo Grau reúne especialidades médicas en una propuesta boutique: atención personalizada, profesionales con trayectoria y una experiencia pensada para que cada consulta sea clara, cómoda y confiable.</p>
    </Section>
    <Section eyebrow="Especialidades" title="Áreas disponibles" tone="soft"><div className="specialty-grid">{specialties.map((s) => <a className="specialty-card" href={s.path} key={s.id}><h3>{s.name}</h3><p>{s.summary}</p><span>Conocer más →</span></a>)}</div></Section>
    <Section eyebrow="Beneficios" title="Una experiencia cercana y profesional"><CardGrid items={['Ubicación accesible en Santa Fe', 'Consultas con orientación personalizada', 'Especialidades escalables en un mismo centro', 'Ambiente cálido, minimalista y no hospitalario']} /></Section>
    <Section eyebrow="Ubicación" title="Av. General Paz 5230"><p className="lead">Nos encontramos en {clinic.address}, con atención para pacientes de Santa Fe y alrededores.</p></Section>
  </>;
}
