import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Globe2,
  Building2,
  Users,
  CheckCircle2,
  HelpCircle,
  Briefcase,
  Wallet,
  TrendingUp,
  Smile,
  ChevronRight,
  MessageCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Study Destinations | Amanah Study Abroad',
  description: 'Explore opportunities across 65+ countries worldwide. Find your perfect study destination with expert guidance from Amanah Study Abroad.',
};

export default function StudyDestinationsPage() {
  const topDestinations = [
    {
      flag: '🇳🇿',
      name: 'New Zealand',
      tagline: 'World-Class Research & Exceptional Living Standard',
      universities: '20+ Universities & Institutes',
      students: '600+ Placed Students',
      programs: '1,000+ Accredited Programs',
      cost: '$15,000 - $25,000 / year',
      benefits: [
        'Post-study work rights for up to 3 years',
        'All 8 state universities ranked in global top 3%',
        'Safe, scenic, student-welcoming environment',
        'Part-time work permitted during studies (20 hrs/week)',
      ],
      slug: 'new-zealand',
    },
    {
      flag: '🇪🇺',
      name: 'Europe (Germany, Italy, Netherlands, France)',
      tagline: 'Affordable Tuition & Continental Mobility',
      universities: '1,000+ European Institutions',
      students: '8,000+ Placed Students',
      programs: '20,000+ English-Taught Programs',
      cost: '€5,000 - €25,000 / year (Free in public German unis)',
      benefits: [
        'Low or zero tuition fees in leading public universities',
        '100% English-taught Bachelor’s and Master’s degrees',
        'Schengen visa travel freedom across 27 countries',
        'High demand for engineering and technology graduates',
      ],
      slug: 'europe',
    },
    {
      flag: '🇦🇺',
      name: 'Australia',
      tagline: 'High Standard of Living & High-Demand Career Pathways',
      universities: '43 Global Universities',
      students: '2,500+ Placed Students',
      programs: '5,000+ Degree Courses',
      cost: 'A$15,000 - A$28,000 / year',
      benefits: [
        'Generous post-study temporary graduate visas (Subclass 485)',
        'Home to 7 of the world’s top 100 universities',
        'Vibrant multicultural cities with high part-time wages',
        'Streamlined fast-track visa processing for genuine students',
      ],
      slug: 'australia',
    },
    {
      flag: '🇬🇧',
      name: 'United Kingdom',
      tagline: 'Academic Prestige & Accelerated 1-Year Master’s',
      universities: '150+ Renowned Universities',
      students: '4,500+ Placed Students',
      programs: '3,000+ Degree Options',
      cost: '£15,000 - £30,000 / year',
      benefits: [
        '1-Year accelerated Master’s programs reduce living costs',
        '2-Year Graduate Route post-study work visa',
        'Global historic prestige recognized by employers worldwide',
        'Extensive merit scholarships up to £10,000',
      ],
      slug: 'united-kingdom',
    },
    {
      flag: '🇹🇷',
      name: 'Turkey',
      tagline: 'Affordable Eurasian Education Gateway',
      universities: '200+ Recognized Universities',
      students: '1,200+ Placed Students',
      programs: '5,000+ English & Bilingual Degrees',
      cost: '$3,000 - $12,000 / year',
      benefits: [
        'Highly economical tuition and comfortable living expenses',
        'Bilateral cultural affinity and welcoming environment',
        'Fully funded Türkiye Bursları government scholarships available',
        'Strategic geographic bridge between Europe and Asia',
      ],
      slug: 'turkey',
    },
  ];

  const decisionPillars = [
    {
      title: 'Career & Employment Goals',
      icon: <Briefcase className="text-accent w-6 h-6" />,
      desc: 'Evaluate long-term post-study work visa policies, skill shortage lists, and international hiring demand in your specific sector.',
    },
    {
      title: 'Budget & Financial Reality',
      icon: <Wallet className="text-accent w-6 h-6" />,
      desc: 'Balance tuition fees against living expenses, mandatory bank proof requirements, and available partial or full scholarships.',
    },
    {
      title: 'Program Rankings & Pedagogy',
      icon: <TrendingUp className="text-accent w-6 h-6" />,
      desc: 'Look beyond overall university ranking to specific department prestige, laboratory infrastructure, and faculty research output.',
    },
    {
      title: 'Lifestyle & Cultural Fit',
      icon: <Smile className="text-accent w-6 h-6" />,
      desc: 'Consider weather preferences, campus size, local cost of living index, student diversity, and existing diaspora support networks.',
    },
  ];

  return (
    <div className="pt-20">
      {/* 1. Page Header */}
      <section className="bg-gradient-to-b from-[#011227] via-[#031F3F] to-[#011227] py-16 md:py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/hero.jpeg"
            alt="Study Destinations Background"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-radial from-transparent via-[#011227]/70 to-[#011227]"></div>

        <div className="container-custom relative z-10 space-y-4 max-w-3xl mx-auto">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-accent-light border border-white/20 px-3.5 py-1 rounded-full bg-white/5 inline-block">
            Global Horizons
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">
            Study Destinations
          </h1>
          <p className="text-base md:text-lg text-slate-200 font-normal leading-relaxed">
            Explore opportunities across 65+ countries worldwide. Find your perfect study destination with trusted counseling from Amanah Study Abroad.
          </p>
        </div>
      </section>

      {/* 2. Quick Metrics Banner */}
      <section className="bg-white border-b border-slate-200 py-8 relative">
        <div className="container-custom space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center gap-4">
              <Globe2 className="text-accent w-8 h-8 shrink-0" />
              <div className="text-left">
                <span className="text-2xl font-black text-primary block leading-none">65+</span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Study Destinations</span>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center gap-4">
              <Building2 className="text-accent w-8 h-8 shrink-0" />
              <div className="text-left">
                <span className="text-2xl font-black text-primary block leading-none">3,000+</span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Partner Universities</span>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center gap-4">
              <Users className="text-accent w-8 h-8 shrink-0" />
              <div className="text-left">
                <span className="text-2xl font-black text-primary block leading-none">100K+</span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Students Guided</span>
              </div>
            </div>
          </div>

          {/* Tip Box */}
          <div className="p-4 md:p-5 rounded-2xl bg-secondary/80 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-sm text-slate-700">
              <HelpCircle className="text-accent w-5 h-5 shrink-0" />
              <span><strong>Undecided on which country matches your profile?</strong> Our senior counselors offer personalized profile evaluations at zero charge.</span>
            </div>
            <Link
              href="/contact"
              className="px-5 py-2 rounded-full bg-accent text-white text-xs font-black uppercase tracking-wider shrink-0 hover:bg-accent-light transition-all"
            >
              Book 1-on-1 Counseling
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Top Study Destinations Grid (Detailed Breakdown) */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-accent font-black tracking-widest uppercase text-xs">
              In-Depth Profiles
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tight">
              Top Study Destinations
            </h2>
            <p className="text-slate-600 text-sm md:text-base">
              Detailed breakdown of tuition expectations, living standards, work rights, and academic offerings.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {topDestinations.map((dest, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Title & Flag */}
                  <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-3xl">{dest.flag}</span>
                        <h3 className="text-2xl font-black text-primary">{dest.name}</h3>
                      </div>
                      <p className="text-xs text-accent font-bold mt-1 uppercase tracking-wider">
                        {dest.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100 text-xs">
                    <div>
                      <span className="text-slate-400 block font-semibold">Institutes</span>
                      <strong className="text-slate-800">{dest.universities}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-semibold">Alumni Placed</span>
                      <strong className="text-slate-800">{dest.students}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-semibold">Available Programs</span>
                      <strong className="text-slate-800">{dest.programs}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-semibold">Typical Tuition</span>
                      <strong className="text-accent font-bold">{dest.cost}</strong>
                    </div>
                  </div>

                  {/* Benefits Checklist */}
                  <div className="space-y-2.5">
                    <span className="text-xs font-black uppercase tracking-wider text-primary">
                      Key Highlights & Work Rights
                    </span>
                    <ul className="space-y-2">
                      {dest.benefits.map((b, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                          <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/destination/detail?destination=${dest.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-accent hover:text-accent-dark transition-colors"
                  >
                    <span>Explore Available Programs</span>
                    <ChevronRight size={16} />
                  </Link>
                  <Link
                    href="/contact"
                    className="px-4 py-2 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider hover:bg-primary-light transition-all"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Destination Decision Guide */}
      <section className="section-padding bg-white">
        <div className="container-custom space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-accent font-black tracking-widest uppercase text-xs">
              Strategic Decision Making
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tight">
              How to Choose Your Destination
            </h2>
            <p className="text-slate-600 text-sm md:text-base">
              Four fundamental pillars our counselors use to match you with the right country.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {decisionPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-accent/30 hover:shadow-lg transition-all space-y-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-primary">{pillar.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Dual CTA Banner */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="container-custom text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-black text-primary">
            Start Your International Academic Journey
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Reach out today for a complimentary profile evaluation. Our advisors in Lahore are ready to build your pathway to success.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-accent text-white font-bold text-xs uppercase tracking-widest hover:bg-accent-light shadow-xl shadow-accent/20 transition-all flex items-center gap-2"
            >
              Start Your Journey <ChevronRight size={16} />
            </Link>
            <a
              href="https://wa.me/923143782608?text=Hello%20Amanah%20Study%20Abroad,%20I%20would%20like%20guidance%20on%20choosing%20a%20study%20destination."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-emerald-600 text-white font-bold text-xs uppercase tracking-widest hover:bg-emerald-700 shadow-xl shadow-emerald-600/20 transition-all flex items-center gap-2"
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
