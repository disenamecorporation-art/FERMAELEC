import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import {
  TowerControl as PowerTower,
  Settings,
  Lightbulb,
  Plug,
  ChevronRight,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Hero } from '../components/Hero';
import { PANEL_IMAGE, SERVICES, COMPANY_INFO } from '../data/companyData';

interface HomePageProps {
  onOpenQuoteModal: (category?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenQuoteModal }) => {
  const navigate = useNavigate();

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'TowerControl':
        return <PowerTower className="w-10 h-10 text-[#1D4FD8]" />;
      case 'Settings':
        return <Settings className="w-10 h-10 text-[#1D4FD8]" />;
      case 'Lightbulb':
        return <Lightbulb className="w-10 h-10 text-[#1D4FD8]" />;
      case 'Plug':
        return <Plug className="w-10 h-10 text-[#1D4FD8]" />;
      default:
        return <Settings className="w-10 h-10 text-[#1D4FD8]" />;
    }
  };

  return (
    <div className="relative overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <Hero
        onOpenQuoteModal={() => onOpenQuoteModal()}
        onNavigateServices={() => navigate('/servicios')}
        onNavigateAbout={() => navigate('/nosotros')}
      />

      {/* 2. SOBRE NOSOTROS SECTION (Matching screenshot) */}
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
            
            {/* Left Column: Organic Electrical Panel Image with Blue Wave Accent */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-[36px] overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
                <img
                  src={PANEL_IMAGE}
                  alt="Tablero Eléctrico Industrial Fermaelec"
                  className="w-full h-[380px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A6B]/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Decorative Blue Organic Wave shape underneath image */}
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

              {/* Paragraphs */}
              <p className="text-slate-600 text-base sm:text-lg font-light leading-relaxed">
                Una empresa dedicada a brindar soluciones eléctricas innovadoras, eficientes y seguras, enfocadas en satisfacer las necesidades de nuestros clientes con excelencia.
              </p>

              <p className="text-slate-600 text-base sm:text-lg font-light leading-relaxed">
                Contamos con un equipo de profesionales altamente capacitados y una amplia experiencia en el sector eléctrico industrial, comercial y residencial.
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

      {/* 3. NUESTROS SERVICIOS SECTION (Matching screenshot) */}
      <section className="py-20 sm:py-28 relative bg-gradient-to-b from-white via-blue-50/40 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div>
              <span className="text-xs sm:text-sm font-medium tracking-[0.25em] text-[#F7931E] uppercase block mb-1">
                NUESTROS SERVICIOS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#0B2A6B]">
              Lo que <span className="font-medium text-[#0B2A6B]">hacemos</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg font-light">
              Brindamos una amplia gama de servicios eléctricos para distintos sectores:
            </p>
          </div>

          {/* 4 Glass Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                onClick={() => navigate('/servicios')}
                className="glass-card rounded-3xl p-8 flex flex-col justify-between hover:shadow-2xl hover:border-blue-200 transition-all duration-300 cursor-pointer group"
              >
                <div>
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#1D4FD8] flex items-center justify-center mb-6 group-hover:bg-[#1D4FD8] group-hover:text-white transition-colors duration-300 shadow-sm">
                    {getServiceIcon(service.icon)}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-normal text-[#0B2A6B] mb-3 group-hover:text-[#1D4FD8] transition-colors">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-slate-600 text-sm font-light leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100/80 flex items-center gap-2 text-xs font-medium text-[#1D4FD8] group-hover:translate-x-1 transition-transform">
                  <span>Saber más</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => navigate('/servicios')}
              className="inline-flex items-center gap-2 text-sm font-medium text-[#0B2A6B] hover:text-[#F7931E] transition-colors group cursor-pointer"
            >
              <span>Ver todos los detalles de servicios</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
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
                <a
                  href={`https://wa.me/${COMPANY_INFO.phones[0].raw}?text=${encodeURIComponent("Hola FERMAELEC, deseo solicitar una cotización para mi proyecto eléctrico.")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#F7931E] to-[#e8810c] text-white text-base font-medium shadow-xl shadow-amber-500/30 hover:scale-105 active:scale-95 transition-all duration-300 group cursor-pointer"
                >
                  <span>Solicita una cotización</span>
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 text-white text-xs group-hover:translate-x-1 transition-transform">
                    &gt;
                  </span>
                </a>
              </div>

            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};
