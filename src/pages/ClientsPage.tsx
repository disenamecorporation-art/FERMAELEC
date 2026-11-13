import React from 'react';
import { motion } from 'motion/react';
import { Building2, ShieldCheck, ArrowRight } from 'lucide-react';
import { MAIN_CLIENTS, PARTNER_BRANDS } from '../data/companyData';

interface ClientsPageProps {
  onOpenQuoteModal: (category?: string) => void;
}

export const ClientsPage: React.FC<ClientsPageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="pt-24 pb-20 overflow-x-hidden">
      {/* Mini-Hero */}
      <section className="relative bg-gradient-to-r from-[#0B2A6B] via-[#0D3482] to-[#1D4FD8] text-white py-20 sm:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-amber-300 text-xs sm:text-sm font-medium tracking-[0.25em] uppercase mb-3"
          >
            RESPALDO Y CONFIANZA CORPORATIVA
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-tight"
          >
            Algunos de Nuestros <span className="font-medium text-[#F7931E]">Principales Clientes</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-blue-100 text-base sm:text-lg font-light max-w-2xl mx-auto mt-4"
          >
            Empresas líderes de los sectores industrial, petrolero, petroquímico y de la construcción confían en nuestra calidad y suministro oportuno.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full h-full object-cover" preserveAspectRatio="none">
            <path d="M0 60L1440 60V20C1000 50 600 0 0 30V60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* CLIENTS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {MAIN_CLIENTS.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{ y: -4 }}
              className="glass-card rounded-3xl p-7 sm:p-8 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1D4FD8] flex items-center justify-center">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-slate-500 tabular-nums">
                    0{index + 1}
                  </span>
                </div>

                <h2 className="text-xl font-medium text-[#0B2A6B] mb-2">
                  {client.name}
                </h2>

                <p className="text-sm text-slate-600 font-normal">
                  {client.sector}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-[#0B2A6B] font-medium">
                <ShieldCheck className="w-4 h-4 text-[#F7931E] shrink-0" />
                <span>Cliente Corporativo Verificado</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MARCAS ALIADAS */}
      <section className="bg-slate-50 py-14 border-y border-slate-200 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-medium tracking-[0.25em] text-[#F7931E] uppercase block mb-2">
            RESPALDO DE FABRICANTES
          </span>
          <h2 className="text-2xl sm:text-3xl font-light text-[#0B2A6B] mb-8">
            Suministramos Marcas Reconocidas
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-slate-700 text-base sm:text-lg font-medium">
            {PARTNER_BRANDS.map((brand, idx) => (
              <span key={idx} className="hover:text-[#F7931E] transition-colors">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#0B2A6B] to-[#1D4FD8] text-white rounded-3xl p-8 sm:p-12 text-center space-y-5 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-light">
            ¿Deseas integrarte a nuestra cartera de clientes corporativos?
          </h2>
          <p className="text-blue-100 text-sm sm:text-base font-light max-w-2xl mx-auto">
            Atendemos requerimientos de procura industrial, construcción y suministro eléctrico continuo en todo el territorio nacional.
          </p>
          <button
            onClick={() => onOpenQuoteModal('Procura / Suministro Corporativo')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#F7931E] text-white text-sm sm:text-base font-medium hover:bg-amber-600 transition-all shadow-lg cursor-pointer"
          >
            <span>Solicita una cotización</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
