import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'motion/react';
import { ShieldCheck, Zap, Handshake, Cog } from 'lucide-react';
import { HERO_IMAGE, COMPANY_INFO } from '../data/companyData';

interface HeroProps {
  onOpenQuoteModal: (category?: string) => void;
  onNavigateServices: () => void;
  onNavigateAbout: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenQuoteModal,
  onNavigateServices,
  onNavigateAbout,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const opacityText = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Subtle Mouse Parallax
  const mouseX = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX } = e;
    const { innerWidth } = window;
    mouseX.set((clientX - innerWidth / 2) / 50);
  };

  const handleDirectWhatsApp = () => {
    const textMsg = encodeURIComponent("Hola FERMAELEC, deseo solicitar una cotización para mi proyecto eléctrico.");
    window.open(`https://wa.me/${COMPANY_INFO.phones[0].raw}?text=${textMsg}`, '_blank');
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-20 sm:pt-24 pb-8 sm:pb-12 overflow-hidden bg-white"
    >
      {/* BACKGROUND IMAGE CONTAINER */}
      <motion.div
        style={{ y: bgY, x: springX, scale: 1.03 }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <img
          src={HERO_IMAGE}
          alt="Técnico Fermaelec ante Tableros Eléctricos"
          className="w-full h-full object-cover object-[80%_center] sm:object-right"
          referrerPolicy="no-referrer"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/assets/aistudio/Fermaelec__Soluciones_El_ctricas_Innovadoras_b7ff8c04.png';
          }}
        />
        {/* OVERLAY GRADIENT (Left to right only for text readability) */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 via-45% sm:via-55% to-transparent pointer-events-none" />
      </motion.div>

      {/* HERO MAIN CONTENT */}
      <motion.div
        style={{ y: textY, opacity: opacityText }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-12 md:pt-16 w-full my-auto"
      >
        <div className="max-w-xl sm:max-w-2xl lg:max-w-3xl">
          
          {/* Subtitle kicker: INNOVACIÓN • CALIDAD • CONFIANZA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.25em] text-[#0B2A6B] uppercase mb-2 sm:mb-4 drop-shadow-xs"
          >
            <span>INNOVACIÓN</span>
            <span className="text-[#F7931E] font-bold">•</span>
            <span>CALIDAD</span>
            <span className="text-[#F7931E] font-bold">•</span>
            <span>CONFIANZA</span>
          </motion.div>

          {/* H1 Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#0B2A6B] leading-[1.1] sm:leading-[1.08] tracking-tight mb-3 sm:mb-6"
          >
            Soluciones Eléctricas <br />
            <span className="font-semibold text-[#0B2A6B]">para un </span>
            <span className="font-bold text-[#F7931E]">Mundo Mejor</span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-slate-800 text-sm sm:text-lg md:text-xl font-normal leading-relaxed max-w-lg sm:max-w-xl mb-6 sm:mb-8 drop-shadow-2xs"
          >
            En Fermaelec ofrecemos soluciones integrales en ingeniería eléctrica,
            con los más altos estándares de calidad y un equipo comprometido.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <button
              onClick={onNavigateServices}
              className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#0B2A6B] text-white text-xs sm:text-base font-medium shadow-lg shadow-blue-900/25 hover:bg-[#1D4FD8] hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group cursor-pointer"
            >
              <span>Nuestros Servicios</span>
              <span className="flex items-center justify-center w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-white/20 text-white text-[10px] sm:text-xs group-hover:translate-x-1 transition-transform">
                &gt;
              </span>
            </button>

            <button
              onClick={() => onOpenQuoteModal()}
              className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white/90 border-2 border-[#1D4FD8] text-[#0B2A6B] text-xs sm:text-base font-semibold hover:bg-blue-50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group cursor-pointer shadow-sm"
            >
              <span>Solicita una cotización</span>
              <span className="flex items-center justify-center w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-blue-100 text-[#1D4FD8] text-[10px] sm:text-xs group-hover:translate-x-1 transition-transform">
                &gt;
              </span>
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* BOTTOM SVG WAVES - Clean separator strip that clips the hero background */}
      <div className="relative z-10 w-full mt-6 sm:mt-12 pointer-events-none">
        <svg
          viewBox="0 0 1440 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-16 sm:h-32 md:h-40 object-cover"
          preserveAspectRatio="none"
        >
          {/* Deep blue bottom wave */}
          <path
            d="M0 160H1440V100C1100 150 700 60 0 140V160Z"
            fill="#0B2A6B"
          />
          {/* Electric blue wave */}
          <path
            d="M0 160H1440V120C1000 155 600 75 0 145V160Z"
            fill="#1D4FD8"
            opacity="0.85"
          />
          {/* Curved orange accent stroke */}
          <path
            d="M0 135C400 70 900 150 1440 90"
            stroke="#F7931E"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* 4-BENEFIT BAR */}
      <div className="relative z-20 max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 -mt-4 sm:-mt-10 w-full">
        <div className="bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-3xl shadow-xl shadow-blue-900/10 border border-slate-100 p-3 sm:p-6 md:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 divide-y-0 sm:divide-x divide-slate-100">
            
            {/* Benefit 1 */}
            <div className="flex items-center sm:items-start text-left gap-2.5 sm:gap-3 p-1.5 sm:p-0 sm:px-4">
              <div className="w-8 sm:w-12 h-8 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-50 text-[#1D4FD8] flex items-center justify-center shrink-0 shadow-xs">
                <ShieldCheck className="w-4 sm:w-6 h-4 sm:h-6" />
              </div>
              <div>
                <h3 className="text-xs sm:text-base font-semibold text-[#0B2A6B]">
                  Calidad Garantizada
                </h3>
                <p className="text-[10px] sm:text-xs text-slate-500 font-normal mt-0.5 hidden sm:block">
                  Estándares internacionales COVENIN e IEEE.
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="flex items-center sm:items-start text-left gap-2.5 sm:gap-3 p-1.5 sm:p-0 sm:px-4">
              <div className="w-8 sm:w-12 h-8 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-50 text-[#1D4FD8] flex items-center justify-center shrink-0 shadow-xs">
                <Zap className="w-4 sm:w-6 h-4 sm:h-6" />
              </div>
              <div>
                <h3 className="text-xs sm:text-base font-semibold text-[#0B2A6B]">
                  Soluciones Eficientes
                </h3>
                <p className="text-[10px] sm:text-xs text-slate-500 font-normal mt-0.5 hidden sm:block">
                  Optimización energética y alto rendimiento.
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="flex items-center sm:items-start text-left gap-2.5 sm:gap-3 p-1.5 sm:p-0 sm:px-4">
              <div className="w-8 sm:w-12 h-8 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-50 text-[#1D4FD8] flex items-center justify-center shrink-0 shadow-xs">
                <Handshake className="w-4 sm:w-6 h-4 sm:h-6" />
              </div>
              <div>
                <h3 className="text-xs sm:text-base font-semibold text-[#0B2A6B]">
                  Compromiso Total
                </h3>
                <p className="text-[10px] sm:text-xs text-slate-500 font-normal mt-0.5 hidden sm:block">
                  Responsabilidad y puntualidad asegurada.
                </p>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="flex items-center sm:items-start text-left gap-2.5 sm:gap-3 p-1.5 sm:p-0 sm:px-4">
              <div className="w-8 sm:w-12 h-8 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-50 text-[#1D4FD8] flex items-center justify-center shrink-0 shadow-xs">
                <Cog className="w-4 sm:w-6 h-4 sm:h-6" />
              </div>
              <div>
                <h3 className="text-xs sm:text-base font-semibold text-[#0B2A6B]">
                  Soporte Especializado
                </h3>
                <p className="text-[10px] sm:text-xs text-slate-500 font-normal mt-0.5 hidden sm:block">
                  Ingenieros capacitados a su disposición.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
