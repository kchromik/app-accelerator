import React from 'react';
import { Check, X } from 'lucide-react';

const ForWhoSection = () => {
  const forYou = [
    "Du hast eine App-Idee und willst sie endlich umsetzen",
    "Du bist bereit, 30 Tage fokussiert dranzubleiben",
    "Du willst Feedback und Accountability",
    "Du akzeptierst, dass die erste Version nicht perfekt sein muss",
    "Du hast Grundkenntnisse in der App-Entwicklung (oder lernst parallel)"
  ];

  const notForYou = [
    "Du suchst einen Programmierkurs für absolute Anfänger",
    "Du willst mit Apps schnell reich werden",
    "Du hast keine Zeit, aktiv mitzumachen",
    "Du erwartest, dass andere die Arbeit für dich machen"
  ];

  return (
    <section className="py-16 md:py-24 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-12 text-center">
          Ist der App Accelerator das Richtige für dich?
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* For You */}
          <div className="bg-white rounded-lg p-6 border border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-4">
              Das ist für dich, wenn:
            </h3>
            <ul className="space-y-3">
              {forYou.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-slate-900 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For You */}
          <div className="bg-white rounded-lg p-6 border border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-4">
              Das ist nichts für dich, wenn:
            </h3>
            <ul className="space-y-3">
              {notForYou.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-500 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
