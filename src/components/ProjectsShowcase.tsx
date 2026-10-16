"use client";

import React, { useState } from "react";
import {
  Globe,
  ExternalLink,
  Activity,
  Server,
  Layers,
  Code2,
  PlusCircle,
  Search,
  CheckCircle2,
  Clock,
  Sparkles,
} from "lucide-react";
import { HOSTED_PROJECTS, ProjectCategory, HostedProject } from "@/data/projects";

const CATEGORIES: ProjectCategory[] = [
  "Todos",
  "SaaS & Saúde",
  "E-Commerce & Delivery",
  "Sites & Landing Pages",
];

export function ProjectsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("Todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddGuide, setShowAddGuide] = useState(false);

  const filteredProjects = HOSTED_PROJECTS.filter((project) => {
    const matchesCategory =
      selectedCategory === "Todos" || project.category === selectedCategory;
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.subdomain.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getStatusBadge = (status: HostedProject["status"]) => {
    if (status === "online") {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-emerald-950/70 text-emerald-400 border border-emerald-500/30">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          ONLINE
        </span>
      );
    }
    if (status === "deploying") {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-amber-950/70 text-gold-400 border border-gold-500/30">
          <Clock className="w-3 h-3 animate-spin" />
          DEPLOYING
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-zinc-800 text-zinc-400 border border-zinc-700">
        MANUTENÇÃO
      </span>
    );
  };

  return (
    <section id="vitrine" className="relative py-24 sm:py-32 border-t border-gold-500/15">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gold-500/5 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold tracking-widest uppercase mb-4">
              <Server className="w-3.5 h-3.5" />
              <span>Triforce Cloud Ecosystem</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Vitrine & Hub de{" "}
              <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 bg-clip-text text-transparent">
                Sites Hospedados
              </span>
            </h2>
            <p className="mt-3 text-zinc-400 max-w-2xl text-base sm:text-lg">
              Acesse diretamente nossos sistemas, aplicações SaaS e landing pages em produção.
              Todos gerenciados com deploy contínuo via Git & Vercel.
            </p>
          </div>

          <button
            onClick={() => setShowAddGuide(!showAddGuide)}
            className="self-start md:self-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-obsidian-800 hover:bg-obsidian-700 border border-gold-500/30 text-gold-300 text-sm font-medium transition-all shadow-sm"
          >
            <PlusCircle className="w-4 h-4 text-gold-400" />
            <span>{showAddGuide ? "Ocultar Guia Rápido" : "Como adicionar meu próximo site?"}</span>
          </button>
        </div>

        {/* Collapsible Helper Box for the User to easily add their own sites */}
        {showAddGuide && (
          <div className="mb-10 p-6 rounded-2xl bg-gradient-to-r from-obsidian-900 via-obsidian-800 to-obsidian-900 border border-gold-500/40 shadow-[0_0_30px_rgba(245,158,11,0.1)] animate-fadeIn">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-gold-300 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-gold-400" />
                  Como adicionar ou conectar novos sites na sua Triforce System:
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Para listar novos projetos nesta vitrine, basta editar o arquivo{" "}
                  <code className="px-2 py-0.5 rounded bg-obsidian-950 text-gold-400 font-mono text-xs border border-gold-500/20">
                    src/data/projects.ts
                  </code>{" "}
                  e adicionar um novo item no array <code className="text-gold-300 font-mono text-xs">HOSTED_PROJECTS</code>.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3">
                  <div className="p-3.5 rounded-xl bg-obsidian-950/80 border border-zinc-800">
                    <span className="text-xs font-mono text-gold-400 font-bold">1. SUBDOMÍNIOS</span>
                    <p className="text-xs text-zinc-400 mt-1">
                      Na Vercel, conecte seu domínio principal à Landing Page e aponte subdomínios (ex:{" "}
                      <span className="text-zinc-200 font-mono">app.seusite.com</span>) para seus outros repositórios Git.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-obsidian-950/80 border border-zinc-800">
                    <span className="text-xs font-mono text-gold-400 font-bold">2. DEPLOY AUTOMÁTICO</span>
                    <p className="text-xs text-zinc-400 mt-1">
                      Cada <span className="text-zinc-200 font-mono">git push</span> atualiza automaticamente esta vitrine na Vercel em menos de 30 segundos.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-obsidian-950/80 border border-zinc-800">
                    <span className="text-xs font-mono text-gold-400 font-bold">3.MULTI-PROJETOS</span>
                    <p className="text-xs text-zinc-400 mt-1">
                      Você pode hospedar quantos sites quiser gratuitamente na Vercel/GitHub e centralizar todos os links aqui.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filters & Search Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10">
          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
            {CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                    active
                      ? "bg-gradient-to-r from-gold-500 to-gold-600 text-obsidian-950 font-semibold shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                      : "bg-obsidian-900 text-zinc-400 hover:text-gold-300 border border-zinc-800 hover:border-gold-500/30"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[280px]">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar site, stack ou domínio..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-obsidian-900 border border-zinc-800 focus:border-gold-500/60 focus:outline-none text-sm text-zinc-200 placeholder-zinc-500 transition"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl bg-gradient-to-b from-obsidian-800/90 to-obsidian-900/90 border border-zinc-800/90 hover:border-gold-500/50 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1 hover:shadow-[0_12px_40px_-10px_rgba(245,158,11,0.18)]"
            >
              {/* Top Gold Highlight Bar */}
              <div className="h-1 w-full bg-gradient-to-r from-transparent via-gold-500/40 to-transparent group-hover:via-gold-400 transition-all duration-500" />

              <div className="p-6 flex-1 flex flex-col">
                {/* Status + Category Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-medium text-gold-400/90 bg-gold-500/10 border border-gold-500/20 px-2.5 py-1 rounded-md">
                    {project.category}
                  </span>
                  {getStatusBadge(project.status)}
                </div>

                {/* Project Name & Subdomain */}
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-gold-300 transition-colors flex items-center gap-2">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 mt-1">
                    <Globe className="w-3.5 h-3.5 text-gold-500" />
                    <span>{project.subdomain}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-400 leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Metrics Bar */}
                <div className="grid grid-cols-3 gap-2 py-3 px-3.5 rounded-xl bg-obsidian-950/70 border border-zinc-800/80 mb-5 text-xs">
                  <div>
                    <span className="text-zinc-500 block text-[10px] font-mono uppercase">Uptime</span>
                    <span className="text-emerald-400 font-mono font-semibold flex items-center gap-1 mt-0.5">
                      <CheckCircle2 className="w-3 h-3" />
                      {project.uptime}
                    </span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[10px] font-mono uppercase">Edge Ping</span>
                    <span className="text-zinc-200 font-mono font-semibold flex items-center gap-1 mt-0.5">
                      <Activity className="w-3 h-3 text-gold-400" />
                      {project.latency}
                    </span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[10px] font-mono uppercase">Destaque</span>
                    <span className="text-gold-300 font-medium truncate block mt-0.5">
                      {project.metrics || "Ativo"}
                    </span>
                  </div>
                </div>

                {/* Tech Stack & Action Link */}
                <div className="flex items-center justify-between gap-3 pt-2 border-t border-zinc-800/80">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[11px] font-mono rounded bg-obsidian-950 text-zinc-300 border border-zinc-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-gold-500/15 hover:bg-gold-500 text-gold-300 hover:text-obsidian-950 font-semibold text-xs transition-all shrink-0 border border-gold-500/30"
                  >
                    <span>Visitar</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 rounded-2xl bg-obsidian-900/50 border border-zinc-800">
            <Layers className="w-10 h-10 text-gold-500/50 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white">Nenhum projeto encontrado</h3>
            <p className="text-sm text-zinc-400 mt-1">
              Tente ajustar o filtro ou buscar por outra tecnologia.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
