import React from 'react';
import { MessageSquare, Calendar, Video, FileText, Users, Zap } from 'lucide-react';

const DeliverablesSection = () => {
  const deliverables = [
    {
      icon: MessageSquare,
      title: "Discord Community",
      description: "Geschlossene Community mit themenspezifischen Channels"
    },
    {
      icon: Calendar,
      title: "30-Tage-Challenge",
      description: "Strukturierter Plan von der Idee bis zum Launch"
    },
    {
      icon: Video,
      title: "Wöchentliche Live-Calls",
      description: "Q&A, App-Reviews und Erfahrungsaustausch"
    },
    {
      icon: Zap,
      title: "Roast My App",
      description: "Ehrliches Feedback zu deiner App von der Community"
    },
    {
      icon: FileText,
      title: "Vorlagen & Checklisten",
      description: "Notion Dashboard und bewährte Templates"
    },
    {
      icon: Users,
      title: "Direkter Austausch",
      description: "Fragen stellen, Feedback bekommen, voneinander lernen"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 text-center">
          Was du bekommst
        </h2>
        <p className="text-slate-600 text-center mb-12 max-w-xl mx-auto">
          Alles, was du brauchst, um deine App in 30 Tagen zu bauen und zu veröffentlichen.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverables.map((item, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-lg p-5 hover:border-slate-300 transition-colors"
            >
              <item.icon className="w-6 h-6 text-slate-900 mb-3" />
              <h3 className="font-semibold text-slate-900 mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliverablesSection;
