import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Info } from 'lucide-react';

const steps = [
  { step: "1", title: "Setup & Strategie", week: "Woche 0", days: "Tag 1–2", description: "Tools installieren, Claude Code einrichten, App-Idee validieren, Technologie wählen (Flutter oder SwiftUI)" },
  { step: "2", title: "Konzept & Design", week: "Woche 1", days: "Tag 3–9", description: "Wireframes erstellen, User Flow definieren, Design-Grundlagen lernen, App-Architektur planen" },
  { step: "3", title: "Core Features bauen", week: "Woche 2", days: "Tag 10–16", description: "Die Hauptfunktionen deiner App mit Claude Code umsetzen. Feature für Feature, mit Review und Testing." },
  { step: "4", title: "Polish & Beta", week: "Woche 3", days: "Tag 17–23", description: "UI verfeinern, Edge Cases abfangen, Beta-Tester einladen, Feedback einarbeiten" },
  { step: "5", title: "Launch", week: "Woche 4", days: "Tag 24–30", description: "App Store / Play Store Einreichung, Landing Page erstellen, Marketing-Grundlagen, Go Live" }
];

const ChallengeSection = () => {
  return (
    <section id="ablauf" className="py-14 md:py-18 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Dein 30-Tage-Fahrplan in den App Store & Play Store
          </h2>
          <p className="text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
            In 30 Tagen durchläufst du einen erprobten 5-Schritte-Prozess, der dich von der ersten Idee bis zur veröffentlichten App führt.
          </p>
        </motion.div>

        {/* Steps Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-4 mb-10 md:hidden"
        >
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-semibold text-sm">
                  {step.step}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-px h-full min-h-[24px] bg-slate-300 mt-2" />
                )}
              </div>
              <div className="pb-4">
                <p className="text-xs text-slate-400 font-medium">{step.week} · {step.days}</p>
                <p className="text-sm font-semibold text-slate-900">{step.title}</p>
                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Steps Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="hidden md:flex justify-center items-start gap-4 mb-10"
        >
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center text-center w-36">
                <div className="w-11 h-11 rounded-full bg-slate-900 text-white flex items-center justify-center font-semibold text-sm mb-2">
                  {step.step}
                </div>
                <p className="text-sm font-medium text-slate-900">{step.title}</p>
                <p className="text-xs text-slate-400 font-medium mt-0.5">{step.week} · {step.days}</p>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <ChevronRight className="w-4 h-4 text-slate-300 flex-shrink-0 mt-3.5" />
              )}
            </React.Fragment>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl p-5 md:p-6 border border-slate-100 flex items-start gap-3"
        >
          <Info className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-slate-900 mb-0.5">
              Jeder arbeitet in seinem eigenen Tempo
            </p>
            <p className="text-slate-500 text-sm leading-relaxed">
              30 Tage ist der Richtwert. Manche sind schneller, manche brauchen länger. Der Fahrplan funktioniert so oder so.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChallengeSection;
