'use client';

import React from 'react';
import { Users, Sparkles, Send } from 'lucide-react';

interface CareersProps {
  onOpenCareersModal?: () => void;
}

export const Careers: React.FC<CareersProps> = ({ onOpenCareersModal }) => {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy-DEFAULT rounded-3xl p-8 sm:p-14 lg:p-16 text-white relative overflow-hidden shadow-2xl">
          
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-DEFAULT/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-3xl relative z-10">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-subtle border border-gold-DEFAULT/30 text-gold-light text-xs font-mono font-semibold uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5 text-gold-DEFAULT" />
              <span>Careers Opening Soon</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight mb-6">
              Build The Future With Us
            </h2>

            <p className="text-slate-300 text-base sm:text-lg font-sans leading-relaxed mb-8">
              We&apos;re building a team of engineers, designers, strategists and innovators who believe technology can create meaningful change. Even when specific roles are not posted, we are always eager to connect with top-tier technical talent.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenCareersModal || (() => {
                  const contact = document.getElementById('contact');
                  contact?.scrollIntoView({ behavior: 'smooth' });
                })}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gold-gradient text-navy-DEFAULT font-bold text-sm rounded-md shadow-gold-glow hover:brightness-110 transition-all"
              >
                <Users className="w-4 h-4" />
                <span>Join Our Talent Network</span>
              </button>

              <span className="text-xs text-slate-400 font-mono self-center">
                REMOTE & HYBRID POSITIONS // INDIA
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
