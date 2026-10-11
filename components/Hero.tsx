'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChevronRight, Search, GraduationCap, Building2, CheckCircle2, Award } from 'lucide-react';
import { degreePrograms, studyLevels, destinations } from '@/lib/study-data';

export default function Hero({ data }: { data?: any }) {
  const router = useRouter();
  const [selectedProgram, setSelectedProgram] = useState('computing');
  const [selectedLevel, setSelectedLevel] = useState('postgraduate');
  const [selectedDestination, setSelectedDestination] = useState('united-kingdom');

  const handleFinderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({
      program: selectedProgram,
      level: selectedLevel,
      destination: selectedDestination,
    });
    router.push(`/destination/detail?${params.toString()}`);
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#011227] via-[#031F3F] to-[#011227] text-white flex items-center min-h-[90vh]">
      {/* Background imagery & glow */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full opacity-25">
          <Image
            src={data?.backgroundImageUrl || '/hero.jpeg'}
            alt="Amanah Global Education"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-radial from-transparent via-[#011227]/70 to-[#011227]"></div>
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary-light/40 rounded-full blur-[140px] pointer-events-none"></div>
      </div>

      <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Heading, Value Props, Stats */}
        <div className="lg:col-span-7 text-left space-y-6">
          <div>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-black text-xs tracking-widest uppercase shadow-lg">
              <Award className="text-accent w-4 h-4" />
              <span>Rated #1 Consultancy in Pakistan</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping"></span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight text-white">
            Guiding Your Journey, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light via-accent to-red-300 underline decoration-accent/60 decoration-wavy decoration-2">
              Building Your Future.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal">
            Empowering students and aspiring professionals across Pakistan to achieve global academic excellence with honest counsel, fast-tracked admissions, and an industry-leading visa success record.
          </p>

          <div className="flex flex-wrap gap-4 pt-1">
            <Link
              href="/services"
              className="px-7 py-3.5 bg-accent text-white rounded-full font-black text-xs uppercase tracking-widest shadow-xl shadow-accent/30 hover:bg-accent-light hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 group cursor-pointer"
            >
              Explore Services{' '}
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="px-7 py-3.5 rounded-full border border-white/30 bg-white/10 text-white font-black text-xs uppercase tracking-widest hover:bg-white hover:text-primary active:scale-95 transition-all duration-300 backdrop-blur-md shadow-md"
            >
              Our Story
            </Link>
          </div>

          {/* Quick Counters */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/15 max-w-xl">
            <div className="space-y-0.5">
              <div className="flex items-center gap-1.5 text-accent-light font-black text-xl sm:text-2xl">
                <Building2 size={18} />
                <span>500+</span>
              </div>
              <p className="text-[10px] sm:text-xs font-bold text-slate-300 uppercase tracking-wider">Universities</p>
            </div>
            <div className="space-y-0.5">
              <div className="flex items-center gap-1.5 text-accent-light font-black text-xl sm:text-2xl">
                <CheckCircle2 size={18} />
                <span>99%</span>
              </div>
              <p className="text-[10px] sm:text-xs font-bold text-slate-300 uppercase tracking-wider">Visa Success</p>
            </div>
            <div className="space-y-0.5">
              <div className="flex items-center gap-1.5 text-accent-light font-black text-xl sm:text-2xl">
                <GraduationCap size={18} />
                <span>10+ Years</span>
              </div>
              <p className="text-[10px] sm:text-xs font-bold text-slate-300 uppercase tracking-wider">Experience</p>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Course Finder Card */}
        <div className="lg:col-span-5 relative">
          <div className="bg-white/95 backdrop-blur-xl rounded-[2rem] p-6 sm:p-8 shadow-2xl border border-white text-slate-800 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-accent-light"></div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-accent shadow-inner">
                <Search size={24} />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-accent">
                  Interactive Program Matcher
                </span>
                <h3 className="text-xl font-black text-primary tracking-tight">Find Your Ideal Course</h3>
              </div>
            </div>

            <form onSubmit={handleFinderSubmit} className="space-y-4">
              {/* Field 1: Degree Category */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  1. Degree Category
                </label>
                <div className="relative">
                  <select
                    value={selectedProgram}
                    onChange={(e) => setSelectedProgram(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-accent text-sm font-semibold text-slate-800 transition-colors cursor-pointer appearance-none"
                  >
                    {Object.entries(degreePrograms).map(([key, label]) => (
                      <option key={key} value={key}>
                        {label}
                      </option>
                    ))}
                  </select>
                  <ChevronRight size={16} className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Field 2: Education Level */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  2. Education Level
                </label>
                <div className="relative">
                  <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-accent text-sm font-semibold text-slate-800 transition-colors cursor-pointer appearance-none"
                  >
                    {Object.entries(studyLevels).map(([key, label]) => (
                      <option key={key} value={key}>
                        {label}
                      </option>
                    ))}
                  </select>
                  <ChevronRight size={16} className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Field 3: Study Destination */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  3. Study Destination
                </label>
                <div className="relative">
                  <select
                    value={selectedDestination}
                    onChange={(e) => setSelectedDestination(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-accent text-sm font-semibold text-slate-800 transition-colors cursor-pointer appearance-none"
                  >
                    {destinations.map((dest) => (
                      <option key={dest.value} value={dest.value}>
                        {dest.flag} {dest.name}
                      </option>
                    ))}
                  </select>
                  <ChevronRight size={16} className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-slate-400 pointer-events-none" />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3.5 px-6 rounded-full bg-accent text-white font-black text-sm uppercase tracking-wider shadow-lg shadow-accent/25 hover:bg-accent-light hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer transition-all duration-200"
              >
                <span>Explore programs</span>
                <ChevronRight size={18} />
              </button>
            </form>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-semibold">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span> 500+ Partner Portals Active
              </span>
              <span className="text-accent font-bold">100% Free Consultation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
