'use client';

import React from 'react';
import { Cpu, Bot, Cloud, Shield, Database, Network, ArrowRight, Sparkles } from 'lucide-react';

interface InnovationProps {
  onExploreInnovation?: () => void;
}

export const Innovation: React.FC<InnovationProps> = ({ onExploreInnovation }) => {
  const innovationNodes = [
    { label: 'Generative AI', icon: Bot, color: 'text-gold-light' },
    { label: 'Autonomous Workflows', icon: Cpu, color: 'text-emerald-400' },
    { label: 'Hybrid Multi-Cloud', icon: Cloud, color: 'text-sky-400' },
    { label: 'Zero Trust Cyber', icon: Shield, color: 'text-amber-400' },
    { label: 'Real-Time Event Data', icon: Database, color: 'text-purple-400' },
    { label: 'Connected Micro-Nodes', icon: Network, color: 'text-rose-400' },
  ];

  return (
    <section className="py-24 lg:py-32 bg-navy-DEFAULT text-white relative overflow-hidden">
      {/* Background Radial Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold-DEFAULT/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-subtle border border-gold-DEFAULT/30 text-gold-light text-xs font-mono font-semibold uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5 text-gold-DEFAULT animate-pulse" />
              <span>FUTURE-READY ARCHITECTURE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white font-heading tracking-tight mb-6">
              Building What <br />
              <span className="text-transparent bg-clip-text bg-gold-gradient">
                Comes Next.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed mb-8">
              We combine emerging technologies with practical engineering to create solutions designed for the businesses of tomorrow. From autonomous LLM agents to quantum-resilient encryption frameworks, ANVITECH keeps your enterprise ahead of technical obsolescence.
            </p>

            <button
              onClick={onExploreInnovation || (() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              })}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm sm:text-base font-bold text-navy-DEFAULT bg-gold-gradient rounded-md shadow-gold-glow hover:brightness-110 transition-all group"
            >
              <span>Explore Innovation</span>
              <ArrowRight className="w-5 h-5 text-navy-DEFAULT group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Interactive Animated Visual Hub */}
          <div className="lg:col-span-6">
            <div className="relative bg-navy-light/40 backdrop-blur-xl border border-navy-border/80 rounded-2xl p-8 sm:p-10 shadow-2xl">
              
              <div className="text-xs font-mono text-slate-400 mb-8 flex items-center justify-between border-b border-navy-border/60 pb-4">
                <span>INNOVATION MATRIX</span>
                <span className="text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  R&D LABS ACTIVE
                </span>
              </div>

              {/* Grid of Connected Nodes */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {innovationNodes.map((node, i) => {
                  const IconComp = node.icon;
                  return (
                    <div
                      key={i}
                      className="bg-navy-DEFAULT p-5 rounded-xl border border-white/5 hover:border-gold-DEFAULT/40 transition-all duration-300 flex flex-col items-center text-center group hover:scale-105"
                    >
                      <div className={`w-12 h-12 rounded-lg bg-navy-light flex items-center justify-center mb-3 ${node.color}`}>
                        <IconComp className="w-6 h-6 transition-transform group-hover:rotate-6" />
                      </div>
                      <span className="text-xs font-bold text-slate-200 group-hover:text-gold-light font-heading">
                        {node.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-navy-border/60 text-center">
                <span className="text-xs text-slate-400 font-mono">
                  ANVITECH R&D ARCHITECTURE // ENTERPRISE READINESS RATING: 100%
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
