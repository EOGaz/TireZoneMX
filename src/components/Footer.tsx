import type { CSSProperties } from 'react';
import { ArrowRight, ArrowUpRight, Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { CONTACT, SECTORS } from '../data';
import { Split } from './Split';
import { Wordmark } from './Wordmark';

const COLUMNS = [
  { title: 'Llantas', links: SECTORS.map((s) => ({ label: s.name, href: '#catalogo' })) },
  {
    title: 'Empresa',
    links: [
      { label: 'Nosotros', href: '#nosotros' },
      { label: 'Marcas', href: '#marcas' },
      { label: 'Cómo funciona', href: '#proceso' },
      { label: 'Preguntas frecuentes', href: '#faq' },
    ],
  },
  {
    title: 'Servicio',
    links: [
      { label: 'Cotizar por medida', href: '#cotizar' },
      { label: 'Entrega en sitio', href: '#empresas' },
      { label: 'Crédito empresarial', href: '#empresas' },
      { label: 'Garantías', href: '#faq' },
    ],
  },
];

export function Footer() {
  return (
    <footer data-inspo="footer" className="relative overflow-hidden bg-ink text-white">
      {/* CTA band */}
      <div className="relative border-b border-white/10">
        <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-accent/25 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-5 py-16 sm:px-8 md:flex-row md:items-end md:justify-between sm:py-20">
          <div>
            <p data-reveal="up" className="font-mono text-[12px] uppercase tracking-[0.16em] text-white/50">¿Tienes la medida?</p>
            <h2 data-reveal="words" style={{ '--d': 1 } as CSSProperties} className="mt-3 max-w-xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-6xl">
              <Split text="Te cotizamos" /> <span className="text-accent"><Split text="hoy mismo." start={2} /></span>
            </h2>
          </div>
          <div data-reveal="up" style={{ '--d': 4 } as CSSProperties} className="flex flex-wrap gap-3">
            <a href="#contacto" className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-4 text-[15px] font-semibold transition-colors hover:bg-accent-hover">
              Cotizar ahora
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href={CONTACT.whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-4 text-[15px] font-semibold transition-colors hover:border-white/50">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Directory */}
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12">
        <div data-reveal="up" className="lg:col-span-5">
          <Wordmark className="text-[22px]" />
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-white/55">
            Distribuidor de llantas agrícolas, industriales/OTR, TBR y de camioneta para empresas del norte de México.
          </p>
          <ul className="mt-8 space-y-3 text-[15px]">
            <li>
              <a href={CONTACT.phoneHref} className="group inline-flex items-center gap-3 font-display text-2xl font-semibold tracking-[-0.02em] hover:text-accent">
                <Phone className="h-5 w-5 text-accent" aria-hidden="true" />
                {CONTACT.phone}
              </a>
            </li>
            <li className="flex items-center gap-3 text-white/70">
              <Mail className="h-4 w-4 text-white/40" aria-hidden="true" />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-white">{CONTACT.email}</a>
            </li>
            <li className="flex items-center gap-3 text-white/70">
              <Clock className="h-4 w-4 text-white/40" aria-hidden="true" />
              {CONTACT.hours}
            </li>
            <li className="flex items-center gap-3 text-white/70">
              <MapPin className="h-4 w-4 text-white/40" aria-hidden="true" />
              {CONTACT.city}
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
          {COLUMNS.map((c, i) => (
            <div key={c.title} data-reveal="up" style={{ '--d': i + 1 } as CSSProperties}>
              <h3 className="font-mono text-[12px] uppercase tracking-[0.16em] text-white/45">{c.title}</h3>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="group inline-flex items-center gap-1 text-[15px] text-white/80 transition-colors hover:text-white">
                      {l.label}
                      <ArrowUpRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Poster wordmark */}
      <div className="pointer-events-none select-none px-3" aria-hidden="true">
        <p data-reveal="words" className="whitespace-nowrap text-center font-display text-[15.5vw] font-bold leading-[0.8] tracking-[-0.06em] text-white/[0.06]">
          <Split text="TIREZONE" letters />
          <span className="text-accent/30">
            <Split text="MX" letters start={8} />
          </span>
        </p>
      </div>

      {/* Legal */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-[13px] text-white/45 sm:px-8 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} TireZoneMX · {CONTACT.city}</span>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#" className="hover:text-white">Aviso de privacidad</a>
            <a href="#" className="hover:text-white">Términos</a>
            <a href="#inicio" className="hover:text-white">Volver arriba ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
