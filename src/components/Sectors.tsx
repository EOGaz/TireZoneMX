import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { ArrowRight } from 'lucide-react';
import { SECTORS, asset } from '../data';
import type { Quote, SectorId } from '../data';

type Props = { onQuote: (q: Quote) => void };

// Tread patterns used as masks (white = rubber). Each tile repeats vertically, so the panel reads as a rolling tire.
const TREADS: Record<SectorId, { h: number; svg: string }> = {
  agricola: {
    h: 120,
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120"><g fill="#fff"><path d="M4 70 L56 20 L56 46 L18 82Z"/><path d="M116 10 L64 60 L64 86 L102 48Z"/></g></svg>',
  },
  otr: {
    h: 96,
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="96"><g fill="#fff"><rect x="4" y="6" width="50" height="36" rx="3"/><rect x="66" y="6" width="50" height="36" rx="3"/><rect x="-26" y="54" width="50" height="36" rx="3"/><rect x="36" y="54" width="48" height="36" rx="3"/><rect x="96" y="54" width="50" height="36" rx="3"/></g></svg>',
  },
  tbr: {
    h: 40,
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="40"><g fill="none" stroke="#fff" stroke-width="14" stroke-linejoin="bevel"><path d="M14 0 l8 10 l-8 10 l8 10 l-8 10"/><path d="M46 0 l8 10 l-8 10 l8 10 l-8 10"/><path d="M74 0 l-8 10 l8 10 l-8 10 l8 10"/><path d="M106 0 l-8 10 l8 10 l-8 10 l8 10"/></g></svg>',
  },
  auto: {
    h: 64,
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="64"><g fill="#fff"><path d="M4 4h22l4 12-4 12H4z"/><path d="M36 6h22v22H40l-4-10z"/><path d="M64 4h22l-2 12 6 12H64z"/><path d="M96 6h20v22H98l-4-12z"/><path d="M14 36h22l4 12-4 12H14z"/><path d="M46 36h20l2 12-2 12H46z"/><path d="M76 36h22l-2 12 4 12H76z"/></g></svg>',
  },
};

const CYCLE_MS = 4500;

export function Sectors({ onQuote }: Props) {
  const [active, setActive] = useState(0);
  const [hold, setHold] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (hold || !visible || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = window.setTimeout(() => setActive((i) => (i + 1) % SECTORS.length), CYCLE_MS);
    return () => window.clearTimeout(t);
  }, [active, hold, visible]);

  return (
    <section id="catalogo" data-inspo="catalog" className="bg-mist py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div data-reveal="up" className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-muted">Catálogo</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.03em] text-fg sm:text-5xl">Encuentra tu llanta por sector</h2>
          </div>
          <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-muted">04 sectores · 15 marcas</span>
        </div>

        <div
          ref={ref}
          data-reveal="up"
          style={{ '--d': 2 } as CSSProperties}
          className="mt-12 flex h-[680px] flex-col gap-2 md:h-[460px] md:flex-row"
          onMouseLeave={() => setHold(false)}
        >
          {SECTORS.map((s, i) => {
            const on = i === active;
            const t = TREADS[s.id];
            const mask = `url("data:image/svg+xml,${encodeURIComponent(t.svg)}")`;
            return (
              <div
                key={s.id}
                role="button"
                tabIndex={0}
                aria-expanded={on}
                aria-label={s.name}
                onMouseEnter={() => {
                  setActive(i);
                  setHold(true);
                }}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`group relative min-h-0 min-w-0 cursor-pointer overflow-hidden rounded-md bg-ink text-white transition-[flex-grow] duration-700 ease-[cubic-bezier(.7,0,.2,1)] ${
                  on ? 'grow-[5]' : 'grow'
                } basis-0`}
              >
                {/* Rolling tread */}
                <div
                  className="tread absolute inset-0 bg-white transition-opacity duration-500"
                  style={{
                    maskImage: mask,
                    WebkitMaskImage: mask,
                    opacity: on ? 0.1 : 0.07,
                    ['--step' as string]: `${t.h}px`,
                    ['--dur' as string]: `${(t.h / 36).toFixed(2)}s`,
                  }}
                />

                {/* Photo on the expanded panel (desktop) */}
                <img
                  src={asset(s.image)}
                  alt=""
                  loading="lazy"
                  className={`absolute inset-y-0 right-0 hidden h-full w-[55%] object-cover transition-opacity duration-700 lg:block ${on ? 'opacity-100' : 'opacity-0'}`}
                />
                <div className="absolute inset-y-0 right-0 hidden w-[55%] bg-gradient-to-r from-ink via-ink/40 to-transparent lg:block" />

                <span className={`absolute left-5 top-5 font-mono text-[12px] tracking-[0.1em] ${on ? 'text-accent' : 'text-white/55'}`}>
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Collapsed label */}
                <span
                  className={`absolute bottom-5 left-5 whitespace-nowrap font-display text-[17px] font-semibold transition-opacity duration-300 md:[writing-mode:vertical-rl] md:rotate-180 ${
                    on ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  {s.name}
                </span>

                {/* Expanded content */}
                <div
                  className={`absolute inset-x-5 bottom-5 min-w-[17rem] max-w-md transition-all duration-500 sm:inset-x-7 sm:bottom-7 ${
                    on ? 'translate-y-0 opacity-100 delay-300' : 'pointer-events-none translate-y-3 opacity-0'
                  }`}
                >
                  <p className="flex items-center gap-2 text-[13px] text-white/60">
                    <s.icon className="h-4 w-4" aria-hidden="true" />
                    {s.tagline}
                  </p>
                  <h3 className="mt-2 font-display text-3xl font-semibold tracking-[-0.03em]">{s.name}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-white/70">{s.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {s.sizes.map((size) => (
                      <span key={size} className="rounded-sm border border-white/25 px-2 py-1 font-mono text-[12px] text-white/80">
                        {size}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center justify-between gap-4 border-t border-white/15 pt-4">
                    <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-white/55">{s.brands}</span>
                    <button
                      type="button"
                      tabIndex={on ? 0 : -1}
                      onClick={(e) => {
                        e.stopPropagation();
                        onQuote({ size: '', sector: s.id });
                      }}
                      className="inline-flex shrink-0 items-center gap-1.5 text-[14px] font-semibold text-white hover:text-accent"
                    >
                      Cotizar
                      <ArrowRight className="h-4 w-4 text-accent" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
