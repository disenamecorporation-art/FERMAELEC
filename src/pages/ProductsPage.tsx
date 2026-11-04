import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Zap,
  Home,
  Wrench,
  ShieldAlert,
  Activity,
  Sun,
  Layers,
  Radio,
  Grid,
  ShieldCheck,
  Flame,
  Sparkles,
  ShoppingBag,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { PRODUCT_CATEGORIES, PARTNER_BRANDS } from '../data/companyData';

interface ProductsPageProps {
  onOpenQuoteModal: (category?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onOpenQuoteModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<number | 'all'>('all');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-8 h-8 text-[#1D4FD8]" />;
      case 'Home':
        return <Home className="w-8 h-8 text-[#1D4FD8]" />;
      case 'Wrench':
        return <Wrench className="w-8 h-8 text-[#1D4FD8]" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-8 h-8 text-[#1D4FD8]" />;
      case 'Activity':
        return <Activity className="w-8 h-8 text-[#1D4FD8]" />;
      case 'Sun':
        return <Sun className="w-8 h-8 text-[#1D4FD8]" />;
      case 'Layers':
        return <Layers className="w-8 h-8 text-[#1D4FD8]" />;
      case 'Radio':
        return <Radio className="w-8 h-8 text-[#1D4FD8]" />;
      case 'Grid':
        return <Grid className="w-8 h-8 text-[#1D4FD8]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-8 h-8 text-[#1D4FD8]" />;
      case 'Flame':
        return <Flame className="w-8 h-8 text-[#1D4FD8]" />;
      default:
        return <Zap className="w-8 h-8 text-[#1D4FD8]" />;
    }
  };

  const filteredCategories = selectedCategory === 'all'
    ? PRODUCT_CATEGORIES
    : PRODUCT_CATEGORIES.filter((c) => c.id === selectedCategory);

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
            CATÁLOGO Y SUMINISTROS ELÉCTRICOS
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-tight"
          >
            Materiales y <span className="font-medium text-[#F7931E]">Productos</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-blue-100 text-base sm:text-lg font-light max-w-2xl mx-auto mt-4"
          >
            Equipos y materiales para Alta, Media y Baja Tensión con respaldo de marcas nacionales e internacionales.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full h-full object-cover" preserveAspectRatio="none">
            <path d="M0 60L1440 60V20C1000 50 600 0 0 30V60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* INFINITE MARQUEE OF ALLIED BRANDS */}
      <section className="bg-slate-900 text-white py-6 overflow-hidden border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-xs font-medium uppercase tracking-widest text-slate-400 mb-3 text-center">
          Marcas Aliadas y Distribución Oficial
        </div>
        
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap flex items-center space-x-12 sm:space-x-16">
            {PARTNER_BRANDS.concat(PARTNER_BRANDS).map((brand, idx) => (
              <span
                key={idx}
                className="text-lg sm:text-2xl font-light text-slate-300 hover:text-[#F7931E] transition-colors cursor-default tracking-wider"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORY FILTER CONTROL BUTTONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
        <div className="flex flex-wrap items-center justify-center gap-2 p-2 bg-slate-100 rounded-2xl max-w-5xl mx-auto">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-normal transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#0B2A6B] text-white shadow-md font-medium'
                : 'text-slate-600 hover:text-[#0B2A6B]'
            }`}
          >
            Todas las Categorías ({PRODUCT_CATEGORIES.length})
          </button>
          {PRODUCT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-normal transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#0B2A6B] text-white shadow-md font-medium'
                  : 'text-slate-600 hover:text-[#0B2A6B]'
              }`}
            >
              {cat.id}. {cat.title.split(' ')[0]}...
            </button>
          ))}
        </div>
      </section>

      {/* PRODUCT CATEGORIES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredCategories.map((category) => (
              <motion.div
                key={category.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="glass-card rounded-3xl p-8 flex flex-col justify-between border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-[#1D4FD8] group-hover:text-white transition-colors duration-300">
                      {getCategoryIcon(category.icon)}
                    </div>
                    <span className="text-xs font-mono text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
                      Cat. 0{category.id}
                    </span>
                  </div>

                  <h3 className="text-xl font-normal text-[#0B2A6B] mb-3 group-hover:text-[#1D4FD8] transition-colors">
                    {category.title}
                  </h3>

                  <p className="text-slate-600 text-sm font-light mb-6 leading-relaxed">
                    {category.desc}
                  </p>

                  <div className="space-y-2 border-t border-slate-100 pt-4 mb-6">
                    <span className="text-xs font-medium text-[#0B2A6B] block uppercase tracking-wider mb-2">
                      Productos destacadas:
                    </span>
                    {category.items.map((item, iIdx) => (
                      <div key={iIdx} className="flex items-center gap-2 text-xs text-slate-600 font-light">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#F7931E] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => onOpenQuoteModal(category.title)}
                    className="w-full py-3 rounded-full bg-blue-50 text-[#0B2A6B] text-xs font-medium hover:bg-[#0B2A6B] hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer group-hover:shadow-md"
                  >
                    <ShoppingBag className="w-4 h-4 text-[#F7931E]" />
                    <span>Solicitar Cotización &gt;</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* CATALOG DOWNLOAD & CONSULTATION CTA */}
      <section className="bg-gradient-to-r from-[#0B2A6B] to-[#1D4FD8] text-white py-16">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-light">
            ¿Buscas un código de parte o requerimiento especial?
          </h2>
          <p className="text-blue-100 text-sm font-light max-w-xl mx-auto">
            Disponemos de un amplio stock de entrega inmediata y gestión de importaciones directas para proyectos petroleros e industriales.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenQuoteModal()}
              className="px-8 py-3.5 rounded-full bg-[#F7931E] text-white font-normal hover:bg-amber-600 shadow-lg"
            >
              Consultar Disponibilidad de Stock &gt;
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
