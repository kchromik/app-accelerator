import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 pb-24 md:pb-8 px-6 border-t border-[#EEEEEE]">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} App Accelerator von Kevin Chromik</p>
          <div className="flex items-center gap-6">
            <a
              href="https://kevinchromik.de/impressum/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 transition-colors"
            >
              Impressum
            </a>
            <a
              href="https://kevinchromik.de/datenschutz/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 transition-colors"
            >
              Datenschutz
            </a>
            <a
              href="mailto:hi@kevinchromik.de"
              className="hover:text-slate-900 transition-colors"
            >
              hi@kevinchromik.de
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
