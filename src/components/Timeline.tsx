import React from "react";
import { TRAVEL_PROCESS_STEPS } from "@/data/companyData";
import { ClipboardList, Calculator, Calendar, CheckCircle2, Headphones, Home } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  ClipboardList,
  Calculator,
  Calendar,
  CheckCircle2,
  Headphones,
  Home
};

export const Timeline: React.FC = () => {
  return (
    <div className="relative">
      {/* Desktop Horizontal Line */}
      <div className="hidden lg:block absolute top-12 left-8 right-8 h-1 bg-gradient-to-r from-brand-navy via-brand-gold to-brand-navy z-0 rounded-full"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
        {TRAVEL_PROCESS_STEPS.map((step, idx) => {
          const IconComp = iconMap[step.icon] || CheckCircle2;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-corporate hover:shadow-corporate-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-navy text-brand-gold flex items-center justify-center shadow-md group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-black text-slate-200 group-hover:text-amber-200 transition-colors">
                    {step.number}
                  </span>
                </div>
                <h4 className="text-base font-bold text-brand-navy mb-2">{step.title}</h4>
                <p className="text-slate-600 text-xs leading-relaxed">{step.desc}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[10px] font-bold text-amber-600 uppercase tracking-wider">
                <span>Step {step.number}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
