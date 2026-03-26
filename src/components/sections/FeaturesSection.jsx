import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Video, BookOpen } from 'lucide-react';

const featuresData = [
  {
    icon: Users,
    title: "Geschlossene Community",
    description: "Exklusiver Zugang zu einer Gruppe ambitionierter App Entwickler auf Discord."
  },
  {
    icon: Video,
    title: "Regelmäßige Live Calls",
    description: "Regelmäßige Live Sessions, Q&A, App-Reviews und direktem Feedback zu deinen Projekten."
  },
  {
    icon: BookOpen,
    title: "Ausführliche Schulungsinhalte",
    description: "Schritt-für-Schritt Anleitungen von der Ideenfindung über Umsetzung bis zum erfolgreichen App Launch und Marketing."
  }
];

const FeaturesSection = ({ scrollToPricing }) => {
  return (
    <section id="features" className="py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black mb-6 text-slate-900">
            Das <span className="text-slate-900 font-black">bekommst du</span> im Circle
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Alles was du brauchst, um deine Mobile App erfolgreich zu launchen und zu skalieren – an einem Ort.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center group p-6 rounded-xl bg-white shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-slate-900 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

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
            className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            Jetzt Preis ansehen
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;