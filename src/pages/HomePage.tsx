import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Building2, ShieldCheck, ArrowRight } from 'lucide-react';
import { Hero } from '../components/Hero';
import { MAIN_CLIENTS } from '../data/companyData';
import equiposTensionImg from '../assets/images/equipos_alta_media_baja_tension_1794578016826.jpg';

interface HomePageProps {
  onOpenQuoteModal: (category?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenQuoteModal }) => {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <Hero
        onOpenQuoteModal={() => onOpenQuoteModal()}
        onNavigateAbout={() => navigate('/nosotros')}
      />

      {/* 2. SOBRE NOSOTROS SECTION (With Energy & Oil Industry visual collage) */}
      <section className="py-20 sm:py-28 relative overflow-hidden bg-white">
        
        {/* Giant semi-transparent pulse-logo in background on the right */}
        <div className="absolute top-1/2 right-[-100px] -translate-y-1/2 w-[500px] h-[500px] pointer-events-none opacity-15">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="100" cy="100" r="90" stroke="#1D4FD8" strokeWidth="8" />
            <path d="M30 100H70L85 40L115 160L130 70L145 100H170" stroke="#F7931E" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Collage of Energy Companies and Oil Industry */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {/* Photo 1: Energía Eléctrica */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border-2 border-white group h-44 sm:h-56 bg-slate-100">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaxX3nA4GDlMJmk-RI7yFDsRO_2Z7uFPW3tcR2e4rJCNkz-H69KYS6E12V&s=10"
                    alt="Energía Eléctrica"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A6B]/70 via-transparent to-transparent flex items-end p-3">
                    <span className="text-[11px] sm:text-xs text-white font-medium">Energía Eléctrica</span>
                  </div>
                </div>

                {/* Photo 2: Sector Petrolero & Gas */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border-2 border-white group h-44 sm:h-56 bg-slate-100">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU5a7u9iz0VvmF7y3UE1tlnMBzR6czhcM77u5Zho-tedyoTk3dOhywr6sR&s=10"
                    alt="Sector Petrolero y Gas"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A6B]/70 via-transparent to-transparent flex items-end p-3">
                    <span className="text-[11px] sm:text-xs text-white font-medium">Sector Petrolero & Gas</span>
                  </div>
                </div>

                {/* Photo 3: Equipos y suministros eléctricos para Alta, Media y Baja Tensión */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border-2 border-white group h-48 sm:h-60 col-span-2 bg-slate-100">
                  <img
                    src={equiposTensionImg}
                    alt="Equipos y suministros eléctricos para Alta, Media y Baja Tensión"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A6B]/80 via-[#0B2A6B]/20 to-transparent flex items-end justify-between p-4">
                    <span className="text-xs sm:text-sm text-white font-medium">
                      Equipos y suministros eléctricos para Alta, Media y Baja Tensión
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Blue Organic Wave shape underneath collage */}
              <div className="absolute -bottom-6 -left-6 w-3/4 h-24 bg-gradient-to-r from-[#1D4FD8] to-[#0B2A6B] rounded-3xl -z-10 blur-xl opacity-40" />
            </motion.div>

            {/* Right Column: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Kicker */}
              <div>
                <span className="text-xs sm:text-sm font-medium tracking-[0.2em] text-[#F7931E] uppercase block mb-1">
                  SOBRE NOSOTROS
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#0B2A6B] tracking-tight">
                Somos <span className="font-medium text-[#0B2A6B]">Fermaelec</span>
              </h2>

              {/* Paragraphs - Exact requested text */}
              <p className="text-slate-700 text-base sm:text-lg font-normal leading-relaxed">
                Una empresa dedicada a brindar soluciones eléctricas innovadoras, eficientes y seguras, con productos, insumos y materiales eléctricos en general, enfocadas en satisfacer las necesidades de nuestros clientes con excelencia.
              </p>

              <p className="text-slate-700 text-base sm:text-lg font-normal leading-relaxed">
                Contamos con un equipo de profesionales altamente capacitados y una amplia experiencia en el sector Eléctrico industrial, Petrolero, Petroquímica, Gas, Construcción, Comercial y Residencial
              </p>

              {/* Orange Pill Button */}
              <div className="pt-2">
                <button
                  onClick={() => navigate('/nosotros')}
                  className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#F7931E] to-[#e8810c] text-white text-sm sm:text-base font-medium shadow-lg shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group cursor-pointer"
                >
                  <span>Conoce nuestra empresa</span>
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 text-white text-xs group-hover:translate-x-1 transition-transform">
                    &gt;
                  </span>
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. ALGUNOS DE NUESTROS PRINCIPALES CLIENTES */}
      <section className="py-16 sm:py-24 relative bg-gradient-to-b from-white via-blue-50/50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="text-xs sm:text-sm font-medium tracking-[0.25em] text-[#F7931E] uppercase block">
              CONFIANZA Y TRAYECTORIA
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#0B2A6B]">
              Algunos de Nuestros <span className="font-medium">Principales Clientes</span>
            </h2>
            <p className="text-slate-700 text-base sm:text-lg font-normal">
              Organizaciones que respaldan la calidad de nuestros suministros eléctricos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {MAIN_CLIENTS.map((client, index) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass-card rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#1D4FD8] flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#0B2A6B] leading-snug">
                    {client.name}
                  </h3>
                  <p className="text-xs text-slate-600 font-normal mt-1">
                    {client.sector}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* 8th card: Ver todos / Cotizar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              onClick={() => navigate('/clientes')}
              className="rounded-2xl p-6 bg-gradient-to-br from-[#0B2A6B] to-[#1D4FD8] text-white flex flex-col justify-between cursor-pointer hover:shadow-xl transition-all group"
            >
              <div className="flex items-center gap-2 text-amber-300 text-xs font-medium uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Cartera Corporativa</span>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-base font-medium">Ver detalle de clientes</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. BANNER CTA SECTION */}
      <section className="py-16 sm:py-20 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Dark Navy Blue Card with gradient & glowing lines */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[36px] bg-gradient-to-r from-[#0B2A6B] via-[#0D3482] to-[#1D4FD8] text-white p-8 sm:p-12 md:p-16 overflow-hidden shadow-2xl"
          >
            {/* Giant translucent lightning bolt on right */}
            <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 opacity-15 pointer-events-none w-64 sm:w-96 h-auto">
              <svg viewBox="0 0 100 100" fill="white" className="w-full h-full">
                <polygon points="55,0 15,60 45,60 30,100 85,35 50,35" />
              </svg>
            </div>

            {/* Glowing curve lines */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <svg viewBox="0 0 800 400" fill="none" className="w-full h-full">
                <path d="M-100 200 C 200 400, 400 0, 900 200" stroke="white" strokeWidth="3" />
                <path d="M-50 100 C 300 350, 500 -50, 850 300" stroke="#F7931E" strokeWidth="2" />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              
              <div className="max-w-xl space-y-3">
                <span className="text-xs sm:text-sm font-medium tracking-[0.25em] text-[#F7931E] uppercase">
                  ¿LISTO PARA TRABAJAR CON NOSOTROS?
                </span>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white leading-tight">
                  Contáctanos <span className="font-medium">hoy mismo</span>
                </h2>

                <p className="text-blue-100 text-base sm:text-lg font-light">
                  Estamos listos para ayudarte con tus requerimientos eléctricos.
                </p>
              </div>

              {/* Orange Pill Button */}
              <div className="shrink-0">
                <button
                  onClick={() => onOpenQuoteModal()}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#F7931E] to-[#e8810c] text-white text-base font-medium shadow-xl shadow-amber-500/30 hover:scale-105 active:scale-95 transition-all duration-300 group cursor-pointer"
                >
                  <span>Solicita una cotización</span>
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 text-white text-xs group-hover:translate-x-1 transition-transform">
                    &gt;
                  </span>
                </button>
              </div>

            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};
