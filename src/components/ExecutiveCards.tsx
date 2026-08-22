import React from "react";
import { EXECUTIVE_TEAM } from "@/data/companyData";
import { UserCheck, Shield, Briefcase } from "lucide-react";

export const ExecutiveCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {EXECUTIVE_TEAM.map((exec, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl p-8 border border-slate-200 shadow-corporate hover:shadow-corporate-hover transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left"
        >
          {/* Professional Initial Monogram Placeholder */}
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-brand-navy via-brand-navy-dark to-slate-900 text-brand-gold flex items-center justify-center font-black text-2xl shadow-xl shrink-0 border-2 border-brand-gold/40">
            {exec.initials}
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-800 text-[11px] font-bold rounded-full border border-amber-200">
              <Briefcase className="w-3.5 h-3.5 text-brand-gold" />
              <span>Executive Leadership</span>
            </div>
            <h3 className="text-xl font-extrabold text-brand-navy">{exec.name}</h3>
            <p className="text-sm font-semibold text-amber-600">{exec.title}</p>
            <p className="text-xs text-slate-600 leading-relaxed pt-1">{exec.bio}</p>
            <div className="pt-3 flex items-center justify-center sm:justify-start gap-2 text-slate-400 text-xs font-medium">
              <Shield className="w-4 h-4 text-emerald-500" />
              <span>Travel Treasure Leadership • Est. 2014</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
