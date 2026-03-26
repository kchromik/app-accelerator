import React from 'react';
import { Quote } from 'lucide-react';

const ExamplesSection = () => {
  const testimonials = [
    {
      name: "Simon Z.",
      text: "Im App Accelerator teile ich meine 15 Jahre iOS-Erfahrung und bekomme wertvolles Feedback zu meinen eigenen Ideen."
    },
    {
      name: "Ralf M.",
      text: "Der Circle hat mir geholfen, beim Aufbau meiner App klarer und fokussierter vorzugehen. Besonders der Austausch mit anderen Entwicklern ist wertvoll."
    },
    {
      name: "Arif E.",
      text: "Perspektiven von der Entwicklung bis zur Veröffentlichung. Man wird Teil eines Netzwerks, in dem sich Mitglieder gegenseitig unterstützen."
    },
    {
      name: "Ralf W.",
      text: "Tools, Tipps und echte Entwickler-Insights, die mein nächstes Projekt sofort verbessert haben."
    }
  ];

  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 text-center">
          Was Mitglieder sagen
        </h2>
        <p className="text-slate-600 text-center mb-12">
          Echte Stimmen aus der Community
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-lg p-6"
            >
              <Quote className="w-6 h-6 text-slate-300 mb-3" />
              <p className="text-slate-700 mb-4 text-sm leading-relaxed">
                {testimonial.text}
              </p>
              <p className="font-medium text-slate-900 text-sm">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExamplesSection;
