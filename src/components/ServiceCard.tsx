import React from "react";
import Link from "next/link";
import { 
  Globe, Plane, FileCheck, Building2, Car, Crown, DollarSign, 
  Briefcase, Users, ShieldCheck, ArrowRight, PlaneTakeoff 
} from "lucide-react";

interface ServiceCardProps {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  href: string;
  features?: string[];
  index?: number;
}

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Plane,
  FileCheck,
  Building2,
  Car,
  Crown,
  DollarSign,
  Briefcase,
  Users,
  ShieldCheck,
  PlaneTakeoff,
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, shortDesc, iconName, href, features, index = 0 }) => {
  const IconComponent = iconMap[iconName] || Globe;

  return (
    <div className="group bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-corporate hover:shadow-corporate-hover transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between relative overflow-hidden">
      {/* Decorative top accent border line */}
      <div className="absolute top-0 inset-x-0 h-1 bg-slate-100 group-hover:bg-gradient-to-r group-hover:from-brand-navy group-hover:via-brand-gold group-hover:to-brand-navy transition-all duration-500"></div>

      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="w-14 h-14 rounded-2xl bg-slate-50 group-hover:bg-brand-navy text-brand-navy group-hover:text-brand-gold flex items-center justify-center transition-all duration-300 border border-slate-200/80 group-hover:border-brand-gold/40 shadow-sm">
            <IconComponent className="w-7 h-7" />
          </div>
          <span className="text-3xl font-extrabold text-slate-200 group-hover:text-amber-100/60 transition-colors">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <h3 className="text-xl font-bold text-brand-navy group-hover:text-brand-navy-dark transition-colors mb-3">
          {title}
        </h3>

        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          {shortDesc}
        </p>

        {features && features.length > 0 && (
          <ul className="space-y-2 mb-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
            {features.map((f, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="pt-4 border-t border-slate-100/80">
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-navy group-hover:text-amber-600 transition-colors"
        >
          <span>Explore Service</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
