import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const GuaranteeSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="py-8 bg-white"
    >
      <div className="max-w-lg mx-auto px-6">
        <div className="flex items-center gap-4 bg-slate-50 border border-slate-100 rounded-xl p-5">
          <ShieldCheck className="w-8 h-8 text-green-500 flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-slate-900 mb-0.5">Starte ohne Risiko</p>
            <p className="text-sm text-slate-500 leading-relaxed">
              Du hast 14 Tage Zeit den Kurs zu testen. Wenn er nicht das Richtige für dich ist, bekommst du dein Geld zurück. Ohne Fragen, ohne Diskussion.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default GuaranteeSection;
