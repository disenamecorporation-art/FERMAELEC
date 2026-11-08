import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { COMPANY_INFO } from '../data/companyData';

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
                {/* Photo 1: Elementos de Energía Eléctrica */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border-2 border-white group h-44 sm:h-56 bg-slate-100">
                  <img
                    src="https://www.iberdrola.com/documents/20125/6124441/elementos-energia-electrica-746x419.jpg/23505a33-b82a-4621-f574-d4c6e5374576?t=1786092774583"
                    alt="Elementos de Energía Eléctrica"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=700';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A6B]/60 via-transparent to-transparent flex items-end p-3">
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
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=700';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A6B]/60 via-transparent to-transparent flex items-end p-3">
                    <span className="text-[11px] sm:text-xs text-white font-medium">Sector Petrolero & Gas</span>
                  </div>
                </div>

                {/* Photo 3: Instalaciones industriales de generación y potencia */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border-2 border-white group h-40 sm:h-52 col-span-2">
                  <img
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1000"
                    alt="Equipos de Potencia y Transformadores Industriales"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A6B]/70 via-transparent to-transparent flex items-end justify-between p-4">
                    <span className="text-xs sm:text-sm text-white font-medium">Equipos y Suministros Eléctricos de Alta y Baja Tensión</span>
                    <span className="hidden sm:inline-block text-[11px] bg-[#F7931E] text-white px-2.5 py-0.5 rounded-full font-medium">Norma COVENIN / IEEE</span>
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
              <p className="text-slate-700 text-base sm:text-lg font-light leading-relaxed">
                Una empresa dedicada a brindar soluciones eléctricas innovadoras, eficientes y seguras, con productos, insumos y materiales eléctricos en general, enfocadas en satisfacer las necesidades de nuestros clientes con excelencia.
              </p>

              <p className="text-slate-700 text-base sm:text-lg font-light leading-relaxed">
                Contamos con un equipo de profesionales altamente capacitados y una amplia experiencia en el sector Eléctrico industrial, Petrolero, Petroquímica, Gas, Construcción, Comercial y Residencial
              </p>

              {/* Orange Pill Button */}
              <div className="pt-2">
                <button
                  onClick={() => navigate('/nosotros')}
                  className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#F7931E] to-[#e8810c] text-white text-sm sm:text-base font-normal shadow-lg shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group cursor-pointer"
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

      {/* 4. BANNER CTA SECTION (Matching screenshot) */}
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
                  Estamos listos para ayudarte con tus proyectos eléctricos.
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
