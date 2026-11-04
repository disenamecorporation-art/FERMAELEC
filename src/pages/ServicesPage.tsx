import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  TowerControl as PowerTower,
  Settings,
  Lightbulb,
  Plug,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Headphones
} from 'lucide-react';
import { SERVICES } from '../data/companyData';

interface ServicesPageProps {
  onOpenQuoteModal: (category?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenQuoteModal }) => {
  const [activeTab, setActiveTab] = useState(SERVICES[0].id);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'TowerControl':
        return <PowerTower className="w-8 h-8 text-[#1D4FD8]" />;
      case 'Settings':
        return <Settings className="w-8 h-8 text-[#1D4FD8]" />;
      case 'Lightbulb':
        return <Lightbulb className="w-8 h-8 text-[#1D4FD8]" />;
      case 'Plug':
        return <Plug className="w-8 h-8 text-[#1D4FD8]" />;
      default:
        return <Settings className="w-8 h-8 text-[#1D4FD8]" />;
    }
  };

  const sectors = [
    { name: 'Industrial', desc: 'Plantas manufactureras, procesadoras y manufactura pesada.' },
    { name: 'Petrolero', desc: 'Campos, taladros de perforación, estaciones de flujo y refinerías.' },
    { name: 'Comercial', desc: 'Centros comerciales, edificios corporativos y locales.' },
    { name: 'Residencial', desc: 'Urbanismos, villas de lujo y proyectos habitacionales.' },
    { name: 'Ferretero', desc: 'Distribución al mayor para ferreterías y tiendas eléctricas.' }
  ];

  return (
    <div className="pt-24 pb-20 overflow-x-hidden">
      
      {/* Mini Hero */}
      <section className="relative bg-gradient-to-r from-[#0B2A6B] via-[#0D3482] to-[#1D4FD8] text-white py-20 sm:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-amber-300 text-xs sm:text-sm font-medium tracking-[0.25em] uppercase mb-3"
          >
            INGENIERÍA Y SERVICIOS ESPECIALIZADOS
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-tight"
          >
            Nuestros <span className="font-medium text-[#F7931E]">Servicios</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-blue-100 text-base sm:text-lg font-light max-w-2xl mx-auto mt-4"
          >
            Soluciones integrales diseñadas con rigor técnico, seguridad y máxima eficiencia operativa.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full h-full object-cover" preserveAspectRatio="none">
            <path d="M0 60L1440 60V20C1000 50 600 0 0 30V60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* SERVICE SELECTOR TABS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <div className="flex items-center justify-center gap-2 p-1.5 bg-slate-100 rounded-2xl overflow-x-auto max-w-4xl mx-auto">
          {SERVICES.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              className={`px-5 py-3 rounded-xl text-sm font-normal whitespace-nowrap transition-all duration-300 cursor-pointer ${
                activeTab === s.id
                  ? 'bg-white text-[#0B2A6B] shadow-md font-medium'
                  : 'text-slate-600 hover:text-[#0B2A6B]'
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>
      </section>

      {/* EXTENDED SERVICES LIST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 mb-24">
        {SERVICES.map((service, index) => {
          const isSelected = activeTab === service.id;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`glass-card rounded-3xl p-8 sm:p-12 transition-all duration-500 border ${
                isSelected ? 'ring-2 ring-[#1D4FD8] shadow-2xl bg-white' : 'border-slate-100 opacity-90'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Header info */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center shadow-sm">
                    {getServiceIcon(service.icon)}
                  </div>

                  <span className="text-xs font-medium tracking-widest text-[#F7931E] uppercase">
                    0{index + 1}. SERVICIO ESPECIALIZADO
                  </span>

                  <h2 className="text-3xl font-light text-[#0B2A6B]">
                    {service.title}
                  </h2>

                  <p className="text-slate-600 text-base font-light leading-relaxed">
                    {service.fullDesc}
                  </p>

                  <div className="pt-4">
                    <button
                      onClick={() => onOpenQuoteModal(service.title)}
                      className="px-6 py-3 rounded-full bg-[#0B2A6B] text-white text-sm font-normal hover:bg-[#1D4FD8] transition-colors flex items-center gap-2 cursor-pointer shadow-md"
                    >
                      <span>Solicitar Cotización de {service.title}</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Features list */}
                <div className="lg:col-span-7 bg-blue-50/50 rounded-2xl p-6 sm:p-8 space-y-4 border border-blue-100/60">
                  <h3 className="text-lg font-normal text-[#0B2A6B]">
                    Alcances y Capacidades Técnicas:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-xs border border-slate-100">
                        <CheckCircle2 className="w-5 h-5 text-[#F7931E] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-700 font-light">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          );
        })}
      </section>

      {/* SECTORES ATENDIDOS */}
      <section className="bg-slate-50 py-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-medium tracking-[0.25em] text-[#F7931E] uppercase">
              COBERUTRA Y APLICACIÓN
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#0B2A6B] mt-2">
              Sectores Atendidos
            </h2>
            <p className="text-slate-600 text-sm font-light mt-2">
              Atendemos de manera experta la demanda de energía en diversos sectores productivos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {sectors.map((sec, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center hover:border-blue-300 transition-colors">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-[#1D4FD8] flex items-center justify-center mx-auto mb-4 font-semibold text-sm">
                  0{i + 1}
                </div>
                <h3 className="text-base font-normal text-[#0B2A6B] mb-2">{sec.name}</h3>
                <p className="text-xs text-slate-500 font-light">{sec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VENTA Y POST-VENTA HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="glass-card-blue rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6">
          <div className="w-16 h-16 rounded-full bg-white text-[#0B2A6B] flex items-center justify-center mx-auto shadow-md">
            <Headphones className="w-8 h-8 text-[#F7931E]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-light text-[#0B2A6B]">
            Excelente Servicio de Ventas y Post-Ventas
          </h2>
          <p className="text-slate-700 text-base font-light max-w-2xl mx-auto leading-relaxed">
            Acompañamos a nuestros clientes desde el levantamiento inicial y selección del producto adecuado, hasta el seguimiento posterior a la instalación para asegurar el rendimiento óptimo de sus equipos.
          </p>
          <button
            onClick={() => onOpenQuoteModal()}
            className="px-8 py-3.5 rounded-full bg-[#0B2A6B] text-white font-normal hover:bg-[#1D4FD8] transition-colors shadow-lg"
          >
            Hablar con Asesor de Ventas &gt;
          </button>
        </div>
      </section>

    </div>
  );
};
