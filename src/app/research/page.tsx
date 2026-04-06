import Link from "next/link";

export default function Page() {
  return (
    <>
<main className="pt-24">
{/* Hero Section */}
<section className="relative h-[819px] flex items-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover grayscale-[0.3] opacity-90" data-alt="Modern high-tech laboratory with researchers in white coats working on advanced equipment, blue and green soft lighting, cinematic atmosphere" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRTEuuKG1SK8XJZH60NDCU2g-iElXyrmFia56wfWcx-UPzBq0UoTbr3knDCJGdaGSgnYAX3xZo9pjrxzJvO64M25A-Z7uMBso0EdvKETk77aD5VrvqCvOiop82pUDt03UEqk0FhVG7kNb81a_Vx5nGLWcLqfT4FK-cXUgKWr7HWt3FOQPGRVPlV4ap_0Gj8GkN9hrb_wyoEEtpsiVcCtyHNSSOntGeBfsq6HtEbMj9YDt46IuBxDzajNK2_gb1NQOgL0HO5yua"/>
<div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-transparent"></div>
</div>
<div className="relative z-10 editorial-asymmetry max-w-4xl text-white">
<span className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">Discovery &amp; Impact</span>
<h1 className="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-8">
                    Research at <span className="text-secondary-container">Namal</span>
</h1>
<p className="text-xl md:text-2xl font-light leading-relaxed text-surface-container opacity-90 max-w-2xl">
                    Pioneering solutions for global challenges through rigorous inquiry and interdisciplinary innovation in the heart of rural excellence.
                </p>
<div className="mt-10 flex gap-6">
<Link href="/research/impact" className="bg-gradient-to-br from-secondary to-secondary-container text-on-secondary px-8 py-4 rounded-xl font-bold tracking-tight hover:shadow-xl transition-all flex justify-center items-center">Explore Our Impact</Link>
<Link href="/research/partners" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold tracking-tight hover:bg-white/20 transition-all flex justify-center items-center">Global Partners</Link>
</div>
</div>
</section>
{/* Innovation Hubs - Bento Grid */}
<section className="py-24 px-12 bg-surface">
<div className="mb-16">
<h2 className="font-headline text-4xl font-extrabold text-primary tracking-tight mb-2">Innovation Hubs</h2>
<div className="h-1 w-24 bg-secondary"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full md:h-[700px]">
{/* Hub 1 */}
<div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-low transition-transform duration-500 hover:-translate-y-1">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Close-up of solar panels in a vast open field under a clear blue sky, highlighting renewable energy research at the university" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHW01PuMQJ8wIgAf0uA2ooXZI3hPd4o7sYqKfZfVWtGcMgA9MqBXVlKbHASHoTXDj8TxNXf7qwT1grnrWR7kIKCeZf4ANWpWa0tF3UjpHt0XpqckIh2Y_SSO5K0-MZwdnB27-11qtDx_ColLP--k6--72SiyDylRWVi2YESQqMKBEuf-6JN2QdGOigX1E_9oR3jElu-WwrHFIvVuxLQRaNhcQ1YA8EWHmIpbAEXSjpffm9uVuqDpEW6Hrkj84GnZU1nt2_nCf4"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 p-10 text-white">
<h3 className="text-3xl font-bold font-headline mb-2">Center for Sustainable Energy</h3>
<p className="text-white/80 max-w-lg mb-6">Developing indigenous solar technologies and grid management systems to power remote communities across Pakistan.</p>
<span className="inline-flex items-center gap-2 text-secondary-container font-bold text-sm uppercase tracking-widest group-hover:gap-4 transition-all">
                            View Laboratory <span className="material-symbols-outlined">arrow_forward</span>
</span>
</div>
</div>
{/* Hub 2 */}
<div className="md:col-span-4 bg-surface-container-high p-10 rounded-xl flex flex-col justify-between border border-outline-variant/10">
<div>
<div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-8">
<span className="material-symbols-outlined text-white text-3xl">smart_toy</span>
</div>
<h3 className="text-2xl font-bold font-headline text-primary mb-4">AI &amp; Robotics Lab</h3>
<p className="text-on-surface-variant leading-relaxed mb-6">Focused on precision agriculture and automated irrigation systems using satellite data and machine learning.</p>
</div>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm font-medium">
<span className="w-2 h-2 rounded-full bg-secondary"></span> 12 Active Projects
                        </li>
<li className="flex items-center gap-3 text-sm font-medium">
<span className="w-2 h-2 rounded-full bg-secondary"></span> $2.4M External Funding
                        </li>
</ul>
</div>
{/* Hub 3 */}
<div className="md:col-span-4 bg-primary p-10 rounded-xl text-white relative overflow-hidden group">
<div className="relative z-10">
<h3 className="text-2xl font-bold font-headline mb-4">Digital Literacy Initiative</h3>
<p className="text-white/70 mb-8">Bridging the urban-rural divide through accessible education technology and localized digital platforms.</p>
<Link href="/research/digital-literacy" className="bg-secondary text-on-secondary px-6 py-3 rounded-xl text-sm font-bold tracking-tight hover:bg-secondary-container hover:text-on-secondary-container transition-colors inline-block mt-4">Project Portfolio</Link>
</div>
<span className="material-symbols-outlined absolute -bottom-8 -right-8 text-[120px] opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-700">school</span>
</div>
{/* Hub 4 */}
<div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-low transition-transform duration-500 hover:-translate-y-1">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Scientists in a state-of-the-art biology lab examining plant samples under microscopes for genetic research" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByT8PFRB6qrwB_C933NfKnNX-sxYiPJixVzmOpNjTd8yRsjvpHEcytkVDGnW86xWzcWNM5tO_WpXEZMGRCsBmidKWp3SrmwpGJDODANoIFXjdr0XEz73SuQ05_bdHiV9WT_Zgcr6yYEgewHY2tO5QakDJ5qYciDrAhhtvHIcu0XIN-rIsQQAsFxltUneR_PbCrkwdT6J0YiNtGg66CAF_uQvVneT4Zuw3XyNb_v_QBTwcyPNg-F7Y5m720MtqE-lNODuGqMfq3"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
<div className="absolute bottom-0 p-10 text-white">
<h3 className="text-3xl font-bold font-headline mb-2">Molecular Biology Unit</h3>
<p className="text-white/80 max-w-lg mb-4">Genetic sequencing for drought-resistant crop varieties adapted to the salt range ecosystem.</p>
</div>
</div>
</div>
</section>
{/* Research Impact Section - Asymmetric Text/Image */}
<section className="py-24 bg-surface-container-low">
<div className="editorial-asymmetry flex flex-col md:flex-row gap-20 items-center">
<div className="w-full md:w-1/2">
<h2 className="font-headline text-5xl font-extrabold text-primary mb-8 leading-tight">Global Collaborations, <br/><span className="text-secondary">Local Impact</span></h2>
<p className="text-lg text-on-surface-variant leading-relaxed mb-10">
                        Our research ecosystem extends beyond the Namal Valley. We collaborate with leading institutions worldwide, including Oxford, Bradford, and ITU, to ensure our research meets international standards while addressing the urgent needs of our local community.
                    </p>
<div className="grid grid-cols-2 gap-8">
<div className="p-6 bg-white rounded-xl shadow-sm border border-outline-variant/10">
<span className="block text-4xl font-extrabold text-secondary mb-2">45+</span>
<span className="text-xs uppercase font-bold tracking-widest text-primary">Partner Institutions</span>
</div>
<div className="p-6 bg-white rounded-xl shadow-sm border border-outline-variant/10">
<span className="block text-4xl font-extrabold text-secondary mb-2">200+</span>
<span className="text-xs uppercase font-bold tracking-widest text-primary">Annual Publications</span>
</div>
</div>
</div>
<div className="w-full md:w-1/2 relative">
<div className="absolute -top-10 -left-10 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl"></div>
<img className="relative z-10 rounded-xl shadow-2xl grayscale-[0.2] border-[12px] border-white" data-alt="Diverse group of international university students and professors collaborating around a large interactive screen in a bright modern space" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaexgcrPnUqBG0pvjOdTCgU8c2RidzqqvPFtYQOTGBvfEbwmvfq3ZjdmviBdJSVR-8T7RzqAdH7_PBgjTQL5Dg2LHGkeNHRwfbhDwxEtm7YkiDNMhIMzxx_4UC0BQvYQ6cmKC5NQKo2u0OhIYDCoZ7yNuHQJ6H76IScFKQQg25pEldj_NC5XK3_XMpJFb-zg1Da2aM0FA0B1wSHe0ChiFOrYVtB7RqdEz7y8BJDmjCIZP_RTREIvp9fquaLs42RVXFs12bSGX_"/>
</div>
</div>
</section>
{/* Latest Publications */}
<section className="py-24 px-12">
<div className="max-w-[1920px] mx-auto">
<div className="flex justify-between items-end mb-16">
<div>
<h2 className="font-headline text-4xl font-extrabold text-primary mb-2">Latest Publications</h2>
<p className="text-on-surface-variant">Scholarly contributions to the global academic landscape.</p>
</div>
<Link href="/research/repository" className="text-primary font-bold flex items-center gap-2 group">
                        Explore Full Repository <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
</Link>
</div>
<div className="space-y-6">
{/* Publication Item */}
<div className="group flex flex-col md:flex-row md:items-center justify-between p-8 bg-surface border-b border-outline-variant/20 hover:bg-surface-container-low transition-colors rounded-xl">
<div className="flex-1">
<span className="text-xs font-bold text-secondary uppercase tracking-widest mb-2 block">Journal of Applied Physics • 2024</span>
<h4 className="text-xl font-bold font-headline text-primary mb-2 group-hover:text-secondary transition-colors cursor-pointer">Thermal Efficiency of Nano-fluids in Solar Collectors: A Localized Study</h4>
<p className="text-sm text-on-surface-variant">Dr. Ahmed Shah, Prof. Michael Thorne, Dr. S. Malik</p>
</div>
<div className="mt-4 md:mt-0 flex gap-4">
<span className="px-4 py-2 bg-surface-container text-xs font-bold rounded-full">Renewable Energy</span>
<button className="material-symbols-outlined text-primary-container hover:scale-110 transition-transform">download</button>
</div>
</div>
{/* Publication Item */}
<div className="group flex flex-col md:flex-row md:items-center justify-between p-8 bg-surface border-b border-outline-variant/20 hover:bg-surface-container-low transition-colors rounded-xl">
<div className="flex-1">
<span className="text-xs font-bold text-secondary uppercase tracking-widest mb-2 block">AI in Agriculture Review • 2023</span>
<h4 className="text-xl font-bold font-headline text-primary mb-2 group-hover:text-secondary transition-colors cursor-pointer">Machine Learning Models for Soil Moisture Prediction in Arid Zones</h4>
<p className="text-sm text-on-surface-variant">Z. Fatima, R. Khalid, Dr. B. Anderson</p>
</div>
<div className="mt-4 md:mt-0 flex gap-4">
<span className="px-4 py-2 bg-surface-container text-xs font-bold rounded-full">Artificial Intelligence</span>
<button className="material-symbols-outlined text-primary-container hover:scale-110 transition-transform">download</button>
</div>
</div>
{/* Publication Item */}
<div className="group flex flex-col md:flex-row md:items-center justify-between p-8 bg-surface border-b border-outline-variant/20 hover:bg-surface-container-low transition-colors rounded-xl">
<div className="flex-1">
<span className="text-xs font-bold text-secondary uppercase tracking-widest mb-2 block">Educational Technology Quarterly • 2023</span>
<h4 className="text-xl font-bold font-headline text-primary mb-2 group-hover:text-secondary transition-colors cursor-pointer">Quantifying the Impact of Low-Cost Digital Education in Rural Communities</h4>
<p className="text-sm text-on-surface-variant">M. Ibrahim, Dr. J. Wright</p>
</div>
<div className="mt-4 md:mt-0 flex gap-4">
<span className="px-4 py-2 bg-surface-container text-xs font-bold rounded-full">Social Impact</span>
<button className="material-symbols-outlined text-primary-container hover:scale-110 transition-transform">download</button>
</div>
</div>
</div>
</div>
</section>
{/* Call to Action */}
<section className="py-24 px-12">
<div className="bg-primary-container rounded-[2rem] p-16 text-center text-white relative overflow-hidden">
<div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">Join Our Research Ecosystem</h2>
<p className="text-lg opacity-80 mb-10 leading-relaxed">Whether you are a prospective graduate student, a seasoned academic, or an industry leader, Namal offers a unique environment for transformative research.</p>
<div className="flex flex-wrap justify-center gap-6">
<Link href="/research/fellowship" className="bg-white text-primary px-8 py-4 rounded-xl font-bold tracking-tight hover:bg-secondary-container hover:text-on-secondary-container transition-all flex items-center justify-center">Apply for Fellowship</Link>
<Link href="/research/partnerships" className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold tracking-tight hover:bg-white/10 transition-all flex items-center justify-center">Industry Partnerships</Link>
</div>
</div>
</div>
</section>
</main>
    </>
  );
}
