import React from 'react';
import { ArrowRight } from 'lucide-react';

const TransformationSection = () => {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-12 text-center">
          Von der Idee zum App Store Release
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
          {/* Before */}
          <div className="flex-1 w-full bg-slate-100 rounded-lg p-6 text-center">
            <p className="text-sm font-medium text-slate-500 mb-2">Vorher</p>
            <p className="text-lg font-semibold text-slate-700">
              Idee im Kopf, endlose Planung, kein Fortschritt
            </p>
          </div>

          {/* Arrow */}
          <div className="flex-shrink-0">
            <ArrowRight className="w-8 h-8 text-slate-400 rotate-90 md:rotate-0" />
          </div>

          {/* After */}
          <div className="flex-1 w-full bg-slate-900 rounded-lg p-6 text-center">
            <p className="text-sm font-medium text-slate-400 mb-2">Nachher</p>
            <p className="text-lg font-semibold text-white">
              Deine App ist live im App Store
            </p>
          </div>
        </div>

        <p className="mt-10 text-center text-slate-600 max-w-xl mx-auto">
          In 30 Tagen baust du ein funktionierendes MVP und veröffentlichst es. Kein Perfektionismus. Kein Feature-Creep. Einfach machen.
        </p>
      </div>
    </section>
  );
};

export default TransformationSection;
