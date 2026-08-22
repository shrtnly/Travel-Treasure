"use client";

import React, { useState } from "react";
import Image from "next/image";
import { QuoteModal } from "@/components/QuoteModal";
import { AirlineGrid } from "@/components/AirlineGrid";
import { Plane, CheckCircle2, Send, ShieldCheck, Globe, Clock } from "lucide-react";

export default function AirBookingPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="space-y-0">
      <section className="bg-brand-navy-dark text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=2070&auto=format&fit=crop"
            alt="Air Ticketing Flight Booking Corporate Travel"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-amber-500/20 text-brand-gold border border-brand-gold/40 text-xs font-bold uppercase tracking-wider">
            IATA Accredited Ticketing Desk
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            Domestic & International Air Booking
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Direct multi-GDS connectivity (Sabre, Amadeus) delivering optimized flight routing, corporate fares, and instant ticketing.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block px-3 py-1 bg-amber-50 text-amber-800 text-xs font-bold rounded-full uppercase tracking-wider border border-amber-200">
                Air Ticketing Capabilities
              </span>
              <h2 className="text-3xl font-extrabold text-brand-navy">
                Global Airline Networks at Competitive Corporate Fares
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Whether booking executive class seats for C-suite leaders or coordinating group flights for international trade delegations, Travel Treasure accesses inventory across major carriers worldwide.
              </p>

              <div className="space-y-3">
                {[
                  "Domestic flights across Bangladesh (Dhaka, Chittagong, Cox's Bazar, Sylhet, etc.)",
                  "International routes across Asia, Europe, Middle East, Americas & Oceania",
                  "Multi-GDS connectivity for real-time seat availability & instant confirmation",
                  "Corporate negotiated fares, flexible ticket rules & baggage allowances",
                  "Seat selection, meal requests, frequent flyer integration & itinerary management",
                  "24/7 flight monitoring & instant emergency rebooking support"
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
                  <span>Request Flight Quote</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 relative h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1519074069444-1ba4e6b20892?q=80&w=1974&auto=format&fit=crop"
                alt="Aircraft Passenger Cabin Business Class Flight"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-8 pt-8 border-t border-slate-200">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h3 className="text-2xl font-bold text-brand-navy">Partner Airline Carriers</h3>
              <p className="text-xs text-slate-500">Access inventory from premier domestic and international airlines.</p>
            </div>
            <AirlineGrid />
          </div>
        </div>
      </section>

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultService="Air Booking"
      />
    </div>
  );
}
