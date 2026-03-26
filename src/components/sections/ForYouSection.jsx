
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, TrendingUp, Download, CreditCard } from 'lucide-react';
import CtaButton from '@/components/ui/CtaButton';

const forYouPoints = [
  {
    icon: Lightbulb,
    text: "Du eine App-Idee hast und endlich den ersten Schritt machen willst."
  },
  {
    icon: Target,
    text: "Du einen klaren Plan brauchst, statt dich in Details zu verlieren."
  },
  {
    icon: Users,
    text: "Du dir ehrliches Feedback von anderen Entwicklern wünschst."
  },
  {
    icon: TrendingUp,
    text: "Du jede Woche sichtbaren Fortschritt sehen willst."
  },
  {
    icon: Download,
    text: "Du deine App wirklich veröffentlichen willst, nicht nur daran basteln."
  },
  {
    icon: CreditCard,
    text: "Du jemanden brauchst, der dich auf Kurs hält."
  }
];

const ForYouSection = ({ scrollToPricing }) => {
  // Using the local image file that's been added to the project
  const developerImageUrl = "/images/developer-collage.png";
  
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Das ist für dich, wenn …
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          {/* Image on the left */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <img 
              src={developerImageUrl} 
              alt="App Accelerator Entwickler" 
              className="w-full h-auto object-cover"
            />
          </motion.div>
          
          {/* Points on the right */}
          <div className="w-full md:w-1/2">
            <div className="space-y-3"> {/* Reduced spacing between points */}
              {forYouPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 p-2 rounded-md hover:bg-slate-50/70 transition-colors duration-150"
                >
                  <div className="flex-shrink-0 mt-1">
                    <point.icon className="w-5 h-5 text-slate-400" />
                  </div>
                  <p className="text-slate-700 text-base md:text-lg">{point.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* CTA button removed */}
      </div>
    </section>
  );
};

export default ForYouSection;
