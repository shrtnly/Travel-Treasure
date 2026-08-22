"use client";

import React, { useState } from "react";
import Image from "next/image";
import { QuoteModal } from "@/components/QuoteModal";
import { ShieldCheck, CheckCircle2, Send, HeartPulse, FileCheck } from "lucide-react";

export default function TravelInsurancePage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="space-y-0">
      <section className="bg-brand-navy-dark text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
            alt="Travel Insurance Medical Coverage Corporate Policy"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-amber-500/20 text-brand-gold border border-brand-gold/40 text-xs font-bold uppercase tracking-wider">
            Schengen & Worldwide Compliant Policies
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            International Travel Insurance
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Comprehensive medical and travel policy protection for business executives and international travelers.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block px-3 py-1 bg-amber-50 text-amber-800 text-xs font-bold rounded-full uppercase tracking-wider border border-amber-200">
                Risk Protection
              </span>
              <h2 className="text-3xl font-extrabold text-brand-navy">
                Complete Peace of Mind on Every Journey
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Travel Treasure provides official travel insurance policies meeting embassy requirements (including Schengen minimum €30,000 medical coverage) and protecting corporate travelers against unexpected medical or flight disruptions.
              </p>

              <div className="space-y-3">
                {[
                  "Schengen Embassy compliant medical insurance policies",
                  "Emergency medical expense & hospitalization coverage up to $50,000+",
                  "Trip cancellation, delay, or interruption compensation",
                  "Lost baggage, passport loss & flight delay reimbursement",
                  "24/7 Global emergency medical assistance helpline",
                  "Instant digital policy issuance & corporate annual multi-trip plans"
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
                  className="bg-brand-navy hover:bg-brand-navy-dark text-white font-extrabold text-sm px-8 py-4 rounded-xl shadow-xl transition-all inline-flex items-center gap-3 border border-brand-gold/40"
                >
                  <Send className="w-4 h-4 text-brand-gold" />
                  <span>Get Travel Insurance Policy</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 relative h-[380px] rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop"
                alt="Travel Protection Policy Document"
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
        defaultService="Travel Insurance"
      />
    </div>
  );
}
