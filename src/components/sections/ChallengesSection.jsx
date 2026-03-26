import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, DollarSign, Target, BarChart3 } from 'lucide-react';

const challengesData = [
  {
    icon: Users,
    title: "Die ersten 100 Nutzer gewinnen",
    description: "Lerne bewährte Strategien, um deine ersten treuen Nutzer zu finden und zu begeistern."
  },
  {
    icon: DollarSign,
    title: "Den richtigen Preis finden",
    description: "Entdecke Pricing-Strategien, die funktionieren und deine App profitabel machen."
  },
  {
    icon: Target,
    title: "Zahlende Nutzer ohne Budget erreichen",
    description: "Organische Wachstumsstrategien, die keine teuren Werbekampagnen erfordern."
  },
  {
    icon: BarChart3,
    title: "Conversion-Probleme verstehen",
    description: "Analysiere und optimiere, warum Nutzer abspringen oder nicht konvertieren."
  }
];

const ChallengesSection = ({ scrollToPricing }) => {
  return (
    <section className="py-12 md:py-16 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black mb-6">
            <span className="gradient-text">Kennst du diese</span>
            <br />
            <span className="text-white">Herausforderungen?</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Jeder erfolgreiche App-Entwickler stand vor denselben Problemen. Wir zeigen dir, wie du sie löst.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {challengesData.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="bg-slate-800 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <challenge.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">{challenge.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{challenge.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button 
            onClick={scrollToPricing}
            size="lg" 
            className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Lösung finden
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ChallengesSection;