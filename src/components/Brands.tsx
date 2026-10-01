import type { CSSProperties } from 'react';
import { BRANDS, asset } from '../data';

export function Brands() {
  return (
    <section id="marcas" data-inspo="logos" className="bg-paper py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div data-reveal="up" className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-muted">Marcas</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.03em] text-fg sm:text-4xl">Marcas que distribuimos</h2>
          </div>
          <p className="max-w-sm text-[15px] text-muted">{BRANDS.length} fabricantes líderes, todos con garantía directa de fábrica.</p>
        </div>

        <ul className="mt-14 grid grid-cols-3 gap-x-8 gap-y-12 sm:grid-cols-5 sm:gap-x-14 sm:gap-y-16">
          {BRANDS.map((b, i) => (
            <li key={b.name} data-reveal="up" style={{ '--d': i % 5 + Math.floor(i / 5) } as CSSProperties} className="flex h-12 items-center justify-center sm:h-14">
              <img
                src={asset(b.image)}
                alt={b.name}
                loading="lazy"
                style={{ ['--s' as string]: b.scale ?? 1 }}
                className="max-h-full w-full object-contain mix-blend-multiply transition-transform duration-300 [transform:scale(min(var(--s),1.3))] hover:[transform:scale(calc(min(var(--s),1.3)*1.06))] sm:[transform:scale(var(--s))] sm:hover:[transform:scale(calc(var(--s)*1.06))]"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
