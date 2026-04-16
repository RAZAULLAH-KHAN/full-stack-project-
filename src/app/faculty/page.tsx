import Link from "next/link";
import dbConnect from "@/lib/mongodb";
import Faculty from "@/models/Faculty";
import FacultyGrid from "@/components/FacultyGrid";

/**
 * Faculty Page — Server Component (async)
 * ────────────────────────────────────────
 * Directly queries MongoDB to load faculty profiles.
 * The data is fetched on the server and passed to the client-side
 * FacultyGrid component for interactive filtering.
 */
export default async function Page() {
  await dbConnect();

  // If the database is empty, seed it with the original mock data
  const count = await Faculty.countDocuments();
  if (count === 0) {
    const mockFaculty = [
      {
        name: "Dr. Fatima Rizvi",
        title: "Dean of Engineering",
        department: "Electrical Engineering",
        expertise: ["AI", "Nanotechnology"],
        publications: [],
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjDc-R5O35XblJmkWFUJieMgMSTAzEoK6AnTafYW9vn9cCrm50CgvH8Aq8TYmAeb4Fa03zyyxyafYNyPivEz5MKuVool_FOMdhEC04EisbDNowVKIwMph0bzV6M2_AOlvhKBjJWX6KLmDgP8Clp5BtHYAofSQE0IJxtx2eg3XeXkpODYEH2tbywUykvo717In6fCLpJ8cyjeXXDCevjfGg74k7Nm5EH_fzqI6m2p_42NoxTCopCH65cCj5niVQdjJARDEfQ3X8",
        isActive: true,
      },
      {
        name: "Prof. Tariq Jamil",
        title: "Head of Computer Science",
        department: "Computer Science",
        expertise: ["Machine Learning", "Data Mining"],
        publications: [],
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFWVxNotznZkdDXnNzr85MiWw8BOPPd7uwJWovRv46mVNH64ZaRfkon4UYgo0I82hMPXNQICypvoa74acALIabE3IsLx7YFvuB0RlMzdeGC2tA6HicY0cO-XxlGjYT9y2DZbgB8Ud3vVvGZp8tg5718siHIhr3m78tXO-_vY2FOl8jaLVMu1g5tOHXrgPVFrvtOYf-4QQJPEFpvCAGEC0HovhFqLQMQIFrMVKvs1UdKrZvV9chE7aG5Pph73Uqk4NzUY2OHXpR",
        isActive: true,
      },
      {
        name: "Dr. Ayesha Khan",
        title: "Associate Professor",
        department: "Business Administration",
        expertise: ["Strategic Management", "Organizational Behavior"],
        publications: [],
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDA33DqRs8OBlDM2_y5g4yoQ7hdn0m44YtNMeTy9LIG0_84IDtlfCRRwf_yA8LfGDQxe4vPOhOwJDEVfuX4zCQVM5TL6YZt8A4jOLSR-5AUEXPsR9Nz5LoBykvB-nXhtjVY16Xty_DYVVWG52qkWQPuKdmGNLS4f8bQ2sNdGe8xTRz8be0Hpdr2446vBcsl9vXbYP3dqYInBLbEn4aSE-8fU2KXlGV9ZoVmsGFaulp-9wu0tuJV_7eg9UUnlUKv4Wl-shL6hh8I",
        isActive: true,
      },
      {
        name: "Dr. Usman Ali",
        title: "Assistant Professor",
        department: "Mathematics",
        expertise: ["Applied Mathematics", "Cryptography"],
        publications: [],
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBF8IHMllwy4S4Q95aR48oQjc7vbhRzJpvNAMkXJ-GPB1-02HTwSFJDdVY3FjJUhCG0fwCKc1xnoUnVaknYwO6HdlZTFUlFwjJaT7GPOKY5O3e4p8enBj6EeiVQ0FhaKLFmSARwdRQWNfeCvLU0HHO_-zNhSjSgWGHltsYfxBlxn86z98osB-wsbBvXZXxlb2ATpmQ5HIw96eMDDRXDCIbgKB6zvneqVT1ne2dndT6ZeF09_uh8J0Reo1W2E4FADQPzX5hIAlvE",
        isActive: true,
      },
      {
        name: "Dr. Zain Malik",
        title: "Assistant Professor",
        department: "Electrical Engineering",
        expertise: ["Control Systems", "Robotics"],
        publications: [],
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnsX38xTzR5lS_yY_m_zXb-_o5PxtqN5C8KzTq-_E9v2LzJ98ZcxH16gqU2E8nL3u37xJzj7Lw4Q7mYl3S4w3P6o3B6B9WbY1D4mQ8tD4w1n0s17N-Pzj99YVq3b2y2T35J-bJ64fH9_B0zDzU3k3FfM7kS1vRnC6vM6QfO2iS39T8c4N3Z4J1A6Dq-0W5A6I_2B",
        isActive: true,
      },
      {
        name: "Dr. Amna Pervez",
        title: "Assistant Professor",
        department: "Computer Science",
        expertise: ["Cybersecurity", "Cloud Tech"],
        publications: [],
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1ID6fpnh1FlbsVpmO31OtgSVfwwf-HwO94_CJPx8FfLjtfzBYKXhGhZCR3vUdfFgQzMkTPNVr-Xsnp3eDbDfth6Qly5bNH7uLTx1KaZCAgsTuY5tHIl7178axAujoqSUz38n1b-Lny6hhuJ3sRhEna0CZVXG9EaTmUXPwrBt4A9wOwjsIqPBttU5xmX9icuc2rMTLNAREfg9gM3dfJaoP3e4eLtSQCCm9meBWHzA5wAO22tplXsK_-gQNUtUBNW33W8CpD02N",
        isActive: true,
      }
    ];
    await Faculty.insertMany(mockFaculty);
  }

  const facultyData = await Faculty.find({ isActive: true })
    .sort({ name: 1 })
    .lean();

  // Serialize MongoDB documents for client component (convert _id to string, strip Mongoose internals)
  const serializedFaculty = facultyData.map((member) => ({
    _id: member._id.toString(),
    name: member.name,
    title: member.title,
    department: member.department,
    expertise: member.expertise || [],
    publications: (member.publications || []).map(
      (pub: { title: string; url: string }) => ({
        title: pub.title,
        url: pub.url,
      })
    ),
    imageUrl: member.imageUrl || "/images/default-faculty.png",
    bio: member.bio || "",
    email: member.email,
    isActive: member.isActive,
  }));

  return (
    <>
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
<img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-40" alt="Faculty campus" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSA1koi6VmJX593BqaCWw_AHrQLFSTXSzWPSIn5NGwvAuQidpi5T0twX6TbpovlgqfP1cRnkTCH7ZeY1a-QGNRgDPxtTN3NLOST8RhsYkBv66mABhtwqHQJyhZEisvyEvnNrtdlu2yfh735rGPQn8brM-vg8VO_CMWAt0LrgYzOspDU6Q299pB9vCkB2jOw9nHeixjxdE1kZED6NJ3kv5Xb4GhglnGjWdPhtl2oYC7lCOhCj16_a8vlqGtaqN0xilD9dT6fg7e"/>
</div>
<div className="relative z-10">
<h3 className="font-headline font-bold text-primary text-3xl">{serializedFaculty.length}+</h3>
<p className="text-sm font-label uppercase tracking-widest text-on-surface-variant">Faculty Members</p>
</div>
</div>
</div>
</header>

{/* Faculty Grid — data fetched from MongoDB, filtering handled on the client */}
<FacultyGrid facultyData={serializedFaculty} />

{/* Join the Faculty CTA */}
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
<Link href="/careers" className="bg-secondary-container text-on-secondary-container px-10 py-4 rounded-xl font-headline font-bold uppercase text-sm tracking-[0.1em] hover:scale-105 transition-transform flex items-center justify-center">
                            View Open Roles
                        </Link>
<Link href="/research/fellowship" className="border border-outline-variant text-on-primary px-10 py-4 rounded-xl font-headline font-bold uppercase text-sm tracking-[0.1em] hover:bg-on-primary/10 transition-colors flex items-center justify-center">
                            Research Fellows
                        </Link>
</div>
</div>
</div>
</section>
</main>
    </>
  );
}
