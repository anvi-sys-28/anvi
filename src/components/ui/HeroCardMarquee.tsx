'use client';

import React from 'react';
import {
  MoreVertical,
  Plus,
  RefreshCw,
  TrendingUp,
  ShieldCheck,
  Cpu,
  Cloud,
} from 'lucide-react';

export const HeroCardMarquee: React.FC = () => {
  const allCards = [
    // Card 1: Software Development
    <div
      key="c1"
      className="w-[240px] sm:w-[260px] lg:w-[275px] bg-white text-navy-DEFAULT rounded-2xl p-4 shadow-2xl border border-slate-100 flex flex-col justify-between shrink-0"
    >
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[11px] font-bold font-heading text-navy-DEFAULT">
            Software Development
          </span>
          <MoreVertical className="w-3.5 h-3.5 text-slate-400" />
        </div>

        <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[9px] font-mono font-semibold text-emerald-600 mb-3">
          <RefreshCw className="w-2.5 h-2.5 animate-spin" />
          <span>Active Microservices V4.2.0</span>
        </div>

        <div className="h-12 w-full mb-3">
          <svg viewBox="0 0 200 60" className="w-full h-full overflow-hidden" preserveAspectRatio="none">
            <defs>
              <linearGradient id="waveGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M 0,40 Q 20,10 40,35 T 80,15 T 120,45 T 160,20 T 200,35 L 200,60 L 0,60 Z"
              fill="url(#waveGrad)"
            />
            <path
              d="M 0,40 Q 20,10 40,35 T 80,15 T 120,45 T 160,20 T 200,35"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="2.5"
            />
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-1.5 text-[10px] font-medium text-slate-600 text-center">
        <div className="py-1 rounded border border-slate-200 bg-slate-50">
          React / Next.js
        </div>
        <div className="py-1 rounded border border-slate-200 bg-slate-50">
          TypeScript
        </div>
        <div className="py-1 rounded border border-slate-200 bg-slate-50">
          Node / Python
        </div>
        <div className="py-1 rounded border border-slate-200 bg-slate-50">
          REST / APIs
        </div>
      </div>
    </div>,

    // Card 2: Managed IT Credit Card
    <div
      key="c2"
      className="w-[240px] sm:w-[260px] lg:w-[275px] bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-2xl p-4 shadow-2xl shrink-0 flex flex-col justify-between"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] font-semibold tracking-wider text-amber-100 uppercase">
          Managed IT SLA Credit
        </span>
        <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white text-[10px]">
          ⇄
        </div>
      </div>
      <div className="text-xl font-black font-heading text-white tracking-tight">
        $1,234.90 Active
      </div>
    </div>,

    // Card 3: Cloud Infrastructure & DevOps
    <div
      key="c3"
      className="w-[240px] sm:w-[260px] lg:w-[275px] bg-white text-navy-DEFAULT rounded-2xl p-4 shadow-2xl border border-slate-100 shrink-0"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-6 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
            <Cloud className="w-3.5 h-3.5" />
          </div>
          <span className="text-[11px] font-bold font-heading">Cloud & DevOps</span>
        </div>
        <span className="text-[9px] font-mono text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
          Weekly Load ▾
        </span>
      </div>

      <div className="flex items-end justify-between gap-1 h-12 mb-2 px-1">
        {[30, 55, 40, 70, 85, 60, 95, 75, 90].map((h, i) => (
          <div
            key={i}
            className="w-full bg-amber-400 rounded-t-sm"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>

      <div className="flex items-center justify-between pt-1.5 border-t border-slate-100">
        <span className="text-base font-extrabold font-heading text-navy-DEFAULT">
          99.99% SLA
        </span>
        <span className="text-[10px] font-semibold text-emerald-500 flex items-center gap-0.5">
          <TrendingUp className="w-3 h-3" /> ↗ AWS & Azure
        </span>
      </div>
    </div>,

    // Card 4: Data Analytics
    <div
      key="c4"
      className="w-[240px] sm:w-[260px] lg:w-[275px] bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-4 shadow-2xl shrink-0"
    >
      <div className="flex items-center justify-between mb-2 text-[10px]">
        <span className="text-blue-100 font-mono">Data Analytics ▾</span>
        <span className="font-bold text-emerald-300">+ 30.6% BI</span>
      </div>

      <div className="flex items-end justify-between gap-2">
        <div>
          <div className="text-lg font-bold font-heading">$346.86k</div>
          <button className="mt-1.5 text-[9px] font-semibold bg-white/20 hover:bg-white/30 px-2.5 py-0.5 rounded text-white transition-colors">
            BI Dashboards
          </button>
        </div>

        <div className="flex items-end gap-1 h-12">
          {[40, 60, 30, 90, 70, 100].map((h, i) => (
            <div
              key={i}
              className="w-2 bg-white/90 rounded-t"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    </div>,

    // Card 5: AI & Automation
    <div
      key="c5"
      className="w-[240px] sm:w-[260px] lg:w-[275px] bg-white text-navy-DEFAULT rounded-2xl p-4 shadow-2xl border border-slate-100 shrink-0"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-gold-gradient text-navy-DEFAULT flex items-center justify-center font-bold text-[10px]">
            AI
          </div>
          <div>
            <div className="text-[11px] font-bold font-heading">AI & Automation</div>
            <div className="text-[9px] text-slate-400 font-mono">
              LLMs & RPA Bots
            </div>
          </div>
        </div>
        <MoreVertical className="w-3.5 h-3.5 text-slate-400" />
      </div>

      <div className="flex items-center justify-between pt-1">
        <div className="flex -space-x-1.5 overflow-hidden">
          <div className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-slate-300" />
          <div className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-slate-400" />
          <div className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-gold-DEFAULT text-[9px] text-navy-DEFAULT font-bold flex items-center justify-center">
            +4
          </div>
        </div>
        <button className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700">
          <Cpu className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>,

    // Card 6: Enterprise IT SLA Tasks
    <div
      key="c6"
      className="w-[240px] sm:w-[260px] lg:w-[275px] bg-white text-navy-DEFAULT rounded-2xl p-4 shadow-2xl border border-slate-100 shrink-0"
    >
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[11px] font-bold font-heading">IT SLA Deliverables</span>
        <span className="text-[11px] font-bold text-blue-600">95%</span>
      </div>

      <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mb-3">
        <div className="bg-blue-600 h-full w-[95%]" />
      </div>

      <div className="space-y-1.5 mb-3 text-[10px]">
        <div className="flex items-center justify-between p-1.5 rounded-lg bg-amber-50 text-amber-900">
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span className="font-medium truncate max-w-[120px]">
              Zero-Downtime Migration
            </span>
          </div>
          <span className="text-[9px] bg-amber-200/60 px-1 py-0.5 rounded text-amber-800">
            DONE
          </span>
        </div>

        <div className="flex items-center justify-between p-1.5 rounded-lg bg-blue-50 text-blue-900">
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span className="font-medium truncate max-w-[120px]">
              SOC2 & Vulnerability Audit
            </span>
          </div>
          <span className="text-[9px] bg-blue-200/60 px-1 py-0.5 rounded text-blue-800">
            PASSED
          </span>
        </div>
      </div>

      <button className="w-full py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-[11px] rounded-xl transition-colors flex items-center justify-center gap-1">
        <Plus className="w-3 h-3" />
        <span>Request IT Audit</span>
      </button>
    </div>,

    // Card 7: Cybersecurity Risk Savings
    <div
      key="c7"
      className="w-[240px] sm:w-[260px] lg:w-[275px] bg-white text-navy-DEFAULT rounded-2xl p-4 shadow-2xl border border-slate-100 flex items-center justify-between shrink-0"
    >
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full border-2 border-blue-500 border-t-transparent flex items-center justify-center text-blue-600">
          <ShieldCheck className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[10px] text-slate-400 font-medium">
            Cybersecurity Risk Savings
          </div>
          <div className="text-base font-extrabold text-navy-DEFAULT font-heading">
            $45,890 Saved
          </div>
        </div>
      </div>
    </div>,

    // Card 8: Enterprise Tech Consulting
    <div
      key="c8"
      className="w-[240px] sm:w-[260px] lg:w-[275px] bg-white text-navy-DEFAULT rounded-2xl p-4 shadow-2xl border border-slate-100 shrink-0"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-bold font-heading">IT Consulting</span>
        <span className="text-[9px] text-slate-400 font-mono bg-slate-100 px-1.5 py-0.5 rounded">
          Enterprise ▾
        </span>
      </div>

      <div className="h-12 w-full mb-2">
        <svg viewBox="0 0 200 60" className="w-full h-full overflow-hidden" preserveAspectRatio="none">
          <path
            d="M 0,50 L 30,40 L 60,10 L 90,45 L 120,15 L 150,40 L 180,20 L 200,50"
            fill="none"
            stroke="#10B981"
            strokeWidth="2.5"
          />
        </svg>
      </div>

      <div className="flex items-center justify-between pt-1.5 border-t border-slate-100">
        <span className="text-sm font-extrabold font-heading text-navy-DEFAULT">
          30,200 Queries
        </span>
        <span className="text-[10px] font-bold text-emerald-500 flex items-center gap-0.5">
          <TrendingUp className="w-3 h-3" /> ↗ 30.6%
        </span>
      </div>
    </div>,
  ];

  return (
    <div className="relative w-full h-full max-h-[calc(100vh-170px)] sm:max-h-[calc(100vh-160px)] min-h-[440px] overflow-hidden flex justify-start items-center pointer-events-auto">
      {/* Seamless Top & Bottom Gradient Edge Mask */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-navy-DEFAULT via-navy-DEFAULT/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-navy-DEFAULT via-navy-DEFAULT/80 to-transparent z-20 pointer-events-none" />

      {/* Single Vertical Column: Triplicated Array for 100% Seamless Circular Loop */}
      <div className="flex flex-col gap-4 animate-marquee-up-circular py-2">
        {allCards}
        {allCards}
        {allCards}
      </div>
    </div>
  );
};
