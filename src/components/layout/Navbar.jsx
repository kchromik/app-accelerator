import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { LAUNCH_MODE } from '@/config';

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const navItems = [
  { label: "So funktioniert's", id: "ablauf" },
  { label: "Module", id: "modules" },
  { label: "FAQ", id: "faq" },
];

const Navbar = ({ scrollToPricing }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-16 ${
          isScrolled || isMobileMenuOpen
            ? 'bg-white/70 backdrop-blur-xl border-b border-[#EEEEEE]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 h-full">
          <div className="flex justify-between items-center h-full">
            <a
              href="#"
              className="flex items-center gap-2"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }}
            >
              <img src="/images/logo.png" alt="Logo" className="h-8 w-auto rounded-lg" />
              <span className="font-semibold text-slate-900 hidden sm:inline" style={{fontFamily: "'Outfit', sans-serif", letterSpacing: '-0.02em'}}>
                App Accelerator
              </span>
            </a>

            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={scrollToPricing}
                className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2 text-sm font-medium rounded-full transition-colors"
              >
                Jetzt starten →
              </button>
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-900" />
              ) : (
                <Menu className="w-6 h-6 text-slate-900" />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/90 backdrop-blur-xl border-b border-slate-200/50 px-6 pb-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-left py-2 text-slate-600"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  scrollToPricing();
                  setIsMobileMenuOpen(false);
                }}
                className="bg-slate-900 text-white py-3 rounded-full font-medium"
              >
                Jetzt starten →
              </button>
            </div>
          </div>
        )}
      </nav>

      {isScrolled && (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/90 backdrop-blur-xl border-t border-slate-200/50 p-3 px-6">
          <button
            onClick={scrollToPricing}
            className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3.5 rounded-full text-sm font-medium transition-colors"
          >
            Jetzt starten →
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
