"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname() || "";

  // Helper to format the path nicely
  const formatPath = (path: string) => {
    if (!path || path === "/") return "This Feature";
    
    // Remove leading slash and split by slashes
    const segments = path.slice(1).split("/");
    
    // Capitalize and format each segment
    const formattedSegments = segments.map((segment) => {
      return segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    });
    
    return formattedSegments.join(" • ");
  };

  const featureName = formatPath(pathname);

  return (
    <main className="min-h-screen pt-32 pb-24 flex items-center justify-center bg-surface relative overflow-hidden px-8">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-primary/5 rounded-br-full blur-3xl z-0" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/3 bg-secondary/5 rounded-tl-full blur-3xl z-0" />

      <div className="relative z-10 max-w-2xl w-full bg-surface-container-lowest p-12 rounded-[2rem] shadow-2xl shadow-on-surface/5 border border-outline-variant/10 text-center">
        <div className="w-20 h-20 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
          <span className="material-symbols-outlined text-secondary text-4xl" data-icon="construction">construction</span>
        </div>
        
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
          Working Perfectly — Feature in Development
        </span>
        
        <h1 className="font-headline text-4xl font-extrabold text-primary mb-4 tracking-tight">
          Details for: <br />
          <span className="text-secondary">{featureName}</span>
        </h1>
        
        <p className="text-on-surface-variant text-lg leading-relaxed mb-10 max-w-lg mx-auto">
          You've discovered a feature that is currently under construction! The rest of the Namal University website is working perfectly, but details for this specific section are being actively developed and will be available in the next major update.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={() => window.history.back()}
            className="bg-surface-container text-on-surface hover:bg-surface-container-highest px-8 py-4 rounded-xl font-headline font-bold transition-all flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Go Back
          </button>
          
          <Link 
            href="/" 
            className="bg-primary text-on-primary px-8 py-4 rounded-xl font-headline font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-all flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined">home</span>
            Return to Homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
