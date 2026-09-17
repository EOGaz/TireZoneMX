import React, { useState } from 'react';
import { Send, Mail, Phone, Headphones, Zap, Target, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    medidas: '',
    empresa: '',
    marcas: '',
    correo: '',
    comentarios: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 6000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="bg-zinc-900 py-20 relative overflow-hidden text-white border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading & Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/20 border border-red-600/40 rounded-full text-red-500 text-xs font-extrabold uppercase tracking-wider">
              <Phone className="w-3.5 h-3.5" />
              <span>Atención Directa</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-black italic text-white tracking-tight leading-none uppercase">
              CONTÁCTANOS
            </h2>

            <p className="text-xl font-bold text-red-500">
              Recibe asesoría personalizada
            </p>

            <p className="text-zinc-400 text-sm leading-relaxed">
              Cuéntanos tus necesidades y uno de nuestros especialistas se pondrá en contacto contigo a la brevedad.
            </p>

            <div className="pt-4 space-y-4 border-t border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-red-500 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400 font-semibold">Correo Electrónico</div>
                  <div className="text-sm font-bold text-white">ventas@tirezonemx.com</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-red-500 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400 font-semibold">Teléfono Directo</div>
                  <div className="text-sm font-bold text-white">+52 (81) 8000-TIRE (8473)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column: Form with exact reference fields */}
          <div className="lg:col-span-5 bg-zinc-950 border border-zinc-800 p-6 sm:p-8 rounded-3xl shadow-2xl relative">
            
            {submitted && (
              <div className="mb-6 p-4 bg-emerald-950/90 border border-emerald-500/50 rounded-2xl flex items-start gap-3 text-emerald-300 text-xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-sm font-bold text-white">¡Información Registrada!</strong>
                  Gracias por tu mensaje. El prototipo ha guardado tus datos correctamente.
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1.5">
                    Nombre: <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    placeholder="Tu nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-red-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1.5">
                    Medidas de su interés: <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="medidas"
                    required
                    placeholder="Ej. 12.5/80-18, 11R22.5, 16.9-24, etc."
                    value={formData.medidas}
                    onChange={handleChange}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-red-600 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1.5">
                    Empresa de donde nos contactas: <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="empresa"
                    required
                    placeholder="Nombre de la empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-red-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1.5">
                    Marcas de preferencia:
                  </label>
                  <input
                    type="text"
                    name="marcas"
                    placeholder="Ej. Titan, BKT, Maxxis, Goodyear, etc."
                    value={formData.marcas}
                    onChange={handleChange}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-red-600 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1.5">
                  Correo electrónico: <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="correo"
                  required
                  placeholder="tu@email.com"
                  value={formData.correo}
                  onChange={handleChange}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-red-600 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1.5">
                  Comentarios:
                </label>
                <textarea
                  name="comentarios"
                  rows={3}
                  placeholder="Cuéntanos más sobre tu proyecto o necesidad"
                  value={formData.comentarios}
                  onChange={handleChange}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-red-600 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-red-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <Send className="w-4 h-4" />
                <span>ENVIAR INFORMACIÓN</span>
              </button>
            </form>
          </div>

          {/* Right Column: Value Props & Tagline */}
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-5 bg-zinc-950 border border-zinc-800 p-6 rounded-3xl">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-red-600/10 border border-red-600/30 text-red-500 rounded-xl shrink-0">
                  <Headphones className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-white">Estamos para ayudarte</h4>
                  <p className="text-[11px] text-zinc-400 mt-0.5">Asesoría técnica y comercial.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-red-600/10 border border-red-600/30 text-red-500 rounded-xl shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-white">Respuesta rápida</h4>
                  <p className="text-[11px] text-zinc-400 mt-0.5">Atención oportuna a tus requerimientos.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-red-600/10 border border-red-600/30 text-red-500 rounded-xl shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-white">Tu proyecto, nuestra prioridad</h4>
                  <p className="text-[11px] text-zinc-400 mt-0.5">Solución para cada tipo de llanta.</p>
                </div>
              </div>
            </div>

            <div className="text-center p-4">
              <p className="text-2xl font-black italic text-red-500 tracking-wider">
                "Seguimos llegando más lejos"
              </p>
              <div className="mt-3 flex items-center justify-center gap-2 text-xs font-bold text-zinc-400">
                <span>TIREZONE<span className="text-red-500">MX</span></span>
                <span>•</span>
                <span>MONTERREY, NL</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
