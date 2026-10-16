import React from "react";
import { TriforceEmblem } from "./TriforceEmblem";
import { Github, Globe, ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-obsidian-950 border-t border-gold-500/20 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <TriforceEmblem size={34} />
            <div>
              <span className="font-display font-bold text-lg tracking-wider bg-gradient-to-r from-gold-200 via-gold-400 to-gold-600 bg-clip-text text-transparent block">
                TRIFORCE SYSTEM
              </span>
              <span className="text-xs text-zinc-500">
                Engenharia de Software, Ecossistema Web & Cloud Hosting
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href="#inicio" className="hover:text-gold-400 transition">
              Início
            </a>
            <a href="#vitrine" className="hover:text-gold-400 transition">
              Vitrine de Sites
            </a>
            <a href="#pilares" className="hover:text-gold-400 transition">
              Os 3 Pilares
            </a>
            <a href="#infraestrutura" className="hover:text-gold-400 transition">
              Deploy & Cloud
            </a>
            <a href="#contato" className="hover:text-gold-400 transition">
              Contato
            </a>
          </div>

          {/* Social & Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-obsidian-900 border border-zinc-800 hover:border-gold-500/40 text-zinc-300 hover:text-gold-400 transition"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-obsidian-900 border border-zinc-800 hover:border-gold-500/40 text-zinc-300 hover:text-gold-400 transition"
              aria-label="Vercel Cloud"
            >
              <Globe className="w-4 h-4" />
            </a>
            <a
              href="#inicio"
              className="p-2.5 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400 hover:bg-gold-500 hover:text-obsidian-950 transition"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} Triforce System. Todos os direitos reservados.</p>
          <p className="font-mono">
            Powered by <span className="text-gold-400">Next.js + TypeScript + Vercel</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
