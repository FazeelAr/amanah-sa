'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Search,
  BookOpen,
  Download,
  Clock,
  FileText,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

interface Article {
  id: string;
  title: string;
  category: 'Visa Guide' | 'Scholarships' | 'Application Tips' | 'Career Guidance' | 'Test Prep' | 'Student Life';
  readTime: string;
  date: string;
  summary: string;
}

const articlesData: Article[] = [
  {
    id: 'art-1',
    title: 'Complete Guide to UK Student Visa 2026',
    category: 'Visa Guide',
    readTime: '8 min read',
    date: 'Oct 2026',
    summary: 'A detailed breakdown of UK Student Route visa requirements, Confirmation of Acceptance for Studies (CAS), financial maintenance proof rules, and biometric appointments.',
  },
  {
    id: 'art-2',
    title: 'Top 10 Scholarship Opportunities for Pakistani Students',
    category: 'Scholarships',
    readTime: '12 min read',
    date: 'Sep 2026',
    summary: 'Essential guide to prestigious merit awards including Chevening, Australia Awards, Commonwealth Scholarships, and university-funded tuition fee discounts.',
  },
  {
    id: 'art-3',
    title: 'How to Write a Winning Statement of Purpose (SOP)',
    category: 'Application Tips',
    readTime: '10 min read',
    date: 'Aug 2026',
    summary: 'Structural blueprint, persuasive storytelling techniques, and real excerpts that turn standard personal statements into admission committee favorites.',
  },
  {
    id: 'art-4',
    title: 'Canada Student Visa Process: Complete Checklist',
    category: 'Visa Guide',
    readTime: '9 min read',
    date: 'Aug 2026',
    summary: 'Navigating recent IRCC updates, Provincial Attestation Letters (PAL), GIC accounts, biometrics, and medical examinations for hassle-free approvals.',
  },
  {
    id: 'art-5',
    title: 'Masters vs MBA: Which Should You Choose?',
    category: 'Career Guidance',
    readTime: '11 min read',
    date: 'Jul 2026',
    summary: 'Comparing specialized MSc programs versus generalized Master of Business Administration degrees in terms of costs, work experience, and global salary ROI.',
  },
  {
    id: 'art-6',
    title: '5 Common Visa Interview Mistakes to Avoid',
    category: 'Visa Guide',
    readTime: '7 min read',
    date: 'Jun 2026',
    summary: 'Crucial errors students make when articulating study intentions, home country ties, and funding sources during embassy consular interviews.',
  },
  {
    id: 'art-7',
    title: 'IELTS Preparation: Tips for Achieving 7.0+ Band Score',
    category: 'Test Prep',
    readTime: '13 min read',
    date: 'Jun 2026',
    summary: 'High-impact strategies across Reading, Listening, Writing, and Speaking modules with certified tutor tips to surpass university benchmark cutoffs.',
  },
  {
    id: 'art-8',
    title: 'Student Accommodation Guide: Finding Your Perfect Home',
    category: 'Student Life',
    readTime: '9 min read',
    date: 'May 2026',
    summary: 'Comparing on-campus university halls, private Purpose-Built Student Accommodations (PBSA), and homestays abroad including budgeting and safety checks.',
  },
  {
    id: 'art-9',
    title: 'How to Build a Strong University Application Profile',
    category: 'Application Tips',
    readTime: '11 min read',
    date: 'Apr 2026',
    summary: 'Transforming extracurricular leadership, research projects, and online certifications to compensate for moderate GPAs and gaps in study.',
  },
];

const categories = [
  'All',
  'Visa Guide',
  'Scholarships',
  'Application Tips',
  'Career Guidance',
  'Test Prep',
  'Student Life',
] as const;

export default function BlogClient() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [downloadingFile, setDownloadingFile] = useState<string | null>(null);

  const filteredArticles = articlesData.filter((article) => {
    const matchesCategory =
      selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleDownload = (filename: string) => {
    setDownloadingFile(filename);
    setTimeout(() => {
      setDownloadingFile(null);
      alert(`Download started for ${filename}. Thank you for using Amanah Study Abroad resources!`);
    }, 1200);
  };

  return (
    <div className="pt-20">
      {/* 1. Header */}
      <section className="bg-gradient-to-b from-[#011227] via-[#031F3F] to-[#011227] py-16 md:py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/hero.jpeg"
            alt="Articles & Guides Background"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-radial from-transparent via-[#011227]/70 to-[#011227]"></div>

        <div className="container-custom relative z-10 space-y-4 max-w-3xl mx-auto">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-accent-light border border-white/20 px-3.5 py-1 rounded-full bg-white/5 inline-block">
            Knowledge Hub
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">
            Articles, Guides & Resources
          </h1>
          <p className="text-base md:text-lg text-slate-200 font-normal leading-relaxed">
            In-depth guides, visa checklists, and expert admissions blueprints authored by senior counselors at Amanah Study Abroad.
          </p>
        </div>
      </section>

      {/* 2. Interactive Search & Category Filter */}
      <section className="bg-white border-b border-slate-200 py-8 sticky top-20 z-30 shadow-xs">
        <div className="container-custom space-y-5">
          {/* Live Search Input */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search guides by keyword, visa type, or topic..."
              className="w-full pl-11 pr-4 py-3 rounded-full border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-accent text-sm text-slate-800 transition-colors shadow-inner"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-accent text-white shadow-md shadow-accent/20 scale-105'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Dynamic Result Count */}
          <div className="text-center text-xs font-semibold text-slate-500">
            Showing <strong className="text-primary">{filteredArticles.length}</strong> articles in{' '}
            <span className="text-accent">{selectedCategory}</span>
          </div>
        </div>
      </section>

      {/* 3. Articles Catalog (9 Complete Guides) */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <BookOpen size={40} className="mx-auto text-slate-300" />
              <h3 className="text-lg font-bold text-primary">No articles found</h3>
              <p className="text-sm text-slate-500">Try adjusting your search terms or selecting another category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <div
                  key={article.id}
                  className="bg-white rounded-3xl p-7 shadow-sm hover:shadow-xl border border-slate-100 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-400">
                      <span className="text-accent uppercase tracking-wider">{article.category}</span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed">
                      {article.summary}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                    <span className="text-slate-400">{article.date}</span>
                    <Link
                      href="/contact"
                      className="text-accent group-hover:text-accent-dark flex items-center gap-1 uppercase tracking-wider"
                    >
                      <span>Read Guide</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. Popular Resource Hub */}
      <section className="section-padding bg-white border-t border-slate-200">
        <div className="container-custom space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-accent font-black tracking-widest uppercase text-xs">
              Curated Collections
            </span>
            <h2 className="text-3xl font-black text-primary tracking-tight">
              Popular Resource Hub
            </h2>
            <p className="text-slate-600 text-sm">
              Explore extensive compilations categorized by your immediate application stage.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { title: 'Visa Guides', count: '15+ Guides', desc: 'Schengen, UK, Canada & Australia step-by-step documentation blueprints.' },
              { title: 'Scholarships', count: '100+ Grants', desc: 'Direct funding directories, eligibility thresholds, and deadlines.' },
              { title: 'Test Preparation', count: '20+ Kits', desc: 'IELTS, PTE and TOEFL templates, vocabulary banks, and mock sets.' },
              { title: 'Career Guidance', count: '25+ Blueprints', desc: 'International post-study work routes, resume formats, and ROI charts.' },
            ].map((hub, i) => (
              <div
                key={i}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-accent/40 hover:shadow-md transition-all space-y-2"
              >
                <div className="text-2xl font-black text-accent">{hub.count}</div>
                <h3 className="font-bold text-primary text-base">{hub.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{hub.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Free Downloadable Assets Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-accent font-black tracking-widest uppercase text-xs">
              Free Downloads
            </span>
            <h2 className="text-3xl font-black text-primary tracking-tight">
              Downloadable Application Toolkits
            </h2>
            <p className="text-slate-600 text-sm">
              Instant access to proven templates and checklists prepared by our Senior Visa Officers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                name: 'Visa Checklist 2026',
                format: 'PDF · 2.5 MB',
                desc: 'Comprehensive document checklist including bank statement wording, affidavits, and attestation steps.',
              },
              {
                name: 'Application Timeline Planner',
                format: 'PDF · 1.8 MB',
                desc: '12-month milestone timeline tracking intake deadlines, scholarship submission windows, and testing dates.',
              },
              {
                name: 'Winning SOP Template',
                format: 'DOCX · 500 KB',
                desc: 'Editable statement of purpose template featuring proven paragraph breakdowns and phrasing recommendations.',
              },
            ].map((file, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-4 hover:border-accent/40 transition-colors"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-accent">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-base">{file.name}</h3>
                    <span className="text-[10px] font-black uppercase tracking-wider text-accent">
                      {file.format}
                    </span>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">{file.desc}</p>
                </div>

                <button
                  onClick={() => handleDownload(file.name)}
                  disabled={downloadingFile === file.name}
                  className="w-full py-2.5 rounded-full bg-primary text-white hover:bg-accent font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download size={14} />
                  <span>{downloadingFile === file.name ? 'Downloading...' : 'Download Free'}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Newsletter Subscription Bar */}
      <section className="py-14 bg-gradient-to-r from-[#031F3F] via-[#0A315E] to-[#031F3F] text-white text-center">
        <div className="container-custom max-w-2xl mx-auto space-y-4">
          <Sparkles className="text-accent-light w-8 h-8 mx-auto" />
          <h2 className="text-2xl md:text-3xl font-black">Stay Ahead on Global Admissions</h2>
          <p className="text-sm text-slate-200">
            Receive monthly summaries of visa regulatory updates, scholarship announcements, and university delegate visit schedules.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-slate-300 focus:outline-none focus:border-accent text-sm"
            />
            <button
              onClick={() => alert('Thank you for subscribing to the Amanah Study Abroad bulletin!')}
              className="px-8 py-3 rounded-full bg-accent text-white font-bold text-xs uppercase tracking-wider hover:bg-accent-light transition-all cursor-pointer"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
