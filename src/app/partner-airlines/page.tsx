import React from "react";
import Image from "next/image";
import { AirlineGrid } from "@/components/AirlineGrid";
import { Plane, ShieldCheck, Globe } from "lucide-react";

export const metadata = {
  title: "Partner Airlines — Domestic & International Flight Networks",
  description: "Explore Travel Treasure's airline partners, including Biman Bangladesh, Emirates, Singapore Airlines, Qatar Airways, Saudia, US-Bangla, and leading carriers.",
};

export default function PartnerAirlinesPage() {
  return (
    <div className="space-y-0">
      <section className="bg-brand-navy-dark text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2094&auto=format&fit=crop"
            alt="International Airline Partners Aircraft Fleet"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-amber-500/20 text-brand-gold border border-brand-gold/40 text-xs font-bold uppercase tracking-wider">
            18+ Premier Carrier Networks
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            Our Partner Airlines
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Direct GDS ticketing and corporate fare agreements with premier national and international airlines.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-brand-navy">Extensive Flight Coverage</h2>
            <p className="text-slate-600 text-sm">
              We connect your travelers with top-tier airlines operating across Asia, Europe, Middle East, Americas, and worldwide destinations.
            </p>
          </div>

          <AirlineGrid />
        </div>
      </section>
    </div>
  );
}
