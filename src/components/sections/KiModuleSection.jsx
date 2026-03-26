import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Zap, BookOpen, FileCode, Cpu } from 'lucide-react';

const features = [
  {
    icon: Terminal,
    title: "Claude Code als Co-Developer",
    description: "Beschreibe was du willst, Claude Code setzt es um. Du reviewst, verfeinerst, committest. Wie Pair Programming mit einem Senior Developer."
  },
  {
    icon: Zap,
    title: "Von der Idee zum Feature in Minuten",
    description: "Was früher Stunden gedauert hat, schaffst du jetzt in der Kaffeepause. KI beschleunigt jeden Schritt deines Workflows."
  },
  {
    icon: BookOpen,
    title: "Konzepte verstehen, nicht nur kopieren",
    description: "Claude Code erklärt dir jeden Schritt. Du verstehst was passiert und kannst selbstständig weiterentwickeln."
  },
  {
    icon: FileCode,
    title: "Dein Projekt, deine Regeln",
    description: "Die CLAUDE.md Datei gibt deinem KI-Partner den Kontext zu deinem Projekt. Je besser die Datei, desto besser die Ergebnisse."
  }
];

const KiModuleSection = () => {
  return (
    <section className="py-14 md:py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 mb-4 bg-slate-100 border border-slate-200 rounded-full px-4 py-1.5">
            <Cpu className="w-4 h-4 text-slate-600" />
            <span className="text-sm font-medium text-slate-700">Das umfangreichste Modul im Kurs</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Vergiss stundenlanges Coding. Bau deine App mit KI.
          </h2>
          <p className="text-base text-slate-500 max-w-2xl mx-auto">
            Im App Accelerator lernst du nicht nur Programmieren. Du lernst, wie du KI als deinen persönlichen Entwicklungspartner nutzt. Und das verändert alles.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white p-5 rounded-2xl border border-slate-100"
            >
              <feature.icon className="w-5 h-5 text-slate-500 mb-3" />
              <h3 className="text-base font-semibold text-slate-900 mb-1">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KiModuleSection;
