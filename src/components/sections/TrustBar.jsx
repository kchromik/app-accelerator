import React from 'react';
import { motion } from 'framer-motion';
import { Bot, BookOpen, Layers, Users } from 'lucide-react';

const stats = [
  { icon: Bot, label: "24 KI-Agenten" },
  { icon: BookOpen, label: "6 Module" },
  { icon: Layers, label: "40+ Lektionen" },
  { icon: Users, label: "Exklusive Community" },
];

const TrustBar = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true }}
      className="py-6 bg-white border-t border-[#EEEEEE]"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-slate-600"
            >
              <stat.icon className="w-4 h-4 text-slate-400" />
              <span className="text-sm font-medium">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TrustBar;
