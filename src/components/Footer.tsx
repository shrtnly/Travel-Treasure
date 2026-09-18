import React from "react";
import Link from "next/link";
import Image from "next/image";
import { COMPANY_INFO, CORE_SERVICES } from "@/data/companyData";
import { MapPin, Phone, Mail, MessageCircle, ShieldCheck } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy-dark text-slate-300 pt-16 pb-8 border-t-4 border-brand-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="relative h-14 w-52 bg-white/90 p-2 rounded-xl">
              <Image
                src="/logo.png"
                alt="Travel Treasure Corporate Travel Management"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Travel Treasure is a premier corporate travel management company delivering seamless air ticketing, visa processing, accommodation, airport transfer, and VIP travel solutions.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-amber-400 font-semibold">
              <ShieldCheck className="w-4 h-4 text-brand-gold" />
              <span>IATA</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider border-b border-slate-700 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amber-400 transition-colors">Our Services</Link>
              </li>
              <li>
                <Link href="/corporate-travel" className="hover:text-amber-400 transition-colors">Corporate Travel Solutions</Link>
              </li>
              <li>
                <Link href="/mice-services" className="hover:text-amber-400 transition-colors">MICE Event Travel</Link>
              </li>
              <li>
                <Link href="/partner-airlines" className="hover:text-amber-400 transition-colors">Partner Airlines</Link>
              </li>
              <li>
                <Link href="/clients" className="hover:text-amber-400 transition-colors">Client Portfolio</Link>
              </li>
              <li>
                <Link href="/certifications" className="hover:text-amber-400 transition-colors">Certifications & Accreditation</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Specialized Services */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider border-b border-slate-700 pb-2">
              Travel Services
            </h4>
            <ul className="space-y-2 text-xs">
              {CORE_SERVICES.slice(0, 8).map((s) => (
                <li key={s.id}>
                  <Link href={s.href} className="hover:text-amber-400 transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider border-b border-slate-700 pb-2">
              Corporate Office
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span className="leading-relaxed">{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-white font-semibold">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 font-semibold"
                >
                  WhatsApp: +88 01714400844
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © 2026 {COMPANY_INFO.name}. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/about" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="/about" className="hover:text-slate-300 transition-colors">Terms & Conditions</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">Corporate Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
