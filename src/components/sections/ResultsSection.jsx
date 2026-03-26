import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Users, TrendingUp, MessageSquare, Brain, Coins } from 'lucide-react';

const results = [
  {
    icon: Smartphone,
    title: "Deine App ist live im App Store",
    description: "Keine Idee mehr, die nur in deinem Kopf existiert. Du hast ein echtes Produkt, das Menschen herunterladen und nutzen können."
  },
  {
    icon: Users,
    title: "Erste echte Nutzer und Feedback",
    description: "Menschen verwenden, was du gebaut hast, und du bekommst echtes Feedback, das dir zeigt, wie du deine App weiterentwickeln kannst."
  },
  {
    icon: TrendingUp,
    title: "Momentum statt Stillstand",
    description: "Du hast bewiesen, dass du eine App von der Idee bis zur Veröffentlichung bringen kannst. Dieses Wissen und diese Erfahrung trägt dich bei jedem weiteren Projekt."
  },
  {
    icon: MessageSquare,
    title: "Ein Netzwerk von Gleichgesinnten",
    description: "Du bist Teil einer Community von App-Buildern, die sich gegenseitig unterstützen und ehrliches, konstruktives Feedback geben."
  },
  {
    icon: Brain,
    title: "KI-Kompetenz, die bleibt",
    description: "Du hast gelernt, wie du KI als echtes Entwicklungswerkzeug einsetzt. Dieses Wissen kannst du für jedes zukünftige Projekt nutzen und immer weiter ausbauen."
  },
  {
    icon: Coins,
    title: "Klarheit über Monetarisierung",
    description: "Du verstehst, welche Monetarisierungsstrategie zu deiner App passt und wie du damit tatsächlich Einnahmen generieren kannst."
  }
];

const ResultsSection = () => {
  return (
    <section className="py-14 md:py-18 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Das erreichst du mit dem App Accelerator
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white p-5 rounded-2xl border border-slate-100"
            >
              <result.icon className="w-5 h-5 text-slate-400 mb-3" />
              <h3 className="text-base font-semibold text-slate-900 mb-1">{result.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{result.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
