'use client';

import React from 'react';
import { HeroCardMarquee } from '@/components/ui/HeroCardMarquee';
import { ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onExploreSolutions?: () => void;
  onTalkToTeam?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreSolutions, onTalkToTeam }) => {
  const capabilities = [
    { num: '/01', label: 'SOFTWARE DEVELOPMENT', target: 'services' },
    { num: '/02', label: 'AI & AUTOMATION', target: 'services' },
    { num: '/03', label: 'CLOUD & DEVOPS', target: 'services' },
    { num: '/04', label: 'CYBERSECURITY', target: 'services' },
  ];

  const handleCapabilityClick = (targetId: string) => {
    const el = document.getElementById(targetId);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative h-[100dvh] max-h-[100dvh] min-h-[580px] w-full bg-navy-DEFAULT flex flex-col justify-between overflow-hidden pt-20 sm:pt-24 pb-4 select-none"
    >
      {/* 1. Unfiltered Clear ll.webp Background Image Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Crisp ll.webp Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/ll.webp')" }}
        />

        {/* Ambient Subtle Gold Glow */}
        <div className="absolute top-1/3 left-1/4 w-[750px] h-[550px] bg-gradient-to-r from-amber-500/15 via-gold-DEFAULT/20 to-orange-600/10 rounded-full blur-[140px]" />
      </div>

      {/* 2. Full-Bleed Architectural Grid Lines */}
      <div className="absolute inset-0 z-10 pointer-events-none max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-12 grid grid-cols-4 h-full">
        <div className="border-r border-white/[0.08] h-full" />
        <div className="border-r border-white/[0.08] h-full" />
        <div className="border-r border-white/[0.08] h-full" />
        <div className="h-full" />
      </div>

      {/* 3. Main Dynamic Viewport Container */}
      <div className="relative z-20 max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-12 w-full h-full flex flex-col justify-between overflow-hidden">
        
        {/* Middle Row: AI-Powered Solutions Intro Text & Capabilities List */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center min-h-0 overflow-hidden py-2 sm:py-4">
          
          {/* Left Column: AI-Powered Text + Capabilities List */}
          <div className="lg:col-span-8 flex flex-col space-y-4 sm:space-y-5">
            
            {/* AI & Digital Transformation Headline & Copy */}
            <div className="max-w-2xl space-y-2.5">
              <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold font-heading text-white tracking-tight leading-snug">
                Empowering businesses with intelligent <span className="text-gold-light">AI solutions</span> that simplify work and accelerate growth.
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed tracking-wide">
                We design and deploy custom artificial intelligence, intelligent RPA automation, and scalable cloud platforms—helping organizations streamline complex operations and make everyday work effortlessly efficient.
              </p>
            </div>

            {/* Capabilities List */}
            <div className="flex flex-col space-y-2.5 sm:space-y-3 pt-1">
              {capabilities.map((cap) => (
                <button
                  key={cap.num}
                  onClick={() => handleCapabilityClick(cap.target)}
                  className="group flex items-center text-left max-w-md text-xs sm:text-sm font-mono tracking-widest text-slate-300 hover:text-white transition-all duration-300"
                >
                  <span className="text-gold-light font-bold w-9 shrink-0 group-hover:text-gold-DEFAULT">
                    {cap.num}
                  </span>

                  <span className="w-10 sm:w-14 h-[1px] bg-white/20 group-hover:bg-gold-DEFAULT group-hover:w-16 transition-all duration-300 mr-3 shrink-0" />

                  <span className="font-semibold tracking-[0.16em] uppercase group-hover:translate-x-1 transition-transform">
                    {cap.label}
                  </span>

                  <ArrowUpRight className="w-3.5 h-3.5 ml-2 opacity-0 group-hover:opacity-100 text-gold-DEFAULT transition-all stroke-[2.5]" />
                </button>
              ))}
            </div>

          </div>

        </div>

        {/* Bottom Row: ANVITECH Headline + INDIA Pvt. Ltd. (Same Line/Font/Color) Left + Paragraph Right */}
        <div className="shrink-0 grid grid-cols-1 lg:grid-cols-12 gap-4 items-end pt-3 sm:pt-4 pb-2 border-t border-white/[0.08]">
          
          {/* Bottom Left: ANVITECH (Decreased by 10%) + INDIA Pvt. Ltd. on SAME LINE */}
          <div className="lg:col-span-7 flex flex-col justify-end">
            <h1 className="flex items-baseline flex-wrap gap-x-4 gap-y-1">
              <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[9rem] font-black tracking-tight leading-none text-white font-heading uppercase select-none drop-shadow-2xl">
                Anvitech
              </span>
              <span className="text-sm sm:text-lg md:text-xl lg:text-2xl font-black font-heading text-white tracking-widest uppercase select-none opacity-95">
                INDIA Pvt. Ltd.
              </span>
            </h1>
          </div>

          {/* Bottom Right: Paragraph text moved right under scrolling cards */}
          <div className="lg:col-span-5 flex flex-col justify-end text-left lg:text-right items-start lg:items-end pb-1">
            <p className="text-[11px] sm:text-xs lg:text-sm text-slate-300 font-sans leading-relaxed tracking-wide max-w-lg">
              We craft thoughtful <strong className="text-white font-bold">digital solutions</strong> and enterprise software platforms that help businesses <strong className="text-gold-light font-bold">stand out</strong>, build trust, and grow with <strong className="text-white font-bold">confidence</strong>.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};