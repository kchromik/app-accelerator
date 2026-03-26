import React from 'react';
import { motion } from 'framer-motion';
import { Users, MessageSquare, Video, Brain, Zap, BookOpen } from 'lucide-react';
import CtaButton from '@/components/ui/CtaButton';

const featuresData = [
  {
    icon: Video,
    title: "Regelmäßige Live Calls",
    description: "Bring deine Fragen mit, hol dir Feedback und lerne von den Erfahrungen anderer.",
    image: "/images/livecall.png"
  },
  {
    icon: Users,
    title: "Developer Community",
    description: "Entwickler, die wie du an ihren Apps arbeiten. Auf Discord.",
    image: "/images/discord.png"
  },
  {
    icon: Zap,
    title: "Roast My App",
    description: "Ehrliches Feedback zu deiner App. Konstruktiv und direkt.",
    image: "/images/roast-my-app.png"
  },
  {
    icon: MessageSquare,
    title: "Projekt-Dashboard",
    description: "Notion Template für Überblick und Fokus bei deinem Projekt.",
    image: "/images/notion.png"
  },
  {
    icon: Brain,
    title: "Schulungsinhalte",
    description: "Wachsende Bibliothek: Von der Idee bis zum Launch, ASO, Marketing und mehr.",
    image: "/images/schulungsinhalte.png"
  },
  {
    icon: BookOpen,
    title: "App Profit GPT",
    description: "KI-Assistent für Marktanalyse und Monetarisierungsstrategien.",
    image: "/images/gpt.png"
  }
];

const NewFeaturesSection = ({ scrollToPricing }) => {
  return (
    <section id="features" className="py-12 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Das bekommst du
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-5 rounded-2xl border border-slate-100"
            >
              <div className="mb-4">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-40 md:h-48 object-contain rounded-lg"
                />
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-1">{feature.title}</h3>
              <p className="text-slate-500 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        <CtaButton scrollToPricing={scrollToPricing} text="Jetzt beitreten" />
      </div>
    </section>
  );
};

export default NewFeaturesSection;