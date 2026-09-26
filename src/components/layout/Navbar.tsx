'use client';

import React, { useState, useEffect } from 'react';
import { Logo } from '@/components/ui/Logo';
import { Grid, ArrowUpRight, X } from 'lucide-react';

interface NavbarProps {
  onOpenContactModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContactModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // Check scroll position immediately on mount
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Who We Are', href: '#trust-intro' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 py-3 shadow-md'
          : 'bg-transparent py-5 border-b border-white/10'
      }`}
    >
      <div className="max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Left: MENU Trigger & Brand Logo */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`flex items-center gap-2 text-xs font-mono tracking-widest uppercase group transition-colors cursor-pointer ${
                scrolled
                  ? 'text-navy-DEFAULT hover:text-gold-dark'
                  : 'text-white/90 hover:text-gold-light'
              }`}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4 text-gold-DEFAULT" />
              ) : (
                <Grid className="w-4 h-4 text-gold-DEFAULT group-hover:rotate-90 transition-transform duration-300" />
              )}
              <span className="font-semibold">{mobileMenuOpen ? 'CLOSE' : 'MENU'}</span>
            </button>

            <span className={`hidden sm:inline-block font-mono ${scrolled ? 'text-slate-300' : 'text-white/30'}`}>—</span>

            {/* Brand Logo Lockup */}
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')}>
              <Logo variant={scrolled ? 'light' : 'dark'} size="sm" />
            </a>
          </div>

          {/* Center: Inline Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-xs font-mono tracking-widest uppercase font-extrabold transition-colors ${
                  scrolled
                    ? 'text-navy-DEFAULT hover:text-gold-dark'
                    : 'text-slate-200 hover:text-gold-light'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right: START PROJECT Rectangular Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenContactModal || (() => {
                const contactEl = document.getElementById('contact');
                contactEl?.scrollIntoView({ behavior: 'smooth' });
              })}
              className={`relative inline-flex items-center justify-center px-6 py-2.5 text-xs font-mono tracking-widest uppercase rounded-sm transition-all duration-300 shadow-md active:scale-95 cursor-pointer ${
                scrolled
                  ? 'bg-slate-100 hover:bg-gold-gradient border border-slate-300'
                  : 'bg-white hover:bg-gold-gradient border border-white'
              }`}
            >
              <span className="font-black tracking-widest text-navy-DEFAULT">
                START PROJECT
              </span>
            </button>
          </div>

        </div>
      </div>

      {/* Full-Screen Overlay Menu (When Menu Trigger Clicked) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-navy-DEFAULT/98 backdrop-blur-2xl z-40 flex flex-col justify-between p-8 sm:p-12 border-t border-white/10 animate-in fade-in duration-300">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            
            {/* Left Navigation Links */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono tracking-[0.25em] text-gold-DEFAULT uppercase">
                  EXPLORE NAVIGATION
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 text-slate-400 hover:text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {navLinks.map((link, idx) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="flex items-center justify-between text-xl font-bold font-heading text-slate-200 hover:text-gold-light py-2.5 border-b border-white/10 transition-colors group"
                  >
                    <span>{link.name}</span>
                    <span className="text-xs font-mono text-slate-500 group-hover:text-gold-DEFAULT">
                      /0{idx + 1}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Right Contact Quick Access */}
            <div className="flex flex-col justify-between bg-navy-light/60 p-8 rounded-2xl border border-white/10">
              <div>
                <div className="text-xs font-mono tracking-[0.25em] text-gold-DEFAULT uppercase mb-3">
                  DIRECT CONTACT
                </div>
                <h3 className="text-2xl font-bold text-white font-heading mb-4">
                  ANVITECH INDIA PRIVATE LIMITED
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-sans">
                  Ready to engineer your digital future? Reach out to our technology advisors.
                </p>
                <div className="space-y-2 text-xs font-mono text-slate-400">
                  <div>EMAIL: contact@anvitech.in</div>
                  <div>PHONE: +91 (080) 4567 8900</div>
                  <div>LOCATION: Bengaluru, India</div>
                </div>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  const contactEl = document.getElementById('contact');
                  contactEl?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="mt-8 w-full py-4 bg-gold-gradient text-navy-DEFAULT font-extrabold text-xs tracking-widest uppercase rounded shadow-gold-glow flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>INITIATE ENGAGEMENT</span>
                <ArrowUpRight className="w-4 h-4 text-navy-DEFAULT stroke-[2.5]" />
              </button>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
