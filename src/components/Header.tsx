'use client';

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

  return (
    <header className="fixed top-0 w-full z-50 bg-[#fbf9f9]/80 backdrop-blur-xl shadow-sm glass-nav">
      <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
        <Link href="/" className="text-2xl font-black text-emerald-950 tracking-tighter font-headline hover:opacity-80 transition-opacity">
          Namal University
        </Link>
        <nav className="hidden md:flex items-center space-x-8 font-headline font-bold tracking-tight">
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
        <div className="flex items-center gap-6">
          <Link href="/search" className="material-symbols-outlined text-on-surface hover:bg-emerald-50/50 p-2 rounded-full transition-all" aria-label="Search">
            search
          </Link>
          <Link
            href="/admissions"
            className="primary-cta-gradient text-white px-6 py-2.5 rounded-xl font-headline font-bold text-sm active:opacity-80 transition-all hover:opacity-90 shadow-sm"
          >
            Apply Now
          </Link>
        </div>
      </div>
      <div className="bg-slate-200/20 h-[1px]" />
    </header>
  );
}
