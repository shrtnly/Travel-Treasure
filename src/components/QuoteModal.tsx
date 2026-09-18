"use client";

import React, { useState } from "react";
import { X, Send, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO, CORE_SERVICES } from "@/data/companyData";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, defaultService = "Corporate Travel" }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    serviceRequired: defaultService,
    travelDestination: "",
    travelDate: "",
    numberOfTravelers: "1-5",
    message: ""
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `*New Quote Request - Travel Treasure*

*Name:* ${formData.fullName}
*Company:* ${formData.companyName || 'N/A'}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Service:* ${formData.serviceRequired}
*Destination:* ${formData.travelDestination || 'N/A'}
*Travel Date:* ${formData.travelDate || 'N/A'}
*Travelers:* ${formData.numberOfTravelers}
*Requirements:* ${formData.message || 'N/A'}`;

    const whatsappUrl = `https://wa.me/8801815311232?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-slate-100 relative max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-brand-navy p-6 text-white flex justify-between items-start relative">
          <div>
            <div className="inline-block px-3 py-1 bg-amber-500/20 text-brand-gold text-xs font-bold rounded-full uppercase tracking-wider mb-2 border border-brand-gold/30">
              Corporate Travel Management
            </div>
            <h3 className="text-2xl font-bold text-white">Request a Custom Quote</h3>
            <p className="text-slate-300 text-xs mt-1">
              Serving corporate accounts, organizations, and business travelers.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-brand-navy">Quote Request Received!</h4>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                Thank you for contacting Travel Treasure. Our corporate travel experts will review your details and respond within 24 hours.
              </p>
              <p className="text-xs text-amber-600 font-semibold bg-amber-50 py-2 px-4 rounded-lg inline-block">
                Immediate Urgent Assistance? Call us at {COMPANY_INFO.phone}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tanvir Ahmed"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-navy focus:border-brand-navy outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Apex Enterprises Ltd."
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-navy focus:border-brand-navy outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-navy focus:border-brand-navy outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+880 1700 000000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-navy focus:border-brand-navy outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Service Required *
                  </label>
                  <select
                    value={formData.serviceRequired}
                    onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-navy focus:border-brand-navy outline-none"
                  >
                    <option value="Corporate Travel">Corporate Travel Management</option>
                    {CORE_SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Travel Destination
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. London, UK / Singapore / Dubai"
                    value={formData.travelDestination}
                    onChange={(e) => setFormData({ ...formData, travelDestination: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-navy focus:border-brand-navy outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Estimated Travel Date
                  </label>
                  <input
                    type="date"
                    value={formData.travelDate}
                    onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-navy focus:border-brand-navy outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Number of Travelers
                  </label>
                  <select
                    value={formData.numberOfTravelers}
                    onChange={(e) => setFormData({ ...formData, numberOfTravelers: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-navy focus:border-brand-navy outline-none"
                  >
                    <option value="1">1 Traveler (Individual)</option>
                    <option value="2-5">2 - 5 Travelers (Executive Team)</option>
                    <option value="6-15">6 - 15 Travelers (Department)</option>
                    <option value="15+">15+ Travelers (MICE / Group)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Specific Requirements or Flight Preferences
                </label>
                <textarea
                  rows={3}
                  placeholder="Mention flight class preference, hotel rating, visa urgency, VIP airport assistance requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-navy focus:border-brand-navy outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-brand-navy hover:bg-brand-navy-dark text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 border border-brand-gold/40"
                >
                  <Send className="w-4 h-4 text-brand-gold" />
                  <span>Submit Quote Request</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
