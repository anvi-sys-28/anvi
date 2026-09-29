'use client';

import React from 'react';
import { Award, Target, Cpu, Handshake, CheckCircle } from 'lucide-react';

export const WhyAnvitech: React.FC = () => {
  const principles = [
    {
      num: '01',
      title: 'Software Maintenance',
      desc: 'Keep applications stable, compatible, and up to date with continuous dependency and system management as your business grows.',
      icon: Award,
    },
    {
      num: '02',
      title: 'Proactive Monitoring',
      desc: 'Identify operational bottlenecks, system health issues, and performance anomalies early before they affect business operations.',
      icon: Cpu,
    },
    {
      num: '03',
      title: 'Security Management',
      desc: 'Continuously audit and improve application, API, and cloud infrastructure security against emerging vulnerabilities and threats.',
      icon: Target,
    },
    {
      num: '04',
      title: 'Optimization & Scaling',
      desc: 'Improve system response times, database query performance, throughput, and cloud infrastructure efficiency continuously.',
      icon: Handshake,
    },
  ];

  return (
    <section id="management" className="py-24 lg:py-32 bg-navy-DEFAULT text-white relative overflow-hidden">
      
      {/* Background Subtle Monogram Line Art */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
        <svg width="600" height="600" viewBox="0 0 100 100" fill="none">
          <path d="M26 74 L48 24 L56 24 L38 74 Z" fill="#C89B3C" />
          <path d="M50 26 L74 68 L74 24 L82 24 L82 74 L74 74 L50 32 Z" fill="#FFFFFF" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold tracking-[0.25em] text-gold-light uppercase mb-3 flex items-center gap-2">
            <span className="w-8 h-[2px] bg-gold-DEFAULT" />
            <span>SOFTWARE LIFECYCLE MANAGEMENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight mb-6">
            We Build It. We Manage It. We Improve It.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-sans">
            Software doesn't stop at deployment. We provide ongoing maintenance, monitoring, improvements, integrations, security updates and technical support to keep your systems reliable as your business evolves.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {principles.map((pr) => {
            const IconComp = pr.icon;
            return (
              <div
                key={pr.num}
                className="bg-navy-light/60 backdrop-blur-md rounded-2xl p-8 sm:p-10 border border-navy-border/80 hover:border-gold-DEFAULT/50 transition-all duration-300 hover:shadow-gold-glow relative group"
              >
                {/* Thin Gold Top Line Accent */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gold-gradient opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-extrabold font-mono text-gold-light">
                    {pr.num}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-navy-DEFAULT text-gold-light border border-gold-DEFAULT/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white font-heading mb-3 group-hover:text-gold-light transition-colors">
                  {pr.title}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base font-sans leading-relaxed">
                  {pr.desc}
                </p>

                <div className="mt-6 pt-4 border-t border-navy-border/60 flex items-center gap-2 text-xs font-mono text-slate-400">
                  <CheckCircle className="w-4 h-4 text-gold-DEFAULT" />
                  <span>GUARANTEED QUALITY BENCHMARK</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
