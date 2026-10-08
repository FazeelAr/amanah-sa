'use client';

import Image from "next/image";
import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";
import { motion } from "framer-motion";
import { FileCheck, GraduationCap, Briefcase, BookOpen, Coins, Home, ChevronRight, CheckCircle } from "lucide-react";

export default function ServicesClient({ data }: { data: any }) {
  const defaultServices = [
    {
      title: "Student Visa Assistance",
      description: "Comprehensive guidance on student visa requirements for UK, USA, Canada, Australia, and Europe with a 99% track record.",
      icon: <FileCheck className="text-accent" size={28} />,
      image: "/aim_service_visa.jpg"
    },
    {
      title: "University Admissions",
      description: "Direct partnerships with 500+ top global universities. We handle the entire application process from start to finish.",
      icon: <GraduationCap className="text-accent" size={28} />,
      image: "/aim_service_univ.jpg"
    },
    {
      title: "Career & Profile Guidance",
      description: "Professional SOP evaluation, resume tailoring, and interview coaching to help you land top academic admissions and future jobs.",
      icon: <Briefcase className="text-accent" size={28} />,
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "IELTS/PTE/TOEFL Preparation",
      description: "Result-oriented test coaching with certified instructors, practice tests, and strategies to secure your required band score.",
      icon: <BookOpen className="text-accent" size={28} />,
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Scholarship Guidance",
      description: "Identifying and applying for merit-based and international scholarships to significantly lower your study costs abroad.",
      icon: <Coins className="text-accent" size={28} />,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Pre-Departure & Settlement",
      description: "Support beyond visa stamps: student accommodation booking, travel briefing, bank accounts, and arrival assistance.",
      icon: <Home className="text-accent" size={28} />,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const defaultDestinations = [
    {
      name: "United Kingdom",
      description: "World-class universities, 2-year post-study work visa, and flexible admission criteria for international students.",
      tag: "Top Choice",
      image: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "United States",
      description: "Global academic powerhouse with high scholarship opportunities and cutting-edge STEM research programs.",
      tag: "Most Popular",
      image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Canada",
      description: "Top-ranked colleges, friendly immigration policies, post-graduation work permits, and high quality of life.",
      tag: "Best Quality of Life",
      image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Australia",
      description: "High standard of living, world-renowned research institutions, and generous post-study work visa rights.",
      tag: "High Demand",
      image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Europe",
      description: "Affordable tuition or zero tuition fees in leading EU nations like Germany, France, and Italy.",
      tag: "Affordable Study",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const allServices = data?.allServices?.length > 0 ? data.allServices : defaultServices;
  const destinations = data?.destinations?.length > 0 ? data.destinations : defaultDestinations;

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-secondary py-10 md:py-14 lg:py-16 text-primary relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          className="absolute inset-0"
        >
          <Image 
            src="/aim_hero_bg.png" 
            alt="Background" 
            fill 
            sizes="100vw"
            className="object-cover"
            priority
          />
        </motion.div>
        
        <div className="container-custom relative z-10 text-center space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black tracking-tighter"
          >
            {data?.servicesPage?.heading || "Global Solutions."}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base text-primary/85 max-w-2xl mx-auto"
          >
            {data?.servicesPage?.subheading || "End-to-end educational and student visa consultancy tailored to your ambitions."}
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white relative">
        <div className="container-custom">
          <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
             <span className="text-accent font-black tracking-widest uppercase text-xs">Our Expertise</span>
             <h2 className="text-2xl md:text-3xl font-bold text-primary">Everything You Need To Succeed</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service: any, index: number) => {
              let IconComponent = <CheckCircle className="text-accent" size={28} />;
              if (service.iconName === 'FileCheck') IconComponent = <FileCheck className="text-accent" size={28} />;
              if (service.iconName === 'GraduationCap') IconComponent = <GraduationCap className="text-accent" size={28} />;
              if (service.iconName === 'Briefcase') IconComponent = <Briefcase className="text-accent" size={28} />;
              if (service.iconName === 'BookOpen') IconComponent = <BookOpen className="text-accent" size={28} />;
              if (service.iconName === 'Coins') IconComponent = <Coins className="text-accent" size={28} />;
              if (service.iconName === 'Home') IconComponent = <Home className="text-accent" size={28} />;

              return (
                <ServiceCard 
                  key={index} 
                  title={service.title} 
                  description={service.description} 
                  icon={service.icon || IconComponent} 
                  image={service.imageUrl || service.image} 
                  index={index} 
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="section-padding bg-slate-50 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
             <span className="text-accent font-black tracking-widest uppercase text-xs">Global Reach</span>
             <h2 className="text-2xl md:text-3xl font-bold text-primary">Popular Study Destinations</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest: any, index: number) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={dest.imageUrl || dest.image} 
                    alt={dest.name} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {dest.tag}
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{dest.name}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{dest.description}</p>
                  </div>
                  <Link 
                    href="/contact" 
                    className="text-accent font-bold text-xs uppercase tracking-wider flex items-center gap-2 group/btn"
                  >
                    Check Eligibility <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-12 md:py-16 bg-white text-center">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 max-w-2xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-primary leading-tight">
              Ready to <span className="text-accent underline decoration-4 underline-offset-8">Transform</span> Your Life?
            </h2>
            <p className="text-sm md:text-base text-slate-700 leading-relaxed">
              Join thousands of successful students who have achieved their dreams with Amanah Study Abroad. Your journey starts with a single consultation.
            </p>
            <Link href="/contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent text-white hover:bg-accent-light px-8 py-3.5 rounded-full font-bold text-sm shadow-xl shadow-accent/25 transition-all flex items-center justify-center gap-3 mx-auto"
              >
                Start Free Assessment <ChevronRight size={18} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
