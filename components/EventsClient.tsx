'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Calendar,
  MapPin,
  Users,
  CheckCircle2,
  Clock,
  Sparkles,
  Award,
  Building,
  GraduationCap,
  Mail,
  ChevronRight,
  MessageCircle,
} from 'lucide-react';

export default function EventsClient() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const upcomingEvents = [
    {
      title: 'Grand Study Abroad Expo 2026',
      type: 'EXPO',
      date: 'November 15, 2026',
      time: '11:00 AM - 6:00 PM',
      venue: 'PC Hotel & Convention Center, Lahore',
      attendees: '500+ Expected Attendees',
      topics: [
        'Direct 1-on-1 meetings with foreign university representatives',
        'On-the-spot academic profile assessment and fee waiver checks',
        'Expert keynote on 2027 visa changes & post-study work permits',
        'Complimentary IELTS diagnostic test vouchers',
      ],
    },
    {
      title: 'UK & USA Visa Masterclass',
      type: 'WEBINAR',
      date: 'December 05, 2026',
      time: '4:00 PM - 6:00 PM',
      venue: 'Amanah Head Office, Liberty Lahore & Live Online',
      attendees: '200+ Expected Attendees',
      topics: [
        'Financial statement audits and bank proof criteria',
        'Overcoming study gap concerns with legitimate work proofs',
        'Consular mock interview simulations and question bank',
        'F-1 & Tier-4 compliance guidelines and common refusal traps',
      ],
    },
    {
      title: 'Career After Study Abroad',
      type: 'WORKSHOP',
      date: 'December 18, 2026',
      time: '5:00 PM - 7:30 PM',
      venue: 'Zoom Online Broadcast',
      attendees: '300+ Expected Attendees',
      topics: [
        'High-demand sectors: AI, Data, Green Energy & Healthcare',
        'Post-Graduation Work Permit (PGWP) transition strategies',
        'Building an internationally competitive CV & LinkedIn profile',
        'Panel discussion with Amanah alumni working in London & Toronto',
      ],
    },
    {
      title: 'IELTS/PTE Preparation Bootcamp',
      type: 'BOOTCAMP',
      date: 'January 10, 2027',
      time: '2:00 PM - 5:00 PM',
      venue: 'Amanah Training Center, Big City Tower, Lahore',
      attendees: '150+ Expected Attendees',
      topics: [
        'Proven test strategies to achieve 7.0+ IELTS band scores',
        'PTE Academic algorithm tricks for Speaking and Writing sections',
        'Interactive grammar diagnostic & speed-reading exercises',
        'Free curated test study pack & practice mock software',
      ],
    },
    {
      title: 'Scholarship Success Stories',
      type: 'SEMINAR',
      date: 'January 24, 2027',
      time: '3:00 PM - 5:30 PM',
      venue: 'Zoom Online Webinar',
      attendees: '400+ Expected Attendees',
      topics: [
        'How our scholars secured 50% - 100% university tuition waivers',
        'Writing compelling Statements of Purpose that win scholarships',
        'Chevening, Commonwealth & European grant application roadmap',
        'Live Q&A session with scholarship recipients',
      ],
    },
    {
      title: 'Canada Study Visa Process',
      type: 'SESSION',
      date: 'February 08, 2027',
      time: '3:00 PM - 5:00 PM',
      venue: 'Amanah Head Office, Liberty Roundabout, Lahore',
      attendees: '250+ Expected Attendees',
      topics: [
        'Understanding latest IRCC study permit policies & Provincial Attestation Letters (PAL)',
        'Designated Learning Institutions (DLI) shortlisting strategy',
        'Financial sponsorship documentation and GIC requirements',
        'Post-Graduation Work Permit (PGWP) eligibility nuances',
      ],
    },
  ];

  const pastEvents = [
    {
      title: 'Summer Global Education Fair 2026',
      date: 'July 2026',
      stat: '650+ Students',
      summary: 'Connected over 650 students with 40+ UK and Australian university delegates at Royal Palm Lahore, resulting in 180+ on-spot conditional offers.',
    },
    {
      title: 'UK University Admissions Summit',
      date: 'May 2026',
      stat: '320+ Attendees',
      summary: 'Focused masterclass on Russell Group university admissions, CAS letter processing, and interview preparation.',
    },
    {
      title: 'Post-Graduation Visa Workshop',
      date: 'March 2026',
      stat: '280+ Attendees',
      summary: 'Detailed session on post-study work routes across Australia, Canada, and the UK, guided by licensed immigration counselors.',
    },
  ];

  const whyAttendPoints = [
    {
      title: 'Meet Universities Direct',
      icon: <Building className="text-accent w-6 h-6" />,
      desc: 'Speak face-to-face with authorized university admissions delegates without intermediary delays.',
    },
    {
      title: 'Expert Guidance',
      icon: <GraduationCap className="text-accent w-6 h-6" />,
      desc: 'Get immediate professional clarification on GPA requirements, test exemptions, and visa procedures.',
    },
    {
      title: 'Global Networking',
      icon: <Users className="text-accent w-6 h-6" />,
      desc: 'Meet fellow ambitious Pakistani students heading to the same destinations and international campuses.',
    },
    {
      title: 'Exclusive Waivers & Offers',
      icon: <Award className="text-accent w-6 h-6" />,
      desc: 'Access exclusive event application fee waivers, tuition discount vouchers, and fast-track offer evaluations.',
    },
    {
      title: 'Learn Inside Secrets',
      icon: <Sparkles className="text-accent w-6 h-6" />,
      desc: 'Discover lesser-known scholarship opportunities and visa file tips directly from seasoned practitioners.',
    },
    {
      title: 'Start Your Journey',
      icon: <Calendar className="text-accent w-6 h-6" />,
      desc: 'Turn months of procrastination into a structured, executable roadmap for the upcoming intake semester.',
    },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    alert('Thank you! You have been subscribed to Amanah event alerts.');
  };

  return (
    <div className="pt-20">
      {/* 1. Page Header */}
      <section className="bg-gradient-to-b from-[#011227] via-[#031F3F] to-[#011227] py-16 md:py-20 text-white text-center relative overflow-hidden">
        <div className="container-custom relative z-10 space-y-4 max-w-3xl mx-auto">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-accent-light border border-white/20 px-3.5 py-1 rounded-full bg-white/5 inline-block">
            Seminars & Expos
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">
            Events & Expos
          </h1>
          <p className="text-base md:text-lg text-slate-200 font-normal leading-relaxed">
            Meet foreign universities directly, attend specialized visa masterclasses, and join expert counseling fairs hosted by Amanah Study Abroad.
          </p>
        </div>
      </section>

      {/* 2. Upcoming Events Catalog */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-accent font-black tracking-widest uppercase text-xs">
              Upcoming Schedule
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tight">
              Featured Events & Masterclasses
            </h2>
            <p className="text-slate-600 text-sm md:text-base">
              Secure your free seat today. All events are open to prospective students and parents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((evt, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-xl border border-slate-100 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-accent text-white font-black text-[10px] uppercase tracking-wider">
                      {evt.type}
                    </span>
                    <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
                      <Users size={14} className="text-accent" />
                      {evt.attendees}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-primary">{evt.title}</h3>

                  <div className="space-y-2 text-xs font-semibold text-slate-600 bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-accent shrink-0" />
                      <span>{evt.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-accent shrink-0" />
                      <span>{evt.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-accent shrink-0" />
                      <span>{evt.venue}</span>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block">
                      Key Topics Covered:
                    </span>
                    <ul className="space-y-1.5">
                      {evt.topics.map((t, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 size={14} className="text-accent shrink-0 mt-0.5" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href="/contact"
                    className="w-full py-3 rounded-full bg-primary text-white hover:bg-accent font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                  >
                    <span>Register Now (Free)</span>
                    <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Past Events Track Record */}
      <section className="section-padding bg-white">
        <div className="container-custom space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-accent font-black tracking-widest uppercase text-xs">
              Verified Heritage
            </span>
            <h2 className="text-3xl font-black text-primary tracking-tight">
              Past Events Track Record
            </h2>
            <p className="text-slate-600 text-sm">
              A history of empowering students with factual education counseling across Lahore and Pakistan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((pe, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3"
              >
                <div className="flex items-center justify-between text-xs font-bold text-accent">
                  <span>{pe.date}</span>
                  <span className="bg-white px-2.5 py-1 rounded-full shadow-xs">{pe.stat}</span>
                </div>
                <h3 className="text-lg font-bold text-primary">{pe.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{pe.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Attend Our Events Grid */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-accent font-black tracking-widest uppercase text-xs">
              Attendee Benefits
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tight">
              Why Attend Amanah Events?
            </h2>
            <p className="text-slate-600 text-sm md:text-base">
              Direct access, exclusive fee vouchers, and clarity you cannot find on internet forums.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyAttendPoints.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all space-y-3"
              >
                <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-primary">{item.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Newsletter Lead Generation CTA */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="container-custom max-w-2xl text-center space-y-4">
          <Mail className="text-accent w-10 h-10 mx-auto" />
          <h2 className="text-2xl font-black text-primary">Never Miss an Upcoming Expo</h2>
          <p className="text-slate-600 text-sm">
            Subscribe to receive priority event invitations, university visit schedules, and scholarship alert bulletins.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 pt-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-grow px-5 py-3 rounded-full border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-accent text-sm"
            />
            <button
              type="submit"
              className="px-7 py-3 rounded-full bg-primary text-white font-bold text-xs uppercase tracking-wider hover:bg-primary-light transition-all cursor-pointer"
            >
              {subscribed ? 'Subscribed ✓' : 'Subscribe'}
            </button>
          </form>
          <p className="text-[10px] text-slate-400">Zero spam guarantee. Unsubscribe at any time.</p>
        </div>
      </section>

      {/* 6. Final Dual CTA */}
      <section className="py-14 md:py-20 bg-secondary text-center">
        <div className="container-custom max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-black text-primary">
            Prefer a Private 1-on-1 Consultation?
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            You don&apos;t have to wait for an expo. Visit our office in Liberty, Lahore or book a dedicated consultation over WhatsApp today.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-accent text-white font-bold text-xs uppercase tracking-widest hover:bg-accent-light shadow-xl shadow-accent/20 transition-all flex items-center gap-2"
            >
              Book Consultation <ChevronRight size={16} />
            </Link>
            <a
              href="https://wa.me/923143782608?text=Hello%20Amanah%20Study%20Abroad,%20I%20would%20like%20to%20register%20for%20an%20upcoming%20event."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-emerald-600 text-white font-bold text-xs uppercase tracking-widest hover:bg-emerald-700 shadow-xl shadow-emerald-600/20 transition-all flex items-center gap-2"
            >
              <MessageCircle size={16} />
              WhatsApp Direct
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
