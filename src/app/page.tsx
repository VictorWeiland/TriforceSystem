import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  Layers,
  ShieldCheck,
  Zap,
  Globe,
  Code2,
  Server,
  ChevronRight,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { ProjectsShowcase } from "@/components/ProjectsShowcase";
import { TriforcePillars } from "@/components/TriforcePillars";
import { DeployWorkflowSection } from "@/components/DeployWorkflowSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-obsidian-950 text-zinc-100">
      <Navbar />

      {/* HERO SECTION */}
      <main id="inicio" className="flex-1">
        <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
          {/* Background Radial Gold Aura */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-gold-500/15 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-35 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Hero Left Column */}
              <div className="lg:col-span-7 text-center lg:text-left space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-mono tracking-wider uppercase">
                  <Zap className="w-3.5 h-3.5 text-gold-400" />
                  <span>Ecossistema Digital & Cloud Hosting</span>
                </div>

                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                  Poder, Sabedoria &{" "}
                  <span className="bg-gradient-to-r from-gold-200 via-gold-400 to-gold-600 bg-clip-text text-transparent">
                    Alta Performance
                  </span>{" "}
                  em Cada Linha de Código.
                </h1>

                <p className="text-zinc-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                  A <strong className="text-gold-300 font-semibold">Triforce System</strong> é a sua
                  central de engenharia de software e hospedagem de sites de alta velocidade.
                  Desenvolvemos sistemas modernos em TypeScript & Next.js e gerenciamos todo o seu
                  ecossistema na nuvem.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                  <a
                    href="#vitrine"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-obsidian-950 font-bold text-base shadow-[0_0_30px_rgba(245,158,11,0.35)] hover:shadow-[0_0_40px_rgba(245,158,11,0.6)] transition-all"
                  >
                    <Globe className="w-5 h-5" />
                    <span>Explorar Sites Hospedados</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href="#contato"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-obsidian-900 hover:bg-obsidian-800 text-gold-300 border border-gold-500/30 hover:border-gold-400 font-semibold text-base transition-all"
                  >
                    <span>Criar ou Hospedar Projeto</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Quick Metrics */}
                <div className="pt-8 grid grid-cols-3 gap-4 border-t border-zinc-800/80 max-w-lg mx-auto lg:mx-0">
                  <div>
                    <span className="font-display text-2xl sm:text-3xl font-bold text-gold-400 block">
                      99.9%
                    </span>
                    <span className="text-xs text-zinc-400">Uptime Global Edge</span>
                  </div>
                  <div>
                    <span className="font-display text-2xl sm:text-3xl font-bold text-gold-400 block">
                      &lt; 25ms
                    </span>
                    <span className="text-xs text-zinc-400">Latência Média</span>
                  </div>
                  <div>
                    <span className="font-display text-2xl sm:text-3xl font-bold text-gold-400 block">
                      100%
                    </span>
                    <span className="text-xs text-zinc-400">Git & Vercel CI/CD</span>
                  </div>
                </div>
              </div>

              {/* Hero Right Column - Brand Logo Card Showcase */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative group w-full max-w-md">
                  {/* Outer Glowing Ring */}
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 rounded-3xl blur-xl opacity-35 group-hover:opacity-60 transition duration-700 animate-pulse-slow" />

                  <div className="relative rounded-3xl bg-black border border-gold-500/40 p-6 sm:p-8 shadow-2xl overflow-hidden flex flex-col items-center">
                    <div className="relative w-full aspect-square max-w-[320px] rounded-2xl overflow-hidden flex items-center justify-center">
                      <Image
                        src="/logo.jpg"
                        alt="Triforce System Official Logo"
                        width={400}
                        height={400}
                        priority
                        className="object-contain w-full h-full transform group-hover:scale-105 transition duration-700"
                      />
                    </div>

                    {/* Bottom Status Strip inside Hero Card */}
                    <div className="w-full mt-4 pt-4 border-t border-zinc-800/90 flex items-center justify-between text-xs font-mono">
                      <span className="text-zinc-400 flex items-center gap-1.5">
                        <Server className="w-3.5 h-3.5 text-gold-400" />
                        TRIFORCE CORE v2.5
                      </span>
                      <span className="text-emerald-400 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        CLUSTER ATIVO
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VITRINE / HUB DE SITES HOSPEDADOS */}
        <ProjectsShowcase />

        {/* OS 3 PILARES DA TRIFORCE */}
        <TriforcePillars />

        {/* INFRAESTRUTURA GIT + VERCEL */}
        <DeployWorkflowSection />

        {/* CONTATO / ORÇAMENTO */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
