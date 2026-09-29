'use client';

import React from 'react';
import {
  HeartPulse,
  Landmark,
  GraduationCap,
  ShoppingBag,
  Factory,
  Truck,
  Hotel,
  Building,
  Briefcase,
  Globe,
  ArrowUpRight,
} from 'lucide-react';

interface IndustryItem {
  id: string;
  name: string;
  desc: string;
  icon: React.ElementType;
}

export const industriesData: IndustryItem[] = [
  {
    id: 'healthcare',
    name: 'Healthcare',
    desc: 'Telemedicine engines, EHR integration, and HIPAA-compliant data security platforms.',
    icon: HeartPulse,
  },
  {
    id: 'finance',
    name: 'Finance & Banking',
    desc: 'High-speed payment gateways, algorithmic risk models, and secure banking portals.',
    icon: Landmark,
  },
  {
    id: 'education',
    name: 'Education (EdTech)',
    desc: 'Scalable learning management systems, virtual classrooms, and campus ERP engines.',
    icon: GraduationCap,
  },
  {
    id: 'retail',
    name: 'Retail & E-Commerce',
    desc: 'Omnichannel shopping engines, AI product recommendations, and inventory sync.',
    icon: ShoppingBag,
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & Industry 4.0',
    desc: 'Smart factory IoT integration, predictive maintenance, and quality control AI.',
    icon: Factory,
  },
  {
    id: 'logistics',
    name: 'Logistics & Supply Chain',
    desc: 'Real-time fleet tracking, automated dispatching, and warehouse management.',
    icon: Truck,
  },
  {
    id: 'hospitality',
    name: 'Hospitality & Tourism',
    desc: 'Property management systems, guest mobile check-in, and reservation portals.',
    icon: Hotel,
  },
  {
    id: 'real-estate',
    name: 'Real Estate & PropTech',
    desc: 'Property listing platforms, automated lease processing, and tenant portals.',
    icon: Building,
  },
  {
    id: 'professional-services',
    name: 'Professional Services',
    desc: 'Custom CRM systems, billing automation, and enterprise document vaults.',
    icon: Briefcase,
  },
  {
    id: 'government',
    name: 'Government & Public Sector',
    desc: 'E-governance platforms, high-security citizen service portals, and public data systems.',
    icon: Globe,
  },
];

export const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-24 lg:py-32 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold tracking-[0.25em] text-gold-dark uppercase mb-3 flex items-center gap-2">
            <span className="w-8 h-[2px] bg-gold-DEFAULT" />
            <span>VERTICAL EXPANSION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-DEFAULT font-heading tracking-tight mb-6">
            Technology Across Industries
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-sans">
            We build software around industry-specific workflows and business requirements.
          </p>
        </div>

        {/* 10 Industry Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {industriesData.map((ind) => {
            const IconComp = ind.icon;
            return (
              <div
                key={ind.id}
                className="group relative bg-brand-bg rounded-xl p-6 border border-slate-200/80 transition-all duration-300 hover:bg-navy-DEFAULT hover:border-gold-DEFAULT/50 hover:shadow-2xl hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer"
              >
                {/* Gold Top Accent Line */}
                <div className="absolute top-0 left-6 right-6 h-[2px] bg-gold-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-navy-DEFAULT/5 text-navy-DEFAULT group-hover:bg-navy-light group-hover:text-gold-light flex items-center justify-center mb-6 transition-colors duration-300">
                    <IconComp className="w-6 h-6 transition-transform group-hover:scale-110" />
                  </div>

                  {/* Name */}
                  <h3 className="text-base font-bold text-navy-DEFAULT group-hover:text-white font-heading mb-2 transition-colors">
                    {ind.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-500 group-hover:text-slate-300 font-sans leading-relaxed transition-colors">
                    {ind.desc}
                  </p>
                </div>

                {/* Footer Link Indicator */}
                <div className="mt-6 pt-4 border-t border-slate-200/60 group-hover:border-white/10 flex items-center justify-between text-[11px] font-semibold text-gold-dark group-hover:text-gold-light transition-colors">
                  <span>Domain Solutions</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
