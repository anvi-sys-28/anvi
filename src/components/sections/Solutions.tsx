'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  Layers,
  Database,
  Cpu,
  Shield,
  Workflow,
  CloudLightning,
  GitBranch,
  CheckCircle2,
} from 'lucide-react';

export interface SolutionItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  visualType: string;
  icon: React.ElementType;
}

export const solutionsData: SolutionItem[] = [
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    subtitle: 'End-to-End Modernization',
    description: 'Re-engineer core operations with cloud-native architectures, legacy app refactoring, and digital-first customer channels.',
    benefits: ['40% Faster Time-to-Market', 'Legacy Risk Reduction', 'Omnichannel Customer Experience'],
    visualType: 'transformation',
    icon: Workflow,
  },
  {
    id: 'enterprise-applications',
    title: 'Enterprise Applications',
    subtitle: 'Mission-Critical Core Systems',
    description: 'High-concurrency ERP, CRM, and custom operational platforms designed for fault-tolerant performance and regulatory compliance.',
    benefits: ['Multi-Tenant Architecture', 'Real-time ERP Synchronization', 'Role-Based Access Control'],
    visualType: 'enterprise',
    icon: Layers,
  },
  {
    id: 'business-automation',
    title: 'Business Automation',
    subtitle: 'Intelligent Process Optimization',
    description: 'Eliminate manual bottlenecks with automated workflows, intelligent document capture, and self-healing system integrations.',
    benefits: ['60% Reduced Manual Overhead', 'Audit Trail Compliance', 'Automated Exception Handling'],
    visualType: 'automation',
    icon: GitBranch,
  },
  {
    id: 'ai-powered-solutions',
    title: 'AI-Powered Solutions',
    subtitle: 'Domain-Trained Intelligence',
    description: 'Deploy custom Machine Learning models, natural language assistants, and predictive decision-support systems built on proprietary data.',
    benefits: ['Predictive Demand Forecasting', 'Custom LLM Agents', 'Automated Fraud Detection'],
    visualType: 'ai',
    icon: Cpu,
  },
  {
    id: 'cloud-transformation',
    title: 'Cloud Transformation',
    subtitle: 'Resilient Multi-Cloud Foundations',
    description: 'Migrate and optimize workloads across AWS, Azure, and private clouds with zero data loss and automated cost control.',
    benefits: ['99.99% Uptime SLA', 'Auto-scaling Infrastructure', 'Infra-as-Code Automation'],
    visualType: 'cloud',
    icon: CloudLightning,
  },
  {
    id: 'data-intelligence',
    title: 'Data Intelligence',
    subtitle: 'Turn Big Data into Business Value',
    description: 'Construct real-time streaming data pipelines, centralized data lakes, and executive decision dashboards.',
    benefits: ['Sub-Second Query Speeds', 'Executive BI Reports', 'Unified Customer 360 View'],
    visualType: 'data',
    icon: Database,
  },
  {
    id: 'cybersecurity-solutions',
    title: 'Cybersecurity Solutions',
    subtitle: 'Zero Trust Protection Strategy',
    description: 'Proactive threat monitoring, identity governance, end-point encryption, and automated vulnerability remediations.',
    benefits: ['ISO 27001 & SOC2 Compliant', 'Zero Trust Architecture', 'Real-Time Threat Prevention'],
    visualType: 'security',
    icon: Shield,
  },
];

interface SolutionsProps {
  onSelectSolution?: (solution: SolutionItem) => void;
}

export const Solutions: React.FC<SolutionsProps> = ({ onSelectSolution }) => {
  const [activeSolutionId, setActiveSolutionId] = useState<string>(solutionsData[0].id);

  const activeSolution = solutionsData.find((s) => s.id === activeSolutionId) || solutionsData[0];

  return (
    <section id="solutions" className="py-24 lg:py-32 bg-navy-DEFAULT text-white relative overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-DEFAULT/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-navy-light/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold tracking-[0.25em] text-gold-light uppercase mb-3 flex items-center gap-2">
            <span className="w-8 h-[2px] bg-gold-DEFAULT" />
            <span>ENTERPRISE SOLUTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight text-white mb-6">
            Solutions Designed Around Real Business Challenges
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-sans">
            Modular, enterprise-grade technology frameworks tailored to transform operational friction into competitive advantage.
          </p>
        </div>

        {/* Tab Selector & Detailed Active Viewer */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Solution Navigation List (Left Column) */}
          <div className="lg:col-span-5 flex flex-col space-y-2">
            {solutionsData.map((sol) => {
              const isActive = sol.id === activeSolutionId;
              const IconComp = sol.icon;
              return (
                <button
                  key={sol.id}
                  onClick={() => setActiveSolutionId(sol.id)}
                  className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-300 flex items-center justify-between group ${
                    isActive
                      ? 'bg-navy-light border-gold-DEFAULT/60 shadow-gold-glow text-white'
                      : 'bg-navy-light/30 border-navy-border/40 text-slate-300 hover:bg-navy-light/60 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                        isActive ? 'bg-gold-gradient text-navy-DEFAULT' : 'bg-navy-DEFAULT text-slate-400 group-hover:text-gold-light'
                      }`}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold font-heading">{sol.title}</div>
                      <div className="text-[11px] text-slate-400 font-sans">{sol.subtitle}</div>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isActive ? 'text-gold-DEFAULT translate-x-1' : 'text-slate-600 group-hover:text-slate-300'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Solution Panel Showcase (Right Column) */}
          <div className="lg:col-span-7">
            <div className="bg-navy-light/80 backdrop-blur-md rounded-2xl border border-gold-DEFAULT/30 p-8 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[480px]">
              
              {/* Thin Accent Gold Top Border */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold-gradient" />

              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-subtle border border-gold-DEFAULT/30 text-gold-light text-xs font-mono font-semibold uppercase">
                    <Sparkles className="w-3 h-3 text-gold-DEFAULT" />
                    <span>{activeSolution.subtitle}</span>
                  </span>
                  <span className="text-xs font-mono text-slate-400">ANVITECH FRAMEWORK</span>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mb-4">
                  {activeSolution.title}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans mb-8">
                  {activeSolution.description}
                </p>

                {/* Interactive Diagram / Visualization representation */}
                <div className="bg-navy-DEFAULT/90 rounded-xl p-6 border border-navy-border/80 mb-8">
                  <div className="text-xs font-mono text-slate-400 mb-4 flex items-center justify-between">
                    <span>ARCHITECTURAL BENCHMARKS</span>
                    <span className="text-emerald-400 text-[10px]">VERIFIED SOLUTION</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {activeSolution.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2.5 bg-navy-light/50 p-3 rounded-lg border border-white/5">
                        <CheckCircle2 className="w-4 h-4 text-gold-DEFAULT shrink-0 mt-0.5" />
                        <span className="text-xs font-medium text-slate-200">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-6 border-t border-navy-border/60 flex items-center justify-between">
                <button
                  onClick={() => onSelectSolution ? onSelectSolution(activeSolution) : document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gold-gradient text-navy-DEFAULT font-bold text-xs sm:text-sm rounded-md shadow-gold-glow hover:brightness-110 transition-all"
                >
                  <span>Request Solution Architecture</span>
                  <ArrowRight className="w-4 h-4 text-navy-DEFAULT" />
                </button>

                <span className="text-xs text-slate-400 font-mono hidden sm:inline-block">
                  ANVITECH TECH STACK READY
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
