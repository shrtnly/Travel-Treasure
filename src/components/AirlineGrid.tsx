import React, { useState } from "react";
import { AIRLINE_PARTNERS } from "@/data/companyData";
import { Plane, ChevronDown, ChevronUp } from "lucide-react";

export const AirlineGrid: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedAirlines = showAll ? AIRLINE_PARTNERS : AIRLINE_PARTNERS.slice(0, 5);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {displayedAirlines.map((airline, idx) => (
          <div
            key={idx}
            className="group bg-white rounded-xl p-4 border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-gold/60 transition-all duration-200 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-slate-100 group-hover:bg-brand-navy group-hover:text-brand-gold text-slate-600 transition-colors">
                {airline.code}
              </span>
              <Plane className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-gold transition-colors" />
            </div>

            <div>
              <h4 className="text-xs font-bold text-brand-navy group-hover:text-brand-navy-dark leading-snug">
                {airline.name}
              </h4>
              <p className="text-[10px] text-slate-500 mt-1">{airline.country}</p>
            </div>

            <div className="mt-3 pt-2 border-t border-slate-100 text-[9px] font-semibold text-slate-400 uppercase tracking-wider group-hover:text-amber-600 transition-colors">
              Global GDS Connected
            </div>
          </div>
        ))}
      </div>

      {AIRLINE_PARTNERS.length > 5 && (
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
                <span>Show All Airlines</span>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};
