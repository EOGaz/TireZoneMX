import { useEffect, useRef } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import { Check, FileText, MapPin, MessageCircle, Truck } from 'lucide-react';

const css = (vars: Record<string, string | number>) => vars as CSSProperties;

function SizeMock() {
  return (
    <div className="loop-anim w-full max-w-sm space-y-3">
      <div className="flex items-center gap-3 rounded-md border border-fg/15 bg-paper px-4 py-3.5 font-mono text-[17px] text-fg shadow-sm">
        <span className="inline-block overflow-hidden whitespace-nowrap" style={css({ '--w': '16ch', animation: 'type-in 4.5s steps(16) infinite' })}>
          295/80R22.5 × 12
        </span>
        <span className="-ml-2 h-5 w-[2px] bg-accent" style={{ animation: 'caret 0.9s steps(1) infinite' }} />
      </div>
      {['11R24.5 × 8', '16.9-24 × 4'].map((t, i) => (
        <div key={t} className="flex items-center justify-between rounded-md border border-fg/10 bg-paper/70 px-4 py-3 font-mono text-[14px] text-muted">
          {t}
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-fg text-paper" style={{ animation: `pop-check 4.5s ${0.6 + i * 0.4}s infinite` }}>
            <Check className="h-3 w-3" />
          </span>
        </div>
      ))}
      <p className="flex items-center gap-2 text-[13px] text-muted">
        <MessageCircle className="h-4 w-4" /> También por WhatsApp o foto del costado
      </p>
    </div>
  );
}

function QuoteMock() {
  return (
    <div className="loop-anim w-full max-w-sm rounded-md bg-white/[0.06] p-5 ring-1 ring-white/10">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.12em] text-white/60">
          <FileText className="h-4 w-4" /> Cotización #2481
        </span>
        <span className="rounded-sm bg-accent px-2 py-1 font-mono text-[11px] text-white" style={{ animation: 'pulse-dot 2s infinite' }}>
          &lt; 24 h
        </span>
      </div>
      <div className="mt-6 space-y-4">
        {[
          ['295/80R22.5', 'Continental', 0],
          ['11R24.5', 'Sailun', 0.5],
          ['16.9-24', 'Titan', 1],
        ].map(([size, brand, d]) => (
          <div key={size as string}>
            <div className="flex justify-between font-mono text-[13px] text-white/80">
              <span>{size}</span>
              <span className="text-white/50">{brand}</span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div className="h-full origin-left rounded-full bg-white/70" style={{ animation: `fill-bar 3.6s ${d}s ease-out infinite` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-[14px]">
        <span className="text-white/60">Disponibilidad</span>
        <span className="font-mono text-white">En stock · Monterrey</span>
      </div>
    </div>
  );
}

function InvoiceMock() {
  return (
    <ul className="loop-anim w-full max-w-sm space-y-3">
      {['Orden de compra recibida', 'Factura CFDI 4.0 emitida', 'Crédito empresarial aplicado'].map((t, i) => (
        <li key={t} className="flex items-center gap-3 rounded-md bg-white/15 px-4 py-3.5 text-[15px] font-medium text-white ring-1 ring-white/20">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-accent" style={{ animation: `pop-check 4.2s ${i * 0.7}s infinite` }}>
            <Check className="h-3.5 w-3.5" strokeWidth={3} />
          </span>
          {t}
        </li>
      ))}
    </ul>
  );
}

function RouteMock() {
  return (
    <div className="loop-anim w-full max-w-sm rounded-md bg-white/[0.05] p-5 ring-1 ring-white/10">
      <div className="flex justify-between font-mono text-[12px] text-white/60">
        <span>Almacén Monterrey</span>
        <span>Obra · Saltillo</span>
      </div>
      <div className="relative mt-5 h-7">
        <div className="absolute inset-x-0 top-1/2 border-t-2 border-dashed border-white/20" />
        <span className="absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-white" />
        <span className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-accent" style={{ animation: 'pulse-dot 1.6s infinite' }} />
        <span className="absolute top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink" style={{ animation: 'drive 4s ease-in-out infinite' }}>
          <Truck className="h-4 w-4" />
        </span>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2 text-center">
        {[
          ['Salida', '08:30'],
          ['En ruta', '84 km'],
          ['Entrega', '24 h'],
        ].map(([k, v]) => (
          <div key={k} className="rounded-sm bg-white/[0.06] px-2 py-2">
            <p className="text-[11px] text-white/50">{k}</p>
            <p className="font-mono text-[14px] text-white">{v}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 flex items-center gap-2 text-[13px] text-white/60">
        <MapPin className="h-4 w-4" /> Patio, obra, rancho o mina
      </p>
    </div>
  );
}

type Step = { title: string; body: string; mock: () => ReactNode; theme: string; chip: string };

const STEPS: Step[] = [
  { title: 'Mándanos tu medida', body: 'Por el formulario, WhatsApp o una foto del costado. Dinos cuántas piezas y para qué aplicación.', mock: SizeMock, theme: 'bg-mist text-fg', chip: 'bg-fg text-paper' },
  { title: 'Recibe tu cotización', body: 'Precio, disponibilidad y recomendación técnica de un especialista en menos de 24 horas.', mock: QuoteMock, theme: 'bg-ink text-white', chip: 'bg-white text-ink' },
  { title: 'Confirma y factura', body: 'Orden de compra, factura CFDI al momento y crédito empresarial si eres cliente recurrente.', mock: InvoiceMock, theme: 'bg-accent text-white', chip: 'bg-white text-accent' },
  { title: 'Entrega en sitio', body: 'Salen de nuestro almacén en Monterrey directo a tu patio, obra, rancho o mina.', mock: RouteMock, theme: 'bg-graphite text-white', chip: 'bg-accent text-white' },
];

export function Process() {
  const cards = useRef<(HTMLLIElement | null)[]>([]);

  // Each card scales back a little as the next one slides over it.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const els = cards.current;
      els.forEach((el, i) => {
        const next = els[i + 1];
        if (!el || !next) return;
        const a = el.getBoundingClientRect();
        const b = next.getBoundingClientRect();
        const p = Math.min(Math.max((a.bottom - b.top) / a.height, 0), 1);
        el.style.transform = `scale(${1 - p * 0.06})`;
        el.style.filter = `brightness(${1 - p * 0.25})`;
      });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="proceso" data-inspo="process" className="bg-paper pb-24 pt-20 sm:pt-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div data-reveal="up" className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full border border-line px-3 py-1 font-mono text-[12px] uppercase tracking-[0.14em] text-muted">Cómo funciona</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.03em] text-fg sm:text-5xl">Cotiza en cuatro pasos</h2>
          <p className="mt-4 text-[16px] leading-relaxed text-muted">Sin catálogos eternos ni llamadas perdidas.</p>
        </div>

        <ol className="mt-14">
          {STEPS.map((s, i) => (
            <li
              key={s.title}
              ref={(el) => {
                cards.current[i] = el;
              }}
              className={`sticky mt-[8vh] grid first:mt-0 min-h-[440px] origin-top items-center gap-10 overflow-hidden rounded-lg p-7 transition-[filter] sm:p-12 lg:grid-cols-2 ${s.theme}`}
              style={{ top: `calc(96px + ${i * 22}px)` }}
            >
              <div data-reveal="left">
                <span className={`inline-flex rounded-sm px-2.5 py-1 font-mono text-[12px] uppercase tracking-[0.12em] ${s.chip}`}>Paso {i + 1} de 4</span>
                <p className="mt-8 font-display text-[88px] font-semibold leading-none tracking-[-0.05em] opacity-20 sm:text-[120px]">0{i + 1}</p>
                <h3 className="mt-2 font-display text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">{s.title}</h3>
                <p className="mt-3 max-w-md text-[16px] leading-relaxed opacity-75">{s.body}</p>
              </div>
              <div data-reveal="right" style={{ '--d': 2 } as CSSProperties} className="flex justify-center lg:justify-end">
                <s.mock />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
