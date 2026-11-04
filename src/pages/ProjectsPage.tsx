import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, MapPin, Building2, CheckCircle2, X } from 'lucide-react';
import { PROJECTS } from '../data/companyData';

interface ProjectsPageProps {
  onOpenQuoteModal: (category?: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onOpenQuoteModal }) => {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  const sectors = ['Todos', 'Industrial', 'Petrolero', 'Comercial', 'Residencial'];

  const filteredProjects = activeFilter === 'Todos'
    ? PROJECTS
    : PROJECTS.filter((p) => p.sector === activeFilter);

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
            GALERÍA DE OBRAS Y MONTAJES ELÉCTRICOS
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-tight"
          >
            Nuestros <span className="font-medium text-[#F7931E]">Proyectos</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-blue-100 text-base sm:text-lg font-light max-w-2xl mx-auto mt-4"
          >
            Muestras de proyectos ejecutados con los más altos niveles de rigor y precisión de ingeniería.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full h-full object-cover" preserveAspectRatio="none">
            <path d="M0 60L1440 60V20C1000 50 600 0 0 30V60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
        <div className="flex items-center justify-center gap-2 p-1.5 bg-slate-100 rounded-2xl max-w-2xl mx-auto">
          {sectors.map((sec) => (
            <button
              key={sec}
              onClick={() => setActiveFilter(sec)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-normal transition-all cursor-pointer ${
                activeFilter === sec
                  ? 'bg-[#0B2A6B] text-white shadow-md font-medium'
                  : 'text-slate-600 hover:text-[#0B2A6B]'
              }`}
            >
              {sec}
            </button>
          ))}
        </div>
      </section>

      {/* PROJECTS GALLERY GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                onClick={() => setSelectedProject(project)}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl hover:border-blue-200 transition-all cursor-pointer group flex flex-col"
              >
                <div className="relative h-60 overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-[#0B2A6B]/80 backdrop-blur-md text-white text-xs font-normal px-3 py-1 rounded-full">
                    {project.sector}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-[#F7931E] font-medium mb-2">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{project.location}</span>
                    </div>

                    <h3 className="text-xl font-normal text-[#0B2A6B] mb-2 group-hover:text-[#1D4FD8] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-slate-600 text-sm font-light leading-relaxed line-clamp-3">
                      {project.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-medium text-[#1D4FD8] flex items-center justify-between">
                    <span>Ver detalles del proyecto &gt;</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* LIGHTBOX MODAL FOR PROJECT DETAILS */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-slate-900/70 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10 my-8 border border-slate-100"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-900/50 hover:bg-slate-900 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="h-72 sm:h-80 overflow-hidden relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="bg-[#F7931E] text-white text-xs px-3 py-1 rounded-full uppercase tracking-wider font-medium mb-2 inline-block">
                    {selectedProject.sector}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-light">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <div className="flex items-center gap-2 text-sm text-[#0B2A6B]">
                  <MapPin className="w-4 h-4 text-[#F7931E]" />
                  <span className="font-medium">Ubicación:</span>
                  <span>{selectedProject.location}</span>
                </div>

                <p className="text-slate-600 text-base font-light leading-relaxed">
                  {selectedProject.desc}
                </p>

                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 space-y-3">
                  <h4 className="text-sm font-normal text-[#0B2A6B]">Estándares aplicados:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F7931E]" />
                      <span>Certificación COVENIN</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F7931E]" />
                      <span>Suministros probados en laboratorio</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    onClick={() => {
                      const title = selectedProject.title;
                      setSelectedProject(null);
                      onOpenQuoteModal(title);
                    }}
                    className="px-6 py-3 rounded-full bg-[#0B2A6B] text-white text-sm font-normal hover:bg-[#1D4FD8] transition-colors"
                  >
                    Cotizar Proyecto Similar &gt;
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
