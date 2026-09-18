import React from "react";
import Metadata from "next";
import Image from "next/image";
import Link from "next/link";
import { TrustBar } from "@/components/TrustBar";
import { ExecutiveCards } from "@/components/ExecutiveCards";
import { CertificationBadges } from "@/components/CertificationBadges";
import { COMPANY_INFO } from "@/data/companyData";
import { ShieldCheck, CheckCircle2, Award, Users, Globe, Send, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Us — Corporate Travel Agency",
  description: "Learn about Travel Treasure. Professional corporate travel management agency based in Dhaka, Bangladesh.",
};

export default function AboutPage() {
  return (
    <div className="space-y-0">
      {/* Banner */}
      <section className="bg-brand-navy-dark text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
            alt="About Travel Treasure Corporate Headquarters"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-amber-500/20 text-brand-gold border border-brand-gold/40 text-xs font-bold uppercase tracking-wider">
            Corporate Travel & Visa Management
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            Travel Treasure — {COMPANY_INFO.tagline}
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            {COMPANY_INFO.subTagline}
          </p>
        </div>
      </section>

      <TrustBar />

      {/* Main Story & Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block px-3 py-1 bg-amber-100 text-brand-navy text-xs font-bold rounded-full uppercase tracking-wider">
                Who We Are
              </span>
              <h2 className="text-3xl font-extrabold text-brand-navy leading-tight">
                Travel Simple, Comfortable & Personal
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                At Travel Treasure, we make travel simple, comfortable, and personal. Since our journey began, we’ve helped individuals, families, and businesses travel with confidence through trusted service and expert guidance.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Backed by a dedicated team of 15–20 travel professionals, multi-GDS connectivity, and partnerships with 20 leading airlines, we deliver competitive fares, flexible options, and reliable travel solutions.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Dedicated team of 15–20 travel professionals",
                  "Multi-GDS connectivity (Sabre, Amadeus, Travelport)",
                  "Partnerships with 20 leading airlines worldwide",
                  "Competitive fares & flexible ticketing options",
                  "End-to-end visa processing & embassy liaison",
                  "24/7 fast response support via WhatsApp"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-700 font-semibold">
                    <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                  alt="Travel Treasure Professional Team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <span className="block text-2xl font-black text-brand-navy">15–20</span>
                      <span className="text-xs text-slate-500 font-medium">Travel Professionals</span>
                    </div>
                    <div>
                      <span className="block text-2xl font-black text-brand-navy">18</span>
                      <span className="text-xs text-slate-500 font-medium">Global Partner Airlines</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION (PPT Slide 3) */}
      <section className="py-20 bg-brand-navy-dark text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-amber-500/20 text-brand-gold border border-brand-gold/40 text-xs font-bold uppercase tracking-wider">
              Mission & Vision
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Our Purpose & Aspiration
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* MISSION CARD */}
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 space-y-4 relative overflow-hidden hover:border-brand-gold/50 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-brand-gold flex items-center justify-center font-bold text-2xl">
                ◎
              </div>
              <h3 className="text-2xl font-extrabold text-brand-gold">Our Mission</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {COMPANY_INFO.mission}
              </p>
            </div>

            {/* VISION CARD */}
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 space-y-4 relative overflow-hidden hover:border-brand-gold/50 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-brand-gold flex items-center justify-center font-bold text-2xl">
                ◈
              </div>
              <h3 className="text-2xl font-extrabold text-brand-gold">Our Vision</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {COMPANY_INFO.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-block px-3 py-1 bg-amber-100 text-brand-navy text-xs font-bold rounded-full uppercase tracking-wider">
              Governance & Stewardship
            </span>
            <h2 className="text-3xl font-extrabold text-brand-navy">Leadership Team</h2>
            <p className="text-slate-600 text-sm">
              Experienced stewardship guiding strategy, operations, and client relationships.
            </p>
          </div>
          <ExecutiveCards />
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-block px-3 py-1 bg-amber-100 text-brand-navy text-xs font-bold rounded-full uppercase tracking-wider">
              Standards & Accreditation
            </span>
            <h2 className="text-3xl font-extrabold text-brand-navy">Company Certifications</h2>
            <p className="text-slate-600 text-sm">
              Our accreditations reflect commitment to professional standards, ethical business practices, and recognized quality in the Bangladesh travel industry.
            </p>
          </div>
          <CertificationBadges />
        </div>
      </section>
    </div>
  );
}
