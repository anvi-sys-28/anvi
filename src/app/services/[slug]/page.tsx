'use client';

import React from 'react';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { CtaFaqFooterSection } from '@/components/sections/CtaFaqFooterSection';
import { servicesList } from '@/lib/servicesData';
import { useTheme } from '@/context/ThemeContext';
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
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Match by exact slug or decodeURIComponent fallback
  const service = servicesList.find((s) => s.slug === slug || encodeURIComponent(s.title) === slug || s.slug === slug?.toLowerCase());

  if (!service) {
    return (
      <main className={`min-h-screen flex flex-col justify-between font-sans ${
        isDark ? 'bg-black text-white' : 'bg-slate-50 text-slate-900'
      }`}>
        <Navbar />
        <div className="max-w-md mx-auto py-32 text-center px-4">
          <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
          <p className={isDark ? 'text-slate-400 mb-6' : 'text-slate-600 mb-6'}>The requested service portfolio could not be found.</p>
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
    <main className={`min-h-screen transition-colors duration-300 font-sans ${
      isDark ? 'bg-black text-white selection:bg-gold-DEFAULT selection:text-black' : 'bg-[#fcfaf7] text-slate-900 selection:bg-[#FFDEAD] selection:text-slate-900'
    }`}>
      {/* 1. Header Navigation */}
      <Navbar onOpenContactModal={scrollToContact} />

      {/* 2. Top Banner Header */}
      <section className={`pt-28 pb-16 px-4 sm:px-8 lg:px-12 border-b transition-colors duration-300 ${
        isDark ? 'bg-neutral-900 text-white border-neutral-800' : 'bg-[#FFDEAD] text-[#1a1008] border-[#f3cb98]'
      }`}>
        <div className="max-w-6xl mx-auto">
          {/* Back to Services Link */}
          <Link
            href="/services"
            className={`inline-flex items-center gap-1.5 text-xs font-bold mb-5 transition-colors ${
              isDark ? 'text-amber-400 hover:text-white' : 'text-[#5c3a10] hover:text-[#1a1008]'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </Link>

          {/* Clean Category Badge & Title */}
          <div>
            <span className={`block text-xs font-mono font-bold uppercase tracking-wider mb-2 ${
              isDark ? 'text-amber-400' : 'text-[#8a4b08]'
            }`}>
              {service.badge}
            </span>
            <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight mb-3 ${
              isDark ? 'text-white' : 'text-[#1a1008]'
            }`}>
              {service.title}
            </h1>
            <p className={`text-base sm:text-lg max-w-3xl leading-relaxed font-medium ${
              isDark ? 'text-slate-300' : 'text-[#4a3012]'
            }`}>
              {service.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data for Google Sitelinks & Search indexing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: 'https://www.anvitechindia.com',
                  },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Services',
                    item: 'https://www.anvitechindia.com/services',
                  },
                  {
                    '@type': 'ListItem',
                    position: 3,
                    name: service.title,
                    item: `https://www.anvitechindia.com/services/${service.slug}`,
                  },
                ],
              },
              {
                '@type': 'Service',
                name: service.title,
                description: service.subtitle,
                provider: {
                  '@type': 'Organization',
                  name: 'ANVITECH INDIA PRIVATE LIMITED',
                  url: 'https://www.anvitechindia.com',
                },
                url: `https://www.anvitechindia.com/services/${service.slug}`,
              },
            ],
          }),
        }}
      />

      {/* 3. Main Content Grid */}
      <section className="py-12 px-4 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Description + Eligibility + Required Documents Table */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Card 1: What is [Service]? */}
            <div className={`rounded-2xl p-8 shadow-sm border transition-colors ${
              isDark ? 'bg-neutral-900 border-neutral-800 text-white' : 'bg-white border-slate-200/90 text-slate-900'
            }`}>
              <h2 className={`text-2xl font-bold font-heading mb-4 border-b pb-3 ${
                isDark ? 'border-neutral-800 text-white' : 'border-slate-100 text-slate-900'
              }`}>
                What is {service.title}?
              </h2>
              <p className={`text-base leading-relaxed mb-4 font-sans ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                {service.fullDesc}
              </p>
              <p className={`text-sm leading-relaxed font-sans ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}>
                Our technology framework ensures rapid blueprinting, end-to-end code transparency, role-based security governance, and seamless continuous deployment to match enterprise demands.
              </p>
            </div>

            {/* Card 2: Eligibility Criteria */}
            <div className={`rounded-2xl p-8 shadow-sm border transition-colors ${
              isDark ? 'bg-neutral-900 border-neutral-800 text-white' : 'bg-white border-slate-200/90 text-slate-900'
            }`}>
              <h3 className={`text-xl font-bold mb-4 font-heading border-b pb-3 ${
                isDark ? 'border-neutral-800 text-white' : 'border-slate-100 text-slate-900'
              }`}>
                Eligibility Criteria & Ideal Business Profile
              </h3>
              <ul className="space-y-3.5">
                {service.eligibility.map((item, idx) => (
                  <li key={idx} className={`flex items-start gap-3 text-sm ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    <CheckCircle className={`w-5 h-5 shrink-0 mt-0.5 ${
                      isDark ? 'text-amber-400' : 'text-[#d67311]'
                    }`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 3: List of Required Documents & Deliverables Table */}
            <div className={`rounded-2xl p-8 shadow-sm border transition-colors ${
              isDark ? 'bg-neutral-900 border-neutral-800 text-white' : 'bg-white border-slate-200/90 text-slate-900'
            }`}>
              <h3 className={`text-xl font-bold mb-4 font-heading flex items-center gap-2 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                <FileText className={`w-5 h-5 ${isDark ? 'text-amber-400' : 'text-[#8a4b08]'}`} />
                <span>List of Required Documents & Key Deliverables</span>
              </h3>
              
              <div className={`overflow-x-auto rounded-xl border mt-4 ${
                isDark ? 'border-neutral-800' : 'border-slate-200'
              }`}>
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className={`text-xs font-mono font-bold uppercase tracking-wider border-b ${
                      isDark
                        ? 'bg-neutral-800 text-amber-400 border-neutral-700'
                        : 'bg-[#FFDEAD] text-[#1a1008] border-[#f3cb98]'
                    }`}>
                      <th className="py-3.5 px-5 w-1/3">CATEGORY</th>
                      <th className="py-3.5 px-5">REQUIRED DETAILS & DOCUMENTS</th>
                    </tr>
                  </thead>
                  <tbody className={`divide-y text-xs sm:text-sm ${
                    isDark ? 'divide-neutral-800 text-slate-300' : 'divide-slate-200 text-slate-700'
                  }`}>
                    {(service.documentsTable || [
                      { category: 'Business Requirements', details: 'Functional Scope Document & Process Workflow Specs' },
                      { category: 'Technical Architecture', details: 'System Architecture Blueprint & Role Access Matrix' },
                      { category: 'Deployment Assets', details: 'Cloud Infrastructure Credentials & API Endpoint Documentation' },
                    ]).map((row, i) => (
                      <tr key={i} className={
                        isDark
                          ? i % 2 === 0 ? 'bg-neutral-900' : 'bg-neutral-950'
                          : i % 2 === 0 ? 'bg-[#fffcf7]' : 'bg-white'
                      }>
                        <td className={`py-3.5 px-5 font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{row.category}</td>
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
            <div className={`rounded-2xl p-6 shadow-md border-2 space-y-6 transition-colors ${
              isDark
                ? 'bg-neutral-900 border-amber-500/80 text-white'
                : 'bg-white border-[#e88923]/80 text-slate-900'
            }`}>
              
              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  onClick={scrollToContact}
                  className={`w-full py-3.5 px-4 font-bold text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    isDark
                      ? 'bg-amber-500 hover:bg-amber-400 text-black shadow-amber-500/20'
                      : 'bg-[#e88923] hover:bg-[#d47817] text-white shadow-orange-500/20'
                  }`}
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={scrollToContact}
                  className={`w-full py-3 px-4 font-semibold text-sm rounded-xl border transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    isDark
                      ? 'bg-neutral-800 hover:bg-neutral-700 text-white border-neutral-700'
                      : 'bg-white hover:bg-slate-50 text-slate-900 border-slate-300'
                  }`}
                >
                  <PhoneCall className={`w-4 h-4 ${isDark ? 'text-amber-400' : 'text-[#e88923]'}`} />
                  <span>Free Consultation</span>
                </button>
              </div>

              {/* Feature Bullet List */}
              <div className={`pt-4 border-t space-y-3 text-xs font-medium ${
                isDark ? 'border-neutral-800 text-slate-400' : 'border-slate-100 text-slate-600'
              }`}>
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
            <div className={`rounded-2xl p-6 shadow-sm border transition-colors ${
              isDark ? 'bg-neutral-900 border-neutral-800 text-white' : 'bg-white border-slate-200/90 text-slate-900'
            }`}>
              <h3 className={`text-xs font-mono font-bold uppercase tracking-wider mb-4 ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}>
                RELATED SERVICES
              </h3>
              <div className="space-y-3">
                {relatedServices.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/services/${rel.slug}`}
                    className={`flex items-center justify-between p-3 rounded-xl border transition-all group ${
                      isDark
                        ? 'hover:bg-neutral-800 border-neutral-800 hover:border-amber-500/40 text-slate-200'
                        : 'hover:bg-[#fff9f0] border-slate-100 hover:border-orange-200 text-slate-800'
                    }`}
                  >
                    <span className={`text-xs font-bold line-clamp-1 ${
                      isDark ? 'group-hover:text-amber-400' : 'group-hover:text-[#d67311]'
                    }`}>
                      {rel.title}
                    </span>
                    <ChevronRight className={`w-4 h-4 shrink-0 ml-2 ${
                      isDark ? 'text-slate-500 group-hover:text-amber-400' : 'text-slate-400 group-hover:text-[#d67311]'
                    }`} />
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
