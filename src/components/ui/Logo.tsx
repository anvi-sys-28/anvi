'use client';

import React, { useState } from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  markOnly?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  markOnly = false,
  className = '',
}) => {
  const [imgError, setImgError] = useState(false);

  const sizeHeightMap = {
    sm: 'h-8 sm:h-9',
    md: 'h-9 sm:h-11',
    lg: 'h-12 sm:h-14',
  };

  const currentHeight = sizeHeightMap[size];
  const textColorMain = variant === 'dark' ? 'text-white' : 'text-navy-DEFAULT';
  const textColorSub = variant === 'dark' ? 'text-gold-light' : 'text-gold-dark';

  return (
    <div className={`inline-flex items-center gap-3 ${className} group cursor-pointer select-none`}>
      {/* Brand Image Logo (l.webp) */}
      {!imgError ? (
        <img
          src="/l.webp"
          alt="ANVITECH Logo"
          onError={() => setImgError(true)}
          className={`${currentHeight} w-auto object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105`}
        />
      ) : (
        /* Fallback SVG Monogram if l.webp fails */
        <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
          <svg
            width={size === 'sm' ? 32 : 40}
            height={size === 'sm' ? 32 : 40}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="4" y="4" width="92" height="92" rx="16" fill="#0B1726" stroke="#C89B3C" strokeWidth="2" />
            <path d="M26 74 L48 24 L56 24 L38 74 Z" fill="#C89B3C" />
            <path d="M50 26 L74 68 L74 24 L82 24 L82 74 L74 74 L50 32 Z" fill="#FFFFFF" />
          </svg>
        </div>
      )}

      {/* Brand Company Name Lockup */}
      {!markOnly && (
        <div className="flex flex-col justify-center leading-none">
          <div className="flex items-center gap-1.5">
            <span className={`text-base sm:text-lg lg:text-xl font-black tracking-[0.16em] ${textColorMain} font-heading leading-none uppercase`}>
              ANVITECH
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold-DEFAULT animate-pulse" />
          </div>
          <span className={`text-[8.5px] sm:text-[9.5px] tracking-[0.25em] font-bold ${textColorSub} font-sans uppercase mt-1`}>
            INDIA PRIVATE LIMITED
          </span>
        </div>
      )}
    </div>
  );
};
