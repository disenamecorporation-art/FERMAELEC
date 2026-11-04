import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Award, CheckCircle } from 'lucide-react';
import { COMPANY_INFO, STATS } from '../data/companyData';

interface AboutPageProps {
  onOpenQuoteModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="pt-24 pb-20 overflow-x-hidden">
      
      {/* Mini-Hero */}
      <section className="relative bg-gradient-to-r from-[#0B2A6B] via-[#0D3482] to-[#1D4FD8] text-white py-20 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="white" className="w-full h-full object-cover">
            <polygon points="50,0 20,60 50,60 30,100 80,40 50,40" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-amber-300 text-xs sm:text-sm font-medium tracking-[0.25em] uppercase mb-3"
          >
            NUESTRA HISTORIA Y FILOSOFÍA
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-tight"
          >
            Conoce <span className="font-medium text-[#F7931E]">{COMPANY_INFO.shortName}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-blue-100 text-base sm:text-lg font-light max-w-2xl mx-auto mt-4"
          >
            Empresa venezolana pionera en la comercialización, distribución y desarrollo de proyectos eléctricos integrales.
          </motion.p>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full h-full object-cover" preserveAspectRatio="none">
            <path d="M0 60L1440 60V20C1000 50 600 0 0 30V60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* STATS COUNT-UP STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 mb-20">
        <div className="glass-card rounded-3xl p-8 shadow-xl border border-blue-100 bg-white/90">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {STATS.map((stat, idx) => (
              <div key={idx} className="text-center pt-4 sm:pt-0">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#0B2A6B]">
                  {stat.value}
                  <span className="text-[#F7931E] font-medium">{stat.suffix}</span>
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-light mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISIÓN, VISIÓN & POLÍTICA DE CALIDAD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 mb-24">
        
        {/* MISIÓN */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-card rounded-3xl p-8 sm:p-12 border border-slate-100"
        >
          <div className="lg:col-span-4 flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-amber-50 text-[#F7931E] flex items-center justify-center shrink-0">
              <Target className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-medium tracking-widest text-[#F7931E] uppercase block mb-1">
                OBJETIVO CENTRAL
              </span>
              <h2 className="text-3xl font-light text-[#0B2A6B]">Nuestra Misión</h2>
            </div>
          </div>

          <div className="lg:col-span-8 text-slate-600 text-base font-light leading-relaxed">
            Proveer y suministrar materiales de alta calidad a todos nuestros clientes que satisfagan sus expectativas y necesidades, brindándoles una asesoría técnica y comercial en la adquisición de reconocidas marcas nacionales e internacionales que redunde en el beneficio mutuo de la relación comercial existente entre nuestra empresa y el cliente.
          </div>
        </motion.div>

        {/* VISIÓN */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-card-blue rounded-3xl p-8 sm:p-12"
        >
          <div className="lg:col-span-4 flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-blue-100 text-[#1D4FD8] flex items-center justify-center shrink-0">
              <Eye className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-medium tracking-widest text-[#1D4FD8] uppercase block mb-1">
                PROYECCIÓN FUTURA
              </span>
              <h2 className="text-3xl font-light text-[#0B2A6B]">Nuestra Visión</h2>
            </div>
          </div>

          <div className="lg:col-span-8 text-slate-700 text-base font-light leading-relaxed">
            Fermaelec, C.A. se proyecta como una empresa de suministros y servicios de materiales, herramientas, maquinarias y equipos en el ramo de electricidad en general, para el sector Industrial, Petrolero, Ferretero y Doméstico, que se mantiene en el tiempo por ser líder y pionera del nuevo concepto de filosofía empresarial en las actividades de ventas y servicios en el ramo eléctrico, aunado al excelente servicio de ventas que brinda a todos sus clientes en general.
          </div>
        </motion.div>

        {/* POLÍTICA DE CALIDAD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-100 space-y-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Award className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-medium tracking-widest text-emerald-600 uppercase block mb-1">
                EXCELENCIA OPERATIVA
              </span>
              <h2 className="text-3xl font-light text-[#0B2A6B]">Políticas de Calidad</h2>
            </div>
          </div>

          <p className="text-slate-600 text-base font-light leading-relaxed">
            Fermaelec tiene como política de calidad asumir el compromiso del mejoramiento continuo y permanente en todas sus gestiones operativas y comerciales, por medio de un equipo humano que constantemente asume el compromiso y el reto de mejorar la gestión comercial de la empresa con su entorno, bajo lineamientos y pautas de calidad acordes con su filosofía empresarial.
          </p>

          <p className="text-slate-600 text-base font-light leading-relaxed">
            Nuestra política de calidad puede medirse, mediante nuestro desempeño en el servicio prestado a nuestros clientes en las distintas etapas de los procesos internos y externos, cumpliendo con las normativas y procedimientos vigentes concernientes a la calidad en las diversas áreas administrativas, contables, tributarias, legales, logística, comercial; y en los servicios de ventas y post-ventas, con un alto nivel ético. Logrando así la satisfacción de nuestros clientes al proporcionarles productos y materiales eléctricos, respaldados y sustentados por los más altos niveles y estándares de calidad que se requieren en el área de electricidad en general.
          </p>

          <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-100 text-sm">
            <div className="flex items-center gap-2 text-[#0B2A6B]">
              <CheckCircle className="w-4 h-4 text-[#F7931E]" />
              <span>Mejoramiento Continuo</span>
            </div>
            <div className="flex items-center gap-2 text-[#0B2A6B]">
              <CheckCircle className="w-4 h-4 text-[#F7931E]" />
              <span>Alto Nivel Ético</span>
            </div>
            <div className="flex items-center gap-2 text-[#0B2A6B]">
              <CheckCircle className="w-4 h-4 text-[#F7931E]" />
              <span>Cumplimiento COVENIN / IEEE</span>
            </div>
          </div>
        </motion.div>

      </section>

      {/* TIMELINE SECTION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <span className="text-xs font-medium tracking-[0.25em] text-[#F7931E] uppercase block mb-1">
            TRAYECTORIA Y CRECIMIENTO
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-[#0B2A6B]">
            Nuestra Historia
          </h2>
        </div>

        <div className="relative border-l-2 border-blue-100 ml-4 sm:ml-32 space-y-12">
          
          <div className="relative pl-8">
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#F7931E] ring-4 ring-amber-100" />
            <span className="text-sm font-semibold text-[#0B2A6B] bg-blue-50 px-3 py-1 rounded-full inline-block mb-2 sm:absolute sm:-left-32 sm:top-0 sm:mb-0">
              Constitución
            </span>
            <h3 className="text-xl font-normal text-[#0B2A6B]">Nacimiento de FERMAELEC, C.A.</h3>
            <p className="text-slate-600 text-sm font-light mt-1">
              Fundación en Anaco, Estado Anzoátegui, con la misión de servir al sector industrial y petrolero del oriente venezolano.
            </p>
          </div>

          <div className="relative pl-8">
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#1D4FD8] ring-4 ring-blue-100" />
            <span className="text-sm font-semibold text-[#0B2A6B] bg-blue-50 px-3 py-1 rounded-full inline-block mb-2 sm:absolute sm:-left-32 sm:top-0 sm:mb-0">
              Expansión
            </span>
            <h3 className="text-xl font-normal text-[#0B2A6B]">Alianzas con Marcas Internacionales</h3>
            <p className="text-slate-600 text-sm font-light mt-1">
              Consolidación de la distribución directa de marcas líderes como 3M, Elecon, Burndy, Klein Tools y Square D.
            </p>
          </div>

          <div className="relative pl-8">
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#0B2A6B] ring-4 ring-blue-100" />
            <span className="text-sm font-semibold text-[#0B2A6B] bg-blue-50 px-3 py-1 rounded-full inline-block mb-2 sm:absolute sm:-left-32 sm:top-0 sm:mb-0">
              Liderazgo
            </span>
            <h3 className="text-xl font-normal text-[#0B2A6B]">Servicios de Ingeniería Integrales</h3>
            <p className="text-slate-600 text-sm font-light mt-1">
              Apertura del departamento de obras de montaje eléctrico en Alta, Media y Baja Tensión, atendiendo a más de 500 clientes.
            </p>
          </div>

        </div>
      </section>

      {/* SLOGAN BANNER */}
      <section className="bg-gradient-to-r from-[#0B2A6B] to-[#1D4FD8] text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light italic text-amber-300">
            "{COMPANY_INFO.slogan}"
          </h2>
          <div className="mt-8">
            <a
              href={`https://wa.me/${COMPANY_INFO.phones[0].raw}?text=${encodeURIComponent("Hola FERMAELEC, deseo contactar a un asesor comercial.")}`}
              target="_blank"
              rel="noreferrer"
              className="inline-block px-8 py-3.5 rounded-full bg-[#F7931E] text-white font-normal hover:bg-amber-600 shadow-lg transition-all"
            >
              Contactar a un Asesor &gt;
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
