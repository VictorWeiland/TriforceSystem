"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ExternalLink, Terminal, ShieldCheck } from "lucide-react";
import { TriforceEmblem } from "./TriforceEmblem";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Vitrine de Sites", href: "#vitrine" },
    { label: "Os 3 Pilares", href: "#pilares" },
    { label: "Infraestrutura & Deploy", href: "#infraestrutura" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-obsidian-950/90 backdrop-blur-xl border-b border-gold-500/20 py-3 shadow-[0_4px_30px_rgba(245,158,11,0.08)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center">
              <div className="absolute -inset-1 rounded-full bg-gold-500/20 blur-md group-hover:bg-gold-400/40 transition duration-500" />
              <TriforceEmblem size={38} className="relative transform group-hover:scale-105 transition duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg sm:text-xl tracking-wider bg-gradient-to-r from-gold-200 via-gold-400 to-gold-600 bg-clip-text text-transparent">
                TRIFORCE
              </span>
              <span className="text-[10px] tracking-[0.35em] text-zinc-400 font-semibold -mt-1">
                SYSTEM
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-zinc-300 hover:text-gold-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gold-400 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Status & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>ALL SYSTEMS ONLINE</span>
            </div>

            <a
              href="#vitrine"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-obsidian-950 font-semibold text-sm shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_25px_rgba(245,158,11,0.5)] transition-all"
            >
              <Terminal className="w-4 h-4" />
              <span>Acessar Hub</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-zinc-300 hover:text-gold-400 hover:bg-obsidian-800 transition"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-obsidian-900/98 backdrop-blur-xl border-b border-gold-500/20 px-4 pt-4 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 px-3 rounded-lg text-base font-medium text-zinc-200 hover:text-gold-400 hover:bg-obsidian-800/60 transition"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-zinc-800 flex flex-col gap-3">
            <div className="flex items-center justify-center gap-2 py-2 rounded-lg bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <ShieldCheck className="w-4 h-4" />
              <span>TODOS OS SISTEMAS OPERACIONAIS</span>
            </div>
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-gold-500 to-gold-600 text-obsidian-950 font-bold text-center text-sm flex items-center justify-center gap-2"
            >
              <span>Solicitar Projeto ou Hospedagem</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
