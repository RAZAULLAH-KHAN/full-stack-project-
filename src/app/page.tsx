import Link from "next/link";

export default function Page() {
  return (
    <>

      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[600px] md:h-[870px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img alt="University Campus" className="w-full h-full object-cover" data-alt="Wide cinematic shot of a modern architectural university building nestled against a rugged mountain backdrop under a clear blue sky" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0Ag6NkQa4F7l9IdyXWba5EyAeitNRNcvBSUYFhFhgv6svcW7jKhBmabjv9TKQ188YF5VeqhUt0H8QHMULYA8mLLWDa-qgLAIj1sx0XjewEohCfDZB93B58EuPGpYCQET_V38fWedAlOwMoh5wDtEpnmjBRcRXbkcfhPiJVGWY7dYDx0aDKpzMHx24BdJpQwrV_4VurVecwmbwuBCMIX8czqWjjC4THCr_nzijLwUmbfnVfdLMsHXk78L6V7GPz12nrld8hO6D" />
            <div className="absolute inset-0 hero-gradient"></div>
          </div>
          <div className="relative z-10 max-w-screen-2xl mx-auto px-4 md:px-8 grid grid-cols-12 gap-8 items-center w-full py-16 md:py-0">
            <div className="col-span-12 lg:col-span-10 xl:col-span-8">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 md:mb-6">
                Excellence in Education
              </span>
              <h1 className="font-headline text-white text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight mb-6 md:mb-8 leading-[1.1] md:leading-[1.05]">
                Empowering the <br className="hidden sm:block" />
                <span className="text-secondary-container">Future of Pakistan</span>
              </h1>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl font-light mb-8 md:mb-10 leading-relaxed">
                Namal University is a hub of knowledge, innovation, and character building, preparing the next generation of leaders to solve global challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/admissions" className="primary-cta-gradient text-on-primary px-8 md:px-10 py-3.5 md:py-4 rounded-xl font-headline font-bold text-base md:text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-transform flex items-center justify-center">
                  Apply Now
                </Link>
                <Link href="/campus" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 md:px-10 py-3.5 md:py-4 rounded-xl font-headline font-bold text-base md:text-lg hover:bg-white/20 transition-all flex items-center justify-center">
                  Virtual Tour
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Stats Section (Floating Bento) */}
        <section className="relative z-20 -mt-12 md:-mt-24 max-w-screen-2xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-surface-container-lowest p-6 md:p-10 rounded-xl shadow-xl md:shadow-2xl shadow-on-surface/5 flex flex-col items-center text-center">
              <span className="text-secondary font-headline text-4xl md:text-5xl font-black mb-2">90%</span>
              <p className="text-on-surface-variant font-medium text-sm md:text-base">Employment Rate within 6 months</p>
            </div>
            <div className="bg-surface-container-lowest p-6 md:p-10 rounded-xl shadow-xl md:shadow-2xl shadow-on-surface/5 flex flex-col items-center text-center">
              <span className="text-secondary font-headline text-4xl md:text-5xl font-black mb-2">100+</span>
              <p className="text-on-surface-variant font-medium text-sm md:text-base">Research Papers Published Annually</p>
            </div>
            <div className="bg-surface-container-lowest p-6 md:p-10 rounded-xl shadow-xl md:shadow-2xl shadow-on-surface/5 flex flex-col items-center text-center">
              <span className="text-secondary font-headline text-4xl md:text-5xl font-black mb-2">5000+</span>
              <p className="text-on-surface-variant font-medium text-sm md:text-base">Global Alumni Network</p>
            </div>
          </div>
        </section>
        {/* Path Cards (Editorial Grid) */}
        <section className="py-16 md:py-24 max-w-screen-2xl mx-auto px-4 md:px-8">
          <div className="mb-12 md:mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-primary mb-4">Your Journey Starts Here</h2>
            <div className="w-20 md:w-24 h-1 bg-secondary rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Admissions */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl h-[350px] md:h-[450px] mb-6 shadow-md">
                <img alt="Admissions" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Group of smiling university students from diverse backgrounds walking and talking in a modern campus corridor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwJe1M__1mA9uhqTUkrphSFZx35_mgIbhKBsIIeAF5c6uF7QaHApQwgFP8lkmQTqvdJrdCwIlD2xzzW6frvH2YeNTX2aSihxC_vqsLzvrzxdtCXNDkvL8kZN10_JQWU6leXD7oyj12ngCks0skpWdnr2GDorZyqGPus28mctXcpXKBk6oZqyiYS9yvMC63yFoNaf5gZBJK7nRPAKfQWoxLHBUNmSAov2HeM92Hjkq99vco60-jm5qejFYCmtbgLrah6oAyzFA1" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
                <div className="absolute bottom-6 md:bottom-8 left-6 md:right-8">
                  <span className="material-symbols-outlined text-secondary-container text-3xl md:text-4xl mb-4">school</span>
                  <h3 className="text-white font-headline text-2xl md:text-3xl font-bold">Admissions</h3>
                </div>
              </div>
              <p className="text-on-surface-variant leading-relaxed mb-4 text-sm md:text-base">Join a community of scholars. Explore our financial aid programs and application process.</p>
              <Link href="/admissions" className="text-primary font-bold inline-flex items-center group-hover:gap-3 transition-all text-sm md:text-base">Learn More <span className="material-symbols-outlined ml-2 scale-75 md:scale-100">arrow_forward</span></Link>
            </div>
            {/* Academic Programs */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl h-[350px] md:h-[450px] mb-6 shadow-md">
                <img alt="Academics" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Close-up of engineering students working with high-tech robotics and circuitry in a bright laboratory" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzZjuzYz8hc6W7744K_apaLpXdGWgjbmTsT86Rr-dPdjDCQTj2hgaoZmnea8ozS-KiJcGI8vOOaLbK9Zdojr9K1LEqsmp23UCnjo0OofLWqM0wYTt0Aty0KBUS_2xfb1RG_ljWeE342p1Sb_1Gz7MiWJkj4Yje7ovV5maGJh1Lt_Kn_Zz-S8lQMe9gI_LGXj-fUxF3vxiVuv3sEeQJzAhjyCe2TL65OCMml3c5vhTS6Jda3tK6xloCslzqiftL-WWkycEwpeHl" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
                <div className="absolute bottom-6 md:bottom-8 left-6 md:right-8">
                  <span className="material-symbols-outlined text-secondary-container text-3xl md:text-4xl mb-4">science</span>
                  <h3 className="text-white font-headline text-2xl md:text-3xl font-bold">Academic Programs</h3>
                </div>
              </div>
              <p className="text-on-surface-variant leading-relaxed mb-4 text-sm md:text-base">World-class education in Computer Science, Engineering, and Agribusiness Management.</p>
              <Link href="/academics" className="text-primary font-bold inline-flex items-center group-hover:gap-3 transition-all text-sm md:text-base">Explore Degrees <span className="material-symbols-outlined ml-2 scale-75 md:scale-100">arrow_forward</span></Link>
            </div>
            {/* Campus Life */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl h-[350px] md:h-[450px] mb-6 shadow-md">
                <img alt="Campus Life" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Vibrant outdoor campus scene with students studying on green lawns in front of modern brick university buildings" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCksCteDoTB6CpRUh1NJYbZtcmAUTJ5PgVq6kbytz27X22FJfEq980ErmbKjRH6vbQTm4nrGOVcXS8I2qAw3gRFylTd0e9yAzBHaD5QjsUcxrOZHPfS8TmA_tbfIFgybS85kFsLUgs0rBg6TVIIYp47uhATUrz616VbgiuoFbQ-HO4pu9ffVURDHl_OGttw4UGH95W169L0jiuxBTsxpGz0fw3zdOg5hgPzVEVaTClVGtCBUShxr8J_TzoQgA3li2mx2le0C8d" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
                <div className="absolute bottom-6 md:bottom-8 left-6 md:right-8">
                  <span className="material-symbols-outlined text-secondary-container text-3xl md:text-4xl mb-4">diversity_3</span>
                  <h3 className="text-white font-headline text-2xl md:text-3xl font-bold">Campus Life</h3>
                </div>
              </div>
              <p className="text-on-surface-variant leading-relaxed mb-4 text-sm md:text-base">Beyond the classroom—experience a vibrant ecosystem of societies, sports, and culture.</p>
              <Link href="/student-life" className="text-primary font-bold inline-flex items-center group-hover:gap-3 transition-all text-sm md:text-base">See Life at Namal <span className="material-symbols-outlined ml-2 scale-75 md:scale-100">arrow_forward</span></Link>
            </div>
          </div>
        </section>
        {/* News & Updates Section (Horizontal Scroll/Carousel Design) */}
        <section className="bg-surface-container-low py-16 md:py-24">
          <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-10 md:mb-12 gap-6">
              <div>
                <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-primary mb-3 md:mb-4">News &amp; Updates</h2>
                <p className="text-on-surface-variant text-sm md:text-base">Stay updated with the latest happenings at the knowledge city.</p>
              </div>
              <div className="flex gap-4">
                <button className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-white transition-colors">
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-white transition-colors">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
            <div className="flex gap-6 md:gap-8 overflow-x-auto pb-8 snap-x no-scrollbar">
              {/* News Card 1 */}
              <div className="min-w-[280px] sm:min-w-[340px] md:min-w-[400px] snap-start bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm">
                <div className="h-48 md:h-56 relative">
                  <img alt="Convocation" className="w-full h-full object-cover" data-alt="Wide shot of a formal university graduation ceremony with faculty in robes and students in caps and gowns" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFrK1KhZtyUQbVP1c5tsShpIPL7xAlSb4O7O00E3XInaoIE5VcAGZfRMUrnjMIpuC7Uy_RfGpTJshwu0_RCg3pwTmbTO4tudoVGs13W-oHQsr31p4gcL3_rmbmx5DwFHz03HlXPbGa70GxT7pjFNAkE-y5ZoaFaEPvr2Nhugo4SdCm-cnXy5NXxc7d58ZPyCHOlgKFx48dGZHdJhmw2Po8xZH6xXfMQysgBPJWXjylfI4PXqaOMq-ALV76gFIwZReKHTq-fv7t" />
                  <div className="absolute top-4 left-4 bg-secondary text-on-secondary px-3 py-1 rounded text-[10px] font-bold">ANNOUNCEMENT</div>
                </div>
                <div className="p-6 md:p-8">
                  <span className="text-on-surface-variant text-xs md:text-sm block mb-2 font-medium">March 15, 2024</span>
                  <h4 className="font-headline font-bold text-lg md:text-xl mb-3 md:mb-4 transition-colors">Namal University 20th Convocation Ceremony Announced</h4>
                  <p className="text-on-surface-variant text-xs md:text-sm line-clamp-2">Celebrating the achievements of the class of 2024 with honored guests and dignitaries from across the globe.</p>
                </div>
              </div>
              {/* News Card 2 */}
              <div className="min-w-[280px] sm:min-w-[340px] md:min-w-[400px] snap-start bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm">
                <div className="h-48 md:h-56 relative">
                  <img alt="Research Hub" className="w-full h-full object-cover" data-alt="Modern collaborative research space with students working on laptops and whiteboard diagrams" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDT4hRXBoVpa6B_qJ9Ya1R6WxXxLshjsb832m5u_g6GXLZL2n5WU9J_WG6H1I-2aHPHAlhWWJWbayiKas7XVxgiOnUR_SX2GBCYu7CE_4Zz36A5MQWVZ8UaEvXQ_siB2gVMOsx0WfpwTA2SYQreqnMq9GcG4gmd18uQq1CikGb7r4CAU6Dk3GwH4yUocr4d9Ho3Upd5Ehh_JwKINt0uYL5w2eohUACuqjKi22z9IpLK8QuDSmDJoh8ZxQwPXsB32zDamjDFBbla" />
                  <div className="absolute top-4 left-4 bg-secondary text-on-secondary px-3 py-1 rounded text-[10px] font-bold">RESEARCH</div>
                </div>
                <div className="p-6 md:p-8">
                  <span className="text-on-surface-variant text-xs md:text-sm block mb-2 font-medium">March 10, 2024</span>
                  <h4 className="font-headline font-bold text-lg md:text-xl mb-3 md:mb-4">Innovation Hub Grant: Strengthening Local Agribusiness</h4>
                  <p className="text-on-surface-variant text-xs md:text-sm line-clamp-2">Our research team secures a major international grant for developing sustainable irrigation technologies.</p>
                </div>
              </div>
              {/* News Card 3 */}
              <div className="min-w-[280px] sm:min-w-[340px] md:min-w-[400px] snap-start bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm">
                <div className="h-48 md:h-56 relative">
                  <img alt="Scholarships" className="w-full h-full object-cover" data-alt="Two students reviewing scholarship documents in a sunlit university library setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDle4zmFeo5_I6IcEvYkUk3u2sfUb58KPYgXt1F6-pQEgS_mecmj_bm7fFxleF0ID4nMV9F5d1nynqf94CYCsVWLnC_lA9ecfjn_3jieMLdDh7ilLDUThiVJKW9EZnh58akk4VXTD219XvlXxyQ5FjD1i8lLqoCiQYFF_G-UweXN51sungON520MP08CLo_Biqk1QJgZOUUN9w6mbPI1KW8kGaOnZfrlikV5QcwTaWgIEYEOOqWqQQW-ud_2yCWYL6S9xOvvSmf" />
                  <div className="absolute top-4 left-4 bg-secondary text-on-secondary px-3 py-1 rounded text-[10px] font-bold">ADMISSIONS</div>
                </div>
                <div className="p-6 md:p-8">
                  <span className="text-on-surface-variant text-xs md:text-sm block mb-2 font-medium">March 05, 2024</span>
                  <h4 className="font-headline font-bold text-lg md:text-xl mb-3 md:mb-4">Need-Based Scholarship Applications Open for Fall 2024</h4>
                  <p className="text-on-surface-variant text-xs md:text-sm line-clamp-2">Empowering talent regardless of financial background. Apply for full and partial scholarship programs.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-16 md:py-24 max-w-screen-2xl mx-auto px-4 md:px-8">
          <div className="bg-primary rounded-2xl md:rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-10 md:opacity-20 pointer-events-none">
              <img alt="Pattern" className="w-full h-full object-cover" data-alt="Abstract architectural lines and patterns of a modern concrete building under sharp sunlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA85Gg8ijggVZJ4LJIam0hCr5C8F3Rzc56YsZK33MApisVHwyzDYybVR7nk5Dt70O0jj6vXXzxX462EdFnCddtTqqGW7vKxr9vq5hW5Ya1FNSsGAFKGcqwLDerrW3vVzxLXIWkIwk5nZ1LPuKrxBLnhNyRWvnx4Oxhg6SgbLF0Syjz3ONDqM2w3TbNCeYwcxrjg1yc7Sc0fkVZy-W1NXv2JLKmMU2sHatv78TOsux9ZntYJQDz9cwQ-fajmMu1SoisBaecgB3Gx" />
            </div>
            <div className="relative z-10 lg:w-3/5">
              <h2 className="font-headline text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">Start Your Transformation Today</h2>
              <p className="text-white/80 text-base md:text-xl mb-8 md:mb-10 leading-relaxed font-light">Whether you are a prospective student, a researcher, or a donor, there's a place for you in our mission to build a brighter future.</p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                <Link href="/admissions" className="bg-secondary text-on-secondary px-8 py-3.5 md:py-4 rounded-xl font-headline font-bold text-base md:text-lg hover:scale-105 transition-transform flex items-center justify-center shadow-lg shadow-amber-500/20">Apply for Admission</Link>
                <Link href="/faculty" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-3.5 md:py-4 rounded-xl font-headline font-bold text-base md:text-lg hover:bg-white/20 transition-all flex items-center justify-center">Contact Faculty</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
