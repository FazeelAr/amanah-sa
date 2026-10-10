'use client';

import { useEffect, useRef, useState } from 'react';
import { Target, BarChart3, Handshake, Rocket } from 'lucide-react';

function Counter({ value }: { value: string }) {
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

export default function WhyChooseUs() {
  const metrics = [
    { label: 'Years of Experience', value: '10+' },
    { label: 'Students Guided', value: '100K+' },
    { label: 'Study Destinations', value: '65+' },
    { label: 'University Partners', value: '500+' },
    { label: 'Global Offices & Partners', value: '15+' },
    { label: 'Visa Success Rate', value: '99%' },
  ];

  const highlights = [
    {
      icon: <Target className="w-8 h-8 text-accent" />,
      title: '🎯 Personalized Approach',
      description: 'Customized roadmaps designed around your unique academic strengths, family budget, and career vision.',
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-accent" />,
      title: '📊 Data-Driven Decisions',
      description: 'Strategic program selections backed by international post-study employment data and visa approval analytics.',
    },
    {
      icon: <Handshake className="w-8 h-8 text-accent" />,
      title: '🤝 Direct University Relations',
      description: 'Official partner alliances with 500+ accredited global institutions for direct file reviews and expedited offer letters.',
    },
    {
      icon: <Rocket className="w-8 h-8 text-accent" />,
      title: '🚀 End-to-End Support',
      description: 'Comprehensive assistance from initial test preparation and SOP polishing to visa lodgment and post-arrival accommodation.',
    },
  ];

  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="container-custom relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-accent font-black tracking-widest uppercase text-xs">
            Proven Excellence
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tight">
            Why Choose Amanah Study Abroad?
          </h2>
          <p className="text-sm md:text-base text-slate-600 font-medium">
            A track record built on transparent consultation, precision document processing, and genuine commitment to student success.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {metrics.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 text-center shadow-sm border border-slate-100 hover:border-accent/30 hover:shadow-md transition-all group"
            >
              <div className="text-2xl md:text-3xl lg:text-4xl font-black text-primary group-hover:text-accent transition-colors">
                <Counter value={item.value} />
              </div>
              <p className="text-[11px] md:text-xs font-bold text-slate-500 uppercase tracking-wider mt-1.5">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-accent/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors">
                  {card.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-primary/70 uppercase tracking-widest">
                <span>Verified Standard</span>
                <span className="text-accent group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
