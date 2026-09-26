'use client';

import React from 'react';
import { ArrowUpRight, CheckCircle2, Building, Cpu, ShieldCheck } from 'lucide-react';

export interface CaseStudyItem {
  id: string;
  industry: string;
  title: string;
  challenge: string;
  solution: string;
  technologies: string[];
  outcome: string;
  metrics: { label: string; value: string }[];
}

export const caseStudiesData: CaseStudyItem[] = [
  {
    id: 'workflow-transformation',
    industry: 'Enterprise',
    title: 'Enterprise Workflow Transformation Platform',
    challenge: 'Fragmented manual approval workflows across 14 international offices causing operational latency.',
    solution: 'Engineered a centralized, microservices-based business automation portal with real-time event streaming.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
    outcome: 'Eliminated 65% of manual review steps while maintaining strict SOC2 audit compliance.',
    metrics: [
      { label: 'Process Speedup', value: '4.5x' },
      { label: 'Uptime SLA', value: '99.99%' },
      { label: 'Cost Savings', value: '38%' },
    ],
  },
  {
    id: 'ai-supply-chain',
    industry: 'Logistics & AI',
    title: 'AI-Driven Predictive Supply Chain Engine',
    challenge: 'Unpredictable inventory stockouts and logistics delays due to dynamic market fluctuations.',
    solution: 'Deployed custom Machine Learning demand forecasting models integrated with real-time GPS telemetry.',
    technologies: ['Python', 'Generative AI', 'Redis', 'Kubernetes', 'Google Cloud'],
    outcome: 'Accurate 14-day stock forecasting with automated reordering triggers.',
    metrics: [
      { label: 'Stockout Reduction', value: '72%' },
      { label: 'Accuracy Rate', value: '94.2%' },
      { label: 'ROIC Horizon', value: '5 Mo' },
    ],
  },
  {
    id: 'fintech-core-banking',
    industry: 'Financial Services',
    title: 'High-Throughput Payment Gateway Engine',
    challenge: 'Legacy core transaction engine struggling under high-concurrency payment surges.',
    solution: 'Re-architected event-driven payment processing engine with zero-trust tokenization.',
    technologies: ['TypeScript', 'Java', 'PostgreSQL', 'Redis', 'Azure'],
    outcome: 'Processed over 2M daily micro-transactions with sub-50ms latency.',
    metrics: [
      { label: 'Peak TPS', value: '12,500' },
      { label: 'Latency', value: '<45ms' },
      { label: 'Security Standard', value: 'PCI-DSS' },
    ],
  },
];

interface CaseStudiesProps {
  onSelectCaseStudy?: (study: CaseStudyItem) => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onSelectCaseStudy }) => {
  return (
    <section id="insights" className="py-24 lg:py-32 bg-brand-bg border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold tracking-[0.25em] text-gold-dark uppercase mb-3 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-gold-DEFAULT" />
              <span>PROVEN RESULTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-DEFAULT font-heading tracking-tight">
              Technology In Action
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-sans mt-4">
              Real-world case studies demonstrating technical engineering, strategic problem solving, and measurable enterprise value.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-500 bg-white px-4 py-2 rounded-lg border border-slate-200">
            CASE ARCHIVE // 2026 EDITION
          </div>
        </div>

        {/* Case Study Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudiesData.map((study) => (
            <div
              key={study.id}
              onClick={() => onSelectCaseStudy && onSelectCaseStudy(study)}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-2xl hover:border-gold-DEFAULT/50 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div className="p-8">
                {/* Industry Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold font-mono tracking-widest uppercase px-3 py-1 rounded-full bg-navy-DEFAULT text-gold-light">
                    {study.industry}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-gold-dark group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-navy-DEFAULT font-heading mb-4 group-hover:text-gold-dark transition-colors leading-snug">
                  {study.title}
                </h3>

                {/* Challenge & Solution Summary */}
                <div className="space-y-3 mb-6 text-xs sm:text-sm font-sans">
                  <div>
                    <span className="font-semibold text-slate-400 uppercase tracking-wider text-[10px] block mb-1">
                      CHALLENGE
                    </span>
                    <p className="text-slate-600 line-clamp-2">{study.challenge}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gold-dark uppercase tracking-wider text-[10px] block mb-1">
                      ENGINEERED SOLUTION
                    </span>
                    <p className="text-navy-DEFAULT font-medium line-clamp-2">{study.solution}</p>
                  </div>
                </div>

                {/* Technologies Used Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {study.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics Strip Footer */}
              <div className="bg-navy-DEFAULT p-6 border-t border-navy-border text-white grid grid-cols-3 gap-2 text-center">
                {study.metrics.map((m, i) => (
                  <div key={i} className="border-r border-white/10 last:border-r-0 px-1">
                    <div className="text-gold-light font-extrabold font-heading text-base sm:text-lg">{m.value}</div>
                    <div className="text-[9px] text-slate-300 font-sans uppercase tracking-wider">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
