import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';

const LeadMagnetBanner = () => {
  return (
    <section className="py-10 md:py-12 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6">
        <motion.a
          href="/starter-kit"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="block bg-white border border-slate-200 rounded-2xl p-6 md:p-8 hover:border-slate-300 transition-colors group"
        >
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center">
              <Download className="w-5 h-5 text-white" />
            </div>
            <div className="text-center md:text-left flex-1">
              <h3 className="text-lg font-semibold text-slate-900 mb-1">
                Noch nicht sicher? Hol dir das kostenlose KI App Starter Kit.
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Ein Video, das dir zeigt, wie du mit KI deine erste App-Funktion baust, plus ein PDF mit Kevins komplettem Workflow. Kostenlos und unverbindlich.
              </p>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition-colors flex-shrink-0 hidden md:block" />
          </div>
        </motion.a>
      </div>
    </section>
  );
};

export default LeadMagnetBanner;
