"use client";

import React, { useState } from "react";
import Image from "next/image";
import { QuoteModal } from "@/components/QuoteModal";
import { Globe, CheckCircle2, Send, Cpu, Zap, ShieldCheck, Database } from "lucide-react";

export default function OnlineBookingPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="space-y-0">
      <section className="bg-brand-navy-dark text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
            alt="Multi GDS Connectivity API Travel Engine Online Booking"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-amber-500/20 text-brand-gold border border-brand-gold/40 text-xs font-bold uppercase tracking-wider">
            Technology-Enabled Booking Architecture
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            Online Booking Services
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Our online booking capability is supported by multi-GDS connectivity and API-based solutions, helping us access a broad range of travel inventory and deliver efficient booking services.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block px-3 py-1 bg-amber-50 text-amber-800 text-xs font-bold rounded-full uppercase tracking-wider border border-amber-200">
                GDS & API Infrastructure
              </span>
              <h2 className="text-3xl font-extrabold text-brand-navy">
                Multi-GDS Connectivity & Real-Time Travel API Integration
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                By integrating Sabre, Amadeus, Travelport, and direct airline/hotel distribution APIs, Travel Treasure connects corporate travel managers with instant seat availability, dynamic flight routing, and live hotel inventory.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Multi-GDS Connectivity", desc: "Sabre & Amadeus GDS terminals" },
                  { title: "API Integration", desc: "Direct airline inventory feeds" },
                  { title: "Air Booking Engine", desc: "Instant seat selection & e-tickets" },
                  { title: "Hotel Booking Network", desc: "Negotiated rates worldwide" },
                  { title: "Corporate Travel Support", desc: "Policy rules & approvals" },
                  { title: "Fast Confirmation", desc: "Real-time PNR generation" }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                    <div className="flex items-center gap-2 font-bold text-brand-navy text-sm">
                      <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-slate-500 pl-6">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="bg-brand-navy hover:bg-brand-navy-dark text-white font-extrabold text-sm px-8 py-4 rounded-xl shadow-xl transition-all inline-flex items-center gap-3 border border-brand-gold/40"
                >
                  <Send className="w-4 h-4 text-brand-gold" />
                  <span>Request Online Booking Support</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-2xl space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <Cpu className="w-6 h-6 text-brand-gold" />
                    <h3 className="text-lg font-bold text-white">System Architecture</h3>
                  </div>
                  <span className="text-[10px] font-bold bg-emerald-500/20 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-500/30">
                    Live Status: Connected
                  </span>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
                    <span className="text-slate-300 font-semibold">GDS Provider 1: Sabre System</span>
                    <span className="text-brand-gold font-bold">Active Connection</span>
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
                    <span className="text-slate-300 font-semibold">GDS Provider 2: Amadeus Web Services</span>
                    <span className="text-brand-gold font-bold">Active Connection</span>
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
                    <span className="text-slate-300 font-semibold">Airline NDC & Direct API</span>
                    <span className="text-emerald-400 font-bold">Encrypted SSL</span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 leading-relaxed border-t border-slate-800 pt-4">
                  Travel Treasure offers corporate accounts centralized login access, digital PNR tracking, and automated invoice reconciliation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultService="Online Booking Services"
      />
    </div>
  );
}
