"use client";

import { useState } from "react";

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="/" className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-orange-500 text-sm font-black text-white shadow-lg shadow-orange-500/20">
            CS
          </div>

          <p className="text-2xl font-black tracking-tight text-[#07112f]">
            CLARITY<span className="text-orange-500">STACKED</span>
          </p>
        </a>

        <nav className="hidden items-center gap-8 text-base font-black text-slate-700 lg:flex">
          <a href="/#apps">Products</a>
          <a href="/resources">Resources</a>
          <a href="/#systems">Solutions</a>
          <a href="/#pricing">Pricing</a>
          <a href="/#about">About</a>
        </nav>

        <div className="hidden gap-3 sm:flex">
          <a
            href="/resources"
            className="rounded-2xl bg-[#07112f] px-6 py-3 text-base font-black text-white shadow-xl shadow-slate-900/15 transition hover:-translate-y-0.5"
          >
            Explore Resources
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="grid h-12 w-12 place-items-center rounded-2xl border border-slate-200 bg-white text-2xl font-black text-[#07112f] shadow-sm lg:hidden"
          aria-label="Open mobile menu"
        >
          {mobileMenuOpen ? "×" : "☰"}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-5 py-5 lg:hidden">
          <nav className="grid gap-3 text-base font-black text-slate-700">
            {[
              ["Products", "/#apps"],
              ["Resources", "/resources"],
              ["Solutions", "/#systems"],
              ["Pricing", "/#pricing"],
              ["About", "/#about"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4"
              >
                {label}
              </a>
            ))}

            <a
              href="/resources"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-2xl bg-[#07112f] px-5 py-4 text-center text-white"
            >
              Explore Resources
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}