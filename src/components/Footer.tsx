import React from 'react';
import { NavLink } from 'react-router-dom';
import { Linkedin, Instagram, Youtube, ArrowUp } from 'lucide-react';
import { LOGO_IMAGE, COMPANY_INFO } from '../data/companyData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Productos', path: '/productos' },
    { name: 'Proyectos', path: '/proyectos' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <footer className="relative bg-white pt-16 pb-20 overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-200">
          
          {/* Left: Brand Logo */}
          <div className="shrink-0">
            <NavLink to="/" className="inline-block">
              <img
                src={LOGO_IMAGE}
                alt="FERMAELEC Logo"
                className="h-12 md:h-14 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </NavLink>
          </div>

          {/* Center: Navigation Links (Darker and bolder per user request) */}
          <nav className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm sm:text-base font-semibold text-[#0B2A6B]">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="hover:text-[#F7931E] transition-colors"
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Right: Social Media Circles & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex items-center space-x-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-blue-100 text-[#0B2A6B] flex items-center justify-center hover:bg-[#0B2A6B] hover:text-white transition-all duration-300 shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-amber-100 text-[#0B2A6B] flex items-center justify-center hover:bg-[#F7931E] hover:text-white transition-all duration-300 shadow-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-blue-100 text-[#0B2A6B] flex items-center justify-center hover:bg-[#0B2A6B] hover:text-white transition-all duration-300 shadow-sm"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>

            <div className="h-6 w-[1px] bg-slate-300 hidden sm:block" />

            <p className="text-xs sm:text-sm font-semibold text-slate-800 text-center sm:text-left">
              © 2025 Fermaelec. Todos los derechos reservados.
            </p>
          </div>
        </div>

        {/* Company RIF, Location info, Credits & Scroll to Top */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between text-xs sm:text-sm text-slate-800 font-medium gap-4">
          <p>RIF: <span className="font-semibold text-[#0B2A6B]">{COMPANY_INFO.rif}</span> | {COMPANY_INFO.address}</p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="text-xs text-slate-600 font-semibold">
              Hecho por <span className="text-[#0B2A6B]">Legaint Corporation</span>
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0B2A6B] hover:text-[#F7931E] transition-colors group cursor-pointer"
            >
              <span>Volver arriba</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative SVG Waves at Footer Base */}
      <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none overflow-hidden">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L1440 120L1440 60C1200 110 900 10 600 80C300 150 100 40 0 60V120Z"
            fill="#0B2A6B"
          />
          <path
            d="M0 120L1440 120L1440 90C1100 120 750 40 450 110C200 160 50 80 0 95V120Z"
            fill="#F7931E"
          />
        </svg>
      </div>
    </footer>
  );
};
