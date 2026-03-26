import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowDown } from 'lucide-react';

const scrollToPain = () => {
  document.getElementById('pain')?.scrollIntoView({ behavior: 'smooth' });
};

const headlineWords = [
  { text: "Werde", highlight: false },
  { text: "der", highlight: false },
  { text: "Entwickler,", highlight: false, break: true },
  { text: "den", highlight: false },
  { text: "KI", highlight: true },
  { text: "nicht", highlight: true },
  { text: "ersetzen", highlight: true, break: true },
  { text: "kann.", highlight: false },
];

const wordAnimation = {
  hidden: { opacity: 0, y: 12, filter: "blur(8px)" },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: 0.3 + i * 0.07,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const HeroSection = ({ scrollToPricing }) => {
  return (
    <section className="relative flex flex-col items-center justify-center bg-white text-slate-900 pt-24 pb-10 md:pt-28 md:pb-14">
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-5 bg-slate-100 rounded-full pl-1 pr-4 py-1"
            >
              <img
                src="/images/profile.png"
                alt="Kevin Chromik"
                className="w-7 h-7 rounded-full object-cover object-top"
              />
              <span className="text-sm text-slate-600">mit Kevin Chromik</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold mb-5 leading-[1.15] text-slate-900">
              {headlineWords.map((word, i) => (
                <React.Fragment key={i}>
                  <motion.span
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={wordAnimation}
                    className={`inline-block mr-[0.25em] ${
                      word.highlight ? 'hero-highlight' : ''
                    }`}
                  >
                    {word.text}
                  </motion.span>
                  {word.break && <br className="hidden md:block" />}
                </React.Fragment>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="text-lg text-slate-500 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Lerne, wie du mit Claude Code professionelle Apps entwickelst und in 30 Tagen dein eigenes Produkt in den Store bringst.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: 1.05 }}
              className="flex flex-col sm:flex-row items-center lg:items-start gap-3"
            >
              <Button
                onClick={scrollToPricing}
                size="lg"
                className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-base font-medium rounded-full transition-colors duration-200"
              >
                Jetzt starten
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={scrollToPain}
                variant="outline"
                size="lg"
                className="border-slate-300 text-slate-700 hover:bg-slate-50 px-6 py-4 text-base font-medium rounded-full transition-colors duration-200"
              >
                Mehr erfahren
                <ArrowDown className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:w-1/2 w-full"
          >
            <div className="aspect-video w-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <iframe
                  src="https://player.vimeo.com/video/1097126379?h=66e45d323d&badge=0&autopause=0&player_id=0&app_id=58479"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                  title="App Accelerator Vorstellung"
                  className="rounded-2xl"
                ></iframe>
              </div>
            </div>
            <p className="text-center text-xs text-slate-400 mt-2">
              Schau rein: So funktioniert der App Accelerator (3 Min)
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
