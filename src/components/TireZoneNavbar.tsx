import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const TireZoneNavbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 shadow-2xl py-3'
          : 'bg-gradient-to-b from-zinc-950/90 via-zinc-950/40 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Official TireZoneMX Logo Image in upper left */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="h-10 sm:h-12 flex items-center overflow-hidden rounded-lg group-hover:scale-105 transition-transform duration-300">
              <img
                src="/TireZoneMXlogo.jpg"
                alt="TireZoneMX Logo"
                className="h-full w-auto object-contain rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 bg-zinc-900/60 backdrop-blur-md px-6 py-2 rounded-full border border-zinc-700/50 shadow-md">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-xs font-bold text-zinc-200 hover:text-red-500 transition-colors uppercase tracking-wider cursor-pointer"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('marcas')}
              className="text-xs font-bold text-zinc-200 hover:text-red-500 transition-colors uppercase tracking-wider cursor-pointer"
            >
              Marcas
            </button>
            <button
              onClick={() => scrollToSection('nosotros')}
              className="text-xs font-bold text-zinc-200 hover:text-red-500 transition-colors uppercase tracking-wider cursor-pointer"
            >
              Sobre Nosotros
            </button>
            <button
              onClick={() => scrollToSection('catalog-types')}
              className="text-xs font-bold text-zinc-200 hover:text-red-500 transition-colors uppercase tracking-wider cursor-pointer"
            >
              Tipos de Llantas
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-xs font-bold text-zinc-200 hover:text-red-500 transition-colors uppercase tracking-wider cursor-pointer"
            >
              Contacto
            </button>
          </nav>

          {/* Contact Direct button */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => scrollToSection('contacto')}
              className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-wider rounded-full shadow-lg shadow-red-600/30 transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              Contacto Directo
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 bg-zinc-900/80 text-zinc-200 hover:text-white rounded-xl border border-zinc-700 backdrop-blur-md"
              aria-label="Abrir Menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950/98 border-b border-zinc-800 px-6 pt-4 pb-6 space-y-3 shadow-2xl backdrop-blur-xl text-white">
          <button
            onClick={() => scrollToSection('inicio')}
            className="w-full text-left py-2 text-sm font-bold text-zinc-200 hover:text-red-500 border-b border-zinc-800"
          >
            Inicio
          </button>
          <button
            onClick={() => scrollToSection('marcas')}
            className="w-full text-left py-2 text-sm font-bold text-zinc-200 hover:text-red-500 border-b border-zinc-800"
          >
            Marcas Aliadas
          </button>
          <button
            onClick={() => scrollToSection('nosotros')}
            className="w-full text-left py-2 text-sm font-bold text-zinc-200 hover:text-red-500 border-b border-zinc-800"
          >
            Sobre Nosotros
          </button>
          <button
            onClick={() => scrollToSection('catalog-types')}
            className="w-full text-left py-2 text-sm font-bold text-zinc-200 hover:text-red-500 border-b border-zinc-800"
          >
            Tipos de Llantas
          </button>
          <button
            onClick={() => scrollToSection('contacto')}
            className="w-full text-left py-2 text-sm font-bold text-zinc-200 hover:text-red-500"
          >
            Contacto Directo
          </button>
          <div className="pt-2">
            <button
              onClick={() => scrollToSection('contacto')}
              className="w-full py-3 bg-red-600 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-md text-center block"
            >
              Ir a Contacto
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
