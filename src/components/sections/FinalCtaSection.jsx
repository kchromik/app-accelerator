import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const FinalCtaSection = ({ scrollToPricing }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, margin: "-50px" }}
      className="py-20 md:py-28 bg-white"
    >
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Werde unersetzbar. Starte jetzt.
        </h2>
        <p className="text-lg text-slate-500 mb-8">
          Lerne, mit KI zu arbeiten, und bring deine eigene App in den Store.
        </p>
        <Button
          onClick={scrollToPricing}
          size="lg"
          className="bg-slate-900 hover:bg-slate-800 text-white px-10 py-4 text-base font-semibold rounded-full transition-colors duration-200"
        >
          Jetzt starten
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </motion.section>
  );
};

export default FinalCtaSection;
