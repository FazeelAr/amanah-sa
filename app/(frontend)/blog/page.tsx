import type { Metadata } from 'next';
import BlogClient from '@/components/BlogClient';

export const metadata: Metadata = {
  title: 'Blog & Educational Resources | Amanah Study Abroad',
  description: 'In-depth articles, scholarship guides, visa checklists, and downloadable toolkits for international study.',
};

export default function BlogPage() {
  return <BlogClient />;
}
