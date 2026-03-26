import React from 'react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "Beitreten",
      description: "Du wirst Teil der Community auf Discord und bekommst Zugang zu allen Inhalten."
    },
    {
      number: "2",
      title: "30-Tage-Plan starten",
      description: "Du folgst dem Framework: Konzept → MVP → Build → TestFlight → Launch."
    },
    {
      number: "3",
      title: "App veröffentlichen",
      description: "Nach 30 Tagen ist deine App im App Store. Fertig."
    }
  ];

  return (
    <section className="py-16 md:py-24 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-12 text-center">
          So funktioniert's
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {step.title}
              </h3>
              <p className="text-slate-600 text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
