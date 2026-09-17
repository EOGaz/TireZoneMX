import React from 'react';

export const BrandCarousel: React.FC = () => {
  const brands = [
    { name: 'NEXEN', image: '/brand-nexen.png' },
    { name: 'ROADMASTER', image: '/brand-roadmaster.png' },
    { name: 'ROYALBLACK', image: '/brand-royalblack.png' },
    { name: 'SAILUN', image: '/brand-sailun.png' },
    { name: 'SUMITOMO', image: '/brand-sumitomo.png' },
    { name: 'TORNEL', image: '/brand-tornel.png' },
    { name: 'CHAO YANG', image: '/brand-chaoyang.jpg' },
    { name: 'CONTINENTAL', image: '/brand-continental.png' },
    { name: 'COOPER TIRES', image: '/brand-cooper.png' },
    { name: 'FIRESTONE', image: '/brand-firestone.png' },
    { name: 'BFGOODRICH', image: '/brand-bfgoodrich.jpg' },
    { name: 'CEAT', image: '/brand-ceat.webp' },
    { name: 'GOLDEN CROWN', image: '/brand-goldencrown.png' },
    { name: 'TITAN', image: '/brand-titan.png' },
    { name: 'MAXXIS', image: '/brand-maxxis.jpeg' },
  ];

  // Duplicate list for infinite smooth scrolling
  const doubleBrands = [...brands, ...brands];

  return (
    <section id="marcas" className="bg-zinc-900 py-12 border-y border-zinc-800 relative overflow-hidden">
      {/* Edge gradient overlays matching dark theme background */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-zinc-900 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-zinc-900 to-transparent z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <span className="text-xs font-black uppercase tracking-widest text-red-500 bg-red-600/10 px-4 py-1.5 rounded-full border border-red-500/20">
          Marcas de Prestigio Internacional
        </span>
      </div>

      <div className="overflow-hidden flex items-center">
        <div className="animate-marquee flex items-center gap-6 sm:gap-8">
          {doubleBrands.map((brand, index) => (
            <div
              key={index}
              className="flex-none w-48 sm:w-56 h-24 bg-white border border-zinc-300 rounded-2xl flex items-center justify-center p-4 shadow-md hover:shadow-lg hover:border-red-500 transition-all cursor-pointer group"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="max-h-14 max-w-[85%] object-contain filter group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
