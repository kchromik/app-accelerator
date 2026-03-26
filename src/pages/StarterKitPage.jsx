import React, { useEffect } from 'react';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const StarterKitPage = () => {
  useEffect(() => {
    const metaRobots = document.createElement('meta');
    metaRobots.name = 'robots';
    metaRobots.content = 'noindex, nofollow';
    document.head.appendChild(metaRobots);

    const originalTitle = document.title;
    document.title = 'App Builder Starter Kit';

    return () => {
      document.head.removeChild(metaRobots);
      document.title = originalTitle;
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 pt-24 pb-20 md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-slate-900">
            <span className="highlight-marker">App Builder</span> Starter Kit
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Schau dir den Workshop an und lade dir das Framework herunter, um direkt loszulegen.
          </p>
        </motion.div>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="aspect-video max-w-3xl w-full mx-auto rounded-xl overflow-hidden border border-slate-200 shadow-sm mb-12"
        >
          <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
            <iframe
              src="https://player.vimeo.com/video/1166119985?h=c29d47c514&badge=0&autopause=0&player_id=0&app_id=58479"
              title="App Builder Starter Kit - Workshop"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              referrerPolicy="strict-origin-when-cross-origin"
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              className="rounded-xl"
              allowFullScreen
            />
          </div>
        </motion.div>

        {/* Workshop Hinweis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
            Das ist ein interaktiver Workshop
          </h2>
          <ul className="space-y-3 text-slate-600">
            <li className="flex items-start gap-3">
              <span className="text-slate-400 mt-0.5">—</span>
              <span>Schnapp dir Stift und Papier, bevor du startest</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-slate-400 mt-0.5">—</span>
              <span>Mach bei jeder Aufgabe aktiv mit, denn nur Zuschauen bringt nichts</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-slate-400 mt-0.5">—</span>
              <span>Wer mitmacht, holt das Maximum aus dem Workshop raus</span>
            </li>
          </ul>
        </motion.div>

        {/* Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-200 p-6 md:p-8"
        >
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
            Das 30-Tage Framework
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Dein Schritt-für-Schritt Plan, um in 30 Tagen von der Idee zur fertigen App zu kommen.
            Lade dir das PDF herunter und arbeite es in deinem eigenen Tempo durch.
          </p>

          <a
            href="/files/das-30-tage-framework.pdf"
            download
          >
            <Button
              size="lg"
              className="rounded-full bg-slate-900 hover:bg-slate-800 text-white"
            >
              <Download className="mr-2 w-5 h-5" />
              Herunterladen
            </Button>
          </a>
        </motion.div>
      </main>
    </div>
  );
};

export default StarterKitPage;
