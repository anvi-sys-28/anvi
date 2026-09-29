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
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-orange-500 selection:text-white">
      {/* 1. Header Navigation */}
      <Navbar onOpenContactModal={scrollToContact} />

      {/* 2. Hero Header Banner */}
      <section className="bg-[#0b2b4c] text-white pt-32 pb-20 px-4 sm:px-8 lg:px-12 border-b border-navy-border/60">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-block bg-white/15 text-orange-400 text-xs font-mono font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 border border-white/10">
            CORPORATE SERVICE PORTFOLIO
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight mb-6">
            Software & IT Services Portfolio
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
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
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-slate-200/90 hover:border-orange-500/50 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-navy-DEFAULT/5 text-navy-DEFAULT group-hover:bg-orange-500 group-hover:text-white flex items-center justify-center transition-colors">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                        {service.startingPrice}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-slate-900 font-heading mb-3 group-hover:text-orange-600 transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6 font-sans">
                      {service.shortDesc}
                    </p>

                    <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                      {service.capabilities.slice(0, 3).map((cap, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                          <span className="line-clamp-1">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/services/${service.slug}`}
                    className="w-full py-3 bg-navy-DEFAULT hover:bg-orange-600 text-white font-bold text-xs rounded-xl shadow transition-colors flex items-center justify-center gap-2"
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
