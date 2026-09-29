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
  FileText,
  ChevronRight
} from 'lucide-react';

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  // Match by exact slug or decodeURIComponent fallback
  const service = servicesList.find((s) => s.slug === slug || encodeURIComponent(s.title) === slug || s.slug === slug?.toLowerCase());

  if (!service) {
    return (
      <main className="min-h-screen bg-slate-50 flex flex-col justify-between">
        <Navbar />
        <div className="max-w-md mx-auto py-32 text-center px-4">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Service Not Found</h1>
          <p className="text-slate-600 mb-6">The requested service portfolio could not be found.</p>
          <Link
            href="/services"
            className="px-6 py-3 bg-[#e88923] text-white font-bold rounded-lg shadow"
          >
            Back to Services
          </Link>
        </div>
        <CtaFaqFooterSection />
      </main>
    );
  }

  const relatedServices = servicesList.filter((s) => s.slug !== service.slug).slice(0, 4);

  const scrollToContact = () => {
    const contactEl = document.getElementById('contact');
    contactEl?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-[#fcfaf7] text-slate-900 selection:bg-[#FFDEAD] selection:text-slate-900 font-sans">
      {/* 1. Header Navigation */}
      <Navbar onOpenContactModal={scrollToContact} />

      {/* 2. Top Banner Header (Color code #FFDEAD - Navajo White Light Orange, Boxes & Icons Removed) */}
      <section className="bg-[#FFDEAD] text-[#1a1008] pt-28 pb-16 px-4 sm:px-8 lg:px-12 border-b border-[#f3cb98]">
        <div className="max-w-6xl mx-auto">
          {/* Back to Services Link (No pill box container) */}
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5c3a10] hover:text-[#1a1008] mb-5 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </Link>

          {/* Clean Category Badge & Title (No icon boxes or pill containers) */}
          <div>
            <span className="block text-xs font-mono font-bold text-[#8a4b08] uppercase tracking-wider mb-2">
              {service.badge}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight mb-3 text-[#1a1008]">
              {service.title}
            </h1>
            <p className="text-[#4a3012] text-base sm:text-lg max-w-3xl leading-relaxed font-medium">
              {service.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Main Content Grid */}
      <section className="py-12 px-4 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Description + Eligibility + Required Documents Table */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Card 1: What is [Service]? */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/90">
              <h2 className="text-2xl font-bold text-slate-900 font-heading mb-4 border-b pb-3 border-slate-100">
                What is {service.title}?
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-4 font-sans">
                {service.fullDesc}
              </p>
              <p className="text-slate-600 text-sm leading-relaxed font-sans">
                Our technology framework ensures rapid blueprinting, end-to-end code transparency, role-based security governance, and seamless continuous deployment to match enterprise demands.
              </p>
            </div>

            {/* Card 2: Eligibility Criteria */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/90">
              <h3 className="text-xl font-bold text-slate-900 mb-4 font-heading border-b pb-3 border-slate-100">
                Eligibility Criteria & Ideal Business Profile
              </h3>
              <ul className="space-y-3.5">
                {service.eligibility.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle className="w-5 h-5 text-[#d67311] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 3: List of Required Documents & Deliverables Table */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/90">
              <h3 className="text-xl font-bold text-slate-900 mb-4 font-heading flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#8a4b08]" />
                <span>List of Required Documents & Key Deliverables</span>
              </h3>
              
              <div className="overflow-x-auto rounded-xl border border-slate-200 mt-4">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#FFDEAD] text-[#1a1008] text-xs font-mono font-bold uppercase tracking-wider border-b border-[#f3cb98]">
                      <th className="py-3.5 px-5 w-1/3">CATEGORY</th>
                      <th className="py-3.5 px-5">REQUIRED DETAILS & DOCUMENTS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-xs sm:text-sm text-slate-700">
                    {(service.documentsTable || [
                      { category: 'Business Requirements', details: 'Functional Scope Document & Process Workflow Specs' },
                      { category: 'Technical Architecture', details: 'System Architecture Blueprint & Role Access Matrix' },
                      { category: 'Deployment Assets', details: 'Cloud Infrastructure Credentials & API Endpoint Documentation' },
                    ]).map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-[#fffcf7]' : 'bg-white'}>
                        <td className="py-3.5 px-5 font-bold text-slate-900">{row.category}</td>
                        <td className="py-3.5 px-5 leading-relaxed">{row.details}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          {/* Right Column: Sticky Action Card + Related Services Card */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            
            {/* Top Action Card */}
            <div className="bg-white rounded-2xl p-6 shadow-md border-2 border-[#e88923]/80 space-y-6">
              
              {/* Action Buttons: Get Started Today + Free Consultation */}
              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  onClick={scrollToContact}
                  className="w-full py-3.5 px-4 bg-[#e88923] hover:bg-[#d47817] text-white font-bold text-sm rounded-xl shadow-lg shadow-orange-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={scrollToContact}
                  className="w-full py-3 px-4 bg-white hover:bg-slate-50 text-slate-900 font-semibold text-sm rounded-xl border border-slate-300 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-[#e88923]" />
                  <span>Free Consultation</span>
                </button>
              </div>

              {/* Feature Bullet List matching screenshot */}
              <div className="pt-4 border-t border-slate-100 space-y-3 text-xs text-slate-600 font-medium">
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
                  <span>Dedicated Solution Architect</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Headphones className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>Free follow-up support</span>
                </div>
              </div>
            </div>

            {/* Related Services Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/90">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-4">
                RELATED SERVICES
              </h3>
              <div className="space-y-3">
                {relatedServices.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/services/${rel.slug}`}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-[#fff9f0] border border-slate-100 hover:border-orange-200 transition-all group"
                  >
                    <span className="text-xs font-bold text-slate-800 group-hover:text-[#d67311] line-clamp-1">
                      {rel.title}
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#d67311] shrink-0 ml-2" />
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
