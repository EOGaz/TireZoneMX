import type { CSSProperties } from 'react';
import { CreditCard, PackageCheck, Truck, Wrench } from 'lucide-react';

const BENEFITS = [
  { icon: Wrench, title: 'Asesoría técnica', body: 'Te ayudamos a elegir la llanta correcta por aplicación, carga y terreno.' },
  { icon: PackageCheck, title: 'Stock inmediato', body: 'Más de 3,200 medidas en inventario listas para surtir.' },
  { icon: Truck, title: 'Entrega en sitio', body: 'Llevamos las llantas a tu obra, mina, rancho o patio de flotilla.' },
  { icon: CreditCard, title: 'Crédito empresarial', body: 'Factura CFDI al momento y líneas de crédito para clientes recurrentes.' },
];

const SPEC = [
  ['Aplicación', 'Mina a cielo abierto'],
  ['Medida', '29.5R25'],
  ['Índice de carga', '200 B'],
  ['Compuesto', 'E-4 anticorte'],
  ['Recomendación', 'Titan · Maxxis'],
];

const COVERAGE = [
  ['Monterrey y área metropolitana', 'Mismo día'],
  ['Saltillo y Ramos Arizpe', '24 h'],
  ['Nuevo Laredo y Reynosa', '24–48 h'],
  ['Torreón y Durango', '48 h'],
  ['Chihuahua', '48–72 h'],
];

export function Benefits() {
  return (
    <section id="empresas" data-inspo="features" className="bg-mist py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div data-reveal="up" className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-muted">Para empresas</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.03em] text-fg sm:text-5xl">
            Un proveedor que entiende tu operación
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-muted">
            No solo vendemos llantas: te ayudamos a que tu equipo pase más horas trabajando y menos en el taller.
          </p>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b, i) => (
            <li key={b.title} data-reveal="up" style={{ '--d': i } as CSSProperties} className="rounded-md border border-line bg-paper p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-mist text-fg" style={{ animation: `float-y 4s ease-in-out ${i * 0.5}s infinite` }}>
                <b.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold tracking-[-0.01em] text-fg">{b.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">{b.body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <article data-reveal="up" style={{ '--d': 1 } as CSSProperties} className="rounded-md border border-line bg-paper p-6 sm:p-8">
            <h3 className="font-display text-lg font-semibold text-fg">Recomendación por aplicación</h3>
            <p className="mt-1.5 text-[14px] text-muted">Así te entregamos cada recomendación: clara, técnica y lista para tu orden de compra.</p>
            <dl className="mt-6 divide-y divide-line rounded-lg border border-line font-mono text-[13px]">
              {SPEC.map(([k, v], i) => (
                <div key={k} className="flex items-center justify-between px-4 py-3" style={{ animation: `row-scan 5s linear ${i}s infinite` }}>
                  <dt className="text-muted">{k}</dt>
                  <dd className={k === 'Medida' ? 'font-medium text-accent' : 'text-fg'}>{v}</dd>
                </div>
              ))}
            </dl>
          </article>

          <article data-reveal="up" style={{ '--d': 2 } as CSSProperties} className="rounded-md border border-line bg-paper p-6 sm:p-8">
            <h3 className="font-display text-lg font-semibold text-fg">Cobertura de entrega</h3>
            <p className="mt-1.5 text-[14px] text-muted">Desde nuestro almacén en Monterrey a todo el norte del país.</p>
            <ul className="mt-6 divide-y divide-line rounded-lg border border-line text-[14px]">
              {COVERAGE.map(([city, eta], i) => (
                <li key={city} className="flex items-center justify-between gap-4 px-4 py-3">
                  <span className="flex items-center gap-3 text-fg">
                    <span className="h-2 w-2 rounded-full bg-fg/25" style={{ animation: `dot-seq 5s linear ${i}s infinite` }} aria-hidden="true" />
                    {city}
                  </span>
                  <span className="font-mono text-[13px] text-muted">{eta}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
