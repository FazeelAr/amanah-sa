'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function ContactClient({ data }: { data?: any }) {
  const [formState, setFormState] = useState({
    name: '',
    qualification: '',
    cgpa: '',
    phone: '',
    destination: '',
    service: 'Visa Counseling',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappNumber = '923143782608';
    const message =
      `*AMANAH STUDY ABROAD ASSESSMENT REQUEST*%0A%0A` +
      `*Student Name:* ${encodeURIComponent(formState.name)}%0A` +
      `*Qualification:* ${encodeURIComponent(formState.qualification)}%0A` +
      `*CGPA:* ${encodeURIComponent(formState.cgpa)}%0A` +
      `*Phone Number:* ${encodeURIComponent(formState.phone)}%0A` +
      `*Desired Destination:* ${encodeURIComponent(formState.destination)}%0A` +
      `*Service Interest:* ${encodeURIComponent(formState.service)}%0A` +
      `*Student Inquiry:* ${encodeURIComponent(formState.message || 'None')}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');

    alert('Thank you! Redirecting you to WhatsApp for instant consultation.');
    setFormState({
      name: '',
      qualification: '',
      cgpa: '',
      phone: '',
      destination: '',
      service: 'Visa Counseling',
      message: '',
    });
  };

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-b from-[#011227] via-[#031F3F] to-[#011227] py-16 md:py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/hero.jpeg"
            alt="Contact Background"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-radial from-transparent via-[#011227]/70 to-[#011227]"></div>

        <div className="container-custom relative z-10 space-y-4 max-w-3xl mx-auto">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-accent-light border border-white/20 px-3.5 py-1 rounded-full bg-white/5 inline-block">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">
            Let&apos;s Talk.
          </h1>
          <p className="text-base md:text-lg text-slate-200 font-normal leading-relaxed">
            Start your international journey with a free, expert consultation today.
          </p>
        </div>
      </section>

      {/* 2. Main 2-Column Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Direct Contact & Office Info + Google Maps Embed */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <span className="text-accent font-black tracking-widest uppercase text-xs">
                  Direct Contact
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-primary">
                  Visit Our Lahore Office
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Our senior education counselors are available in Liberty, Lahore to review your documents and map out your admission pathway.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-3.5">
                {/* Visit Us */}
                <div className="flex items-start gap-4 p-4 sm:p-5 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
                  <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center text-accent shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Visit Us</h4>
                    <p className="text-sm font-bold text-primary mt-0.5 leading-snug">
                      Office 15, 2nd Floor, Big City Tower, Liberty Roundabout, Lahore.
                    </p>
                  </div>
                </div>

                {/* WhatsApp Us */}
                <div className="flex items-start gap-4 p-4 sm:p-5 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
                  <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center text-accent shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">WhatsApp Us</h4>
                    <a
                      href="https://wa.me/923143782608"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-primary hover:text-accent transition-colors flex items-center gap-2 mt-0.5"
                    >
                      <span>0314 3782608</span>
                      <span className="text-[10px] bg-emerald-600 text-white px-2 py-0.5 rounded-full font-black uppercase">
                        Active
                      </span>
                    </a>
                  </div>
                </div>

                {/* Email Us */}
                <div className="flex items-start gap-4 p-4 sm:p-5 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
                  <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center text-accent shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Us</h4>
                    <a
                      href="mailto:amanahstudyabroad@gmail.com"
                      className="text-sm font-bold text-primary hover:text-accent transition-colors break-all mt-0.5 block"
                    >
                      amanahstudyabroad@gmail.com
                    </a>
                  </div>
                </div>

                {/* Open Hours */}
                <div className="flex items-start gap-4 p-4 sm:p-5 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
                  <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center text-accent shrink-0">
                    <Clock size={22} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Working Hours</h4>
                    <p className="text-sm font-bold text-primary mt-0.5">
                      Mon - Sat: 10:00 AM - 6:00 PM
                    </p>
                    <p className="text-[11px] text-slate-500">Sunday Closed</p>
                  </div>
                </div>
              </div>

              {/* Interactive Google Maps Embed */}
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm h-64 sm:h-72 w-full relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.0476154708103!2d74.34573107389996!3d31.522852147022494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904f9c6eb57bb%3A0x939b82a19e9a81df!2sCity%20Towers!5e0!3m2!1sen!2s!4v1791470162061!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Amanah Study Abroad Office Map"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                ></iframe>
              </div>
            </div>

            {/* Right Column: Secure Assessment Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-7 sm:p-9 shadow-xl border border-slate-100 relative overflow-hidden space-y-6">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-accent-light"></div>

                <div className="space-y-1">
                  <span className="text-accent font-black tracking-widest uppercase text-xs">
                    Free Profile Evaluation
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-primary">
                    Secure Assessment Form
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Fill in your academic background and receive instant assessment via WhatsApp.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Muhammad Ali Khan"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-accent text-sm"
                    />
                  </div>

                  {/* Qualification & CGPA */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Last Qualification *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. A-Levels / BS CS"
                        value={formState.qualification}
                        onChange={(e) => setFormState({ ...formState, qualification: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-accent text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        CGPA / Percentage *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 3.6 / 82%"
                        value={formState.cgpa}
                        onChange={(e) => setFormState({ ...formState, cgpa: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-accent text-sm"
                      />
                    </div>
                  </div>

                  {/* Phone & Destination */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 0314 3782608"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-accent text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Desired Destination *
                      </label>
                      <select
                        required
                        value={formState.destination}
                        onChange={(e) => setFormState({ ...formState, destination: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-accent text-sm cursor-pointer"
                      >
                        <option value="">Select Target Country</option>
                        <option value="United Kingdom">United Kingdom (UK)</option>
                        <option value="Australia">Australia</option>
                        <option value="Canada">Canada</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Europe">Europe (Germany, Italy, etc.)</option>
                        <option value="United States">United States (USA)</option>
                        <option value="Turkey">Turkey</option>
                      </select>
                    </div>
                  </div>

                  {/* Service Interest */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Service Interest *
                    </label>
                    <select
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-accent text-sm cursor-pointer"
                    >
                      <option value="Visa Counseling">Student Visa Counseling</option>
                      <option value="University Selection">Global University Selection</option>
                      <option value="Career Guidance">Career & Profile Coaching</option>
                      <option value="Test Preparation">IELTS / Language Test Prep</option>
                      <option value="Scholarships">Scholarship & Funding Access</option>
                    </select>
                  </div>

                  {/* Inquiry */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Inquiry (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Mention any specific universities, target budget, or intake semester preferences..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-accent text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-accent text-white font-black text-sm uppercase tracking-wider shadow-xl shadow-accent/25 hover:bg-accent-light active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    <span>Submit & Open WhatsApp</span>
                    <Send size={16} />
                  </button>

                  <div className="pt-2 flex items-center justify-between text-xs text-slate-500 font-semibold">
                    <span className="flex items-center gap-1.5 text-emerald-600">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      Direct WhatsApp Dispatch
                    </span>
                    <span>100% Confidential</span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
