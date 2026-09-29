import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder'
);

export interface BlogPost {
  id?: string | number;
  type: 'featured' | 'standard';
  badge?: string;
  title: string;
  description?: string;
  author?: string;
  category: string;
  category_color: string;
  video_url: string;
  display_order: number;
}

export const defaultBlogPosts: BlogPost[] = [
  {
    id: 1,
    type: 'featured',
    badge: 'Must Read',
    title: 'Architecting Custom ERP & CRM Platforms for Enterprise Scale',
    description:
      "An engineering guide to designing modular, multi-tenant ERP and CRM architectures that streamline operations and sync data across enterprise branches.",
    author: 'By ANVITECH Engineering Team',
    category: 'Enterprise',
    category_color: '#1a2b8c',
    video_url:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_155500_808e6fdd-761f-4acd-b3be-cb7e6e700def.mp4',
    display_order: 1,
  },
  {
    id: 2,
    type: 'standard',
    title: 'Deploying AI Agents in Business Workflows: Practical Patterns',
    category: 'AI & Automation',
    category_color: '#7d1a4a',
    video_url:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260506_030111_a9e15665-d379-4a7f-8116-695bbe452ad1.mp4',
    display_order: 2,
  },
  {
    id: 3,
    type: 'standard',
    title: 'Building Resilient Logistics Software with Real-Time Tracking',
    category: 'Logistics',
    category_color: '#2c4c34',
    video_url:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4',
    display_order: 3,
  },
  {
    id: 4,
    type: 'standard',
    title: 'DevOps & Cloud Strategies for Zero-Downtime Deployment',
    category: 'Cloud & DevOps',
    category_color: '#a63e2d',
    video_url:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_154232_f8809bd2-a6c3-4a38-908d-2005e5b3cb3e.mp4',
    display_order: 4,
  },
];

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  if (!supabaseUrl || !supabaseAnonKey) {
    return defaultBlogPosts;
  }
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('display_order', { ascending: true });

    if (error || !data || data.length === 0) {
      return defaultBlogPosts;
    }
    return data as BlogPost[];
  } catch {
    return defaultBlogPosts;
  }
}
