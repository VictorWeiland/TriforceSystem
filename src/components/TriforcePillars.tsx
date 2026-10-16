import React from "react";
import { Zap, Cpu, Shield, Check } from "lucide-react";
import { TRIFORCE_PILLARS } from "@/data/projects";
import { TriforceEmblem } from "./TriforceEmblem";

export function TriforcePillars() {
  const getPillarIcon = (id: string) => {
    switch (id) {
      case "power":
        return <Zap className="w-6 h-6 text-gold-400" />;
      case "wisdom":
        return <Cpu className="w-6 h-6 text-gold-400" />;
      case "courage":
        return <Shield className="w-6 h-6 text-gold-400" />;
      default:
        return <Zap className="w-6 h-6 text-gold-400" />;
    }
  };

  return (
    <section
      id="pilares"
      className="relative py-24 sm:py-32 bg-gradient-to-b from-obsidian-950 via-obsidian-900 to-obsidian-950 border-t border-gold-500/15 overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex justify-center mb-4">
            <div className="p-3 rounded-2xl bg-gold-500/10 border border-gold-500/20 shadow-[0_0_30px_rgba(245,158,11,0.15)]">
              <TriforceEmblem size={44} />
            </div>
          </div>
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-gold-400 block mb-2">
            A Essência da Nossa Arquitetura
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Os 3 Pilares da{" "}
            <span className="bg-gradient-to-r from-gold-200 via-gold-400 to-gold-600 bg-clip-text text-transparent">
              Triforce System
            </span>
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg leading-relaxed">
            Todo grande ecossistema digital exige equilíbrio perfeito entre três forças fundamentais:
            infraestrutura de alta velocidade, engenharia inteligente e segurança absoluta.
          </p>
        </div>

        {/* 3 Pillars Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TRIFORCE_PILLARS.map((pillar, index) => (
            <div
              key={pillar.id}
              className={`relative rounded-2xl p-8 bg-obsidian-900/90 border transition-all duration-300 flex flex-col justify-between group ${
                index === 0
                  ? "border-gold-500/50 shadow-[0_0_40px_-10px_rgba(245,158,11,0.2)] lg:-translate-y-4"
                  : "border-zinc-800 hover:border-gold-500/40"
              }`}
            >
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-gold-500/10 to-transparent rounded-tr-2xl pointer-events-none" />

              <div>
                {/* Badge & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getPillarIcon(pillar.id)}
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-gold-400 block font-bold">
                      TRIFORCE DO {pillar.triforceTrait}
                    </span>
                    <span className="text-xs text-zinc-500">{pillar.badge}</span>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-display text-2xl font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm font-medium text-gold-400/90 mb-4">{pillar.subtitle}</p>
                <p className="text-sm text-zinc-400 leading-relaxed mb-8">{pillar.description}</p>
              </div>

              {/* Feature List */}
              <ul className="space-y-3 pt-6 border-t border-zinc-800/80">
                {pillar.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-zinc-300">
                    <span className="mt-0.5 p-0.5 rounded-full bg-gold-500/20 text-gold-400 shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
