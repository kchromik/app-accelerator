import React from 'react';
import { motion } from 'framer-motion';
import { Target, MessageSquareDashed, Puzzle, RotateCcw } from 'lucide-react';

const causes = [
  {
    icon: MessageSquareDashed,
    title: "Schlechtes Prompting",
    description: "Du gibst der KI vage Anweisungen und bekommst vage Ergebnisse. Ohne die richtige Technik bleibt die Qualität unter deinem Niveau."
  },
  {
    icon: Puzzle,
    title: "Kein System",
    description: "Du nutzt KI für einzelne Aufgaben, aber hast keinen durchgängigen Workflow. So bleibt KI ein Gadget statt ein echtes Entwicklungswerkzeug."
  },
  {
    icon: RotateCcw,
    title: "Fehlender Kontext",
    description: "Ohne Projekt-Kontext liefert KI generische Ergebnisse. Wer der KI sein Projekt richtig vermittelt, bekommt Ergebnisse auf einem ganz anderen Level."
  }
];

const UrsacheSection = () => {
  return (
    <section id="ablauf" className="py-20 md:py-28 bg-white border-t border-[#EEEEEE]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-1.5 mb-5 px-3 py-1 rounded-full bg-slate-50 border border-[#EEEEEE]">
            <Target className="w-3 h-3 text-slate-400" />
            <span className="text-xs font-medium text-slate-500">Die Ursache</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Du nutzt KI noch nicht richtig.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-2xl mx-auto text-center mb-14"
        >
          <p className="text-slate-600 leading-relaxed">
            Du hast KI ausprobiert, aber die Ergebnisse waren okay, nicht wirklich gut. Das liegt nicht an der KI. Es liegt daran, wie du sie einsetzt. Ohne den richtigen Workflow wirst du das volle Potenzial von KI nie ausschoepfen.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 mb-14">
          {causes.map((cause, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white rounded-2xl border border-[#EEEEEE] p-6"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center mb-4">
                <cause.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">{cause.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{cause.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center"
        >
          <p className="text-lg text-slate-900 font-medium">
            Im App Accelerator lernst du genau das: KI so einzusetzen, dass sie echte Ergebnisse liefert.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default UrsacheSection;
