'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  image: string;
}

const PROJECTS: PortfolioProject[] = [
  {
    id: 'p1',
    title: 'Brand Identity & Packaging',
    category: 'Brand Systems',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'p2',
    title: 'Minimalist Studio Artifacts',
    category: 'Digital Product',
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'p3',
    title: 'Ecosystem Mobile Experience',
    category: 'Mobile App Design',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'p4',
    title: 'Architectural Monograph',
    category: 'Editorial & Print',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'p5',
    title: 'AI Platform Interface',
    category: 'SaaS Dashboard',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'p6',
    title: 'Luxury Retail Experience',
    category: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'p7',
    title: 'Spatial Audio Hardware',
    category: 'Industrial Design',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'p8',
    title: 'Fintech Wealth Dashboard',
    category: 'Financial Tech',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'p9',
    title: 'Autonomous Mobility UI',
    category: 'Automotive Design',
    image: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'p10',
    title: 'Creative Agency Showcase',
    category: 'Web Portfolio',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
  },
];

export const CurvedPortfolioSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [containerWidth, setContainerWidth] = useState(1200);
  const [windowWidth, setWindowWidth] = useState(1200);

  // Track responsive width safely for SSR
  useEffect(() => {
    const updateDimensions = () => {
      const w = window.innerWidth;
      setWindowWidth(w);
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      } else {
        setContainerWidth(w);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // 60fps RequestAnimationFrame Continuous Slow Orbital Motion
  useEffect(() => {
    let animId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const delta = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      // Slow elegant motion: ~16 seconds per full revolution (decelerates on hover)
      const speed = isHovered ? 0.012 : 0.055;
      setProgress((prev) => (prev + speed * delta) % 1);

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [isHovered]);

  const scrollToContact = () => {
    const contactEl = document.getElementById('contact');
    contactEl?.scrollIntoView({ behavior: 'smooth' });
  };

  const totalCards = PROJECTS.length;

  return (
    <section
      id="portfolio-orbit"
      className="py-20 lg:py-24 bg-white border-b border-slate-100 overflow-hidden relative select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Eyebrow */}
        <div className="text-xs font-bold font-mono tracking-[0.25em] text-orange-500 uppercase mb-3">
          Behind the Designs
        </div>

        {/* Headline: Clean two-line desktop heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 font-heading tracking-tight leading-[1.05] max-w-2xl mx-auto mb-4">
          Curious What Else I’ve<br />Created?
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base text-slate-400 font-sans max-w-lg mx-auto leading-relaxed mb-6">
          Explore more brand identities, packaging, and digital design work in my extended portfolio.
        </p>

        {/* Pill-shaped CTA Button with Orange Circular Arrow */}
        <div className="inline-block mb-12 sm:mb-16">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-white text-slate-900 font-mono text-xs tracking-widest font-bold uppercase shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-slate-100 hover:shadow-xl hover:border-orange-200 transition-all duration-300 group cursor-pointer active:scale-95"
          >
            <span>See more Projects</span>
            <span className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white group-hover:bg-slate-900 transition-colors shadow-md">
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </span>
          </button>
        </div>

        {/* --- CURVED FLAT 2D ELLIPTICAL ARC CAROUSEL --- */}
        <div
          ref={containerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative w-full h-[320px] sm:h-[360px] lg:h-[400px] flex items-center justify-center overflow-hidden"
        >
          {PROJECTS.map((project, idx) => {
            // Calculate orbital phase for each card
            const cardPhase = ((idx / totalCards + progress) % 1 + 1) % 1;
            
            // Map phase [0, 1] to normalized position t in [-1.25, 1.25]
            const t = (cardPhase * 2.5) - 1.25;

            // Only render cards that are visible in the arc range [-1.2, 1.2]
            if (t < -1.25 || t > 1.25) return null;

            // 1. Horizontal Position X (Spread across 90% of container width)
            const spreadWidth = Math.min(containerWidth * 0.9, 1300);
            const x = t * (spreadWidth * 0.45);

            // 2. Vertical Position Y (Upward Curved Arc: Center cards rise higher -50px, edges descend to 0px)
            const arcHeight = windowWidth < 640 ? 30 : 52;
            const y = -arcHeight * (1 - Math.pow(t, 2));

            // 3. Progressive Card Scaling (Center cards ~0.80, Edge cards ~1.22)
            const scale = 0.80 + 0.42 * Math.pow(t, 2);

            // 4. Subtle Outward Fan Rotation (-10deg on left to +10deg on right)
            const rotation = t * 10;

            // 5. Opacity: 100% Solid Photography (Fade only at extreme viewport clip edges)
            const absT = Math.abs(t);
            let opacity = 1.0;
            if (absT > 1.0) {
              opacity = Math.max(0, 1 - (absT - 1.0) / 0.25);
            }

            // 6. Z-Index Ordering (Outer cards sit slightly above adjacent inner cards to maintain curved depth)
            const zIndex = Math.round(absT * 50) + 10;

            // Base portrait card sizes
            const baseWidth = windowWidth < 640 ? 110 : 135;
            const baseHeight = windowWidth < 640 ? 160 : 205;

            return (
              <div
                key={project.id}
                style={{
                  width: `${baseWidth}px`,
                  height: `${baseHeight}px`,
                  transform: `translate3d(${x}px, ${y}px, 0px) scale(${scale}) rotate(${rotation}deg)`,
                  opacity,
                  zIndex,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                }}
                className="absolute top-1/2 left-1/2 -ml-[67px] -mt-[102px] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/60 pointer-events-auto transition-shadow duration-300 hover:shadow-2xl group cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
