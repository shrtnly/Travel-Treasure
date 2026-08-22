"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Phone, Mail, MessageCircle, MapPin, Clock } from "lucide-react";
import { COMPANY_INFO, CORE_SERVICES } from "@/data/companyData";

export const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    serviceRequired: "Corporate Travel Management",
    travelDestination: "",
    travelDate: "",
    numberOfTravelers: "1-5",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
      {/* Contact Info Side */}
      <div className="lg:col-span-5 space-y-8 bg-brand-navy text-white p-8 sm:p-10 rounded-3xl shadow-2xl relative overflow-hidden flex flex-col justify-between">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-brand-gold/10 blur-3xl pointer-events-none"></div>

        <div className="space-y-6 relative z-10">
          <div>
            <span className="inline-block px-3 py-1 bg-amber-500/20 text-brand-gold text-xs font-bold rounded-full uppercase tracking-wider mb-3 border border-brand-gold/30">
              Corporate Office
            </span>
            <h3 className="text-3xl font-extrabold text-white">Let's Plan Your Next Journey</h3>
            <p className="text-slate-300 text-sm mt-2 leading-relaxed">
              Get in touch with Travel Treasure for personalized corporate travel management, air bookings, visa processing, and executive support.
            </p>
          </div>

          <div className="space-y-5 pt-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 text-brand-gold flex items-center justify-center shrink-0 border border-white/10">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Office Address</h4>
                <p className="text-sm font-medium text-white leading-relaxed mt-0.5">{COMPANY_INFO.address}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 text-amber-400 flex items-center justify-center shrink-0 border border-white/10">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Phone Contact</h4>
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-base font-bold text-white hover:text-brand-gold transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 text-emerald-400 flex items-center justify-center shrink-0 border border-white/10">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">24/7 WhatsApp Support</h4>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold text-emerald-300 hover:text-emerald-200 transition-colors"
                >
                  +88 01714400844 (Instant Chat)
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 text-sky-400 flex items-center justify-center shrink-0 border border-white/10">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Email Inquiry</h4>
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm font-semibold text-white hover:text-brand-gold transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 relative z-10 flex items-center gap-3 text-xs text-slate-300">
          <Clock className="w-4 h-4 text-brand-gold" />
          <span>Office Hours: Saturday – Thursday: 9:30 AM – 7:00 PM</span>
        </div>
      </div>

      {/* Contact Form Side */}
      <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-corporate">
        {submitted ? (
          <div className="py-16 text-center space-y-4">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            <h3 className="text-3xl font-extrabold text-brand-navy">Quote Request Submitted!</h3>
            <p className="text-slate-600 text-base max-w-md mx-auto">
              Thank you for reaching out. A dedicated travel consultant from Travel Treasure will contact you shortly with customized options.
            </p>
            <div className="pt-4">
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 bg-brand-navy text-white text-xs font-bold rounded-xl shadow hover:bg-brand-navy-dark transition-colors"
              >
                Send Another Inquiry
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="border-b border-slate-100 pb-4 mb-2">
              <h3 className="text-2xl font-extrabold text-brand-navy">Request a Corporate Travel Quote</h3>
              <p className="text-xs text-slate-500 mt-1">
                Fill in your travel preferences below. We respond promptly with competitive corporate rates.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-navy focus:border-brand-navy outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Company / Organization"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-navy focus:border-brand-navy outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Corporate Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-navy focus:border-brand-navy outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+880 1700 000000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-navy focus:border-brand-navy outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Service Required *
                </label>
                <select
                  value={formData.serviceRequired}
                  onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-navy focus:border-brand-navy outline-none"
                >
                  <option value="Corporate Travel Management">Corporate Travel Management</option>
                  {CORE_SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Destination
                </label>
                <input
                  type="text"
                  placeholder="e.g. London / Singapore / Dubai"
                  value={formData.travelDestination}
                  onChange={(e) => setFormData({ ...formData, travelDestination: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-navy focus:border-brand-navy outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Travel Date
                </label>
                <input
                  type="date"
                  value={formData.travelDate}
                  onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-navy focus:border-brand-navy outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Number of Passengers
                </label>
                <select
                  value={formData.numberOfTravelers}
                  onChange={(e) => setFormData({ ...formData, numberOfTravelers: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-navy focus:border-brand-navy outline-none"
                >
                  <option value="1">1 Passenger</option>
                  <option value="2-5">2 - 5 Passengers (Executive Group)</option>
                  <option value="6-15">6 - 15 Passengers (Team Delegation)</option>
                  <option value="15+">15+ Passengers (MICE Event)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Message / Travel Requirements
              </label>
              <textarea
                rows={4}
                placeholder="Details about flight schedule, visa urgency, hotel preferences, or executive VIP assistance..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-navy focus:border-brand-navy outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-brand-navy hover:bg-brand-navy-dark text-white font-extrabold py-3.5 px-6 rounded-xl shadow-lg hover:shadow-2xl transition-all flex items-center justify-center gap-2 border border-brand-gold/40 text-base"
            >
              <Send className="w-5 h-5 text-brand-gold" />
              <span>Request a Quote</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
