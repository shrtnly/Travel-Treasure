"use client";

import React, { useState } from "react";
import Image from "next/image";
import { QuoteModal } from "@/components/QuoteModal";
import { Building2, CheckCircle2, Send, ShieldCheck, Star } from "lucide-react";

export default function HotelReservationPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="space-y-0">
      <section className="bg-brand-navy-dark text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
            alt="Luxury Corporate Hotel Executive Suite Booking"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-amber-500/20 text-brand-gold border border-brand-gold/40 text-xs font-bold uppercase tracking-wider">
            Worldwide Accommodation Inventory
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            Hotel & Accommodation Reservation
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Comfortable and convenient hotel accommodations worldwide with negotiated corporate rates and executive amenities.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block px-3 py-1 bg-amber-50 text-amber-800 text-xs font-bold rounded-full uppercase tracking-wider border border-amber-200">
                Business Accommodation
              </span>
              <h2 className="text-3xl font-extrabold text-brand-navy">
                Corporate Hotel Network & Negotiated Rates
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                From 5-star international luxury chains (Marriott, Hilton, InterContinental, Hyatt) to curated business boutique hotels and extended-stay serviced apartments, Travel Treasure provides seamless room reservations.
              </p>

              <div className="space-y-3">
                {[
                  "Negotiated corporate rates with leading global hotel chains",
                  "Early check-in & late check-out privileges for business travelers",
                  "Complimentary breakfast, Wi-Fi & executive lounge privileges",
                  "Group hotel allotments for conferences, MICE events & delegations",
                  "Centralized monthly billing for corporate account partners",
                  "Flexible cancellation policies & instant confirmation vouchers"
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
                  <span>Reserve Hotel Accommodations</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 relative h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2025&auto=format&fit=crop"
                alt="Hotel Executive Lounge Business Traveler"
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
        defaultService="Hotel Reservation"
      />
    </div>
  );
}
