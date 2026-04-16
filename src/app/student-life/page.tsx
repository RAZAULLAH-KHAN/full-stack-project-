import Link from "next/link";

export default function Page() {
  return (
    <>
<main className="pt-16 md:pt-20">
{/* Hero Section */}
<section className="relative min-h-[500px] md:h-[870px] flex items-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover" alt="Student Life" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIijkCcDTd2CCzJoQwa0oY43krKRH_BK77nbBgftGB99zy5yy9MrNtXRMnYqRve89GdoW21cTsQjDQrpXBuo-QfrNqOQOE1sZMqt6XC8iZvtqh0LTbN9jJdnWwFYvpNx4j_8kfni-t-XVJStMwbSQ0ltj1v7itpJUUXi0elQcGq8Wo7OGEOSQmYKym9t4DGr67VRTEcB_LrZu07m4Emg_8Y2IQAGvWoNNH7RP-_yq8pbmk_Av-tVUa6JiUQ_6WCTNiL4TUCB4-"/>
<div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent"></div>
</div>
<div className="relative z-10 max-w-screen-2xl mx-auto px-4 md:px-8 w-full py-16 md:py-0">
<div className="max-w-3xl space-y-4 md:space-y-6">
<span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-headline font-bold text-xs md:text-sm tracking-wide">CAMPUS EXPERIENCE</span>
<h1 className="font-headline font-extrabold text-white leading-[1.1] tracking-tighter text-4xl sm:text-5xl md:text-6xl lg:text-8xl">
                        Life Beyond <br/> Lectures.
                    </h1>
<p className="text-white/90 max-w-xl leading-relaxed text-base md:text-xl">
                        At Namal, education is lived, not just learned. Join a community that celebrates diversity, sparks innovation, and builds lifelong bonds.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<Link href="/student-life/clubs" className="bg-secondary text-on-secondary px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-headline font-bold text-base md:text-lg hover:bg-secondary/90 transition-all flex items-center justify-center">Explore Clubs</Link>
<Link href="/student-life/stories" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-headline font-bold text-base md:text-lg hover:bg-white/20 transition-all flex items-center justify-center">Student Stories</Link>
</div>
</div>
</div>
</section>
{/* Bento Grid: Clubs */}
<section className="py-16 md:py-24 bg-surface">
<div className="max-w-screen-2xl mx-auto px-4 md:px-8">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-4">
<div className="space-y-3 md:space-y-4">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-extrabold tracking-tight text-primary">Vibrant Communities</h2>
<p className="text-on-surface-variant max-w-lg text-sm md:text-lg">From high-stakes debating to building the next generation of robotics, find your tribe among 50+ student-led organizations.</p>
</div>
<Link href="/student-life/clubs" className="text-secondary font-headline font-bold flex items-center gap-2 hover:underline text-sm md:text-base">
                        View All Clubs <span className="material-symbols-outlined">arrow_forward</span>
</Link>
</div>
{/* Mobile: simple stack, Desktop: bento grid */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 md:h-[800px]">
{/* Robotics */}
<div className="md:col-span-8 group relative rounded-xl overflow-hidden shadow-sm min-h-[250px] md:min-h-0">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 absolute inset-0" alt="Robotics" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFDAc0LScxril871h9cjHZ3eiR59-ev7VtPEHGzC1pGeHKWa-z96krM8eHxv4gY-i93Yj-Fmii4uKA9uFKHCE_E99JatkY-ee8Pq09p67EvRjAHqDBhK_tcH8FbW1DapErjvvh7XSJvexyVDw9qOdx8NKgn9YzFY__tm7EPjbT9HKbRrtk7anOpfePdXgxc_KGMc4olEDpVc8h0n9aSDpoKs9dHpewdpgspm1kFCcLUHJ7NWxxaKMfL3dP8M8DOFwK9FOIq-cC"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8">
<span className="text-secondary-fixed-dim font-headline font-bold text-xs md:text-sm tracking-widest uppercase mb-2">Innovation</span>
<h3 className="text-white text-2xl md:text-3xl font-headline font-bold">Namal Robotics Society</h3>
<p className="text-white/70 max-w-md mt-2 text-sm md:text-base hidden sm:block">Competing in international arenas and building the future of automated systems.</p>
</div>
</div>
{/* Athletics */}
<div className="md:col-span-4 group relative rounded-xl overflow-hidden shadow-sm min-h-[200px] md:min-h-0">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 absolute inset-0" alt="Athletics" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaGYV9j653dCsYMNooLJgKskadCYACbgoqyJ6rzCkF1uR8cExyuh0bGhmP8Z8WH9rv4v6W69dFuO8pqxhnJdb3FAGubzEa11SXn7R-FvtG35Qhc3nHraZ5lznEu1GRl8ULGDEC-af3uhu6KUT5NMcaz6cTok9ejvnLmNGMhPVMsR_CMCoxXgQjI4RfbX5lKeeTlrV0cHrdRGjhhNVnf0MtIi0TtWZVlh8ewV_qsqjeZaN5JpkIt7IAqKjp96Kdn6zT8HRwJLsq"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8">
<span className="text-secondary-fixed-dim font-headline font-bold text-xs md:text-sm tracking-widest uppercase mb-2">Athletics</span>
<h3 className="text-white text-2xl md:text-3xl font-headline font-bold">Titans Athletics</h3>
</div>
</div>
{/* Arts */}
<div className="md:col-span-4 group relative rounded-xl overflow-hidden shadow-sm min-h-[200px] md:min-h-0">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 absolute inset-0" alt="Arts" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFhoMrJ37hNvUz6DdChE1eljl9kQ1uDv-9xlNtW_dL4T0j89-aHd7oHObV0OTFVV0nfOJ1GgfRC8QbqvHjxDXl92xhFrkAQ4tiBfJ9-hofNKTr-ZlAN5ty6yv3QR5FzbXHfoj1GadgjntxhtmtG8fKd94wlbODbGdi4w3strAtxF-xH_w6XYa2MDAlRUz4yJZke7Vc62vAONzs_X9YR6y-aQJ_MU86E6JiixRXtv9t_VKsMdVn_BnsKqqony1Tlo-XxxOw-kgE"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8">
<h3 className="text-white text-xl md:text-2xl font-headline font-bold">Performing Arts &amp; Culture</h3>
</div>
</div>
{/* Debating */}
<div className="md:col-span-8 group relative rounded-xl overflow-hidden shadow-sm min-h-[250px] md:min-h-0">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 absolute inset-0" alt="Debating" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNgdh79Hyu_r9DTC5591V2xNXCkQfPugchmqT0tLZb2GoD1tafdstjnZzk5tJGoWlj6OT21cFHtMnTScufrxa_KP0IY_67XwSaHqDFnspe1q641HoT9n9rY2-zvn0glk9wiA2AiZF2u9IDBI1FqPOOWQ81Nd9SIiw0V5s29Rue75OFghAIhwWbHOgMbPSc7Y0Ta3wLtO6OsRdEQRDjAYKMvn-Heu_eJXT9l0HPnA6aDLFKtg6VMQyg-kUdYkGOmT95N9wRFrPQ"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8">
<span className="text-secondary-fixed-dim font-headline font-bold text-xs md:text-sm tracking-widest uppercase mb-2">Leadership</span>
<h3 className="text-white text-2xl md:text-3xl font-headline font-bold">The Debating Union</h3>
<p className="text-white/70 max-w-md mt-2 text-sm md:text-base hidden sm:block">Sharpening minds and voices through rigorous dialogue and international tournaments.</p>
</div>
</div>
</div>
</div>
</section>
{/* Virtual Tour */}
<section className="relative py-16 md:py-32 bg-surface-container-low overflow-hidden">
<div className="max-w-screen-2xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
<div className="order-2 md:order-1 relative">
<div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl md:rotate-[-2deg] md:hover:rotate-0 transition-transform duration-500">
<img className="w-full h-full object-cover" alt="Campus" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvOzDF28jYpM1rXbHiy2iSfebIkdTEShDRlK7813NXF1odzIKUFqVGy15_hS54tA6a2rJyKUBTAPd7M3q_vPlYfJkGRSSB1C0U026e-_pZSE3zVwP_tILNecfJQu8PONUtTciqAVuY0MDTBNlBNxn8nHxTNVVmF4pSjPMdVLaPOgEbjCrdpCYJcmlVPkD8iMfR5VCSlsz75c_DdulrOISnWF7e_fq5-Q89Eanu5HUtE_VZ3UelSjx022byt98cI2MzdUUdSmDb"/>
</div>
{/* Overlapping Card - hidden on very small screens */}
<div className="hidden sm:block absolute -bottom-6 md:-bottom-10 -right-2 md:-right-10 bg-surface-container-lowest p-6 md:p-8 rounded-xl shadow-xl max-w-[220px] md:max-w-xs border border-outline-variant/15">
<div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
<div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-xl md:text-2xl">explore</span>
</div>
<h4 className="font-headline font-bold text-primary text-sm md:text-base">Interactive Map</h4>
</div>
<p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">Experience our labs and social spaces from anywhere.</p>
</div>
</div>
<div className="order-1 md:order-2 space-y-6 md:space-y-8">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-extrabold text-primary tracking-tight">Our Habitat <br/>for Innovation</h2>
<p className="text-base md:text-lg text-on-surface-variant leading-relaxed">
                        Namal is more than just a place to study; it&apos;s a living laboratory. Our campus is designed to inspire collaboration, sustainability, and curiosity.
                    </p>
<div className="space-y-4 md:space-y-6">
<div className="flex items-start gap-3 md:gap-4">
<span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
<div>
<h5 className="font-headline font-bold text-primary text-sm md:text-base">Smart Laboratories</h5>
<p className="text-xs md:text-sm text-on-surface-variant">Equipped with the latest industry-standard technology.</p>
</div>
</div>
<div className="flex items-start gap-3 md:gap-4">
<span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
<div>
<h5 className="font-headline font-bold text-primary text-sm md:text-base">Creative Studios</h5>
<p className="text-xs md:text-sm text-on-surface-variant">Dedicated spaces for music, art, and content creation.</p>
</div>
</div>
<div className="flex items-start gap-3 md:gap-4">
<span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
<div>
<h5 className="font-headline font-bold text-primary text-sm md:text-base">Zero-Carbon Housing</h5>
<p className="text-xs md:text-sm text-on-surface-variant">Modern, comfortable living that respects the environment.</p>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Student Stories */}
<section className="py-16 md:py-24 bg-surface-container-lowest">
<div className="max-w-screen-2xl mx-auto px-4 md:px-8 text-center mb-10 md:mb-16">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-extrabold text-primary mb-4">Student Stories</h2>
<div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
</div>
<div className="max-w-screen-2xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
{/* Story 1 */}
<div className="bg-surface-container-low p-6 md:p-8 rounded-xl relative group hover:bg-primary transition-colors duration-500">
<span className="material-symbols-outlined text-secondary text-4xl md:text-5xl absolute top-4 md:top-6 right-6 md:right-8 opacity-20">format_quote</span>
<div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
<img className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-secondary" alt="Sarah Ahmed" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZJGSA6s2pCbIoVdOViP4ZW3iunZdBqDiph4FOW6ShO2_xLPoLtO4NGmqVlwomIsQIXRP1golCyJW3ZD9Qk4zpQp2MNpj1Zv5Z18eRZ2pn0Y48bMD-qMD_jys43YW2FjCLOcAvHsZwrPMmkDlhqKfWd9naaOMH-PHwPOrUnG1NKDXo-K5b_l9tmQm_2VDtORgHAQt3TxmOLqa-K2FtXJV7oJH_8qFtqwJUc9QZbHuZGhy7MkHR-U7v0fUUii4co3QDtlynUI9q"/>
<div className="text-left">
<h4 className="font-headline font-bold text-primary group-hover:text-white transition-colors text-sm md:text-base">Sarah Ahmed</h4>
<p className="text-[10px] md:text-xs text-on-surface-variant group-hover:text-white/70 transition-colors">Computer Science, Class of 2025</p>
</div>
</div>
<p className="text-on-surface-variant group-hover:text-white/90 leading-relaxed transition-colors text-sm md:text-base">
                        &quot;The Robotics Society didn&apos;t just teach me how to code; it taught me how to lead.&quot;
                    </p>
</div>
{/* Story 2 */}
<div className="bg-surface-container-low p-6 md:p-8 rounded-xl relative group hover:bg-primary transition-colors duration-500">
<span className="material-symbols-outlined text-secondary text-4xl md:text-5xl absolute top-4 md:top-6 right-6 md:right-8 opacity-20">format_quote</span>
<div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
<img className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-secondary" alt="Zain Malik" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbnr1VRvnE94jRC4RYsTHWfVo-n6qCtPfnU56ZVv6MbZ7pfBR_LHiWl_8VXEIviEkWgW9SaYmWtJAytvO3yGrl2laU6EBHHeORk8KujY9u9VWDnI8GMRV6qmJS4p5MOYVEHMboF0dCZyUPUgSUzmG-3GZeQktsrnrqvjVirCWf_8LhwiM4raTxuljWT5JCxRlKQm-PMTo3MiBkdhfLqYlFH9hOjVWXDmEuh3z25O2ZTS_3DQfxzqc1yiJptR6i1j6cnz0BWnJK"/>
<div className="text-left">
<h4 className="font-headline font-bold text-primary group-hover:text-white transition-colors text-sm md:text-base">Zain Malik</h4>
<p className="text-[10px] md:text-xs text-on-surface-variant group-hover:text-white/70 transition-colors">Electrical Engineering, Class of 2024</p>
</div>
</div>
<p className="text-on-surface-variant group-hover:text-white/90 leading-relaxed transition-colors text-sm md:text-base">
                        &quot;Coming from a small village, Namal was a world of opportunities. The community here supports you like family.&quot;
                    </p>
</div>
{/* Story 3 */}
<div className="bg-surface-container-low p-6 md:p-8 rounded-xl relative group hover:bg-primary transition-colors duration-500">
<span className="material-symbols-outlined text-secondary text-4xl md:text-5xl absolute top-4 md:top-6 right-6 md:right-8 opacity-20">format_quote</span>
<div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
<img className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-secondary" alt="Ayesha Khan" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlTlT0ftVu8MoKFtH0kN37DUzmAGJV7ZfebWDy699Q1g9EVDHg1sdIL62AD4JLeRBPaYxs0_yIrrsVgsZQ1QhxIM6wBQufxuMgibGDFn6Ih4bgSvCdcsX9fwafAB7dFe4umiSNpunNoS7LHp6PivfIQdmVX5fpmnbvdRdLgY-BDgYtTCFDYqT5Sscx_x-1yCuwPggQqeOe3RVR5knJlHTKD2qUpaDJlFRGMBqxgq7uhvB5L8xuqHqEoRkVAxAJs9dOGeCT5Fnh"/>
<div className="text-left">
<h4 className="font-headline font-bold text-primary group-hover:text-white transition-colors text-sm md:text-base">Ayesha Khan</h4>
<p className="text-[10px] md:text-xs text-on-surface-variant group-hover:text-white/70 transition-colors">Agribusiness, Class of 2026</p>
</div>
</div>
<p className="text-on-surface-variant group-hover:text-white/90 leading-relaxed transition-colors text-sm md:text-base">
                        &quot;Namal pushes you to explore your hidden talents. It&apos;s truly a place where you discover your whole self.&quot;
                    </p>
</div>
</div>
</section>
{/* Calendar Highlights - simplified for mobile */}
<section className="py-16 md:py-24 bg-surface">
<div className="max-w-4xl mx-auto px-4 md:px-8">
<h2 className="text-3xl md:text-4xl font-headline font-extrabold text-primary mb-8 md:mb-12 text-center">Calendar Highlights</h2>
<div className="space-y-6 md:space-y-8">
{/* Event 1 */}
<div className="flex items-start gap-4 md:gap-6 p-4 md:p-6 bg-surface-container-low rounded-xl">
<div className="text-center min-w-[60px]">
<span className="text-secondary font-headline font-bold text-base md:text-lg block">OCT 15</span>
</div>
<div>
<h4 className="text-base md:text-xl font-headline font-bold text-primary">Tech Spark Summit</h4>
<p className="text-on-surface-variant mt-1 md:mt-2 text-xs md:text-sm">Annual tech fest featuring industry leaders and hackathons.</p>
</div>
</div>
{/* Event 2 */}
<div className="flex items-start gap-4 md:gap-6 p-4 md:p-6 bg-surface-container-low rounded-xl">
<div className="text-center min-w-[60px]">
<span className="text-secondary font-headline font-bold text-base md:text-lg block">NOV 02</span>
</div>
<div>
<h4 className="text-base md:text-xl font-headline font-bold text-primary">Cultural Gala</h4>
<p className="text-on-surface-variant mt-1 md:mt-2 text-xs md:text-sm">Celebrating the rich diversity of Pakistan through food, music, and art.</p>
</div>
</div>
{/* Event 3 */}
<div className="flex items-start gap-4 md:gap-6 p-4 md:p-6 bg-surface-container-low rounded-xl">
<div className="text-center min-w-[60px]">
<span className="text-secondary font-headline font-bold text-base md:text-lg block">DEC 10</span>
</div>
<div>
<h4 className="text-base md:text-xl font-headline font-bold text-primary">Winter Sports Cup</h4>
<p className="text-on-surface-variant mt-1 md:mt-2 text-xs md:text-sm">Inter-departmental championship for cricket and football.</p>
</div>
</div>
</div>
</div>
</section>
</main>
    </>
  );
}
