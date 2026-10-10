'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle, CheckCircle2 } from 'lucide-react';

export interface FAQItem {
  id: string;
  category: 'Getting Started' | 'Applications' | 'Visa & Immigration' | 'Funding & Scholarships' | 'Post-Arrival & Support';
  question: string;
  answer: string;
}

export const faqsData: FAQItem[] = [
  // Getting Started
  {
    id: 'faq-1',
    category: 'Getting Started',
    question: 'When is the best timeline to begin my study abroad preparation?',
    answer: 'We recommend starting 12 to 18 months prior to your intended intake semester. This timeline provides ample runway to prepare for English proficiency examinations (IELTS, PTE, TOEFL), organize official academic transcripts, research competitive degree programs, and meet international university scholarship deadlines.',
  },
  {
    id: 'faq-2',
    category: 'Getting Started',
    question: 'Is student counseling at Amanah Study Abroad completely free?',
    answer: 'Yes, our initial 1-on-1 profile evaluation, university discovery sessions, and country matching guidance are 100% complimentary. We believe every aspiring student deserves transparent, pressure-free advice before making life-changing academic decisions.',
  },
  {
    id: 'faq-3',
    category: 'Getting Started',
    question: 'Which countries and study destinations do you represent?',
    answer: 'We guide students across 65+ premier global destinations, specializing in top-tier institutions in the United Kingdom, Australia, Canada, New Zealand, the United States, Europe (Germany, Netherlands, Italy, France), and Turkey.',
  },

  // Applications
  {
    id: 'faq-4',
    category: 'Applications',
    question: 'What documentation checklist is mandatory for university applications?',
    answer: 'Standard application dossiers require: attested academic degrees and transcripts, updated CV/resume, valid international passport, statement of purpose (SOP) or personal statement, 2 academic/professional recommendation letters, and standardized language test score reports (IELTS/PTE).',
  },
  {
    id: 'faq-5',
    category: 'Applications',
    question: 'Can I still get admission with an average GPA or study gap?',
    answer: 'Absolutely. Many leading global institutions practice holistic admissions where strong professional experience, impactful SOPs, research projects, or foundational pathway programs effectively offset academic gaps or moderate GPAs. We tailor your application strategy to showcase your full potential.',
  },
  {
    id: 'faq-6',
    category: 'Applications',
    question: 'How long does it typically take to receive an official offer letter?',
    answer: 'Conditional offer letters generally take between 2 to 6 weeks, depending on university admissions cycles, degree competition, and document completeness. Our direct institutional partner links help expedite the review whenever possible.',
  },

  // Visa & Immigration
  {
    id: 'faq-7',
    category: 'Visa & Immigration',
    question: 'What is the visa process and success rate with Amanah Study Abroad?',
    answer: 'We maintain a 99% visa success rate thanks to rigorous compliance audits. Our dedicated visa officers guide you through financial sponsorship documentation, genuine student intent verification, medical health checks, and embassy appointment scheduling.',
  },
  {
    id: 'faq-8',
    category: 'Visa & Immigration',
    question: 'How long does student visa processing take across key regions?',
    answer: 'Processing times vary: the United Kingdom typically takes 3-4 weeks (priority options available), Australia 4-8 weeks, Canada 8-12 weeks, and European Schengen study permits between 4-10 weeks. We ensure your submission aligns perfectly with intake deadlines.',
  },
  {
    id: 'faq-9',
    category: 'Visa & Immigration',
    question: 'How do you prepare students for visa interviews?',
    answer: 'We conduct comprehensive 1-on-1 mock interviews replicating consular conditions. We train you on explaining your study rationale, financial proofs, ties to your home country, and post-graduation career roadmap with clarity and confidence.',
  },

  // Funding & Scholarships
  {
    id: 'faq-10',
    category: 'Funding & Scholarships',
    question: 'What scholarships are available for international students?',
    answer: 'International students can qualify for university merit scholarships (ranging from 10% to 50% tuition reduction), government awards (e.g. Chevening, Australia Awards), and faculty-specific grants. We actively identify and help you apply for every funding tier matching your profile.',
  },
  {
    id: 'faq-11',
    category: 'Funding & Scholarships',
    question: 'What is the distinction between grants, scholarships, and educational loans?',
    answer: 'Scholarships and grants are non-repayable gift funds awarded on academic merit, extracurricular achievements, or financial need. Education loans provide upfront tuition financing that must be repaid following degree completion and grace periods.',
  },
  {
    id: 'faq-12',
    category: 'Funding & Scholarships',
    question: 'Am I allowed to work part-time while studying abroad?',
    answer: 'Yes. Most major destinations (UK, Australia, Canada, New Zealand, Europe) legally permit international students to work up to 20 hours per week during term time and full-time (40 hours/week) during scheduled university vacations.',
  },

  // Post-Arrival & Support
  {
    id: 'faq-13',
    category: 'Post-Arrival & Support',
    question: 'Do you help students find safe accommodation abroad?',
    answer: 'Yes. We assist you in booking verified on-campus university residences, private student purpose-built flats, or homestay accommodations well before your flight, ensuring a safe arrival experience.',
  },
  {
    id: 'faq-14',
    category: 'Post-Arrival & Support',
    question: 'What support is available upon landing in the destination country?',
    answer: 'We coordinate airport reception, SIM card setup, local bank account opening guidance, and university orientation navigation. We also connect you with our global Pakistani alumni network in your city.',
  },
  {
    id: 'faq-15',
    category: 'Post-Arrival & Support',
    question: 'Do you provide career guidance for post-study work visas?',
    answer: 'Yes, we provide career profiling advice aligned with post-study work permits (PSW / PGWP), helping you target growth industries and in-demand skills in the host country for seamless post-graduation transitions.',
  },
];

const categories = [
  'All',
  'Getting Started',
  'Applications',
  'Visa & Immigration',
  'Funding & Scholarships',
  'Post-Arrival & Support',
] as const;

export default function FAQComponent() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [expandedIds, setExpandedIds] = useState<string[]>(['faq-1', 'faq-7']);

  const filteredFaqs =
    activeCategory === 'All'
      ? faqsData
      : faqsData.filter((item) => item.category === activeCategory);

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-8">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeCategory === cat
                ? 'bg-accent text-white shadow-md shadow-accent/20 scale-105'
                : 'bg-white text-slate-700 hover:text-primary hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Accordion List */}
      <div className="space-y-4 max-w-4xl mx-auto">
        {filteredFaqs.map((faq) => {
          const isOpen = expandedIds.includes(faq.id);

          return (
            <div
              key={faq.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:border-accent/30 transition-colors"
            >
              <button
                onClick={() => toggleExpand(faq.id)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-accent shrink-0">
                    <HelpCircle size={18} />
                  </div>
                  <span className="font-bold text-base md:text-lg text-primary">
                    {faq.question}
                  </span>
                </div>
                <div
                  className={`w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-accent' : ''
                  }`}
                >
                  <ChevronDown size={18} />
                </div>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-1 text-slate-600 text-sm md:text-base leading-relaxed border-t border-slate-100 mt-1">
                  <div className="flex items-start gap-2.5 pt-2">
                    <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                    <p>{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
