import type { Metadata } from 'next';
import Link from 'next/link';
import {
  BookOpen,
  Building,
  Globe2,
  Send,
  FileCheck2,
  Award,
  Clock,
  CheckCircle2,
  Users,
  ShieldCheck,
  Headphones,
  Compass,
  ChevronRight,
  MessageCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'How It Works | Amanah Study Abroad',
  description: 'Your complete step-by-step roadmap to global academic success, from degree selection to visa approval and foreign campus arrival.',
};

export default function HowItWorksPage() {
  const sixSteps = [
    {
      num: '01',
      title: 'Select Program',
      icon: <BookOpen className="text-accent" size={26} />,
      desc: 'Align your previous academic credentials, personal strengths, and long-term career aims with accredited international degree programs.',
    },
    {
      num: '02',
      title: 'Select University',
      icon: <Building className="text-accent" size={26} />,
      desc: 'Shortlist top global institutions matching your GPA, budget expectations, tuition discount eligibility, and post-study work goals.',
    },
    {
      num: '03',
      title: 'Select Destination',
      icon: <Globe2 className="text-accent" size={26} />,
      desc: 'Evaluate immigration policies, post-study work visa rights, cost of living, and climate across the UK, Australia, Canada, Europe, or NZ.',
    },
    {
      num: '04',
      title: 'Submit Application',
      icon: <Send className="text-accent" size={26} />,
      desc: 'Execute structured, error-free university submissions backed by thorough counselor review, polished SOPs, and recommendation letters.',
    },
    {
      num: '05',
      title: 'Document Collection',
      icon: <FileCheck2 className="text-accent" size={26} />,
      desc: 'Meticulously organize financial sponsorship proofs, bank statements, attested educational transcripts, and medical certifications.',
    },
    {
      num: '06',
      title: 'Receive Offer Letter & Visa',
      icon: <Award className="text-accent" size={26} />,
      desc: 'Accept your official offer, secure unconditional CAS or CoE, lodge your biometric visa application, and celebrate your visa grant.',
    },
  ];

  const timelinePhases = [
    {
      phase: 'Weeks 1 - 2',
      title: 'Program, University & Destination Shortlisting',
      desc: 'Free 1-on-1 counseling, academic transcript evaluation, career alignment, and finalizing your target university applications.',
      items: ['Profile evaluation & GAP analysis', 'University shortlisting (3-5 options)', 'English test diagnostic (IELTS/PTE)'],
    },
    {
      phase: 'Weeks 2 - 6',
      title: 'Application Preparation & Document Verification',
      desc: 'Drafting winning Statements of Purpose (SOP), securing professor recommendation letters, and submitting official admission portals.',
      items: ['SOP editing by certified advisors', 'Document translation & notarization', 'Submission to institutional admissions'],
    },
    {
      phase: 'Weeks 6 - 12',
      title: 'Offer Letter Issuance & Visa Lodgment',
      desc: 'Receiving offer letters, fulfilling conditional requirements, paying tuition deposit, and lodging student visa file with the embassy.',
      items: ['Offer acceptance & deposit transfer', 'Consular visa mock interviews', 'Biometrics & final visa approval'],
    },
  ];

  const processPillars = [
    {
      title: 'Expert Guidance',
      icon: <Users className="text-accent" size={28} />,
      desc: 'Certified educational consultants with over a decade of verified experience in foreign university placements.',
    },
    {
      title: '1,000+ University Partners',
      icon: <Building className="text-accent" size={28} />,
      desc: 'Direct institutional channels ensuring expedited file assessments and priority scholarship consideration.',
    },
    {
      title: 'Proven Track Record',
      icon: <ShieldCheck className="text-accent" size={28} />,
      desc: 'Over 100,000 students guided and an industry-defining 99% student visa grant success rate.',
    },
    {
      title: 'Dedicated Support',
      icon: <Headphones className="text-accent" size={28} />,
      desc: 'Direct WhatsApp and in-person assistance in Lahore from initial consultation through post-arrival settlement.',
    },
    {
      title: 'Global Network',
      icon: <Globe2 className="text-accent" size={28} />,
      desc: 'Active alumni networks across top global university hubs ready to support newly arriving scholars.',
    },
    {
      title: 'Personalized Plans',
      icon: <Compass className="text-accent" size={28} />,
      desc: 'Zero generic formulas. Every roadmap is uniquely calibrated to your academic background and financial comfort.',
    },
  ];

  return (
    <div className="pt-20">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-b from-[#011227] via-[#031F3F] to-[#011227] py-16 md:py-20 text-white text-center relative overflow-hidden">
        <div className="container-custom relative z-10 space-y-4 max-w-3xl mx-auto">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-accent-light border border-white/20 px-3.5 py-1 rounded-full bg-white/5 inline-block">
            Step-by-Step Pathway
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">
            Your Journey to Global Success
          </h1>
          <p className="text-base md:text-lg text-slate-200 font-normal leading-relaxed">
            A clear, transparent roadmap from initial university selection to offer letter issuance and embassy visa grant.
          </p>
        </div>
      </section>

      {/* 2. Six Simple Steps */}
      <section className="section-padding bg-white relative">
        <div className="container-custom space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-accent font-black tracking-widest uppercase text-xs">
              Simple & Transparent
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tight">
              Six Steps to Your Dream Degree
            </h2>
            <p className="text-slate-600 text-sm md:text-base">
              We remove the stress and confusion from international applications with a clear 6-step framework.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sixSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-3xl p-7 border border-slate-100 hover:border-accent/40 hover:bg-white hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                      {step.icon}
                    </div>
                    <span className="text-3xl font-black text-slate-300 group-hover:text-accent transition-colors">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-primary transition-colors">
                  <span>Phase {step.num} Verified</span>
                  <span className="text-accent">✓</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Journey Timeline */}
      <section className="section-padding bg-slate-50 relative overflow-hidden">
        <div className="container-custom space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-accent font-black tracking-widest uppercase text-xs">
              Realistic Durations
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tight">
              Realistic Journey Timeline
            </h2>
            <p className="text-slate-600 text-sm md:text-base">
              Standard processing phases so you and your family can plan ahead with precision.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {timelinePhases.map((phase, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-accent/40 transition-colors"
              >
                <div className="space-y-2 md:max-w-xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-primary text-xs font-black uppercase tracking-wider">
                    <Clock size={14} className="text-accent" />
                    <span>{phase.phase}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary">{phase.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{phase.desc}</p>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 shrink-0 md:w-64 space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">
                    Deliverables:
                  </span>
                  <ul className="space-y-1.5 text-xs font-medium text-slate-700">
                    {phase.items.map((it, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-accent shrink-0" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Our Process Works */}
      <section className="section-padding bg-white">
        <div className="container-custom space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-accent font-black tracking-widest uppercase text-xs">
              Built-In Reliability
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tight">
              Why Our Process Works
            </h2>
            <p className="text-slate-600 text-sm md:text-base">
              Six core advantages that turn complex foreign applications into predictable victories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-accent/30 hover:shadow-lg transition-all space-y-3"
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

      {/* 5. Dual CTA Section */}
      <section className="py-14 md:py-20 bg-secondary text-center">
        <div className="container-custom max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-black text-primary">
            Ready to Take Step One?
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Begin with a free profile assessment. Our advisors in Liberty, Lahore will help you discover which program and university fits your academic ambition.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-accent text-white font-bold text-xs uppercase tracking-widest hover:bg-accent-light shadow-xl shadow-accent/20 transition-all flex items-center gap-2"
            >
              Start Free Assessment <ChevronRight size={16} />
            </Link>
            <a
              href="https://wa.me/923143782608?text=Hello%20Amanah%20Study%20Abroad,%20I%20would%20like%20to%20learn%20more%20about%20your%20application%20process."
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
