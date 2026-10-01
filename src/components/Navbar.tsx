import { useEffect, useState } from 'react';
import { Mail, Menu, MessageCircle, Phone, X } from 'lucide-react';
import { CONTACT } from '../data';
import { Wordmark } from './Wordmark';

const LINKS = [
  { href: '#catalogo', label: 'Llantas' },
  { href: '#marcas', label: 'Marcas' },
  { href: '#empresas', label: 'Empresas' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#faq', label: 'Preguntas' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header
      data-inspo="navbar"
      className={`fixed inset-x-0 top-0 z-50 animate-[nav-in_0.8s_cubic-bezier(.2,.7,.2,1)_both] transition-colors duration-200 ${
        scrolled || open ? 'border-b border-white/8 bg-ink/92 backdrop-blur-md' : 'bg-gradient-to-b from-ink/70 to-transparent'
      }`}
    >
      {/* Utility strip */}
      <div
        className={`hidden overflow-hidden border-b border-white/8 text-[13px] text-white/60 transition-[max-height] duration-200 lg:block ${
          scrolled ? 'max-h-0 border-transparent' : 'max-h-10'
        }`}
      >
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-8">
          <span>
            {CONTACT.city} · {CONTACT.hours}
          </span>
          <div className="flex items-center gap-6">
            <a href={CONTACT.phoneHref} className="hover:text-white">{CONTACT.phone}</a>
            <a href={CONTACT.whatsappHref} target="_blank" rel="noreferrer" className="hover:text-white">WhatsApp</a>
            <a href={`mailto:${CONTACT.email}`} className="hover:text-white">{CONTACT.email}</a>
          </div>
        </div>
      </div>

      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-6 px-5 sm:px-8" aria-label="Principal">
        <a href="#inicio" className="text-[19px]" aria-label="TireZoneMX, inicio">
          <Wordmark />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-[14px] font-medium text-white/75 transition-colors hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-5 lg:flex">
          <a href={CONTACT.phoneHref} className="flex items-center gap-2 text-[14px] font-medium text-white/75 hover:text-white">
            <Phone className="h-4 w-4" aria-hidden="true" />
            Llámanos
          </a>
          <a
            href="#contacto"
            className="rounded-md bg-accent px-4 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            Cotizar
          </a>
        </div>

        <button
          type="button"
          className="-mr-2 rounded-lg p-2 text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div id="menu-movil" className="h-[calc(100svh-72px)] overflow-y-auto border-t border-white/8 bg-ink px-5 pb-10 pt-4 lg:hidden">
          <ul>
            {LINKS.map((l) => (
              <li key={l.href} className="border-b border-white/8">
                <a href={l.href} onClick={() => setOpen(false)} className="block py-4 font-display text-2xl font-medium text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-8 block rounded-md bg-accent py-3.5 text-center font-semibold text-white"
          >
            Cotizar por medida
          </a>
          <div className="mt-8 space-y-4 text-white/70">
            <a href={CONTACT.phoneHref} className="flex items-center gap-3"><Phone className="h-4 w-4" />{CONTACT.phone}</a>
            <a href={CONTACT.whatsappHref} className="flex items-center gap-3"><MessageCircle className="h-4 w-4" />WhatsApp</a>
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3"><Mail className="h-4 w-4" />{CONTACT.email}</a>
          </div>
        </div>
      )}
    </header>
  );
}
