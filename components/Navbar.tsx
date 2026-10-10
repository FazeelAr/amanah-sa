'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight, Globe } from 'lucide-react';
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
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Destinations', href: '/study-destinations' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed w-full top-0 z-[100] transition-all duration-300',
        'bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-md shadow-slate-900/5',
        isHomePage && !isScrolled && 'bg-white/80 border-slate-200/60 lg:py-4'
      )}
    >
      <div className="container-custom flex justify-between items-center relative">
        {/* Logo Icon & Brand Text */}
        <Link href="/" className="flex items-center gap-2 md:gap-3 group shrink-0">
          <div className="relative h-11 w-11 md:h-14 md:w-14 overflow-hidden rounded-full bg-white shadow-md p-1 border border-slate-100 group-hover:border-accent group-hover:-rotate-6 group-hover:scale-105 transition-all duration-300 shrink-0">
            <Image
              src={settings?.logoUrl || '/amanah_emblem.png'}
              alt={settings?.brandName || 'Amanah Study Abroad Logo'}
              fill
              sizes="(max-width: 768px) 44px, 56px"
              className="object-contain"
              priority
            />
          </div>

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
        <div className="hidden lg:flex items-center gap-0.5 xl:gap-1 rounded-full p-1 border bg-slate-100/80 border-slate-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                'px-3 xl:px-4 py-2 rounded-full font-bold text-xs xl:text-sm transition-all duration-200 relative group overflow-hidden whitespace-nowrap',
                pathname === link.href
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-slate-700 hover:text-primary hover:bg-white'
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
            className="p-2.5 rounded-xl transition-all border shadow-sm active:scale-90 lg:hidden text-primary border-slate-200 bg-slate-50 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 h-[100dvh] max-h-screen bg-[#031F3F] text-white z-[200] flex flex-col lg:hidden overflow-hidden transition-all duration-300">
          {/* Header */}
          <div className="flex justify-between items-center px-5 py-3 border-b border-white/10 shrink-0 bg-[#011227]/60">
            <div className="flex items-center gap-2.5">
              <div className="relative h-9 w-9 overflow-hidden rounded-full bg-white p-0.5 shadow-sm shrink-0">
                <Image
                  src={settings?.logoUrl || '/amanah_emblem.png'}
                  alt={settings?.brandName || 'Amanah Logo'}
                  fill
                  sizes="36px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-base font-black leading-none tracking-tight text-white">AMANAH</span>
                <span className="text-[9px] font-black tracking-[0.2em] uppercase text-accent-light mt-0.5">STUDY ABROAD</span>
              </div>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all active:scale-90 shadow-sm cursor-pointer"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          {/* Nav Links - Proportionately spaced to fit all items without any scroll */}
          <div className="flex-1 flex flex-col justify-evenly px-5 py-2 overflow-hidden">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'text-sm sm:text-base font-extrabold transition-all flex items-center justify-between py-1.5 px-3 rounded-xl border',
                  pathname === link.href
                    ? 'bg-white/15 text-white border-white/20 shadow-xs'
                    : 'text-white/90 hover:text-white hover:bg-white/10 border-transparent'
                )}
              >
                <span className="uppercase tracking-wider font-bold">
                  {link.name}
                </span>
                <ChevronRight
                  className={cn(
                    'transition-all duration-200',
                    pathname === link.href ? 'opacity-100 text-accent-light' : 'opacity-40'
                  )}
                  size={18}
                />
              </Link>
            ))}
          </div>

          {/* Footer & CTA */}
          <div className="px-5 py-3 space-y-2 bg-[#011227] border-t border-white/10 shrink-0">
            <Link
              href="/contact"
              className="w-full bg-accent text-white py-2.5 rounded-full font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:bg-accent-light active:scale-95 transition-all"
            >
              Get Free Consultation <ChevronRight size={16} />
            </Link>
            <div className="flex justify-between items-center text-slate-400 text-[10px] font-bold tracking-widest uppercase pt-0.5">
              <span>Office 15, Liberty, Lahore</span>
              <span>© {new Date().getFullYear()} Amanah</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
