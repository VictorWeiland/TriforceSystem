# 🔺 Triforce System — Landing Page & Cloud Hub

Landing Page oficial e Central de Projetos (**Vitrine de Sites Hospedados**) da marca **Triforce System**, construída com **Next.js 15 (App Router)**, **TypeScript** e **Tailwind CSS**.

## ✨ Estrutura da Página

- **Hero Impactante (Preto Obsidian & Dourado):** Com a logo oficial da Triforce System, métricas de performance e status do cluster em tempo real.
- **Vitrine / Hub de Sites e Sistemas (`#vitrine`):** Catálogo interativo com busca em tempo real, filtro por categoria (*SaaS & Web Apps*, *Sites & Landing Pages*, *APIs & Sistemas*), indicador de status (*Online / Deploying*), latência Edge, stack tecnológica e link direto para visitar cada site.
- **Os 3 Pilares da Triforce (`#pilares`):**
  - **Poder:** Performance & Infraestrutura Cloud (Edge, CI/CD, Core Web Vitals)
  - **Sabedoria:** Engenharia & Arquitetura de Software (Next.js, TypeScript, SaaS, IA)
  - **Coragem:** Segurança, Estabilidade & Suporte (SSL, DDoS Protection, Subdomínios)
- **Fluxo de Deploy Git + Vercel (`#infraestrutura`):** Explicação visual e terminal interativo demonstrando como os projetos são hospedados e escalados.
- **Formulário de Contato Integrado ao WhatsApp (`#contato`):** Envia solicitações de orçamento ou hospedagem diretamente para o seu WhatsApp comercial.

---

## 🛠️ Como editar ou adicionar seus próprios sites na Vitrine

Todos os sites exibidos no Hub ficam centralizados em um único arquivo fácil de editar:
👉 [`src/data/projects.ts`](./src/data/projects.ts)

Basta adicionar ou alterar um objeto dentro da lista `HOSTED_PROJECTS`:

```ts
{
  id: "meu-novo-site",
  name: "Nome do Seu Site ou Sistema",
  subdomain: "app.triforcesystem.com",
  url: "https://seu-site.vercel.app",
  description: "Descrição curta do seu projeto ou cliente.",
  category: "Sites & Landing Pages", // ou "SaaS & Web Apps" | "APIs & Sistemas"
  status: "online",
  uptime: "99.99%",
  latency: "15ms",
  techStack: ["Next.js", "TypeScript", "Tailwind"],
  metrics: "Produção",
}
```

---

## 🚀 Como rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000` no navegador.

---

## ☁️ Como hospedar no GitHub + Vercel (Passo a Passo)

1. **Suba este repositório para o seu GitHub:**
   ```bash
   git add .
   git commit -m "feat: landing page Triforce System"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/triforce-system.git
   git push -u origin main
   ```
2. **Conecte na Vercel:**
   - Acesse [vercel.com](https://vercel.com) e clique em **Add New... -> Project**.
   - Importe o repositório `triforce-system` do seu GitHub.
   - Clique em **Deploy** (a Vercel detecta Next.js + TypeScript automaticamente).
3. **Como hospedar vários sites na mesma marca (Subdomínios):**
   - Na Vercel, adicione seu domínio principal (ex: `triforcesystem.com.br`) neste projeto da Landing Page.
   - Para cada novo site ou sistema que você criar em outros repositórios, importe-os na Vercel e atribua subdomínios como `loja.triforcesystem.com.br`, `painel.triforcesystem.com.br`, etc., adicionando o link deles em `src/data/projects.ts`!
