import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Bot, Palette, Calendar, TestTube, Store, Megaphone, ArrowRight, ChevronDown, ChevronUp, Star, Check, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';

const modules = [
  {
    number: "01",
    icon: Rocket,
    title: "Idee & Validierung",
    highlight: false,
    lessons: [
      "Wie du eine App-Idee findest die Leute wirklich wollen",
      "Marktanalyse: Gibt es Nachfrage?",
      "Technologie-Entscheidung: Flutter, SwiftUI oder etwas anderes?",
      "Entwicklungsumgebung einrichten"
    ]
  },
  {
    number: "02",
    icon: Bot,
    title: "Entwickeln mit KI",
    highlight: true,
    lessons: [
      "Was ist Claude Code und warum ist es ein Game-Changer",
      "Die CLAUDE.md Datei: Dein Projekt-Gedächtnis",
      "Der richtige Workflow: Wie man mit Claude Code entwickelt",
      "MCP Server: Claude Code mit externen Tools verbinden",
      "Custom Slash Commands und Workflows automatisieren",
      "Frontend Development mit Claude Code",
      "Sicherheit, Permissions und Best Practices",
      "Praxis-Projekt: Feature komplett mit Claude Code bauen"
    ]
  },
  {
    number: "03",
    icon: Palette,
    title: "Design für Entwickler",
    highlight: false,
    lessons: [
      "Design-Grundlagen ohne Designer",
      "Wireframes und Mockups erstellen",
      "Von der Skizze zum fertigen Screen"
    ]
  },
  {
    number: "04",
    icon: Calendar,
    title: "App-Entwicklung",
    highlight: false,
    lessons: [
      "App-Architektur planen",
      "Core Features Schritt für Schritt umsetzen",
      "Daten speichern und verwalten",
      "APIs anbinden und externe Services integrieren"
    ]
  },
  {
    number: "05",
    icon: TestTube,
    title: "Testing & Quality",
    highlight: false,
    lessons: [
      "Manuelles und automatisiertes Testing",
      "Beta-Testing mit TestFlight / Google Play Internal Testing",
      "Bug Fixing Workflow mit KI"
    ]
  },
  {
    number: "06",
    icon: Store,
    title: "App Store Launch",
    highlight: false,
    lessons: [
      "App Store & Play Store Guidelines",
      "Screenshots, Beschreibung und Keywords optimieren (ASO)",
      "Die Einreichung Schritt für Schritt",
      "Was tun bei Ablehnung"
    ]
  },
  {
    number: "07",
    icon: Megaphone,
    title: "Marketing & Wachstum",
    highlight: false,
    lessons: [
      "Landing Page für deine App (inkl. GitHub Template zum Klonen)",
      "Erste Nutzer gewinnen ohne Budget",
      "Feedback sammeln und weiterentwickeln"
    ]
  },
];

const bonusItems = [
  "24 vorkonfigurierte KI-Agenten für App-Entwicklung",
  "Lifetime Zugang zur Discord-Community",
  "Alle zukünftigen Updates inklusive",
];

const ModuleAccordion = ({ mod, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      viewport={{ once: true }}
      className={`rounded-xl border overflow-hidden ${
        mod.highlight
          ? 'bg-slate-50/50 border-slate-200/60'
          : 'bg-white border-[#EEEEEE]'
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-4 p-4 w-full text-left"
      >
        <div className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center ${
          mod.highlight ? 'bg-slate-800' : 'bg-slate-900'
        }`}>
          <mod.icon className="w-4 h-4 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-sm font-semibold text-slate-900">{mod.title}</h3>
            {mod.highlight && (
              <span className="inline-flex items-center gap-1 text-xs font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full">
                <Star className="w-3 h-3" />
                Herzstück
              </span>
            )}
          </div>
          <p className="text-slate-500 text-xs mt-0.5">{mod.lessons.length} Lektionen</p>
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
            <ul className="px-4 pb-4 pl-[4.25rem] space-y-2">
              {mod.lessons.map((lesson, i) => (
                <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                  <span className="text-slate-300 mt-1">•</span>
                  {lesson}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ModulesSection = ({ scrollToPricing }) => {
  return (
    <section id="modules" className="py-20 md:py-28 bg-white border-t border-[#EEEEEE]">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-1.5 mb-5 px-3 py-1 rounded-full bg-slate-50 border border-[#EEEEEE]">
            <Package className="w-3 h-3 text-slate-400" />
            <span className="text-xs font-medium text-slate-500">Die Lösung</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Alles was du brauchst. In einem Programm.
          </h2>
          <p className="text-base text-slate-500 max-w-xl mx-auto">
            6 Module, 40+ Lektionen, KI-Workflow-Training, Templates und eine Community die mitzieht.
          </p>
        </motion.div>

        <div className="space-y-3 mb-10">
          {modules.map((mod, index) => (
            <ModuleAccordion key={index} mod={mod} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10"
        >
          {bonusItems.map((item, index) => (
            <div key={index} className="flex items-center gap-3 bg-white rounded-xl border border-[#EEEEEE] p-4">
              <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
              <span className="text-sm text-slate-700">{item}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Button
            onClick={scrollToPricing}
            size="lg"
            className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-base font-medium rounded-full transition-colors duration-200"
          >
            Jetzt starten
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ModulesSection;
