export function Section({ eyebrow, title, children, tone = 'default' }: { eyebrow?: string; title: string; children: React.ReactNode; tone?: 'default' | 'soft' }) {
  return <section className={`section section-${tone}`}>
    <div className="section-heading">{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h2>{title}</h2></div>
    {children}
  </section>;
}
