'use client';

import React, { useState } from 'react';
import {
  Code,
  Smartphone,
  Bot,
  Cloud,
  ShieldCheck,
  BarChart3,
  Layout,
  Briefcase,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

export interface ServiceItem {
  id: string;
  num: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  icon: React.ElementType;
}

interface ServicesProps {
  onSelectService?: (service: ServiceItem) => void;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'custom-applications',
    num: '01',
    title: 'Custom Applications',
    shortDesc: 'Purpose-built software designed around your unique business workflows and requirements.',
    fullDesc: 'We build software specifically around a company\'s business processes, workflows and requirements — from standalone operational apps to full business software ecosystems.',
    features: ['Custom Business Workflows', 'Tailored Logic & Architecture', 'API Integration & Connectivity', 'Legacy System Modernization'],
    icon: Code,
  },
  {
    id: 'enterprise-software',
    num: '02',
    title: 'Enterprise Software',
    shortDesc: 'Scalable platforms that connect teams, processes and multi-branch business operations.',
    fullDesc: 'Building high-throughput enterprise platforms engineered for reliability, security, multi-department coordination, and real-time operational visibility.',
    features: ['Multi-Branch Architecture', 'Role-Based Access Control', 'Departmental Workflow Sync', 'High Concurrency Engine'],
    icon: Briefcase,
  },
  {
    id: 'web-applications',
    num: '03',
    title: 'Web Applications',
    shortDesc: 'Modern, secure and scalable web applications for customers, employees and internal teams.',
    fullDesc: 'Developing fast, responsive, cloud-hosted web applications with modern frontend frameworks and robust backend APIs built for performance and growth.',
    features: ['Modern Frontend Frameworks', 'Scalable Backend APIs', 'Responsive Cross-Device UI', 'High-Speed Web Portals'],
    icon: Layout,
  },
  {
    id: 'mobile-applications',
    num: '04',
    title: 'Mobile Applications',
    shortDesc: 'Mobile experiences connected to your business systems, APIs, databases and cloud infrastructure.',
    fullDesc: 'Cross-platform and native mobile apps designed to extend your business workflows into mobile devices for field staff, management, and customers.',
    features: ['iOS & Android Apps', 'API & Database Connection', 'Offline Data Synchronization', 'Push Notifications & Tracking'],
    icon: Smartphone,
  },
  {
    id: 'ai-solutions-agents',
    num: '05',
    title: 'AI Solutions & Agents',
    shortDesc: 'Practical AI-powered solutions and intelligent agents to automate work and assist workflows.',
    fullDesc: 'We develop practical AI solutions and autonomous agents capable of understanding tasks, processing information, and interacting with business systems.',
    features: ['Custom AI Agents & Tools', 'Workflow Automation (RPA)', 'Document & Data Intelligence', 'AI Assistant Integration'],
    icon: Bot,
  },
  {
    id: 'cloud-devops',
    num: '06',
    title: 'Cloud & DevOps',
    shortDesc: 'Deploy, manage, monitor and scale applications using modern cloud infrastructure.',
    fullDesc: 'Deploying and managing applications on AWS, Azure, and Google Cloud with automated CI/CD pipelines, containerization, and continuous monitoring.',
    features: ['Automated CI/CD Pipelines', 'Cloud Infrastructure Management', 'Containerization (Docker/K8s)', '24/7 Monitoring & Scaling'],
    icon: Cloud,
  },
  {
    id: 'cybersecurity',
    num: '07',
    title: 'Cybersecurity',
    shortDesc: 'Software and technology solutions engineered with application and data security in mind.',
    fullDesc: 'We provide software and technology solutions designed with security, data protection, API security, and infrastructure resilience from day one.',
    features: ['Application Security Audits', 'API & Infrastructure Hardening', 'Data Protection & Encryption', 'Secure Development Lifecycle'],
    icon: ShieldCheck,
  },
  {
    id: 'software-management',
    num: '08',
    title: 'Software Maintenance & Management',
    shortDesc: 'Continuous maintenance, monitoring, security updates and ongoing software management.',
    fullDesc: 'We don\'t just build software and leave it behind. We continuously maintain, monitor, secure, optimize, and improve software applications after deployment.',
    features: ['Application Health Monitoring', 'Performance Optimization', 'Security Patching & Updates', 'Ongoing Feature Upgrades'],
    icon: BarChart3,
  },
];

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  return (
    <section id="services" className="py-24 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold tracking-[0.25em] text-gold-dark uppercase mb-3 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-gold-DEFAULT" />
              <span>CUSTOM SOFTWARE ENGINEERING</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-DEFAULT font-heading tracking-tight">
              Software Built Around Your Business
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-sans mt-4">
              Every business works differently. We build custom software around your processes, people and goals — from individual applications to complete enterprise platforms.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-brand-bg p-1.5 rounded-lg border border-slate-200">
            <span className="text-xs font-semibold text-slate-500 px-3">
              Full Software Lifecycle
            </span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {servicesData.map((service) => {
            const IconComp = service.icon;
            return (
              <div
                key={service.id}
                onClick={() => onSelectService && onSelectService(service)}
                className="group relative bg-white border border-slate-200 rounded-xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-gold-DEFAULT/40 cursor-pointer overflow-hidden"
              >
                {/* Gold Reveal Line on Hover */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold-gradient transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

                <div>
                  {/* Header: Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-gold-dark transition-colors">
                      {service.num}
                    </span>
                    <div className="w-11 h-11 rounded-lg bg-navy-DEFAULT/5 text-navy-DEFAULT group-hover:bg-navy-DEFAULT group-hover:text-gold-light flex items-center justify-center transition-all duration-300">
                      <IconComp className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-lg font-bold text-navy-DEFAULT font-heading mb-3 group-hover:text-gold-dark transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-sans leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Interaction Footer Link */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-navy-DEFAULT group-hover:text-gold-dark transition-colors">
                  <span>Explore Service</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-gold-DEFAULT group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
