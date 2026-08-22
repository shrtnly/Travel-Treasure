"use client";

import React, { useState } from "react";
import Image from "next/image";
import { QuoteModal } from "@/components/QuoteModal";
import { COMPANY_INFO } from "@/data/companyData";
import { CheckCircle2, Send, ShieldCheck, Briefcase, Users, Phone, Building2 } from "lucide-react";

export default function CorporateTravelPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="space-y-0">
      {/* Banner */}
      <section className="bg-brand-navy-dark text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
            alt="Corporate Travel Management Business Executive"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-amber-500/20 text-brand-gold border border-brand-gold/40 text-xs font-bold uppercase tracking-wider">
            Primary Specialization
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            Corporate Travel Solutions
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Smarter travel management for modern businesses in Bangladesh and worldwide.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block px-3 py-1 bg-amber-50 text-amber-800 text-xs font-bold rounded-full uppercase tracking-wider border border-amber-200">
                Managed Travel Governance
              </span>
              <h2 className="text-3xl font-extrabold text-brand-navy">
                Streamline Your Company's Business Travel Operations
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Travel Treasure helps organizations manage business travel efficiently with coordinated booking, accommodation, visa assistance, airport transportation and dedicated travel support.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Air Ticketing",
                  "Hotel Accommodation",
                  "Visa Assistance",
                  "Airport Transfers",
                  "Executive Travel",
                  "Expat Employee Travel",
                  "Travel Insurance",
                  "Corporate Travel Support",
                  "MICE Management"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-sm font-semibold text-brand-navy">
                    <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="bg-brand-navy hover:bg-brand-navy-dark text-white font-extrabold text-sm px-8 py-4 rounded-xl shadow-xl transition-all inline-flex items-center gap-3 border border-brand-gold/40"
                >
                  <Send className="w-4 h-4 text-brand-gold" />
                  <span>Talk to Our Corporate Travel Team</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-corporate space-y-6">
                <h3 className="text-xl font-bold text-brand-navy border-b border-slate-200 pb-3">
                  Why Corporate Clients Choose Us
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-brand-navy flex items-center justify-center shrink-0 border border-amber-200">
                      <Briefcase className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-brand-navy">Dedicated Account Officer</h4>
                      <p className="text-xs text-slate-600">A single point of contact assigned to handle all company travel requisitions and urgent modifications.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-brand-navy flex items-center justify-center shrink-0 border border-amber-200">
                      <ShieldCheck className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-brand-navy">Policy Compliance & Cost Optimization</h4>
                      <p className="text-xs text-slate-600">Enforcing corporate travel policies, ticket flexibility, fare negotiation, and transparent billing.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-brand-navy flex items-center justify-center shrink-0 border border-amber-200">
                      <Users className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-brand-navy">Expat & Group Mobility</h4>
                      <p className="text-xs text-slate-600">End-to-end relocation, visa, flight, and airport Meet & Greet support for international personnel.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span>Contact Corporate Desk:</span>
                  <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-brand-navy font-bold hover:underline">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultService="Corporate Travel Management"
      />
    </div>
  );
}
