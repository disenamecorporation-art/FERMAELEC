import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Lenis from 'lenis';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { LoadingScreen } from './components/LoadingScreen';
import { ScrollToTop } from './components/ScrollToTop';
import { QuoteModal } from './components/QuoteModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProductsPage } from './pages/ProductsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteCategory, setQuoteCategory] = useState<string | undefined>(undefined);

  // Smooth Scroll Lenis initialization
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleOpenQuoteModal = (category?: string) => {
    setQuoteCategory(category);
    setQuoteModalOpen(true);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans selection:bg-amber-400 selection:text-slate-900 relative">
        
        {/* Intro Loading Animation */}
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}

        {/* Scroll Helper */}
        <ScrollToTop />

        {/* Header Navigation */}
        <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Main Content Area */}
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={<HomePage onOpenQuoteModal={handleOpenQuoteModal} />}
            />
            <Route
              path="/nosotros"
              element={<AboutPage onOpenQuoteModal={() => handleOpenQuoteModal()} />}
            />
            <Route
              path="/servicios"
              element={<ServicesPage onOpenQuoteModal={handleOpenQuoteModal} />}
            />
            <Route
              path="/productos"
              element={<ProductsPage onOpenQuoteModal={handleOpenQuoteModal} />}
            />
            <Route
              path="/proyectos"
              element={<ProjectsPage onOpenQuoteModal={handleOpenQuoteModal} />}
            />
            <Route
              path="/contacto"
              element={<ContactPage />}
            />
            {/* Fallback to Home */}
            <Route
              path="*"
              element={<HomePage onOpenQuoteModal={handleOpenQuoteModal} />}
            />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Quote Modal */}
        <QuoteModal
          isOpen={quoteModalOpen}
          onClose={() => setQuoteModalOpen(false)}
          defaultCategory={quoteCategory}
        />

      </div>
    </BrowserRouter>
  );
}
