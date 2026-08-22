"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { TrustBar } from "@/components/TrustBar";
import { ServiceCard } from "@/components/ServiceCard";
import { AirlineGrid } from "@/components/AirlineGrid";
import { ClientGrid } from "@/components/ClientGrid";
import { Timeline } from "@/components/Timeline";
import { CertificationBadges } from "@/components/CertificationBadges";
import { ExecutiveCards } from "@/components/ExecutiveCards";
import { QuoteModal } from "@/components/QuoteModal";
import { COMPANY_INFO, CORE_SERVICES } from "@/data/companyData";
import { 
  Send, ArrowRight, ShieldCheck, Clock, Zap, CheckCircle2, 
  MessageCircle, Phone, Award, Globe, Users, Building2, Crown, Sparkles 
} from "lucide-react";

export default function HomePage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState("Corporate Travel Management");

  const openQuote = (serviceName?: string) => {
    if (serviceName) setSelectedServiceForQuote(serviceName);
    setIsQuoteOpen(true);
  };

  return (
    <div className="space-y-0">
      {/* SECTION 1 — HERO */}
      <section className="relative min-h-[85vh] bg-brand-navy-dark text-white flex items-center overflow-hidden">
        {/* Background Image Overlay with Premium Dark Blue Gradient */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop"
            alt="International Executive Airport Terminal Corporate Travel"
            fill
            className="object-cover object-center opacity-30 mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-brand-navy-dark/95 to-slate-900/80"></div>
          <div className="absolute inset-0 bg-[radial-gradient(#E9B13D_1px,transparent_1px)] [background-size:32px_32px] opacity-10"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl space-y-8">
            {/* Trust Badges above Headline */}
            <div className="flex flex-wrap gap-3 items-center">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-brand-gold border border-brand-gold/40 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                <ShieldCheck className="w-4 h-4 text-brand-gold" />
                IATA & ATAB Accredited
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-slate-200 border border-white/20 text-xs font-semibold backdrop-blur-md">
                <Award className="w-4 h-4 text-amber-400" />
                Experienced Travel Professionals
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Your Journey, <span className="text-gold-gradient">Our Priority</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
              {COMPANY_INFO.subTagline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => openQuote("Corporate Travel Management")}
                className="bg-brand-gold hover:bg-brand-gold-dark text-brand-navy font-extrabold text-base px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 transform hover:-translate-y-0.5 border border-amber-300"
              >
                <Send className="w-5 h-5 text-brand-navy" />
                <span>Request a Quote</span>
              </button>

              <Link
                href="/services"
                className="bg-white/10 hover:bg-white/20 text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-3 border border-white/20 backdrop-blur-md"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-5 h-5 text-amber-400" />
              </Link>
            </div>

            {/* Key Quick Highlights */}
            <div className="pt-8 grid grid-cols-3 gap-4 border-t border-white/10 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Multi-GDS Connected</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>24/7 Dedicated Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>IATA Accredited</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — TRUST STRIP */}
      <TrustBar />

      {/* SECTION 3 — INTRODUCTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-block px-3 py-1 bg-amber-50 text-amber-800 text-xs font-bold rounded-full uppercase tracking-wider border border-amber-200">
                Corporate Excellence
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy leading-tight">
                Travel Made Simple. Business Made Easier.
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                At Travel Treasure, we make travel simple, comfortable, and personal. Since our journey began, we’ve helped individuals, families, and businesses travel with confidence through trusted service and expert guidance. Backed by a dedicated team of 15–20 travel professionals, multi-GDS connectivity, and 18 partner airlines, we deliver competitive fares, flexible options, and reliable travel solutions.
              </p>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-brand-navy text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md hover:bg-brand-navy-dark transition-all border border-brand-gold/30"
                >
                  <span>Discover Travel Treasure</span>
                  <ArrowRight className="w-4 h-4 text-brand-gold" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative h-[380px] sm:h-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
                  alt="Professional Corporate Traveler Executive Assistance"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-100 shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-navy text-brand-gold flex items-center justify-center font-bold text-xl">
                      10+
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-brand-navy">Years of Corporate Service</h4>
                      <p className="text-xs text-slate-500">Serving Bangladeshi & International Businesses</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — CORE SERVICES */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block px-3 py-1 bg-amber-100 text-brand-navy text-xs font-bold rounded-full uppercase tracking-wider">
              Comprehensive Travel Management
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy">
              Our Travel Services
            </h2>
            <p className="text-slate-600 text-sm">
              Tailored air ticketing, visa processing, accommodation, airport transfer, and corporate travel solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CORE_SERVICES.map((service, index) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                shortDesc={service.shortDesc}
                iconName={service.icon}
                href={service.href}
                features={service.features}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — WHY TRAVEL TREASURE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block px-3 py-1 bg-amber-100 text-brand-navy text-xs font-bold rounded-full uppercase tracking-wider">
              Corporate Value Proposition
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy">
              Why Businesses Choose Travel Treasure
            </h2>
            <p className="text-slate-600 text-sm">
              Six key reasons why corporate accounts trust Travel Treasure for their end-to-end travel logistics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Fast Response",
                desc: "24/7 WhatsApp support for quick travel assistance, instant ticketing updates, and emergency rebooking.",
                icon: Zap
              },
              {
                num: "02",
                title: "Global Connectivity",
                desc: "Multi-GDS connectivity (Sabre, Amadeus) and direct airline partnerships for extensive global booking options.",
                icon: Globe
              },
              {
                num: "03",
                title: "Personalized Solutions",
                desc: "Travel arrangements tailored precisely to individual traveler preferences and corporate travel policies.",
                icon: Sparkles
              },
              {
                num: "04",
                title: "Corporate Expertise",
                desc: "Professional travel support designed around executive requirements, cost-efficiencies, and priority handling.",
                icon: Building2
              },
              {
                num: "05",
                title: "End-to-End Support",
                desc: "From initial travel requirement and visa guidance to safe return, we support every stage of the journey.",
                icon: ShieldCheck
              },
              {
                num: "06",
                title: "Local & Multinational Support",
                desc: "Travel solutions designed to support both local Bangladeshi businesses and multinational organizations.",
                icon: Users
              }
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-2xl p-8 border border-slate-200/80 hover:bg-white hover:shadow-corporate-hover hover:border-brand-gold/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-brand-navy text-brand-gold flex items-center justify-center group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-slate-300 group-hover:text-amber-500 transition-colors">
                      {item.num}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 6 — CORPORATE TRAVEL */}
      <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block px-3 py-1 bg-amber-500/20 text-brand-gold text-xs font-bold rounded-full uppercase tracking-wider border border-brand-gold/40">
                Core Specialization
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
                Corporate Travel Solutions
              </h2>
              <p className="text-amber-400 font-semibold text-base">
                Smarter travel management for modern businesses.
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Travel Treasure helps organizations manage business travel efficiently with coordinated booking, accommodation, visa assistance, airport transportation and dedicated travel support.
              </p>

              {/* Visual List */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  "Air Ticketing", "Hotel Accommodation", "Visa Assistance", 
                  "Airport Transfers", "Executive Travel", "Expat Employee Travel", 
                  "Travel Insurance", "Corporate Travel Support", "MICE Management"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-200 bg-white/5 p-2.5 rounded-lg border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => openQuote("Corporate Travel Management")}
                  className="bg-brand-gold hover:bg-brand-gold-dark text-brand-navy font-extrabold text-sm px-8 py-4 rounded-xl shadow-xl transition-all flex items-center gap-3 border border-amber-300"
                >
                  <Send className="w-4 h-4 text-brand-navy" />
                  <span>Talk to Our Corporate Travel Team</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
                  alt="Corporate Executive Meeting Travel Management"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/90 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — PREMIUM SERVICES (VIP & FAST RESPONSE) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-block px-3 py-1 bg-amber-100 text-brand-navy text-xs font-bold rounded-full uppercase tracking-wider">
              Executive Privilege
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy">
              More Than Just Travel
            </h2>
            <p className="text-slate-600 text-sm">
              Specialized high-touch services for VIP guests, business leaders, and rapid coordination.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* VIP AIRPORT ASSISTANCE CARD */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-brand-gold/40 shadow-xl relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 bg-brand-gold text-brand-navy text-[10px] font-black uppercase tracking-wider px-4 py-1.5 rounded-bl-2xl">
                VIP Exclusive
              </div>

              <div className="space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-amber-50 text-brand-gold flex items-center justify-center border border-amber-200">
                  <Crown className="w-8 h-8 text-brand-gold" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-brand-navy">VIP Airport Assistance</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2">
                    A premium service offering personalized airport assistance by professional greeters, ensuring a smooth, comfortable, and hassle-free journey.
                  </p>
                </div>

                <div className="space-y-2.5 pt-2">
                  {[
                    "Personalized Meet & Greet at terminal",
                    "Professional Airport Greeter & Assistance",
                    "Smooth & Expedited Airport Navigation",
                    "Executive Traveler Support",
                    "Dedicated Arrival & Departure Assistance"
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs text-slate-700 font-semibold">
                      <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                        ✓
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => openQuote("VIP Airport Assistance")}
                  className="w-full bg-brand-navy hover:bg-brand-navy-dark text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 border border-brand-gold/30"
                >
                  <Crown className="w-4 h-4 text-brand-gold" />
                  <span>Reserve VIP Assistance</span>
                </button>
              </div>
            </div>

            {/* FAST RESPONSE / 24/7 SUPPORT CARD */}
            <div className="bg-emerald-950 text-white rounded-3xl p-8 sm:p-10 border border-emerald-800/80 shadow-xl relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-900/60 text-emerald-400 flex items-center justify-center border border-emerald-700">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <div>
                  <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-bold rounded-full uppercase tracking-wider mb-2 border border-emerald-500/30">
                    24/7 WhatsApp Support
                  </span>
                  <h3 className="text-2xl font-extrabold text-white">Fast Response, Whenever You Need Us</h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-2">
                    Travel plans can change quickly. Our team provides 24/7 WhatsApp support for quick assistance, updates and travel coordination.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                    <Clock className="w-4 h-4" />
                    <span>Instant Direct Response Time</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Direct access to flight rebookings, schedule modifications, seat preferences, and urgent travel guidance via WhatsApp.
                  </p>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold py-3.5 px-6 rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <MessageCircle className="w-5 h-5 fill-white/20" />
                  <span>Chat With Us on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — MICE SERVICES */}
      <section className="py-24 bg-brand-navy-dark text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block px-3 py-1 bg-amber-500/20 text-brand-gold text-xs font-bold rounded-full uppercase tracking-wider border border-brand-gold/40">
              Meetings • Incentives • Conferences • Events
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              MICE Services
            </h2>
            <p className="text-slate-300 text-sm">
              Complete travel management for meetings, incentives, conferences and events globally.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-12">
            {[
              "Meetings", "Incentive Travel", "Conferences",
              "Exhibitions", "Corporate Groups", "Delegation Travel",
              "Hotel Coordination", "Transportation", "Airport Assistance"
            ].map((mice, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center hover:bg-white/10 hover:border-brand-gold/60 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-brand-gold mx-auto mb-3 flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">{mice}</h4>
                <p className="text-xs text-slate-400 mt-1">End-to-End Execution</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => openQuote("MICE Services")}
              className="bg-brand-gold hover:bg-brand-gold-dark text-brand-navy font-extrabold text-base px-8 py-4 rounded-xl shadow-xl transition-all inline-flex items-center gap-3 border border-amber-300"
            >
              <Send className="w-5 h-5 text-brand-navy" />
              <span>Plan Your Corporate Event</span>
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 9 — TRAVEL PROCESS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-block px-3 py-1 bg-amber-100 text-brand-navy text-xs font-bold rounded-full uppercase tracking-wider">
              Seamless Workflow
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy">
              From Requirement to Safe Return
            </h2>
            <p className="text-slate-600 text-sm">
              Our structured 6-step corporate travel process ensures complete clarity and peace of mind.
            </p>
          </div>

          <Timeline />
        </div>
      </section>

      {/* SECTION 10 — AIRLINE PARTNERS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-block px-3 py-1 bg-amber-100 text-brand-navy text-xs font-bold rounded-full uppercase tracking-wider">
              Global Flight Inventory
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy">
              Our Partner Airlines
            </h2>
            <p className="text-slate-600 text-sm">
              Direct access to leading national and international carrier networks across domestic and worldwide routes.
            </p>
          </div>

          <AirlineGrid />
        </div>
      </section>

      {/* SECTION 11 — CLIENTS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-block px-3 py-1 bg-amber-100 text-brand-navy text-xs font-bold rounded-full uppercase tracking-wider">
              Proven Corporate Relationships
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy">
              Trusted by Leading Organizations
            </h2>
          </div>

          <ClientGrid />
        </div>
      </section>

      {/* SECTION 12 — CERTIFICATIONS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-block px-3 py-1 bg-amber-100 text-brand-navy text-xs font-bold rounded-full uppercase tracking-wider">
              Official Accreditation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy">
              Industry Recognition & Memberships
            </h2>
          </div>

          <CertificationBadges />
        </div>
      </section>

      {/* SECTION 13 — MANAGEMENT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-block px-3 py-1 bg-amber-100 text-brand-navy text-xs font-bold rounded-full uppercase tracking-wider">
              Executive Governance
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy">
              Leadership
            </h2>
            <p className="text-slate-600 text-sm">
              Guided by experienced industry executives dedicated to corporate service quality.
            </p>
          </div>

          <ExecutiveCards />
        </div>
      </section>

      {/* SECTION 14 — CONTACT BANNER */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-brand-navy via-brand-navy-dark to-slate-900 rounded-3xl p-10 sm:p-16 text-white text-center space-y-6 shadow-2xl relative overflow-hidden border border-brand-gold/30">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Ready to Upgrade Your Corporate Travel Management?
            </h2>
            <p className="text-slate-300 text-sm max-w-2xl mx-auto">
              Contact Travel Treasure today for customized corporate flight pricing, visa support, hotel accommodations, and dedicated account officer management.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => openQuote("Corporate Travel Management")}
                className="bg-brand-gold hover:bg-brand-gold-dark text-brand-navy font-extrabold text-sm px-8 py-4 rounded-xl shadow-xl transition-all flex items-center gap-2 border border-amber-300"
              >
                <Send className="w-4 h-4 text-brand-navy" />
                <span>Request a Corporate Quote</span>
              </button>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm px-8 py-4 rounded-xl shadow-xl transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>WhatsApp Instant Support</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultService={selectedServiceForQuote}
      />
    </div>
  );
}
