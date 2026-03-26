import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';

const testimonialsData = [
  {
    name: "Marcus Weber",
    role: "iOS Entwickler",
    content: "Dank App Accelerator habe ich endlich meine ersten 500 zahlenden Nutzer erreicht. Die Community ist Gold wert!",
    rating: 5
  },
  {
    name: "Sarah Klein",
    role: "Indie App Entwicklerin",
    content: "Die Live Calls haben mir geholfen, meine Conversion Rate um 300% zu steigern. Unbezahlbar!",
    rating: 5
  },
  {
    name: "Tom Müller",
    role: "Startup Gründer",
    content: "Von 0 auf 1000 Downloads in 30 Tagen. Die Strategien aus dem Circle funktionieren wirklich.",
    rating: 5
  }
];

const TestimonialsSection = ({ scrollToPricing }) => {
  return (
    <section id="testimonials" className="py-12 md:py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black mb-6 text-slate-900">
            <span className="gradient-text">Erfolgsgeschichten</span>
            <br />
            unserer Mitglieder
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div>
                <div className="font-semibold text-slate-800">{testimonial.name}</div>
                <div className="text-slate-600 text-sm">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button 
            onClick={scrollToPricing}
            size="lg" 
            className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Teil der Community werden
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;