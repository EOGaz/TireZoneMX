import type { CSSProperties } from 'react';
import { MessageCircle, Plus } from 'lucide-react';
import { CONTACT, FAQS } from '../data';

export function Faq() {
  return (
    <section id="faq" data-inspo="faq" className="bg-mist py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-12">
        <div data-reveal="up" className="lg:col-span-4">
          <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-muted">Preguntas frecuentes</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.03em] text-fg sm:text-4xl">Lo que más nos preguntan</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">¿No encuentras tu respuesta? Escríbenos y un asesor te contesta.</p>
          <a href={CONTACT.whatsappHref} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-fg hover:text-accent">
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Preguntar por WhatsApp
          </a>
        </div>

        <div className="border-t border-line lg:col-span-8">
          {FAQS.map((f, i) => (
            <details key={f.q} data-reveal="up" style={{ '--d': i + 1 } as CSSProperties} className="group border-b border-line">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-display text-[17px] font-medium text-fg [&::-webkit-details-marker]:hidden">
                {f.q}
                <Plus className="h-5 w-5 shrink-0 text-muted transition-transform duration-300 group-open:rotate-45 group-open:text-accent" aria-hidden="true" />
              </summary>
              <p className="faq-a -mt-1 max-w-2xl pb-6 text-[15px] leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
