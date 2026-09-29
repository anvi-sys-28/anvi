'use client';

import React from 'react';
import { Search, Compass, Palette, Code, Rocket, RefreshCw } from 'lucide-react';

export const processSteps = [
  {
    num: '01',
    title: 'Discover',
    desc: 'Understand the business, users, workflows, security requirements and ROI objectives.',
    icon: Search,
  },
  {
    num: '02',
    title: 'Plan',
    desc: 'Define architecture, technology stack selection, features roadmap and development milestones.',
    icon: Compass,
  },
  {
    num: '03',
    title: 'Design',
    desc: 'Create intuitive user experiences, design systems, and software schemas around business processes.',
    icon: Palette,
  },
  {
    num: '04',
    title: 'Develop',
    desc: 'Build scalable, reliable and high-performance software using modern, tested technologies.',
    icon: Code,
  },
  {
    num: '05',
    title: 'Integrate & Deploy',
    desc: 'Connect APIs, databases, AI systems, and move the application into production on cloud infrastructure.',
    icon: Rocket,
  },
  {
    num: '06',
    title: 'Manage',
    desc: 'Maintain, monitor, secure, optimize performance, and continuously improve software after launch.',
    icon: RefreshCw,
  },
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 lg:py-32 bg-white border-b border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold tracking-[0.25em] text-gold-dark uppercase mb-3 flex items-center gap-2">
            <span className="w-8 h-[2px] bg-gold-DEFAULT" />
            <span>END-TO-END DEVELOPMENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-DEFAULT font-heading tracking-tight mb-6">
            From Idea to Production
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-sans">
            From business requirements to production-ready software, we handle the complete technology lifecycle.
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
