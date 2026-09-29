'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { TechStackMarqueeSection } from '@/components/sections/TechStackMarqueeSection';
import { Services, ServiceItem } from '@/components/sections/Services';
import { Solutions } from '@/components/sections/Solutions';
import { BehindTheLensSection } from '@/components/sections/BehindTheLensSection';
import { CtaFaqFooterSection } from '@/components/sections/CtaFaqFooterSection';
import { Modals } from '@/components/ui/Modals';

export default function HomePage() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

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
        onExploreSolutions={() => {
          const el = document.getElementById('services');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        onTalkToTeam={scrollToContact}
      />

      {/* 3. Tech Stack Infinite Marquee Section */}
      <TechStackMarqueeSection />

      {/* 4. Software Development Section */}
      <Services onSelectService={(service) => setSelectedService(service)} />

      {/* 5. Connected Systems & Solutions Section (AI, ERP, CRM, Logistics, Cloud, Security) */}
      <Solutions />

      {/* 6. Technology Insights & Blog Section */}
      <BehindTheLensSection />

      {/* 7. CTA + FAQ + Footer Section */}
      <CtaFaqFooterSection />

      {/* Interactive Detail Modals */}
      <Modals
        activeService={selectedService}
        onCloseServiceModal={() => setSelectedService(null)}
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
