"use client";

import React, { useState } from "react";
import Image from "next/image";
import { QuoteModal } from "@/components/QuoteModal";
import { FileCheck, CheckCircle2, Send, ShieldCheck, Clock, FileText } from "lucide-react";

export default function VisaProcessingPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="space-y-0">
      <section className="bg-brand-navy-dark text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1974&auto=format&fit=crop"
            alt="Visa Processing Travel Documents Passport"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-amber-500/20 text-brand-gold border border-brand-gold/40 text-xs font-bold uppercase tracking-wider">
            Consular & Embassy Support
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            Professional Visa Processing Services
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Professional assistance for visa documentation, embassy appointment scheduling, and application guidance.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block px-3 py-1 bg-amber-50 text-amber-800 text-xs font-bold rounded-full uppercase tracking-wider border border-amber-200">
                Documentation & Compliance
              </span>
              <h2 className="text-3xl font-extrabold text-brand-navy">
                Hassle-Free Visa Application Guidance for Business & Personal Travel
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Navigating complex visa requirements across different embassies requires expert document verification and precise submission timelines. Travel Treasure guides business travelers and corporate delegations through every step.
              </p>

              <div className="space-y-3">
                {[
                  "Business & Commercial Visa processing support",
                  "Tourist & Family Visit Visa documentation checks",
                  "Embassy appointment booking & biometric scheduling",
                  "Schengen, UK, USA, Canada, Australia, Japan, China & ASEAN visas",
                  "Invitation letter review & official corporate cover letter drafting support",
                  "Passport tracking and courier delivery coordination"
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
                  <span>Request Visa Support</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-corporate space-y-4">
                <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
                  <FileText className="w-6 h-6 text-brand-gold" />
                  <h3 className="text-xl font-bold text-brand-navy">Our Visa Process</h3>
                </div>

                <div className="space-y-4 text-xs text-slate-600">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <span className="font-bold text-brand-navy block text-sm">Step 1: Document Checklist</span>
                    Detailed guidance on required financial, employment, and invitation documents according to embassy rules.
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <span className="font-bold text-brand-navy block text-sm">Step 2: Expert Review & Verification</span>
                    Our experienced visa consultants review your paperwork to eliminate errors or missing credentials.
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <span className="font-bold text-brand-navy block text-sm">Step 3: Appointment & Submission</span>
                    Booking official biometric appointment slots and guiding applicants through submission procedures.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultService="Visa Processing"
      />
    </div>
  );
}
