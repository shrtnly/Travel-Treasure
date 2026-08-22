"use client";

import React, { useState } from "react";
import Image from "next/image";
import { QuoteModal } from "@/components/QuoteModal";
import { Car, CheckCircle2, Send, ShieldCheck, Clock } from "lucide-react";

export default function AirportTransferPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="space-y-0">
      <section className="bg-brand-navy-dark text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop"
            alt="Airport Chauffeur Transport Executive Sedan"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-amber-500/20 text-brand-gold border border-brand-gold/40 text-xs font-bold uppercase tracking-wider">
            Chauffeur-Driven Transport
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            Reliable Airport Transfer Services
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Punctual airport pickup and drop-off services for individual executives, corporate groups, and VIP delegations.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block px-3 py-1 bg-amber-50 text-amber-800 text-xs font-bold rounded-full uppercase tracking-wider border border-amber-200">
                Ground Transportation
              </span>
              <h2 className="text-3xl font-extrabold text-brand-navy">
                Punctual, Safe & Premium Chauffeur Services
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Travel Treasure ensures smooth airport transfers at Hazrat Shahjalal International Airport (Dhaka) and major international airports worldwide. Our professional chauffeurs monitor flight schedules to guarantee zero waiting time.
              </p>

              <div className="space-y-3">
                {[
                  "Punctual airport pickup and drop-off in Dhaka & international destinations",
                  "Modern fleet of premium sedans, executive SUVs, and microbuses",
                  "Real-time flight tracking for delayed or early flight arrivals",
                  "Professional uniformed drivers with English language proficiency",
                  "Luggage handling and dedicated door-to-door transportation",
                  "Corporate monthly invoicing and transparent fixed pricing"
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
                  <span>Book Airport Transfer</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 relative h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1974&auto=format&fit=crop"
                alt="Chauffeur Luxury Car Airport Transfer"
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
        defaultService="Airport Transfer"
      />
    </div>
  );
}
