import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bot, Code, Palette, TestTube, Bug, Server, Shield, Lightbulb,
  ChevronDown, ChevronUp, Users
} from 'lucide-react';

const departments = [
  {
    name: "Engineering",
    icon: Code,
    color: "slate",
    agents: [
      { title: "Software Architekt", desc: "Entwirft App-Architekturen und bewertet Trade-offs" },
      { title: "Mobile App Entwickler", desc: "Cross-Platform-Experte für SwiftUI, Compose, Flutter & React Native" },
      { title: "Code Reviewer", desc: "Prüft Code auf Qualität, Performance und Sicherheit" },
      { title: "React Native Entwickler", desc: "Spezialist für Expo, TypeScript und Zustand" },
      { title: "Backend-API-Entwickler", desc: "REST/GraphQL-APIs und Offline-Sync" },
      { title: "Git-Workflow-Meister", desc: "Commits, Branches und PRs mit Best Practices" },
      { title: "Refactoring-Experte", desc: "Systematisches Refactoring ohne Verhaltensänderung" },
      { title: "SwiftUI Entwickler", desc: "iOS-Spezialist mit Swift 5.9+ und SwiftData" },
      { title: "Android Entwickler", desc: "Kotlin, Jetpack Compose und Material Design 3" },
      { title: "Flutter Entwickler", desc: "Dart, Riverpod und adaptive Widgets" },
    ]
  },
  {
    name: "Design",
    icon: Palette,
    color: "pink",
    agents: [
      { title: "UX Architect", desc: "User-Flows, Navigation und Informationsarchitektur" },
      { title: "Barrierefreiheits-Spezialist", desc: "WCAG 2.1 AA, VoiceOver, TalkBack und Dynamic Type" },
      { title: "UI Builder", desc: "Plattformkonforme, performante UI-Komponenten" },
    ]
  },
  {
    name: "Testing",
    icon: TestTube,
    color: "emerald",
    agents: [
      { title: "QA-Ingenieur", desc: "End-to-End-Teststrategien und Gerätematrix" },
      { title: "Test-Autor", desc: "Unit-, Widget- und Integrationstests mit Randfällen" },
      { title: "Performance-Benchmarker", desc: "60fps auf allen Geräten. Startup, Memory, CPU." },
    ]
  },
  {
    name: "Debugging",
    icon: Bug,
    color: "amber",
    agents: [
      { title: "Bug Hunter", desc: "Findet Ursachen statt Symptome zu behandeln" },
      { title: "Crash Analyst", desc: "Analysiert Crash-Logs, ANR-Traces und Memory-Probleme" },
    ]
  },
  {
    name: "DevOps",
    icon: Server,
    color: "blue",
    agents: [
      { title: "CI/CD Engineer", desc: "GitHub Actions, Fastlane und automatisiertes Deployment" },
      { title: "App Store Prep", desc: "iOS-Einreichung, Screenshots und ASO" },
      { title: "Play Store Prep", desc: "Google Play Listing, Compliance und Beta-Testing" },
    ]
  },
  {
    name: "Security",
    icon: Shield,
    color: "red",
    agents: [
      { title: "Mobile Security Auditor", desc: "OWASP Mobile Top 10, Secrets und Netzwerk-Audits" },
    ]
  },
  {
    name: "Product",
    icon: Lightbulb,
    color: "orange",
    agents: [
      { title: "Feature Planner", desc: "Architekturentscheidungen und Implementierungsreihenfolge" },
      { title: "Codebase Analyzer", desc: "Tech-Debt-Analyse und Qualitätsbewertungen" },
    ]
  },
];

const totalAgents = departments.reduce((sum, dept) => sum + dept.agents.length, 0);

const colorMap = {
  slate: { bg: "bg-slate-50", border: "border-slate-200/60", icon: "bg-slate-700", badge: "bg-slate-100 text-slate-700", dot: "bg-slate-400" },
  pink: { bg: "bg-pink-50", border: "border-pink-200/60", icon: "bg-pink-600", badge: "bg-pink-100 text-pink-700", dot: "bg-pink-400" },
  emerald: { bg: "bg-emerald-50", border: "border-emerald-200/60", icon: "bg-emerald-600", badge: "bg-emerald-100 text-emerald-700", dot: "bg-emerald-400" },
  amber: { bg: "bg-amber-50", border: "border-amber-200/60", icon: "bg-amber-600", badge: "bg-amber-100 text-amber-700", dot: "bg-amber-400" },
  blue: { bg: "bg-blue-50", border: "border-blue-200/60", icon: "bg-blue-600", badge: "bg-blue-100 text-blue-700", dot: "bg-blue-400" },
  red: { bg: "bg-red-50", border: "border-red-200/60", icon: "bg-red-600", badge: "bg-red-100 text-red-700", dot: "bg-red-400" },
  orange: { bg: "bg-orange-50", border: "border-orange-200/60", icon: "bg-orange-600", badge: "bg-orange-100 text-orange-700", dot: "bg-orange-400" },
};

const DepartmentCard = ({ dept, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const colors = colorMap[dept.color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true }}
      className={`rounded-xl border overflow-hidden ${colors.bg} ${colors.border}`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-4 p-4 w-full text-left"
      >
        <div className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center ${colors.icon}`}>
          <dept.icon className="w-4 h-4 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-sm font-semibold text-slate-900">{dept.name}</h3>
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${colors.badge}`}>
              {dept.agents.length} {dept.agents.length === 1 ? 'Agent' : 'Agenten'}
            </span>
          </div>
        </div>
        {isOpen
          ? <ChevronUp className="w-4 h-4 text-slate-400 flex-shrink-0" />
          : <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
        }
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 space-y-2.5">
              {dept.agents.map((agent, i) => (
                <div key={i} className="flex items-start gap-3 bg-white/70 rounded-lg p-3">
                  <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${colors.dot}`} />
                  <div>
                    <p className="text-sm font-medium text-slate-800">{agent.title}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{agent.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const AgentsSection = () => {
  return (
    <section id="agents" className="py-20 md:py-28 bg-white border-t border-[#EEEEEE]">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-1.5 mb-5 px-3 py-1 rounded-full bg-slate-50 border border-[#EEEEEE]">
            <Bot className="w-3 h-3 text-slate-400" />
            <span className="text-xs font-medium text-slate-500">Inklusive</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Deine komplette KI-Abteilung. {totalAgents} Spezialisten.
          </h2>
          <p className="text-base text-slate-500 max-w-xl mx-auto">
            Vorkonfigurierte KI-Agenten für jede Phase der App-Entwicklung. Von Architektur über Testing bis zum Store-Launch. Wie eine eigene IT-Abteilung, die mit dir arbeitet.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10"
        >
          {[
            { label: "Agenten", value: totalAgents },
            { label: "Abteilungen", value: departments.length },
            { label: "Plattformen", value: "4+" },
            { label: "Sofort einsatzbereit", value: "Ja" },
          ].map((stat, i) => (
            <div key={i} className="bg-slate-50 rounded-xl border border-[#EEEEEE] p-4 text-center">
              <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
              <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <div className="space-y-3">
          {departments.map((dept, index) => (
            <DepartmentCard key={index} dept={dept} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentsSection;
