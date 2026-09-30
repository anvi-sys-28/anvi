'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchBlogPosts, BlogPost, defaultBlogPosts } from '@/lib/supabase';
import { useTheme } from '@/context/ThemeContext';
import { FrameSequencePlayer } from '@/components/ui/FrameSequencePlayer';

export const BehindTheLensSection: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>(defaultBlogPosts);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    fetchBlogPosts().then((data) => {
      if (data && data.length > 0) {
        setPosts(data);
      }
    });
  }, []);

  const featuredPost = posts.find((p) => p.type === 'featured') || posts[0];
  const standardPosts = posts.filter((p) => p !== featuredPost);

  const getFolderForPost = (title: string, isFeatured: boolean): string | null => {
    const lower = title.toLowerCase();
    if (isFeatured || lower.includes('erp') || lower.includes('architecting')) {
      return 'er';
    }
    if (lower.includes('logistics') || lower.includes('real-time tracking')) {
      return 'log';
    }
    if (lower.includes('cloud') || lower.includes('devops')) {
      return 'cloud';
    }
    return null; // Return null so original video is rendered for AI Agents box
  };

  return (
    <section
      className={`w-full py-[60px] transition-colors duration-300 ${
        isDark ? 'bg-black text-white' : 'bg-white text-neutral-900'
      }`}
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="max-w-[1200px] w-full mx-auto px-5">
        {/* Header */}
        <div className="mb-[50px]">
          <span className={`rounded-[8px] text-[13px] px-3 py-1 font-medium inline-block mb-3 transition-colors ${
            isDark ? 'bg-neutral-800 text-neutral-300 border border-neutral-700' : 'bg-[#f4f4f4] text-[#666]'
          }`}>
            Technology Insights
          </span>
          <h2
            className={`text-[64px] max-[768px]:text-[48px] font-medium leading-[1.05] tracking-[-2.5px] mb-6 transition-colors ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Insights & Tech Perspectives
          </h2>
          <div className="flex justify-between items-end gap-6 max-[768px]:flex-col max-[768px]:items-start max-[768px]:gap-4">
            <p className={`max-w-[480px] text-[18px] font-medium leading-relaxed transition-colors ${
              isDark ? 'text-slate-300 opacity-90' : 'text-[#666] opacity-80'
            }`}>
              Architectural insights, technical perspectives, and operational guides on enterprise software development, AI integration, ERP systems, and cloud engineering.
            </p>
            <Link
              href="/services"
              className={`rounded-[40px] text-[14px] font-semibold py-3 px-6 transition-all duration-200 hover:scale-[1.02] cursor-pointer whitespace-nowrap inline-block ${
                isDark ? 'bg-white text-black hover:bg-slate-200' : 'bg-black text-white hover:bg-neutral-800'
              }`}
            >
              Explore All Insights
            </Link>
          </div>
        </div>

        {/* Featured Post (full-width card) */}
        {featuredPost && (
          <div className={`grid grid-cols-2 max-[1024px]:grid-cols-1 rounded-[20px] border min-h-[520px] overflow-hidden mb-[50px] transition-colors ${
            isDark ? 'border-neutral-800 bg-neutral-900/90' : 'border-[#f0f0f0] bg-[#fcfcfc]'
          }`}>
            {/* Left side: FrameSequencePlayer with er frames */}
            <div className="relative overflow-hidden group cursor-pointer min-h-[340px] w-full h-full bg-slate-900">
              <FrameSequencePlayer
                folder="er"
                frameCount={240}
                fps={30}
                className="w-full h-full object-cover transform transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-[1.08]"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-400 group-hover:opacity-100 pointer-events-none" />

              {/* Centered '+' circle */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[70px] h-[70px] rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-3xl font-light transform scale-[0.7] transition-transform duration-300 group-hover:scale-100">
                  +
                </div>
              </div>

              {/* White L-shaped corner brackets */}
              <div className="absolute inset-[15px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-0 left-0 w-[12px] h-[12px] border-t-[1.5px] border-l-[1.5px] border-white" />
                <div className="absolute top-0 right-0 w-[12px] h-[12px] border-t-[1.5px] border-r-[1.5px] border-white" />
                <div className="absolute bottom-0 left-0 w-[12px] h-[12px] border-b-[1.5px] border-l-[1.5px] border-white" />
                <div className="absolute bottom-0 right-0 w-[12px] h-[12px] border-b-[1.5px] border-r-[1.5px] border-white" />
              </div>
            </div>

            {/* Right side: Content */}
            <div className="p-[60px] max-[1024px]:p-[40px] max-[768px]:p-[24px] flex flex-col justify-between">
              <div>
                <span className={`text-[12px] font-medium rounded-[20px] px-[14px] py-[5px] inline-block mb-4 ${
                  isDark ? 'bg-white text-black' : 'bg-black text-white'
                }`}>
                  {featuredPost.badge || 'Must Read'}
                </span>
                <h3
                  className={`text-[48px] max-[768px]:text-[32px] font-medium leading-[1.15] tracking-[-1.5px] mb-4 transition-colors ${
                    isDark ? 'text-white' : 'text-neutral-900'
                  }`}
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {featuredPost.title}
                </h3>
                <p className={`text-[17px] leading-relaxed mb-6 transition-colors ${
                  isDark ? 'text-slate-300' : 'text-[#666]'
                }`}>
                  {featuredPost.description}
                </p>
              </div>

              <div className="mt-auto flex items-center justify-between pt-6">
                <span className={`text-[14px] font-medium transition-colors ${
                  isDark ? 'text-slate-400' : 'text-[#888]'
                }`}>
                  {featuredPost.author || 'By August Renner (c)'}
                </span>
                <span
                  className="rounded-[20px] text-white text-[11px] font-semibold px-3 py-1 capitalize"
                  style={{ backgroundColor: featuredPost.category_color }}
                >
                  {featuredPost.category}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid (3 standard cards) */}
        <div className="grid grid-cols-3 gap-[25px] max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1">
          {standardPosts.map((post, idx) => {
            const folderName = getFolderForPost(post.title, false);
            return (
              <div key={post.id || idx} className="flex flex-col">
                {/* Media container */}
                <div className={`aspect-[16/10] relative rounded-[20px] overflow-hidden mb-4 group cursor-pointer transition-colors ${
                  isDark ? 'bg-neutral-900' : 'bg-[#f7f7f7]'
                }`}>
                  {folderName ? (
                    <FrameSequencePlayer
                      folder={folderName}
                      frameCount={240}
                      fps={30}
                      className="w-full h-full object-cover transform transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-[1.08]"
                    />
                  ) : (
                    <video
                      src={post.video_url}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover transform transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-[1.08]"
                    />
                  )}

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-400 group-hover:opacity-100 pointer-events-none" />

                  {/* Centered '+' circle */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-[70px] h-[70px] rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-3xl font-light transform scale-[0.7] transition-transform duration-300 group-hover:scale-100">
                      +
                    </div>
                  </div>

                  {/* White L-shaped corner brackets */}
                  <div className="absolute inset-[15px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-0 left-0 w-[12px] h-[12px] border-t-[1.5px] border-l-[1.5px] border-white" />
                    <div className="absolute top-0 right-0 w-[12px] h-[12px] border-t-[1.5px] border-r-[1.5px] border-white" />
                    <div className="absolute bottom-0 left-0 w-[12px] h-[12px] border-b-[1.5px] border-l-[1.5px] border-white" />
                    <div className="absolute bottom-0 right-0 w-[12px] h-[12px] border-b-[1.5px] border-r-[1.5px] border-white" />
                  </div>
                </div>

                {/* Title and Category Badge below */}
                <div className="flex justify-between items-start gap-3 mt-1">
                  <h4
                    className={`text-[17px] font-semibold leading-snug flex-1 transition-colors ${
                      isDark ? 'text-white' : 'text-neutral-900'
                    }`}
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {post.title}
                  </h4>
                  <span
                    className="rounded-[20px] text-white text-[11px] font-semibold px-3 py-1 capitalize shrink-0"
                    style={{ backgroundColor: post.category_color }}
                  >
                    {post.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
