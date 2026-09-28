'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { TechStackMarqueeSection } from '@/components/sections/TechStackMarqueeSection';
import { BehindTheLensSection } from '@/components/sections/BehindTheLensSection';
import { CtaFaqFooterSection } from '@/components/sections/CtaFaqFooterSection';
import { Modals } from '@/components/ui/Modals';

export default function HomePage() {
  const scrollToContact = () => {
    const faqEl = document.querySelector('footer');
    faqEl?.scrollIntoView({ behavior: 'smooth' });
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

      {/* 3. Tech Stack Infinite Marquee Section (Scrolling Left to Right) */}
      <TechStackMarqueeSection />

      {/* Behind the Lens Section */}
      <BehindTheLensSection />

      {/* 4. CTA + FAQ + Footer Section */}
      <CtaFaqFooterSection />

      {/* Interactive Detail Modals */}
      <Modals
        activeService={null}
        onCloseServiceModal={() => {}}
        activeCaseStudy={null}
        onCloseCaseStudyModal={() => {}}
        discoverModalOpen={false}
        onCloseDiscoverModal={() => {}}
        careersModalOpen={false}
        onCloseCareersModal={() => {}}
      />
    </main>
  );
}
