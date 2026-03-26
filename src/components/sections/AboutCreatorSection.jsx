import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Zap, Award, Bot, User } from 'lucide-react';

const AboutCreatorSection = () => {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-[#EEEEEE]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:hidden"
        >
          <div className="inline-flex items-center gap-1.5 mb-5 px-3 py-1 rounded-full bg-slate-50 border border-[#EEEEEE]">
            <User className="w-3 h-3 text-slate-400" />
            <span className="text-xs font-medium text-slate-500">Über den Entwickler</span>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <img
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover object-top"
              alt="Kevin Chromik"
              src="/images/profile.png"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="hidden md:inline-flex items-center gap-1.5 mb-5 px-3 py-1 rounded-full bg-slate-50 border border-[#EEEEEE]">
              <User className="w-3 h-3 text-slate-400" />
              <span className="text-xs font-medium text-slate-500">Über den Entwickler</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Hi, ich bin Kevin.
            </h3>
            <p className="text-slate-600 mb-3 leading-relaxed">
              Solo-Entwickler, YouTuber, und ich baue und verkaufe meine eigenen Apps: WhisperBar, Streak, oneWeek. KI-Tools wie Claude Code nutze ich jeden Tag in meinem Workflow. Der App Accelerator ist genau der Prozess den ich selbst benutze, verpackt als Schritt-für-Schritt-Anleitung.
            </p>
            <p className="text-slate-600 mb-5 leading-relaxed">
              Keine Theorie aus dem Lehrbuch. Nur das was wirklich funktioniert.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 rounded-full text-sm text-slate-700 border border-[#EEEEEE]">
                <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                10+ Jahre App-Entwicklung
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 rounded-full text-sm text-slate-700 border border-[#EEEEEE]">
                <Zap className="w-3.5 h-3.5 text-slate-400" />
                Top Unternehmen
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 rounded-full text-sm text-slate-700 border border-[#EEEEEE]">
                <Award className="w-3.5 h-3.5 text-slate-400" />
                Eigene Apps im Store
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 rounded-full text-sm text-slate-700 border border-[#EEEEEE]">
                <Bot className="w-3.5 h-3.5 text-slate-400" />
                KI-Workflow täglich
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutCreatorSection;
