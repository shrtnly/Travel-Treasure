import React from "react";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { COMPANY_INFO } from "@/data/companyData";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export const metadata = {
  title: "Contact Us — Corporate Travel Office Dhaka",
  description: "Get in touch with Travel Treasure. Office at Mohammad Ali Tower, Section-11, Mirpur, Dhaka-1216, Bangladesh. Phone: +88 01714400844",
};

export default function ContactPage() {
  return (
    <div className="space-y-0">
      <section className="bg-brand-navy-dark text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop"
            alt="Contact Travel Treasure Corporate Travel Agency Dhaka"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-amber-500/20 text-brand-gold border border-brand-gold/40 text-xs font-bold uppercase tracking-wider">
            Dhaka Head Office & Corporate Support Desk
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            Let's Plan Your Next Journey
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Get in touch with our corporate travel specialists for instant quotes, flight reservations, and visa processing.
          </p>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <ContactForm />

          {/* Embedded Google Map Section */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-corporate space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Location Map</span>
                <h3 className="text-2xl font-extrabold text-brand-navy">Visit Our Corporate Headquarters</h3>
                <p className="text-xs text-slate-500">{COMPANY_INFO.address}</p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-brand-navy text-xs font-bold rounded-xl transition-colors inline-flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-gold" />
                  <span>Call Us</span>
                </a>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold rounded-xl transition-colors inline-flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white/20" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="w-full h-96 rounded-2xl overflow-hidden shadow-inner border border-slate-200 relative">
              <iframe
                title="Travel Treasure Office Map Location"
                src={COMPANY_INFO.googleMapsUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
