import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { STATS } from '../data';
import { Tire3D } from './Tire3D';

const fmt = new Intl.NumberFormat('es-MX');

// Counts from 0 to `to` once the element scrolls into view.
function useCountUp(to: number, ms = 1400) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(to);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / ms, 1);
          setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        setN(0);
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, ms]);

  return [ref, n] as const;
}

function Stat({ value, prefix, suffix, label, d }: (typeof STATS)[number] & { d: number }) {
  const [ref, n] = useCountUp(value);
  return (
    <li data-reveal="up" style={{ '--d': d } as CSSProperties}>
      <p className="font-display text-5xl font-semibold tracking-[-0.04em] text-white/90 sm:text-6xl">
        <span className="text-white/40">{prefix}</span>
        <span ref={ref}>{fmt.format(n)}</span>
        <span className="text-white/40">{suffix}</span>
      </p>
      <span className="grow-x mt-5 block h-[2px] w-6 bg-accent" aria-hidden="true" />
      <p className="mt-4 max-w-[16rem] text-[15px] text-white/60">{label}</p>
    </li>
  );
}

export function Stats() {
  return (
    <section data-inspo="stats" className="overflow-hidden bg-graphite py-20 text-white sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p data-reveal="up" className="font-mono text-[12px] uppercase tracking-[0.16em] text-accent">En números</p>
          <h2 data-reveal="up" style={{ '--d': 1 } as CSSProperties} className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-[1.1] tracking-[-0.03em] sm:text-5xl">
            <span className="text-white/45">Más de 15 años moviendo</span> a la industria del norte del país.
          </h2>
          <ul className="mt-14 grid grid-cols-2 gap-x-8 gap-y-12">
            {STATS.map((s, i) => (
              <Stat key={s.label} {...s} d={i + 2} />
            ))}
          </ul>
        </div>
        <div data-reveal="scale" style={{ '--d': 2 } as CSSProperties} className="relative lg:col-span-5">
          <Tire3D className="mx-auto aspect-square w-full max-w-[520px]" />
          <p className="mt-2 text-center font-mono text-[11px] uppercase tracking-[0.14em] text-white/40">29.5R25 · L-3 · Arrastra para girar</p>
        </div>
      </div>
    </section>
  );
}
