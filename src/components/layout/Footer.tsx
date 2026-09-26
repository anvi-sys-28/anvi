'use client';

import React from 'react';
import { Logo } from '@/components/ui/Logo';
import { ArrowUp, ArrowUpRight, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-dark text-slate-400 border-t border-navy-border/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-navy-border/60">
          
          {/* Brand Overview Column */}
          <div className="lg:col-span-2 space-y-6">
            <Logo variant="dark" size="md" />
            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed max-w-sm">
              <strong className="text-white">ANVITECH INDIA PRIVATE LIMITED</strong> is an enterprise technology firm engineered to deliver scalable software, intelligent automation, cloud architectures, and digital transformation solutions.
            </p>


          </div>

          {/* Column 1: Company */}
          <div>
            <h4 className="text-xs font-bold font-heading text-white uppercase tracking-wider mb-4 border-l-2 border-gold-DEFAULT pl-2">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs font-sans">
              <li>
                <a href="#about" className="hover:text-gold-light transition-colors">About ANVITECH</a>
              </li>
              <li>
                <a href="#about" className="hover:text-gold-light transition-colors">Leadership & Governance</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold-light transition-colors">Careers & Talent</a>
              </li>
              <li>
                <a href="#insights" className="hover:text-gold-light transition-colors">Case Insights</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold-light transition-colors">Contact Enterprise Team</a>
              </li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-xs font-bold font-heading text-white uppercase tracking-wider mb-4 border-l-2 border-gold-DEFAULT pl-2">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs font-sans">
              <li>
                <a href="#services" className="hover:text-gold-light transition-colors">Software Development</a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-light transition-colors">AI & Automation</a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-light transition-colors">Cloud & DevOps</a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-light transition-colors">Cybersecurity Systems</a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-light transition-colors">Data & Analytics</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Industries & Legal */}
          <div>
            <h4 className="text-xs font-bold font-heading text-white uppercase tracking-wider mb-4 border-l-2 border-gold-DEFAULT pl-2">
              Industries & Legal
            </h4>
            <ul className="space-y-2.5 text-xs font-sans mb-6">
              <li>
                <a href="#industries" className="hover:text-gold-light transition-colors">Healthcare & Life Sciences</a>
              </li>
              <li>
                <a href="#industries" className="hover:text-gold-light transition-colors">Finance & Banking</a>
              </li>
              <li>
                <a href="#industries" className="hover:text-gold-light transition-colors">Logistics & Industry 4.0</a>
              </li>
            </ul>
            
            <div className="pt-2 border-t border-navy-border/40 space-y-2 text-[11px]">
              <a href="#privacy" className="block hover:text-white transition-colors">Privacy Policy</a>
              <a href="#terms" className="block hover:text-white transition-colors">Terms of Service</a>
              <a href="#cookies" className="block hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-4">
          <div>
            © 2026 ANVITECH INDIA PRIVATE LIMITED. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>REGISTERED CORPORATE ENTITY</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-navy-light text-gold-light hover:bg-gold-gradient hover:text-navy-DEFAULT transition-all duration-200"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
