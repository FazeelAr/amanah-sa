import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  HelpCircle,
  Clock,
  ShieldCheck,
  Users,
  CheckCircle2,
  Calendar,
  MessageCircle,
  FileText,
  DollarSign,
  Plane,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import FAQComponent from '@/components/FAQComponent';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions (FAQs) | Amanah Study Abroad',
  description: 'Everything you need to know about international university admissions, student visa requirements, scholarships, and post-arrival support.',
};

export default function FAQsPage() {
  const categoryOverviewCards = [
    {
      title: 'Getting Started',
      icon: <Sparkles className="text-accent" size={24} />,
      summary: 'Timelines, intake cycles, choosing destination countries, and zero-cost initial counseling sessions.',
    },
    {
      title: 'Applications',
      icon: <FileText className="text-accent" size={24} />,
      summary: 'Documentation checklists, SOP drafting, recommendation letters, handling study gaps, and offer turnaround times.',
    },
    {
      title: 'Visa & Immigration',
      icon: <ShieldCheck className="text-accent" size={24} />,
      summary: 'Financial proofs, bank statements, genuine student intent tests, consular mock interviews, and refusal avoidance.',
    },
    {
      title: 'Funding & Scholarships',
      icon: <DollarSign className="text-accent" size={24} />,
      summary: 'Merit-based university discounts, external grants, education financing, and international student part-time work rights.',
    },
    {
      title: 'Post-Arrival Support',
      icon: <Plane className="text-accent" size={24} />,
      summary: 'Safe student accommodation booking, airport pickup coordination, local bank accounts, and foreign campus integration.',
    },
    {
      title: 'General Queries',
      icon: <HelpCircle className="text-accent" size={24} />,
      summary: 'Bringing dependents/spouses, post-study work visa eligibility, and long-term residency career roadmaps.',
    },
  ];

  return (
    <div className="pt-20">
      {/* 1. Header */}
      <section className="bg-gradient-to-b from-[#011227] via-[#031F3F] to-[#011227] py-16 md:py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/hero.jpeg"
            alt="FAQs Background"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-radial from-transparent via-[#011227]/70 to-[#011227]"></div>

        <div className="container-custom relative z-10 space-y-4 max-w-3xl mx-auto">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-accent-light border border-white/20 px-3.5 py-1 rounded-full bg-white/5 inline-block">
            Comprehensive Knowledge Base
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-base md:text-lg text-slate-200 font-normal leading-relaxed">
            Clear, honest, and actionable answers to all your concerns about international admissions, visa procedures, and global student life.
          </p>
        </div>
      </section>

      {/* 2. Trust Stats Bar */}
      <section className="bg-white border-b border-slate-200 py-6">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <div className="p-3 border-r border-slate-100 last:border-none">
              <span className="text-2xl font-black text-primary block">50+</span>
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">FAQs Answered</span>
            </div>
            <div className="p-3 border-r border-slate-100 last:border-none">
              <span className="text-2xl font-black text-primary block">24/7</span>
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Support Available</span>
            </div>
            <div className="p-3 border-r border-slate-100 last:border-none">
              <span className="text-2xl font-black text-primary block">99%</span>
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Visa Success Rate</span>
            </div>
            <div className="p-3">
              <span className="text-2xl font-black text-primary block">100K+</span>
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Students Guided</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Knowledge Base: Mounts FAQComponent */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-accent font-black tracking-widest uppercase text-xs">
              Explore by Category
            </span>
            <h2 className="text-3xl font-black text-primary tracking-tight">
              Instant Answers to Common Questions
            </h2>
            <p className="text-slate-600 text-sm">
              Filter by topic to find immediate answers to admissions and visa protocols.
            </p>
          </div>

          <FAQComponent />
        </div>
      </section>

      {/* 4. "Still Have Questions?" Consultation Box */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-accent font-black tracking-widest uppercase text-xs">
                Need Specific Help?
              </span>
              <h3 className="text-2xl font-black text-primary">Still Have Unanswered Questions?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Every student case has distinct nuances. Speak directly with our Senior Education Advisors for immediate clarity on your individual credentials.
              </p>
              <ul className="space-y-2 text-xs font-semibold text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-accent shrink-0" />
                  <span>1-on-1 private counselor session</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-accent shrink-0" />
                  <span>Free GPA and transcript eligibility review</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-accent shrink-0" />
                  <span>Expert bank statement & financial sponsorship tips</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200/80 text-center">
              <h4 className="font-bold text-primary text-base">Connect with Us Today</h4>
              <p className="text-xs text-slate-500">Fast response via WhatsApp or visit our Lahore office.</p>
              <div className="space-y-2 pt-2">
                <Link
                  href="/contact"
                  className="w-full py-3 rounded-full bg-accent text-white font-bold text-xs uppercase tracking-wider hover:bg-accent-light transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <Calendar size={14} />
                  <span>Book Free Consultation</span>
                </Link>
                <a
                  href="https://wa.me/923143782608?text=Hello%20Amanah%20Study%20Abroad,%20I%20have%20questions%20regarding%20study%20visas."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-full bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageCircle size={14} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Browse by Category Overview Cards */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-accent font-black tracking-widest uppercase text-xs">
              Topic Summaries
            </span>
            <h2 className="text-3xl font-black text-primary tracking-tight">
              Browse by Subject Area
            </h2>
            <p className="text-slate-600 text-sm">
              Explore key areas our counselors specialize in advising daily.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryOverviewCards.map((card, i) => (
              <div
                key={i}
                className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all space-y-3"
              >
                <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-primary">{card.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{card.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Bottom CTA */}
      <section className="py-14 md:py-20 bg-secondary text-center">
        <div className="container-custom max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-black text-primary">
            Ready to Begin Your Application?
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Don&apos;t let questions hold you back. Schedule your personalized assessment with Amanah Study Abroad today.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-accent text-white font-bold text-xs uppercase tracking-widest hover:bg-accent-light shadow-xl shadow-accent/20 transition-all inline-flex items-center gap-2"
            >
              Start Free Assessment <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
