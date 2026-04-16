import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#f5f3f3] w-full border-t-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 px-6 md:px-12 py-12 md:py-16 max-w-screen-2xl mx-auto">
        {/* Brand */}
        <div className="space-y-6">
          <Link href="/" className="text-xl md:text-2xl font-black text-emerald-950 tracking-tighter font-headline hover:opacity-80 transition-opacity whitespace-nowrap">
            Namal University
          </Link>
          <p className="text-slate-500 font-body text-sm leading-relaxed max-w-xs">
            Namal Road, Rikhi, Mianwali, 42250, Punjab, Pakistan.<br />
            Leading the frontier of knowledge for all.
          </p>
          <div className="flex gap-4 pt-2">
            <span className="material-symbols-outlined text-emerald-900 cursor-pointer hover:opacity-70 transition-opacity">social_leaderboard</span>
            <span className="material-symbols-outlined text-emerald-900 cursor-pointer hover:opacity-70 transition-opacity">public</span>
            <span className="material-symbols-outlined text-emerald-900 cursor-pointer hover:opacity-70 transition-opacity">video_library</span>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-4">
            <h5 className="font-headline font-bold text-emerald-900 uppercase text-xs tracking-widest">Quick Links</h5>
            <ul className="space-y-3 font-body text-sm">
              <li><Link className="text-slate-500 hover:underline hover:text-emerald-700 transition-colors" href="/academics">Academics</Link></li>
              <li><Link className="text-slate-500 hover:underline hover:text-emerald-700 transition-colors" href="/admissions">Admissions</Link></li>
              <li><Link className="text-slate-500 hover:underline hover:text-emerald-700 transition-colors" href="/research">Research</Link></li>
              <li><Link className="text-slate-500 hover:underline hover:text-emerald-700 transition-colors" href="/faculty">Faculty</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="font-headline font-bold text-emerald-900 uppercase text-xs tracking-widest">Community</h5>
            <ul className="space-y-3 font-body text-sm">
              <li><Link className="text-slate-500 hover:underline hover:text-emerald-700 transition-colors" href="/student-life">Student Life</Link></li>
              <li><Link className="text-slate-500 hover:underline hover:text-emerald-700 transition-colors" href="/portal">Student Portal</Link></li>
              <li><Link className="text-slate-500 hover:underline hover:text-emerald-700 transition-colors" href="/alumni">Alumni</Link></li>
              <li><Link className="text-slate-500 hover:underline hover:text-emerald-700 transition-colors" href="/careers">Careers</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="space-y-6 lg:col-span-1 md:col-span-2 lg:md:col-span-1">
          <h5 className="font-headline font-bold text-emerald-900 uppercase text-xs tracking-widest">Newsletter</h5>
          <p className="text-slate-500 font-body text-sm">Subscribe to get the latest research updates and news.</p>
          <form action="/newsletter-subscribe" className="flex max-w-md">
            <input
              className="bg-surface-container-high border-none rounded-l-xl px-4 py-3 w-full text-sm focus:ring-1 focus:ring-secondary outline-none"
              placeholder="Your email"
              type="email"
            />
            <button type="submit" className="bg-emerald-900 text-white px-4 py-3 rounded-r-xl material-symbols-outlined hover:bg-emerald-800 transition-colors">
              send
            </button>
          </form>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 text-sm text-slate-500 pt-2">
            <div className="flex items-start gap-2">
              <span className="material-symbols-outlined text-emerald-900 text-base mt-0.5">location_on</span>
              <span>30 KM Talagang Road, Mianwali, Pakistan</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="material-symbols-outlined text-emerald-900 text-base mt-0.5">call</span>
              <span>+92 459 236 312</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="material-symbols-outlined text-emerald-900 text-base mt-0.5">mail</span>
              <span>admissions@namal.edu.pk</span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 md:px-12 py-6 max-w-screen-2xl mx-auto border-t border-slate-200 text-center">
        <p className="text-slate-500 font-body text-xs md:text-sm">© 2024 Namal University. Knowledge for All.</p>
      </div>
    </footer>
  );
}
