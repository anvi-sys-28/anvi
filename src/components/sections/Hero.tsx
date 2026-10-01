'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import TechText from './TechText';

interface HeroProps {
  onExploreSolutions?: () => void;
  onTalkToTeam?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreSolutions, onTalkToTeam }) => {
  const capabilities = [
    { num: '/01', label: 'SOFTWARE DEVELOPMENT', target: 'contact' },
    { num: '/02', label: 'AI & AUTOMATION', target: 'contact' },
    { num: '/03', label: 'ERP, CRM & LOGISTICS', target: 'contact' },
    { num: '/04', label: 'CLOUD & DEVOPS', target: 'contact' },
  ];

  const handleCapabilityClick = (targetId: string) => {
    const el = document.getElementById(targetId);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  // Easing curve for luxury portfolio smooth motion
  const easeCurve = [0.22, 1, 0.36, 1];

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
            
            {/* AI & Digital Transformation Animated Headline & Copy */}
            <div className="max-w-2xl space-y-2.5">
              <motion.h2
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.15, ease: easeCurve }}
                className="text-lg sm:text-2xl lg:text-3xl font-bold font-heading text-white tracking-tight leading-snug"
              >
                Building technology that moves <span className="text-gold-light">businesses forward</span>.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: easeCurve }}
                className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed tracking-wide"
              >
                From custom software and enterprise platforms to AI-powered solutions, automation, ERP, CRM and logistics systems, ANVITECH INDIA builds and manages technology around the way your business works.
              </motion.p>
            </div>

            {/* Animated Capabilities List with Staggered Entrance */}
            <div className="flex flex-col space-y-2.5 sm:space-y-3 pt-1">
              {capabilities.map((cap, idx) => (
                <motion.button
                  key={cap.num}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.75, delay: 0.45 + idx * 0.1, ease: easeCurve }}
                  onClick={() => handleCapabilityClick(cap.target)}
                  className="group flex items-center text-left max-w-md text-xs sm:text-sm font-mono tracking-widest text-slate-300 hover:text-white transition-all duration-300 cursor-pointer"
                >
                  <span className="text-gold-light font-bold w-9 shrink-0 group-hover:text-gold-DEFAULT">
                    {cap.num}
                  </span>

                  <span className="w-10 sm:w-14 h-[1px] bg-white/20 group-hover:bg-gold-DEFAULT group-hover:w-16 transition-all duration-300 mr-3 shrink-0" />

                  <span className="font-semibold tracking-[0.16em] uppercase group-hover:translate-x-1 transition-transform">
                    {cap.label}
                  </span>

                  <ArrowUpRight className="w-3.5 h-3.5 ml-2 opacity-0 group-hover:opacity-100 text-gold-DEFAULT transition-all stroke-[2.5]" />
                </motion.button>
              ))}
            </div>

          </div>

        </div>

        {/* Bottom Row: ANVITECH Headline + INDIA Pvt. Ltd. (Same Line/Font/Color) Left + Paragraph Right */}
        <div className="shrink-0 grid grid-cols-1 lg:grid-cols-12 gap-4 items-end pt-3 sm:pt-4 pb-2 border-t border-white/[0.08]">
          
          {/* Bottom Left: ANVITECH (TechText) + INDIA Pvt. Ltd. */}
          <div className="lg:col-span-7 flex flex-col justify-end pb-1">
            <div className="flex flex-col items-start w-full">
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.4, ease: easeCurve }}
                className="w-full h-[55px] xs:h-[75px] sm:h-[100px] md:h-[125px] lg:h-[145px] xl:h-[165px] 2xl:h-[190px] relative"
              >
                <TechText
                  text="ANVITECH"
                  fontFamily='"Plus Jakarta Sans", sans-serif'
                  fontWeight={800}
                  fontSize={240}
                  letterSpacing={-0.04}
                  color="#ffffff"
                  accentColor="#D9A441"
                  reveal="letter"
                  reach={180}
                  softness={0.7}
                  dashLength={4}
                  dashGap={2}
                  lineStyle="dashed"
                  strokeWidth={1.5}
                  specks={8}
                  selection={true}
                  labels={true}
                  draggable={false}
                  sweep={true}
                  speed={0.6}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.85, delay: 0.65, ease: easeCurve }}
                className="text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl font-black font-heading text-white tracking-widest uppercase select-none opacity-95 inline-block pt-1 sm:pt-2 pl-2.5 sm:pl-3 md:pl-3.5 lg:pl-4 xl:pl-4.5"
              >
                INDIA Pvt. Ltd.
              </motion.div>
            </div>
          </div>

          {/* Bottom Right: Paragraph text with Smooth Fade-Up */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.75, ease: easeCurve }}
            className="lg:col-span-5 flex flex-col justify-end text-left lg:text-right items-start lg:items-end pb-1"
          >
            <p className="text-[11px] sm:text-xs lg:text-sm text-slate-300 font-sans leading-relaxed tracking-wide max-w-lg">
              ANVITECH INDIA builds and manages technology that helps businesses <strong className="text-white font-bold">operate, automate and grow</strong>. From requirements to production, we handle the <strong className="text-gold-light font-bold">complete technology lifecycle</strong>.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};