import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Map, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LAUNCH_MODE, LAUNCH_PRICE, REGULAR_PRICE } from '@/config';

const pillars = [
  {
    icon: Bot,
    title: "KI als Entwicklungspartner",
    description: "Du lernst, wie du mit Claude Code und KI-Agents eine komplette App entwickelst, ohne jede Zeile selbst schreiben zu müssen. Die KI übernimmt die technische Umsetzung, während du dich auf dein Produkt konzentrierst."
  },
  {
    icon: Map,
    title: "Ein bewährtes 30-Tage-Framework",
    description: "Statt dich in endlosen Tutorials zu verlieren, folgst du einem klaren 5-Schritte-Prozess von der Idee bis zum App Store. Jeder Tag hat eine konkrete Aufgabe, damit du jeden Tag echten Fortschritt siehst."
  },
  {
    icon: Users,
    title: "Eine Community, die dich trägt",
    description: "Du bist nicht allein auf dem Weg. In der exklusiven Discord-Community findest du Gleichgesinnte, die an ihren eigenen Apps arbeiten, dir ehrliches Feedback geben und dich motivieren, dranzubleiben."
  }
];

const SolutionSection = ({ scrollToPricing }) => {
  const price = LAUNCH_MODE ? LAUNCH_PRICE : REGULAR_PRICE;

  return (
    <section className="py-14 md:py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Was wäre, wenn du keine einzige Zeile Code selbst schreiben müsstest?
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Künstliche Intelligenz hat die Spielregeln der App-Entwicklung grundlegend verändert. Was früher Monate an Lernzeit und tausende Zeilen Code erforderte, kannst du heute in einem Bruchteil der Zeit umsetzen. Der App Accelerator zeigt dir genau, wie das funktioniert.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 mt-12">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl border border-slate-100"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center mb-4">
                <pillar.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">{pillar.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mt-10"
        >
          <Button
            onClick={scrollToPricing}
            size="lg"
            className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-base font-medium rounded-full transition-colors duration-200"
          >
            Jetzt für €{price} sichern
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
