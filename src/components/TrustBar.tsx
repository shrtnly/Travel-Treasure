import React from "react";
import { ShieldCheck, Calendar, Users, Award, Briefcase, CheckCircle } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export const TrustBar: React.FC = () => {
  const trustItems = [
    { icon: CheckCircle, title: "Trusted Agency", subtitle: "Certified Operations" },
    { icon: Users, title: COMPANY_INFO.teamStrength, subtitle: "Travel Experts" },
    { icon: ShieldCheck, title: "IATA Certified", subtitle: "Global Travel Accredited" },
    { icon: Award, title: "ATAB & TOAB Member", subtitle: "Registered Agency" },
    { icon: Briefcase, title: "Corporate Travel", subtitle: "Specialists & Dedicated Support" },
  ];

  return (
    <div className="bg-white border-y border-slate-200/80 shadow-sm py-6 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center md:text-left">
          {trustItems.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col md:flex-row items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
              >
                <div className="p-3 rounded-xl bg-amber-50 text-brand-navy border border-amber-200/60 shadow-sm shrink-0">
                  <IconComponent className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-brand-navy uppercase tracking-wide">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium">{item.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
