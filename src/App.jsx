import React from 'react';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import TrustBar from '@/components/sections/TrustBar';
import PainSection from '@/components/sections/PainSection';
import UrsacheSection from '@/components/sections/UrsacheSection';
import ProductOverviewSection from '@/components/sections/ProductOverviewSection';
import ModulesSection from '@/components/sections/ModulesSection';
import AgentsSection from '@/components/sections/AgentsSection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import AboutCreatorSection from '@/components/sections/AboutCreatorSection';
import FaqSection from '@/components/sections/FaqSection';
import PricingSection from '@/components/sections/PricingSection';
import FinalCtaSection from '@/components/sections/FinalCtaSection';
import Footer from '@/components/sections/Footer';

const App = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 overflow-x-hidden">
      <Toaster />
      <Navbar scrollToPricing={scrollToPricing} />
      <HeroSection scrollToPricing={scrollToPricing} />
      <TrustBar />
      <PainSection />
      <UrsacheSection />
      <ProductOverviewSection />
      <ModulesSection scrollToPricing={scrollToPricing} />
      <AgentsSection />
      <AboutCreatorSection />
      <ReviewsSection />
      <FaqSection />
      <PricingSection />
      <FinalCtaSection scrollToPricing={scrollToPricing} />
      <Footer />
    </div>
  );
};

export default App;
