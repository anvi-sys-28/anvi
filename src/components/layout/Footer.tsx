'use client';

import React from 'react';
import HalftoneWordmarkFooter, { FooterColumn } from '@/components/ui/halftone-wordmark-footer';

const footerColumns: FooterColumn[] = [
  {
    title: 'Services',
    links: [
      { label: 'Custom Software', href: '/services/custom-software-enterprise-erp-development' },
      { label: 'AI Solutions & Agents', href: '/services/ai-solutions-chatbots-intelligent-automation' },
      { label: 'ERP & CRM Systems', href: '/services/custom-software-enterprise-erp-development' },
      { label: 'Cloud & DevOps', href: '/services/cloud-infrastructure-migration-devops' },
      { label: 'Cybersecurity', href: '/services/cybersecurity-threat-monitoring-soc' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About ANVITECH', href: '/#about' },
      { label: 'Leadership', href: '/#about' },
      { label: 'Case Insights', href: '/#insights' },
      { label: 'Industries', href: '/#industries' },
      { label: 'Contact Team', href: '/#contact' },
    ],
  },
  {
    title: 'Enterprise',
    links: [
      { label: 'support@anvitechindia.com', href: 'mailto:support@anvitechindia.com' },
      { label: 'Bengaluru, India', href: '/#contact' },
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
    ],
  },
];

export const Footer: React.FC = () => {
  return (
    <HalftoneWordmarkFooter
      wordmark="ANVI GROUPS"
      label="ANVITECH INDIA"
      meta="©2026 · Bengaluru, India"
      columns={footerColumns}
      preset="night"
      palette={{ background: '#060D17', ink: '#E2E8F0', warm: '#D9A441' }}
      fontFamily="'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
      fontWeight={800}
      crop={0}
      height="410px"
      backToTop={true}
    />
  );
};

export default Footer;
