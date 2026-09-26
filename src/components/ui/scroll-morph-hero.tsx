'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ShieldCheck, Cpu, Cloud, Code2, Database, Bot, Workflow, Sparkles } from 'lucide-react';

export type AnimationPhase = 'scatter' | 'line' | 'circle' | 'bottom-strip';

interface FlipCardProps {
  index: number;
  total: number;
  phase: AnimationPhase;
  target: { x: number; y: number; rotation: number; scale: number; opacity: number };
  cardData: {
    title: string;
    subtitle: string;
    icon: React.ElementType;
    tag: string;
    bgGrad: string;
  };
}

const IMG_WIDTH = 75;  // Card width
const IMG_HEIGHT = 105; // Card height

function FlipCard({ index, target, cardData }: FlipCardProps) {
  const IconComp = cardData.icon;

  return (
    <motion.div
      animate={{
        x: target.x,
        y: target.y,
        rotate: target.rotation,
        scale: target.scale,
        opacity: target.opacity,
      }}
      transition={{
        type: 'spring',
        stiffness: 45,
        damping: 16,
      }}
      style={{
        position: 'absolute',
        width: IMG_WIDTH,
        height: IMG_HEIGHT,
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      className="cursor-pointer group"
    >
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: 'preserve-3d' }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ rotateY: 180 }}
      >
        {/* Front Face: Brand Technology Card */}
        <div
          className={`absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-xl bg-gradient-to-br ${cardData.bgGrad} p-2 flex flex-col justify-between border border-gold-DEFAULT/30`}
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="flex items-center justify-between">
            <span className="text-[8px] font-mono text-gold-light font-bold">
              0{index + 1}
            </span>
            <IconComp className="w-3.5 h-3.5 text-gold-light" />
          </div>

          <div className="my-auto text-center">
            <div className="text-[9px] font-bold text-white font-heading leading-tight truncate">
              {cardData.title}
            </div>
            <div className="text-[7px] text-slate-300 font-mono mt-0.5 truncate">
              {cardData.subtitle}
            </div>
          </div>

          <div className="text-[7px] font-mono text-gold-light text-right uppercase tracking-wider">
            {cardData.tag}
          </div>
        </div>

        {/* Back Face: Flip details */}
        <div
          className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-xl bg-navy-DEFAULT flex flex-col items-center justify-center p-2 border border-gold-DEFAULT/60 text-center"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <Sparkles className="w-4 h-4 text-gold-DEFAULT mb-1 animate-pulse" />
          <p className="text-[7px] font-bold text-gold-light uppercase tracking-widest">
            ANVITECH
          </p>
          <p className="text-[8px] font-semibold text-white font-heading mt-0.5">
            {cardData.title}
          </p>
          <p className="text-[6px] text-emerald-400 font-mono mt-1">
            ENTERPRISE READY
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// 16 ANVITECH Enterprise Capabilities Cards Data
const ANVITECH_CARDS = [
  { title: 'Software Dev', subtitle: 'Enterprise Apps', icon: Code2, tag: 'CORE', bgGrad: 'from-navy-DEFAULT to-navy-light' },
  { title: 'AI & Automation', subtitle: 'LLMs & RPA', icon: Bot, tag: 'AI', bgGrad: 'from-navy-light to-navy-card' },
  { title: 'Cloud DevOps', subtitle: 'AWS & Azure', icon: Cloud, tag: 'CLOUD', bgGrad: 'from-navy-DEFAULT to-slate-900' },
  { title: 'Cybersecurity', subtitle: 'Zero Trust', icon: ShieldCheck, tag: 'SEC', bgGrad: 'from-navy-card to-navy-DEFAULT' },
  { title: 'Data Analytics', subtitle: 'BI Dashboards', icon: Database, tag: 'DATA', bgGrad: 'from-navy-DEFAULT to-navy-light' },
  { title: 'Microservices', subtitle: 'API Systems', icon: Workflow, tag: 'API', bgGrad: 'from-navy-light to-navy-card' },
  { title: 'Machine Learning', subtitle: 'Predictive Models', icon: Cpu, tag: 'ML', bgGrad: 'from-navy-DEFAULT to-slate-900' },
  { title: 'Digital Scale', subtitle: 'Transform', icon: Sparkles, tag: 'SCALE', bgGrad: 'from-navy-card to-navy-DEFAULT' },
  { title: 'Mobile Dev', subtitle: 'iOS & Android', icon: Code2, tag: 'MOBILE', bgGrad: 'from-navy-DEFAULT to-navy-light' },
  { title: 'ERP Solutions', subtitle: 'Core Business', icon: Workflow, tag: 'ERP', bgGrad: 'from-navy-light to-navy-card' },
  { title: 'Threat Audit', subtitle: 'SOC2 / ISO', icon: ShieldCheck, tag: 'AUDIT', bgGrad: 'from-navy-DEFAULT to-slate-900' },
  { title: 'BI Streaming', subtitle: 'Real-time Event', icon: Database, tag: 'EVENT', bgGrad: 'from-navy-card to-navy-DEFAULT' },
  { title: 'Containerization', subtitle: 'Kubernetes', icon: Cloud, tag: 'K8S', bgGrad: 'from-navy-DEFAULT to-navy-light' },
  { title: 'Tech Advisory', subtitle: 'IT Consulting', icon: Cpu, tag: 'CONSULT', bgGrad: 'from-navy-light to-navy-card' },
  { title: 'SLA Support', subtitle: '24/7 Monitoring', icon: ShieldCheck, tag: 'SLA', bgGrad: 'from-navy-DEFAULT to-slate-900' },
  { title: 'Innovation', subtitle: 'Next-Gen Tech', icon: Sparkles, tag: 'FUTURE', bgGrad: 'from-navy-card to-navy-DEFAULT' },
];

const TOTAL_IMAGES = ANVITECH_CARDS.length;
const MAX_SCROLL = 2400;

const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;

export default function ScrollMorphWhoWeAre() {
  const [introPhase, setIntroPhase] = useState<AnimationPhase>('scatter');
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const handleResize = (entries: ResizeObserverEntry[]) => {
      for (const entry of entries) {
        setContainerSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    };

    const observer = new ResizeObserver(handleResize);
    observer.observe(containerRef.current);

    setContainerSize({
      width: containerRef.current.offsetWidth,
      height: containerRef.current.offsetHeight,
    });

    return () => observer.disconnect();
  }, []);

  const virtualScroll = useMotionValue(0);
  const scrollRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const newScroll = Math.min(Math.max(scrollRef.current + e.deltaY, 0), MAX_SCROLL);
      scrollRef.current = newScroll;
      virtualScroll.set(newScroll);
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;
      touchStartY = touchY;

      const newScroll = Math.min(Math.max(scrollRef.current + deltaY, 0), MAX_SCROLL);
      scrollRef.current = newScroll;
      virtualScroll.set(newScroll);
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('touchstart', handleTouchStart, { passive: false });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
    };
  }, [virtualScroll]);

  const morphProgress = useTransform(virtualScroll, [0, 500], [0, 1]);
  const smoothMorph = useSpring(morphProgress, { stiffness: 40, damping: 20 });

  const scrollRotate = useTransform(virtualScroll, [500, 2400], [0, 360]);
  const smoothScrollRotate = useSpring(scrollRotate, { stiffness: 40, damping: 20 });

  const mouseX = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 30, damping: 20 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const relativeX = e.clientX - rect.left;
      const normalizedX = (relativeX / rect.width) * 2 - 1;
      mouseX.set(normalizedX * 80);
    };
    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX]);

  useEffect(() => {
    const timer1 = setTimeout(() => setIntroPhase('line'), 400);
    const timer2 = setTimeout(() => setIntroPhase('circle'), 2000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const scatterPositions = useMemo(() => {
    return ANVITECH_CARDS.map(() => ({
      x: (Math.random() - 0.5) * 1200,
      y: (Math.random() - 0.5) * 800,
      rotation: (Math.random() - 0.5) * 180,
      scale: 0.6,
      opacity: 0,
    }));
  }, []);

  const [morphValue, setMorphValue] = useState(0);
  const [rotateValue, setRotateValue] = useState(0);
  const [parallaxValue, setParallaxValue] = useState(0);

  useEffect(() => {
    const unsubscribeMorph = smoothMorph.on('change', setMorphValue);
    const unsubscribeRotate = smoothScrollRotate.on('change', setRotateValue);
    const unsubscribeParallax = smoothMouseX.on('change', setParallaxValue);
    return () => {
      unsubscribeMorph();
      unsubscribeRotate();
      unsubscribeParallax();
    };
  }, [smoothMorph, smoothScrollRotate, smoothMouseX]);

  const contentOpacity = useTransform(smoothMorph, [0.8, 1], [0, 1]);
  const contentY = useTransform(smoothMorph, [0.8, 1], [20, 0]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[700px] sm:h-[800px] bg-navy-DEFAULT text-white overflow-hidden rounded-3xl border border-gold-DEFAULT/30 shadow-2xl"
    >
      <div className="flex h-full w-full flex-col items-center justify-center perspective-1000">
        
        {/* Intro Text (Fades out on scroll morph) */}
        <div className="absolute z-0 flex flex-col items-center justify-center text-center pointer-events-none top-1/2 -translate-y-1/2 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              introPhase === 'circle' && morphValue < 0.5
                ? { opacity: 1 - morphValue * 2, y: 0 }
                : { opacity: 0 }
            }
            transition={{ duration: 0.8 }}
          >
            <div className="text-xs font-mono font-bold tracking-[0.3em] text-gold-light uppercase mb-3">
              WHO WE ARE — ANVITECH INDIA PRIVATE LIMITED
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight max-w-2xl">
              Building Technology With Purpose.
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-slate-300 font-sans max-w-xl">
              Engineering reliable, scalable, and intelligent digital solutions tailored around modern enterprise business goals.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-subtle border border-gold-DEFAULT/30 text-gold-light text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5 text-gold-DEFAULT animate-pulse" />
              <span>SCROLL INSIDE FRAME TO EXPLORE CAPABILITIES</span>
            </div>
          </motion.div>
        </div>

        {/* Morph Arc Content (Fades in) */}
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="absolute top-[8%] z-10 flex flex-col items-center justify-center text-center pointer-events-none px-4"
        >
          <div className="text-xs font-mono font-bold tracking-[0.25em] text-gold-light uppercase mb-2">
            ENTERPRISE ARCHITECTURE ECOSYSTEM
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading tracking-tight mb-3">
            Explore Our Technology Capabilities
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg leading-relaxed font-sans">
            Interactive enterprise domains built for high throughput, security, and continuous commercial growth. Hover over any capability card to inspect SLAs.
          </p>
        </motion.div>

        {/* Main Morphing Cards Container */}
        <div className="relative flex items-center justify-center w-full h-full">
          {ANVITECH_CARDS.slice(0, TOTAL_IMAGES).map((card, i) => {
            let target = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 };

            if (introPhase === 'scatter') {
              target = scatterPositions[i];
            } else if (introPhase === 'line') {
              const lineSpacing = 85;
              const lineTotalWidth = TOTAL_IMAGES * lineSpacing;
              const lineX = i * lineSpacing - lineTotalWidth / 2;
              target = { x: lineX, y: 0, rotation: 0, scale: 1, opacity: 1 };
            } else {
              const isMobile = containerSize.width < 768;
              const minDimension = Math.min(containerSize.width, containerSize.height);

              const circleRadius = Math.min(minDimension * 0.35, 300);
              const circleAngle = (i / TOTAL_IMAGES) * 360;
              const circleRad = (circleAngle * Math.PI) / 180;
              const circlePos = {
                x: Math.cos(circleRad) * circleRadius,
                y: Math.sin(circleRad) * circleRadius,
                rotation: circleAngle + 90,
              };

              const baseRadius = Math.min(containerSize.width, containerSize.height * 1.4);
              const arcRadius = baseRadius * (isMobile ? 1.3 : 1.0);

              const arcApexY = containerSize.height * (isMobile ? 0.32 : 0.22);
              const arcCenterY = arcApexY + arcRadius;

              const spreadAngle = isMobile ? 110 : 140;
              const startAngle = -90 - spreadAngle / 2;
              const step = spreadAngle / (TOTAL_IMAGES - 1);

              const scrollProgress = Math.min(Math.max(rotateValue / 360, 0), 1);
              const maxRotation = spreadAngle * 0.8;
              const boundedRotation = -scrollProgress * maxRotation;

              const currentArcAngle = startAngle + i * step + boundedRotation;
              const arcRad = (currentArcAngle * Math.PI) / 180;

              const arcPos = {
                x: Math.cos(arcRad) * arcRadius + parallaxValue,
                y: Math.sin(arcRad) * arcRadius + arcCenterY,
                rotation: currentArcAngle + 90,
                scale: isMobile ? 1.3 : 1.6,
              };

              target = {
                x: lerp(circlePos.x, arcPos.x, morphValue),
                y: lerp(circlePos.y, arcPos.y, morphValue),
                rotation: lerp(circlePos.rotation, arcPos.rotation, morphValue),
                scale: lerp(1, arcPos.scale, morphValue),
                opacity: 1,
              };
            }

            return (
              <FlipCard
                key={i}
                index={i}
                total={TOTAL_IMAGES}
                phase={introPhase}
                target={target}
                cardData={card}
              />
            );
          })}
        </div>

      </div>
    </div>
  );
}
