import React from "react";
import { GitBranch, Cloud, Globe2, TerminalSquare, ArrowUpRight, CheckCircle2 } from "lucide-react";

export function DeployWorkflowSection() {
  const steps = [
    {
      step: "01",
      title: "Repositório Git & Versionamento",
      description:
        "Todo código-fonte dos seus sites e sistemas fica versionado no GitHub com branches protegidas e histórico completo.",
      icon: <GitBranch className="w-6 h-6 text-gold-400" />,
      command: "git push origin main",
    },
    {
      step: "02",
      title: "Build & Deploy Instantâneo na Vercel",
      description:
        "A cada alteração enviada, a Vercel compila seu projeto Next.js/TypeScript automaticamente, roda testes e publica na Edge Network.",
      icon: <Cloud className="w-6 h-6 text-gold-400" />,
      command: "vercel --prod",
    },
    {
      step: "03",
      title: "Domínios, Subdomínios & SSL",
      description:
        "Seus sites ficam disponíveis no domínio oficial ou subdomínios dedicados (ex: app.triforcesystem.com) com HTTPS automático.",
      icon: <Globe2 className="w-6 h-6 text-gold-400" />,
      command: "https://*.triforcesystem.com",
    },
  ];

  return (
    <section
      id="infraestrutura"
      className="relative py-24 sm:py-32 border-t border-gold-500/15 bg-obsidian-900/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-mono uppercase tracking-wider">
              <TerminalSquare className="w-3.5 h-3.5" />
              <span>Git + Vercel Architecture</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight">
              Como Hospedamos e Escalamos Seus Sites na{" "}
              <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 bg-clip-text text-transparent">
                Triforce Cloud
              </span>
            </h2>

            <p className="text-zinc-400 text-base leading-relaxed">
              Esqueça servidores lentos ou configurações manuais complexas. Nossa arquitetura utiliza
              o fluxo moderno de **GitOps & Serverless Edge** para garantir que todos os seus sites
              estejam sempre rápidos, seguros e online.
            </p>

            <div className="space-y-4 pt-2">
              {steps.map((item) => (
                <div
                  key={item.step}
                  className="p-5 rounded-2xl bg-obsidian-950/90 border border-zinc-800/90 hover:border-gold-500/40 transition flex items-start gap-4"
                >
                  <div className="p-3 rounded-xl bg-gold-500/10 border border-gold-500/20 shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-bold text-white">{item.title}</h3>
                      <span className="text-xs font-mono text-gold-500/80 font-bold">
                        STEP {item.step}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-400 mt-1 leading-relaxed">{item.description}</p>
                    <div className="mt-3 inline-block px-3 py-1 rounded bg-obsidian-900 border border-zinc-800 font-mono text-xs text-gold-300">
                      $ {item.command}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Interactive Terminal Preview */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-obsidian-950 border border-gold-500/30 shadow-[0_0_60px_-15px_rgba(245,158,11,0.2)] overflow-hidden">
              {/* Terminal Top Bar */}
              <div className="px-4 py-3 bg-obsidian-900 border-b border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs font-mono text-zinc-400">
                  triforce-deploy-pipeline — bash
                </span>
                <span className="text-xs font-mono text-emerald-400">● READY</span>
              </div>

              {/* Terminal Body */}
              <div className="p-6 font-mono text-xs sm:text-sm space-y-3 text-zinc-300 leading-relaxed">
                <div>
                  <span className="text-gold-400">triforce@system</span>:
                  <span className="text-sky-400">~/workspace</span>$ git push origin main
                </div>
                <div className="text-zinc-500">
                  Enumerating objects: 28, done.
                  <br />
                  Counting objects: 100% (28/28), done.
                  <br />
                  Writing objects: 100% (28/28), 14.82 KiB | 7.41 MiB/s, done.
                </div>
                <div className="pt-2 text-gold-300">
                  ⚡ Vercel Edge Integration Triggered...
                </div>
                <div className="pl-3 border-l-2 border-gold-500/40 space-y-1.5 text-zinc-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Building Next.js 15 + TypeScript application...</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Optimizing static & dynamic routes...</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>SSL Certificate provisioned automatically</span>
                  </div>
                </div>

                <div className="pt-3">
                  <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-300">
                    <div className="font-bold flex items-center justify-between">
                      <span>✓ DEPLOYMENT COMPLETED IN 18.4s</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                    <p className="text-xs text-emerald-400/80 mt-1">
                      Production URL: https://triforcesystem.vercel.app
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
