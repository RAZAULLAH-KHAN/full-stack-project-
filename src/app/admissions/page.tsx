import Link from "next/link";
import ApplicationForm from "@/components/ApplicationForm";

export default function Page() {
  return (
    <>
<main className="pt-16 md:pt-20">
{/* Hero Section */}
<section className="relative min-h-[500px] md:h-[819px] flex items-center overflow-hidden bg-primary">
<div className="absolute inset-0 opacity-40">
<img alt="University Campus" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbRR64x9X7RkMT_9ErP42CCS4OuYbhwIiNfjbbss7iH9XkYN94Gz9_c0zwZCNoB3bJapmuP2egfmrvebAvgwnSlNAuPg9Fm5ecd2OzxDlaVJ-Z3cyEvzD86-D3TGnQ_P1fpuf2LjwaXSAoDSOfrS6m5W45Jq5WDbRxp4wHd-vTU0kWHnfKmnRHGgqfqOZTauGEhGO2Ht188VDY-YlG-TW7r-j6Qx-Nudn04VLFlM2wF23VOw8k43XesiuSCzk_mvFpt0rEYgDf"/>
</div>
<div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
<div className="relative max-w-screen-2xl mx-auto px-4 md:px-8 w-full py-16 md:py-0">
<div className="max-w-2xl">
<span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-headline font-bold text-[10px] md:text-xs tracking-widest uppercase mb-4 md:mb-6">
                        Admissions Open 2024
                    </span>
<h1 className="text-white font-headline font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tighter mb-6 md:mb-8">
                        Join the Namal <br/><span className="text-secondary-container">Community</span>
</h1>
<p className="text-primary-fixed text-base md:text-lg leading-relaxed mb-8 md:mb-10 opacity-90 max-w-lg">
                        Step into a world-class center of excellence. We curate a learning environment that empowers the next generation of leaders and innovators.
                    </p>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 md:gap-6">
<Link href="/admissions/apply" className="hero-gradient text-on-primary px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-headline font-bold text-sm md:text-base shadow-xl hover:scale-105 transition-transform flex items-center justify-center">
                            Start Application
                        </Link>
<Link href="/admissions/prospectus" className="text-white font-headline font-bold flex items-center justify-center gap-2 hover:translate-x-2 transition-transform text-sm md:text-base">
                            View Prospectus <span className="material-symbols-outlined">arrow_forward</span>
</Link>
</div>
</div>
</div>
</section>
{/* Application Process */}
<section className="py-16 md:py-24 bg-surface">
<div className="max-w-screen-2xl mx-auto px-4 md:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
<div className="lg:col-span-4">
<h2 className="font-headline font-extrabold text-3xl md:text-4xl text-primary tracking-tight mb-4 md:mb-6">Your Journey Begins Here</h2>
<p className="text-on-surface-variant text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                            Our streamlined application process is designed to identify passion, potential, and intellectual curiosity.
                        </p>
<div className="p-6 md:p-8 rounded-xl bg-surface-container-low border border-outline-variant/10">
<span className="material-symbols-outlined text-secondary text-3xl md:text-4xl mb-4">help_outline</span>
<h4 className="font-headline font-bold text-lg md:text-xl text-primary mb-2">Need Guidance?</h4>
<p className="text-on-surface-variant text-sm mb-4 md:mb-6">Our admissions counselors are available Monday-Friday.</p>
<button className="text-primary font-bold border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors text-sm">Book a Consultation</button>
</div>
</div>
<div className="lg:col-span-8">
<div className="relative pl-8 md:pl-12">
{/* Timeline Line */}
<div className="absolute left-4 md:left-6 top-0 bottom-0 w-[2px] bg-surface-tint opacity-20"></div>
{/* Step 1 */}
<div className="relative mb-10 md:mb-16">
<div className="absolute -left-[22px] md:-left-[30px] w-[14px] h-[14px] rounded-full bg-secondary ring-4 ring-secondary/20"></div>
<div className="bg-surface-container-lowest p-6 md:p-8 rounded-xl shadow-sm">
<span className="font-headline font-black text-secondary/30 text-3xl md:text-5xl absolute right-4 md:right-8 top-4 md:top-6 select-none">01</span>
<h3 className="font-headline font-bold text-xl md:text-2xl text-primary mb-2 md:mb-3">Choose Program</h3>
<p className="text-on-surface-variant leading-relaxed text-sm md:text-base max-w-xl">
                                        Explore our diverse range of undergraduate and graduate programs.
                                    </p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="px-3 py-1 bg-surface-container rounded-full text-xs font-medium text-primary">BSc Engineering</span>
<span className="px-3 py-1 bg-surface-container rounded-full text-xs font-medium text-primary">Computer Science</span>
</div>
</div>
</div>
{/* Step 2 */}
<div className="relative mb-10 md:mb-16">
<div className="absolute -left-[22px] md:-left-[30px] w-[14px] h-[14px] rounded-full bg-secondary ring-4 ring-secondary/20"></div>
<div className="bg-surface-container-lowest p-6 md:p-8 rounded-xl shadow-sm">
<span className="font-headline font-black text-secondary/30 text-3xl md:text-5xl absolute right-4 md:right-8 top-4 md:top-6 select-none">02</span>
<h3 className="font-headline font-bold text-xl md:text-2xl text-primary mb-2 md:mb-3">Submit Documents</h3>
<p className="text-on-surface-variant leading-relaxed text-sm md:text-base max-w-xl">
                                        Upload your academic transcripts, national identity documents, and personal statement.
                                    </p>
</div>
</div>
{/* Step 3 */}
<div className="relative mb-10 md:mb-16">
<div className="absolute -left-[22px] md:-left-[30px] w-[14px] h-[14px] rounded-full bg-secondary ring-4 ring-secondary/20"></div>
<div className="bg-surface-container-lowest p-6 md:p-8 rounded-xl shadow-sm border-2 border-secondary/20">
<span className="font-headline font-black text-secondary/30 text-3xl md:text-5xl absolute right-4 md:right-8 top-4 md:top-6 select-none">03</span>
<h3 className="font-headline font-bold text-xl md:text-2xl text-primary mb-2 md:mb-3">Aptitude Test</h3>
<p className="text-on-surface-variant leading-relaxed text-sm md:text-base max-w-xl">
                                        Shortlisted candidates will sit for our comprehensive aptitude test.
                                    </p>
<div className="mt-4 md:mt-6">
<button className="bg-secondary-container text-on-secondary-container px-4 py-2 rounded-lg text-sm font-bold">Sample Papers</button>
</div>
</div>
</div>
{/* Step 4 */}
<div className="relative">
<div className="absolute -left-[22px] md:-left-[30px] w-[14px] h-[14px] rounded-full bg-secondary ring-4 ring-secondary/20"></div>
<div className="bg-surface-container-lowest p-6 md:p-8 rounded-xl shadow-sm">
<span className="font-headline font-black text-secondary/30 text-3xl md:text-5xl absolute right-4 md:right-8 top-4 md:top-6 select-none">04</span>
<h3 className="font-headline font-bold text-xl md:text-2xl text-primary mb-2 md:mb-3">Interview</h3>
<p className="text-on-surface-variant leading-relaxed text-sm md:text-base max-w-xl">
                                        The final stage involves a personal interaction with our faculty panel.
                                    </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Important Dates */}
<section className="py-16 md:py-24 bg-surface-container-low">
<div className="max-w-screen-2xl mx-auto px-4 md:px-8">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-4 md:gap-8">
<div>
<h2 className="font-headline font-extrabold text-3xl md:text-4xl text-primary tracking-tight mb-2 md:mb-4">Admissions Calendar</h2>
<p className="text-on-surface-variant text-sm md:text-lg">Key dates for the Fall 2024 cycle.</p>
</div>
<button className="text-primary font-bold flex items-center gap-2 bg-surface px-4 md:px-6 py-2.5 md:py-3 rounded-xl shadow-sm text-sm">
<span className="material-symbols-outlined">event</span> Add to Calendar
                    </button>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
<div className="bg-surface-container-lowest p-1 rounded-xl shadow-sm">
<div className="bg-primary/5 p-4 md:p-8 rounded-lg flex flex-col items-center text-center h-full">
<span className="text-secondary font-headline font-black text-3xl md:text-4xl mb-1 md:mb-2">15</span>
<span className="text-primary font-bold uppercase tracking-widest text-[10px] md:text-xs mb-3 md:mb-6">May 2024</span>
<h4 className="font-headline font-bold text-primary mb-2 md:mb-4 text-sm md:text-base">Portal Opens</h4>
<p className="text-on-surface-variant text-[10px] md:text-sm mt-auto italic">Applications go live.</p>
</div>
</div>
<div className="bg-surface-container-lowest p-1 rounded-xl shadow-sm border-2 border-secondary/10">
<div className="bg-primary/5 p-4 md:p-8 rounded-lg flex flex-col items-center text-center h-full">
<span className="text-secondary font-headline font-black text-3xl md:text-4xl mb-1 md:mb-2">30</span>
<span className="text-primary font-bold uppercase tracking-widest text-[10px] md:text-xs mb-3 md:mb-6">June 2024</span>
<h4 className="font-headline font-bold text-primary mb-2 md:mb-4 text-sm md:text-base">Deadline</h4>
<p className="text-on-surface-variant text-[10px] md:text-sm mt-auto italic">Final call for documents.</p>
</div>
</div>
<div className="bg-surface-container-lowest p-1 rounded-xl shadow-sm">
<div className="bg-primary/5 p-4 md:p-8 rounded-lg flex flex-col items-center text-center h-full">
<span className="text-secondary font-headline font-black text-3xl md:text-4xl mb-1 md:mb-2">12</span>
<span className="text-primary font-bold uppercase tracking-widest text-[10px] md:text-xs mb-3 md:mb-6">July 2024</span>
<h4 className="font-headline font-bold text-primary mb-2 md:mb-4 text-sm md:text-base">Aptitude Test</h4>
<p className="text-on-surface-variant text-[10px] md:text-sm mt-auto italic">Multiple centers across Pakistan.</p>
</div>
</div>
<div className="bg-surface-container-lowest p-1 rounded-xl shadow-sm">
<div className="bg-primary/5 p-4 md:p-8 rounded-lg flex flex-col items-center text-center h-full">
<span className="text-secondary font-headline font-black text-3xl md:text-4xl mb-1 md:mb-2">05</span>
<span className="text-primary font-bold uppercase tracking-widest text-[10px] md:text-xs mb-3 md:mb-6">Aug 2024</span>
<h4 className="font-headline font-bold text-primary mb-2 md:mb-4 text-sm md:text-base">Orientation</h4>
<p className="text-on-surface-variant text-[10px] md:text-sm mt-auto italic">Welcome week for Batch 2028.</p>
</div>
</div>
</div>
</div>
</section>
{/* Application Form Section */}
<section className="py-16 md:py-24 bg-surface" id="apply-form">
<div className="max-w-screen-2xl mx-auto px-4 md:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
<div>
<span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-headline font-bold text-[10px] md:text-xs tracking-widest uppercase mb-4 md:mb-6">
Online Application
</span>
<h2 className="font-headline font-extrabold text-3xl md:text-4xl text-primary tracking-tight mb-4 md:mb-6">
Start Your Application
</h2>
<p className="text-on-surface-variant text-base md:text-lg leading-relaxed mb-6 md:mb-8">
Take the first step towards your future at Namal University.
</p>
<div className="space-y-4 md:space-y-6">
<div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 rounded-xl bg-surface-container-low">
<span className="material-symbols-outlined text-secondary text-2xl md:text-3xl mt-1">verified</span>
<div>
<h4 className="font-headline font-bold text-primary mb-1 text-sm md:text-base">Quick Review</h4>
<p className="text-on-surface-variant text-xs md:text-sm">Applications are reviewed within 5-7 business days.</p>
</div>
</div>
<div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 rounded-xl bg-surface-container-low">
<span className="material-symbols-outlined text-secondary text-2xl md:text-3xl mt-1">support_agent</span>
<div>
<h4 className="font-headline font-bold text-primary mb-1 text-sm md:text-base">Dedicated Support</h4>
<p className="text-on-surface-variant text-xs md:text-sm">Our admissions counselors are here to help.</p>
</div>
</div>
<div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 rounded-xl bg-surface-container-low">
<span className="material-symbols-outlined text-secondary text-2xl md:text-3xl mt-1">school</span>
<div>
<h4 className="font-headline font-bold text-primary mb-1 text-sm md:text-base">Merit-Based Scholarships</h4>
<p className="text-on-surface-variant text-xs md:text-sm">Top applicants are automatically considered.</p>
</div>
</div>
</div>
</div>
<ApplicationForm />
</div>
</div>
</section>
{/* Final CTA */}
<section className="py-16 md:py-24 bg-surface">
<div className="max-w-screen-2xl mx-auto px-4 md:px-8">
<div className="relative rounded-2xl md:rounded-3xl overflow-hidden hero-gradient p-8 sm:p-12 md:p-16 lg:p-24 text-center">
<div className="absolute inset-0 opacity-10 mix-blend-overlay">
<img alt="Student Success" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBepA3fJMyxubcT7wsPQAq-9y_0qlgw0OsODuQ7D-zZi5K-iSXnVwVHtWhJE3louNjfoGYorm2rbDR2r3kNFqxLBgjkVzcjYJbZqzsULyTR6XvANSjnp6VrtwliyyQEqvI5FuN3qpVc8ge271hCOz0oHoaie62aioISFbx5pkZOcnp0qMLVNlytDrMAQbHTOiwF3e5tQJxwJTS4cdPrfc3wNQ2AzfIlbkzizSe1U0_8wt_fru9D_qxn2kTLQdbRG7NHSbZBq_AO"/>
</div>
<div className="relative z-10 max-w-3xl mx-auto">
<h2 className="font-headline font-extrabold text-3xl md:text-4xl lg:text-5xl text-white tracking-tight mb-6 md:mb-8">Ready to shape your future?</h2>
<p className="text-primary-fixed text-base md:text-xl mb-8 md:mb-12 opacity-90 leading-relaxed">
                            Don&apos;t miss the opportunity to be part of a community that values knowledge, character, and social impact.
                        </p>
<div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
<Link href="/admissions/apply" className="bg-secondary-container text-on-secondary-container px-8 md:px-12 py-4 md:py-5 rounded-xl font-headline font-extrabold text-base md:text-lg shadow-2xl hover:bg-secondary-container/90 transition-all flex items-center justify-center">
                                Apply Now
                            </Link>
<Link href="/admissions/financial-aid" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 md:px-12 py-4 md:py-5 rounded-xl font-headline font-extrabold text-base md:text-lg hover:bg-white/20 transition-all flex items-center justify-center">
                                Financial Aid Info
                            </Link>
</div>
<p className="text-primary-fixed text-xs md:text-sm mt-8 md:mt-12 opacity-60">
                            Admission application fee: PKR 2,000 (Non-refundable)
                        </p>
</div>
</div>
</div>
</section>
</main>
    </>
  );
}
