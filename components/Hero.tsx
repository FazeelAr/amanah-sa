'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function Hero({ data }: { data?: any }) {
  // Spring animation variants for bouncy feel
  const springFadeIn: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 16 } }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };





  return (
    <section className="relative pt-24 pb-10 md:py-16 lg:py-20 overflow-hidden bg-secondary flex items-center">
      {/* Background with subtle glow */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ type: "spring", stiffness: 30, damping: 20 }}
          className="relative h-full w-full"
        >
          <Image
            src={data?.backgroundImageUrl || "/aim_hero_bg.png"}
            alt="Amanah Global Education"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 via-transparent to-transparent"></div>
      </div>

      <div className="container-custom relative z-10 grid grid-cols-1 mt-3 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left/Center Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 text-left text-primary space-y-5"
        >
          <motion.div variants={springFadeIn}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-slate-200/80 rounded-full text-primary font-black text-[10px] tracking-widest uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              YOUR DREAMS • OUR GUIDANCE
            </div>
          </motion.div>

          {data?.heading ? (
            <motion.h1 variants={springFadeIn} className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.12] tracking-tighter text-primary" dangerouslySetInnerHTML={{ __html: data.heading }} />
          ) : (
            <motion.h1 variants={springFadeIn} className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.12] tracking-tighter text-primary">
              Your Gateway to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Top Universities</span> Worldwide.
            </motion.h1>
          )}

          <motion.p variants={springFadeIn} className="text-sm md:text-base lg:text-lg text-primary/85 leading-relaxed max-w-2xl font-medium">
            {data?.subheading || "Amanah Study Abroad provides trusted, expert guidance for global university admissions, student visa counseling, and international career success."}
          </motion.p>

          <motion.div variants={springFadeIn} className="flex flex-wrap gap-4 pt-2">
            <Link href={data?.ctaLink || "/services"} className="px-6 py-3 bg-accent text-white rounded-full font-black text-xs uppercase tracking-widest shadow-xl shadow-accent/20 hover:bg-accent-light hover:scale-105 transition-all duration-300 flex items-center gap-2 group">
              {data?.ctaText || "Explore Services"} <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact" className="px-6 py-3 rounded-full border border-primary/20 bg-white/70 text-primary font-black text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300 backdrop-blur-sm shadow-sm">
              Free Assessment
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Floating Panel (Overlapping Glass Card) */}
        <motion.div
          initial={{ opacity: 0, x: 50, rotateY: 15 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.4 }}
          className="lg:col-span-5 relative perspective-1000"
        >
          <div className="absolute inset-0 bg-accent/5 rounded-3xl blur-[120px]"></div>
          <div className="relative w-full aspect-[16/9] md:aspect-[16/10] max-h-[220px] md:max-h-[280px] rounded-[2rem] overflow-hidden border border-slate-200 shadow-xl bg-white/40 backdrop-blur-sm p-3">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-inner group">
              <Image
                src={data?.frontImageUrl || "/aim_hero_front.png"}
                alt="Amanah Study Abroad Consultancy"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent"></div>

              {/* Floating Quote Badge */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, type: "spring" }}
                className="absolute bottom-3 left-3 right-3 md:bottom-5 md:left-5 md:right-5 p-2 md:p-3 bg-white/95 backdrop-blur-md rounded-xl md:rounded-2xl border border-white shadow-xl"
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-6 h-6 md:w-8 md:h-8 shrink-0 rounded-full bg-accent flex items-center justify-center text-white font-black text-[10px] md:text-xs">A</div>
                  <div>
                    <p className="text-primary font-bold text-[10px] md:text-xs">Sarah Ahmed</p>
                    <p className="text-accent text-[8px] md:text-[9px] uppercase tracking-widest font-black">Placed in UK • Visa Approved</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
