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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || theme === 'light'
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 py-3 shadow-md text-slate-900'
          : 'bg-navy-DEFAULT/90 backdrop-blur-md py-4 border-b border-white/10 text-white'
      }`}
    >
      <div className="max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between gap-4">
          
          {/* Left: Brand Logo & Menu Trigger */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`flex items-center gap-2 text-xs font-mono tracking-widest uppercase group transition-colors cursor-pointer ${
                scrolled || theme === 'light'
                  ? 'text-navy-DEFAULT hover:text-orange-600'
                  : 'text-white/90 hover:text-gold-light'
              }`}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4 text-orange-500" />
              ) : (
                <Grid className="w-4 h-4 text-orange-500 group-hover:rotate-90 transition-transform duration-300" />
              )}
              <span className="font-semibold hidden sm:inline">{mobileMenuOpen ? 'CLOSE' : 'MENU'}</span>
            </button>

            <span className={`hidden sm:inline-block font-mono ${scrolled || theme === 'light' ? 'text-slate-300' : 'text-white/30'}`}>—</span>

            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Logo variant={scrolled || theme === 'light' ? 'light' : 'dark'} size="sm" />
            </Link>
          </div>

          {/* Center: Inline Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-medium font-sans">
            <Link
              href="/"
              className={`transition-colors hover:text-orange-500 font-semibold ${
                scrolled || theme === 'light' ? 'text-slate-800' : 'text-slate-200'
              }`}
            >
              Home
            </Link>

            {/* SERVICES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1 transition-colors hover:text-orange-500 font-semibold cursor-pointer py-2 ${
                  scrolled || theme === 'light' ? 'text-slate-800' : 'text-slate-200'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-orange-500' : ''}`} />
              </button>

              {/* Dropdown Menu List */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-[580px] bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-5 grid grid-cols-2 gap-3 animate-in fade-in slide-in-from-top-2 duration-200 text-slate-900">
                  <div className="col-span-2 pb-2 mb-1 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold tracking-widest text-orange-600 uppercase">
                      CORPORATE SERVICE PORTFOLIO
                    </span>
                    <Link
                      href="/services"
                      onClick={() => setServicesDropdownOpen(false)}
                      className="text-xs font-bold text-navy-DEFAULT hover:text-orange-600 flex items-center gap-1"
                    >
                      <span>View All Portfolio</span>
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
                        className="group flex items-start gap-3 p-3 rounded-xl hover:bg-orange-50/80 transition-all border border-transparent hover:border-orange-200/60"
                      >
                        <div className="w-8 h-8 rounded-lg bg-navy-DEFAULT/5 text-navy-DEFAULT group-hover:bg-orange-500 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover:text-orange-600 transition-colors leading-snug">
                            {service.title}
                          </div>
                          <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
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
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              className={`transition-colors hover:text-orange-500 font-semibold ${
                scrolled || theme === 'light' ? 'text-slate-800' : 'text-slate-200'
              }`}
            >
              About Us
            </a>

            <Link
              href="/services"
              className={`transition-colors hover:text-orange-500 font-semibold ${
                scrolled || theme === 'light' ? 'text-slate-800' : 'text-slate-200'
              }`}
            >
              Portfolio
            </Link>

            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              className={`transition-colors hover:text-orange-500 font-semibold ${
                scrolled || theme === 'light' ? 'text-slate-800' : 'text-slate-200'
              }`}
            >
              Contact
            </a>
          </nav>

          {/* Right: Theme Switcher + Login / Contact / Consultation Buttons (Matching screenshot) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors cursor-pointer ${
                scrolled || theme === 'light'
                  ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  : 'bg-white/10 text-gold-light hover:bg-white/20'
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

            {/* Login Button */}
            <button
              type="button"
              onClick={onOpenContactModal || (() => handleNavClick('#contact'))}
              className={`hidden sm:inline-flex items-center px-4 py-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                scrolled || theme === 'light'
                  ? 'border-slate-300 text-slate-800 hover:bg-slate-100'
                  : 'border-white/20 text-white hover:bg-white/10'
              }`}
            >
              Login
            </button>

            {/* Contact Us Button */}
            <button
              type="button"
              onClick={onOpenContactModal || (() => handleNavClick('#contact'))}
              className={`hidden md:inline-flex items-center px-4 py-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                scrolled || theme === 'light'
                  ? 'border-navy-DEFAULT text-navy-DEFAULT hover:bg-navy-DEFAULT hover:text-white'
                  : 'border-gold-DEFAULT text-gold-light hover:bg-gold-DEFAULT hover:text-navy-DEFAULT'
              }`}
            >
              Contact Us
            </button>

            {/* Free Consultation Button (Orange Action Button) */}
            <button
              type="button"
              onClick={onOpenContactModal || (() => handleNavClick('#contact'))}
              className="inline-flex items-center px-4 py-2 text-xs font-bold text-white bg-orange-600 hover:bg-orange-700 rounded-lg shadow-md hover:shadow-orange-500/20 transition-all cursor-pointer whitespace-nowrap"
            >
              Free Consultation
            </button>
          </div>

        </div>
      </div>

      {/* Full-Screen Overlay Menu (Mobile) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-navy-DEFAULT/98 backdrop-blur-2xl z-40 flex flex-col justify-between p-6 sm:p-10 border-t border-white/10 animate-in fade-in duration-200">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 gap-6 pt-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono tracking-widest text-orange-500 uppercase">
                PORTFOLIO & NAVIGATION
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-3 max-h-[60vh] overflow-y-auto">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-bold text-white py-2 border-b border-white/10"
              >
                Home
              </Link>
              <div className="text-xs font-mono font-bold text-gold-light uppercase pt-2">
                Services Portfolio
              </div>
              {servicesList.map((srv) => (
                <Link
                  key={srv.slug}
                  href={`/services/${srv.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold text-slate-300 hover:text-orange-400 py-1.5 pl-3 border-l-2 border-orange-500"
                >
                  {srv.title}
                </Link>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  const contactEl = document.getElementById('contact');
                  contactEl?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-3 bg-orange-600 text-white font-bold text-xs tracking-wider uppercase rounded-lg shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Free Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
