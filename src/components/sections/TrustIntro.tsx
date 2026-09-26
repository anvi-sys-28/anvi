'use client';

import React from 'react';
import { Layers, CheckCircle2, Building2, Clock } from 'lucide-react';

export const TrustIntro: React.FC = () => {
  const metrics = [
    {
      value: '10+',
      label: 'Technology Domains',
      description: 'Cloud, AI, Mobile, Cybersecurity & Enterprise Systems',
      icon: Layers,
    },
    {
      value: '25+',
      label: 'Solutions Delivered',
      description: 'Scalable platforms & custom digital applications',
      icon: CheckCircle2,
    },
    {
      value: '10+',
      label: 'Industry Segments',
      description: 'Finance, Healthcare, Retail, Logistics & Public Sector',
      icon: Building2,
    },
    {
      value: '24/7',
      label: 'Technology Support',
      description: 'Continuous monitoring & enterprise infrastructure SLA',
      icon: Clock,
    },
  ];

  return (
    <section id="trust-intro" className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold tracking-[0.25em] text-gold-dark uppercase mb-3 flex items-center gap-2">
            <span className="w-8 h-[2px] bg-gold-DEFAULT" />
            <span>WHO WE ARE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-DEFAULT font-heading tracking-tight mb-6">
            Building Technology With Purpose.
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-sans">
            <strong className="text-navy-DEFAULT font-semibold">ANVITECH INDIA PRIVATE LIMITED</strong> is a technology-driven company focused on creating reliable, scalable and intelligent digital solutions for modern businesses.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {metrics.map((metric, idx) => {
            const IconComponent = metric.icon;
            return (
              <div
                key={idx}
                className="group relative bg-brand-bg rounded-xl p-8 border border-slate-200/80 hover:border-gold-DEFAULT/50 transition-all duration-300 hover:shadow-premium hover:-translate-y-1"
              >
                {/* Accent Top Border Bar on Hover */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gold-gradient opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl sm:text-5xl font-extrabold text-navy-DEFAULT font-heading tracking-tight">
                    {metric.value}
                  </span>
                  <div className="w-12 h-12 rounded-lg bg-navy-DEFAULT/5 flex items-center justify-center text-gold-dark group-hover:bg-navy-DEFAULT group-hover:text-gold-light transition-colors duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-navy-DEFAULT font-heading mb-2">
                  {metric.label}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-sans leading-relaxed">
                  {metric.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
