import type { Specialty } from '../data/site';

export function ContactButton({ specialty }: { specialty: Specialty }) {
  const { contact } = specialty;
  const href = contact.whatsapp
    ? `https://wa.me/${contact.whatsapp.phone}?text=${encodeURIComponent(contact.whatsapp.message)}`
    : contact.href ?? '#contacto';
  return <a className="button button-primary" href={href} target={contact.whatsapp ? '_blank' : undefined} rel="noreferrer">{contact.label}</a>;
}
