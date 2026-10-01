import type { LucideIcon } from 'lucide-react';
import { Car, HardHat, Tractor, Truck } from 'lucide-react';

// Files in /public, resolved against Vite's base so they work on GitHub Pages too.
export const asset = (file: string) => `${import.meta.env.BASE_URL}${file}`;

// Placeholder business data: confirm with TireZoneMX before publishing.
export const CONTACT = {
  phone: '+52 81 8000 8473',
  phoneHref: 'tel:+528180008473',
  whatsappHref: 'https://wa.me/528180008473?text=Hola%2C%20quiero%20cotizar%20llantas',
  email: 'ventas@tirezonemx.com',
  city: 'Monterrey, Nuevo León',
  hours: 'Lun a Vie 8:00–18:00 · Sáb 9:00–14:00',
};

export type SectorId = 'agricola' | 'otr' | 'tbr' | 'auto';

export type Sector = {
  id: SectorId;
  name: string;
  tagline: string;
  description: string;
  image: string;
  icon: LucideIcon;
  sizes: string[];
  brands: string;
};

export const SECTORS: Sector[] = [
  {
    id: 'tbr',
    name: 'TBR',
    tagline: 'Camiones, autobuses y flotillas',
    description: 'Direccional, tracción y remolque para alto kilometraje, menor consumo y casco renovable.',
    image: 'cat-tbr.jpg',
    icon: Truck,
    sizes: ['11R22.5', '295/80R22.5', '11R24.5'],
    brands: 'Continental · Sailun · Sumitomo',
  },
  {
    id: 'otr',
    name: 'Industrial / OTR',
    tagline: 'Construcción y minería',
    description: 'Cargas extremas y compuesto anticorte para obra, cantera y mina a cielo abierto.',
    image: 'cat-industrial.jpg',
    icon: HardHat,
    sizes: ['17.5-25', '20.5R25', '29.5R25'],
    brands: 'Titan · Maxxis · Firestone',
  },
  {
    id: 'agricola',
    name: 'Agrícola',
    tagline: 'Campo y cosecha',
    description: 'Tracción en lodo y baja compactación del suelo para tractores, cosechadoras e implementos.',
    image: 'cat-agricola.jpg',
    icon: Tractor,
    sizes: ['18.4-38', '16.9-24', '14.9-28'],
    brands: 'Titan · Firestone · CEAT',
  },
  {
    id: 'auto',
    name: 'Auto y camioneta',
    tagline: 'Pickups, SUVs y reparto',
    description: 'Frenado seguro, confort y agarre en pavimento o terracería para flotillas ligeras.',
    image: 'hero-raptor.jpg',
    icon: Car,
    sizes: ['LT285/70R17', '265/70R17', '275/65R18'],
    brands: 'BFGoodrich · Cooper · Nexen',
  },
];

// `scale` evens out logos whose files carry extra padding or are unusually bold.
export const BRANDS: { name: string; image: string; scale?: number }[] = [
  { name: 'Continental', image: 'brand-continental.png' },
  { name: 'Firestone', image: 'brand-firestone.png', scale: 1.9 },
  { name: 'BFGoodrich', image: 'brand-bfgoodrich.jpg' },
  { name: 'Titan', image: 'brand-titan.png', scale: 0.85 },
  { name: 'Maxxis', image: 'brand-maxxis.jpeg', scale: 1.2 },
  { name: 'Cooper Tires', image: 'brand-cooper.png', scale: 1.9 },
  { name: 'Sumitomo', image: 'brand-sumitomo.png' },
  { name: 'Nexen', image: 'brand-nexen.png', scale: 0.85 },
  { name: 'CEAT', image: 'brand-ceat.webp', scale: 0.72 },
  { name: 'Sailun', image: 'brand-sailun.png', scale: 1.35 },
  { name: 'Tornel', image: 'brand-tornel.png', scale: 0.9 },
  { name: 'Chao Yang', image: 'brand-chaoyang.jpg', scale: 1.3 },
  { name: 'Roadmaster', image: 'brand-roadmaster.png' },
  { name: 'Royal Black', image: 'brand-royalblack.png', scale: 1.1 },
  { name: 'Golden Crown', image: 'brand-goldencrown.png', scale: 0.9 },
];

export const STATS = [
  { value: 15, prefix: '', suffix: '+', label: 'años surtiendo a la industria' },
  { value: 15, prefix: '', suffix: '', label: 'marcas líderes con garantía de fábrica' },
  { value: 3200, prefix: '', suffix: '+', label: 'medidas en inventario' },
  { value: 24, prefix: '<', suffix: ' h', label: 'para recibir tu cotización' },
];

export const TESTIMONIALS = [
  {
    quote: 'Desde que trabajamos con TireZone nuestra flotilla no ha parado un solo día por falta de llantas.',
    name: 'Ramiro Garza',
    role: 'Gerente de flota · Transporte de carga',
    sector: 'TBR',
  },
  {
    quote: 'Nos ayudaron a pasar a llantas de flotación y bajamos la compactación del suelo. Asesoría de verdad, no solo venta.',
    name: 'Mariana Treviño',
    role: 'Compras · Agroindustria',
    sector: 'Agrícola',
  },
  {
    quote: 'Nos consiguieron 29.5R25 en 48 horas cuando nadie más tenía. Eso nos salvó la obra.',
    name: 'Jorge Salinas',
    role: 'Jefe de mantenimiento · Constructora',
    sector: 'OTR',
  },
  {
    quote: 'Facturan al momento, el crédito es claro y siempre contestan el WhatsApp.',
    name: 'Héctor Villarreal',
    role: 'Director de operaciones · Logística',
    sector: 'TBR',
  },
  {
    quote: 'La recomendación de compuesto anticorte casi duplicó la vida útil de nuestras llantas en patio.',
    name: 'Paola Cantú',
    role: 'Superintendente · Minería',
    sector: 'OTR',
  },
  {
    quote: 'Cotización en la mañana y llantas montadas en la tarde. Así de simple.',
    name: 'Carlos Elizondo',
    role: 'Flotilla de reparto · Distribución',
    sector: 'Auto y camioneta',
  },
];

export const FAQS = [
  {
    q: '¿Cómo leo la medida de mi llanta?',
    a: 'Está grabada en el costado. En 295/80R22.5, 295 es el ancho en milímetros, 80 la altura del costado en porcentaje, R indica construcción radial y 22.5 el diámetro del rin en pulgadas. En agrícola y OTR suele verse como 16.9-24 o 29.5R25. Si tienes duda, mándanos una foto del costado por WhatsApp.',
  },
  {
    q: '¿Cuánto tardan en cotizar?',
    a: 'Menos de 24 horas hábiles. Las medidas más comunes las cotizamos en minutos por WhatsApp.',
  },
  {
    q: '¿Entregan fuera de Monterrey?',
    a: 'Sí. En el área metropolitana entregamos el mismo día y en Coahuila, Tamaulipas, Chihuahua y Durango en 24 a 72 horas. Para minas y obras coordinamos la entrega en sitio.',
  },
  {
    q: '¿Facturan y dan crédito?',
    a: 'Facturamos CFDI 4.0 al momento. Los clientes recurrentes pueden solicitar una línea de crédito empresarial sujeta a aprobación.',
  },
  {
    q: '¿Qué garantía tienen las llantas?',
    a: 'Todas tienen garantía directa del fabricante contra defectos de fabricación y te acompañamos en el trámite.',
  },
  {
    q: '¿Venden por pieza o solo por volumen?',
    a: 'Vendemos desde una pieza. Para flotillas y compras recurrentes manejamos precio por volumen.',
  },
];

export type SizePart = { token: string; label: string; short: string };

// Parses a tire size into labelled parts and guesses its sector. Returns null when it doesn't look like one.
export function parseSize(raw: string): { parts: SizePart[]; sector: SectorId } | null {
  const s = raw.toUpperCase().replace(/\s+/g, '');
  const construction = (c: string): SizePart =>
    c === '-'
      ? { token: '-', label: 'Construcción convencional (diagonal)', short: 'Diagonal' }
      : { token: c, label: 'Construcción radial', short: 'Radial' };

  let m = s.match(/^(LT|P)?(\d{3})\/(\d{2})(Z?R|-)(\d{2}(?:\.\d)?)$/);
  if (m) {
    const rim = parseFloat(m[5]);
    return {
      parts: [
        ...(m[1] ? [{ token: m[1], label: m[1] === 'LT' ? 'Camioneta de carga ligera (Light Truck)' : 'Vehículo de pasajeros', short: m[1] === 'LT' ? 'Camioneta de carga' : 'Pasajero' }] : []),
        { token: m[2], label: `Ancho de sección: ${m[2]} mm`, short: `Ancho ${m[2]} mm` },
        { token: `/${m[3]}`, label: `Altura del costado: ${m[3]}% del ancho`, short: `Costado ${m[3]}%` },
        construction(m[4]),
        { token: m[5], label: `Diámetro de rin: ${m[5]}"`, short: `Rin ${m[5]}"` },
      ],
      sector: [17.5, 19.5, 22.5, 24.5].includes(rim) ? 'tbr' : 'auto',
    };
  }
  m = s.match(/^(\d{1,2}\.\d)\/(\d{2})-(\d{2})$/);
  if (m) {
    return {
      parts: [
        { token: m[1], label: `Ancho de sección: ${m[1]}"`, short: `Ancho ${m[1]}"` },
        { token: `/${m[2]}`, label: `Altura del costado: ${m[2]}% del ancho`, short: `Costado ${m[2]}%` },
        construction('-'),
        { token: m[3], label: `Diámetro de rin: ${m[3]}"`, short: `Rin ${m[3]}"` },
      ],
      sector: 'otr',
    };
  }
  m = s.match(/^(\d{1,2}(?:\.\d{1,2})?)(R|-)(\d{2}(?:\.\d)?)$/);
  if (m) {
    const width = parseFloat(m[1]);
    const rim = parseFloat(m[3]);
    const sector: SectorId = [19.5, 22.5, 24.5].includes(rim) ? 'tbr' : rim === 25 || rim === 29 || rim === 33 || rim === 35 || (rim === 24 && width >= 17.5) ? 'otr' : 'agricola';
    return {
      parts: [
        { token: m[1], label: `Ancho de sección: ${m[1]}"`, short: `Ancho ${m[1]}"` },
        construction(m[2]),
        { token: m[3], label: `Diámetro de rin: ${m[3]}"`, short: `Rin ${m[3]}"` },
      ],
      sector,
    };
  }
  return null;
}

export const decodeSize = (raw: string) => parseSize(raw)?.parts.map((p) => p.short) ?? null;

export type Quote = { size: string; sector: SectorId | '' };
