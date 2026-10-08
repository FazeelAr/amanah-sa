'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function Navbar({ settings }: { settings?: any }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    if (isMobileMenuOpen) {
      setTimeout(() => setIsMobileMenuOpen(false), 0);
    }
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={cn(
      "fixed w-full top-0 z-[100] transition-all duration-500",
      "bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-md shadow-slate-900/5",
      isHomePage && !isScrolled && "bg-white/80 border-slate-200/60 lg:py-4"
    )}>
      <div className="container-custom flex justify-between items-center relative">

        {/* Logo Icon & Brand Text */}
        <Link href="/" className="flex items-center gap-2 md:gap-3 group shrink-0">
          <motion.div
            whileHover={{ rotate: -6, scale: 1.05 }}
            className="relative h-11 w-11 md:h-14 md:w-14 overflow-hidden rounded-full bg-white shadow-md p-1 border border-slate-100 group-hover:border-accent transition-colors shrink-0"
          >
            <Image
              src={settings?.logoUrl || "/amanah_emblem.png"}
              alt={settings?.brandName || "Amanah Study Abroad Logo"}
              fill
              sizes="(max-width: 768px) 44px, 56px"
              className="object-contain"
              priority
            />
          </motion.div>

          <div className="hidden lg:flex flex-col text-left">
            <span className="text-xl md:text-2xl font-black leading-none tracking-tighter text-primary">
              AMANAH
            </span>
            <span className="text-[9px] md:text-[10px] font-black tracking-[0.24em] uppercase text-accent mt-0.5">
              STUDY ABROAD
            </span>
          </div>
        </Link>

        {/* Centered Mobile Title */}
        <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center text-center lg:hidden pointer-events-none">
          <span className="text-xl md:text-2xl font-black leading-none tracking-tighter text-primary">AMANAH</span>
          <span className="text-[10px] md:text-[11px] font-black tracking-[0.2em] uppercase text-accent">
            STUDY ABROAD
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1 rounded-full p-1 border bg-slate-100/80 border-slate-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 relative group overflow-hidden",
                pathname === link.href
                  ? "bg-primary text-white shadow-sm"
                  : "text-slate-700 hover:text-primary hover:bg-white"
              )}
            >
              <span className="relative z-10">{link.name}</span>
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 md:gap-4 shrink-0">
          <Link
            href="/contact"
            className="hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-full font-black text-sm shadow-lg shadow-accent/20 bg-accent text-white hover:bg-accent-light hover:-translate-y-0.5 active:scale-95 transition-all"
          >
            Apply Now <ChevronRight size={16} />
          </Link>

          {/* Mobile toggle */}
          <button
            className="p-2.5 rounded-xl transition-all border shadow-sm active:scale-90 lg:hidden text-primary border-slate-200 bg-slate-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 bg-white/98 backdrop-blur-2xl z-[200] flex flex-col lg:hidden"
          >
            <div className="flex justify-between items-center p-6 md:p-8 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <Globe className="text-accent animate-pulse" size={24} />
                <span className="text-lg font-black text-primary tracking-[0.15em]">
                  {settings?.brandName ? settings.brandName.toUpperCase() : 'AMANAH STUDY ABROAD'}
                </span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3 bg-slate-100 rounded-2xl text-primary hover:bg-slate-200 transition-all active:scale-90 shadow-sm"
              >
                <X size={26} />
              </button>
            </div>

            <div className="flex-grow flex flex-col justify-center px-8 gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + (i * 0.1) }}
                  key={link.name}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "text-2xl font-black transition-all flex items-center justify-between group py-3 border-b border-slate-100",
                      pathname === link.href ? "text-accent font-black scale-105" : "text-primary hover:text-accent"
                    )}
                  >
                    <span className="group-hover:translate-x-2 transition-transform duration-300 uppercase tracking-wider">
                      {link.name}
                    </span>
                    <ChevronRight
                      className={cn(
                        "transition-all duration-300",
                        pathname === link.href ? "opacity-100 text-accent" : "opacity-0 group-hover:opacity-100"
                      )}
                      size={24}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="p-8 space-y-6 bg-slate-50 border-t border-slate-200">
              <Link
                href="/contact"
                className="w-full bg-accent text-white py-4 rounded-2xl font-black text-lg flex items-center justify-center gap-3 shadow-xl hover:bg-accent-light transition-all"
              >
                Get Free Consultation <ChevronRight size={20} />
              </Link>
              <div className="flex justify-between items-center text-slate-500 text-[10px] font-black tracking-widest uppercase">
                <span>Office 15, Liberty, Lahore</span>
                <span>© {new Date().getFullYear()} Amanah Study Abroad</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
