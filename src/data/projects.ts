export type ProjectCategory =
  | "Todos"
  | "SaaS & Saúde"
  | "E-Commerce & Delivery"
  | "Sites & Landing Pages";

export interface HostedProject {
  id: string;
  name: string;
  subdomain: string;
  url: string;
  description: string;
  category: Exclude<ProjectCategory, "Todos">;
  status: "online" | "maintenance" | "deploying";
  uptime: string;
  latency: string;
  techStack: string[];
  featured?: boolean;
  metrics?: string;
}

export const HOSTED_PROJECTS: HostedProject[] = [
  {
    id: "odontogest",
    name: "OdontoGEST",
    subdomain: "odonto-gest-alpha.vercel.app",
    url: "https://odonto-gest-alpha.vercel.app/",
    description:
      "Plataforma SaaS voltada para clínicas e profissionais da saúde, desenvolvida para agilizar e organizar o fluxo de atendimento. Funciona como um diretório centralizado onde pacientes encontram clínicas qualificadas e realizam agendamentos de horários online de maneira rápida e intuitiva.",
    category: "SaaS & Saúde",
    status: "online",
    uptime: "99.98%",
    latency: "18ms",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "NextAuth",
      "Cloudinary",
      "Vercel",
    ],
    featured: true,
    metrics: "Agendamento Online",
  },
  {
    id: "cardapioMassas",
    name: "O Padeiro — Massas & Pães Artesanais",
    subdomain: "cardapio-massas-artesanais.vercel.app",
    url: "https://cardapio-massas-artesanais.vercel.app/",
    description:
      "Aplicação web de comércio eletrônico local e cardápio digital interativo para encomendas de produtos artesanais (massas frescas, nhoques recheados, pães de fermentação natural e focaccias). Permite personalizar porções/sabores, gerenciar o carrinho de compras e enviar pedidos integrados ao WhatsApp.",
    category: "E-Commerce & Delivery",
    status: "online",
    uptime: "99.99%",
    latency: "14ms",
    techStack: [
      "Node.js",
      "TypeScript",
      "Express",
      "SQLite / Turso",
      "Tailwind CSS",
      "Vanilla JS (esbuild)",
      "Vercel",
    ],
    featured: true,
    metrics: "Pedidos via WhatsApp",
  },
];

export interface TriforcePillar {
  id: string;
  triforceTrait: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  badge: string;
}

export const TRIFORCE_PILLARS: TriforcePillar[] = [
  {
    id: "power",
    triforceTrait: "PODER",
    title: "Performance & Infraestrutura Cloud",
    subtitle: "Força bruta, velocidade extrema e alta disponibilidade",
    description:
      "Hospedamos e distribuímos seus sites em rede global Edge (Vercel / Cloud) com carregamento instantâneo, CDN inteligente e escalabilidade automática.",
    features: [
      "Deploy contínuo via Git (CI/CD automatizado)",
      "Nota máxima em Core Web Vitals & SEO",
      "Servidores Edge com latência ultra-baixa",
      "Monitoramento de uptime 24/7 em tempo real",
    ],
    badge: "Vértice Superior",
  },
  {
    id: "wisdom",
    triforceTrait: "SABEDORIA",
    title: "Engenharia & Arquitetura de Software",
    subtitle: "Código limpo, design inteligente e soluções sob medida",
    description:
      "Desenvolvemos sistemas web, SaaS, cardápios digitais e landing pages modernas utilizando TypeScript, Next.js, Node.js e bancos de dados escaláveis.",
    features: [
      "Arquitetura Full-Stack moderna (Next.js, Node.js & TypeScript)",
      "Sistemas de agendamento, gestão e cardápios interativos",
      "Integrações com WhatsApp, Bancos Cloud (Turso/Postgres) e APIs",
      "Código modular e fácil de expandir",
    ],
    badge: "Vértice Esquerdo",
  },
  {
    id: "courage",
    triforceTrait: "CORAGEM",
    title: "Segurança, Estabilidade & Suporte",
    subtitle: "Proteção inabalável para suas aplicações e dados",
    description:
      "Seus projetos blindados com certificados SSL automáticos, proteção DDoS, backups versionados e suporte técnico dedicado para você focar apenas em crescer.",
    features: [
      "SSL/TLS avançado e criptografia ponta a ponta",
      "Proteção contra ataques DDoS e Firewall WAF",
      "Versionamento seguro e rollback em 1 clique",
      "Gestão completa de domínios e hospedagem Vercel",
    ],
    badge: "Vértice Direito",
  },
];
