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
    id: 'software-development',
    num: '01',
    title: 'Software Development',
    shortDesc: 'Custom web and enterprise applications designed for high load and complex business logic.',
    fullDesc: 'We architect and build tailored enterprise software platforms, microservices architectures, and robust web applications engineered for security, high throughput, and seamless integration.',
    features: ['Custom Web Applications', 'Enterprise ERP & CRM', 'API Architecture & Integration', 'Legacy System Modernization'],
    icon: Code,
  },
  {
    id: 'mobile-app-development',
    num: '02',
    title: 'Mobile Application Development',
    shortDesc: 'High-performance mobile applications for Android and iOS with native responsiveness.',
    fullDesc: 'Crafting intuitive, fast, and feature-rich cross-platform and native mobile apps designed to deliver exceptional user experiences across all devices.',
    features: ['iOS & Android Native Dev', 'React Native & Flutter', 'Offline-First Architecture', 'Real-Time Sync Systems'],
    icon: Smartphone,
  },
  {
    id: 'ai-automation',
    num: '03',
    title: 'AI & Automation',
    shortDesc: 'AI-powered systems, intelligent automation and predictive workflow optimization.',
    fullDesc: 'Leverage generative AI, custom Machine Learning algorithms, and robotic process automation (RPA) to automate repetitive operations and unlock deep domain intelligence.',
    features: ['Generative AI & LLM Integration', 'Predictive Analytics Models', 'Workflow Automation (RPA)', 'Intelligent Document Processing'],
    icon: Bot,
  },
  {
    id: 'cloud-devops',
    num: '04',
    title: 'Cloud & DevOps',
    shortDesc: 'Cloud infrastructure, automated deployment, monitoring and scalable architecture.',
    fullDesc: 'Empowering enterprises with resilient AWS, Azure, and Google Cloud infrastructure, Automated CI/CD pipelines, containerization, and 24/7 reliability engineering.',
    features: ['Cloud Migration & Hybrid Cloud', 'Kubernetes & Docker Containerization', 'Automated CI/CD Pipelines', 'Infrastructure as Code (IaC)'],
    icon: Cloud,
  },
  {
    id: 'cybersecurity',
    num: '05',
    title: 'Cybersecurity',
    shortDesc: 'Security-focused systems, vulnerability assessments and active protection strategies.',
    fullDesc: 'Protect your critical business assets with Zero Trust security frameworks, penetration testing, compliance readiness (SOC2, ISO 27001), and threat monitoring.',
    features: ['Vulnerability & Risk Audits', 'Zero Trust Architecture', 'Identity & Access Management', 'Security Compliance Consulting'],
    icon: ShieldCheck,
  },
  {
    id: 'data-analytics',
    num: '06',
    title: 'Data & Analytics',
    shortDesc: 'Business intelligence, dashboards, data engineering and real-time insights.',
    fullDesc: 'Transform raw data into actionable strategic insights with modern data lakes, real-time analytics pipelines, and interactive executive reporting dashboards.',
    features: ['Data Warehousing & ETL', 'Executive BI Dashboards', 'Real-time Event Streaming', 'Data Governance & Hygiene'],
    icon: BarChart3,
  },
  {
    id: 'ui-ux-engineering',
    num: '07',
    title: 'UI/UX Engineering',
    shortDesc: 'Modern digital experiences engineered around users, accessibility, and business metrics.',
    fullDesc: 'Human-centered user experience research, design systems, and rapid prototyping that elevate brand perception and optimize conversion user journeys.',
    features: ['User Research & Journey Mapping', 'Enterprise Design Systems', 'Interactive Web & Mobile Prototypes', 'Accessibility (WCAG 2.1) Audits'],
    icon: Layout,
  },
  {
    id: 'it-consulting',
    num: '08',
    title: 'IT Consulting',
    shortDesc: 'Technology strategy, solution architecture and digital transformation advisory.',
    fullDesc: 'Partnering with leadership teams to chart clear digital transformation roadmaps, evaluate technical stacks, optimize IT budgets, and mitigate project risk.',
    features: ['Digital Transformation Strategy', 'Enterprise Architecture Blueprinting', 'Tech Stack Evaluation', 'RFP & Vendor Advisory'],
    icon: Briefcase,
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
              <span>CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-DEFAULT font-heading tracking-tight">
              Our Technology Capabilities
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-sans mt-4">
              From strategy to engineering, we build digital systems designed for real-world business.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-brand-bg p-1.5 rounded-lg border border-slate-200">
            <span className="text-xs font-semibold text-slate-500 px-3">
              8 Enterprise Core Domains
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
