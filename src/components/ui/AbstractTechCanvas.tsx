'use client';

import React, { useEffect, useRef } from 'react';

interface AbstractTechCanvasProps {
  className?: string;
  particleCount?: number;
}

export const AbstractTechCanvas: React.FC<AbstractTechCanvasProps> = ({
  className = '',
  particleCount = 45,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse tracking for subtle parallax
    let mouse = { x: width / 2, y: height / 2 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Particles system
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      alpha: number;
      isGold: boolean;
    }

    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      const isGold = Math.random() < 0.25;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: isGold ? Math.random() * 2 + 1.2 : Math.random() * 1.5 + 0.8,
        color: isGold ? '#C89B3C' : '#38BDF8',
        alpha: Math.random() * 0.5 + 0.2,
        isGold,
      });
    }

    // Grid lines animation offset
    let gridOffset = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle architectural digital grid
      gridOffset = (gridOffset + 0.15) % 40;
      ctx.strokeStyle = 'rgba(20, 42, 61, 0.4)';
      ctx.lineWidth = 0.5;

      // Vertical lines
      for (let x = 0; x < width; x += 60) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Horizontal subtle lines
      for (let y = gridOffset; y < height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw perspective geometric architectural lines
      ctx.strokeStyle = 'rgba(200, 155, 60, 0.06)';
      ctx.lineWidth = 1;

      ctx.beginPath();
      ctx.moveTo(width * 0.1, 0);
      ctx.lineTo(width * 0.4, height);
      ctx.moveTo(width * 0.9, 0);
      ctx.lineTo(width * 0.6, height);
      ctx.stroke();

      // Update and draw network nodes & connections
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            const alpha = (1 - dist / 140) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            if (p1.isGold || p2.isGold) {
              ctx.strokeStyle = `rgba(200, 155, 60, ${alpha * 1.5})`;
            } else {
              ctx.strokeStyle = `rgba(30, 58, 138, ${alpha})`;
            }
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        if (p1.isGold) {
          ctx.fillStyle = 'rgba(229, 196, 106, 0.85)';
          ctx.shadowColor = '#C89B3C';
          ctx.shadowBlur = 8;
        } else {
          ctx.fillStyle = 'rgba(148, 163, 184, 0.6)';
          ctx.shadowBlur = 0;
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Mouse interactive radial gold aura
      const mouseGrad = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        280
      );
      mouseGrad.addColorStop(0, 'rgba(200, 155, 60, 0.08)');
      mouseGrad.addColorStop(1, 'rgba(11, 23, 38, 0)');
      ctx.fillStyle = mouseGrad;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [particleCount]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none w-full h-full z-0 ${className}`}
    />
  );
};
