"use client";

import React from "react";
import { MessageCircle, Phone } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export const FloatingActions: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end pointer-events-auto">
      {/* Phone Call Floating Button */}
      <a
        href={`tel:${COMPANY_INFO.phoneRaw}`}
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-brand-navy text-white shadow-xl hover:bg-brand-navy-dark transition-all duration-300 transform hover:scale-110 border-2 border-brand-gold/50"
        aria-label="Call Travel Treasure"
      >
        <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-brand-gold" />
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
          Call +88 01714400844
        </span>
      </a>

      {/* WhatsApp 24/7 Floating Button */}
      <a
        href={`https://wa.me/${COMPANY_INFO.whatsappRaw}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-500 text-white shadow-xl hover:bg-emerald-600 transition-all duration-300 transform hover:scale-110 border-2 border-white animate-pulse-subtle"
        aria-label="Chat on WhatsApp 24/7"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white/20 text-white" />
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-emerald-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
          24/7 WhatsApp Support
        </span>
      </a>
    </div>
  );
};
