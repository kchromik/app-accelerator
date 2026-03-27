import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, TrendingDown, Cpu, AlertTriangle, X, Check } from 'lucide-react';

const painPoints = [
  {
    icon: ShieldAlert,
    title: "KI schreibt Code schneller als du",
    description: "Menschen ohne Programmiererfahrung bauen mit KI funktionierende Apps. Dein Vorsprung als Entwickler schmilzt, wenn du KI nicht für dich nutzt."
  },
  {
    icon: TrendingDown,
    title: "Dein Wissen allein reicht nicht mehr",
    description: "Programmieren können viele. Aber wer KI richtig einsetzt, liefert in Tagen, wofür andere Monate brauchen. Ohne KI-Workflow wirst du zur langsameren Alternative."
  },
  {
    icon: Cpu,
    title: "Die Entwicklung wartet nicht auf dich",
    description: "Jeden Monat neue KI-Tools, neue Workflows, neue Möglichkeiten. Wer jetzt nicht lernt, mit KI zu arbeiten, verliert den Anschluss."
  }
];

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

const PainSection = () => {
  return (
    <section id="pain" className="py-14 md:py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-1.5 mb-5 px-3 py-1 rounded-full bg-slate-50 border border-[#EEEEEE]">
            <AlertTriangle className="w-3 h-3 text-slate-400" />
            <span className="text-xs font-medium text-slate-500">Die Realität</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            In 12 Monaten gibt es zwei Arten von Entwicklern.
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Die, die KI als Werkzeug meistern - und die, die von KI-gestützten Entwicklern überholt werden.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-center mb-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            className="w-full md:w-5/12 flex-shrink-0"
          >
            <img
              src="/images/developer-collage.webp"
              alt="Entwickler bei der Arbeit"
              className="w-full h-auto rounded-2xl"
              loading="lazy"
              width="1000"
              height="667"
            />
          </motion.div>

          <div className="w-full md:w-7/12 space-y-5">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-white rounded-2xl border border-[#EEEEEE] p-5 flex gap-4 items-start"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-[#EEEEEE] flex items-center justify-center flex-shrink-0">
                  <point.icon className="w-5 h-5 text-slate-500" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900 mb-1">{point.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{point.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-5xl mx-auto"
        >
          <p className="text-center text-slate-900 font-medium mb-8">
            Die Frage ist nicht, ob KI die Softwareentwicklung verändert. Die Frage ist, ob du auf der richtigen Seite stehst.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PainSection;
