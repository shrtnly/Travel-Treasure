import React, { useState } from "react";
import { CLIENT_LIST } from "@/data/companyData";
import { Building, ShieldCheck, ChevronDown, ChevronUp } from "lucide-react";

export const ClientGrid: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedClients = showAll ? CLIENT_LIST : CLIENT_LIST.slice(0, 5);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {displayedClients.map((client, idx) => (
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
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-center gap-1.5 text-[11px] text-emerald-600 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Corporate Account</span>
            </div>
          </div>
        ))}
      </div>

      {CLIENT_LIST.length > 5 && (
        <div className="text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-navy-dark text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-brand-gold/30"
          >
            {showAll ? (
              <>
                <ChevronUp className="w-4 h-4" />
                <span>View Less</span>
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                <span>Show All Clients</span>
              </>
            )}
          </button>
        </div>
      )}

      <p className="text-center text-xs text-slate-500 font-medium italic">
        "Building trusted relationships through reliable travel support."
      </p>
    </div>
  );
};
