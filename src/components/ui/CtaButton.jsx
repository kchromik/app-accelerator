import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CtaButton = ({ scrollToPricing, text, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`flex justify-center mt-8 ${className}`}
    >
      <Button
        onClick={scrollToPricing}
        size="lg"
        className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-base font-medium rounded-full transition-colors duration-200 flex items-center justify-center"
      >
        <span>{text}</span>
        <ArrowRight className="ml-2 w-5 h-5 flex-shrink-0" />
      </Button>
    </motion.div>
  );
};

export default CtaButton;