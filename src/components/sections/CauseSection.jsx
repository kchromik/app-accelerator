import React from 'react';
import { motion } from 'framer-motion';
import { UserX, RouteOff, Brain } from 'lucide-react';
import CtaButton from '@/components/ui/CtaButton';

const causes = [
  {
    icon: UserX,
    title: "Stilles Kämmerlein",
    description: "Du entwickelst im stillen Kämmerlein – ohne Rückmeldung oder Austausch."
  },
  {
    icon: RouteOff,
    title: "Keine Strategie",
    description: "Du hast keine Strategie, um herauszufinden, ob deine Idee überhaupt funktioniert."
  },
  {
    icon: Brain,
    title: "Nur Code reicht nicht",
    description: "Du denkst wie ein Entwickler, aber nicht wie ein Produktmensch – deshalb wird aus deiner App kein echtes Produkt."
  }
];

const CauseSection = ({ scrollToPricing }) => {
  return (
    <section className="py-12 md:py-16 bg-slate-100">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Warum du nicht vorankommst – <span className="text-slate-600">obwohl du alles gibst</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {causes.map((cause, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-start"
            >
              <div className="p-3 bg-slate-900 rounded-lg mb-5 inline-block">
                <cause.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{cause.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{cause.description}</p>
            </motion.div>
          ))}
        </div>
        <CtaButton scrollToPricing={scrollToPricing} text="Ich will vorankommen!" />
      </div>
    </section>
  );
};

export default CauseSection;