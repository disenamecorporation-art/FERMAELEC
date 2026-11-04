import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  FileText,
  Send,
  CheckCircle2,
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { COMPANY_INFO, PRODUCT_CATEGORIES } from '../data/companyData';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      const textMessage = `Hola FERMAELEC, mensaje desde la web:
• Nombre: ${name}
• Empresa: ${company || 'Particular'}
• Teléfono: ${phone}
• Correo: ${email}
• Interés: ${category || 'General'}
• Mensaje: ${message}`;
      const encodedMsg = encodeURIComponent(textMessage);
      window.open(`https://wa.me/${COMPANY_INFO.phones[0].raw}?text=${encodedMsg}`, '_blank');
    }, 1200);
  };

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
            CANALES DIRECTOS DE ATENCIÓN
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-tight"
          >
            Contáctanos <span className="font-medium text-[#F7931E]">Hoy Mismo</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-blue-100 text-base sm:text-lg font-light max-w-2xl mx-auto mt-4"
          >
            Estamos listos para atender tus solicitudes de cotización, proyectos e información comercial.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full h-full object-cover" preserveAspectRatio="none">
            <path d="M0 60L1440 60V20C1000 50 600 0 0 30V60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* MAIN CONTENT 2-COLUMN GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 glass-card rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-xl"
          >
            <h2 className="text-2xl sm:text-3xl font-light text-[#0B2A6B] mb-2">
              Envíanos un <span className="font-medium text-[#F7931E]">Mensaje</span>
            </h2>
            <p className="text-slate-600 text-sm font-light mb-8">
              Completa el formulario y nuestro departamento de ventas te responderá a la brevedad.
            </p>

            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-light text-[#0B2A6B]">¡Mensaje Enviado!</h3>
                <p className="text-slate-600 text-sm mt-2 max-w-md">
                  Redirigiendo a nuestro WhatsApp de Ventas para atención inmediata.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 rounded-full bg-[#0B2A6B] text-white text-sm"
                >
                  Enviar otro mensaje
                </button>
              </div>
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
                      placeholder="Tu nombre completo"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#1D4FD8] focus:ring-1 focus:ring-[#1D4FD8]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Empresa
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Nombre de tu empresa"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#1D4FD8] focus:ring-1 focus:ring-[#1D4FD8]"
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
                      placeholder="correo@ejemplo.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#1D4FD8] focus:ring-1 focus:ring-[#1D4FD8]"
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
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#1D4FD8] focus:ring-1 focus:ring-[#1D4FD8]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Interés Principal
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#1D4FD8] focus:ring-1 focus:ring-[#1D4FD8]"
                  >
                    <option value="">-- Selecciona un interés --</option>
                    <option value="Suministro Eléctrico">Suministro de Materiales Eléctricos</option>
                    <option value="Proyecto de Ingeniería">Proyecto / Montaje Eléctrico</option>
                    <option value="Mantenimiento">Mantenimiento de Instalaciones</option>
                    <option value="Asesoría Técnica">Asesoría Técnica / Cotización Especial</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Mensaje / Requerimiento *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Escribe tu mensaje o solicitud detallada..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#1D4FD8] focus:ring-1 focus:ring-[#1D4FD8]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-gradient-to-r from-[#F7931E] to-[#e8810c] text-white font-medium text-sm shadow-lg shadow-amber-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Mensaje a Ventas &gt;</span>
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Right Column: Information Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Address */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-100 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1D4FD8] flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-normal text-[#0B2A6B] mb-1">Ubicación Principal</h3>
                <p className="text-sm text-slate-600 font-light leading-relaxed">
                  {COMPANY_INFO.address}
                </p>
              </div>
            </div>

            {/* Telephones */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-100 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F7931E] flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div className="space-y-2 w-full">
                <h3 className="text-base font-normal text-[#0B2A6B]">Teléfonos de Contacto</h3>
                {COMPANY_INFO.phones.map((phone, pIdx) => (
                  <div key={pIdx} className="flex flex-wrap items-center justify-between text-sm text-slate-600 font-light pt-1 border-t border-slate-100">
                    <span>{phone.label}:</span>
                    <a
                      href={pIdx === 0 ? `https://wa.me/${phone.raw}` : `tel:${phone.raw}`}
                      target={pIdx === 0 ? "_blank" : "_self"}
                      rel="noreferrer"
                      className="font-medium text-[#0B2A6B] hover:text-[#F7931E] transition-colors"
                    >
                      {phone.number}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Emails */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-100 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1D4FD8] flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-normal text-[#0B2A6B] mb-1">Correos Electrónicos</h3>
                <div className="space-y-1 text-sm text-slate-600 font-light">
                  {COMPANY_INFO.emails.map((email, eIdx) => (
                    <a
                      key={eIdx}
                      href={`mailto:${email}`}
                      className="block text-[#0B2A6B] hover:text-[#F7931E] transition-colors"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* RIF & Web */}
            <div className="glass-card-blue rounded-3xl p-6 sm:p-8 border border-blue-100 flex items-center justify-between text-sm text-[#0B2A6B]">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#F7931E]" />
                <span className="font-medium">RIF: {COMPANY_INFO.rif}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#1D4FD8]" />
                <span className="font-medium">{COMPANY_INFO.website}</span>
              </div>
            </div>

          </motion.div>

        </div>
      </section>

      {/* EMBEDDED GOOGLE MAPS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-8">
          <span className="text-xs font-medium tracking-[0.25em] text-[#F7931E] uppercase">
            GEOLOCALIZACIÓN
          </span>
          <h2 className="text-3xl font-light text-[#0B2A6B] mt-1">
            Encuéntranos en Anaco, Anzoátegui
          </h2>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-96 relative">
          <iframe
            title="Mapa Fermaelec Anaco"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31481.545199616336!2d-64.4815488!3d9.4385153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c322b7c430a9117%3A0xb3082a5f6eefc46a!2sAnaco%2C%20Anzoategui%2C%20Venezuela!5e0!3m2!1ses!2s!4v1700000000000!5m2!1ses!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

    </div>
  );
};
