"use client";

import React, { useState } from "react";
import Image from "next/image";
import { QuoteModal } from "@/components/QuoteModal";
import { Users, CheckCircle2, Send, Calendar, Building, Globe } from "lucide-react";

export default function MiceServicesPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="space-y-0">
      <section className="bg-brand-navy-dark text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop"
            alt="MICE Corporate Events Conference Meeting Travel"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-amber-500/20 text-brand-gold border border-brand-gold/40 text-xs font-bold uppercase tracking-wider">
            Meetings • Incentives • Conferences • Events
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            MICE Services & Corporate Event Travel
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Complete travel management for meetings, incentives, conferences, trade exhibitions, and international group delegations.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block px-3 py-1 bg-amber-50 text-amber-800 text-xs font-bold rounded-full uppercase tracking-wider border border-amber-200">
                End-to-End Event Travel Management
              </span>
              <h2 className="text-3xl font-extrabold text-brand-navy">
                International Corporate Events & Group Logistics
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Organizing corporate retreats, annual dealer meets, trade show delegations, or executive summits requires complex travel coordination. Travel Treasure handles end-to-end MICE logistics.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  "Meetings Coordination",
                  "Incentive Travel Packages",
                  "Conferences",
                  "Exhibitions & Trade Fairs",
                  "Corporate Groups",
                  "Delegation Travel",
                  "Hotel Room Block Coordination",
                  "Ground Transportation Fleet",
                  "Airport Assistance & Greeters"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-xl border border-slate-200 text-xs font-bold text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
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
                  <span>Plan Your Corporate Event</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 relative h-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop"
                alt="Conference Auditorium MICE Event"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultService="MICE Services"
      />
    </div>
  );
}
