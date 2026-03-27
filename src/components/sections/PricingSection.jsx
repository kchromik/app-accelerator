import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Lock, Shield, RefreshCw } from 'lucide-react';
import CountdownTimer from '@/components/ui/CountdownTimer';
import { LAUNCH_MODE, LAUNCH_END_DATE, LAUNCH_PRICE, REGULAR_PRICE, CHECKOUT_URL } from '@/config';

const features = [
  "6 Module + Bonusmodul mit über 50 Lektionen",
  "KI-Workflow-Training mit Claude Code",
  "25 vorkonfigurierte KI-Agenten für App-Entwicklung",
  "30-Tage-Fahrplan von der Idee bis zum Launch",
  "Exklusive Discord-Community",
  "Alle zukünftigen Updates"
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-14 md:py-20 bg-white">
      <div className="max-w-lg mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Einmal zahlen. Kein Abo.
          </h2>
          <p className="text-lg text-slate-500">
            Du zahlst einmal und hast uneingeschränkt Zugang zu allen Modulen, Updates und der Community.
          </p>
        </motion.div>

        {LAUNCH_MODE && (
          <CountdownTimer targetDate={LAUNCH_END_DATE} />
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-7 border border-[#EEEEEE] flex flex-col"
        >
          {LAUNCH_MODE && (
            <div className="inline-flex self-start items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-full px-3 py-1 mb-4">
              <span className="text-xs font-semibold text-amber-800">Launch-Preis</span>
            </div>
          )}

          <div className="mb-1">
            <h3 className="text-lg font-semibold text-slate-900">App <span className="text-violet-600">Accelerator</span></h3>
            <p className="text-sm text-slate-500">Dein Komplettkurs für App-Entwicklung mit KI</p>
          </div>

          <div className="my-5">
            {LAUNCH_MODE ? (
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-slate-900">€{LAUNCH_PRICE}</span>
                <span className="text-lg text-slate-400 line-through">€{REGULAR_PRICE}</span>
                <span className="text-sm font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">
                  Spare {REGULAR_PRICE - LAUNCH_PRICE}€
                </span>
              </div>
            ) : (
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-slate-900">€{REGULAR_PRICE}</span>
              </div>
            )}
            <p className="text-sm text-slate-500 mt-1">einmalig</p>
          </div>

          <ul className="space-y-3 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 text-sm">{feature}</span>
              </li>
            ))}
          </ul>

          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-auto"
          >
            <Button
              size="lg"
              className="w-full rounded-full bg-slate-900 hover:bg-slate-800 text-white py-4 text-base"
              onClick={() => { if (typeof fbq === 'function') fbq('track', 'InitiateCheckout'); }}
            >
              Jetzt Zugang sichern
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-6 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5" />
            Sichere Zahlung über Digistore24
          </span>
          <span className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5" />
            14-Tage-Geld-zurück-Garantie
          </span>
          <span className="flex items-center gap-1.5">
            <RefreshCw className="w-3.5 h-3.5" />
            Sofortiger Zugang nach Kauf
          </span>
        </div>

        <p className="text-center text-sm text-slate-400 mt-6">
          Fragen? Schreib mir an <a href="mailto:hi@kevinchromik.de" className="text-slate-600 underline">hi@kevinchromik.de</a>
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
