'use client';

import React, { useEffect, useState } from 'react';
import { fetchBlogPosts, BlogPost, defaultBlogPosts } from '@/lib/supabase';

export const BehindTheLensSection: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>(defaultBlogPosts);

  useEffect(() => {
    fetchBlogPosts().then((data) => {
      if (data && data.length > 0) {
        setPosts(data);
      }
    });
  }, []);

  const featuredPost = posts.find((p) => p.type === 'featured') || posts[0];
  const standardPosts = posts.filter((p) => p !== featuredPost);

  return (
    <section
      className="bg-white text-neutral-900 w-full py-[60px]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="max-w-[1200px] w-full mx-auto px-5">
        {/* Header */}
        <div className="mb-[50px]">
          <span className="bg-[#f4f4f4] rounded-[8px] text-[13px] px-3 py-1 font-medium text-[#666] inline-block mb-3">
            Technology Insights
          </span>
          <h2
            className="text-[64px] max-[768px]:text-[48px] font-medium leading-[1.05] tracking-[-2.5px] text-neutral-900 mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Insights & Tech Perspectives
          </h2>
          <div className="flex justify-between items-end gap-6 max-[768px]:flex-col max-[768px]:items-start max-[768px]:gap-4">
            <p className="max-w-[480px] text-[#666] text-[18px] font-medium opacity-80 leading-relaxed">
              Architectural insights, technical perspectives, and operational guides on enterprise software development, AI integration, ERP systems, and cloud engineering.
            </p>
            <button
              type="button"
              className="bg-black text-white rounded-[40px] text-[14px] font-semibold py-3 px-6 transition-transform duration-200 hover:scale-[1.02] cursor-pointer whitespace-nowrap"
            >
              Explore All Insights
            </button>
          </div>
        </div>

        {/* Featured Post (full-width card) */}
        {featuredPost && (
          <div className="grid grid-cols-2 max-[1024px]:grid-cols-1 rounded-[20px] border border-[#f0f0f0] min-h-[520px] bg-[#fcfcfc] overflow-hidden mb-[50px]">
            {/* Left side: Video with hover interaction */}
            <div className="relative overflow-hidden group cursor-pointer min-h-[340px] w-full h-full">
              <video
                src={featuredPost.video_url}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transform transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-[1.08]"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/25 opacity-0 transition-opacity duration-400 group-hover:opacity-100 pointer-events-none" />

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
                <span className="bg-black text-white text-[12px] font-medium rounded-[20px] px-[14px] py-[5px] inline-block mb-4">
                  {featuredPost.badge || 'Must Read'}
                </span>
                <h3
                  className="text-[48px] max-[768px]:text-[32px] font-medium leading-[1.15] tracking-[-1.5px] mb-4 text-neutral-900"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {featuredPost.title}
                </h3>
                <p className="text-[#666] text-[17px] leading-relaxed mb-6">
                  {featuredPost.description}
                </p>
              </div>

              <div className="mt-auto flex items-center justify-between pt-6">
                <span className="text-[14px] font-medium text-[#888]">
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
          {standardPosts.map((post, idx) => (
            <div key={post.id || idx} className="flex flex-col">
              {/* Video container */}
              <div className="aspect-[16/10] relative rounded-[20px] overflow-hidden mb-4 group cursor-pointer bg-[#f7f7f7]">
                <video
                  src={post.video_url}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transform transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-[1.08]"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/25 opacity-0 transition-opacity duration-400 group-hover:opacity-100 pointer-events-none" />

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
                  className="text-[17px] font-semibold text-neutral-900 leading-snug flex-1"
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
          ))}
        </div>
      </div>
    </section>
  );
};
