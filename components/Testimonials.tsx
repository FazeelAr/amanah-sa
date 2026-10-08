'use client';

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Bilal Ahmed",
    role: "Computer Science, Univ. of Manchester",
    quote: "Amanah Study Abroad made my dream of studying in the UK a reality. Their guidance on the visa process was flawless, and I received my visa in just 15 days!",
    location: "United Kingdom",
    image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&q=80&w=400",
    stars: 5
  },
  {
    name: "Ayesha Siddiqui",
    role: "Data Science, University of Toronto",
    quote: "The personalized attention I received at Amanah was incredible. They helped me choose the right course and university that perfectly aligned with my career goals.",
    location: "Canada",
    image: "https://images.unsplash.com/photo-1530785602389-07594beb8b73?auto=format&fit=crop&q=80&w=400",
    stars: 5
  },
  {
    name: "Zubair Qureshi",
    role: "MBA, NYU Stern Business School",
    quote: "From initial counseling to final departure, Amanah was with me every step of the way. Their expertise in scholarship applications helped me secure 50% funding!",
    location: "United States",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
    stars: 5
  },
  {
    name: "Mariam Jameel",
    role: "Business Administration, Univ. of Sydney",
    quote: "I was confused about my destination, but Amanah's detailed comparison of countries helped me decide on Australia. Truly the best consultants in Lahore.",
    location: "Australia",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=400",
    stars: 5
  },
  {
    name: "Hassan Raza",
    role: "Engineering, Imperial College London",
    quote: "Thanks to Amanah Study Abroad, my journey to London was seamless. The team handled my admission and visa application perfectly, making my dream come true.",
    location: "United Kingdom",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    stars: 5
  },
  {
    name: "Sara Malik",
    role: "Medicine, University of Waikato",
    quote: "I am extremely grateful to Amanah Study Abroad for their unwavering support. Their expert advice helped me get accepted with ease.",
    location: "New Zealand",
    image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&q=80&w=400",
    stars: 5
  }
];

function TestimonialCard({ testimonial, index }: { testimonial: any; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [80, 0, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.85, 1, 1, 0.95]);
  
  const smoothY = useSpring(y, { stiffness: 80, damping: 20 });
  const smoothScale = useSpring(scale, { stiffness: 80, damping: 20 });

  return (
    <motion.div
      ref={cardRef}
      style={{ y: smoothY, opacity, scale: smoothScale, position: "relative" }}
      className="group relative h-full"
    >
      <div className="bg-white rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(3,31,63,0.05)] hover:shadow-[0_20px_40px_rgba(3,31,63,0.1)] transition-shadow duration-500 border border-slate-100 h-full flex flex-col aspect-square md:aspect-auto md:min-h-[320px]">
        {/* Content */}
        <div className="p-6 space-y-4 flex flex-col h-full">
          {/* Quote icon */}
          <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center shrink-0">
            <Quote size={16} className="text-primary" />
          </div>

          <p className="text-sm md:text-base text-primary leading-relaxed font-semibold italic flex-grow">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          
          <div className="flex gap-1.5">
            {Array.from({ length: testimonial.stars }).map((_, i) => (
              <Star key={i} size={16} className="text-accent fill-accent" />
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 shrink-0">
            <h4 className="text-base font-bold text-primary mb-1 line-clamp-1">{testimonial.clientName || testimonial.name}</h4>
            <p className="text-primary/70 text-[10px] font-black uppercase tracking-widest mb-2 line-clamp-1">{testimonial.role}</p>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
              <span className="text-[9px] font-bold uppercase tracking-widest text-primary/60">Placed in {testimonial.location}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials({ testimonialsData }: { testimonialsData?: any[] }) {
  const activeTestimonials = testimonialsData?.length ? testimonialsData : testimonials;
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const headerYRaw = useTransform(scrollYProgress, [0, 0.3], [80, 0]);
  const headerOpacityRaw = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  
  const headerY = useSpring(headerYRaw, { stiffness: 60, damping: 20 });
  const headerOpacity = useSpring(headerOpacityRaw, { stiffness: 60, damping: 20 });

  return (
    <section ref={sectionRef} style={{ position: "relative" }} className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Animated decorative blobs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
        <div className="absolute top-20 left-20 w-80 h-80 bg-accent/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-light/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div 
          style={{ y: headerY, opacity: headerOpacity }} 
          className="text-center space-y-4 mb-16 md:mb-20"
        >
          <span className="text-accent font-black tracking-[0.3em] uppercase text-xs border-b-2 border-accent pb-2 inline-block">
            Real Stories, Real Success
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-primary tracking-tighter">
            What Our <span className="text-accent">Global Students</span> Say
          </h2>
          <p className="text-slate-500 font-medium max-w-lg mx-auto">
            Hear from ambitious scholars who transformed their futures with Amanah Study Abroad.
          </p>
        </motion.div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {activeTestimonials.map((testimonial: any, index: number) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
