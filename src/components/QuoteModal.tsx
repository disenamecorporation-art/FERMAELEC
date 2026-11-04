import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Send, Sparkles } from 'lucide-react';
import { PRODUCT_CATEGORIES, COMPANY_INFO } from '../data/companyData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultCategory = ''
}) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState(defaultCategory);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultCategory) {
      setCategory(defaultCategory);
    }
  }, [defaultCategory]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Create WhatsApp prefilled message URL
      const textMessage = `Hola FERMAELEC, deseo solicitar una cotización:
• Nombre: ${name}
• Empresa: ${company || 'Particular'}
• Teléfono: ${phone}
• Interés/Categoría: ${category || 'General'}
• Mensaje: ${message}`;
      const encodedMsg = encodeURIComponent(textMessage);
      window.open(`https://wa.me/${COMPANY_INFO.phones[0].raw}?text=${encodedMsg}`, '_blank');
    }, 1200);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setCompany('');
    setEmail('');
    setPhone('');
    setMessage('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 z-10"
          >
            {/* Header banner with navy blue gradient */}
            <div className="bg-gradient-to-r from-[#0B2A6B] to-[#1D4FD8] px-8 py-6 text-white relative">
              <button
                onClick={onClose}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-normal tracking-wider uppercase mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                Atención Inmediata
              </span>
              <h2 className="text-2xl sm:text-3xl font-light">Solicita tu Cotización</h2>
              <p className="text-blue-100 text-sm font-light mt-1">
                Recibe asesoría técnica personalizada y presupuesto a la medida.
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8">
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="py-12 text-center flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-light text-[#0B2A6B]">¡Solicitud Enviada!</h3>
                  <p className="text-slate-600 text-sm mt-2 max-w-md">
                    Redirigiendo a nuestro canal directo de WhatsApp Ventas. Un asesor técnico de Fermaelec te atenderá en breve.
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-6 px-6 py-2.5 rounded-full bg-[#0B2A6B] text-white text-sm font-normal shadow-sm hover:bg-[#1D4FD8]"
                  >
                    Cerrar ventana
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ej. Ing. Roberto Mendoza"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#1D4FD8] focus:ring-1 focus:ring-[#1D4FD8]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Empresa / Organización
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Ej. Corp. Industrial C.A."
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#1D4FD8] focus:ring-1 focus:ring-[#1D4FD8]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="contacto@empresa.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#1D4FD8] focus:ring-1 focus:ring-[#1D4FD8]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+58 414 0000000"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#1D4FD8] focus:ring-1 focus:ring-[#1D4FD8]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Categoría o Servicio de Interés
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#1D4FD8] focus:ring-1 focus:ring-[#1D4FD8]"
                    >
                      <option value="">-- Selecciona una opción --</option>
                      <optgroup label="Servicios de Ingeniería">
                        <option value="Instalaciones Eléctricas">Instalaciones Eléctricas</option>
                        <option value="Mantenimiento Eléctrico">Mantenimiento Eléctrico</option>
                        <option value="Asesoría Técnica">Asesoría Técnica</option>
                        <option value="Suministro Eléctrico General">Suministro Eléctrico General</option>
                      </optgroup>
                      <optgroup label="Categorías de Materiales">
                        {PRODUCT_CATEGORIES.map((cat) => (
                          <option key={cat.id} value={cat.title}>
                            {cat.title}
                          </option>
                        ))}
                      </optgroup>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Detalles de la Solicitud / Especificaciones
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe las cantidades, referencias o especificaciones técnicas requeridas..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#1D4FD8] focus:ring-1 focus:ring-[#1D4FD8]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#F7931E] to-[#e8810c] text-white font-medium text-sm shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Enviar Solicitud a Ventas &gt;</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
