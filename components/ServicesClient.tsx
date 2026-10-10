'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  FileCheck,
  GraduationCap,
  Briefcase,
  BookOpen,
  Coins,
  Home as HomeIcon,
  ChevronRight,
  Sparkles,
  UserCheck,
  FileText,
  Plane,
} from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';

export default function ServicesClient({ data }: { data?: any }) {
  const allServices = [
    {
      title: 'Student Visa Assistance',
      description: 'Comprehensive guidance on student visa requirements, financial proofs, document compilation, and consular interview coaching with a 99% track record.',
      icon: <FileCheck className="text-accent" size={26} />,
      image: '/aim_service_visa.jpg',
    },
    {
      title: 'Global University Selection',
      description: 'Direct institutional partnerships with 500+ universities worldwide. We navigate program criteria to secure the perfect match for your credentials.',
      icon: <GraduationCap className="text-accent" size={26} />,
      image: '/aim_service_univ.jpg',
    },
    {
      title: 'Career & Profile Coaching',
      description: 'Professional SOP review, CV tailoring, and career path alignment designed to position you competitively in international job markets.',
      icon: <Briefcase className="text-accent" size={26} />,
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'IELTS & Language Preparation',
      description: 'Result-oriented test coaching with certified instructors, continuous mock testing, and actionable strategies to hit required band scores.',
      icon: <BookOpen className="text-accent" size={26} />,
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Scholarship & Funding Access',
      description: 'Systematic targeting and application support for institutional fee discounts, merit grants, and regional international bursaries.',
      icon: <Coins className="text-accent" size={26} />,
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Settlement & Orientation Support',
      description: 'Support beyond visa stamps: verified student accommodation booking, travel briefings, student bank accounts, and pre-departure setups.',
      icon: <HomeIcon className="text-accent" size={26} />,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800',
    },
  ];

  const featuredDestinations = [
    {
      name: 'United Kingdom',
      tag: 'Top Choice',
      description: 'Prestige 1-year master’s degrees, generous 2-year Graduate Route work visas, and world-leading academic centers in London, Manchester, and Edinburgh.',
      image: 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?auto=format&fit=crop&q=80&w=800',
    },
    {
      name: 'United States',
      tag: 'Most Popular',
      description: 'World academic powerhouse featuring extensive STEM OPT work extensions (up to 3 years) and high-value institutional research grants.',
      image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=80&w=800',
    },
    {
      name: 'Canada',
      tag: 'Best Quality of Life',
      description: 'Top-tier research institutions, transparent Post-Graduation Work Permits (PGWP), and student-friendly multicultural communities.',
      image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&q=80&w=800',
    },
    {
      name: 'Europe',
      tag: 'Cultural Diversity',
      description: 'Affordable or zero tuition fees in English-taught universities across Germany, Netherlands, Italy, and France with Schengen mobility.',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800',
    },
    {
      name: 'New Zealand',
      tag: 'Nature & Adventure',
      description: 'Safe, scenic island nation with 8 world-ranked public universities, favorable post-study work rights, and high international student satisfaction.',
      image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&q=80&w=800',
    },
  ];

  const fourSteps = [
    {
      step: '01',
      title: 'Free Consultation',
      icon: <UserCheck className="text-accent" size={28} />,
      desc: '1-on-1 profile discovery assessing your academic history, career objectives, and financial parameters with honest advice.',
    },
    {
      step: '02',
      title: 'Profile Building',
      icon: <Sparkles className="text-accent" size={28} />,
      desc: 'Refining your statement of purpose, tailoring resumes, organizing recommendations, and planning language exam milestones.',
    },
    {
      step: '03',
      title: 'Documentation',
      icon: <FileText className="text-accent" size={28} />,
      desc: 'Careful compilation of university admission dossiers, scholarship submissions, and rigorous consular visa file audits.',
    },
    {
      step: '04',
      title: 'Destination',
      icon: <Plane className="text-accent" size={28} />,
      desc: 'Receive your visa grant, secure student lodging, attend pre-departure briefing, and board your flight with confidence.',
    },
  ];

  return (
    <div className="pt-20">
      {/* 1. Page Header */}
      <section className="bg-gradient-to-b from-[#011227] via-[#031F3F] to-[#011227] py-14 md:py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/aim_hero_bg.png"
            alt="Services Header Background"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-radial from-transparent via-[#011227]/70 to-[#011227]"></div>

        <div className="container-custom relative z-10 text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-accent-light border border-white/20 px-3.5 py-1 rounded-full bg-white/5 inline-block">
            Our Service Offerings
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">
            Global Excellence, Local Expertise.
          </h1>
          <p className="text-base md:text-lg text-slate-200 font-normal leading-relaxed">
            Dedicated services designed to empower students and professionals abroad with tailored admissions and visa support.
          </p>
        </div>
      </section>

      {/* 2. Core Services Grid (6 Cards in 3-column layout) */}
      <section className="section-padding bg-white relative">
        <div className="container-custom space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-accent font-black tracking-widest uppercase text-xs">
              Specialized Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tight">
              Everything You Need to Succeed
            </h2>
            <p className="text-slate-600 text-sm md:text-base">
              A comprehensive spectrum of academic and visa services to guide your path at every turn.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {allServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                image={service.image}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Study Destinations Feature (5 Featured Country Cards) */}
      <section className="section-padding bg-slate-50 relative overflow-hidden">
        <div className="container-custom relative z-10 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-accent font-black tracking-widest uppercase text-xs">
              Worldwide Reach
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tight">
              Featured Study Destinations
            </h2>
            <p className="text-slate-600 text-sm md:text-base">
              Explore premier global destinations where our students regularly secure prestigious admissions and visas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredDestinations.map((dest, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md">
                      {dest.tag}
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                      {dest.name}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {dest.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href="/contact"
                    className="w-full py-2.5 rounded-full border border-slate-200 text-primary group-hover:border-accent group-hover:bg-accent group-hover:text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <span>Learn More</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Interactive 4-Step Process ("The Path to Your Future") */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container-custom space-y-14">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-accent font-black tracking-widest uppercase text-xs">
              Structured Roadmap
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tight">
              The Path to Your Future
            </h2>
            <p className="text-slate-600 text-sm md:text-base">
              A transparent, proven 4-stage journey taking you from dream to foreign university campus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {fourSteps.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-3xl p-7 border border-slate-100 hover:border-accent/40 hover:bg-white hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <span className="text-3xl font-black text-slate-300 group-hover:text-accent transition-colors">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors">
                    Step {item.step}: {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-accent transition-colors">
                  <span>Milestone Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. High-Impact CTA */}
      <section className="py-14 md:py-20 bg-slate-50 text-center">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-black text-primary leading-tight">
              Ready to Transform Your Life?
            </h2>
            <p className="text-sm md:text-base text-slate-700 leading-relaxed">
              Join thousands of ambitious Pakistani students who have achieved international degrees with Amanah Study Abroad. Your global career begins with a single conversation.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="px-8 py-4 bg-accent text-white hover:bg-accent-light rounded-full font-black text-sm uppercase tracking-wider shadow-xl shadow-accent/25 hover:scale-105 active:scale-95 transition-all inline-flex items-center justify-center gap-3 cursor-pointer"
              >
                <span>Start Free Assessment</span>
                <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
