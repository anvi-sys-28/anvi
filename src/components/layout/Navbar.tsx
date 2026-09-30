'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/ui/Logo';
import { Grid, ArrowUpRight, X, ChevronDown, Sun, Moon } from 'lucide-react';
import { servicesList } from '@/lib/servicesData';
import { useTheme } from '@/context/ThemeContext';

interface NavbarProps {
  onOpenContactModal?: () => void;
}

interface CategoryOffering {
  title: string;
  desc: string;
  slug: string;
}

interface MegaCategory {
  id: string;
  name: string;
  overviewDesc: string;
  offerings: CategoryOffering[];
  features: string[];
}

const megaCategories: MegaCategory[] = [
  {
    id: 'custom-software',
    name: 'Custom Software & ERP',
    overviewDesc: 'Establish your enterprise software entity legally and operationalize custom multi-branch ERP, CRM, HRMS, and DMS platforms.',
    features: [
      'Multi-branch ERP & CRM synchronization',
      '100% online cloud architecture',
      'Dedicated Solution Architect support',
    ],
    offerings: [
      {
        title: 'Custom Enterprise ERP Development',
        desc: 'Centralized ERP for inventory, multi-branch tracking & workflows.',
        slug: 'custom-software-enterprise-erp-development',
      },
      {
        title: 'CRM & Customer Pipeline Management',
        desc: 'Lead tracking, automated quotation & customer lifecycle portal.',
        slug: 'custom-software-enterprise-erp-development',
      },
      {
        title: 'HRMS & Payroll Automation',
        desc: 'Automated attendance, biometric sync & salary slip generator.',
        slug: 'custom-software-enterprise-erp-development',
      },
      {
        title: 'Document Management System (DMS)',
        desc: 'Centralized secure vault with role-based access & audit trail.',
        slug: 'custom-software-enterprise-erp-development',
      },
      {
        title: 'Business Intelligence Dashboards',
        desc: 'Interactive executive reporting, KPI charts & analytics.',
        slug: 'custom-software-enterprise-erp-development',
      },
      {
        title: 'Workflow & Process Automation',
        desc: 'Custom trigger-based rule engine & operational task routing.',
        slug: 'custom-software-enterprise-erp-development',
      },
    ],
  },
  {
    id: 'web-mobile',
    name: 'Web & Mobile Engineering',
    overviewDesc: 'Native iOS, Android, and high-speed Next.js web applications designed for scale and sub-second performance.',
    features: [
      'iOS & Android native / React Native apps',
      'High-speed Next.js PWA frontend',
      'Store submission (App Store & Play Store)',
    ],
    offerings: [
      {
        title: 'iOS & Android Native Mobile Apps',
        desc: 'High-performance mobile apps built with React Native & Flutter.',
        slug: 'web-mobile-application-engineering',
      },
      {
        title: 'Progressive Web Applications (PWA)',
        desc: 'Sub-second web portals operating seamlessly offline.',
        slug: 'web-mobile-application-engineering',
      },
      {
        title: 'Multi-Vendor E-commerce Marketplaces',
        desc: 'Vendor management, payment gateway & inventory sync.',
        slug: 'web-mobile-application-engineering',
      },
      {
        title: 'Point of Sale (POS) Web Systems',
        desc: 'Cloud POS for retail outlets, restaurants & supermarkets.',
        slug: 'web-mobile-application-engineering',
      },
      {
        title: 'Hospitality & Resort Booking Apps',
        desc: 'Reservation engine, room management & guest portals.',
        slug: 'web-mobile-application-engineering',
      },
      {
        title: 'SaaS Multi-Tenant Platforms',
        desc: 'Scalable subscription software with stripe integration.',
        slug: 'web-mobile-application-engineering',
      },
    ],
  },
  {
    id: 'ai-automation',
    name: 'AI & Intelligent Automation',
    overviewDesc: 'Autonomous AI agents, 24/7 chatbots, OCR document processors, and predictive algorithms trained on your data.',
    features: [
      '24/7 AI Voice & Chatbots',
      'RPA invoice & document OCR extraction',
      'Predictive analytics & sales forecasting',
    ],
    offerings: [
      {
        title: '24/7 AI Chatbots & Voice Assistants',
        desc: 'Intelligent customer support & automated lead qualification.',
        slug: 'ai-solutions-chatbots-intelligent-automation',
      },
      {
        title: 'Robotic Process Automation (RPA)',
        desc: 'Automated data entry, email processing & web scraping.',
        slug: 'ai-solutions-chatbots-intelligent-automation',
      },
      {
        title: 'Intelligent Document Processing (OCR)',
        desc: 'Automated data extraction from invoices, receipts & contracts.',
        slug: 'ai-solutions-chatbots-intelligent-automation',
      },
      {
        title: 'Predictive Demand & Harvest Analytics',
        desc: 'Machine learning forecast models for sales & agriculture.',
        slug: 'ai-solutions-chatbots-intelligent-automation',
      },
      {
        title: 'Autonomous Multi-Agent Systems',
        desc: 'Coordinating AI agents performing complex business tasks.',
        slug: 'ai-solutions-chatbots-intelligent-automation',
      },
      {
        title: 'IoT Ecosystem Dashboards',
        desc: 'Smart factory, fleet tracking & sensor monitoring portals.',
        slug: 'ai-solutions-chatbots-intelligent-automation',
      },
    ],
  },
  {
    id: 'cloud-devops',
    name: 'Cloud Infrastructure & DevOps',
    overviewDesc: 'Resilient cloud management on AWS, Azure, GCP with Kubernetes, Terraform IaC, and 99.99% uptime guarantees.',
    features: [
      'AWS / Azure / GCP Cloud Migration',
      'Automated Kubernetes & Docker CI/CD',
      '99.99% Uptime & Disaster Recovery',
    ],
    offerings: [
      {
        title: 'AWS, Azure & GCP Cloud Migration',
        desc: 'Zero data-loss server migration & cloud architecture setup.',
        slug: 'cloud-infrastructure-migration-devops',
      },
      {
        title: 'Kubernetes Container Orchestration',
        desc: 'Docker container deployment & automated cluster scaling.',
        slug: 'cloud-infrastructure-migration-devops',
      },
      {
        title: 'Automated CI/CD Deployment Pipelines',
        desc: 'GitHub Actions, GitLab & Jenkins automated release pipelines.',
        slug: 'cloud-infrastructure-migration-devops',
      },
      {
        title: 'Disaster Recovery & Backup Automation',
        desc: 'Real-time database replication & automated failover.',
        slug: 'cloud-infrastructure-migration-devops',
      },
    ],
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity & SOC',
    overviewDesc: 'Protect your enterprise software with Zero Trust architecture, SIEM threat monitoring dashboards, and vulnerability audits.',
    features: [
      'Zero Trust Security Architecture',
      'Penetration testing & OWASP audits',
      '24/7 SIEM Threat SOC Dashboard',
    ],
    offerings: [
      {
        title: 'Zero Trust Security Architecture',
        desc: 'Role-based access control, IAM & data encryption at rest.',
        slug: 'cybersecurity-threat-monitoring-soc',
      },
      {
        title: 'Vulnerability Assessment & Pen-Testing',
        desc: 'Proactive OWASP Top 10 security audits & remediation.',
        slug: 'cybersecurity-threat-monitoring-soc',
      },
      {
        title: '24/7 SIEM SOC Threat Monitoring',
        desc: 'Real-time threat detection, anomaly logs & incident response.',
        slug: 'cybersecurity-threat-monitoring-soc',
      },
      {
        title: 'Compliance Readiness (ISO 27001 / SOC2)',
        desc: 'Security documentation & regulatory audit evidence.',
        slug: 'cybersecurity-threat-monitoring-soc',
      },
    ],
  },
  {
    id: 'support-amc',
    name: 'Support & AMC Maintenance',
    overviewDesc: 'Annual Maintenance Contracts (AMC), 24/7 SLA technical support, continuous security patching, and system updates.',
    features: [
      'Annual Maintenance Contracts (AMC)',
      '24/7 SLA technical support desk',
      'Monthly health & backup verification',
    ],
    offerings: [
      {
        title: 'Annual Maintenance Contracts (AMC)',
        desc: 'Fixed-cost ongoing technical support & emergency bug fixes.',
        slug: 'software-support-amc-managed-maintenance',
      },
      {
        title: '24/7 SLA Technical Support Desk',
        desc: 'Round-the-clock developer response for mission-critical apps.',
        slug: 'software-support-amc-managed-maintenance',
      },
      {
        title: 'Continuous Performance Optimization',
        desc: 'Database query tuning, server patching & speed upgrades.',
        slug: 'software-support-amc-managed-maintenance',
      },
      {
        title: 'Managed Server & Cloud Maintenance',
        desc: 'Proactive resource scaling & security updates.',
        slug: 'software-support-amc-managed-maintenance',
      },
    ],
  },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenContactModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [activeOverlayTab, setActiveOverlayTab] = useState<'default' | 'solutions'>('solutions');
  
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const isServicesPage = pathname?.startsWith('/services');
  const isLightHeader = scrolled || isServicesPage;

  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnterDropdown = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setSolutionsDropdownOpen(true);
  };

  const handleMouseLeaveDropdown = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setSolutionsDropdownOpen(false);
    }, 250);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);
    setSolutionsDropdownOpen(false);
    if (href.startsWith('#') || href.startsWith('/#')) {
      const targetId = href.replace('/#', '').replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        e.preventDefault();
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });
      }
    }
  };

  const activeCategory = megaCategories[activeCategoryIndex];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 py-3 shadow-md'
          : isServicesPage
          ? 'bg-[#FFDEAD]/90 backdrop-blur-md py-4 border-b border-[#f3cb98]'
          : 'bg-transparent py-5 border-b border-white/10'
      }`}
    >
      <div className="max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Left: MENU Trigger & Brand Logo */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                setActiveOverlayTab('solutions');
              }}
              className={`flex items-center gap-2 text-xs font-mono tracking-widest uppercase group transition-colors cursor-pointer ${
                isLightHeader
                  ? 'text-slate-900 font-bold hover:text-orange-600'
                  : 'text-white/90 hover:text-gold-light'
              }`}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className={`w-4 h-4 ${isLightHeader ? 'text-orange-600' : 'text-gold-DEFAULT'}`} />
              ) : (
                <Grid className={`w-4 h-4 ${isLightHeader ? 'text-orange-600' : 'text-gold-DEFAULT'} group-hover:rotate-90 transition-transform duration-300`} />
              )}
              <span className="font-semibold">{mobileMenuOpen ? 'CLOSE' : 'MENU'}</span>
            </button>

            <span className={`hidden sm:inline-block font-mono ${isLightHeader ? 'text-slate-400' : 'text-white/30'}`}>—</span>

            {/* Brand Logo Lockup */}
            <Link href="/" onClick={(e) => handleNavClick(e, '/#home')}>
              <Logo variant={isLightHeader ? 'light' : 'dark'} size="sm" />
            </Link>
          </div>

          {/* Center: Inline Desktop Navigation Links (Black/Dark Navy on Services Page) */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="/#home"
              onClick={(e) => handleNavClick(e, '/#home')}
              className={`text-xs font-mono tracking-widest uppercase font-extrabold transition-colors ${
                isLightHeader ? 'text-slate-900 hover:text-orange-600' : 'text-slate-200 hover:text-gold-light'
              }`}
            >
              Home
            </a>

            {/* MEGA DROPDOWN TRIGGER: SOLUTIONS */}
            <div
              className="relative py-2"
              onMouseEnter={handleMouseEnterDropdown}
              onMouseLeave={handleMouseLeaveDropdown}
            >
              <Link
                href="/services"
                className={`flex items-center gap-1.5 text-xs font-mono tracking-widest uppercase font-extrabold transition-colors ${
                  isLightHeader ? 'text-slate-900 hover:text-orange-600' : 'text-slate-200 hover:text-gold-light'
                }`}
              >
                <span>Solutions</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${solutionsDropdownOpen ? 'rotate-180 text-orange-600' : isLightHeader ? 'text-slate-900' : 'text-gold-DEFAULT'}`} />
              </Link>
            </div>

            <a
              href="/#trust-intro"
              onClick={(e) => handleNavClick(e, '/#trust-intro')}
              className={`text-xs font-mono tracking-widest uppercase font-extrabold transition-colors ${
                isLightHeader ? 'text-slate-900 hover:text-orange-600' : 'text-slate-200 hover:text-gold-light'
              }`}
            >
              Who We Are
            </a>

            <a
              href="/#about"
              onClick={(e) => handleNavClick(e, '/#about')}
              className={`text-xs font-mono tracking-widest uppercase font-extrabold transition-colors ${
                isLightHeader ? 'text-slate-900 hover:text-orange-600' : 'text-slate-200 hover:text-gold-light'
              }`}
            >
              About Us
            </a>

            <a
              href="/#contact"
              onClick={(e) => handleNavClick(e, '/#contact')}
              className={`text-xs font-mono tracking-widest uppercase font-extrabold transition-colors ${
                isLightHeader ? 'text-slate-900 hover:text-orange-600' : 'text-slate-200 hover:text-gold-light'
              }`}
            >
              Contact
            </a>
          </nav>

          {/* Right: Theme Toggle & START PROJECT Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Light / Dark Theme"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className={`p-2.5 rounded-lg transition-all duration-300 flex items-center justify-center border cursor-pointer active:scale-95 ${
                isLightHeader
                  ? 'border-slate-300 bg-slate-100 hover:bg-slate-200 text-slate-900 shadow-sm'
                  : 'border-white/20 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm'
              }`}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 fill-amber-400 animate-in fade-in zoom-in duration-200" />
              ) : (
                <Moon className="w-4 h-4 text-slate-800 fill-slate-800 animate-in fade-in zoom-in duration-200" />
              )}
            </button>

            <button
              onClick={onOpenContactModal || (() => {
                const contactEl = document.getElementById('contact');
                contactEl?.scrollIntoView({ behavior: 'smooth' });
              })}
              className={`relative inline-flex items-center justify-center px-6 py-2.5 text-xs font-mono tracking-widest uppercase rounded-sm transition-all duration-300 shadow-md active:scale-95 cursor-pointer ${
                isLightHeader
                  ? 'bg-slate-900 text-white hover:bg-orange-600 border border-slate-900'
                  : 'bg-white hover:bg-gold-gradient border border-white'
              }`}
            >
              <span className={`font-black tracking-widest ${isLightHeader ? 'text-white' : 'text-navy-DEFAULT'}`}>
                START PROJECT
              </span>
            </button>
          </div>

        </div>
      </div>

      {/* 1. BACKDROP BLUR WHEN CURSOR HOVERS SOLUTIONS */}
      {solutionsDropdownOpen && (
        <div
          className="fixed inset-0 top-[65px] bg-black/40 backdrop-blur-md z-40 animate-in fade-in duration-200"
          onMouseEnter={handleMouseEnterDropdown}
          onMouseLeave={handleMouseLeaveDropdown}
        />
      )}

      {/* 2. MEGA DROPDOWN MENU */}
      {solutionsDropdownOpen && (
        <div
          onMouseEnter={handleMouseEnterDropdown}
          onMouseLeave={handleMouseLeaveDropdown}
          className="fixed top-[75px] left-1/2 -translate-x-1/2 z-50 w-[1240px] max-w-[95vw] bg-white rounded-3xl shadow-2xl border border-slate-200/90 p-8 text-slate-900 animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="flex gap-8 items-stretch">
            
            {/* Column 1: CATEGORIES (Left Pill List) */}
            <div className="w-[270px] shrink-0 border-r border-slate-100 pr-6 space-y-1.5">
              <span className="text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase block mb-3">
                CATEGORIES
              </span>
              {megaCategories.map((cat, idx) => {
                const isActive = activeCategoryIndex === idx;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onMouseEnter={() => setActiveCategoryIndex(idx)}
                    onClick={() => setActiveCategoryIndex(idx)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-xs font-semibold transition-all flex items-center justify-between cursor-pointer ${
                      isActive
                        ? 'bg-blue-50 text-[#0a2540] font-bold border border-blue-200/80 shadow-sm'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 border border-transparent'
                    }`}
                  >
                    <span>{cat.name}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />}
                  </button>
                );
              })}
            </div>

            {/* Column 2: CATEGORY OFFERINGS (Center 2-Column Grid) */}
            <div className="flex-1 px-4 space-y-4">
              <span className="text-[11px] font-mono font-bold tracking-widest text-blue-600 uppercase block mb-3">
                {activeCategory.name.toUpperCase()} OFFERINGS
              </span>

              <div className="grid grid-cols-2 gap-x-6 gap-y-4 max-h-[380px] overflow-y-auto pr-2">
                {activeCategory.offerings.map((offering) => (
                  <Link
                    key={offering.title}
                    href={`/services/${offering.slug}`}
                    onClick={() => setSolutionsDropdownOpen(false)}
                    className="group block p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200"
                  >
                    <div className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                      {offering.title}
                    </div>
                    <div className="text-[11px] text-slate-400 leading-relaxed mt-1 font-sans line-clamp-2">
                      {offering.desc}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 3: CATEGORY OVERVIEW & PREVIEW IMAGE (Right Column) */}
            <div className="w-[310px] shrink-0 bg-slate-50/80 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase block mb-2">
                  CATEGORY OVERVIEW
                </span>
                <h4 className="text-sm font-bold text-slate-900 font-heading mb-2">
                  {activeCategory.name}
                </h4>
                <p className="text-[11px] text-slate-500 leading-relaxed mb-4 font-sans">
                  {activeCategory.overviewDesc}
                </p>

                {/* Generated Preview Graphic */}
                <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm mb-4 bg-white">
                  <img
                    src="/images/software_dev_preview.jpg"
                    alt={`${activeCategory.name} Preview`}
                    className="w-full h-[130px] object-cover"
                  />
                </div>

                <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase block mb-2">
                  CATEGORY FEATURES
                </span>
                <ul className="space-y-1.5 text-[11px] text-slate-600 font-medium">
                  {activeCategory.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Full-Screen Overlay Menu (When Menu Trigger Clicked) */}
      {mobileMenuOpen && (
        <div 
          style={{ backgroundColor: '#070c14' }}
          className="fixed inset-0 top-[60px] z-[100] flex flex-col justify-between p-8 sm:p-12 border-t border-white/10 animate-in fade-in duration-300 text-white"
        >
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 pt-6">
            
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
                <a
                  href="/#home"
                  onClick={(e) => handleNavClick(e, '/#home')}
                  onMouseEnter={() => setActiveOverlayTab('default')}
                  className="flex items-center justify-between text-xl font-bold font-heading text-slate-200 hover:text-gold-light py-2.5 border-b border-white/10 transition-colors group"
                >
                  <span>Home</span>
                  <span className="text-xs font-mono text-slate-500 group-hover:text-gold-DEFAULT">/01</span>
                </a>

                <Link
                  href="/services"
                  onMouseEnter={() => setActiveOverlayTab('solutions')}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between text-xl font-bold font-heading py-2.5 border-b border-white/10 transition-colors group ${
                    activeOverlayTab === 'solutions' ? 'text-gold-DEFAULT border-gold-DEFAULT' : 'text-slate-200 hover:text-gold-light'
                  }`}
                >
                  <span>Solutions</span>
                  <span className="text-xs font-mono text-slate-500 group-hover:text-gold-DEFAULT">/02</span>
                </Link>

                <a
                  href="/#trust-intro"
                  onClick={(e) => handleNavClick(e, '/#trust-intro')}
                  onMouseEnter={() => setActiveOverlayTab('default')}
                  className="flex items-center justify-between text-xl font-bold font-heading text-slate-200 hover:text-gold-light py-2.5 border-b border-white/10 transition-colors group"
                >
                  <span>Who We Are</span>
                  <span className="text-xs font-mono text-slate-500 group-hover:text-gold-DEFAULT">/03</span>
                </a>

                <a
                  href="/#about"
                  onClick={(e) => handleNavClick(e, '/#about')}
                  onMouseEnter={() => setActiveOverlayTab('default')}
                  className="flex items-center justify-between text-xl font-bold font-heading text-slate-200 hover:text-gold-light py-2.5 border-b border-white/10 transition-colors group"
                >
                  <span>About Us</span>
                  <span className="text-xs font-mono text-slate-500 group-hover:text-gold-DEFAULT">/04</span>
                </a>

                <a
                  href="/#contact"
                  onClick={(e) => handleNavClick(e, '/#contact')}
                  onMouseEnter={() => setActiveOverlayTab('default')}
                  className="flex items-center justify-between text-xl font-bold font-heading text-slate-200 hover:text-gold-light py-2.5 border-b border-white/10 transition-colors group sm:col-span-2"
                >
                  <span>Contact</span>
                  <span className="text-xs font-mono text-slate-500 group-hover:text-gold-DEFAULT">/05</span>
                </a>
              </div>
            </div>

            {/* Right Side: ALL SOLUTIONS & SERVICES Listed OUT OF THE BOX */}
            {activeOverlayTab === 'solutions' ? (
              <div className="flex flex-col justify-between animate-in fade-in duration-200">
                <div>
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/10">
                    <span className="text-xs font-mono tracking-[0.25em] text-gold-DEFAULT uppercase font-bold">
                      ALL SOLUTIONS & SERVICES
                    </span>
                    <Link
                      href="/services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xs font-bold text-slate-300 hover:text-gold-light flex items-center gap-1 transition-colors"
                    >
                      <span>Explore All</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-gold-DEFAULT" />
                    </Link>
                  </div>
                  
                  {/* Clean unboxed typography list */}
                  <div className="space-y-1.5 max-h-[360px] overflow-y-auto pr-2">
                    {servicesList.map((srv) => (
                      <Link
                        key={srv.slug}
                        href={`/services/${srv.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-start justify-between py-3 border-b border-white/10 hover:border-gold-DEFAULT/50 transition-all group cursor-pointer"
                      >
                        <div>
                          <div className="text-base font-bold font-heading text-white group-hover:text-gold-light transition-colors leading-snug">
                            {srv.title}
                          </div>
                          <div className="text-xs text-slate-400 line-clamp-1 font-sans mt-0.5">
                            {srv.shortDesc}
                          </div>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-gold-DEFAULT shrink-0 ml-4 mt-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-6 w-full py-3.5 bg-gold-gradient text-navy-DEFAULT font-extrabold text-xs tracking-widest uppercase rounded shadow-gold-glow flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>VIEW ALL SERVICES</span>
                  <ArrowUpRight className="w-4 h-4 text-navy-DEFAULT stroke-[2.5]" />
                </Link>
              </div>
            ) : (
              /* Right Contact Quick Access (Default Overlay View) */
              <div className="flex flex-col justify-between bg-navy-light/60 p-8 rounded-2xl border border-white/10">
                <div>
                  <div className="text-xs font-mono tracking-[0.25em] text-gold-DEFAULT uppercase mb-3 font-bold">
                    DIRECT CONTACT
                  </div>
                  <h3 className="text-2xl font-bold text-white font-heading mb-4">
                    ANVITECH INDIA PRIVATE LIMITED
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-sans">
                    Ready to engineer your digital future? Reach out to our technology advisors.
                  </p>
                  <div className="space-y-2 text-xs font-mono text-slate-400">
                    <div>EMAIL: support@anvitechindia.com</div>
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
            )}

          </div>
        </div>
      )}
    </header>
  );
};
