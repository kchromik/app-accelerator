import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, GitFork, PlayCircle, ArrowRight, Calendar, Bot, Compass, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LAUNCH_MODE } from '@/config';

const painPoints = [
  {
    icon: Lightbulb,
    title: "Du hast eine App-Idee, aber keinen Plan, wo du anfangen sollst",
    description: "Die Idee ist da, aber der Weg zur fertigen App fühlt sich überwältigend an."
  },
  {
    icon: GitFork,
    title: "Programmieren lernen fühlt sich wie ein endloses Rabbit Hole an",
    description: "Jedes Tutorial führt zu drei neuen Themen. Du kommst nicht vom Lernen ins Machen."
  },
  {
    icon: PlayCircle,
    title: "Du hast YouTube-Tutorials geschaut, aber nichts Fertiges gebaut",
    description: "Du schaust stundenlang Videos und kopierst Code, aber am Ende hast du immer noch keine eigene App."
  },
  {
    icon: Compass,
    title: "Du weißt nicht, welche Technologie die richtige für dein Projekt ist",
    description: "Flutter, SwiftUI, React Native? Die Auswahl überfordert, und jeder empfiehlt was anderes."
  }
];

const solutions = [
  {
    icon: Calendar,
    title: "Klarer 30-Tage-Fahrplan",
    description: "Kein Rätselraten. Du weißt an jedem Tag genau, was du tun musst. Von der Idee über das Design bis zum App Store Launch."
  },
  {
    icon: Bot,
    title: "KI als dein Entwicklungspartner",
    description: "Du lernst, wie du mit Claude Code arbeitest und Features in Minuten statt Stunden umsetzt. Auch ohne Programmiererfahrung."
  },
  {
    icon: Compass,
    title: "Die richtige Technologie für dich",
    description: "Flutter, SwiftUI oder was am besten zu deinem Projekt passt. Wir helfen dir bei der Entscheidung und zeigen dir den Weg."
  },
  {
    icon: Users,
    title: "Community die mitzieht",
    description: "Lifetime-Zugang zur Discord-Community. Fragen stellen, Feedback bekommen, voneinander lernen."
  }
];

const PainSolutionSection = ({ scrollToPricing }) => {

  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Pain */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Kommt dir das bekannt vor?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-5 rounded-2xl border border-slate-100"
            >
              <point.icon className="w-5 h-5 text-slate-400 mb-3" />
              <h3 className="text-base font-semibold text-slate-900 mb-1">{point.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Solution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Der App Accelerator löst genau das.
          </h2>
          <p className="text-base text-slate-500 max-w-xl mx-auto">
            KI hat die Spielregeln verändert. Was früher Monate dauerte, schaffst du heute in Wochen.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {solutions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-5 rounded-2xl border border-slate-100"
            >
              <div className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center mb-3">
                <item.icon className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-1">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
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
            Jetzt starten
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PainSolutionSection;
