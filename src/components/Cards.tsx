export function CardGrid({ items }: { items: string[] }) {
  return <div className="card-grid">{items.map((item) => <article className="card" key={item}>{item}</article>)}</div>;
}

export function PillList({ items }: { items: string[] }) {
  return <div className="pill-list">{items.map((item) => <span key={item}>{item}</span>)}</div>;
}
