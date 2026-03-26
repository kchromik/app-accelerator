import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  AlertTriangle, 
  HelpCircle, 
  TrendingUp, 
  CheckCircle,
  Lightbulb,
  Users,
  DollarSign,
  Target,
  BarChart3,
  Zap,
  ServerCrash,
  Briefcase,
  EyeOff
} from 'lucide-react';

const pitchData = {
  challenges: {
    title: "Die unsichtbaren Mauern der App-Entwicklung",
    subtitle: "Viele talentierte Entwickler scheitern nicht am Code, sondern an den Hürden danach. Erkennst du dich wieder?",
    points: [
      { icon: Users, title: "Nutzeraquise", text: "Schwierigkeiten, die ersten 100 loyalen Nutzer zu gewinnen und eine echte Community aufzubauen." },
      { icon: DollarSign, title: "Preisstrategie", text: "Unsicherheit bei der Preisgestaltung: Zu billig? Zu teuer? Wie finde ich den Sweet Spot für maximalen Profit?" },
      { icon: Target, title: "Marketing ohne Budget", text: "Fehlende Strategien, um zahlende Kunden ohne ein riesiges Marketingbudget organisch zu erreichen." },
      { icon: BarChart3, title: "Conversion-Rätsel", text: "Frustration durch hohe Absprungraten und niedrige Konversionsraten ohne klare Ursachen und Lösungen." },
      { icon: AlertTriangle, title: "Marketing-Überforderung", text: "Überwältigt vom Marketing-Dschungel: SEO, ASO, Social Media, Content – wo anfangen und was wirkt wirklich?" },
      { icon: EyeOff, title: "Geringe Sichtbarkeit", text: "Deine App geht im riesigen App Store unter und wird von deiner Zielgruppe nicht gefunden." }
    ]
  },
  cause: {
    title: "Warum bleiben so viele auf der Strecke?",
    subtitle: "Der Weg von einer funktionierenden App zu einem profitablen Business ist oft steinig und unklar. Die Ursachen sind meist ähnlich:",
    points: [
      { icon: Lightbulb, title: "Technik-Fokus", text: "Zu starke Konzentration auf technische Perfektion bei gleichzeitiger Vernachlässigung von Marketing, Vertrieb und Business-Strategien." },
      { icon: Users, title: "Isolation & fehlender Austausch", text: "Alleine kämpfen statt von den Erfahrungen, Fehlern und Erfolgen anderer zu profitieren und Synergien zu nutzen." },
      { icon: ServerCrash, title: "Fehlendes Business-Know-how", text: "Mangelndes Wissen über nachhaltige Geschäftsmodelle, effektive Monetarisierungsstrategien und Skalierung." },
      { icon: Briefcase, title: "Ineffektive Vermarktung", text: "Unklare Zielgruppenansprache, ineffektive Vermarktungsversuche und fehlende Analyse der Ergebnisse." }
    ]
  },
  results: {
    title: "Deine Transformation im App Accelerator",
    subtitle: "Wir geben dir die Werkzeuge, das Wissen und die Community für nachhaltigen App-Erfolg. Das wirst du erreichen:",
    points: [
      { icon: CheckCircle, title: "Strategische Klarheit", text: "Du gewinnst Klarheit und Selbstvertrauen bei jedem Schritt deiner App-Reise, von der Idee bis zur Skalierung." },
      { icon: TrendingUp, title: "Messbares Wachstum", text: "Du steigerst deine Nutzerzahlen und deinen Umsatz durch bewährte, praxisnahe Strategien und Taktiken." },
      { icon: Users, title: "Starkes Netzwerk", text: "Exklusiver Zugang zu einer Gruppe ambitionierter App Entwickler auf Discord." },
      { icon: Zap, title: "Proaktive Problemlösung", text: "Du entwickelst die Fähigkeit, Herausforderungen proaktiv zu meistern und deine App-Ziele schneller zu erreichen." }
    ]
  }
};

const PointCard = ({ icon: Icon, title, text, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="glass-effect rounded-xl p-6 flex flex-col items-start text-left h-full hover:shadow-lg transition-shadow duration-300"
  >
    <div className="p-3 bg-slate-900 rounded-lg mb-4 inline-block">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <h4 className="text-lg font-semibold text-slate-800 mb-2">{title}</h4>
    <p className="text-slate-600 text-sm leading-relaxed">{text}</p>
  </motion.div>
);

const SectionBlock = ({ title, subtitle, points, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    viewport={{ once: true }}
    className="mb-16"
  >
    <div className="text-center mb-10">
      <h3 className="text-4xl font-bold mb-3 gradient-text">{title}</h3>
      <p className="text-slate-600 text-lg max-w-2xl mx-auto">{subtitle}</p>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {points.map((point, index) => (
        <PointCard key={index} icon={point.icon} title={point.title} text={point.text} index={index} />
      ))}
    </div>
  </motion.div>
);


const PitchSection = ({ scrollToPricing }) => {
  return (
    <section className="py-12 md:py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-black mb-6 text-slate-900">
            Vom Code zum <span className="gradient-text">Cashflow</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Entdecke, wie der App Accelerator dir hilft, die typischen Fallstricke zu umgehen und deine App erfolgreich zu machen.
          </p>
        </motion.div>

        <SectionBlock 
          title={pitchData.challenges.title}
          subtitle={pitchData.challenges.subtitle}
          points={pitchData.challenges.points}
        />
        <SectionBlock 
          title={pitchData.cause.title}
          subtitle={pitchData.cause.subtitle}
          points={pitchData.cause.points}
          delay={0.2}
        />
        <SectionBlock 
          title={pitchData.results.title}
          subtitle={pitchData.results.subtitle}
          points={pitchData.results.points}
          delay={0.4}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button 
            onClick={scrollToPricing}
            size="lg" 
            className="bg-slate-900 hover:bg-slate-800 text-white px-10 py-5 text-xl font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-slate-500/20"
          >
            Entdecke die Features & Preise
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PitchSection;