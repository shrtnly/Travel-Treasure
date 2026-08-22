"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ServiceCard } from "@/components/ServiceCard";
import { QuoteModal } from "@/components/QuoteModal";
import { CORE_SERVICES } from "@/data/companyData";
import { Send, ArrowRight, CheckCircle2, ShieldCheck, Headphones } from "lucide-react";

export default function ServicesPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Air Booking");

  const handleOpenQuote = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsQuoteOpen(true);
  };

  return (
    <div className="space-y-0">
      {/* Header Banner */}
      <section className="bg-brand-navy-dark text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop"
            alt="Corporate Travel Services Travel Treasure"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-amber-500/20 text-brand-gold border border-brand-gold/40 text-xs font-bold uppercase tracking-wider">
            Full Service Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            Our Corporate & Travel Services
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            From multi-GDS air booking and visa processing to hotel reservations, executive transfers, and VIP airport assistance.
          </p>
        </div>
      </section>

      {/* Grid of all Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-brand-navy">End-to-End Travel Management</h2>
            <p className="text-slate-600 text-sm">
              Click on any service card below to view detailed corporate specifications or request an immediate quote.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CORE_SERVICES.map((service, idx) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                shortDesc={service.shortDesc}
                iconName={service.icon}
                href={service.href}
                features={service.features}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Highlights: Foreign Dollar Endorsement & Expat Services */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Foreign Dollar Endorsement */}
          <div id="foreign-dollar" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center scroll-mt-24">
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-block px-3 py-1 bg-amber-50 text-amber-800 text-xs font-bold rounded-full uppercase tracking-wider border border-amber-200">
                Regulatory Support
              </span>
              <h3 className="text-2xl font-extrabold text-brand-navy">Foreign Dollar Endorsement Assistance</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Assistance with official foreign currency passport endorsement requirements for eligible business and leisure travelers in compliance with Bangladesh Bank regulations.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 font-semibold">
                <li className="flex items-center gap-2">✓ Bank passport endorsement documentation guidance</li>
                <li className="flex items-center gap-2">✓ Corporate traveler foreign exchange entitlement compliance</li>
                <li className="flex items-center gap-2">✓ Fast, hassle-free processing support</li>
              </ul>
              <button
                onClick={() => handleOpenQuote("Foreign Dollar Endorsement")}
                className="mt-2 bg-brand-navy text-white text-xs font-bold px-6 py-3 rounded-xl shadow hover:bg-brand-navy-dark transition-colors inline-flex items-center gap-2 border border-brand-gold/30"
              >
                <span>Request Endorsement Guidance</span>
                <Send className="w-3.5 h-3.5 text-brand-gold" />
              </button>
            </div>
            <div className="lg:col-span-6 relative h-72 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <Image
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=2071&auto=format&fit=crop"
                alt="Foreign Dollar Endorsement Currency Travel"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Expat Employee Services */}
          <div id="expat-services" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center scroll-mt-24 pt-10 border-t border-slate-100">
            <div className="lg:col-span-6 order-2 lg:order-1 relative h-72 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <Image
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop"
                alt="Expat Employee Corporate Travel Management"
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
              <span className="inline-block px-3 py-1 bg-amber-50 text-amber-800 text-xs font-bold rounded-full uppercase tracking-wider border border-amber-200">
                Multinational Account Support
              </span>
              <h3 className="text-2xl font-extrabold text-brand-navy">Expat Employees Management</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Work permits, security clearance, onboarding, offboarding, and specialized travel assignments for corporate staff and expatriate personnel.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 font-semibold">
                <li className="flex items-center gap-2">✓ Expat work permit visa coordination & security clearance</li>
                <li className="flex items-center gap-2">✓ Onboarding, offboarding & specialized assignments</li>
                <li className="flex items-center gap-2">✓ Dedicated corporate account officer management</li>
              </ul>
              <button
                onClick={() => handleOpenQuote("Expat Employees Management")}
                className="mt-2 bg-brand-navy text-white text-xs font-bold px-6 py-3 rounded-xl shadow hover:bg-brand-navy-dark transition-colors inline-flex items-center gap-2 border border-brand-gold/30"
              >
                <span>Setup Expat Account</span>
                <Send className="w-3.5 h-3.5 text-brand-gold" />
              </button>
            </div>
          </div>

          {/* Chartered Flight */}
          <div id="chartered-flight" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center scroll-mt-24 pt-10 border-t border-slate-100">
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-block px-3 py-1 bg-amber-50 text-amber-800 text-xs font-bold rounded-full uppercase tracking-wider border border-amber-200">
                Premium Air Services
              </span>
              <h3 className="text-2xl font-extrabold text-brand-navy">Chartered Flight Services</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                On-demand chartered flights for executive groups, private delegations, and time-sensitive itineraries tailored precisely to your schedule and operational requirements.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 font-semibold">
                <li className="flex items-center gap-2">✓ Executive & corporate group private chartering</li>
                <li className="flex items-center gap-2">✓ Flexible flight schedules & personalized routing</li>
                <li className="flex items-center gap-2">✓ Emergency evacuation & time-sensitive missions</li>
              </ul>
              <button
                onClick={() => handleOpenQuote("Chartered Flight")}
                className="mt-2 bg-brand-navy text-white text-xs font-bold px-6 py-3 rounded-xl shadow hover:bg-brand-navy-dark transition-colors inline-flex items-center gap-2 border border-brand-gold/30"
              >
                <span>Inquire About Flight Charter</span>
                <Send className="w-3.5 h-3.5 text-brand-gold" />
              </button>
            </div>
            <div className="lg:col-span-6 relative h-72 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <Image
                src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2071&auto=format&fit=crop"
                alt="Chartered Private Flight Service Travel Treasure"
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
        defaultService={selectedService}
      />
    </div>
  );
}
