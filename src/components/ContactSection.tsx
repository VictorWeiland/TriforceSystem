"use client";

import React, { useState } from "react";
import { Send, MessageSquare, Mail, MapPin, CheckCircle, ArrowRight } from "lucide-react";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("Desenvolvimento de Site / Landing Page");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Vim pela Landing Page da *Triforce System*.\n\n*Nome:* ${name}\n*Email:* ${email}\n*Interesse:* ${projectType}\n*Mensagem:* ${message}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/5511956920083?text=${encoded}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section
      id="contato"
      className="relative py-24 sm:py-32 border-t border-gold-500/15 bg-obsidian-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 block mb-3">
                Pronto para o Próximo Nível?
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight">
                Construa e Hospede seu Projeto na{" "}
                <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
                  Triforce System
                </span>
              </h2>
              <p className="mt-4 text-zinc-400 text-base leading-relaxed">
                Seja para criar um novo sistema do zero, lançar uma landing page de alta conversão ou
                hospedar sua aplicação na nossa infraestrutura Cloud, estamos prontos.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-obsidian-900 border border-zinc-800/80">
                <div className="p-3 rounded-lg bg-gold-500/10 text-gold-400 border border-gold-500/20">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Atendimento Rápido via WhatsApp</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Orçamentos, suporte técnico e consultoria direto pelo{" "}
                    <a
                      href="https://wa.me/5511956920083"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold-400 hover:underline font-mono font-semibold"
                    >
                      (11) 95692-0083
                    </a>
                    .
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-obsidian-900 border border-zinc-800/80">
                <div className="p-3 rounded-lg bg-gold-500/10 text-gold-400 border border-gold-500/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">E-mail Corporativo</h4>
                  <p className="text-xs text-zinc-400 mt-0.5 font-mono">contato@triforcesystem.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-obsidian-900 border border-zinc-800/80">
                <div className="p-3 rounded-lg bg-gold-500/10 text-gold-400 border border-gold-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Infraestrutura Global</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Brasil • Estados Unidos • Europa (Edge Network)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-obsidian-800/90 to-obsidian-900 border border-gold-500/30 shadow-[0_0_50px_-15px_rgba(245,158,11,0.15)]">
              <h3 className="text-xl font-bold text-white mb-6">
                Iniciar um Novo Projeto ou Hospedagem
              </h3>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-xl font-bold text-white">Mensagem Preparada com Sucesso!</h4>
                  <p className="text-sm text-zinc-400 max-w-md mx-auto">
                    Abriremos o WhatsApp para finalizar o envio. Caso prefira, você também pode enviar
                    outro pedido abaixo.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl bg-obsidian-800 text-gold-400 text-sm font-medium border border-gold-500/30 hover:bg-obsidian-700 transition"
                  >
                    Enviar nova mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleWhatsAppRedirect} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">
                        Seu Nome *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ex: Link Hyrule"
                        className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-zinc-800 focus:border-gold-500 focus:outline-none text-sm text-white placeholder-zinc-600 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">
                        Seu E-mail *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="voce@empresa.com"
                        className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-zinc-800 focus:border-gold-500 focus:outline-none text-sm text-white placeholder-zinc-600 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">
                      O que você precisa?
                    </label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-zinc-800 focus:border-gold-500 focus:outline-none text-sm text-white transition"
                    >
                      <option value="Desenvolvimento de Site / Landing Page">
                        Desenvolvimento de Site / Landing Page
                      </option>
                      <option value="Sistema Web / SaaS sob Medida">
                        Sistema Web / SaaS sob Medida
                      </option>
                      <option value="Hospedagem Cloud & Gestão de Domínio">
                        Hospedagem Cloud & Gestão de Domínio
                      </option>
                      <option value="Automação com IA / APIs">Automação com IA / APIs</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">
                      Detalhes do Projeto *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Conte um pouco sobre a sua ideia, sistema ou necessidade de hospedagem..."
                      className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-zinc-800 focus:border-gold-500 focus:outline-none text-sm text-white placeholder-zinc-600 transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-obsidian-950 font-bold text-sm sm:text-base shadow-[0_0_25px_rgba(245,158,11,0.35)] hover:shadow-[0_0_35px_rgba(245,158,11,0.55)] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Solicitação via WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
