'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Academics', href: '/academics' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Student Life', href: '/student-life' },
  { label: 'Research', href: '/research' },
  { label: 'Faculty', href: '/faculty' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#fbf9f9]/90 backdrop-blur-xl shadow-sm glass-nav">
      <div className="flex justify-between items-center px-4 md:px-8 py-4 max-w-screen-2xl mx-auto">
        <Link 
          href="/" 
          className="text-xl md:text-2xl font-black text-emerald-950 tracking-tighter font-headline hover:opacity-80 transition-opacity whitespace-nowrap"
          onClick={() => setIsMenuOpen(false)}
        >
          Namal University
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 font-headline font-bold tracking-tight">
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`transition-colors duration-200 ${
                  isActive
                    ? 'text-emerald-900 border-b-2 border-amber-500 pb-1'
                    : 'text-slate-600 hover:text-emerald-800'
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 md:gap-6">
          <Link href="/search" className="material-symbols-outlined text-on-surface hover:bg-emerald-50/50 p-2 rounded-full transition-all" aria-label="Search">
            search
          </Link>
          <Link
            href="/admissions"
            className="hidden sm:flex primary-cta-gradient text-white px-6 py-2.5 rounded-xl font-headline font-bold text-sm active:opacity-80 transition-all hover:opacity-90 shadow-sm whitespace-nowrap"
          >
            Apply Now
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-emerald-950 hover:bg-emerald-50 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div 
        className={`lg:hidden fixed inset-x-0 bg-[#fbf9f9] border-t border-slate-200 shadow-xl transition-all duration-310 ease-in-out transform ${
          isMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'
        }`}
        style={{ top: '68px', height: 'calc(100vh - 68px)' }}
      >
        <div className="flex flex-col p-6 space-y-2 overflow-y-auto">
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-2xl font-headline font-bold p-4 rounded-xl transition-all ${
                  isActive
                    ? 'bg-amber-50 text-emerald-900'
                    : 'text-slate-600 hover:bg-emerald-50'
                }`}
              >
                {label}
              </Link>
            );
          })}
          <div className="pt-6 mt-4 border-t border-slate-100 flex flex-col space-y-4">
            <Link
              href="/admissions"
              onClick={() => setIsMenuOpen(false)}
              className="primary-cta-gradient text-white text-center py-4 rounded-xl font-headline font-bold text-lg shadow-lg"
            >
              Apply Now
            </Link>
            <Link
              href="/portal"
              onClick={() => setIsMenuOpen(false)}
              className="bg-surface-container-high text-on-surface text-center py-4 rounded-xl font-headline font-bold"
            >
              Student Portal
            </Link>
          </div>
        </div>
      </div>
      
      <div className="bg-slate-200/20 h-[1px]" />
    </header>
  );
}
