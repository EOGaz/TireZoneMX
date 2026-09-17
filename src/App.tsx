
import { TireZoneNavbar } from './components/TireZoneNavbar';
import { BrandCarousel } from './components/BrandCarousel';
import { ContactSection } from './components/ContactSection';

import {
  Tractor,
  HardHat,
  Truck,
  Car,
  CheckCircle2,
  Shield,
  ChevronRight,
  Award,
  Phone
} from 'lucide-react';

export default function App() {
  const tireCategories = [
    {
      id: 'agricola',
      title: 'AGRÍCOLA',
      subtitle: 'Mayor rendimiento en el campo',
      description: 'Llantas agrícolas de alta tracción y durabilidad superior. Diseñadas para proteger el suelo y maximizar la productividad de tu maquinaria.',
      image: '/cat-agricola.jpg',
      icon: Tractor,
      badge: 'Campo & Cosecha',
      specs: ['Tracción en lodo', 'Baja compactación de suelo', 'Resistencia a punciones']
    },
    {
      id: 'industrial',
      title: 'INDUSTRIAL / OTR',
      subtitle: 'Potencia para los trabajos más exigentes',
      description: 'Soluciones todoterreno y maquinaria pesada de minería y construcción. Soportan cargas extremas en terrenos irregulares.',
      image: '/cat-industrial.jpg',
      icon: HardHat,
      badge: 'Construcción & OTR',
      specs: ['Carga extrapesada', 'Compuesto anti-corte', 'Estabilidad superior']
    },
    {
      id: 'tbr',
      title: 'TBR (Camiones & Autobuses)',
      subtitle: 'Confiabilidad en cada kilómetro',
      description: 'Llantas para transporte pesado y flotillas. Diseñadas para alto kilometraje, menor consumo de combustible y máxima renovabilidad.',
      image: '/cat-tbr.jpg',
      icon: Truck,
      badge: 'Transporte Pesado',
      specs: ['Alto kilometraje', 'Ahorro de combustible', 'Casco renovable']
    },
    {
      id: 'auto-camioneta',
      title: 'AUTO Y CAMIONETA',
      subtitle: 'Seguridad y confort en tu día a día',
      description: 'Llantas de alto desempeño para vehículos particulares, camionetas pickup y SUVs. Excelente agarre en pavimento seco o mojado.',
      image: '/hero-raptor.jpg',
      icon: Car,
      badge: 'Pasajero & SUV',
      specs: ['Frenado seguro', 'Confort acústico', 'Agarre en mojado']
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 font-sans selection:bg-red-600 selection:text-white">
      {/* Main Clean Navbar */}
      <TireZoneNavbar />

      <main className="pt-0">
        {/* FULL SCREEN HERO SECTION WITH VIBRANT RAW IMAGE & LIGHT FOCUSED TEXT GRADIENT */}
        <section id="inicio" className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-zinc-950">
          {/* Natural Vibrant Raw Off-Road Image (No global dark opacity overlay) */}
          <div className="absolute inset-0 z-0">
            <img
              src="/hero-raptor.jpg"
              alt="Off-Road TireZoneMX"
              className="w-full h-full object-cover object-center scale-102 filter brightness-105 saturate-105"
            />
            {/* Subtle soft gradient centered strictly behind text area for maximum contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/30 to-zinc-950/90"></div>
          </div>

          {/* Overlaid Content - Ultra Clean & Minimal */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 relative z-10 w-full flex flex-col justify-between min-h-[85vh]">
            
            {/* Slogan Title Top Banner */}
            <div className="text-center pt-6 space-y-3 max-w-4xl mx-auto">
              <span className="text-xs font-black uppercase tracking-widest text-white bg-red-600/90 px-4 py-1.5 rounded-full border border-red-500/50 shadow-xl backdrop-blur-md">
                Soluciones en movimiento
              </span>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black italic tracking-tight uppercase leading-none text-white drop-shadow-2xl">
                TU ALIADO EN <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-amber-500">LLANTAS</span> PARA CADA TERRENO
              </h1>
            </div>

            {/* Action Buttons Floating Clean at the bottom (No extra paragraph text) */}
            <div className="flex items-center justify-center gap-4 pt-12">
              <button
                onClick={() => {
                  const el = document.getElementById('catalog-types');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-zinc-900/90 hover:bg-zinc-800 text-white font-extrabold text-xs uppercase tracking-wider rounded-2xl border border-zinc-700/80 backdrop-blur-md shadow-2xl transition-all flex items-center gap-2 cursor-pointer hover:scale-105"
              >
                <span>EXPLORAR CATÁLOGO</span>
                <ChevronRight className="w-4 h-4 text-red-500" />
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('contacto');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-2xl shadow-red-600/40 transition-all hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                <span>CONTACTO DIRECTO</span>
              </button>
            </div>

          </div>
        </section>

        {/* SECTION 2: BRAND CAROUSEL (Dark Theme) */}
        <BrandCarousel />

        {/* SECTION 3: SOBRE NOSOTROS (Light Theme) */}
        <section id="nosotros" className="py-20 bg-white text-zinc-900 border-b border-zinc-200 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-black uppercase tracking-widest text-red-600 bg-red-50 px-3.5 py-1.5 rounded-full border border-red-200">
                  Sobre TireZoneMX
                </span>

                <h2 className="text-3xl sm:text-5xl font-black italic uppercase text-zinc-900 tracking-tight leading-none">
                  EXPERTOS EN SOLUCIONES DE <span className="text-red-600">MOVILIDAD INDUSTRIAL Y AUTOMOTRIZ</span>
                </h2>

                <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                  En <strong>TireZoneMX</strong> nos dedicamos a impulsar el desarrollo agrícola, industrial y de transporte en México. Ofrecemos el catálogo más completo de llantas especializadas respaldadas por las mejores marcas del mundo.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3.5 bg-zinc-50 p-4.5 rounded-2xl border border-zinc-200 shadow-sm">
                    <div className="p-2.5 bg-red-50 text-red-600 rounded-xl shrink-0 border border-red-100">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-900">Garantía Directa</h4>
                      <p className="text-xs text-zinc-500 mt-0.5">Todos nuestros neumáticos cuentan con respaldo directo de fabricante ante cualquier defecto.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 bg-zinc-50 p-4.5 rounded-2xl border border-zinc-200 shadow-sm">
                    <div className="p-2.5 bg-red-50 text-red-600 rounded-xl shrink-0 border border-red-100">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-900">Asesoría Técnica Especializada</h4>
                      <p className="text-xs text-zinc-500 mt-0.5">Te ayudamos a elegir la medida y compuesto óptimo según tu tipo de suelo y carga.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden border border-zinc-200 shadow-xl group">
                  <img
                    src="/cat-industrial.jpg"
                    alt="Maquinaria Industrial TireZoneMX"
                    className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/95 backdrop-blur-md rounded-2xl border border-zinc-200 shadow-md">
                    <p className="text-xs font-bold text-red-600 uppercase tracking-wider">Compromiso TireZoneMX</p>
                    <p className="text-sm font-extrabold text-zinc-900 mt-1">
                      "Entregar rendimiento, resistencia y seguridad en cada neumático comercializado."
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 4: TIPOS DE LLANTAS (Dark Theme Background) */}
        <section id="catalog-types" className="py-20 bg-zinc-950 text-white border-b border-zinc-800 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-red-500 bg-red-600/10 px-3.5 py-1.5 rounded-full border border-red-500/20">
                Nuestras Categorías
              </span>
              <h2 className="text-3xl sm:text-5xl font-black italic uppercase text-white">
                TIPOS DE LLANTAS DISPONIBLES
              </h2>
              <p className="text-zinc-400 text-sm">
                Explora nuestra oferta especializada para cada sector productivo y terreno.
              </p>
            </div>

            {/* Grid of categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tireCategories.map((cat) => {
                const IconComp = cat.icon;
                return (
                  <div
                    key={cat.id}
                    className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-red-500/60 transition-all duration-300 shadow-xl flex flex-col justify-between group"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={cat.image}
                        alt={cat.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="text-[10px] font-black uppercase px-3 py-1 bg-red-600 text-white rounded-lg shadow-md">
                          {cat.badge}
                        </span>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 bg-zinc-950/90 backdrop-blur-md p-3 rounded-2xl border border-zinc-800 shadow-md">
                        <div className="p-2.5 bg-red-600 text-white rounded-xl">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-black italic text-white uppercase leading-none">{cat.title}</h3>
                          <p className="text-xs text-red-400 font-bold mt-0.5">{cat.subtitle}</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <p className="text-xs text-zinc-300 leading-relaxed">
                        {cat.description}
                      </p>

                      <div className="pt-3 border-t border-zinc-800">
                        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-2">
                          Características Clave:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {cat.specs.map((sp, idx) => (
                            <span
                              key={idx}
                              className="text-[11px] font-semibold bg-zinc-950 text-zinc-300 px-2.5 py-1 rounded-lg border border-zinc-800 flex items-center gap-1.5"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-red-500" />
                              {sp}
                            </span>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          const el = document.getElementById('contacto');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="w-full py-3 bg-zinc-950 hover:bg-red-600 text-zinc-200 hover:text-white font-bold text-xs uppercase tracking-wider rounded-xl border border-zinc-800 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>Ver Detalles e Información</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* SECTION 5: CONTACTO (Dark Section with Form) */}
        <ContactSection />

        {/* FOOTER */}
        <footer className="bg-zinc-950 py-8 text-xs text-zinc-500 text-center border-t border-zinc-800">
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="font-extrabold italic text-white">TIREZONE<span className="text-red-600">MX</span></span>
              <span>© {new Date().getFullYear()} Todos los derechos reservados.</span>
            </div>
            <p className="text-zinc-500">Prototipo desarrollado para cliente • Monterrey, Nuevo León.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
