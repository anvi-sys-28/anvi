'use client';

import React from 'react';
import { X, CheckCircle, ArrowRight, ShieldCheck, PhoneCall } from 'lucide-react';
import { ServiceItem } from '@/components/sections/Services';
import { CaseStudyItem } from '@/components/sections/CaseStudies';

interface ModalsProps {
  activeService: ServiceItem | null;
  onCloseServiceModal: () => void;
  activeCaseStudy: CaseStudyItem | null;
  onCloseCaseStudyModal: () => void;
  discoverModalOpen: boolean;
  onCloseDiscoverModal: () => void;
  careersModalOpen: boolean;
  onCloseCareersModal: () => void;
}

export const Modals: React.FC<ModalsProps> = ({
  activeService,
  onCloseServiceModal,
  activeCaseStudy,
  onCloseCaseStudyModal,
  discoverModalOpen,
  onCloseDiscoverModal,
  careersModalOpen,
  onCloseCareersModal,
}) => {
  return (
    <>
      {/* 1. Service Detail Modal */}
      {activeService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-DEFAULT/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl p-8 sm:p-10 shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] overflow-y-auto">
            {/* Top Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-gold-gradient" />

            <button
              onClick={onCloseServiceModal}
              className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-navy-DEFAULT hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 text-xs font-mono font-bold text-gold-dark uppercase mb-3">
              <span>SERVICE DOMAIN // {activeService.num}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-DEFAULT font-heading mb-4">
              {activeService.title}
            </h3>

            <p className="text-slate-600 text-sm sm:text-base font-sans leading-relaxed mb-6">
              {activeService.fullDesc}
            </p>

            <div className="bg-brand-bg rounded-xl p-6 border border-slate-200/80 mb-8">
              <h4 className="text-xs font-bold text-navy-DEFAULT font-heading uppercase tracking-wider mb-4">
                Core Deliverables & Standards
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeService.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                    <CheckCircle className="w-4 h-4 text-gold-dark shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                onClick={() => {
                  onCloseServiceModal();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-navy-DEFAULT text-white font-bold text-xs sm:text-sm rounded-md shadow-navy-card hover:bg-navy-light transition-all"
              >
                <span>Request Proposal</span>
                <ArrowRight className="w-4 h-4 text-gold-light" />
              </button>

              <span className="text-xs font-mono text-slate-400">ANVITECH SLA GUARANTEED</span>
            </div>
          </div>
        </div>
      )}

      {/* 2. Case Study Detail Modal */}
      {activeCaseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-DEFAULT/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-navy-DEFAULT text-white rounded-2xl p-8 sm:p-10 shadow-2xl border border-navy-border overflow-hidden max-h-[90vh] overflow-y-auto">
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-gold-gradient" />

            <button
              onClick={onCloseCaseStudyModal}
              className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-white hover:bg-navy-light transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="inline-block text-[11px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-navy-light text-gold-light border border-gold-DEFAULT/30 mb-4">
              {activeCaseStudy.industry} CASE STUDY
            </span>

            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mb-6">
              {activeCaseStudy.title}
            </h3>

            <div className="space-y-6 mb-8 text-sm leading-relaxed">
              <div className="bg-navy-light/60 p-5 rounded-xl border border-navy-border">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  THE BUSINESS CHALLENGE
                </div>
                <p className="text-slate-200">{activeCaseStudy.challenge}</p>
              </div>

              <div className="bg-navy-light/60 p-5 rounded-xl border border-navy-border">
                <div className="text-xs font-mono text-gold-light uppercase tracking-wider mb-2">
                  ANVITECH ARCHITECTURE & SOLUTION
                </div>
                <p className="text-slate-200">{activeCaseStudy.solution}</p>
              </div>

              <div className="bg-navy-light/60 p-5 rounded-xl border border-navy-border">
                <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
                  VERIFIED OUTCOME
                </div>
                <p className="text-white font-medium">{activeCaseStudy.outcome}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 bg-navy-dark p-6 rounded-xl border border-white/10 mb-8 text-center">
              {activeCaseStudy.metrics.map((m, i) => (
                <div key={i}>
                  <div className="text-gold-light font-extrabold font-heading text-xl">{m.value}</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">{m.label}</div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-navy-border">
              <button
                onClick={() => {
                  onCloseCaseStudyModal();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 bg-gold-gradient text-navy-DEFAULT font-bold text-xs sm:text-sm rounded-md shadow-gold-glow hover:brightness-110"
              >
                Discuss Similar Requirement
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. Discover ANVITECH Overview Modal */}
      {discoverModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-DEFAULT/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white text-navy-DEFAULT rounded-2xl p-8 sm:p-10 shadow-2xl border border-slate-200 overflow-hidden">
            <button
              onClick={onCloseDiscoverModal}
              className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-navy-DEFAULT transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-extrabold font-heading mb-4 text-navy-DEFAULT">
              ANVITECH INDIA PRIVATE LIMITED
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              We are a next-generation technology engineering partner helping enterprise clients, fast-growing startups, and public sector organizations solve complex challenges through robust software architecture.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 p-3 bg-brand-bg rounded-lg border border-slate-200 text-xs font-semibold">
                <ShieldCheck className="w-5 h-5 text-gold-dark shrink-0" />
                <span>Enterprise Security & Compliance (SOC2 / ISO 27001 Ready)</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-brand-bg rounded-lg border border-slate-200 text-xs font-semibold">
                <CheckCircle className="w-5 h-5 text-gold-dark shrink-0" />
                <span>End-to-End Agile Product Engineering Lifecycle</span>
              </div>
            </div>

            <button
              onClick={() => {
                onCloseDiscoverModal();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full py-3.5 bg-navy-DEFAULT text-white font-bold text-sm rounded-md shadow-navy-card hover:bg-navy-light"
            >
              Connect With Executive Leadership
            </button>
          </div>
        </div>
      )}

      {/* 4. Careers Network Modal */}
      {careersModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-DEFAULT/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-navy-DEFAULT text-white rounded-2xl p-8 shadow-2xl border border-navy-border">
            <button
              onClick={onCloseCareersModal}
              className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold font-heading mb-2 text-white">Join ANVITECH Talent Pool</h3>
            <p className="text-xs text-slate-300 mb-6">
              Send your profile link or portfolio to our engineering talent acquisition team.
            </p>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-400 mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-navy-light border border-navy-border text-white rounded p-2.5 outline-none"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-1">LinkedIn / GitHub Profile URL</label>
                <input
                  type="url"
                  placeholder="https://linkedin.com/in/..."
                  className="w-full bg-navy-light border border-navy-border text-white rounded p-2.5 outline-none"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-1">Primary Role / Specialization</label>
                <input
                  type="text"
                  placeholder="e.g. Senior Full-Stack Engineer"
                  className="w-full bg-navy-light border border-navy-border text-white rounded p-2.5 outline-none"
                />
              </div>

              <button
                onClick={() => {
                  alert('Thank you! Your details have been submitted to careers@anvitech.in');
                  onCloseCareersModal();
                }}
                className="w-full py-3 bg-gold-gradient text-navy-DEFAULT font-bold rounded-md shadow-gold-glow"
              >
                Submit Application
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
