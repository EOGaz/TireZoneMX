import type { CSSProperties } from 'react';
import { BadgeCheck, Handshake, Timer } from 'lucide-react';
import { asset } from '../data';
import { Split } from './Split';

const VALUES = [
  { icon: BadgeCheck, title: 'Respaldo de fábrica', body: 'Distribuimos marcas originales con garantía directa del fabricante.' },
  { icon: Handshake, title: 'Asesoría honesta', body: 'Si una medida más económica te rinde igual, te la recomendamos.' },
  { icon: Timer, title: 'Respuesta rápida', body: 'Cotización en menos de 24 horas y seguimiento hasta la entrega.' },
];

export function About() {
  return (
    <section id="nosotros" data-inspo="about" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div data-reveal="cover" className="relative overflow-hidden rounded-lg lg:col-span-7">
            <img
              src={asset('nosotros-obra.jpg')}
              alt="Cargador frontal con llanta industrial trabajando en obra"
              loading="lazy"
              className="aspect-[16/11] w-full object-cover"
            />
            <span data-reveal="up" style={{ '--d': 8 } as CSSProperties} className="absolute bottom-4 left-4 rounded-md bg-ink/80 px-3 py-2 font-mono text-[12px] text-white backdrop-blur">
              Monterrey, NL · desde 2010
            </span>
          </div>
          <div className="lg:col-span-5">
            <p data-reveal="up" style={{ '--d': 1 } as CSSProperties} className="font-mono text-[12px] uppercase tracking-[0.16em] text-muted">Nosotros</p>
            <h2 data-reveal="words" style={{ '--d': 2 } as CSSProperties} className="mt-3 font-display text-3xl font-medium leading-[1.1] tracking-[-0.03em] text-fg sm:text-[44px]">
              <Split text="Desde Monterrey, para la industria del norte de México" />
            </h2>
            <p data-reveal="up" style={{ '--d': 6 } as CSSProperties} className="mt-6 text-[16px] leading-relaxed text-muted">
              TireZoneMX nació para resolver un problema sencillo: que las empresas consigan la llanta correcta, a tiempo y sin vueltas. Hoy surtimos a transportistas, agroindustrias, constructoras y mineras con inventario propio y asesoría técnica.
            </p>
            <p data-reveal="up" style={{ '--d': 7 } as CSSProperties} className="mt-4 text-[16px] leading-relaxed text-muted">
              Trabajamos directo con los fabricantes, así que cada llanta llega con su garantía y con alguien que responde por ella.
            </p>
          </div>
        </div>

        <ul className="mt-14 grid gap-4 md:grid-cols-3">
          {VALUES.map((v, i) => (
            <li key={v.title} data-reveal="up" style={{ '--d': i } as CSSProperties} className="rounded-md bg-mist p-6 sm:p-7">
              <v.icon className="h-5 w-5 text-accent" style={{ animation: `float-y 4s ease-in-out ${i * 0.6}s infinite` }} aria-hidden="true" />
              <h3 className="mt-6 font-display text-lg font-semibold text-fg">{v.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">{v.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
