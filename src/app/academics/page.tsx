import Link from "next/link";

export default function Page() {
  return (
    <>
<main className="pt-20 md:pt-24">
{/* Hero Section */}
<section className="px-4 md:px-8 py-12 md:py-20 max-w-screen-2xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
<div className="lg:col-span-7 mb-8 lg:mb-0">
<span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">Excellence in Education</span>
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-headline tracking-tighter text-primary leading-[0.95] mb-6 md:mb-8">
                        The Future is <br/> <span className="text-secondary">Cultivated</span> Here.
                    </h1>
<p className="text-base md:text-lg text-on-surface-variant max-w-xl leading-relaxed mb-8 md:mb-10">
                        At Namal University, we bridge the gap between rural potential and global opportunity. Explore our rigorous academic programs designed to shape the leaders of tomorrow.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<Link href="/academics/programs" className="bg-primary text-on-primary px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-bold flex items-center justify-center gap-2 group transition-all text-sm md:text-base">
                            Explore All Programs
                            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
</Link>
<Link href="/academics/prospectus" className="bg-surface-container-high text-on-primary-fixed-variant px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-bold flex items-center justify-center text-sm md:text-base">
                            Download Prospectus
                        </Link>
</div>
</div>
<div className="lg:col-span-5 relative">
<div className="aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl relative z-10">
<img alt="Campus" className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEWoy6pbLgS1dy4uYUkPKeU2SVtVg-flx9BAGAwTuFsTwaBtiklVl3pIrqyegrtGane1lWztcCK1eDS8Hq2gTQpXaLqAMnHGByoLd8LcGKdIV4UW1yE1tuyMTcXxLduyB8JTwmHmNSpEV0zva7vD32bEjoOTujwf5Jm7bxVmM7MZjiIYru8s6w0yWBOorOoVMbMmVa4mmFtEuGsaYyinMsgi_mVpEFAjrd-P9WA7AGRv1MKb-1PBPkEnohzYx2BhmdO6aw0y2S"/>
</div>
<div className="absolute -bottom-4 -left-2 md:-bottom-6 md:-left-6 bg-secondary-container p-6 md:p-8 rounded-2xl z-20 shadow-xl max-w-[200px] md:max-w-[240px]">
<p className="text-on-secondary-container font-headline font-extrabold text-2xl md:text-3xl mb-1">98%</p>
<p className="text-on-secondary-container text-xs md:text-sm font-medium leading-tight">Graduate employment rate within 6 months.</p>
</div>
</div>
</div>
</section>
{/* Featured Program */}
<section className="bg-surface-container-low py-16 md:py-24 px-4 md:px-8">
<div className="max-w-screen-2xl mx-auto">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 md:mb-12 gap-4">
<h2 className="text-3xl md:text-4xl font-black font-headline tracking-tight text-primary">Featured Program</h2>
<Link className="text-secondary font-bold flex items-center gap-1 hover:underline text-sm" href="/academics/bs-cs">
                        View Details <span className="material-symbols-outlined text-sm">open_in_new</span>
</Link>
</div>
<div className="bg-surface-container-lowest rounded-2xl md:rounded-[2rem] overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-2 group border border-outline-variant/10">
<div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center">
<div className="flex flex-wrap gap-2 mb-4 md:mb-6">
<span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold rounded-full uppercase">Top Rated</span>
<span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase">4-Year Degree</span>
</div>
<h3 className="text-3xl md:text-5xl font-black font-headline text-primary mb-4 md:mb-6 group-hover:text-secondary transition-colors">BS Computer Science</h3>
<p className="text-on-surface-variant text-sm md:text-lg leading-relaxed mb-6 md:mb-8">
                            Our flagship program combines theoretical foundations with hands-on labs in AI, Cybersecurity, and Software Engineering.
                        </p>
<div className="grid grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
<div>
<p className="text-secondary font-bold text-lg md:text-xl">130+</p>
<p className="text-[10px] md:text-xs text-on-surface-variant font-medium">Credit Hours</p>
</div>
<div>
<p className="text-secondary font-bold text-lg md:text-xl">15:1</p>
<p className="text-[10px] md:text-xs text-on-surface-variant font-medium">Student Ratio</p>
</div>
<div>
<p className="text-secondary font-bold text-lg md:text-xl">Global</p>
<p className="text-[10px] md:text-xs text-on-surface-variant font-medium">Opportunities</p>
</div>
</div>
<Link href="/academics/bs-cs/syllabus" className="hero-gradient text-on-primary w-full sm:w-fit px-8 md:px-10 py-3.5 md:py-4 rounded-xl font-bold flex items-center justify-center gap-2 text-sm md:text-base">
                            Program Syllabus
                            <span className="material-symbols-outlined">description</span>
</Link>
</div>
<div className="relative min-h-[250px] md:min-h-[400px]">
<img alt="Computer Science" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-Ak2MUUSlPc9sr59A1v6iogAGsh7VTFdLZGfIrtoCevXCgEQbdkG7h6iTdR3zwVrwGjJJTZxR6P20phIerhodpm4V1_MM-n5rpkqmPmbg5sGOR35ZvglLM2M4nCnJ-PrGOTfATb1Cg5bavbXUIuB4ExM6vXmBgJkqeMDKbj6YUzcCKk6zhADBNp0FZyF-yF6Q1qtCd7-HLUY41FbfRaBrDMs0CTe3Egb7idRkmtQm7-Jhapw1Pcz5kJ_DWu1xZfVfjjjQMHTK"/>
</div>
</div>
</div>
</section>
{/* Program Catalog Grid */}
<section className="py-16 md:py-24 px-4 md:px-8 max-w-screen-2xl mx-auto">
<div className="mb-10 md:mb-16 text-center max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-black font-headline text-primary mb-4 tracking-tight">Our Academic Faculties</h2>
<p className="text-on-surface-variant text-sm md:text-base">We offer diverse undergraduate and graduate programs across four primary faculties.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
{/* Engineering */}
<div className="bg-surface-container-low p-6 md:p-8 rounded-2xl md:rounded-3xl hover:bg-surface-container transition-colors group">
<div className="w-12 h-12 md:w-14 md:h-14 bg-primary rounded-xl md:rounded-2xl flex items-center justify-center text-on-primary mb-6 md:mb-8 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-2xl md:text-3xl">precision_manufacturing</span>
</div>
<h4 className="text-xl md:text-2xl font-bold font-headline text-primary mb-4">Engineering</h4>
<ul className="space-y-3 mb-6 md:mb-8">
<li className="text-on-surface-variant text-sm flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0"></span> BS Electrical Engineering
                        </li>
<li className="text-on-surface-variant text-sm flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0"></span> BS Civil Engineering
                        </li>
<li className="text-on-surface-variant text-sm flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0"></span> MS Engineering Mgmt.
                        </li>
</ul>
<Link className="text-primary font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform" href="/faculty">
                        Explore Faculty <span className="material-symbols-outlined text-lg">chevron_right</span>
</Link>
</div>
{/* Computer Science */}
<div className="bg-surface-container-low p-6 md:p-8 rounded-2xl md:rounded-3xl hover:bg-surface-container transition-colors group">
<div className="w-12 h-12 md:w-14 md:h-14 bg-primary rounded-xl md:rounded-2xl flex items-center justify-center text-on-primary mb-6 md:mb-8 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-2xl md:text-3xl">terminal</span>
</div>
<h4 className="text-xl md:text-2xl font-bold font-headline text-primary mb-4">Computer Science</h4>
<ul className="space-y-3 mb-6 md:mb-8">
<li className="text-on-surface-variant text-sm flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0"></span> BS Computer Science
                        </li>
<li className="text-on-surface-variant text-sm flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0"></span> BS Software Engineering
                        </li>
<li className="text-on-surface-variant text-sm flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0"></span> MS Data Science
                        </li>
</ul>
<Link className="text-primary font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform" href="/faculty">
                        Explore Faculty <span className="material-symbols-outlined text-lg">chevron_right</span>
</Link>
</div>
{/* Business */}
<div className="bg-surface-container-low p-6 md:p-8 rounded-2xl md:rounded-3xl hover:bg-surface-container transition-colors group">
<div className="w-12 h-12 md:w-14 md:h-14 bg-primary rounded-xl md:rounded-2xl flex items-center justify-center text-on-primary mb-6 md:mb-8 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-2xl md:text-3xl">payments</span>
</div>
<h4 className="text-xl md:text-2xl font-bold font-headline text-primary mb-4">Business</h4>
<ul className="space-y-3 mb-6 md:mb-8">
<li className="text-on-surface-variant text-sm flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0"></span> BBA (Hons)
                        </li>
<li className="text-on-surface-variant text-sm flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0"></span> Executive MBA
                        </li>
<li className="text-on-surface-variant text-sm flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0"></span> BS Agri-Business
                        </li>
</ul>
<Link className="text-primary font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform" href="/faculty">
                        Explore Faculty <span className="material-symbols-outlined text-lg">chevron_right</span>
</Link>
</div>
{/* Social Sciences */}
<div className="bg-surface-container-low p-6 md:p-8 rounded-2xl md:rounded-3xl hover:bg-surface-container transition-colors group">
<div className="w-12 h-12 md:w-14 md:h-14 bg-primary rounded-xl md:rounded-2xl flex items-center justify-center text-on-primary mb-6 md:mb-8 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-2xl md:text-3xl">groups</span>
</div>
<h4 className="text-xl md:text-2xl font-bold font-headline text-primary mb-4">Social Sciences</h4>
<ul className="space-y-3 mb-6 md:mb-8">
<li className="text-on-surface-variant text-sm flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0"></span> BS Economics
                        </li>
<li className="text-on-surface-variant text-sm flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0"></span> BS Psychology
                        </li>
<li className="text-on-surface-variant text-sm flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0"></span> BS Sociology
                        </li>
</ul>
<Link className="text-primary font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform" href="/faculty">
                        Explore Faculty <span className="material-symbols-outlined text-lg">chevron_right</span>
</Link>
</div>
</div>
</section>
{/* Academic Pillars */}
<section className="py-16 md:py-24 relative overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Library" className="w-full h-full object-cover opacity-10 grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX2i_pK-1vWkaz-D_qpdjWnkNGeIM0dXpWmzPfTJ-iY0HU6TwQI1E4KlCeWTJvedYkkfMrbLctqP73ltof628rwD4mdeB8CDyD45-aics8oE6-PX33Xg8ePLrotCUQYAtHkV0DbGUPPUTDkGdRcNV4XKxARgGD_KPnSU2kCX4y_nAIduheRXc-_HJoMmInTtMj0wgUzLRQrztAR9h0NN0UuDv8ogFOmtImzWst5oJkUfJbrRSJYmq9xUCb2xSYEpmfqOL9h8Ss"/>
</div>
<div className="max-w-screen-2xl mx-auto px-4 md:px-8 relative z-10">
<h2 className="text-3xl md:text-4xl font-black font-headline text-primary mb-10 md:mb-16 border-l-4 md:border-l-8 border-secondary pl-4 md:pl-8">Our Academic Pillars</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
<div className="space-y-4 md:space-y-6">
<h5 className="text-lg md:text-xl font-extrabold font-headline text-primary">Research-Driven Pedagogy</h5>
<p className="text-on-surface-variant leading-relaxed text-sm md:text-base">
                            Learning at Namal is not confined to textbooks. We emphasize inquiry-based learning where students participate in active research from their sophomore year.
                        </p>
</div>
<div className="space-y-4 md:space-y-6">
<h5 className="text-lg md:text-xl font-extrabold font-headline text-primary">Industry Integration</h5>
<p className="text-on-surface-variant leading-relaxed text-sm md:text-base">
                            Our curricula are developed in consultation with industry leaders to ensure that every Namal graduate is day-one ready for professional challenges.
                        </p>
</div>
<div className="space-y-4 md:space-y-6">
<h5 className="text-lg md:text-xl font-extrabold font-headline text-primary">Social Responsibility</h5>
<p className="text-on-surface-variant leading-relaxed text-sm md:text-base">
                            We believe knowledge must serve humanity. Every program includes modules on ethics, sustainability, and community service.
                        </p>
</div>
</div>
</div>
</section>
</main>
    </>
  );
}
