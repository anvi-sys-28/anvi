'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
import { Grid, ArrowUpRight, X, ChevronDown, Sun, Moon, Sparkles, Layers, ShieldCheck, Cpu, Code, Cloud } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { servicesList } from '@/lib/servicesData';

interface NavbarProps {
  onOpenContactModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContactModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceIcons = [Code, Layers, Cpu, Cloud, ShieldCheck, Sparkles];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    if (href.startsWith('#')) {
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });
      }
    }
  };

  const handleStartProjectClick = () => {
    setMobileMenuOpen(false);
    if (onOpenContactModal) {
      onOpenContactModal();
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        const offsetTop = contactEl.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled || theme === 'light'
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 py-3 shadow-md text-slate-900'
          : 'bg-navy-DEFAULT/90 backdrop-blur-md py-4 border-b border-white/10 text-white'
      }`}
    >
      <div className="max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between gap-4">
          
          {/* Left: MENU Trigger & Brand Logo */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`flex items-center gap-2 text-xs font-mono tracking-widest uppercase group transition-colors cursor-pointer ${
                scrolled || theme === 'light'
                  ? 'text-navy-DEFAULT hover:text-orange-600'
                  : 'text-white/90 hover:text-orange-400'
              }`}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4 text-orange-500" />
              ) : (
                <Grid className="w-4 h-4 text-orange-500 group-hover:rotate-90 transition-transform duration-300" />
              )}
              <span className="font-semibold">{mobileMenuOpen ? 'CLOSE' : 'MENU'}</span>
            </button>

            <span className={`hidden sm:inline-block font-mono ${scrolled || theme === 'light' ? 'text-slate-300' : 'text-white/30'}`}>—</span>

            {/* Brand Logo Lockup */}
            <Link href="/" className="flex items-center gap-2">
              <Logo variant={scrolled || theme === 'light' ? 'light' : 'dark'} size="sm" />
            </Link>
          </div>

          {/* Center: Inline Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-mono tracking-widest uppercase font-extrabold">
            <Link
              href="/"
              className={`transition-colors ${
                scrolled || theme === 'light' ? 'text-navy-DEFAULT hover:text-orange-600' : 'text-slate-200 hover:text-orange-400'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link
                href="/services"
                className={`flex items-center gap-1 transition-colors py-2 ${
                  scrolled || theme === 'light' ? 'text-navy-DEFAULT hover:text-orange-600' : 'text-slate-200 hover:text-orange-400'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-orange-500' : ''}`} />
              </Link>

              {/* Dropdown Card */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-[540px] bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 grid grid-cols-2 gap-3 text-slate-900 normal-case tracking-normal z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="col-span-2 pb-2 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold tracking-widest text-orange-600 uppercase">
                      CORPORATE SERVICES
                    </span>
                    <Link
                      href="/services"
                      onClick={() => setServicesDropdownOpen(false)}
                      className="text-xs font-bold text-navy-DEFAULT hover:text-orange-600 flex items-center gap-1"
                    >
                      <span>View All</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-orange-500" />
                    </Link>
                  </div>

                  {servicesList.map((service, idx) => {
                    const IconComp = serviceIcons[idx % serviceIcons.length];
                    return (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        onClick={() => setServicesDropdownOpen(false)}
                        className="group flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-orange-50 transition-colors border border-transparent hover:border-orange-200/60"
                      >
                        <div className="w-7 h-7 rounded-lg bg-navy-DEFAULT/5 text-navy-DEFAULT group-hover:bg-orange-500 group-hover:text-white flex items-center justify-center shrink-0 transition-colors mt-0.5">
                          <IconComp className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover:text-orange-600 transition-colors leading-snug">
                            {service.title}
                          </div>
                          <div className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">
                            {service.subtitle}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <a
              href="#trust-intro"
              onClick={(e) => { e.preventDefault(); handleNavClick('#trust-intro'); }}
              className={`transition-colors ${
                scrolled || theme === 'light' ? 'text-navy-DEFAULT hover:text-orange-600' : 'text-slate-200 hover:text-orange-400'
              }`}
            >
              Who We Are
            </a>

            <Link
              href="/services"
              className={`transition-colors ${
                scrolled || theme === 'light' ? 'text-navy-DEFAULT hover:text-orange-600' : 'text-slate-200 hover:text-orange-400'
              }`}
            >
              Portfolio
            </Link>

            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              className={`transition-colors ${
                scrolled || theme === 'light' ? 'text-navy-DEFAULT hover:text-orange-600' : 'text-slate-200 hover:text-orange-400'
              }`}
            >
              Contact
            </a>
          </nav>

          {/* Right: Theme Switcher + Restored Original START PROJECT Button */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors cursor-pointer ${
                scrolled || theme === 'light'
                  ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  : 'bg-white/10 text-amber-400 hover:bg-white/20'
              }`}
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Theme`}
              aria-label="Switch Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Original START PROJECT Rectangular Button */}
            <button
              type="button"
              onClick={handleStartProjectClick}
              className={`relative inline-flex items-center justify-center px-6 py-2.5 text-xs font-mono tracking-widest uppercase rounded-sm transition-all duration-300 shadow-md active:scale-95 cursor-pointer border ${
                scrolled || theme === 'light'
                  ? 'bg-navy-DEFAULT text-white hover:bg-orange-600 border-navy-DEFAULT'
                  : 'bg-white text-navy-DEFAULT hover:bg-orange-500 hover:text-white border-white font-black'
              }`}
            >
              <span className="font-black tracking-widest">
                START PROJECT
              </span>
            </button>
          </div>

        </div>
      </div>

      {/* Full-Screen Blur Overlay Menu (Restored Original Blur Overlay & Clean Structure) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-navy-DEFAULT/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-12 overflow-y-auto animate-in fade-in duration-300 text-white">
          <div className="max-w-7xl mx-auto w-full">
            
            {/* Top Bar inside Full Overlay */}
            <div className="flex items-center justify-between pb-8 border-b border-white/10">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <Logo variant="dark" size="sm" />
              </Link>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-white/90 hover:text-orange-400 cursor-pointer bg-white/10 px-4 py-2 rounded-full border border-white/10 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-4 h-4 text-orange-400" />
                <span className="font-semibold">CLOSE</span>
              </button>
            </div>

            {/* Overlay Body Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-8">
              
              {/* Left Column: Navigation Links */}
              <div className="flex flex-col gap-2">
                <div className="text-xs font-mono tracking-[0.25em] text-orange-400 uppercase mb-4 font-bold">
                  NAVIGATION
                </div>
                {[
                  { name: 'Home', href: '/' },
                  { name: 'Services', href: '/services' },
                  { name: 'Who We Are', href: '#trust-intro' },
                  { name: 'Portfolio', href: '/services' },
                  { name: 'Contact', href: '#contact' },
                ].map((link, idx) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      if (link.href.startsWith('#')) {
                        const el = document.getElementById(link.href.replace('#', ''));
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="flex items-center justify-between text-xl sm:text-2xl font-bold font-heading text-slate-100 hover:text-orange-400 py-3.5 border-b border-white/10 transition-colors group"
                  >
                    <span>{link.name}</span>
                    <span className="text-xs font-mono text-slate-500 group-hover:text-orange-400">
                      /0{idx + 1}
                    </span>
                  </Link>
                ))}
              </div>

              {/* Right Column: Direct Contact Info Card */}
              <div className="flex flex-col justify-between bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-md">
                <div>
                  <div className="text-xs font-mono tracking-[0.25em] text-orange-400 uppercase mb-3 font-bold">
                    DIRECT CONTACT
                  </div>
                  <h3 className="text-2xl font-bold text-white font-heading mb-4">
                    ANVITECH INDIA PRIVATE LIMITED
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-sans">
                    Ready to engineer your digital future? Reach out to our technology advisors today.
                  </p>
                  <div className="space-y-3 text-xs font-mono text-slate-300">
                    <div className="flex items-center gap-2">
                      <span className="text-orange-400 font-bold">EMAIL:</span> contact@anvitech.in
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-orange-400 font-bold">PHONE:</span> +91 (080) 4567 8900
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-orange-400 font-bold">LOCATION:</span> Bengaluru, India
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleStartProjectClick}
                  className="mt-8 w-full py-4 bg-orange-600 hover:bg-orange-700 text-white font-mono font-extrabold text-xs tracking-widest uppercase rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>START PROJECT</span>
                  <ArrowUpRight className="w-4 h-4 text-white stroke-[2.5]" />
                </button>
              </div>

            </div>

          </div>
        </div>
      )}
    </header>
  );
};
