import { clinic, specialties } from '../data/site';

export function Layout({ children }: { children: React.ReactNode }) {
  return <>
    <header className="site-header">
      <a className="brand" href="/" aria-label="Inicio Consultorios Lo Grau"><span>Lo Grau</span><small>Consultorios</small></a>
      <nav aria-label="Navegación principal">
        {specialties.map((item) => <a key={item.id} href={item.path}>{item.name}</a>)}
        <a href="#contacto">Contacto</a>
      </nav>
    </header>
    <main>{children}</main>
    <footer className="footer" id="contacto">
      <div><strong>{clinic.name}</strong><p>{clinic.address}</p></div>
      <div className="footer-links">{specialties.map((s) => <a key={s.id} href={s.path}>{s.name}</a>)}</div>
    </footer>
  </>;
}
