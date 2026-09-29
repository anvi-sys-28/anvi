'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { TechStackMarqueeSection } from '@/components/sections/TechStackMarqueeSection';
import { BehindTheLensSection } from '@/components/sections/BehindTheLensSection';
import { CtaFaqFooterSection } from '@/components/sections/CtaFaqFooterSection';

export default function HomePage() {
  const scrollToContact = () => {
    const contactEl = document.getElementById('contact');
    contactEl?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-brand-bg text-navy-DEFAULT overflow-x-hidden selection:bg-gold-DEFAULT selection:text-navy-DEFAULT">
      {/* 1. Header Navigation */}
      <Navbar onOpenContactModal={scrollToContact} />

      {/* 2. Hero Section */}
      <Hero
        onExploreSolutions={scrollToContact}
        onTalkToTeam={scrollToContact}
      />

      {/* 3. Tech Stack Infinite Marquee Section */}
      <TechStackMarqueeSection />

      {/* 4. Technology Insights & Blog Section */}
      <BehindTheLensSection />

      {/* 5. CTA + FAQ + Footer Section */}
      <CtaFaqFooterSection />
    </main>
  );
}
