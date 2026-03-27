import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bot, Code, Palette, TestTube, Bug, Server, Shield, Lightbulb,
  ChevronDown, ChevronUp
} from 'lucide-react';

const departments = [
  {
    name: "Engineering",
    icon: Code,
    agents: [
      { title: "Software Architekt", desc: "Entwirft App-Architekturen, erstellt ADRs und bewertet Trade-offs" },
      { title: "Mobile App Entwickler", desc: "Cross-Platform-Experte für SwiftUI, Compose, Flutter & React Native" },
      { title: "SwiftUI Entwickler", desc: "iOS-Spezialist mit Swift 6.2, SwiftData, Liquid Glass und iOS 26" },
      { title: "Android Entwickler", desc: "Kotlin 2.3, Jetpack Compose 1.10 und Material Design 3" },
      { title: "Flutter Entwickler", desc: "Dart, Riverpod 3.x, Clean Architecture und adaptive Widgets" },
      { title: "React Native Entwickler", desc: "Expo SDK 55, New Architecture, TypeScript und Zustand" },
      { title: "Backend-API-Entwickler", desc: "REST/GraphQL-APIs, Auth-Flows und Offline-Sync" },
      { title: "Firebase Developer", desc: "Auth, Firestore, Realtime DB, Cloud Functions und Analytics" },
      { title: "Supabase Developer", desc: "Auth, Datenbank, Echtzeit, Storage und Edge Functions" },
      { title: "Code Reviewer", desc: "Prüft Code auf Qualität, Performance und Sicherheit" },
      { title: "Git-Workflow-Meister", desc: "Commits, Branches und PRs mit Conventional Commits" },
      { title: "Refactoring-Experte", desc: "Systematisches Refactoring ohne Verhaltensänderung" },
    ]
  },
  {
    name: "Design",
    icon: Palette,
    agents: [
      { title: "UX Architect", desc: "User-Flows, Navigationsmuster und Informationsarchitektur" },
      { title: "UI Builder", desc: "Plattformkonforme UI-Komponenten mit Dark Mode und responsiven Layouts" },
      { title: "Barrierefreiheits-Spezialist", desc: "WCAG 2.1 AA, VoiceOver, TalkBack und Dynamic Type" },
    ]
  },
  {
    name: "Testing",
    icon: TestTube,
    agents: [
      { title: "QA-Ingenieur", desc: "End-to-End-Teststrategien, Gerätematrix und Beta-Koordination" },
      { title: "Test-Autor", desc: "Unit-, Widget- und Integrationstests mit Randfallabdeckung" },
      { title: "Performance-Benchmarker", desc: "Startup, Memory, CPU - 60fps auf allen Geräten" },
    ]
  },
  {
    name: "Debugging",
    icon: Bug,
    agents: [
      { title: "Bug Hunter", desc: "Findet Ursachen statt Symptome zu behandeln" },
      { title: "Crash Analyst", desc: "Crash-Logs, ANR-Traces, Symbolication und Memory-Probleme" },
    ]
  },
  {
    name: "DevOps",
    icon: Server,
    agents: [
      { title: "CI/CD Engineer", desc: "GitHub Actions, Fastlane, Code Signing und automatisiertes Deployment" },
      { title: "Store Prep", desc: "App Store & Play Store - Checklisten, Listings und Ablehnungsrisikoanalyse" },
    ]
  },
  {
    name: "Security",
    icon: Shield,
    agents: [
      { title: "Mobile Security Auditor", desc: "OWASP Mobile Top 10, Secrets-Erkennung und Netzwerk-Audits" },
    ]
  },
  {
    name: "Product",
    icon: Lightbulb,
    agents: [
      { title: "Feature Planner", desc: "Architekturentscheidungen, Abhängigkeitsanalyse und Teststrategie" },
      { title: "Codebase Analyzer", desc: "Tech-Debt-Analyse, Qualitätsbewertungen und CLAUDE.md-Generierung" },
    ]
  },
];

const totalAgents = departments.reduce((sum, dept) => sum + dept.agents.length, 0);

const DepartmentCard = ({ dept, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="rounded-xl border border-slate-200/80 bg-white overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-4 p-4 w-full text-left hover:bg-slate-50/50 transition-colors duration-150"
      >
        <div className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center bg-slate-100">
          <dept.icon className="w-4 h-4 text-slate-600" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2.5 flex-wrap">
            <h3 className="text-sm font-semibold text-slate-900">{dept.name}</h3>
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-500">
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
            <div className="px-4 pb-4 space-y-1.5">
              {dept.agents.map((agent, i) => (
                <div key={i} className="flex items-start gap-3 rounded-lg p-2.5 bg-slate-50/80">
                  <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-slate-300" />
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
    <section id="agents" className="py-14 md:py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-1.5 mb-5 px-3 py-1 rounded-full bg-white border border-slate-200/80">
            <Bot className="w-3 h-3 text-slate-400" />
            <span className="text-xs font-medium text-slate-500">Inklusive</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Deine komplette KI-Abteilung. {totalAgents} Spezialisten.
          </h2>
          <p className="text-base text-slate-500 max-w-xl mx-auto">
            Vorkonfigurierte KI-Agenten für jede Phase der App-Entwicklung. Von Architektur über Testing bis zum Store-Launch.
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
            <div key={i} className="bg-white rounded-xl border border-slate-200/80 p-4 text-center">
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
