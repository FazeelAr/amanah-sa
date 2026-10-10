import type { Metadata } from 'next';
import Link from 'next/link';
import {
  destinations,
  programDetails,
  degreePrograms,
  studyLevels,
} from '@/lib/study-data';
import {
  GraduationCap,
  Clock,
  CheckCircle,
  MapPin,
  ArrowLeft,
  ChevronRight,
  BookOpen,
  Building,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Matched Study Programs & Destinations | Amanah Study Abroad',
  description: 'Explore matching degree programs and premier partner universities based on your chosen level, discipline, and destination.',
};

interface DetailPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function DestinationDetailPage({ searchParams }: DetailPageProps) {
  const resolvedParams = await searchParams;
  const rawDest = resolvedParams.destination;
  const rawProg = resolvedParams.program;
  const rawLevel = resolvedParams.level;

  const destParam = typeof rawDest === 'string' ? rawDest : 'united-kingdom';
  const progParam = typeof rawProg === 'string' ? rawProg : 'computing';
  const levelParam = typeof rawLevel === 'string' ? rawLevel : 'postgraduate';

  // Find destination or fallback to UK
  const activeDestination =
    destinations.find((d) => d.value === destParam) || destinations[0];

  // Filter programs based on criteria or fallback gracefully
  let matchedPrograms = programDetails.filter(
    (p) => p.category === progParam && p.level === levelParam
  );

  // If no exact match for this category & level combo, provide category matches or sample programs
  if (matchedPrograms.length === 0) {
    matchedPrograms = programDetails.filter((p) => p.category === progParam);
  }
  if (matchedPrograms.length === 0) {
    matchedPrograms = programDetails.slice(0, 4);
  }

  const categoryName = degreePrograms[progParam] || 'All Fields';
  const levelName = studyLevels[levelParam] || 'All Levels';

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-b from-[#011227] via-[#031F3F] to-[#011227] py-12 md:py-16 text-white relative overflow-hidden">
        <div className="container-custom relative z-10 space-y-6">
          {/* Back Navigation */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent-light hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to study finder</span>
          </Link>

          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="text-4xl">{activeDestination.flag}</span>
              <h1 className="text-3xl md:text-5xl font-black tracking-tight">
                Study in {activeDestination.name}
              </h1>
            </div>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed font-normal">
              {activeDestination.description}
            </p>

            {/* Active Filter Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Active Match:
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-white font-bold text-xs border border-white/20">
                {categoryName}
              </span>
              <span className="px-3 py-1 rounded-full bg-accent/20 text-accent-light font-bold text-xs border border-accent/40">
                {levelName}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Layout (Split Screen: 1fr / 340px sidebar) */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Programs Catalog */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div>
                <h2 className="text-2xl font-black text-primary">Matching Programs</h2>
                <p className="text-xs text-slate-500 font-semibold mt-0.5">
                  Showing curated degree offerings suited for admission into {activeDestination.name}
                </p>
              </div>
              <span className="text-xs font-bold text-accent bg-accent/10 px-3 py-1 rounded-full">
                {matchedPrograms.length} Available
              </span>
            </div>

            <div className="space-y-4">
              {matchedPrograms.map((prog) => (
                <div
                  key={prog.id}
                  className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-md border border-slate-200/80 transition-all space-y-4 group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all shrink-0">
                        <GraduationCap size={24} />
                      </div>
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-accent block mb-1">
                          {studyLevels[prog.level] || prog.level}
                        </span>
                        <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                          {prog.title}
                        </h3>
                      </div>
                    </div>

                    <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full shrink-0">
                      <CheckCircle size={14} />
                      <span>Verified Intake</span>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed pl-0 sm:pl-16">
                    {prog.description}
                  </p>

                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 pl-0 sm:pl-16">
                    <div className="flex items-center gap-4 text-xs font-bold text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <Clock size={15} className="text-accent" />
                        Duration: {prog.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <BookOpen size={15} className="text-accent" />
                        Full-Time
                      </span>
                    </div>

                    <Link
                      href="/contact"
                      className="px-5 py-2 rounded-full bg-accent text-white text-xs font-bold uppercase tracking-wider hover:bg-accent-light transition-all flex items-center gap-1.5"
                    >
                      <span>Apply for Program</span>
                      <ChevronRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sticky Aside: Partner Institutions */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm border border-slate-200 space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-accent">
                  Institutional Partners
                </span>
                <h3 className="text-xl font-black text-primary">Where You Can Study</h3>
                <p className="text-xs text-slate-500">
                  Leading universities in {activeDestination.name} with fast-tracked offer reviews:
                </p>
              </div>

              <ul className="space-y-3">
                {activeDestination.institutes.map((inst, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100 text-xs font-bold text-slate-700 hover:border-accent/40 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-xl bg-white shadow-xs flex items-center justify-center text-accent shrink-0">
                      <Building size={16} />
                    </div>
                    <span>{inst}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="p-4 rounded-2xl bg-secondary/80 text-xs text-slate-700 space-y-2">
                  <p className="font-bold text-primary">Need Admissions Assessment?</p>
                  <p>Our team verifies your GPA, language scores, and documents for these exact institutions.</p>
                </div>
                <Link
                  href="/contact"
                  className="w-full py-3.5 rounded-full bg-primary text-white font-bold text-xs uppercase tracking-wider hover:bg-primary-light transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <span>Talk to an advisor</span>
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
