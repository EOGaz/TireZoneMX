import { useEffect, useRef, useState } from 'react';
import type { CSSProperties, FormEvent } from 'react';
import { ArrowRight } from 'lucide-react';
import { SECTORS, parseSize } from '../data';
import type { Quote } from '../data';

type Props = { onQuote: (q: Quote) => void };

const DEMO = ['295/80R22.5', '16.9-24', '29.5R25', 'LT285/70R17', '12.5/80-18', '11R22.5'];
const STEP_MS = 900;

// Tire size explainer: cycles through demo sizes, highlighting one part at a time; typing takes over.
export function SizeDecoder({ onQuote }: Props) {
  const [demo, setDemo] = useState(0);
  const [step, setStep] = useState(-1);
  const [input, setInput] = useState('');
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const typed = input ? parseSize(input) : null;
  const shown = typed ?? parseSize(DEMO[demo])!;
  const shownSize = typed ? input.toUpperCase().replace(/\s+/g, '') : DEMO[demo];
  const sector = SECTORS.find((s) => s.id === shown.sector)!;
  const active = typed ? -1 : step;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (input || !visible || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = window.setTimeout(() => {
      if (step + 1 >= shown.parts.length) {
        setDemo((d) => (d + 1) % DEMO.length);
        setStep(-1);
      } else setStep(step + 1);
    }, STEP_MS);
    return () => window.clearTimeout(t);
  }, [step, input, visible, shown.parts.length]);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    onQuote({ size: input.trim().toUpperCase(), sector: typed ? shown.sector : '' });
  };

  const label = `${shown.parts.map((p) => p.token).join('')}  ·  TIREZONEMX  ·  ${sector.name.toUpperCase()}  ·  `;

  return (
    <section ref={ref} data-inspo="search" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-12">
        <div data-reveal="scale" className="flex justify-center lg:col-span-5">
          <svg viewBox="0 0 220 220" className="w-full max-w-[260px] sm:max-w-[380px]" aria-hidden="true">
            <defs>
              <path id="sidewall" d="M110,110 m-86,0 a86,86 0 1,1 172,0 a86,86 0 1,1 -172,0" />
            </defs>
            <g className="animate-spin-slow">
              <circle cx="110" cy="110" r="108" fill="var(--color-ink)" />
              <text className="font-mono" fontSize="11" fontWeight="700" letterSpacing="1.3" fill="rgb(255 255 255 / 0.45)">
                <textPath href="#sidewall" textLength="532" lengthAdjust="spacing">
                  {label}
                  {label}
                </textPath>
              </text>
              <circle cx="110" cy="110" r="66" fill="var(--color-mist)" />
              <circle cx="110" cy="110" r="24" fill="var(--color-paper)" stroke="var(--color-line)" />
              {Array.from({ length: 8 }, (_, i) => {
                const a = (i / 8) * Math.PI * 2;
                return <circle key={i} cx={110 + Math.cos(a) * 44} cy={110 + Math.sin(a) * 44} r="4.5" fill="rgb(15 15 16 / 0.3)" />;
              })}
            </g>
          </svg>
        </div>

        <div className="lg:col-span-7">
          <p data-reveal="up" style={{ '--d': 1 } as CSSProperties} className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.16em] text-muted">
            Lee tu medida
            <span className="rounded-sm bg-fg px-2 py-1 text-[11px] tracking-[0.1em] text-paper">{sector.name}</span>
          </p>
          <p className="mt-4 whitespace-nowrap font-mono text-[40px] font-medium leading-none tracking-[-0.02em] text-fg sm:text-[64px]" aria-live="polite">
            {shown.parts.map((p, i) => (
              <span
                key={`${shownSize}-${i}`}
                className={`border-b-[3px] pb-1 transition-colors duration-300 ${i === active ? 'border-accent text-accent' : 'border-transparent'}`}
              >
                {p.token}
              </span>
            ))}
          </p>
          <ol data-reveal="up" style={{ '--d': 3 } as CSSProperties} className="mt-8 border-t border-line">
            {shown.parts.map((p, i) => (
              <li
                key={`${shownSize}-${i}`}
                className={`grid grid-cols-[7rem_1fr] gap-4 border-b border-line py-3 text-[15px] transition-colors duration-300 ${i === active ? 'text-fg' : 'text-muted'}`}
              >
                <b className={`font-mono font-medium ${i === active ? 'text-accent' : 'text-fg'}`}>{p.token.replace('/', '')}</b>
                {p.label}
              </li>
            ))}
          </ol>
          <form onSubmit={submit} data-reveal="up" style={{ '--d': 5 } as CSSProperties} className="mt-6 flex flex-col gap-2 sm:flex-row">
            <label className="flex-1">
              <span className="sr-only">Escribe tu medida</span>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe tu medida: 11R22.5"
                autoComplete="off"
                className="h-12 w-full rounded-md border border-line bg-mist px-4 font-mono text-[15px] uppercase placeholder:normal-case placeholder:text-muted focus:border-fg focus:outline-none"
              />
            </label>
            <button type="submit" className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-accent px-6 text-[15px] font-semibold text-white transition-colors hover:bg-accent-hover">
              {typed ? `Cotizar ${shownSize}` : 'Cotizar esta medida'}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>
          {input && !typed && <p className="mt-2 text-[13px] text-muted">No reconocemos ese formato, pero igual te cotizamos: mándanosla y la revisa un asesor.</p>}
        </div>
      </div>
    </section>
  );
}
