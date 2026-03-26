import React from 'react';
import { motion } from 'framer-motion';
import { X, Check, TrendingUp } from 'lucide-react';

const withoutItems = [
  "Du wirst langsamer als KI-gestützte Entwickler",
  "Andere bauen in Tagen, wofür du Wochen brauchst",
  "Dein Wissen allein macht dich ersetzbar",
  "Du wirst abgehängt, ohne es zu merken"
];

const withItems = [
  "Du arbeitest mit KI schneller als je zuvor",
  "KI-Agenten liefern dir hochqualitative Ergebnisse",
  "Du wirst unersetzbar statt ersetzbar",
  "Von der Idee bis zum Store in 30 Tagen"
];

const ProblemSection = () => {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-[#EEEEEE]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-1.5 mb-5 px-3 py-1 rounded-full bg-slate-50 border border-[#EEEEEE]">
            <TrendingUp className="w-3 h-3 text-slate-400" />
            <span className="text-xs font-medium text-slate-500">Die Realität</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Softwareentwicklung verändert sich gerade fundamental.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-2xl mx-auto mb-14 space-y-4"
        >
          <p className="text-slate-600 leading-relaxed">
            KI-Tools schreiben heute in Minuten mehr funktionierenden Code als ein Entwickler in Stunden. Die Einstiegshürde für App-Entwicklung war noch nie so niedrig. Wer jetzt nicht lernt, mit KI zu arbeiten, verliert den Anschluss.
          </p>
          <p className="text-slate-900 font-medium leading-relaxed">
            Die Frage ist nicht, ob KI die Softwareentwicklung verändert. Die Frage ist, ob du auf der richtigen Seite stehst.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-5"
        >
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <p className="text-xs font-semibold text-slate-400 mb-5 uppercase tracking-wider">Ohne KI-Workflow</p>
            <ul className="space-y-3.5">
              {withoutItems.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-slate-500">
                  <X className="w-4 h-4 text-slate-300 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6">
            <p className="text-xs font-semibold text-slate-400 mb-5 uppercase tracking-wider">Mit dem App Accelerator</p>
            <ul className="space-y-3.5">
              {withItems.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                  <Check className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
