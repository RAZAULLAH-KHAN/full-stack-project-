import Link from "next/link";

export default function Page() {
  return (
    <>
<main className="pt-16 md:pt-24">
{/* Hero Section */}
<section className="relative min-h-[500px] md:h-[819px] flex items-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover grayscale-[0.3] opacity-90" alt="Research Lab" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRTEuuKG1SK8XJZH60NDCU2g-iElXyrmFia56wfWcx-UPzBq0UoTbr3knDCJGdaGSgnYAX3xZo9pjrxzJvO64M25A-Z7uMBso0EdvKETk77aD5VrvqCvOiop82pUDt03UEqk0FhVG7kNb81a_Vx5nGLWcLqfT4FK-cXUgKWr7HWt3FOQPGRVPlV4ap_0Gj8GkN9hrb_wyoEEtpsiVcCtyHNSSOntGeBfsq6HtEbMj9YDt46IuBxDzajNK2_gb1NQOgL0HO5yua"/>
<div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-transparent"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-white py-16 md:py-0">
<span className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 md:mb-6">Discovery &amp; Impact</span>
<h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold tracking-tighter leading-[0.95] mb-6 md:mb-8">
                    Research at <span className="text-secondary-container">Namal</span>
</h1>
<p className="text-base md:text-xl lg:text-2xl font-light leading-relaxed text-surface-container opacity-90 max-w-2xl">
                    Pioneering solutions for global challenges through rigorous inquiry and interdisciplinary innovation.
                </p>
<div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 md:gap-6">
<Link href="/research/impact" className="bg-gradient-to-br from-secondary to-secondary-container text-on-secondary px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-bold tracking-tight hover:shadow-xl transition-all flex justify-center items-center text-sm md:text-base">Explore Our Impact</Link>
<Link href="/research/partners" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-bold tracking-tight hover:bg-white/20 transition-all flex justify-center items-center text-sm md:text-base">Global Partners</Link>
</div>
</div>
</section>
{/* Innovation Hubs */}
<section className="py-16 md:py-24 px-4 md:px-8 lg:px-12 bg-surface">
<div className="mb-10 md:mb-16">
<h2 className="font-headline text-3xl md:text-4xl font-extrabold text-primary tracking-tight mb-2">Innovation Hubs</h2>
<div className="h-1 w-20 md:w-24 bg-secondary"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 md:h-[700px]">
{/* Hub 1 */}
<div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-low transition-transform duration-500 hover:-translate-y-1 min-h-[250px] md:min-h-0">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Solar Energy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHW01PuMQJ8wIgAf0uA2ooXZI3hPd4o7sYqKfZfVWtGcMgA9MqBXVlKbHASHoTXDj8TxNXf7qwT1grnrWR7kIKCeZf4ANWpWa0tF3UjpHt0XpqckIh2Y_SSO5K0-MZwdnB27-11qtDx_ColLP--k6--72SiyDylRWVi2YESQqMKBEuf-6JN2QdGOigX1E_9oR3jElu-WwrHFIvVuxLQRaNhcQ1YA8EWHmIpbAEXSjpffm9uVuqDpEW6Hrkj84GnZU1nt2_nCf4"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 p-6 md:p-10 text-white">
<h3 className="text-2xl md:text-3xl font-bold font-headline mb-2">Center for Sustainable Energy</h3>
<p className="text-white/80 max-w-lg mb-4 md:mb-6 text-sm md:text-base">Developing indigenous solar technologies to power remote communities.</p>
<span className="inline-flex items-center gap-2 text-secondary-container font-bold text-xs md:text-sm uppercase tracking-widest">
                            View Laboratory <span className="material-symbols-outlined">arrow_forward</span>
</span>
</div>
</div>
{/* Hub 2 */}
<div className="md:col-span-4 bg-surface-container-high p-6 md:p-10 rounded-xl flex flex-col justify-between border border-outline-variant/10">
<div>
<div className="w-12 h-12 md:w-16 md:h-16 bg-primary rounded-xl flex items-center justify-center mb-6 md:mb-8">
<span className="material-symbols-outlined text-white text-2xl md:text-3xl">smart_toy</span>
</div>
<h3 className="text-xl md:text-2xl font-bold font-headline text-primary mb-3 md:mb-4">AI &amp; Robotics Lab</h3>
<p className="text-on-surface-variant leading-relaxed mb-4 md:mb-6 text-sm md:text-base">Focused on precision agriculture and automated irrigation using ML.</p>
</div>
<ul className="space-y-3 md:space-y-4">
<li className="flex items-center gap-3 text-sm font-medium">
<span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0"></span> 12 Active Projects
                        </li>
<li className="flex items-center gap-3 text-sm font-medium">
<span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0"></span> $2.4M External Funding
                        </li>
</ul>
</div>
{/* Hub 3 */}
<div className="md:col-span-4 bg-primary p-6 md:p-10 rounded-xl text-white relative overflow-hidden group">
<div className="relative z-10">
<h3 className="text-xl md:text-2xl font-bold font-headline mb-3 md:mb-4">Digital Literacy Initiative</h3>
<p className="text-white/70 mb-6 md:mb-8 text-sm md:text-base">Bridging the urban-rural divide through accessible education technology.</p>
<Link href="/research/digital-literacy" className="bg-secondary text-on-secondary px-5 md:px-6 py-2.5 md:py-3 rounded-xl text-sm font-bold tracking-tight hover:bg-secondary-container hover:text-on-secondary-container transition-colors inline-block">Project Portfolio</Link>
</div>
<span className="material-symbols-outlined absolute -bottom-8 -right-8 text-[80px] md:text-[120px] opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-700">school</span>
</div>
{/* Hub 4 */}
<div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-low transition-transform duration-500 hover:-translate-y-1 min-h-[250px] md:min-h-0">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Biology Lab" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByT8PFRB6qrwB_C933NfKnNX-sxYiPJixVzmOpNjTd8yRsjvpHEcytkVDGnW86xWzcWNM5tO_WpXEZMGRCsBmidKWp3SrmwpGJDODANoIFXjdr0XEz73SuQ05_bdHiV9WT_Zgcr6yYEgewHY2tO5QakDJ5qYciDrAhhtvHIcu0XIN-rIsQQAsFxltUneR_PbCrkwdT6J0YiNtGg66CAF_uQvVneT4Zuw3XyNb_v_QBTwcyPNg-F7Y5m720MtqE-lNODuGqMfq3"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
<div className="absolute bottom-0 p-6 md:p-10 text-white">
<h3 className="text-2xl md:text-3xl font-bold font-headline mb-2">Molecular Biology Unit</h3>
<p className="text-white/80 max-w-lg mb-4 text-sm md:text-base">Genetic sequencing for drought-resistant crop varieties.</p>
</div>
</div>
</div>
</section>
{/* Research Impact */}
<section className="py-16 md:py-24 bg-surface-container-low">
<div className="max-w-screen-2xl mx-auto px-4 md:px-8 flex flex-col md:flex-row gap-10 md:gap-20 items-center">
<div className="w-full md:w-1/2">
<h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-6 md:mb-8 leading-tight">Global Collaborations, <br/><span className="text-secondary">Local Impact</span></h2>
<p className="text-base md:text-lg text-on-surface-variant leading-relaxed mb-8 md:mb-10">
                        Our research ecosystem extends beyond the Namal Valley. We collaborate with leading institutions worldwide.
                    </p>
<div className="grid grid-cols-2 gap-4 md:gap-8">
<div className="p-4 md:p-6 bg-white rounded-xl shadow-sm border border-outline-variant/10">
<span className="block text-3xl md:text-4xl font-extrabold text-secondary mb-1 md:mb-2">45+</span>
<span className="text-[10px] md:text-xs uppercase font-bold tracking-widest text-primary">Partner Institutions</span>
</div>
<div className="p-4 md:p-6 bg-white rounded-xl shadow-sm border border-outline-variant/10">
<span className="block text-3xl md:text-4xl font-extrabold text-secondary mb-1 md:mb-2">200+</span>
<span className="text-[10px] md:text-xs uppercase font-bold tracking-widest text-primary">Annual Publications</span>
</div>
</div>
</div>
<div className="w-full md:w-1/2 relative">
<div className="absolute -top-10 -left-10 w-48 md:w-64 h-48 md:h-64 bg-secondary-container/20 rounded-full blur-3xl hidden md:block"></div>
<img className="relative z-10 rounded-xl shadow-2xl grayscale-[0.2] border-4 md:border-[12px] border-white w-full" alt="Collaboration" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaexgcrPnUqBG0pvjOdTCgU8c2RidzqqvPFtYQOTGBvfEbwmvfq3ZjdmviBdJSVR-8T7RzqAdH7_PBgjTQL5Dg2LHGkeNHRwfbhDwxEtm7YkiDNMhIMzxx_4UC0BQvYQ6cmKC5NQKo2u0OhIYDCoZ7yNuHQJ6H76IScFKQQg25pEldj_NC5XK3_XMpJFb-zg1Da2aM0FA0B1wSHe0ChiFOrYVtB7RqdEz7y8BJDmjCIZP_RTREIvp9fquaLs42RVXFs12bSGX_"/>
</div>
</div>
</section>
{/* Latest Publications */}
<section className="py-16 md:py-24 px-4 md:px-8 lg:px-12">
<div className="max-w-[1920px] mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-4">
<div>
<h2 className="font-headline text-3xl md:text-4xl font-extrabold text-primary mb-2">Latest Publications</h2>
<p className="text-on-surface-variant text-sm md:text-base">Scholarly contributions to the global academic landscape.</p>
</div>
<Link href="/research/repository" className="text-primary font-bold flex items-center gap-2 group text-sm md:text-base">
                        Explore Full Repository <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
</Link>
</div>
<div className="space-y-4 md:space-y-6">
{/* Publication 1 */}
<div className="group flex flex-col md:flex-row md:items-center justify-between p-4 md:p-8 bg-surface border-b border-outline-variant/20 hover:bg-surface-container-low transition-colors rounded-xl gap-4">
<div className="flex-1">
<span className="text-[10px] md:text-xs font-bold text-secondary uppercase tracking-widest mb-1 md:mb-2 block">Journal of Applied Physics • 2024</span>
<h4 className="text-base md:text-xl font-bold font-headline text-primary mb-1 md:mb-2 group-hover:text-secondary transition-colors">Thermal Efficiency of Nano-fluids in Solar Collectors</h4>
<p className="text-xs md:text-sm text-on-surface-variant">Dr. Ahmed Shah, Prof. Michael Thorne, Dr. S. Malik</p>
</div>
<div className="flex gap-3 md:gap-4 items-center">
<span className="px-3 md:px-4 py-1.5 md:py-2 bg-surface-container text-[10px] md:text-xs font-bold rounded-full">Renewable Energy</span>
<button className="material-symbols-outlined text-primary-container hover:scale-110 transition-transform">download</button>
</div>
</div>
{/* Publication 2 */}
<div className="group flex flex-col md:flex-row md:items-center justify-between p-4 md:p-8 bg-surface border-b border-outline-variant/20 hover:bg-surface-container-low transition-colors rounded-xl gap-4">
<div className="flex-1">
<span className="text-[10px] md:text-xs font-bold text-secondary uppercase tracking-widest mb-1 md:mb-2 block">AI in Agriculture Review • 2023</span>
<h4 className="text-base md:text-xl font-bold font-headline text-primary mb-1 md:mb-2 group-hover:text-secondary transition-colors">Machine Learning Models for Soil Moisture Prediction</h4>
<p className="text-xs md:text-sm text-on-surface-variant">Z. Fatima, R. Khalid, Dr. B. Anderson</p>
</div>
<div className="flex gap-3 md:gap-4 items-center">
<span className="px-3 md:px-4 py-1.5 md:py-2 bg-surface-container text-[10px] md:text-xs font-bold rounded-full">AI</span>
<button className="material-symbols-outlined text-primary-container hover:scale-110 transition-transform">download</button>
</div>
</div>
{/* Publication 3 */}
<div className="group flex flex-col md:flex-row md:items-center justify-between p-4 md:p-8 bg-surface border-b border-outline-variant/20 hover:bg-surface-container-low transition-colors rounded-xl gap-4">
<div className="flex-1">
<span className="text-[10px] md:text-xs font-bold text-secondary uppercase tracking-widest mb-1 md:mb-2 block">Educational Technology Quarterly • 2023</span>
<h4 className="text-base md:text-xl font-bold font-headline text-primary mb-1 md:mb-2 group-hover:text-secondary transition-colors">Impact of Low-Cost Digital Education in Rural Communities</h4>
<p className="text-xs md:text-sm text-on-surface-variant">M. Ibrahim, Dr. J. Wright</p>
</div>
<div className="flex gap-3 md:gap-4 items-center">
<span className="px-3 md:px-4 py-1.5 md:py-2 bg-surface-container text-[10px] md:text-xs font-bold rounded-full">Social Impact</span>
<button className="material-symbols-outlined text-primary-container hover:scale-110 transition-transform">download</button>
</div>
</div>
</div>
</div>
</section>
{/* CTA */}
<section className="py-16 md:py-24 px-4 md:px-8 lg:px-12">
<div className="bg-primary-container rounded-2xl md:rounded-[2rem] p-8 sm:p-12 md:p-16 text-center text-white relative overflow-hidden">
<div className="absolute top-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-secondary/10 rounded-full blur-[100px] -mr-24 md:-mr-48 -mt-24 md:-mt-48"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Join Our Research Ecosystem</h2>
<p className="text-sm md:text-lg opacity-80 mb-8 md:mb-10 leading-relaxed">Whether you are a prospective graduate student, a seasoned academic, or an industry leader, Namal offers a unique environment.</p>
<div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 md:gap-6">
<Link href="/research/fellowship" className="bg-white text-primary px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-bold tracking-tight hover:bg-secondary-container hover:text-on-secondary-container transition-all flex items-center justify-center text-sm md:text-base">Apply for Fellowship</Link>
<Link href="/research/partnerships" className="bg-transparent border-2 border-white/30 text-white px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-bold tracking-tight hover:bg-white/10 transition-all flex items-center justify-center text-sm md:text-base">Industry Partnerships</Link>
</div>
</div>
</div>
</section>
</main>
    </>
  );
}
