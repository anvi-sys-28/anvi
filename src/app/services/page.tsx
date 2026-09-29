'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { CtaFaqFooterSection } from '@/components/sections/CtaFaqFooterSection';
import { servicesList } from '@/lib/servicesData';
import { ArrowRight, CheckCircle, Sparkles, Layers, ShieldCheck, Cpu, Code, Cloud } from 'lucide-react';

export default function ServicesPage() {
  const serviceIcons = [Code, Layers, Cpu, Cloud, ShieldCheck, Sparkles];

  const scrollToContact = () => {
    const contactEl = document.getElementById('contact');
    contactEl?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-[#fcfaf7] text-slate-900 selection:bg-[#FFDEAD] selection:text-slate-900">
      {/* 1. Header Navigation */}
      <Navbar onOpenContactModal={scrollToContact} />

      {/* 2. Hero Header Banner (Navajo White #FFDEAD) */}
      <section className="bg-[#FFDEAD] text-[#1a1008] pt-32 pb-20 px-4 sm:px-8 lg:px-12 border-b border-[#f3cb98]">
        <div className="max-w-6xl mx-auto text-center">
          <span className="block text-xs font-mono font-bold text-[#8a4b08] uppercase tracking-widest mb-3">
            CORPORATE SERVICE PORTFOLIO
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight mb-6 text-[#1a1008]">
            Software & IT Solutions Portfolio
          </h1>
          <p className="text-[#4a3012] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-medium">
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
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-slate-200/90 hover:border-[#e88923]/50 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#e88923] group-hover:bg-[#e88923] group-hover:text-white flex items-center justify-center transition-colors">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#8a4b08] uppercase tracking-wider">
                        {service.category}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-slate-900 font-heading mb-3 group-hover:text-[#e88923] transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6 font-sans">
                      {service.shortDesc}
                    </p>

                    <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                      {service.capabilities.slice(0, 3).map((cap, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle className="w-3.5 h-3.5 text-[#d67311] shrink-0" />
                          <span className="line-clamp-1">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/services/${service.slug}`}
                    className="w-full py-3 bg-[#e88923] hover:bg-[#d47817] text-white font-bold text-xs rounded-xl shadow transition-colors flex items-center justify-center gap-2"
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
