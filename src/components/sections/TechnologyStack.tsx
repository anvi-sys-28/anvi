'use client';

import React, { useState } from 'react';
import { Layers, Server, Database, Cloud, Terminal, Cpu } from 'lucide-react';

interface TechCategory {
  id: string;
  name: string;
  icon: React.ElementType;
  techs: { name: string; desc: string; badge?: string }[];
}

export const techCategories: TechCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend',
    icon: Layers,
    techs: [
      { name: 'React', desc: 'Component architecture for high performance UI' },
      { name: 'Next.js', desc: 'Server-side rendering, SSR & SSG enterprise framework' },
      { name: 'TypeScript', desc: 'Strict type safety & maintainable codebases' },
      { name: 'HTML5 / CSS3', desc: 'Semantic layout & modern web standards' },
      { name: 'Tailwind CSS', desc: 'Utility-first rapid design engine' },
    ],
  },
  {
    id: 'backend',
    name: 'Backend',
    icon: Server,
    techs: [
      { name: 'Node.js', desc: 'Asynchronous event-driven runtime' },
      { name: 'Python', desc: 'Data processing, APIs & AI model serving' },
      { name: 'Java', desc: 'Enterprise robust backend services' },
      { name: '.NET Core', desc: 'High throughput Microsoft enterprise services' },
      { name: 'REST & GraphQL APIs', desc: 'Clean microservices communication' },
    ],
  },
  {
    id: 'database',
    name: 'Database',
    icon: Database,
    techs: [
      { name: 'PostgreSQL', desc: 'Relational ACID-compliant enterprise database' },
      { name: 'MongoDB', desc: 'Flexible document NoSQL data store' },
      { name: 'MySQL', desc: 'Reliable transactional database system' },
      { name: 'Redis', desc: 'In-memory sub-millisecond caching & queues' },
    ],
  },
  {
    id: 'cloud',
    name: 'Cloud Infrastructure',
    icon: Cloud,
    techs: [
      { name: 'AWS', desc: 'Amazon Web Services cloud architecture' },
      { name: 'Microsoft Azure', desc: 'Enterprise hybrid cloud ecosystems' },
      { name: 'Google Cloud Platform', desc: 'High performance AI & analytics cloud' },
    ],
  },
  {
    id: 'devops',
    name: 'DevOps & Tooling',
    icon: Terminal,
    techs: [
      { name: 'Docker', desc: 'Standardized container runtime environment' },
      { name: 'Kubernetes', desc: 'Container orchestration & auto-scaling' },
      { name: 'Git & GitHub', desc: 'Distributed version control & code audits' },
      { name: 'CI/CD Pipelines', desc: 'Automated testing, building & deployment' },
    ],
  },
  {
    id: 'ai',
    name: 'AI & Machine Learning',
    icon: Cpu,
    techs: [
      { name: 'Machine Learning', desc: 'Custom predictive & classification models' },
      { name: 'Generative AI', desc: 'LLM fine-tuning & agentic RAG workflows', badge: 'Next-Gen' },
      { name: 'LLM Orchestration', desc: 'LangChain, LlamaIndex & Vector DBs' },
      { name: 'Robotic Process Automation', desc: 'Automated workflow bots' },
    ],
  },
];

export const TechnologyStack: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('frontend');

  const activeCategory = techCategories.find((cat) => cat.id === activeTab) || techCategories[0];

  return (
    <section id="technologies" className="py-24 lg:py-32 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold tracking-[0.25em] text-gold-dark uppercase mb-3 flex items-center gap-2">
            <span className="w-8 h-[2px] bg-gold-DEFAULT" />
            <span>TECHNOLOGY ECOSYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-DEFAULT font-heading tracking-tight mb-6">
            Powered By Modern Technology
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-sans">
            We engineer solutions utilizing proven, industry-standard languages, frameworks, and cloud platforms built for security and long-term maintainability.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-slate-200/80 pb-4">
          {techCategories.map((cat) => {
            const isActive = cat.id === activeTab;
            const IconComp = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-navy-DEFAULT text-white shadow-navy-card'
                    : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-navy-DEFAULT border border-slate-200/60'
                }`}
              >
                <IconComp className={`w-4 h-4 ${isActive ? 'text-gold-light' : 'text-slate-400'}`} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Technology Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeCategory.techs.map((tech, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 border border-slate-200/80 hover:border-gold-DEFAULT/50 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-bold text-navy-DEFAULT font-heading group-hover:text-gold-dark transition-colors">
                    {tech.name}
                  </h3>
                  {tech.badge && (
                    <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-gold-subtle text-gold-dark border border-gold-DEFAULT/30">
                      {tech.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-slate-500 font-sans leading-relaxed">
                  {tech.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>STACK LAYER</span>
                <span className="text-gold-dark font-semibold">PRODUCTION READY</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
