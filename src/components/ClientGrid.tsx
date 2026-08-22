import React from "react";
import { CLIENT_LIST } from "@/data/companyData";
import { Building, ShieldCheck } from "lucide-react";

export const ClientGrid: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CLIENT_LIST.map((client, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-6 border border-slate-200 shadow-corporate hover:shadow-corporate-hover transition-all duration-300 transform hover:-translate-y-1 text-center flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-brand-navy border border-amber-200 mx-auto mb-4 flex items-center justify-center">
                <Building className="w-6 h-6 text-brand-gold" />
              </div>
              <span className="inline-block px-2.5 py-1 bg-slate-100 text-slate-700 text-[10px] font-bold rounded-full uppercase tracking-wider mb-2">
                {client.tag}
              </span>
              <h4 className="text-lg font-bold text-brand-navy mb-1">{client.name}</h4>
              <p className="text-xs text-slate-500">{client.industry}</p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-center gap-1.5 text-[11px] text-emerald-600 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Corporate Account</span>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-xs text-slate-500 font-medium italic">
        "Building trusted relationships through reliable travel support."
      </p>
    </div>
  );
};
