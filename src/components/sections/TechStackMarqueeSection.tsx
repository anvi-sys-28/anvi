'use client';

import React from 'react';

interface TechBrand {
  name: string;
  category: string;
  logoSvg: React.ReactNode;
}

export const TechStackMarqueeSection: React.FC = () => {
  const brands: TechBrand[] = [
    {
      name: 'AWS',
      category: 'Cloud Infrastructure',
      logoSvg: (
        <svg viewBox="0 0 110 36" className="h-7 w-auto">
          <text x="2" y="24" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="24" fontWeight="900" letterSpacing="-1" fill="#232F3E">aws</text>
          <path d="M 4,28 Q 24,36 46,27" fill="none" stroke="#FF9900" strokeWidth="3" strokeLinecap="round" />
          <path d="M 42,24 L 48,27 L 44,31 Z" fill="#FF9900" />
        </svg>
      ),
    },
    {
      name: 'OpenAI',
      category: 'Artificial Intelligence',
      logoSvg: (
        <svg viewBox="0 0 130 36" className="h-7 w-auto">
          <g fill="none" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M 18,7 L 24,10.5 L 24,17.5 L 18,21 L 12,17.5 L 12,10.5 Z" />
            <path d="M 18,7 L 18,14 L 24,17.5" />
            <path d="M 24,10.5 L 18,14 L 12,10.5" />
            <path d="M 12,17.5 L 18,14 L 24,21" />
          </g>
          <text x="34" y="23" fontFamily="sans-serif" fontSize="18" fontWeight="800" letterSpacing="-0.5" fill="#000000">OpenAI</text>
        </svg>
      ),
    },
    {
      name: 'Google Cloud',
      category: 'Cloud Services',
      logoSvg: (
        <svg viewBox="0 0 160 36" className="h-7 w-auto">
          <path d="M17.6 14.4v3.6h5.1c-.2 1.4-1.7 4.2-5.1 4.2-3.1 0-5.7-2.6-5.7-5.7s2.6-5.7 5.7-5.7c1.8 0 3 .8 3.7 1.4l2.9-2.8C22.4 7.6 20.2 6.5 17.6 6.5 11.2 6.5 6 11.7 6 18.1s5.2 11.6 11.6 11.6c6.7 0 11.1-4.7 11.1-11.3 0-.8-.1-1.3-.2-1.9H17.6z" fill="#4285F4"/>
          <text x="36" y="24" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="16" fontWeight="700" fill="#3C4043">Google Cloud</text>
        </svg>
      ),
    },
    {
      name: 'Microsoft Azure',
      category: 'Cloud Platform',
      logoSvg: (
        <svg viewBox="0 0 120 36" className="h-7 w-auto">
          <path d="M6 26L18 6h7l-7 20H6z" fill="#0078D4"/>
          <path d="M16 20l5-14h8l6 20H23l-7-6z" fill="#50E6FF"/>
          <text x="42" y="23" fontFamily="sans-serif" fontSize="17" fontWeight="800" fill="#0078D4">Azure</text>
        </svg>
      ),
    },
    {
      name: 'Docker',
      category: 'Containerization',
      logoSvg: (
        <svg viewBox="0 0 130 36" className="h-7 w-auto">
          <rect x="4" y="14" width="4" height="4" rx="0.5" fill="#2496ED"/>
          <rect x="9" y="14" width="4" height="4" rx="0.5" fill="#2496ED"/>
          <rect x="14" y="14" width="4" height="4" rx="0.5" fill="#2496ED"/>
          <rect x="9" y="9" width="4" height="4" rx="0.5" fill="#2496ED"/>
          <rect x="14" y="9" width="4" height="4" rx="0.5" fill="#2496ED"/>
          <rect x="14" y="4" width="4" height="4" rx="0.5" fill="#2496ED"/>
          <path d="M 2,19 C 2,19 6,26 18,26 C 26,26 30,22 30,22 C 30,22 32,24 35,24 C 35,24 34,20 31,19 C 30,19 28,19 28,19 C 28,19 26,17 22,17 L 2,17 Z" fill="#2496ED"/>
          <text x="42" y="23" fontFamily="sans-serif" fontSize="18" fontWeight="800" fill="#2496ED">docker</text>
        </svg>
      ),
    },
    {
      name: 'React',
      category: 'Frontend Framework',
      logoSvg: (
        <svg viewBox="0 0 120 36" className="h-7 w-auto">
          <g transform="translate(16, 18)" stroke="#61DAFB" strokeWidth="2" fill="none">
            <ellipse rx="14" ry="5.5"/>
            <ellipse rx="14" ry="5.5" transform="rotate(60)"/>
            <ellipse rx="14" ry="5.5" transform="rotate(120)"/>
            <circle r="2.5" fill="#61DAFB"/>
          </g>
          <text x="38" y="24" fontFamily="sans-serif" fontSize="18" fontWeight="800" fill="#0B1726">React</text>
        </svg>
      ),
    },
    {
      name: 'Kubernetes',
      category: 'Orchestration',
      logoSvg: (
        <svg viewBox="0 0 150 36" className="h-7 w-auto">
          <path d="M18 4l12 7v14l-12 7-12-7V11l12-7z" fill="#326CE5" />
          <circle cx="18" cy="18" r="4" fill="#FFFFFF"/>
          <text x="38" y="23" fontFamily="sans-serif" fontSize="16" fontWeight="800" fill="#326CE5">Kubernetes</text>
        </svg>
      ),
    },
    {
      name: 'Python',
      category: 'Backend & AI',
      logoSvg: (
        <svg viewBox="0 0 130 36" className="h-7 w-auto">
          <path d="M16 4c-4 0-4 1.8-4 1.8v2.2h4v.5H8s-2.5-.3-2.5 3.5c0 3.8 2.2 3.8 2.2 3.8h1.3v-1.9c0-2.1 1.8-2 1.8-2h3.8c1.9 0 1.8-1.8 1.8-1.8V5.8S17 4 16 4zm-2 1.2a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2z" fill="#3776AB"/>
          <path d="M16 20c4 0 4-1.8 4-1.8v-2.2h-4v-.5h8s2.5.3 2.5-3.5c0-3.8-2.2-3.8-2.2-3.8h-1.3v1.9c0 2.1-1.8 2-1.8 2h-3.8c-1.9 0-1.8 1.8-1.8 1.8v6.1s-.1 1.8 1.8 1.8zm2-1.2a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2z" fill="#FFD43B"/>
          <text x="36" y="23" fontFamily="sans-serif" fontSize="17" fontWeight="800" fill="#3776AB">Python</text>
        </svg>
      ),
    },
    {
      name: 'Node.js',
      category: 'Runtime Environment',
      logoSvg: (
        <svg viewBox="0 0 120 36" className="h-7 w-auto">
          <path d="M16 4l11 6.5v13L16 30l-11-6.5v-13L16 4z" fill="#339933"/>
          <text x="34" y="23" fontFamily="sans-serif" fontSize="17" fontWeight="800" fill="#339933">Node.js</text>
        </svg>
      ),
    },
    {
      name: 'PostgreSQL',
      category: 'Database Engine',
      logoSvg: (
        <svg viewBox="0 0 150 36" className="h-7 w-auto">
          <path d="M16 4c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12S22.6 4 16 4zm0 20c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" fill="#4169E1"/>
          <text x="34" y="23" fontFamily="sans-serif" fontSize="16" fontWeight="800" fill="#336791">PostgreSQL</text>
        </svg>
      ),
    },
    {
      name: 'Next.js',
      category: 'React Framework',
      logoSvg: (
        <svg viewBox="0 0 120 36" className="h-7 w-auto">
          <circle cx="16" cy="18" r="12" fill="#000000"/>
          <path d="M20 22L14 12h-2v11h2v-7.5l5.2 7.8c.3.1.6.2 1 .2c.6 0 1.1-.2 1.6-.4z" fill="#FFFFFF"/>
          <text x="34" y="24" fontFamily="sans-serif" fontSize="17" fontWeight="900" fill="#000000">NEXT.js</text>
        </svg>
      ),
    },
    {
      name: 'TypeScript',
      category: 'Type-Safe Code',
      logoSvg: (
        <svg viewBox="0 0 140 36" className="h-7 w-auto">
          <rect x="4" y="4" width="28" height="28" rx="4" fill="#3178C6"/>
          <text x="9" y="25" fontFamily="sans-serif" fontSize="15" fontWeight="900" fill="#FFFFFF">TS</text>
          <text x="38" y="23" fontFamily="sans-serif" fontSize="17" fontWeight="800" fill="#3178C6">TypeScript</text>
        </svg>
      ),
    },
    {
      name: 'Tailwind CSS',
      category: 'UI Styling Engine',
      logoSvg: (
        <svg viewBox="0 0 150 36" className="h-7 w-auto">
          <path d="M9 13.5C10.5 7.5 15 6 18 10.5c3 4.5 4.5 4.5 7.5 4.5 3 0 6-3 7.5-9-1.5 6-6 7.5-9 3-3-4.5-4.5-4.5-7.5-4.5-3 0-6 3-7.5 9zm-9 9C1.5 16.5 6 15 9 19.5c3 4.5 4.5 4.5 7.5 4.5 3 0 6-3 7.5-9-1.5 6-6 7.5-9 3-3-4.5-4.5-4.5-7.5-4.5-3 0-6 3-7.5 9z" fill="#06B6D4"/>
          <text x="38" y="23" fontFamily="sans-serif" fontSize="16" fontWeight="800" fill="#0F172A">Tailwind CSS</text>
        </svg>
      ),
    },
    {
      name: 'MongoDB',
      category: 'NoSQL Database',
      logoSvg: (
        <svg viewBox="0 0 130 36" className="h-7 w-auto">
          <path d="M16 4C14 10 9 14 9 20c0 4.4 3.1 7.5 7 8 3.9-.5 7-3.6 7-8 0-6-5-10-7-16z" fill="#47A248"/>
          <text x="30" y="23" fontFamily="sans-serif" fontSize="17" fontWeight="800" fill="#13AA52">MongoDB</text>
        </svg>
      ),
    },
  ];

  return (
    <section
      id="tech-stack-marquee"
      className="py-10 sm:py-14 bg-white border-y border-slate-200/80 overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10 text-center">
        {/* Eyebrow Text matching prompt & reference image */}
        <h3 className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.25em] text-slate-400 uppercase">
          ENGINEERED WITH INDUSTRY-LEADING BRANDS
        </h3>
      </div>

      {/* Infinite Horizontal Marquee Container (Scrolling Left to Right) */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left & Right Gradient Edges Mask */}
        <div className="absolute top-0 left-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Duplicated Marquee Track for 100% Seamless Circular Loop (Left to Right) */}
        <div className="flex items-center gap-8 sm:gap-14 animate-marquee-left-to-right whitespace-nowrap shrink-0">
          {/* First Copy */}
          {brands.map((brand, idx) => (
            <div
              key={`b1-${idx}`}
              className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-50/90 hover:bg-white border border-slate-200/80 hover:border-slate-300 transition-all duration-300 group cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              {brand.logoSvg}
            </div>
          ))}

          {/* Second Copy for Infinite Loop */}
          {brands.map((brand, idx) => (
            <div
              key={`b2-${idx}`}
              className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-50/90 hover:bg-white border border-slate-200/80 hover:border-slate-300 transition-all duration-300 group cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              {brand.logoSvg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
