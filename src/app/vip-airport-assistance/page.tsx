"use client";

import React, { useState } from "react";
import Image from "next/image";
import { QuoteModal } from "@/components/QuoteModal";
import { Crown, CheckCircle2, Send, ShieldCheck, Sparkles, UserCheck } from "lucide-react";

export default function VipAirportAssistancePage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="space-y-0">
      <section className="bg-brand-navy-dark text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop"
            alt="VIP Airport Assistance Executive Greeter Lounge"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-amber-500/20 text-brand-gold border border-brand-gold/40 text-xs font-bold uppercase tracking-wider">
            Premium Executive Greeter Service
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            VIP Airport Assistance
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            A premium service offering personalized airport assistance by professional greeters, ensuring a smooth, comfortable, and hassle-free journey.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block px-3 py-1 bg-amber-50 text-amber-800 text-xs font-bold rounded-full uppercase tracking-wider border border-amber-200">
                Exclusive Airport Greeters
              </span>
              <h2 className="text-3xl font-extrabold text-brand-navy">
                Fast-Track Navigation & Dedicated Greeters
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Designed for C-suite executives, international dignitaries, state guests, and high-net-worth individuals, Travel Treasure VIP Airport Assistance removes queues, delays, and airport stress.
              </p>

              <div className="space-y-3">
                {[
                  "Personalized Meet & Greet at airport terminal gate or curb",
                  "Professional Airport Assistance & personal escort",
                  "Smooth & Expedited Airport Navigation through security & immigration",
                  "Executive Traveler Support & luggage porterage handling",
                  "Arrival & Departure Assistance with executive lounge access coordination"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="bg-brand-gold hover:bg-brand-gold-dark text-brand-navy font-extrabold text-sm px-8 py-4 rounded-xl shadow-xl transition-all inline-flex items-center gap-3 border border-amber-300"
                >
                  <Crown className="w-4 h-4 text-brand-navy" />
                  <span>Reserve VIP Airport Service</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-slate-50 rounded-3xl p-8 border-2 border-brand-gold/40 shadow-corporate space-y-6">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-brand-gold flex items-center justify-center border border-amber-200">
                  <Crown className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy">What's Included in VIP Assistance</h3>
                <ul className="space-y-3 text-xs text-slate-600">
                  <li className="p-3 bg-white rounded-xl border border-slate-200 font-semibold text-slate-800">
                    👑 Gate-Side Personal Assistant Greeting upon arrival
                  </li>
                  <li className="p-3 bg-white rounded-xl border border-slate-200 font-semibold text-slate-800">
                    ✈️ Priority Fast-Track Immigration & Security Clearance
                  </li>
                  <li className="p-3 bg-white rounded-xl border border-slate-200 font-semibold text-slate-800">
                    🧳 Dedicated Luggage Porter & Conveyor Collection
                  </li>
                  <li className="p-3 bg-white rounded-xl border border-slate-200 font-semibold text-slate-800">
                    🛋️ Access to CIP/VIP Airport Lounges
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultService="VIP Airport Assistance"
      />
    </div>
  );
}
