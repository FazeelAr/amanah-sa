'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function ContactClient({ data }: { data: any }) {
  const [formState, setFormState] = useState({
    name: '',
    qualification: '',
    cgpa: '',
    phone: '',
    destination: '',
    service: 'Visa Counseling',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const rawPhone = data?.contactPage?.whatsappNumber || data?.siteSettings?.contactPhone || "923143782608";
    const whatsappNumber = rawPhone.replace(/[^0-9]/g, '');
    const message = `*AMANAH STUDY ABROAD ASSESSMENT REQUEST*%0A%0A` +
      `*Student Name:* ${formState.name}%0A` +
      `*Qualification:* ${formState.qualification}%0A` +
      `*CGPA:* ${formState.cgpa}%0A` +
      `*Phone Number:* ${formState.phone}%0A` +
      `*Desired Destination:* ${formState.destination}%0A` +
      `*Service Interest:* ${formState.service}%0A%0A` +
      `*Student Inquiry:*%0A${formState.message}`;

    // Redirect to WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');

    alert('Thank you! Redirecting you to WhatsApp for instant consultation.');
    setFormState({ name: '', qualification: '', cgpa: '', phone: '', destination: '', service: 'Visa Counseling', message: '' });
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 }
    }
  };

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-secondary py-12 md:py-18 lg:py-20 text-primary relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1.5, type: "spring" }}
          className="absolute inset-0"
        >
          <Image src="/aim_hero_bg.png" alt="Background" fill className="object-cover" priority loading="eager" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent"></div>
        <div className="container-custom relative z-10 text-center space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 12 }}
            className="text-4xl md:text-6xl font-black tracking-tighter"
          >
            {data?.contactPage?.heading ? (
              <span dangerouslySetInnerHTML={{ __html: data.contactPage.heading }} />
            ) : (
              <>Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Connect</span>.</>
            )}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 80, damping: 12 }}
            className="text-sm md:text-lg text-primary/85 max-w-2xl mx-auto font-medium"
          >
            {data?.contactPage?.subheading || "Start your international study journey with expert, transparent consultation from Amanah Study Abroad."}
          </motion.p>
        </div>
      </section>

      {/* Main Content (Centered Form, then Cards below) */}
      <section className="section-padding relative z-20 -mt-10">
        <div className="container-custom max-w-4xl mx-auto space-y-16">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
            className="bg-white rounded-[2rem] shadow-[0_30px_70px_rgba(3,31,63,0.08)] p-6 md:p-8 border border-slate-100 relative overflow-hidden max-w-xl mx-auto"
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-accent to-primary"></div>
            <div className="mb-6 text-center">
              <span className="text-accent font-black tracking-[0.2em] uppercase text-xs">Free Consultation</span>
              <h2 className="text-2xl font-bold text-primary mt-1">Get Free Assessment</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Muhammad Ali"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-accent text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Last Qualification</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. BS Computer Science / FSC"
                    value={formState.qualification}
                    onChange={(e) => setFormState({ ...formState, qualification: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-accent text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">CGPA / Percentage</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 3.4 / 78%"
                    value={formState.cgpa}
                    onChange={(e) => setFormState({ ...formState, cgpa: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-accent text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    required
                    placeholder="0314 3782608"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-accent text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Desired Destination</label>
                  <select
                    value={formState.destination}
                    onChange={(e) => setFormState({ ...formState, destination: e.target.value })}
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-accent text-sm bg-white"
                  >
                    <option value="">Select Destination</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="Europe">Europe</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Service Needed</label>
                <select
                  value={formState.service}
                  onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-accent text-sm bg-white"
                >
                  <option value="Visa Counseling">Visa Counseling</option>
                  <option value="University Admission">University Admission</option>
                  <option value="Scholarship Guidance">Scholarship Guidance</option>
                  <option value="Career & Profile Evaluation">Career & Profile Evaluation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Your Message (Optional)</label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your background and specific goals..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-accent text-sm resize-none"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-accent text-white py-3.5 rounded-xl text-base font-black shadow-lg shadow-accent/25 flex items-center justify-center gap-3 mt-3 hover:bg-accent-light transition-all duration-300"
              >
                Request Free Assessment <Send size={18} />
              </motion.button>

              <p className="text-center text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-3">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
                Instant WhatsApp Support Available
              </p>
            </form>
          </motion.div>

          {/* Contact Information Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.div variants={cardVariants} className="md:col-span-2 text-center mb-2">
              <span className="text-accent font-black tracking-[0.2em] uppercase text-xs">Reach Out</span>
              <h2 className="text-3xl font-black text-primary leading-tight mt-1">We&apos;re Here to Guide You.</h2>
            </motion.div>

            {[
              { icon: <MapPin className="text-accent" size={24} />, label: "Office Address", val: data?.contactPage?.officeLocation || data?.siteSettings?.officeAddress || "Office 15, 2nd Floor, Big City Tower, Liberty Roundabout, Lahore.", href: "#" },
              { icon: <Phone className="text-accent" size={24} />, label: "Direct Phone / WhatsApp", val: data?.siteSettings?.contactPhone || "0314 3782608", href: `https://wa.me/923143782608` },
              { icon: <Mail className="text-accent" size={24} />, label: "Official Email", val: data?.contactPage?.emailSupport || data?.siteSettings?.contactEmail || "amanahstudyabroad@gmail.com", href: `mailto:amanahstudyabroad@gmail.com` },
              { icon: <Clock className="text-accent" size={24} />, label: "Working Hours", val: data?.contactPage?.operatingHours || "Mon - Sat: 10:00 AM - 6:00 PM", href: "#" }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-5 p-6 bg-white rounded-[2rem] border border-slate-100 shadow-[0_20px_40px_rgba(3,31,63,0.05)] hover:border-accent/40 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center shadow-sm shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-400 uppercase tracking-widest text-[10px] mb-1">{item.label}</h4>
                  {item.href !== "#" ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm text-primary font-black hover:text-accent transition-colors break-all leading-tight">{item.val}</a>
                  ) : (
                    <p className="text-sm text-primary font-black leading-tight">{item.val}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Embedded Google Map - Liberty Roundabout Big City Tower Lahore */}
      <section className="relative w-full h-[450px] mt-8 bg-slate-100">
        <iframe
          src={data?.contactPage?.googleMapsEmbedUrl || "https://maps.google.com/maps?q=Big+City+Tower+Liberty+Roundabout+Lahore&t=&z=16&ie=UTF8&iwloc=&output=embed"}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-1000"
        ></iframe>
        
        {/* Overlay gradient to blend map into content */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-slate-50 to-transparent pointer-events-none"></div>
      </section>
    </div>
  );
}
