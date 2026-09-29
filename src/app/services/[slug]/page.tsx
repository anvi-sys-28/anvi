'use client';

import React from 'react';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { CtaFaqFooterSection } from '@/components/sections/CtaFaqFooterSection';
import { servicesList } from '@/lib/servicesData';
import {
  ChevronLeft,
  CheckCircle,
  PhoneCall,
  Clock,
  Globe,
  ShieldCheck,
  Headphones,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const service = servicesList.find((s) => s.slug === slug);

  if (!service) {
    return (
      <main className="min-h-screen bg-slate-50 flex flex-col justify-between">
        <Navbar />
        <div className="max-w-md mx-auto py-32 text-center px-4">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Service Not Found</h1>
          <p className="text-slate-600 mb-6">The requested service portfolio could not be found.</p>
          <Link
            href="/services"
            className="px-6 py-3 bg-orange-600 text-white font-bold rounded-lg shadow"
          >
            Back to Services
          </Link>
        </div>
        <CtaFaqFooterSection />
      </main>
    );
  }

  const relatedServices = servicesList.filter((s) => s.slug !== service.slug).slice(0, 3);

  const scrollToContact = () => {
    const contactEl = document.getElementById('contact');
    contactEl?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-orange-500 selection:text-white">
      {/* 1. Header Navigation */}
      <Navbar onOpenContactModal={scrollToContact} />

      {/* 2. Top Dark Blue Banner Header matching attached screenshot */}
      <section className="bg-[#0b2b4c] text-white pt-28 pb-16 px-4 sm:px-8 lg:px-12 border-b border-navy-border/60">
        <div className="max-w-6xl mx-auto">
          {/* Back to Services Link */}
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white mb-6 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </Link>

          {/* Icon + Pill Badge + Title */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 text-orange-400 flex items-center justify-center shrink-0 border border-white/15">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="inline-block bg-white/15 text-slate-200 text-xs font-semibold px-3 py-1 rounded-full mb-3 border border-white/10">
                {service.badge}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight mb-3">
                {service.title}
              </h1>
              <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
                {service.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Content Grid (Left Detailed Content + Right Pricing/Action Card matching screenshot UI) */}
      <section className="py-12 px-4 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: What is [Service]? + Capabilities & Deliverables */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Card 1: What is [Service]? */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/90">
              <h2 className="text-2xl font-bold text-slate-900 font-heading mb-4 border-b pb-3 border-slate-100">
                What is {service.title}?
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-6 font-sans">
                {service.fullDesc}
              </p>

              {/* Eligibility & Use Cases */}
              <div className="mt-6 pt-6 border-t border-slate-100">
                <h3 className="text-base font-bold text-slate-900 mb-4 font-heading">
                  Ideal Business Profile & Eligibility Criteria
                </h3>
                <ul className="space-y-3">
                  {service.eligibility.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                      <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 2: Core Capabilities & Technical Deliverables */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/90">
              <h2 className="text-2xl font-bold text-slate-900 font-heading mb-6 border-b pb-3 border-slate-100">
                Service Capabilities & Deliverables
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600 mb-3">
                    CORE CAPABILITIES
                  </h3>
                  <ul className="space-y-2.5">
                    {service.capabilities.map((cap, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                        <CheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-navy-DEFAULT mb-3">
                    TECHNICAL DELIVERABLES
                  </h3>
                  <ul className="space-y-2.5">
                    {service.deliverables.map((del, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Sticky Pricing & Action Widget (Matching exact UI in uploaded screenshot with Orange & White) */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            
            {/* Top Action Card */}
            <div className="bg-white rounded-2xl p-6 shadow-md border-2 border-[#0b2b4c]/80 space-y-6">
              <div>
                <span className="text-xs font-semibold text-slate-500 block mb-1">
                  Starting at
                </span>
                <div className="text-3xl font-extrabold text-slate-900 font-heading tracking-tight">
                  {service.startingPrice}
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  {service.priceNote}
                </div>
              </div>

              {/* Action Buttons: Get Started Today (Orange) + Free Consultation */}
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={scrollToContact}
                  className="w-full py-3.5 px-4 bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-orange-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={scrollToContact}
                  className="w-full py-3 px-4 bg-white hover:bg-slate-50 text-slate-900 font-semibold text-sm rounded-xl border border-slate-300 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-orange-600" />
                  <span>Free Consultation</span>
                </button>
              </div>

              {/* Feature Bullet List matching screenshot */}
              <div className="pt-4 border-t border-slate-100 space-y-3 text-xs text-slate-600">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>3-7 working days blueprint</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Globe className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>100% online cloud architecture</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>Dedicated Tech Architect</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Headphones className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>Free follow-up support</span>
                </div>
              </div>
            </div>

            {/* Related Services List Card matching screenshot bottom right */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/90">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-4">
                RELATED SERVICES
              </h3>
              <div className="space-y-3">
                {relatedServices.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/services/${rel.slug}`}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-orange-50 border border-transparent hover:border-orange-200 transition-all group"
                  >
                    <span className="text-xs font-bold text-slate-800 group-hover:text-orange-600 line-clamp-1">
                      {rel.title}
                    </span>
                    <ChevronLeft className="w-4 h-4 text-slate-400 group-hover:text-orange-600 rotate-180 shrink-0 ml-2" />
                  </Link>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Footer CTA & FAQ */}
      <CtaFaqFooterSection />
    </main>
  );
}
