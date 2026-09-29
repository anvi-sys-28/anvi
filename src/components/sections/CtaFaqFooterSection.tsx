'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: 'What software development services does ANVITECH INDIA provide?',
    answer:
      'ANVITECH INDIA provides end-to-end software development including custom software, AI solutions & agents, ERP, CRM, logistics software, web and mobile applications, cloud & DevOps, cybersecurity, and continuous software management.',
  },
  {
    question: 'How does ANVITECH approach project requirement gathering?',
    answer:
      'We follow a structured discovery phase to map your business processes, technical requirements, security needs, and scalability goals before defining the architecture and development roadmap.',
  },
  {
    question: 'Do you provide ongoing software maintenance after deployment?',
    answer:
      'Yes. We manage, monitor, secure, and continuously optimize software applications post-deployment to ensure long-term stability, performance, and feature evolution.',
  },
  {
    question: 'Can ANVITECH integrate AI into our existing business software?',
    answer:
      'Yes. We integrate practical AI capabilities, autonomous AI agents, predictive models, and automated workflows into existing ERP, CRM, and custom business applications.',
  },
  {
    question: 'What technology stack does ANVITECH INDIA specialize in?',
    answer:
      'We build using modern enterprise technologies across Web (React, Next.js, TypeScript), Mobile (iOS, Android, React Native), Backend (Node.js, Python), Cloud (AWS, Azure, GCP, Docker, Kubernetes), and Databases (PostgreSQL, MongoDB).',
  },
];

export const CtaFaqFooterSection: React.FC = () => {
  const [isBtnHovered, setIsBtnHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const scrollToContact = () => {
    const contactEl = document.getElementById('contact') || document.getElementById('home');
    contactEl?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      id="contact"
      className="bg-white text-neutral-900 w-full"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Main Section containing CTA + FAQ */}
      <main className="py-20 max-[900px]:py-[60px] max-w-[1100px] w-full mx-auto px-5">
        <div className="grid grid-cols-[1.6fr_1fr] gap-[30px] items-stretch max-[900px]:grid-cols-1 max-[900px]:gap-[60px]">
          {/* Left column — Animated Gradient CTA card zoomed by 20% */}
          <div
            className="c5-animated-gradient rounded-[28px] py-24 px-12 text-white flex flex-col justify-center items-center text-center transform scale-[1.04] sm:scale-[1.20] z-10 my-6 shadow-2xl transition-transform duration-300"
            style={{ boxShadow: '0 20px 50px rgba(0, 0, 0, 0.25)' }}
          >
            <h2
              className="font-extrabold leading-[1.1] mb-[18px]"
              style={{ fontSize: '3.6rem', letterSpacing: '-0.03em' }}
            >
              Have a Business Challenge
              <br />
              to Solve?
            </h2>
            <p className="text-[1.1rem] mb-[32px] font-medium opacity-95 max-w-lg leading-relaxed">
              Tell us what you want to build, automate or improve. We'll help turn the requirement into a practical software solution.
            </p>
            <button
              type="button"
              onClick={scrollToContact}
              className="bg-neutral-900 hover:bg-black text-white font-bold cursor-pointer border-none text-[1.05rem] transition-all duration-200 hover:-translate-y-1"
              style={{
                padding: '16px 40px',
                borderRadius: '14px',
                boxShadow: isBtnHovered
                  ? '0 16px 36px rgba(0,0,0,0.5)'
                  : '0 12px 24px rgba(0,0,0,0.35)',
              }}
              onMouseEnter={() => setIsBtnHovered(true)}
              onMouseLeave={() => setIsBtnHovered(false)}
            >
              Start a Project
            </button>
          </div>

          {/* Right column — FAQ accordion */}
          <div className="flex flex-col justify-center gap-3">
            {faqData.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={index}
                  onClick={() => toggleFaq(index)}
                  className="bg-white border rounded-[10px] py-[18px] px-5 cursor-pointer transition-all duration-200 hover:border-[#eaeaea]"
                  style={{
                    borderColor: isActive ? '#eaeaea' : '#f0f0f0',
                    boxShadow: isActive
                      ? '0 4px 12px rgba(0,0,0,0.04)'
                      : '0 2px 8px rgba(0,0,0,0.02)',
                  }}
                >
                  <div className="flex justify-between items-center font-normal text-[0.9rem] text-neutral-900">
                    <span>{item.question}</span>
                    {isActive ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </div>
                  {isActive && (
                    <div className="mt-3 text-[0.9rem] text-[#666] leading-[1.6]">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#fafafa] pt-20 pb-5 max-[900px]:pt-[60px]">
        <div className="max-w-[1100px] w-full mx-auto px-5">
          <div className="grid grid-cols-[2fr_1fr_1fr_2fr] gap-10 mb-[50px] max-[900px]:grid-cols-2 max-[480px]:grid-cols-1">
            {/* 1. Logo column */}
            <div>
              <div className="mb-[15px]">
                <Logo variant="light" size="sm" />
              </div>
              <p className="text-[0.85rem] text-[#666] leading-[1.6] max-w-[240px]">
                ANVITECH INDIA PRIVATE LIMITED builds and manages technology that helps businesses operate, automate and grow.
              </p>
            </div>

            {/* 2. Services Navigation */}
            <div>
              <h4 className="font-semibold mb-5 text-[0.95rem] text-neutral-900">
                Services
              </h4>
              <ul>
                {['Custom Software', 'AI Solutions & Agents', 'ERP & CRM Systems', 'Logistics Software', 'Cloud & DevOps'].map(
                  (linkText, idx) => (
                    <li key={idx} className="mb-3">
                      <a
                        href="#services"
                        className="text-[#888] no-underline text-[0.85rem] transition-colors duration-200 hover:text-neutral-900"
                      >
                        {linkText}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* 3. Company Navigation */}
            <div>
              <h4 className="font-semibold mb-5 text-[0.95rem] text-neutral-900">
                Company
              </h4>
              <ul>
                {['About Us', 'Methodology', 'Industries', 'Technology Stack', 'Contact Us'].map((pageText, idx) => (
                  <li key={idx} className="mb-3">
                    <a
                      href="#home"
                      className="text-[#888] no-underline text-[0.85rem] transition-colors duration-200 hover:text-neutral-900"
                    >
                      {pageText}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Contact & Newsletter */}
            <div>
              <h4 className="font-semibold mb-5 text-[0.95rem] text-neutral-900">
                Enterprise Contact
              </h4>
              <p className="text-[0.85rem] text-[#666] mb-[15px]">
                Bengaluru, India | contact@anvitech.in
              </p>
              <div className="flex gap-[10px]">
                <input
                  type="email"
                  placeholder="Enter work email..."
                  className="flex-grow border border-[#f0f0f0] bg-white outline-none transition-colors duration-200 focus:border-[#ccc] text-[0.9rem]"
                  style={{
                    padding: '12px 16px',
                    borderRadius: '10px',
                    boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.02)',
                  }}
                />
                <button
                  type="button"
                  className="bg-neutral-900 text-white border-none font-semibold cursor-pointer transition-all duration-200 hover:-translate-y-0.5 text-[0.9rem]"
                  style={{
                    padding: '12px 24px',
                    borderRadius: '10px',
                    boxShadow: '0 12px 24px rgba(0,0,0,0.3)',
                  }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-[#f0f0f0] pt-[25px] pb-[10px] flex justify-between text-[0.85rem] text-[#888] max-[480px]:flex-col max-[480px]:gap-[15px] max-[480px]:items-center">
            <span>© 2026 ANVITECH INDIA PRIVATE LIMITED. All Rights Reserved.</span>
            <span>Enterprise Software & Technology Engineering Partner</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
