import type { CSSProperties } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { CONTACT, TESTIMONIALS } from '../data';
import { Split } from './Split';

type T = (typeof TESTIMONIALS)[number];

const initials = (name: string) =>
  name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('');

function Card({ t }: { t: T }) {
  return (
    <figure className="rounded-md border border-white/8 bg-white/[0.03] p-6">
      <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/45">{t.sector}</span>
      <blockquote className="mt-3 text-[15px] leading-relaxed text-white/85">“{t.quote}”</blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 font-display text-[13px] font-semibold text-white">
          {initials(t.name)}
        </span>
        <span>
          <span className="block text-[14px] font-medium text-white">{t.name}</span>
          <span className="block text-[13px] text-white/50">{t.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

// One drifting column; the list is rendered twice so the loop is seamless.
function Column({ items, duration, className = '' }: { items: T[]; duration: string; className?: string }) {
  return (
    <div className={className}>
      <div className="animate-drift space-y-4" style={{ ['--drift-duration' as string]: duration }}>
        {[...items, ...items].map((t, i) => (
          <div key={i} aria-hidden={i >= items.length}>
            <Card t={t} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  const left = TESTIMONIALS.filter((_, i) => i % 2 === 0);
  const right = TESTIMONIALS.filter((_, i) => i % 2 === 1);

  return (
    <section data-inspo="testimonials" className="overflow-hidden bg-ink py-20 text-white sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <p data-reveal="up" className="font-mono text-[12px] uppercase tracking-[0.16em] text-white/50">Clientes</p>
          <h2 data-reveal="words" style={{ '--d': 1 } as CSSProperties} className="mt-3 font-display text-3xl font-semibold leading-[1.1] tracking-[-0.03em] sm:text-5xl">
            <Split text="Empresas que no se detienen confían en nosotros" />
          </h2>
          <p data-reveal="up" style={{ '--d': 6 } as CSSProperties} className="mt-5 text-[16px] leading-relaxed text-white/60">
            Flotillas, agroindustrias, constructoras y mineras del norte de México compran con nosotros todos los meses.
          </p>
          <div data-reveal="up" style={{ '--d': 7 } as CSSProperties} className="mt-8 flex flex-wrap gap-3">
            <a href="#contacto" className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-[15px] font-semibold text-ink transition-colors hover:bg-white/90">
              Cotizar ahora
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href={CONTACT.whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 text-[15px] font-semibold text-white/90 transition-colors hover:border-white/40">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </div>

        <div data-reveal="fade" style={{ '--d': 3 } as CSSProperties} className="drift-group mask-fade-y relative grid h-[560px] gap-4 overflow-hidden sm:grid-cols-2 lg:col-span-7">
          <Column items={left} duration="38s" />
          <Column items={right} duration="46s" className="hidden sm:block sm:pt-16" />
        </div>
      </div>
    </section>
  );
}
