'use client';

import React, { useEffect, useRef } from 'react';

interface FrameSequencePlayerProps {
  folder: string;
  frameCount?: number;
  fps?: number;
  className?: string;
}

export const FrameSequencePlayer: React.FC<FrameSequencePlayerProps> = ({
  folder,
  frameCount = 240,
  fps = 30,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameRef = useRef<number>(1);
  const animRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Cache image objects array
    const images: HTMLImageElement[] = [];
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const num = String(i).padStart(5, '0');
      img.src = `/${folder}/frame_${num}.webp`;
      images.push(img);
    }
    imagesRef.current = images;

    let lastTime = performance.now();
    const interval = 1000 / fps;

    const render = (now: number) => {
      const delta = now - lastTime;
      if (delta >= interval) {
        lastTime = now - (delta % interval);
        const currentImg = imagesRef.current[frameRef.current - 1];

        if (currentImg && currentImg.complete && currentImg.naturalWidth > 0) {
          if (canvas.width !== currentImg.naturalWidth || canvas.height !== currentImg.naturalHeight) {
            canvas.width = currentImg.naturalWidth;
            canvas.height = currentImg.naturalHeight;
          }
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(currentImg, 0, 0);
        }

        frameRef.current = frameRef.current >= frameCount ? 1 : frameRef.current + 1;
      }
      animRef.current = requestAnimationFrame(render);
    };

    animRef.current = requestAnimationFrame(render);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [folder, frameCount, fps]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full object-cover ${className}`}
    />
  );
};
