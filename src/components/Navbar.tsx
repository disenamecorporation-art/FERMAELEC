import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight, Phone } from 'lucide-react';
import { LOGO_IMAGE, COMPANY_INFO } from '../data/companyData';

interface NavbarProps {
  onOpenQuoteModal: (category?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Productos', path: '/productos' },
    { name: 'Proyectos', path: '/proyectos' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3'
          : 'bg-white/60 backdrop-blur-sm py-4 border-b border-blue-900/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          
          {/* Zone 1: Logo ONLY (no text beside or above, large and clean) */}
          <NavLink to="/" className="flex items-center shrink-0 group">
            <img
              src={LOGO_IMAGE}
              alt="FERMAELEC Logo"
              className="h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              referrerPolicy="no-referrer"
              onError={(e) => {
                // Fallback to SVG logo if image load fails
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent && !parent.querySelector('svg')) {
                  const svgEl = document.createElement('div');
                  svgEl.innerHTML = `<svg width="180" height="48" viewBox="0 0 180 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="18" stroke="#0B2A6B" stroke-width="3" fill="none"/>
                    <path d="M12 24H20L23 16L27 32L30 20L32 24H36" stroke="#F7931E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <text x="48" y="31" font-family="Montserrat" font-weight="400" font-size="20" fill="#0B2A6B" letter-spacing="1">FERMAELEC</text>
                  </svg>`;
                  parent.appendChild(svgEl);
                }
              }}
            />
          </NavLink>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-6">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative px-3 py-2 text-sm lg:text-base font-normal transition-colors duration-200 whitespace-nowrap shrink-0 ${
                      isActive ? 'text-[#0B2A6B] font-medium' : 'text-slate-600 hover:text-[#0B2A6B]'
                    }`
                  }
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-3 right-3 h-[3px] bg-[#F7931E] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action Button */}
          <div className="hidden sm:flex items-center space-x-3 shrink-0">
            <a
              href={`https://wa.me/${COMPANY_INFO.phones[0].raw}?text=${encodeURIComponent("Hola FERMAELEC, deseo solicitar una cotización para mi proyecto eléctrico.")}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0B2A6B] text-white text-sm font-medium shadow-sm hover:bg-[#1D4FD8] hover:shadow-md transition-all duration-300 group cursor-pointer"
            >
              <span>Solicita una cotización</span>
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white/20 text-white text-xs group-hover:translate-x-0.5 transition-transform">
                &gt;
              </span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-[#0B2A6B] hover:bg-slate-100 transition-colors"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xl overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              <div className="flex flex-col space-y-3">
                {navItems.map((item, idx) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <motion.div
                      key={item.path}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <NavLink
                        to={item.path}
                        className={`block py-2 text-lg ${
                          isActive ? 'text-[#0B2A6B] font-medium pl-2 border-l-4 border-[#F7931E]' : 'text-slate-600'
                        }`}
                      >
                        {item.name}
                      </NavLink>
                    </motion.div>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                <a
                  href={`https://wa.me/${COMPANY_INFO.phones[0].raw}?text=${encodeURIComponent("Hola FERMAELEC, deseo solicitar una cotización para mi proyecto eléctrico.")}`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 rounded-full bg-[#0B2A6B] text-white font-medium flex items-center justify-center gap-2 shadow-md"
                >
                  <span>Solicita una cotización</span>
                  <ChevronRight className="w-4 h-4" />
                </a>

                <a
                  href={`https://wa.me/${COMPANY_INFO.phones[0].raw}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 rounded-full border border-[#1D4FD8] text-[#0B2A6B] text-center font-normal flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#F7931E]" />
                  <span>WhatsApp Ventas</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
