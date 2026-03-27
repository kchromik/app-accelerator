import React from 'react';
import { motion } from 'framer-motion';
import { Quote, MessageCircle } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Simon Z.",
    role: "iOS-Entwickler, 15+ Jahre Erfahrung",
    initials: "SZ",
    text: "Im App Accelerator teile ich meine 15 Jahre iOS-Erfahrung und erhalte wertvolles Feedback zu meinen eigenen Ideen. Der Austausch auf Augenhöhe macht den Unterschied."
  },
  {
    id: 2,
    name: "Ralf M.",
    role: "App-Entwickler",
    initials: "RM",
    text: "Hat mir enorm geholfen, beim Aufbau meiner App klarer und fokussierter vorzugehen. Besonders wertvoll: der Austausch mit anderen Entwicklern."
  },
  {
    id: 3,
    name: "Arif E.",
    role: "App-Entwickler",
    initials: "AE",
    text: "Perspektiven von der Entwicklung bis zur Veröffentlichung. Man wird Teil eines Netzwerks, das sich gegenseitig unterstützt."
  },
  {
    id: 4,
    name: "Ralf W.",
    role: "Indie-Entwickler",
    initials: "RW",
    text: "Eine Community, die mich wirklich weiterbringt. Tools, Tipps und echte Entwickler-Insights. Kein oberflächliches Networking."
  }
];

const ReviewCard = ({ review }) => (
  <div className="flex-shrink-0 w-[280px] md:w-auto md:flex-1 bg-white rounded-xl border border-[#EEEEEE] p-5">
    <Quote className="w-4 h-4 text-slate-200 mb-2" />
    <p className="text-slate-600 text-sm leading-relaxed mb-4">
      "{review.text}"
    </p>
    <div className="flex items-center gap-2.5">
      <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-[10px] font-medium text-white">
        {review.initials}
      </div>
      <div>
        <p className="text-xs font-medium text-slate-900">{review.name}</p>
        <p className="text-[11px] text-slate-500">{review.role}</p>
      </div>
    </div>
  </div>
);

const ReviewsSection = () => {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-1.5 mb-5 px-3 py-1 rounded-full bg-slate-50 border border-[#EEEEEE]">
            <MessageCircle className="w-3 h-3 text-slate-400" />
            <span className="text-xs font-medium text-slate-500">Erfahrungen</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Was Teilnehmer sagen
          </h2>
          <p className="text-base text-slate-500">
            Echte Erfahrungen von Menschen die mit dem App Accelerator arbeiten.
          </p>
        </motion.div>

        {/* Desktop: 4 columns in a row */}
        <div className="hidden md:grid md:grid-cols-4 gap-4">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="md:hidden flex gap-4 overflow-x-auto pb-2 scrollbar-hide -mx-6 px-6 snap-x snap-mandatory">
          {reviews.map((review) => (
            <div key={review.id} className="snap-start">
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
