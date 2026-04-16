"use client";

import { useEffect, useState } from "react";

interface FacultyMember {
  _id: string;
  name: string;
  title: string;
  department: string;
  expertise: string[];
  publications: { title: string; url: string }[];
  imageUrl: string;
  bio?: string;
  email: string;
  isActive: boolean;
}

/**
 * Client component that handles the interactive filter UI.
 * Receives dynamically loaded faculty data from the Server Component.
 */
export default function FacultyGrid({
  facultyData,
}: {
  facultyData: FacultyMember[];
}) {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Derive unique departments from actual data
  const departments = Array.from(
    new Set(facultyData.map((f) => f.department))
  );

  // Filter faculty based on department + search query
  const filteredFaculty = facultyData.filter((member) => {
    const matchesDept = filter === "all" || member.department === filter;
    const matchesSearch =
      searchQuery === "" ||
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.expertise.some((e) =>
        e.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesDept && matchesSearch;
  });

  // Placeholder images for faculty
  const placeholderImages = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDjDc-R5O35XblJmkWFUJieMgMSTAzEoK6AnTafYW9vn9cCrm50CgvH8Aq8TYmAeb4Fa03zyyxyafYNyPivEz5MKuVool_FOMdhEC04EisbDNowVKIwMph0bzV6M2_AOlvhKBjJWX6KLmDgP8Clp5BtHYAofSQE0IJxtx2eg3XeXkpODYEH2tbywUykvo717In6fCLpJ8cyjeXXDCevjfGg74k7Nm5EH_fzqI6m2p_42NoxTCopCH65cCj5niVQdjJARDEfQ3X8",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDFWVxNotznZkdDXnNzr85MiWw8BOPPd7uwJWovRv46mVNH64ZaRfkon4UYgo0I82hMPXNQICypvoa74acALIabE3IsLx7YFvuB0RlMzdeGC2tA6HicY0cO-XxlGjYT9y2DZbgB8Ud3vVvGZp8tg5718siHIhr3m78tXO-_vY2FOl8jaLVMu1g5tOHXrgPVFrvtOYf-4QQJPEFpvCAGEC0HovhFqLQMQIFrMVKvs1UdKrZvV9chE7aG5Pph73Uqk4NzUY2OHXpR",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDA33DqRs8OBlDM2_y5g4yoQ7hdn0m44YtNMeTy9LIG0_84IDtlfCRRwf_yA8LfGDQxe4vPOhOwJDEVfuX4zCQVM5TL6YZt8A4jOLSR-5AUEXPsR9Nz5LoBykvB-nXhtjVY16Xty_DYVVWG52qkWQPuKdmGNLS4f8bQ2sNdGe8xTRz8be0Hpdr2446vBcsl9vXbYP3dqYInBLbEn4aSE-8fU2KXlGV9ZoVmsGFaulp-9wu0tuJV_7eg9UUnlUKv4Wl-shL6hh8I",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBF8IHMllwy4S4Q95aR48oQjc7vbhRzJpvNAMkXJ-GPB1-02HTwSFJDdVY3FjJUhCG0fwCKc1xnoUnVaknYwO6HdlZTFUlFwjJaT7GPOKY5O3e4p8enBj6EeiVQ0FhaKLFmSARwdRQWNfeCvLU0HHO_-zNhSjSgWGHltsYfxBlxn86z98osB-wsbBvXZXxlb2ATpmQ5HIw96eMDDRXDCIbgKB6zvneqVT1ne2dndT6ZeF09_uh8J0Reo1W2E4FADQPzX5hIAlvE",
  ];

  const getImage = (member: FacultyMember, index: number) => {
    if (member.imageUrl && !member.imageUrl.includes("default-faculty")) {
      return member.imageUrl;
    }
    return placeholderImages[index % placeholderImages.length];
  };

  return (
    <>
      {/* Search & Filter Bar */}
      <section className="mb-16 bg-surface-container-low rounded-xl p-4 flex flex-wrap items-center justify-between gap-6">
        <div className="flex-1 min-w-[300px] relative">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
            search
          </span>
          <input
            className="w-full pl-12 pr-4 py-3 bg-surface-container-lowest border-none rounded-lg focus:ring-2 focus:ring-secondary-container transition-all placeholder:text-outline-variant font-label text-sm"
            placeholder="Search by name or research interest..."
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
          <button
            className={`px-6 py-2.5 rounded-full text-xs font-bold font-label uppercase tracking-wider transition-colors ${
              filter === "all"
                ? "bg-primary text-on-primary"
                : "bg-surface-container-highest text-on-surface-variant hover:bg-surface-dim"
            }`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          {departments.map((dept) => (
            <button
              key={dept}
              className={`px-6 py-2.5 rounded-full text-xs font-bold font-label uppercase tracking-wider whitespace-nowrap transition-colors ${
                filter === dept
                  ? "bg-primary text-on-primary"
                  : "bg-surface-container-highest text-on-surface-variant hover:bg-surface-dim"
              }`}
              onClick={() => setFilter(dept)}
            >
              {dept}
            </button>
          ))}
        </div>
      </section>

      {/* Results count */}
      <p className="text-on-surface-variant text-sm mb-8">
        Showing {filteredFaculty.length} faculty member
        {filteredFaculty.length !== 1 ? "s" : ""}
        {filter !== "all" && ` in ${filter}`}
      </p>

      {/* Faculty Directory Grid — dynamically rendered from MongoDB */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredFaculty.length === 0 ? (
          <div className="col-span-full text-center py-20">
            <span className="material-symbols-outlined text-outline text-6xl mb-4">
              person_search
            </span>
            <h3 className="font-headline font-bold text-xl text-primary mb-2">
              No Faculty Found
            </h3>
            <p className="text-on-surface-variant">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        ) : (
          filteredFaculty.map((member, idx) => (
            <div
              key={member._id}
              className="group bg-surface-container-lowest rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              <div className="aspect-[3/4] overflow-hidden relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt={member.name}
                  src={getImage(member, idx)}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary text-on-secondary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {member.department}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-headline text-2xl font-bold text-primary group-hover:text-secondary transition-colors">
                  {member.name}
                </h3>
                <p className="text-on-surface-variant font-label text-sm font-medium mb-4">
                  {member.title}
                </p>
                {member.bio && (
                  <p className="text-on-surface-variant text-xs mb-4 line-clamp-2 italic">
                    {member.bio}
                  </p>
                )}
                <div className="mt-auto">
                  <p className="text-xs font-bold uppercase tracking-widest text-outline mb-2">
                    Research Interests
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2 py-1 bg-surface-container rounded-lg text-on-surface"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                {member.publications.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-outline-variant/10">
                    <p className="text-xs font-bold uppercase tracking-widest text-outline mb-2">
                      Publications
                    </p>
                    {member.publications.slice(0, 2).map((pub) => (
                      <a
                        key={pub.url}
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary hover:text-secondary transition-colors block truncate"
                      >
                        → {pub.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
