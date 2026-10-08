'use client';

import { useRef, useState, useEffect } from "react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import Testimonials from "@/components/Testimonials";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import {
  FileCheck,
  GraduationCap,
  Briefcase,
  Compass,
  Building2,
  Users,
  CheckCircle,
  Library,
  Trophy,
  Rocket,
  ChevronRight
} from "lucide-react";

function StatCounter({ value }: { value: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  const match = value.match(/^(\d+)(.*)$/);
  const targetNumber = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeProgress = progress * (2 - progress);
      const currentCount = Math.floor(easeProgress * targetNumber);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, targetNumber]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function HomeClient({ data }: { data: any }) {
  const defaultServices = [
    {
      title: "Student Visa Counseling",
      description: "Expert guidance on visa applications and legal documentation for top global destinations like UK, USA, Canada, and Australia.",
      icon: <FileCheck className="text-accent" size={28} />,
      image: "/aim_service_visa.jpg"
    },
    {
      title: "Global University Selection",
      description: "Access to 500+ top-tier global universities to find the perfect academic match for your future career.",
      icon: <GraduationCap className="text-accent" size={28} />,
      image: "/aim_service_univ.jpg"
    },
    {
      title: "Career & Profile Coaching",
      description: "Professional coaching and profile building to help you land high-paying roles in competitive international markets.",
      icon: <Briefcase className="text-accent" size={28} />,
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  const featuredServices = data?.featuredServices?.length > 0 ? data.featuredServices : defaultServices;

  // Scroll refs for each section
  const statsRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const trustRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  // Stats section scroll
  const { scrollYProgress: statsProgress } = useScroll({
    target: statsRef,
    offset: ["start end", "end start"]
  });
  const statsScaleRaw = useTransform(statsProgress, [0, 0.4], [0.8, 1]);
  const statsOpacityRaw = useTransform(statsProgress, [0, 0.3], [0, 1]);
  const statsScale = useSpring(statsScaleRaw, { stiffness: 100, damping: 20 });
  const statsOpacity = useSpring(statsOpacityRaw, { stiffness: 100, damping: 20 });

  // Services section scroll
  const { scrollYProgress: servicesProgress } = useScroll({
    target: servicesRef,
    offset: ["start end", "end start"]
  });
  const servicesHeaderYRaw = useTransform(servicesProgress, [0, 0.3], [100, 0]);
  const servicesHeaderOpacityRaw = useTransform(servicesProgress, [0, 0.25], [0, 1]);
  const servicesHeaderY = useSpring(servicesHeaderYRaw, { stiffness: 80, damping: 15 });
  const servicesHeaderOpacity = useSpring(servicesHeaderOpacityRaw, { stiffness: 80, damping: 15 });

  // Trust section scroll
  const { scrollYProgress: trustProgress } = useScroll({
    target: trustRef,
    offset: ["start end", "end start"]
  });
  const trustImageX = useTransform(trustProgress, [0, 0.5], [-120, 0]);
  const trustImageScale = useTransform(trustProgress, [0, 0.4], [0.8, 1]);
  const trustTextX = useTransform(trustProgress, [0, 0.5], [120, 0]);
  const trustOpacityRaw = useTransform(trustProgress, [0, 0.3], [0, 1]);

  const smoothTrustImageX = useSpring(trustImageX, { stiffness: 60, damping: 20 });
  const smoothTrustImageScale = useSpring(trustImageScale, { stiffness: 60, damping: 20 });
  const smoothTrustTextX = useSpring(trustTextX, { stiffness: 60, damping: 20 });
  const trustOpacity = useSpring(trustOpacityRaw, { stiffness: 60, damping: 20 });

  // CTA section scroll
  const { scrollYProgress: ctaProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"]
  });
  const ctaY = useTransform(ctaProgress, [0, 0.5], [150, 0]);
  const ctaScale = useTransform(ctaProgress, [0, 0.4], [0.8, 1]);
  const ctaOpacityRaw = useTransform(ctaProgress, [0, 0.3], [0, 1]);
  
  const smoothCtaY = useSpring(ctaY, { stiffness: 70, damping: 20 });
  const smoothCtaScale = useSpring(ctaScale, { stiffness: 70, damping: 20 });
  const smoothCtaOpacity = useSpring(ctaOpacityRaw, { stiffness: 70, damping: 20 });

  return (
    <main>
      <Hero data={data?.hero} />

      {/* Divider */}
      <div className="w-full h-8 bg-white relative z-20 -mt-4 rounded-t-3xl border-t border-slate-100/50"></div>

      {/* Stats Section */}
      <section ref={statsRef} style={{ position: "relative" }} className="py-12 md:py-16 bg-white relative overflow-hidden z-20">
        <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
          {[
            { label: "Visas Approved", val: "5k+", icon: <CheckCircle className="text-accent mx-auto" size={24} /> },
            { label: "Partner Universities", val: "500+", icon: <Library className="text-accent mx-auto" size={24} /> },
            { label: "Years Excellence", val: "10+", icon: <Trophy className="text-accent mx-auto" size={24} /> },
            { label: "Success Rate", val: "99%", icon: <Rocket className="text-accent mx-auto" size={24} /> }
          ].map((stat, i) => (
            <motion.div
              key={i}
              style={{ scale: statsScale, opacity: statsOpacity }}
              className="space-y-3"
            >
              <div className="mb-2">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-black text-primary">
                <StatCounter value={stat.val} />
              </div>
              <div className="text-primary/75 font-black uppercase tracking-[0.2em] text-[9px] md:text-[10px]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Dynamic Services Overview */}
      <section ref={servicesRef} style={{ position: "relative" }} className="section-padding bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
            <motion.div
              style={{ y: servicesHeaderY, opacity: servicesHeaderOpacity }}
              className="space-y-3 w-full md:w-auto"
            >
              <span className="text-accent font-black tracking-widest uppercase text-xs">Global Expertise</span>
              <h2 className="text-2xl md:text-3xl font-bold text-primary leading-tight">Premier Study <br /> Abroad Solutions</h2>
            </motion.div>
            <motion.div style={{ opacity: servicesHeaderOpacity }}>
              <Link href="/services" className="group flex items-center gap-3 font-bold text-primary hover:text-accent transition-colors text-sm">
                Discover All Services
                <span className="w-8 h-8 bg-white shadow-sm rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all text-xs">→</span>
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {featuredServices.map((service: any, index: number) => {
              let IconComponent = <CheckCircle className="text-accent" size={28} />;
              if (service.iconName === 'FileCheck') IconComponent = <FileCheck className="text-accent" size={28} />;
              if (service.iconName === 'GraduationCap') IconComponent = <GraduationCap className="text-accent" size={28} />;
              if (service.iconName === 'Briefcase') IconComponent = <Briefcase className="text-accent" size={28} />;

              return (
                <ServiceCard 
                  key={index} 
                  title={service.title} 
                  description={service.description} 
                  icon={service.icon || IconComponent} 
                  image={service.imageUrl || service.image} 
                  index={index} 
                  priority={index === 0} 
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <Testimonials testimonialsData={data?.testimonials} />

      {/* Trust Section */}
      <section ref={trustRef} style={{ position: "relative" }} className="section-padding bg-white relative overflow-hidden">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            style={{ x: smoothTrustImageX, scale: smoothTrustImageScale, opacity: trustOpacity }}
            className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-slate-100 group bg-secondary"
          >
            <Image 
              src="/aim_trust.png" 
              alt="Trust Section" 
              fill 
              sizes="(max-width: 1024px) 100vw, 50vw" 
              className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" 
              loading="lazy" 
            />
            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-700"></div>
          </motion.div>

          <motion.div style={{ x: smoothTrustTextX, opacity: trustOpacity }} className="space-y-8">
            <div className="space-y-4">
              <span className="text-accent font-black tracking-widest uppercase border-b-2 border-accent pb-1 text-xs">Why Choose Us?</span>
              <h2 className="text-2xl md:text-3xl font-bold text-primary leading-tight">Your Dreams Are <br /> Our Mission.</h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed font-medium">
                We don&apos;t just process applications; we architect global careers. With Amanah Study Abroad, you&apos;re not a case number—you&apos;re a success story in the making.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { title: "Strategic Study Roadmap", desc: "We build a personalized academic plan tailored to your profile, budget, and long-term residency goals.", icon: <Compass className="text-accent" size={20} /> },
                { title: "Direct University Partnerships", desc: "Collaborations with 500+ renowned institutions worldwide for fast-tracked offers and scholarship reviews.", icon: <Building2 className="text-accent" size={20} /> },
                { title: "Global Alumni Network", desc: "Join a proud community of successful Amanah alumni thriving in top careers worldwide.", icon: <Users className="text-accent" size={20} /> }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ type: "spring", stiffness: 50, damping: 15, delay: i * 0.15 }}
                  className="flex gap-4 group"
                >
                  <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:text-white group-hover:rotate-6 transition-all duration-300 shadow-sm shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary group-hover:text-accent transition-colors">{item.title}</h4>
                    <p className="text-slate-700 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} style={{ position: "relative" }} className="py-12 md:py-16 bg-slate-50 relative">
        <div className="container-custom">
          <motion.div
            style={{ y: smoothCtaY, scale: smoothCtaScale, opacity: smoothCtaOpacity }}
            className="max-w-3xl mx-auto bg-primary rounded-2xl md:rounded-3xl p-8 sm:p-10 md:p-12 text-center text-white relative overflow-hidden shadow-2xl border border-primary/20"
          >
            <div className="absolute -top-16 -right-16 w-56 h-56 bg-accent/30 rounded-full blur-[60px]"></div>
            <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-primary-light/40 rounded-full blur-[60px]"></div>
            
            <div className="relative z-10 space-y-5 max-w-xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight">
                Ready to Claim Your <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-red-300">Global Future?</span>
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-200 font-medium leading-relaxed">
                Take the first step toward your international degree. Join the thousands of ambitious students who chose Amanah Study Abroad.
              </p>
              <div className="pt-2">
                <Link href="/contact" className="px-8 py-3.5 bg-accent text-white rounded-full font-bold text-sm uppercase tracking-wider shadow-lg hover:bg-accent-light hover:scale-105 transition-all duration-300 inline-flex items-center gap-2">
                  Start Your Journey Now <ChevronRight size={18} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
