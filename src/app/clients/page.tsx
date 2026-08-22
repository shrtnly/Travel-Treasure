import React from "react";
import Image from "next/image";
import { ClientGrid } from "@/components/ClientGrid";
import { Building, ShieldCheck, Award } from "lucide-react";

export const metadata = {
  title: "Clients Portfolio — Trusted Corporate Accounts",
  description: "Travel Treasure serves leading financial institutions, corporate groups, and multinational enterprises in Bangladesh.",
};

export default function ClientsPage() {
  return (
    <div className="space-y-0">
      <section className="bg-brand-navy-dark text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="Corporate Clients Business District Skyline"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-amber-500/20 text-brand-gold border border-brand-gold/40 text-xs font-bold uppercase tracking-wider">
            Corporate Client Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            Trusted by Leading Organizations
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Building trusted relationships through reliable travel support, policy compliance, and dedicated corporate service.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-brand-navy">Our Corporate Partners</h2>
            <p className="text-slate-600 text-sm">
              We manage corporate travel requisitions for prominent banking institutions, industrial groups, and enterprise clients.
            </p>
          </div>

          <ClientGrid />
        </div>
      </section>
    </div>
  );
}
