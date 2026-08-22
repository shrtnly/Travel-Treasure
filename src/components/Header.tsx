"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { COMPANY_INFO, NAVIGATION_LINKS } from "@/data/companyData";
import { Phone, MessageCircle, Menu, X, ChevronDown, Send } from "lucide-react";
import { QuoteModal } from "./QuoteModal";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-brand-navy-dark text-slate-300 text-xs py-2 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-amber-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping inline-block"></span>
              Established 2014 • Corporate Travel Management
            </span>
            <span className="text-slate-400">|</span>
            <span className="flex items-center gap-1.5">
              <span>Dhaka, Bangladesh</span>
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-white transition-colors flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a href={`https://wa.me/${COMPANY_INFO.whatsappRaw}`} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp 24/7</span>
            </a>
            <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
              {COMPANY_INFO.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-100 py-3"
            : "bg-white border-b border-slate-100 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-12 w-48 transition-transform group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="Travel Treasure Corporate Travel Agency"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {NAVIGATION_LINKS.map((link) => {
                const isActive = pathname === link.href;

                if (link.dropdown) {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(link.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button
                        className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                          isActive || pathname.startsWith("/services")
                            ? "text-brand-navy bg-slate-100/80"
                            : "text-slate-700 hover:text-brand-navy hover:bg-slate-50"
                        }`}
                      >
                        {link.name}
                        <ChevronDown className="w-4 h-4 text-slate-500" />
                      </button>

                      {/* Dropdown Menu */}
                      {activeDropdown === link.name && (
                        <div className="absolute top-full left-0 w-64 mt-1 bg-white rounded-xl shadow-2xl border border-slate-100 py-2 z-50 animate-fadeIn">
                          {link.dropdown.map((subLink) => (
                            <Link
                              key={subLink.name}
                              href={subLink.href}
                              className={`block px-4 py-2.5 text-xs font-semibold transition-colors ${
                                pathname === subLink.href
                                  ? "text-brand-navy bg-amber-50/60 font-bold border-l-4 border-brand-gold"
                                  : "text-slate-700 hover:bg-slate-50 hover:text-brand-navy"
                              }`}
                            >
                              {subLink.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-2 text-sm font-semibold rounded-lg transition-all ${
                      isActive
                        ? "text-brand-navy bg-amber-50/80 font-bold border-b-2 border-brand-gold"
                        : "text-slate-700 hover:text-brand-navy hover:bg-slate-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="bg-brand-navy hover:bg-brand-navy-dark text-white font-bold text-sm px-5 py-2.5 rounded-lg shadow-md hover:shadow-xl transition-all duration-200 flex items-center gap-2 transform hover:-translate-y-0.5 border border-brand-gold/30"
              >
                <Send className="w-4 h-4 text-brand-gold" />
                <span>Request a Quote</span>
              </button>
            </div>

            {/* Mobile Actions Header */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="p-2.5 rounded-full bg-slate-100 text-brand-navy hover:bg-amber-100 transition-colors"
                aria-label="Call Us"
              >
                <Phone className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-emerald-100 text-emerald-700 hover:bg-emerald-200 transition-colors"
                aria-label="WhatsApp Us"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[73px] bg-white border-b border-slate-200 shadow-2xl max-h-[85vh] overflow-y-auto z-50">
            <div className="p-4 space-y-2">
              {NAVIGATION_LINKS.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <div className="space-y-1">
                      <div className="font-bold text-xs text-slate-400 uppercase tracking-wider px-3 pt-3 pb-1">
                        {link.name}
                      </div>
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`block px-4 py-2.5 text-sm rounded-lg font-medium ${
                            pathname === sub.href
                              ? "bg-brand-navy text-white font-semibold"
                              : "text-slate-700 hover:bg-slate-100"
                          }`}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-3 text-sm rounded-lg font-semibold ${
                        pathname === link.href
                          ? "bg-brand-navy text-white font-bold"
                          : "text-slate-800 hover:bg-slate-100"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}

              <div className="pt-4 border-t border-slate-100 space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsQuoteOpen(true);
                  }}
                  className="w-full bg-brand-navy text-white font-bold py-3 px-4 rounded-xl shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-brand-gold" />
                  <span>Request a Corporate Quote</span>
                </button>

                <div className="grid grid-cols-2 gap-2 text-center text-xs font-semibold">
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="py-2.5 px-3 rounded-lg bg-slate-100 text-brand-navy flex items-center justify-center gap-2 border border-slate-200"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-500" />
                    <span>Call Us</span>
                  </a>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappRaw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center gap-2 border border-emerald-200"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Quote Request Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
};
