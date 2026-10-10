'use client';

import { useState } from 'react';
import { Quote, Star, GraduationCap, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  name: string;
  degree: string;
  university: string;
  location: string;
  quote: string;
  stars: number;
}

const testimonialsData: Testimonial[] = [
  {
    name: 'Bilal Ahmed',
    degree: 'Master of Data Science',
    university: 'University of Auckland',
    location: 'Auckland, New Zealand',
    quote: 'Amanah Study Abroad made my dream of studying data science abroad a reality. Their expert counselors guided me through university shortlisting and prepared my visa file with zero stress. My visa was approved in record time!',
    stars: 5,
  },
  {
    name: 'Ayesha Khan',
    degree: 'Bachelor of Commerce',
    university: 'University of Auckland',
    location: 'Auckland, New Zealand',
    quote: 'The personalized counseling was exceptional. They took the time to review my academic credentials, helped me tailor my SOP, and matched me with the ideal business program in Auckland.',
    stars: 5,
  },
  {
    name: 'Zubair Qureshi',
    degree: 'Master of Finance & Economics',
    university: 'University of Otago',
    location: 'Dunedin, New Zealand',
    quote: 'From documentation to scholarship advice, the Amanah team walked with me at every stage. Their transparent approach and attention to detail gave my family complete peace of mind.',
    stars: 5,
  },
  {
    name: 'Zainab Malik',
    degree: 'Bachelor of Biomedical Sciences',
    university: 'University of Otago',
    location: 'Dunedin, New Zealand',
    quote: 'I received unconditional offers from premier medical science faculties thanks to their structured application strategy. The visa mock interview was what made me confident on decision day.',
    stars: 5,
  },
  {
    name: 'Hassan Raza',
    degree: 'Bachelor of Computer Science',
    university: 'University of Waikato',
    location: 'Hamilton, New Zealand',
    quote: 'Amanah Study Abroad handled my international admissions seamlessly. Their counselors are genuinely invested in your future and always available to answer any questions.',
    stars: 5,
  },
  {
    name: 'Mariam Jameel',
    degree: 'Master of Management Studies',
    university: 'University of Waikato',
    location: 'Hamilton, New Zealand',
    quote: 'Outstanding professional ethics and genuine care. They helped me secure high-tier merit scholarships and pre-departure accommodation before I even landed in New Zealand.',
    stars: 5,
  },
];

export default function Testimonials({ testimonials }: { testimonials?: Testimonial[] }) {
  const data = testimonials && testimonials.length > 0 ? testimonials : testimonialsData;
  const [currentIndex, setCurrentIndex] = useState(0);

  // We show 1 card on mobile, 2 on tablet (md), 3 on desktop (lg)
  const maxIndex = data.length - 1;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Background radial tint */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container-custom relative z-10 space-y-10">
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <span className="text-accent font-black tracking-widest uppercase text-xs">
              Student Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tight">
              Trusted by Ambitious Scholars Worldwide
            </h2>
            <p className="text-sm md:text-base text-slate-600 font-medium">
              Discover real journeys of students who realized their global higher education aspirations with Amanah Study Abroad.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous Testimonials"
              className="w-12 h-12 rounded-full bg-white border border-slate-200 text-primary hover:bg-accent hover:text-white hover:border-accent shadow-sm flex items-center justify-center transition-all cursor-pointer active:scale-90"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Testimonials"
              className="w-12 h-12 rounded-full bg-white border border-slate-200 text-primary hover:bg-accent hover:text-white hover:border-accent shadow-sm flex items-center justify-center transition-all cursor-pointer active:scale-90"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[0, 1, 2].map((offset) => {
            const index = (currentIndex + offset) % data.length;
            const item = data[index];
            const isHiddenOnMd = offset === 2; // only 2 cards on md, 3 on lg

            return (
              <div
                key={`${index}-${offset}`}
                className={`bg-white rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-xl border border-slate-100 flex flex-col justify-between transition-all duration-300 ${
                  isHiddenOnMd ? 'hidden lg:flex' : 'flex'
                }`}
              >
                <div className="space-y-4">
                  {/* Top Bar: University Badge + Quote Icon */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-secondary rounded-full text-primary font-bold text-xs">
                      <GraduationCap className="text-accent w-4 h-4" />
                      <span className="truncate max-w-[190px]">{item.university}</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                      <Quote size={14} />
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex gap-1 text-amber-400">
                    {Array.from({ length: item.stars }).map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" />
                    ))}
                  </div>

                  {/* Student Quote */}
                  <p className="text-slate-700 text-sm leading-relaxed italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary text-white font-black text-sm flex items-center justify-center shrink-0">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-sm leading-tight">{item.name}</h3>
                    <p className="text-accent text-[11px] font-bold mt-0.5">{item.degree}</p>
                    <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">{item.location}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dots Pagination */}
        <div className="flex justify-center items-center gap-2 pt-2">
          {data.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                currentIndex === idx ? 'w-8 bg-accent' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
