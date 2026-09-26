'use client';

import React from 'react';
import { ArrowRight, Compass, Code2, Server, Lightbulb, Check } from 'lucide-react';

interface AboutProps {
  onDiscoverAnvitech?: () => void;
}

export const About: React.FC<AboutProps> = ({ onDiscoverAnvitech }) => {
  const pillars = [
    {
      num: '01',
      title: 'Business Understanding',
      desc: 'We analyze domain requirements, workflows, and objectives before touching a single line of code.',
      icon: Compass,
    },
    {
      num: '02',
      title: 'Technology Engineering',
      desc: 'High-precision software development utilizing modern, resilient, and enterprise-grade tech stacks.',
      icon: Code2,
    },
    {
      num: '03',
      title: 'Scalable Architecture',
      desc: 'Systems constructed for zero-downtime scalability, modular expansion, and enterprise security.',
      icon: Server,
    },
    {
      num: '04',
      title: 'Continuous Innovation',
      desc: 'Integrating AI, automation, and predictive data capabilities into long-term strategic roadmaps.',
      icon: Lightbulb,
    },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Visual Editorial Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden bg-navy-DEFAULT border border-navy-border p-8 sm:p-12 shadow-2xl group">
              
              {/* Background Abstract Tech Lines */}
              <div className="absolute inset-0 bg-[radial-gradient(#C89B3C_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />

              <div className="relative z-10 flex flex-col justify-between min-h-[420px]">
                {/* Top Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-gold-gradient p-0.5 shadow-gold-glow">
                    <div className="w-full h-full bg-navy-DEFAULT rounded-[10px] flex items-center justify-center text-gold-light font-bold">
                      AN
                    </div>
                  </div>
                  <span className="text-xs font-mono text-gold-light tracking-widest uppercase bg-navy-light px-3 py-1 rounded-full border border-gold-DEFAULT/20">
                    ENTERPRISE ARCHITECTURE
                  </span>
                </div>

                {/* Center Editorial Card Graphic */}
                <div className="my-8 bg-navy-light/80 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-navy-card">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-rose-400" />
                    <span className="text-xs text-slate-400 font-mono ml-auto">EST. 2026</span>
                  </div>
                  <h4 className="text-lg font-bold text-white font-heading mb-2">
                    Engineered For High Impact
                  </h4>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    Connecting enterprise vision with seamless software craftsmanship. Reliable, secure, and future-proof.
                  </p>

                  <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <div className="text-slate-400 font-mono text-[10px]">Uptime SLA</div>
                      <div className="text-gold-light font-bold text-sm">99.99%</div>
                    </div>
                    <div>
                      <div className="text-slate-400 font-mono text-[10px]">Code Standards</div>
                      <div className="text-gold-light font-bold text-sm">ISO / OWASP</div>
                    </div>
                  </div>
                </div>

                {/* Bottom Quote Pill */}
                <div className="text-slate-400 text-xs font-mono flex items-center gap-2">
                  <Check className="w-4 h-4 text-gold-DEFAULT" />
                  <span>ISO-COMPLIANT DEVELOPMENT LIFECYCLE</span>
                </div>

              </div>
            </div>

            {/* Decorative Gold Accent Frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-gold-DEFAULT/20 -z-10 pointer-events-none hidden sm:block" />
          </div>

          {/* Right Editorial Text Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <div className="text-xs font-bold tracking-[0.25em] text-gold-dark uppercase mb-3 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-gold-DEFAULT" />
              <span>ABOUT ANVITECH</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-DEFAULT font-heading tracking-tight mb-6">
              Technology Built Around Your Business.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans mb-8">
              At <strong className="text-navy-DEFAULT">ANVITECH INDIA PRIVATE LIMITED</strong>, we believe that world-class technology starts with understanding real-world operational challenges. Rather than pushing pre-packaged templates, we engineer bespoke digital ecosystems tailored precisely around organizational goals.
            </p>

            {/* 4 Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {pillars.map((pillar) => {
                const IconComp = pillar.icon;
                return (
                  <div key={pillar.num} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-navy-DEFAULT text-gold-light flex items-center justify-center shrink-0 font-mono text-xs font-bold shadow-sm">
                      {pillar.num}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-navy-DEFAULT font-heading mb-1 flex items-center gap-2">
                        <span>{pillar.title}</span>
                      </h3>
                      <p className="text-xs text-slate-500 font-sans leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Discover CTA */}
            <div>
              <button
                onClick={onDiscoverAnvitech || (() => {
                  const el = document.getElementById('services');
                  el?.scrollIntoView({ behavior: 'smooth' });
                })}
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 text-sm font-bold text-white bg-navy-DEFAULT hover:bg-navy-light rounded-md shadow-navy-card transition-all duration-200 group"
              >
                <span>Discover ANVITECH</span>
                <ArrowRight className="w-4 h-4 text-gold-DEFAULT group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
