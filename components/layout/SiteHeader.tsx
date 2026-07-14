"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronRight, Menu, TrendingUp, X } from "lucide-react";
import { contactCta, desktopNavLinks, mobileNavLinks } from "@/data/navigation";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 border-b border-surface-container shadow-xs backdrop-blur-md"
            : "bg-white/30 border-b border-surface-container/30 backdrop-blur-md"
        }`}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
          <a href="#" className="flex items-center gap-3 group">
            <span
              className="material-symbols-outlined text-scorp-navy text-2xl group-hover:scale-110 transition-transform flex items-center justify-center bg-scorp-navy/5 p-2 rounded-lg"
              data-icon="signal_cellular_alt"
            >
              <TrendingUp className="w-6 h-6 text-scorp-navy" />
            </span>
            <span className="font-display text-xl md:text-2xl font-bold tracking-tighter text-scorp-navy">
              Grupo Scorp
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {desktopNavLinks.map((link) => (
              <a
                key={link.label}
                className={`font-sans text-xs font-bold uppercase tracking-wider transition-colors ${
                  link.accent
                    ? "text-scorp-navy hover:text-scorp-navy/80"
                    : "text-on-surface-muted hover:text-scorp-navy"
                }`}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
            <a
              className="bg-scorp-navy text-white px-6 py-2.5 rounded-full font-sans text-xs font-bold uppercase tracking-wider hover:scale-105 hover:bg-scorp-navy/90 transition-all shadow-sm"
              href={contactCta.href}
            >
              {contactCta.label}
            </a>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden text-scorp-navy p-2 hover:bg-scorp-navy/5 rounded-lg transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black z-50 md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
              className="fixed right-0 top-0 bottom-0 w-80 bg-white shadow-2xl z-50 md:hidden p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center pb-6 border-b border-surface-container">
                  <span className="font-display text-lg font-bold text-scorp-navy">Menu</span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 hover:bg-surface-container rounded-lg transition-colors text-on-surface-muted"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="flex flex-col gap-5 py-8">
                  {mobileNavLinks.map((link) => (
                    <a
                      key={link.label}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`font-sans text-sm font-semibold flex items-center justify-between ${
                        link.accent
                          ? "text-scorp-navy"
                          : "text-on-surface-muted hover:text-scorp-navy"
                      }`}
                      href={link.href}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="w-4 h-4 text-scorp-navy/40" />
                    </a>
                  ))}
                </nav>
              </div>

              <div className="pt-6 border-t border-surface-container">
                <a
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full bg-scorp-navy text-white text-center py-3.5 rounded-xl font-sans text-xs font-bold uppercase tracking-wider hover:bg-scorp-navy/90 transition-colors shadow-md"
                  href={contactCta.href}
                >
                  {contactCta.label}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
