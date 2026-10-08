'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);

const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);

export default function Footer({ settings }: { settings?: any }) {
  return (
    <footer className="bg-secondary text-primary py-8 md:py-12 relative overflow-hidden border-t border-slate-200">
      {/* Decorative Background Orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container-custom grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative z-10 border-b border-primary/10 pb-8 md:pb-12">
        <div className="space-y-5">
          <Link href="/" className="flex items-center gap-3.5 group">
            <motion.div
              whileHover={{ rotate: -5, scale: 1.05 }}
              className="relative h-12 w-12 md:h-14 md:w-14 overflow-hidden rounded-full bg-white shadow-md p-1 border border-slate-100 group-hover:border-accent transition-colors shrink-0"
            >
              <Image
                src={settings?.logoUrl || "/amanah_emblem.png"}
                alt={settings?.brandName || "Amanah Study Abroad Logo"}
                fill
                sizes="(max-width: 768px) 48px, 56px"
                className="object-contain"
                loading="eager"
              />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight leading-none text-primary">
                {settings?.brandName || 'Amanah Study Abroad'}
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent mt-1">
                Your Dreams • Our Guidance
              </span>
            </div>
          </Link>
          <p className="text-primary/85 leading-relaxed text-sm">
            {settings?.footerText || 'Empowering ambitious students to achieve their global academic and career dreams through trusted admissions, visa assistance, and personalized guidance.'}
          </p>
          <div className="flex gap-3">
            {(settings?.socialLinks || [
              { platform: 'Facebook', url: "https://www.facebook.com/profile.php?id=61594107057346" },
              { platform: 'Twitter', url: "#" },
              { platform: 'LinkedIn', url: "#" },
              { platform: 'Instagram', url: "#" }
            ]).map((social: any, i: number) => {
              const iconMap: Record<string, React.ReactNode> = {
                'Facebook': <FacebookIcon />,
                'Twitter': <TwitterIcon />,
                'LinkedIn': <LinkedinIcon />,
                'Instagram': <InstagramIcon />
              };
              return (
              <motion.a
                key={i}
                href={social.url}
                target={social.url !== "#" ? "_blank" : undefined}
                rel={social.url !== "#" ? "noopener noreferrer" : undefined}
                whileHover={{ y: -4 }}
                className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-primary flex items-center justify-center cursor-pointer hover:bg-accent hover:text-white hover:border-accent transition-colors duration-300 shadow-sm"
              >
                {iconMap[social.platform] || <FacebookIcon />}
              </motion.a>
            )})}
          </div>
        </div>

        <div>
          <h2 className="text-sm md:text-base font-bold mb-5 text-primary uppercase tracking-wider">Quick Navigation</h2>
          <ul className="space-y-3 text-primary/85 font-medium text-sm">
            <li><Link href="/" className="hover:text-accent transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-all"></span> Home</Link></li>
            <li><Link href="/services" className="hover:text-accent transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-all"></span> Services</Link></li>
            <li><Link href="/about" className="hover:text-accent transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-all"></span> About Us</Link></li>
            <li><Link href="/contact" className="hover:text-accent transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-all"></span> Contact</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm md:text-base font-bold mb-5 text-primary uppercase tracking-wider">Our Solutions</h2>
          <ul className="space-y-3 text-primary/85 font-medium text-sm">
            <li className="hover:text-accent transition-colors cursor-pointer">Student Visa Assistance</li>
            <li className="hover:text-accent transition-colors cursor-pointer">Global University Admissions</li>
            <li className="hover:text-accent transition-colors cursor-pointer">Personalized Counselling</li>
            <li className="hover:text-accent transition-colors cursor-pointer">Scholarship Guidance</li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm md:text-base font-bold mb-5 text-primary uppercase tracking-wider">Direct Contact</h2>
          <ul className="space-y-4 text-primary/85 font-medium text-sm">
            <li className="flex gap-3">
              <MapPin className="text-accent shrink-0 mt-0.5" size={18} />
              <span className="leading-relaxed">
                {settings?.officeAddress || 'Office 15, 2nd Floor, Big City Tower, Liberty Roundabout, Lahore.'}
              </span>
            </li>
            <li className="flex gap-3 items-center group">
              <Phone className="text-accent shrink-0" size={18} />
              <a 
                href={settings?.contactPhone ? `https://wa.me/${settings.contactPhone.replace(/[^0-9]/g, '')}` : "https://wa.me/923143782608"} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-accent transition-colors flex items-center gap-2 font-bold"
              >
                {settings?.contactPhone || '03143782608'}
                <span className="text-[10px] bg-emerald-600 text-white px-2 py-0.5 rounded-full font-black uppercase tracking-tight">WhatsApp</span>
              </a>
            </li>
            <li className="flex gap-3 items-center group">
              <Mail className="text-accent shrink-0" size={18} />
              <a 
                href={`mailto:${settings?.contactEmail || 'amanahstudyabroad@gmail.com'}`} 
                target="_blank" 
                className="hover:text-accent transition-colors break-all"
              >
                {settings?.contactEmail || 'amanahstudyabroad@gmail.com'}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-custom pt-8 flex flex-col md:flex-row justify-between items-center text-primary/70 text-[10px] font-bold uppercase tracking-[0.2em] gap-4">
        <p>&copy; {new Date().getFullYear()} {settings?.brandName || 'Amanah Study Abroad'}. Designed for Global Success.</p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
