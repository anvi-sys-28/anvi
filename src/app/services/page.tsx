'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { CtaFaqFooterSection } from '@/components/sections/CtaFaqFooterSection';
import { servicesList } from '@/lib/servicesData';
import { useTheme } from '@/context/ThemeContext';
import { ArrowRight, CheckCircle, Sparkles, Layers, ShieldCheck, Cpu, Code, Cloud } from 'lucide-react';

export default function ServicesPage() {
  const serviceIcons = [Code, Layers, Cpu, Cloud, ShieldCheck, Sparkles];
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const scrollToContact = () => {
    const contactEl = document.getElementById('contact');
    contactEl?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className={`min-h-screen transition-colors duration-300 font-sans ${
      isDark ? 'bg-black text-white selection:bg-gold-DEFAULT selection:text-black' : 'bg-[#fcfaf7] text-slate-900 selection:bg-[#FFDEAD] selection:text-slate-900'
    }`}>
      {/* 1. Header Navigation */}
      <Navbar onOpenContactModal={scrollToContact} />

      {/* 2. Hero Header Banner */}
      <section className={`pt-32 pb-20 px-4 sm:px-8 lg:px-12 border-b transition-colors duration-300 ${
        isDark ? 'bg-neutral-900 text-white border-neutral-800' : 'bg-[#FFDEAD] text-[#1a1008] border-[#f3cb98]'
      }`}>
        <div className="max-w-6xl mx-auto text-center">
          <span className={`block text-xs font-mono font-bold uppercase tracking-widest mb-3 ${
            isDark ? 'text-amber-400' : 'text-[#8a4b08]'
          }`}>
            CORPORATE SERVICE PORTFOLIO
          </span>
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight mb-6 ${
            isDark ? 'text-white' : 'text-[#1a1008]'
          }`}>
            Software & IT Solutions Portfolio
          </h1>
          <p className={`text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-medium ${
            isDark ? 'text-slate-300' : 'text-[#4a3012]'
          }`}>
            Full-stack software engineering, custom ERP platforms, AI solutions, cloud infrastructure, and 24/7 AMC software maintenance for growing enterprises.
          </p>
        </div>
      </section>

      {/* 3. Services Grid */}
      <section className="py-16 px-4 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, idx) => {
              const IconComp = serviceIcons[idx % serviceIcons.length];
              return (
                <div
                  key={service.slug}
                  className={`rounded-2xl p-8 transition-all duration-300 flex flex-col justify-between group border ${
                    isDark
                      ? 'bg-neutral-900 border-neutral-800 text-white shadow-md hover:border-amber-500/50 hover:shadow-2xl'
                      : 'bg-white border-slate-200/90 text-slate-900 shadow-sm hover:shadow-xl hover:border-[#e88923]/50'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                        isDark
                          ? 'bg-neutral-800 text-amber-400 group-hover:bg-amber-500 group-hover:text-black'
                          : 'bg-orange-50 text-[#e88923] group-hover:bg-[#e88923] group-hover:text-white'
                      }`}>
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className={`text-xs font-mono font-bold uppercase tracking-wider ${
                        isDark ? 'text-amber-400' : 'text-[#8a4b08]'
                      }`}>
                        {service.category}
                      </span>
                    </div>

                    <h2 className={`text-xl font-bold font-heading mb-3 transition-colors ${
                      isDark ? 'text-white group-hover:text-amber-400' : 'text-slate-900 group-hover:text-[#e88923]'
                    }`}>
                      {service.title}
                    </h2>
                    <p className={`text-xs sm:text-sm leading-relaxed mb-6 font-sans ${
                      isDark ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      {service.shortDesc}
                    </p>

                    <div className={`space-y-2 mb-6 pt-4 border-t ${
                      isDark ? 'border-neutral-800' : 'border-slate-100'
                    }`}>
                      {service.capabilities.slice(0, 3).map((cap, i) => (
                        <div key={i} className={`flex items-center gap-2 text-xs font-medium ${
                          isDark ? 'text-slate-300' : 'text-slate-700'
                        }`}>
                          <CheckCircle className={`w-3.5 h-3.5 shrink-0 ${
                            isDark ? 'text-amber-400' : 'text-[#d67311]'
                          }`} />
                          <span className="line-clamp-1">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/services/${service.slug}`}
                    className={`w-full py-3 font-bold text-xs rounded-xl shadow transition-colors flex items-center justify-center gap-2 ${
                      isDark
                        ? 'bg-amber-500 hover:bg-amber-400 text-black'
                        : 'bg-[#e88923] hover:bg-[#d47817] text-white'
                    }`}
                  >
                    <span>View Full Service Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Footer CTA & FAQ */}
      <CtaFaqFooterSection />
    </main>
  );
}
