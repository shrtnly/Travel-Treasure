import React from "react";
import { COMPANY_INFO } from "@/data/companyData";
import { Award, ShieldCheck, CheckCircle } from "lucide-react";

export const CertificationBadges: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {COMPANY_INFO.certifications.map((cert, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl p-6 border border-slate-200 shadow-corporate hover:shadow-corporate-hover transition-all duration-300 flex items-start gap-4"
        >
          <div className="p-3 rounded-xl bg-amber-50 text-brand-navy border border-amber-200 shrink-0">
            <Award className="w-8 h-8 text-brand-gold" />
          </div>
          <div>
            <span className="inline-block px-2.5 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold rounded-md uppercase tracking-wider mb-1">
              Accredited
            </span>
            <h4 className="text-lg font-bold text-brand-navy">{cert.name}</h4>
            <p className="text-xs text-slate-600 font-medium mt-1">{cert.label}</p>
            <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-400 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>{cert.code}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
