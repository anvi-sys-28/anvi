'use client';

import React from 'react';
import { Search, Compass, Palette, Code, Rocket, RefreshCw } from 'lucide-react';

export const processSteps = [
  {
    num: '01',
    title: 'Discover',
    desc: 'Deep-dive into business workflows, pain points, security constraints, and ROI objectives.',
    icon: Search,
  },
  {
    num: '02',
    title: 'Strategize',
    desc: 'Formulate system architecture, tech stack selection, milestone timelines, and risk mitigation plans.',
    icon: Compass,
  },
  {
    num: '03',
    title: 'Design',
    desc: 'Craft intuitive user interfaces, design systems, and data schemas aligned with end-user goals.',
    icon: Palette,
  },
  {
    num: '04',
    title: 'Engineer',
    desc: 'Develop clean, modular, and high-performance software with continuous integration and security audits.',
    icon: Code,
  },
  {
    num: '05',
    title: 'Deploy',
    desc: 'Execute zero-downtime production deployment, cloud environment provisioning, and automated monitoring.',
    icon: Rocket,
  },
  {
    num: '06',
    title: 'Evolve',
    desc: 'Gather operational metrics, optimize performance, roll out new features, and scale capabilities.',
    icon: RefreshCw,
  },
];

export const Process: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-white border-b border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold tracking-[0.25em] text-gold-dark uppercase mb-3 flex items-center gap-2">
            <span className="w-8 h-[2px] bg-gold-DEFAULT" />
            <span>METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-DEFAULT font-heading tracking-tight mb-6">
            Our Engineering Process
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-sans">
            A structured, transparent 6-stage lifecycle engineered for predictability, rapid delivery, and enterprise compliance.
          </p>
        </div>

        {/* Process Timeline Grid */}
        <div className="relative">
          {/* Horizontal Connecting Gold Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gold-DEFAULT/30 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {processSteps.map((step) => {
              const IconComp = step.icon;
              return (
                <div
                  key={step.num}
                  className="bg-brand-bg rounded-xl p-6 border border-slate-200/80 hover:border-gold-DEFAULT/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    {/* Header Step Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="w-9 h-9 rounded-full bg-navy-DEFAULT text-gold-light text-xs font-mono font-bold flex items-center justify-center shadow-md">
                        {step.num}
                      </span>
                      <div className="w-10 h-10 rounded-lg bg-navy-DEFAULT/5 text-navy-DEFAULT group-hover:bg-gold-gradient group-hover:text-navy-DEFAULT flex items-center justify-center transition-colors">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-navy-DEFAULT font-heading mb-2 group-hover:text-gold-dark transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-sans leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/60 text-[10px] font-mono text-slate-400">
                    STAGE {step.num} / 06
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
