import React from "react";
import Image from "next/image";
import { CertificationBadges } from "@/components/CertificationBadges";
import { Award, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Certifications & Accreditation — IATA, ATAB, TOAB",
  description: "Travel Treasure is an accredited travel management company holding memberships with IATA, ATAB, and TOAB in Bangladesh.",
};

export default function CertificationsPage() {
  return (
    <div className="space-y-0">
      <section className="bg-brand-navy-dark text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=2070&auto=format&fit=crop"
            alt="Travel Agency Accreditation Industry Recognition"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-amber-500/20 text-brand-gold border border-brand-gold/40 text-xs font-bold uppercase tracking-wider">
            Official Travel Agency Credentials
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            Industry Recognition & Memberships
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Operating with full accreditation from international and national travel governing bodies.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-brand-navy">Accreditation Standards</h2>
            <p className="text-slate-600 text-sm">
              Our certifications guarantee complete regulatory compliance, GDS ticketing authority, and travel protection.
            </p>
          </div>

          <CertificationBadges />
        </div>
      </section>
    </div>
  );
}
