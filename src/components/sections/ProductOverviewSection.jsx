import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Bot, Users, ArrowDown, Code, Palette, TestTube, Bug, Server, Shield, Lightbulb } from 'lucide-react';

const allAgents = [
  { name: "Software Architekt", icon: Code },
  { name: "Mobile App Dev", icon: Code },
  { name: "SwiftUI Dev", icon: Code },
  { name: "Android Dev", icon: Code },
  { name: "Flutter Dev", icon: Code },
  { name: "React Native Dev", icon: Code },
  { name: "Backend-API Dev", icon: Code },
  { name: "Firebase Dev", icon: Code },
  { name: "Supabase Dev", icon: Code },
  { name: "Code Reviewer", icon: Code },
  { name: "Git-Meister", icon: Code },
  { name: "Refactoring", icon: Code },
  { name: "UX Architect", icon: Palette },
  { name: "UI Builder", icon: Palette },
  { name: "Barrierefreiheit", icon: Palette },
  { name: "QA-Ingenieur", icon: TestTube },
  { name: "Test-Autor", icon: TestTube },
  { name: "Performance", icon: TestTube },
  { name: "Bug Hunter", icon: Bug },
  { name: "Crash Analyst", icon: Bug },
  { name: "CI/CD Engineer", icon: Server },
  { name: "Store Prep", icon: Server },
  { name: "Security Auditor", icon: Shield },
  { name: "Feature Planner", icon: Lightbulb },
  { name: "Codebase Analyzer", icon: Lightbulb },
];

const pillars = [
  {
    icon: BookOpen,
    title: "Videokurs",
    subtitle: "6 Module + Bonus",
    description: "Über 50 Lektionen führen dich Schritt für Schritt von der Idee bis zum App Store Launch. Mit echten Praxis-Projekten, nicht nur Theorie.",
    image: "/images/schulungsinhalte.webp",
    imageAlt: "Kursplattform mit Modul-Übersicht und Video-Lektion",
    highlights: ["50+ Video-Lektionen", "Praxis-Projekte", "24/7 Zugang"],
  },
  {
    icon: Bot,
    title: "KI-Abteilung",
    subtitle: "25 Agenten",
    description: "Vorkonfigurierte KI-Agenten für jede Phase deiner App-Entwicklung. Von Architektur über Testing bis zum Store-Launch - sofort einsatzbereit.",
    image: null,
    imageAlt: "KI-Agenten im Einsatz mit Claude Code",
    highlights: ["7 Abteilungen", "4+ Plattformen", "Sofort einsatzbereit"],
  },
  {
    icon: Users,
    title: "Community",
    subtitle: "Discord-Server",
    description: "Austausch mit anderen Entwicklern, die den gleichen Weg gehen. Fragen stellen, Feedback bekommen und voneinander lernen.",
    image: "/images/discord.webp",
    imageAlt: "Discord Community mit aktiven Gesprächen zwischen Entwicklern",
    highlights: ["Direkter Austausch", "Feedback auf deine App", "Exklusiver Zugang"],
  },
];

const ProductOverviewSection = () => {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-1.5 mb-5 px-3 py-1 rounded-full bg-slate-50 border border-[#EEEEEE]">
            <ArrowDown className="w-3 h-3 text-slate-400" />
            <span className="text-xs font-medium text-slate-500">Das bekommst du</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Videokurs. KI-Agenten. Community.
          </h2>
          <p className="text-base text-slate-500 max-w-2xl mx-auto">
            Drei Bausteine, die zusammen funktionieren. Alles was du brauchst, um deine App in 30 Tagen zu bauen und zu launchen.
          </p>
        </motion.div>

        <div className="space-y-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`rounded-2xl border border-[#EEEEEE] overflow-hidden ${
                index % 2 === 0 ? 'bg-white' : 'bg-slate-50'
              }`}
            >
              <div className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-0`}>
                {/* Image */}
                <div className="md:w-1/2 relative">
                  {pillar.image ? (
                    <img
                      src={pillar.image}
                      alt={pillar.imageAlt}
                      className="w-full h-full object-cover object-left-top min-h-[240px] md:min-h-[320px]"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full min-h-[240px] md:min-h-[320px] bg-slate-900 flex flex-col items-center justify-center p-5 md:p-6">
                      <div className="grid grid-cols-5 gap-2 w-full max-w-sm">
                        {allAgents.map((agent, i) => (
                          <div key={i} className="flex flex-col items-center gap-1 group">
                            <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-slate-800 border border-slate-700/80 flex items-center justify-center group-hover:border-slate-600 transition-colors">
                              <agent.icon className="w-3.5 h-3.5 text-slate-400" />
                            </div>
                            <span className="text-[8px] md:text-[9px] text-slate-500 text-center leading-tight">{agent.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center flex-shrink-0">
                      <pillar.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{pillar.title}</h3>
                      <p className="text-sm text-slate-500">{pillar.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-5">
                    {pillar.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {pillar.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200/60"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductOverviewSection;
