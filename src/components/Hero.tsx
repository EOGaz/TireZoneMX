import { useState } from 'react';
import type { CSSProperties, FormEvent } from 'react';
import { ArrowRight, Search } from 'lucide-react';
import { SECTORS, asset, decodeSize } from '../data';
import { Split } from './Split';
import type { Quote, SectorId } from '../data';

type Props = { onQuote: (q: Quote) => void };

export function Hero({ onQuote }: Props) {
  const [size, setSize] = useState('');
  const [sector, setSector] = useState<SectorId | ''>('');
  const decoded = size ? decodeSize(size) : null;

  const submit = (e: FormEvent) => {
    e.preventDefault();
    onQuote({ size: size.trim().toUpperCase(), sector });
  };

  return (
    <section id="inicio" data-inspo="hero" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <img
          src={asset('hero-raptor-r.jpg')}
          alt=""
          fetchPriority="high"
          className="animate-kenburns h-full w-full object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(11_11_12/0.88)_0%,rgb(11_11_12/0.55)_38%,rgb(11_11_12/0)_70%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink/70 to-transparent" />
        <div className="absolute inset-0 bg-ink/45 md:hidden" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/90 to-transparent" />
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-1 items-center px-5 pb-10 pt-36 sm:px-8 lg:pt-44">
        <div className="max-w-2xl">
          <p data-reveal="up" style={{ '--d': 1 } as CSSProperties} className="font-mono text-[12px] uppercase tracking-[0.16em] text-white/70">Distribuidor · Monterrey, NL</p>
          <h1 data-reveal="words" style={{ '--d': 2 } as CSSProperties} className="mt-5 font-display text-[44px] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-[76px]">
            <Split text="Llantas para la operación que no se detiene" />
          </h1>
          <p data-reveal="up" style={{ '--d': 7 } as CSSProperties} className="mt-6 max-w-xl text-[17px] leading-relaxed text-white/75">
            Agrícolas, industriales/OTR, TBR y de camioneta de 15 marcas líderes para empresas del norte de México. Mándanos tu medida y te cotizamos en menos de 24 horas.
          </p>
          <div data-reveal="up" style={{ '--d': 8 } as CSSProperties} className="mt-9 flex flex-wrap gap-3">
            <a href="#cotizar" className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3.5 text-[15px] font-semibold transition-colors hover:bg-accent-hover">
              Cotizar por medida
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#catalogo" className="inline-flex items-center rounded-md border border-white/25 px-5 py-3.5 text-[15px] font-semibold text-white/90 backdrop-blur-sm transition-colors hover:border-white/50 hover:text-white">
              Ver catálogo
            </a>
          </div>
        </div>
      </div>

      {/* Quote-by-size bar */}
      <div id="cotizar" data-reveal="up" style={{ '--d': 10 } as CSSProperties} className="mx-auto w-full max-w-7xl px-5 pb-8 sm:px-8">
        <form onSubmit={submit} className="rounded-lg bg-white p-3 text-fg shadow-[0_30px_80px_-30px_rgb(0_0_0/0.6)] sm:p-4">
          <div className="grid gap-3 md:grid-cols-[auto_1fr_220px_auto] md:items-center">
            <div className="hidden px-2 md:block">
              <p className="font-display text-[17px] font-semibold tracking-[-0.01em]">Cotiza por medida</p>
              <p className="text-[13px] text-muted">Respuesta en menos de 24 h</p>
            </div>
            <label className="relative block">
              <span className="sr-only">Medida de llanta</span>
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" aria-hidden="true" />
              <input
                value={size}
                onChange={(e) => setSize(e.target.value)}
                placeholder="Escribe tu medida: 11R22.5"
                className="h-12 w-full rounded-md border border-line bg-mist pl-10 pr-3 font-mono text-[15px] uppercase placeholder:normal-case placeholder:text-muted focus:border-fg focus:outline-none"
                autoComplete="off"
              />
            </label>
            <label className="block">
              <span className="sr-only">Sector</span>
              <select
                value={sector}
                onChange={(e) => setSector(e.target.value as SectorId | '')}
                className="h-12 w-full rounded-md border border-line bg-mist px-3 text-[15px] focus:border-fg focus:outline-none"
              >
                <option value="">Sector (opcional)</option>
                {SECTORS.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
              </select>
            </label>
            <button type="submit" className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-accent px-6 text-[15px] font-semibold text-white transition-colors hover:bg-accent-hover">
              Cotizar
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
          <p className="px-2 font-mono text-[12px] text-muted empty:hidden [&:not(:empty)]:mt-2" aria-live="polite">
            {decoded ? decoded.join(' · ') : size ? 'Formato libre: también aceptamos fotos del costado por WhatsApp.' : ''}
          </p>
        </form>
      </div>
    </section>
  );
}
