import { useState } from 'react';
import type { CSSProperties, FormEvent, InputHTMLAttributes } from 'react';
import { ArrowLeft, ArrowRight, Check, Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { CONTACT, SECTORS, asset } from '../data';
import type { Quote, SectorId } from '../data';

type Props = { initial?: Quote | null };

const inputCls =
  'mt-1.5 h-11 w-full rounded-md border border-white/12 bg-white/[0.06] px-3 text-[15px] text-white placeholder:text-white/35 focus:border-white/60 focus:bg-white/[0.09] focus:outline-none';

function Field({ label, required, className = '', ...input }: InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-[13px] font-medium text-white/80">
        {label}
        {required && <span className="text-accent"> *</span>}
      </span>
      <input required={required} {...input} className={inputCls} />
    </label>
  );
}

const DIRECT = [
  { icon: Phone, label: 'Teléfono', value: CONTACT.phone, href: CONTACT.phoneHref },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Escríbenos tu medida', href: CONTACT.whatsappHref },
  { icon: Mail, label: 'Correo', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: Clock, label: 'Horario', value: CONTACT.hours },
  { icon: MapPin, label: 'Ubicación', value: CONTACT.city },
];

export function Contact({ initial }: Props) {
  const [sector, setSector] = useState<SectorId | ''>(initial?.sector ?? '');
  const [step, setStep] = useState(initial?.sector ? 2 : 1);
  const [sent, setSent] = useState(false);
  const chosen = SECTORS.find((s) => s.id === sector);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: connect to EmailJS / Firebase (pending in ADVANCES.md).
    setSent(true);
  };

  return (
    <section id="contacto" data-inspo="contact" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p data-reveal="up" className="font-mono text-[12px] uppercase tracking-[0.16em] text-muted">Contacto</p>
          <h2 data-reveal="up" style={{ '--d': 1 } as CSSProperties} className="mt-3 font-display text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-fg sm:text-[44px]">
            Cotiza con un asesor.
            <span className="block text-accent">Respuesta en menos de 24 h.</span>
          </h2>
          <p data-reveal="up" style={{ '--d': 2 } as CSSProperties} className="mt-6 max-w-md text-[16px] leading-relaxed text-muted">
            Cuéntanos qué medida y cuántas piezas necesitas. Un especialista revisa tu aplicación y te manda precio, disponibilidad y recomendación.
          </p>
          <dl className="mt-10 divide-y divide-line border-y border-line">
            {DIRECT.map((d, i) => (
              <div key={d.label} data-reveal="left" style={{ '--d': i + 3 } as CSSProperties} className="flex items-center gap-4 py-3.5">
                <d.icon className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <dt className="w-24 shrink-0 text-[14px] text-muted">{d.label}</dt>
                <dd className="text-[14px] font-medium text-fg">
                  {d.href ? (
                    <a href={d.href} className="hover:text-accent" {...(d.href.startsWith('http') && { target: '_blank', rel: 'noreferrer' })}>
                      {d.value}
                    </a>
                  ) : (
                    d.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div data-reveal="right" style={{ '--d': 2 } as CSSProperties} className="lg:col-span-7">
          <div className="relative overflow-hidden rounded-lg bg-ink p-5 text-white sm:p-8">
            {/* Color wash from the chosen sector's photo */}
            {chosen && (
              <img src={asset(chosen.image)} alt="" aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.18] blur-sm" />
            )}
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/35 blur-3xl" style={{ animation: 'float-y 6s ease-in-out infinite' }} aria-hidden="true" />

            <div className="relative">
              {/* Progress */}
              <div className="mb-6 flex gap-1.5" aria-hidden="true">
                {[1, 2].map((n) => (
                  <span key={n} className={`h-1 flex-1 rounded-full ${sent || step >= n ? 'bg-accent' : 'bg-white/15'}`} />
                ))}
              </div>

              {sent ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white">
                    <Check className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-semibold">Recibimos tu solicitud</h3>
                  <p className="mt-2 max-w-sm text-[15px] text-white/65">Un asesor te contacta en menos de 24 horas hábiles. Si es urgente, escríbenos por WhatsApp.</p>
                </div>
              ) : step === 1 ? (
                <div>
                  <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-white/55">Paso 1 de 2</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold tracking-[-0.02em]">¿Para qué sector son las llantas?</h3>
                  <div className="mt-6 grid grid-cols-2 gap-3" role="radiogroup" aria-label="Sector">
                    {SECTORS.map((s) => {
                      const on = sector === s.id;
                      return (
                        <button
                          key={s.id}
                          type="button"
                          role="radio"
                          aria-checked={on}
                          onClick={() => setSector(s.id)}
                          className={`group relative flex min-h-[132px] flex-col items-start justify-between overflow-hidden rounded-md p-4 text-left ring-2 transition ${
                            on ? 'ring-accent' : 'ring-transparent hover:ring-white/30'
                          }`}
                        >
                          <img src={asset(s.image)} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                          <span className={`absolute inset-0 transition-colors ${on ? 'bg-ink/45' : 'bg-ink/65'}`} />
                          <span className={`relative flex h-8 w-8 items-center justify-center rounded-full ${on ? 'bg-accent' : 'bg-white/15 backdrop-blur'}`}>
                            {on ? <Check className="h-4 w-4" aria-hidden="true" /> : <s.icon className="h-4 w-4" aria-hidden="true" />}
                          </span>
                          <span className="relative">
                            <span className="block font-display text-[17px] font-semibold">{s.name}</span>
                            <span className="block text-[13px] text-white/70">{s.tagline}</span>
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  <div className="mt-6 flex justify-end">
                    <button
                      type="button"
                      disabled={!sector}
                      onClick={() => setStep(2)}
                      className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-[15px] font-semibold text-white transition hover:bg-accent-hover disabled:bg-white/10 disabled:text-white/40"
                    >
                      Siguiente
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={submit}>
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-white/55">Paso 2 de 2</p>
                      <h3 className="mt-2 font-display text-2xl font-semibold tracking-[-0.02em]">Tus datos y medidas</h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="inline-flex items-center gap-1.5 rounded-md bg-accent/15 px-3 py-2 text-[13px] font-medium text-white ring-1 ring-accent/50 hover:bg-accent/25"
                    >
                      <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                      {chosen?.name ?? 'Sector'}
                    </button>
                  </div>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <Field label="Nombre" name="nombre" required autoComplete="name" placeholder="Tu nombre" />
                    <Field label="Empresa" name="empresa" required autoComplete="organization" placeholder="Nombre de la empresa" />
                    <Field label="Correo electrónico" name="correo" type="email" required autoComplete="email" placeholder="tu@empresa.com" />
                    <Field label="Teléfono o WhatsApp" name="telefono" type="tel" autoComplete="tel" placeholder="81 0000 0000" />
                    <label className="block">
                      <span className="text-[13px] font-medium text-white/80">
                        Medidas de interés<span className="text-accent"> *</span>
                      </span>
                      <input name="medidas" required defaultValue={initial?.size} placeholder="11R22.5, 16.9-24…" className={`${inputCls} font-mono uppercase placeholder:normal-case`} />
                    </label>
                    <Field label="Cantidad" name="cantidad" inputMode="numeric" placeholder="Piezas" />
                    <Field label="Marcas de preferencia" name="marcas" className="sm:col-span-2" placeholder="Titan, Continental, Maxxis…" />
                    <label className="block sm:col-span-2">
                      <span className="text-[13px] font-medium text-white/80">Comentarios</span>
                      <textarea name="comentarios" rows={3} placeholder="Aplicación, ubicación de entrega, fecha requerida…" className={`${inputCls} h-auto py-2.5`} />
                    </label>
                  </div>
                  <div className="mt-6 flex flex-col-reverse items-start justify-between gap-4 sm:flex-row sm:items-center">
                    <p className="text-[13px] text-white/50">Tus datos solo se usan para cotizarte.</p>
                    <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-accent-hover">
                      Enviar solicitud
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
