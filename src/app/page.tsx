'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { TechStackMarqueeSection } from '@/components/sections/TechStackMarqueeSection';
import { TrustIntro } from '@/components/sections/TrustIntro';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/layout/Footer';
import { Modals } from '@/components/ui/Modals';

export default function HomePage() {
  // Modal states
  const [discoverModalOpen, setDiscoverModalOpen] = useState(false);

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

      {/* 3. Tech Stack Infinite Marquee Section (Scrolling Left to Right) */}
      <TechStackMarqueeSection />

      {/* 4. Trust & Intro Metrics Section (WHO WE ARE) */}
      <TrustIntro />

      {/* 5. About ANVITECH Section */}
      <About onDiscoverAnvitech={() => setDiscoverModalOpen(true)} />

      {/* 5. Contact Form Section */}
      <Contact />

      {/* 6. Premium Dark Footer */}
      <Footer />

      {/* Interactive Detail Modals */}
      <Modals
        activeService={null}
        onCloseServiceModal={() => {}}
        activeCaseStudy={null}
        onCloseCaseStudyModal={() => {}}
        discoverModalOpen={discoverModalOpen}
        onCloseDiscoverModal={() => setDiscoverModalOpen(false)}
        careersModalOpen={false}
        onCloseCareersModal={() => {}}
      />
    </main>
  );
}
