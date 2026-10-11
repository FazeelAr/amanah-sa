'use client';

import Image from 'next/image';
import { ShieldCheck, Target, Award, CheckCircle } from 'lucide-react';

export default function AboutClient({ data }: { data?: any }) {
  const brandName = data?.siteSettings?.brandName || 'Amanah Study Abroad';

  return (
    <div className="pt-20">
      {/* 1. Page Header */}
      <section className="bg-gradient-to-b from-[#011227] via-[#031F3F] to-[#011227] py-14 md:py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/hero.jpeg"
            alt="About Amanah Background"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-radial from-transparent via-[#011227]/70 to-[#011227]"></div>

        <div className="container-custom relative z-10 text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-accent-light border border-white/20 px-3.5 py-1 rounded-full bg-white/5 inline-block">
            About Our Consultancy
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">
            Our Legacy.
          </h1>
          <p className="text-base md:text-lg text-slate-200 font-normal leading-relaxed">
            Building bridges between local talent and global opportunities since 2014.
          </p>
        </div>
      </section>

      {/* 2. Story Section ("Built on Trust, Driven by Results") */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-3">
              <span className="text-accent font-black tracking-[0.2em] uppercase border-l-4 border-accent pl-3 text-xs">
                Built on Trust, Driven by Results
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-primary leading-tight">
                Empowering Generations of Global Scholars.
              </h2>
            </div>

            <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
              <p className="italic text-base font-medium text-primary border-l-4 border-slate-200 pl-4">
                &ldquo;True to our name &lsquo;Amanah&rsquo; (sacred trust), we operate on unwavering transparency, scientific course matching, and deep advocacy for every student who walks through our doors.&rdquo;
              </p>
              <p>
                Founded in Lahore, {brandName} was established to eliminate fraudulent counseling, misleading promises, and confusing visa procedures. Over the last decade, we have built trusted relationships with premier universities across the UK, Australia, Canada, New Zealand, and Europe.
              </p>
              <p>
                Our student-centric philosophy ensures each applicant receives an honest appraisal of their credentials, complete clarity on financial requirements, and an actionable roadmap toward academic graduation and international career success.
              </p>
            </div>

            {/* Statistics Row */}
            <div className="grid grid-cols-2 gap-6 pt-2">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-accent/30 transition-all">
                <div className="text-3xl sm:text-4xl font-black text-accent mb-1">10y+</div>
                <p className="text-primary font-bold text-sm">Market Leadership</p>
                <p className="text-slate-500 text-xs mt-1">Trusted educational counsel in Pakistan</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-accent/30 transition-all">
                <div className="text-3xl sm:text-4xl font-black text-accent mb-1">99%</div>
                <p className="text-primary font-bold text-sm">Visa Success Rate</p>
                <p className="text-slate-500 text-xs mt-1">Backed by rigorous file compliance audits</p>
              </div>
            </div>
          </div>

          {/* Right Image: Team Visual with CEO Quote */}
          <div className="relative h-[400px] sm:h-[460px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-50 group bg-slate-100">
            <Image
              src="/aim_team.png"
              alt={`${brandName} Team Visual`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500"></div>

            {/* CEO Quote Overlay Card */}
            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 bg-white/95 backdrop-blur-md p-5 md:p-6 rounded-2xl shadow-xl border border-white">
              <p className="text-primary font-bold text-sm md:text-base italic leading-relaxed">
                &ldquo;Integrity is the core of our consultancy. We don&apos;t just process files; we build futures.&rdquo;
              </p>
              <p className="text-accent font-black mt-2 md:mt-3 uppercase tracking-widest text-[10px] md:text-xs">
                — CEO, {brandName}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values Section (Deep navy container) */}
      <section className="section-padding bg-[#031F3F] text-white relative overflow-hidden">
        <div className="container-custom relative z-10 space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-accent-light font-black tracking-widest uppercase text-xs">
              Guiding Principles
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              Our Core Values
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
            <p className="text-slate-300 text-sm md:text-base">
              The ethical standards that direct every counseling session and university application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Transparency',
                icon: <ShieldCheck className="text-accent-light" size={36} />,
                subtitle: 'No hidden fees, no false promises.',
                desc: 'We operate with utter honesty. Students receive frank guidance on realistic admission requirements, fee structures, and genuine visa probabilities from day one.',
              },
              {
                title: 'Personalization',
                icon: <Target className="text-accent-light" size={36} />,
                subtitle: 'Customized strategies for distinct student goals.',
                desc: 'Every student carries a unique blend of strengths, passions, and economic background. We build custom-crafted roadmaps tailored exclusively to your profile.',
              },
              {
                title: 'Excellence',
                icon: <Award className="text-accent-light" size={36} />,
                subtitle: 'Highest benchmark in global admissions and visas.',
                desc: 'From statement of purpose refinement to high-level compliance checks, our meticulous attention to detail delivers results that consistently lead the industry.',
              },
            ].map((value, i) => (
              <div
                key={i}
                className="p-8 bg-[#011227]/80 rounded-2xl border border-white/10 hover:border-accent/40 shadow-lg transition-all group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-accent-light transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-xs font-bold text-accent-light uppercase tracking-wider">
                    {value.subtitle}
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {value.desc}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-2 text-xs font-bold text-slate-400">
                  <CheckCircle size={14} className="text-accent" />
                  <span>Standard of Practice</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Leadership Team Section ("Meet Our Leadership") */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom text-center space-y-12">
          <div className="space-y-3 max-w-2xl mx-auto">
            <span className="text-accent font-black tracking-widest uppercase text-xs">
              Executive Governance
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tight">
              Meet Our Leadership
            </h2>
            <p className="text-sm md:text-base text-slate-600 font-medium">
              Seasoned advisors and immigration strategists dedicated to unlocking your international education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                role: 'CEO & Founder',
                focus: 'Strategic Vision & University Alliances',
                responsibilities:
                  'Steers the strategic direction of Amanah Study Abroad, establishing institutional bilateral partnerships and ensuring uncompromising counseling standards.',
              },
              {
                role: 'Head of Global Strategy',
                focus: 'University Alliances & Pathways',
                responsibilities:
                  'Oversees academic trend evaluations, university program alignments, curriculum mapping, and specialized scholarship initiatives across all represented countries.',
              },
              {
                role: 'Operations Director & Visa Specialist',
                focus: 'Immigration Compliance & 99% Success Rate',
                responsibilities:
                  'Directs documentation compliance, student financial verification frameworks, and consular interview preparation with an exemplary track record.',
              },
            ].map((member, i) => (
              <div
                key={i}
                className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col justify-between text-left relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1.5 bg-accent"></div>
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">
                      {member.focus}
                    </span>
                    <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300 mt-1">
                      {member.role}
                    </h3>
                  </div>
                  <div className="h-px bg-slate-100 w-full"></div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {member.responsibilities}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-primary/40 group-hover:text-accent transition-colors">
                  <span className="text-[9px] font-black uppercase tracking-widest">
                    Amanah Executive
                  </span>
                  <span className="text-lg">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
