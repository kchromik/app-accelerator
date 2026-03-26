import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqData = [
  {
    question: "Brauche ich Programmiererfahrung?",
    answer: "Grundlegendes Verständnis hilft, ist aber nicht zwingend nötig. Wenn du schon mal ein Tutorial durchgemacht oder ein kleines Projekt gebaut hast, bist du bereit. Komplette Anfänger kommen auch mit, es dauert nur etwas länger."
  },
  {
    question: "Was wenn ich schon Programmiererfahrung habe?",
    answer: "Dann wirst du schneller sein. Das KI-Workflow-Training in Modul 2 allein ist für erfahrene Entwickler ein Game-Changer, weil du lernst, wie du KI gezielt in deinen bestehenden Workflow integrierst. Die Methoden lassen sich auf jedes Projekt anwenden."
  },
  {
    question: "Ich habe mit KI schon programmiert, aber die Ergebnisse waren schlecht.",
    answer: "Das liegt fast immer am Prompting, also an der Art, wie du deine Anfragen stellst. Wenn du der KI schlechte Anweisungen gibst, bekommst du schlechte Ergebnisse. Im App Accelerator bekommst du bewährte Vorlagen und Workflows, mit denen du sofort zu soliden Ergebnissen in der Softwareentwicklung kommst."
  },
  {
    question: "Brauche ich für den Kurs Zusatzabos?",
    answer: "Wir arbeiten hauptsächlich mit Claude Code, weil das momentan die beste KI für Programmierung ist. Die Pro-Version kostet ca. 20 Euro pro Monat. Es ist auf jeden Fall sinnvoll, damit zu arbeiten, weil du damit deutlich bessere Ergebnisse bekommst."
  },
];

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div layout className="border-b border-[#EEEEEE]">
      <motion.button
        layout
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-5 text-left text-base font-medium text-slate-900 hover:text-slate-600 transition-colors"
      >
        {question}
        {isOpen
          ? <ChevronUp className="w-4 h-4 text-slate-400 flex-shrink-0 ml-4" />
          : <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0 ml-4" />
        }
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            layout
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-slate-600 text-sm leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FaqSection = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-1.5 mb-5 px-3 py-1 rounded-full bg-slate-50 border border-[#EEEEEE]">
            <HelpCircle className="w-3 h-3 text-slate-400" />
            <span className="text-xs font-medium text-slate-500">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Häufige Fragen
          </h2>
          <p className="text-base text-slate-500">
            Hier findest du Antworten auf deine ersten Fragen.
          </p>
        </motion.div>

        <div className="space-y-0">
          {faqData.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <p className="text-center text-sm text-slate-500 mt-8">
          Weitere Fragen? Schreib an <a href="mailto:hi@kevinchromik.de" className="text-slate-700 underline">hi@kevinchromik.de</a>
        </p>
      </div>
    </section>
  );
};

export default FaqSection;
