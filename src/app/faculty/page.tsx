"use client";

import { useState } from "react";

export default function Page() {
  const [filter, setFilter] = useState("all");

  return (
    <>

{/* TopNavBar */}
<nav className="fixed top-0 w-full z-50 bg-[#fbf9f9]/80 backdrop-blur-md">
<div className="flex justify-between items-center px-12 py-4 max-w-[1920px] mx-auto">
<div className="text-2xl font-black tracking-tighter text-[#003215]">
                Namal University
            </div>
<div className="hidden md:flex items-center space-x-8">
<a className="font-manrope tracking-tight font-bold uppercase text-sm text-[#003215] hover:text-[#815600] transition-colors duration-300" href="#">Academics</a>
<a className="font-manrope tracking-tight font-bold uppercase text-sm text-[#003215] hover:text-[#815600] transition-colors duration-300" href="#">Admissions</a>
<a className="font-manrope tracking-tight font-bold uppercase text-sm text-[#003215] hover:text-[#815600] transition-colors duration-300" href="#">Student Life</a>
<a className="font-manrope tracking-tight font-bold uppercase text-sm text-[#003215] hover:text-[#815600] transition-colors duration-300" href="#">Research</a>
<a className="font-manrope tracking-tight font-bold uppercase text-sm text-[#815600] border-b-2 border-[#815600]" href="#">Faculty</a>
</div>
<div className="flex items-center space-x-6">
<button className="transition-transform duration-200 active:scale-95">
<span className="material-symbols-outlined text-[#003215]">search</span>
</button>
<button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2.5 rounded-xl font-manrope font-bold uppercase text-xs tracking-widest transition-all hover:shadow-lg active:scale-95">
                    Apply Now
                </button>
</div>
</div>
</nav>
<main className="pt-32 pb-24 px-12 max-w-[1920px] mx-auto">
{/* Hero Section: Editorial Header */}
<header className="editorial-grid mb-24">
<div className="col-span-8 lg:col-span-7">
<span className="text-secondary font-headline font-extrabold uppercase tracking-[0.2em] text-xs mb-4 block">Distinguished Minds</span>
<h1 className="text-primary font-headline text-7xl font-extrabold tracking-tighter leading-none mb-8">
                    Our <span className="italic font-light">Faculty</span> &amp; Mentors.
                </h1>
<p className="text-on-surface-variant text-xl max-w-2xl leading-relaxed">
                    A community of scholars, researchers, and practitioners dedicated to shaping the next generation of leaders through intellectual rigor and ethical grounding.
                </p>
</div>
<div className="col-span-4 lg:col-span-5 relative">
<div className="absolute -top-12 -right-12 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl"></div>
<div className="relative bg-surface-container-low p-8 rounded-xl aspect-[4/3] flex items-end">
<div className="absolute inset-0 overflow-hidden rounded-xl">
<img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-40" data-alt="Modern university campus library interior with floor to ceiling windows and students studying in soft natural light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSA1koi6VmJX593BqaCWw_AHrQLFSTXSzWPSIn5NGwvAuQidpi5T0twX6TbpovlgqfP1cRnkTCH7ZeY1a-QGNRgDPxtTN3NLOST8RhsYkBv66mABhtwqHQJyhZEisvyEvnNrtdlu2yfh735rGPQn8brM-vg8VO_CMWAt0LrgYzOspDU6Q299pB9vCkB2jOw9nHeixjxdE1kZED6NJ3kv5Xb4GhglnGjWdPhtl2oYC7lCOhCj16_a8vlqGtaqN0xilD9dT6fg7e"/>
</div>
<div className="relative z-10">
<h3 className="font-headline font-bold text-primary text-3xl">400+</h3>
<p className="text-sm font-label uppercase tracking-widest text-on-surface-variant">Global Researchers</p>
</div>
</div>
</div>
</header>
{/* Search & Filter Bar */}
<section className="mb-16 bg-surface-container-low rounded-xl p-4 flex flex-wrap items-center justify-between gap-6">
<div className="flex-1 min-w-[300px] relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="w-full pl-12 pr-4 py-3 bg-surface-container-lowest border-none rounded-lg focus:ring-2 focus:ring-secondary-container transition-all placeholder:text-outline-variant font-label text-sm" placeholder="Search by name, research interest, or department..." type="text"/>
</div>
<div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
<button className={`px-6 py-2.5 rounded-full text-xs font-bold font-label uppercase tracking-wider transition-all ${filter === 'all' ? 'bg-primary text-on-primary' : 'bg-surface-container-highest text-on-surface-variant hover:bg-surface-dim'}`} onClick={() => setFilter('all')}>All</button>
<button className={`px-6 py-2.5 rounded-full text-xs font-bold font-label uppercase tracking-wider transition-all ${filter === 'engineering' ? 'bg-primary text-on-primary' : 'bg-surface-container-highest text-on-surface-variant hover:bg-surface-dim'}`} onClick={() => setFilter('engineering')}>Engineering</button>
<button className={`px-6 py-2.5 rounded-full text-xs font-bold font-label uppercase tracking-wider transition-all ${filter === 'computer-science' ? 'bg-primary text-on-primary' : 'bg-surface-container-highest text-on-surface-variant hover:bg-surface-dim'}`} onClick={() => setFilter('computer-science')}>Computer Science</button>
<button className={`px-6 py-2.5 rounded-full text-xs font-bold font-label uppercase tracking-wider transition-all ${filter === 'business' ? 'bg-primary text-on-primary' : 'bg-surface-container-highest text-on-surface-variant hover:bg-surface-dim'}`} onClick={() => setFilter('business')}>Business</button>
<button className={`px-6 py-2.5 rounded-full text-xs font-bold font-label uppercase tracking-wider transition-all ${filter === 'social-sciences' ? 'bg-primary text-on-primary' : 'bg-surface-container-highest text-on-surface-variant hover:bg-surface-dim'}`} onClick={() => setFilter('social-sciences')}>Social Sciences</button>
</div>
</section>
{/* Faculty Directory Bento Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
{/* Faculty Member Card 1 */}
<div className={`group bg-surface-container-lowest rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col ${filter === 'all' || filter === 'engineering' ? '' : 'hidden'}`} data-department="engineering">
<div className="aspect-[3/4] overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Professional portrait of a male professor in a dark suit standing in a modern academic office setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjDc-R5O35XblJmkWFUJieMgMSTAzEoK6AnTafYW9vn9cCrm50CgvH8Aq8TYmAeb4Fa03zyyxyafYNyPivEz5MKuVool_FOMdhEC04EisbDNowVKIwMph0bzV6M2_AOlvhKBjJWX6KLmDgP8Clp5BtHYAofSQE0IJxtx2eg3XeXkpODYEH2tbywUykvo717In6fCLpJ8cyjeXXDCevjfGg74k7Nm5EH_fzqI6m2p_42NoxTCopCH65cCj5niVQdjJARDEfQ3X8"/>
<div className="absolute top-4 left-4">
<span className="bg-secondary text-on-secondary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Engineering</span>
</div>
</div>
<div className="p-8 flex flex-col flex-grow">
<h3 className="font-headline text-2xl font-bold text-primary group-hover:text-secondary transition-colors">Dr. Ahmed Salman</h3>
<p className="text-on-surface-variant font-label text-sm font-medium mb-4">Professor &amp; Dean of Engineering</p>
<div className="mt-auto">
<p className="text-xs font-bold uppercase tracking-widest text-outline mb-2">Research Interests</p>
<div className="flex flex-wrap gap-2">
<span className="text-xs px-2 py-1 bg-surface-container rounded-lg text-on-surface">Renewable Energy</span>
<span className="text-xs px-2 py-1 bg-surface-container rounded-lg text-on-surface">Smart Grids</span>
</div>
</div>
</div>
</div>
{/* Faculty Member Card 2 */}
<div className={`group bg-surface-container-lowest rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col ${filter === 'all' || filter === 'computer-science' ? '' : 'hidden'}`} data-department="computer-science">
<div className="aspect-[3/4] overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Professional portrait of a female academic with glasses, smiling warmly, studio lighting with a neutral background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFWVxNotznZkdDXnNzr85MiWw8BOPPd7uwJWovRv46mVNH64ZaRfkon4UYgo0I82hMPXNQICypvoa74acALIabE3IsLx7YFvuB0RlMzdeGC2tA6HicY0cO-XxlGjYT9y2DZbgB8Ud3vVvGZp8tg5718siHIhr3m78tXO-_vY2FOl8jaLVMu1g5tOHXrgPVFrvtOYf-4QQJPEFpvCAGEC0HovhFqLQMQIFrMVKvs1UdKrZvV9chE7aG5Pph73Uqk4NzUY2OHXpR"/>
<div className="absolute top-4 left-4">
<span className="bg-secondary text-on-secondary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Computer Science</span>
</div>
</div>
<div className="p-8 flex flex-col flex-grow">
<h3 className="font-headline text-2xl font-bold text-primary group-hover:text-secondary transition-colors">Dr. Sarah Khalid</h3>
<p className="text-on-surface-variant font-label text-sm font-medium mb-4">Associate Professor</p>
<div className="mt-auto">
<p className="text-xs font-bold uppercase tracking-widest text-outline mb-2">Research Interests</p>
<div className="flex flex-wrap gap-2">
<span className="text-xs px-2 py-1 bg-surface-container rounded-lg text-on-surface">Deep Learning</span>
<span className="text-xs px-2 py-1 bg-surface-container rounded-lg text-on-surface">Bioinformatics</span>
</div>
</div>
</div>
</div>
{/* Faculty Member Card 3 (Bento Variant - Double Height) */}
<div className={`group bg-surface-container-lowest rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col md:row-span-2 ${filter === 'all' || filter === 'social-sciences' ? '' : 'hidden'}`} data-department="social-sciences">
<div className="h-[60%] overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Academic researcher working in a bright laboratory environment, adjusting a microscope with professional focus" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC84PSquQ5wIkoZ2Iumj4oRdLJjR7leBTuyDZqQqJhaQssbW4vIXaZJAff2IBLpQGl2Lf33M9Xd2ba04y5tJXj_vTIafMfgVrursmeAwOj4eCbVTcVPyiDfoAyRJLjAcjfZoGhR_P10IJh7sX963uNJzLZHoZVU3IBAxrl9XIsKRUxBMKCjO-u4x65eiYjRFylaohCSGhNcNZFesNQyAW2YPDQD_gI10nOYalA7R_QADKbAnrEP0fEyzRu3J9TiYR7ymUyTK_3S"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-8">
<span className="bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-4">Lead Researcher</span>
<h3 className="font-headline text-3xl font-bold text-on-primary">Dr. Omar Farooq</h3>
<p className="text-primary-fixed font-label text-sm">Head of Social Sciences</p>
</div>
</div>
<div className="p-8 flex flex-col flex-grow">
<p className="text-on-surface-variant leading-relaxed text-sm mb-6 italic">
                        "Empowering communities through data-driven policy making and sustainable socio-economic frameworks."
                    </p>
<div className="mt-auto">
<p className="text-xs font-bold uppercase tracking-widest text-outline mb-3">Core Research</p>
<ul className="space-y-3">
<li className="flex items-center text-xs text-on-surface">
<span className="w-1.5 h-1.5 rounded-full bg-secondary mr-3"></span>
                                Rural Economic Development
                            </li>
<li className="flex items-center text-xs text-on-surface">
<span className="w-1.5 h-1.5 rounded-full bg-secondary mr-3"></span>
                                Behavioral Economics
                            </li>
<li className="flex items-center text-xs text-on-surface">
<span className="w-1.5 h-1.5 rounded-full bg-secondary mr-3"></span>
                                Policy Analysis
                            </li>
</ul>
<button className="mt-8 text-primary font-bold text-xs uppercase tracking-widest flex items-center group/btn hover:text-secondary transition-colors">
                            View Publications
                            <span className="material-symbols-outlined ml-2 text-sm transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
</button>
</div>
</div>
</div>
{/* Faculty Member Card 4 */}
<div className={`group bg-surface-container-lowest rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col ${filter === 'all' || filter === 'business' ? '' : 'hidden'}`} data-department="business">
<div className="aspect-[3/4] overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Professional woman in a blazer in a modern corporate office, confident expression, soft lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA33DqRs8OBlDM2_y5g4yoQ7hdn0m44YtNMeTy9LIG0_84IDtlfCRRwf_yA8LfGDQxe4vPOhOwJDEVfuX4zCQVM5TL6YZt8A4jOLSR-5AUEXPsR9Nz5LoBykvB-nXhtjVY16Xty_DYVVWG52qkWQPuKdmGNLS4f8bQ2sNdGe8xTRz8be0Hpdr2446vBcsl9vXbYP3dqYInBLbEn4aSE-8fU2KXlGV9ZoVmsGFaulp-9wu0tuJV_7eg9UUnlUKv4Wl-shL6hh8I"/>
<div className="absolute top-4 left-4">
<span className="bg-secondary text-on-secondary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Business</span>
</div>
</div>
<div className="p-8 flex flex-col flex-grow">
<h3 className="font-headline text-2xl font-bold text-primary group-hover:text-secondary transition-colors">Prof. Maria Butt</h3>
<p className="text-on-surface-variant font-label text-sm font-medium mb-4">Director of Business School</p>
<div className="mt-auto">
<p className="text-xs font-bold uppercase tracking-widest text-outline mb-2">Research Interests</p>
<div className="flex flex-wrap gap-2">
<span className="text-xs px-2 py-1 bg-surface-container rounded-lg text-on-surface">Agile Management</span>
<span className="text-xs px-2 py-1 bg-surface-container rounded-lg text-on-surface">Ethics</span>
</div>
</div>
</div>
</div>
{/* Faculty Member Card 5 */}
<div className={`group bg-surface-container-lowest rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col ${filter === 'all' || filter === 'engineering' ? '' : 'hidden'}`} data-department="engineering">
<div className="aspect-[3/4] overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Middle-aged professor with salt and pepper hair in a library, intellectual atmosphere, professional attire" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBF8IHMllwy4S4Q95aR48oQjc7vbhRzJpvNAMkXJ-GPB1-02HTwSFJDdVY3FjJUhCG0fwCKc1xnoUnVaknYwO6HdlZTFUlFwjJaT7GPOKY5O3e4p8enBj6EeiVQ0FhaKLFmSARwdRQWNfeCvLU0HHO_-zNhSjSgWGHltsYfxBlxn86z98osB-wsbBvXZXxlb2ATpmQ5HIw96eMDDRXDCIbgKB6zvneqVT1ne2dndT6ZeF09_uh8J0Reo1W2E4FADQPzX5hIAlvE"/>
<div className="absolute top-4 left-4">
<span className="bg-secondary text-on-secondary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Engineering</span>
</div>
</div>
<div className="p-8 flex flex-col flex-grow">
<h3 className="font-headline text-2xl font-bold text-primary group-hover:text-secondary transition-colors">Dr. Zain Malik</h3>
<p className="text-on-surface-variant font-label text-sm font-medium mb-4">Assistant Professor</p>
<div className="mt-auto">
<p className="text-xs font-bold uppercase tracking-widest text-outline mb-2">Research Interests</p>
<div className="flex flex-wrap gap-2">
<span className="text-xs px-2 py-1 bg-surface-container rounded-lg text-on-surface">Control Systems</span>
<span className="text-xs px-2 py-1 bg-surface-container rounded-lg text-on-surface">Robotics</span>
</div>
</div>
</div>
</div>
{/* Faculty Member Card 6 */}
<div className={`group bg-surface-container-lowest rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col ${filter === 'all' || filter === 'computer-science' ? '' : 'hidden'}`} data-department="computer-science">
<div className="aspect-[3/4] overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Young professional academic in a bright modern workspace, daylight reflecting on desk, focused expression" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1ID6fpnh1FlbsVpmO31OtgSVfwwf-HwO94_CJPx8FfLjtfzBYKXhGhZCR3vUdfFgQzMkTPNVr-Xsnp3eDbDfth6Qly5bNH7uLTx1KaZCAgsTuY5tHIl7178axAujoqSUz38n1b-Lny6hhuJ3sRhEna0CZVXG9EaTmUXPwrBt4A9wOwjsIqPBttU5xmX9icuc2rMTLNAREfg9gM3dfJaoP3e4eLtSQCCm9meBWHzA5wAO22tplXsK_-gQNUtUBNW33W8CpD02N"/>
<div className="absolute top-4 left-4">
<span className="bg-secondary text-on-secondary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Computer Science</span>
</div>
</div>
<div className="p-8 flex flex-col flex-grow">
<h3 className="font-headline text-2xl font-bold text-primary group-hover:text-secondary transition-colors">Dr. Amna Pervez</h3>
<p className="text-on-surface-variant font-label text-sm font-medium mb-4">Assistant Professor</p>
<div className="mt-auto">
<p className="text-xs font-bold uppercase tracking-widest text-outline mb-2">Research Interests</p>
<div className="flex flex-wrap gap-2">
<span className="text-xs px-2 py-1 bg-surface-container rounded-lg text-on-surface">Cybersecurity</span>
<span className="text-xs px-2 py-1 bg-surface-container rounded-lg text-on-surface">Cloud Tech</span>
</div>
</div>
</div>
</div>
</div>
{/* Join the Faculty CTA (Bento Bottom) */}
<section className="mt-24 editorial-grid">
<div className="col-span-12 lg:col-span-12 bg-primary py-20 px-12 rounded-xl relative overflow-hidden flex flex-col items-center text-center">
<div className="absolute inset-0 opacity-10">
<div className="absolute top-0 right-0 w-[500px] h-[500px] border-[40px] border-secondary-container rounded-full translate-x-1/2 -translate-y-1/2"></div>
</div>
<div className="relative z-10 max-w-3xl">
<h2 className="text-on-primary font-headline text-5xl font-extrabold tracking-tighter mb-6">Shape the Future of <br/>Knowledge with Us.</h2>
<p className="text-primary-fixed-dim text-lg mb-10 leading-relaxed">
                        We are always seeking visionary educators and researchers to join our world-class faculty. Explore open positions and research fellowships.
                    </p>
<div className="flex flex-wrap justify-center gap-4">
<button className="bg-secondary-container text-on-secondary-container px-10 py-4 rounded-xl font-headline font-bold uppercase text-sm tracking-[0.1em] hover:scale-105 transition-transform">
                            View Open Roles
                        </button>
<button className="border border-outline-variant text-on-primary px-10 py-4 rounded-xl font-headline font-bold uppercase text-sm tracking-[0.1em] hover:bg-on-primary/10 transition-colors">
                            Research Fellows
                        </button>
</div>
</div>
</div>
</section>
</main>
{/* Footer */}
<footer className="bg-[#f5f3f3] text-[#003215] border-t border-outline-variant/10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-12 py-16 w-full max-w-[1920px] mx-auto">
<div data-department="engineering">
<div className="text-xl font-bold text-[#003215] mb-6">Namal University</div>
<p className="font-manrope text-sm leading-relaxed opacity-70 max-w-xs">
                    Inspiring the next generation of knowledge seekers and ethical leaders in the heart of Mianwali.
                </p>
</div>
<div className="flex flex-col space-y-4" data-department="computer-science">
<span className="font-manrope font-bold uppercase text-xs tracking-widest text-[#815600]">Quick Links</span>
<a className="font-manrope text-sm opacity-70 hover:opacity-100 hover:text-[#815600] transition-all" href="#">Contact Us</a>
<a className="font-manrope text-sm opacity-70 hover:opacity-100 hover:text-[#815600] transition-all" href="#">Privacy Policy</a>
<a className="font-manrope text-sm opacity-70 hover:opacity-100 hover:text-[#815600] transition-all" href="#">Careers</a>
<a className="font-manrope text-sm opacity-70 hover:opacity-100 hover:text-[#815600] transition-all" href="#">Alumni</a>
<a className="font-manrope text-sm opacity-70 hover:opacity-100 hover:text-[#815600] transition-all" href="#">Give to Namal</a>
</div>
<div className="flex flex-col items-start md:items-end" data-department="social-sciences">
<div className="flex space-x-4 mb-8">
<span className="material-symbols-outlined text-xl opacity-70 hover:opacity-100 cursor-pointer">social_leaderboard</span>
<span className="material-symbols-outlined text-xl opacity-70 hover:opacity-100 cursor-pointer">public</span>
<span className="material-symbols-outlined text-xl opacity-70 hover:opacity-100 cursor-pointer">group</span>
</div>
<p className="font-manrope text-sm opacity-70 text-right">
                    © 2024 Namal University. All rights reserved.
                </p>
</div>
</div>
</footer>

    </>
  );
}
