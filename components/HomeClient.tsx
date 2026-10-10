'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  FileCheck,
  GraduationCap,
  Briefcase,
  BookOpen,
  Coins,
  Home as HomeIcon,
  Compass,
  Building2,
  Users,
  CheckCircle,
  Library,
  Trophy,
  Rocket,
  ChevronRight,
} from 'lucide-react';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import Testimonials from '@/components/Testimonials';
import WhyChooseUs from '@/components/WhyChooseUs';

function StatCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);

  const match = value.match(/^(\d+)(.*)$/);
  const targetNumber = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : '';

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let hasAnimated = false;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          hasAnimated = true;
          const duration = 1500;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = progress * (2 - progress);
            setCount(Math.floor(easeProgress * targetNumber));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [targetNumber]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function HomeClient({ data }: { data?: any }) {
  const allServices = [
    {
      title: 'Student Visa Assistance',
      description: 'Comprehensive visa file processing, compliance scrutiny, and consular mock interviews with an industry-leading 99% approval rate.',
      icon: <FileCheck className="text-accent" size={26} />,
      image: '/aim_service_visa.jpg',
    },
    {
      title: 'Global University Selection',
      description: 'Personalized matching across 500+ top-ranked universities worldwide to align with your academic background and career goals.',
      icon: <GraduationCap className="text-accent" size={26} />,
      image: '/aim_service_univ.jpg',
    },
    {
      title: 'Career & Profile Coaching',
      description: 'Strategic CV building, SOP editing, and international job market positioning to build high-earning global career trajectories.',
      icon: <Briefcase className="text-accent" size={26} />,
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'IELTS & Language Preparation',
      description: 'Specialized coaching for IELTS, PTE, and TOEFL with certified mentors to help you comfortably achieve your target band scores.',
      icon: <BookOpen className="text-accent" size={26} />,
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Scholarship & Funding Access',
      description: 'Expert discovery and application support for merit-based university grants, institutional waivers, and international scholarships.',
      icon: <Coins className="text-accent" size={26} />,
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Settlement & Orientation Support',
      description: 'End-to-end relocation assistance including verified student housing bookings, airport reception, and local bank setup guidance.',
      icon: <HomeIcon className="text-accent" size={26} />,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800',
    },
  ];

  return (
    <main>
      {/* 1. Hero with Course Finder */}
      <Hero data={data?.hero} />

      {/* 2. All Our Services Section */}
      <section className="section-padding bg-slate-50 relative overflow-hidden">
        <div className="container-custom relative z-10 space-y-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="space-y-2 max-w-xl">
              <span className="text-accent font-black tracking-widest uppercase text-xs">
                All Our Services
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-primary leading-tight">
                Premier Study Abroad Solutions
              </h2>
              <p className="text-sm md:text-base text-slate-600 font-medium">
                Comprehensive, end-to-end guidance designed to transform your academic aspirations into global reality.
              </p>
            </div>
            <Link
              href="/services"
              className="group flex items-center gap-3 font-bold text-primary hover:text-accent transition-colors text-sm shrink-0"
            >
              <span>Explore All Details</span>
              <span className="w-8 h-8 bg-white shadow-sm rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all text-xs">
                →
              </span>
            </Link>
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
                priority={index === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Trust Section: "Your Dreams Are Our Mission" */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative h-[380px] sm:h-[440px] rounded-3xl overflow-hidden shadow-2xl border border-slate-100 group bg-secondary">
            <Image
              src="/aim_trust.png"
              alt="Amanah Trust and Counseling"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="eager"
            />
            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>

          <div className="space-y-8">
            <div className="space-y-3">
              <span className="text-accent font-black tracking-widest uppercase border-b-2 border-accent pb-1 text-xs">
                Integrity & Excellence
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-primary leading-tight">
                Your Dreams Are <br /> Our Mission.
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed font-medium">
                We don&apos;t just process university files; we architect global careers. With Amanah Study Abroad, you receive uncompromising honesty, zero hidden costs, and personalized advocacy at every milestone.
              </p>
            </div>

            <div className="space-y-5">
              {[
                {
                  title: 'Strategic Study Roadmap',
                  desc: 'A personalized academic plan structured around your credentials, family budget, and long-term post-study work goals.',
                  icon: <Compass className="text-accent" size={20} />,
                },
                {
                  title: 'Direct University Access',
                  desc: 'Direct alliances with 500+ esteemed universities worldwide for fast-track admissions and priority scholarship assessments.',
                  icon: <Building2 className="text-accent" size={20} />,
                },
                {
                  title: 'Elite Alumni Network',
                  desc: 'Connect with a thriving network of Amanah alumni excelling in top multinational careers across the UK, Canada, Australia, and New Zealand.',
                  icon: <Users className="text-accent" size={20} />,
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:text-white group-hover:rotate-6 transition-all duration-300 shadow-sm shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-primary group-hover:text-accent transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Testimonials Carousel */}
      <Testimonials />

      {/* 5. Why Choose Us (Metrics & Pillars) */}
      <WhyChooseUs />

      {/* 6. Simple Stats Section (4 Pill cards on dark navy) */}
      <section className="py-14 md:py-18 bg-[#031F3F] text-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Visas Approved', val: '5k+', icon: <CheckCircle className="text-accent-light" size={24} /> },
              { label: 'Partner Universities', val: '500+', icon: <Library className="text-accent-light" size={24} /> },
              { label: 'Years Excellence', val: '10+', icon: <Trophy className="text-accent-light" size={24} /> },
              { label: 'Success Rate', val: '99%', icon: <Rocket className="text-accent-light" size={24} /> },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-[#011227]/70 backdrop-blur-md rounded-2xl p-6 text-center border border-white/10 shadow-lg hover:border-accent/40 transition-all space-y-2"
              >
                <div className="flex justify-center mb-1">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-black text-white">
                  <StatCounter value={stat.val} />
                </div>
                <div className="text-slate-300 font-bold uppercase tracking-wider text-[10px] md:text-xs">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Bottom High-Impact CTA */}
      <section className="py-14 md:py-20 bg-slate-50 relative">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#031F3F] via-[#0A315E] to-[#031F3F] rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-2xl border border-white/10">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/30 rounded-full blur-[70px] pointer-events-none"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary-light/50 rounded-full blur-[70px] pointer-events-none"></div>

            <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-accent-light border border-accent/40 px-3 py-1 rounded-full bg-white/5">
                Take the Next Step
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
                Ready to Claim Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light via-red-300 to-white">
                  Global Future?
                </span>
              </h2>
              <p className="text-sm md:text-base text-slate-200 font-normal leading-relaxed">
                Stop wishing. Start acting. Join the elite league of international students who chose Amanah Study Abroad for trusted university admissions and visa success.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-accent text-white rounded-full font-black text-sm uppercase tracking-wider shadow-xl shadow-accent/30 hover:bg-accent-light hover:scale-105 active:scale-95 transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Start Your Journey Now</span>
                  <ChevronRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
