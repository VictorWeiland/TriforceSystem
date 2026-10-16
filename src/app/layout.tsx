import type { Metadata } from "next";
import { Cinzel, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-cinzel",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Triforce System | Engenharia de Software & Cloud Hosting Hub",
  description:
    "Desenvolvimento de sistemas web de alta performance, SaaS, Landing Pages e hospedagem centralizada na nuvem com tecnologia Next.js, TypeScript e Vercel.",
  icons: {
    icon: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${cinzel.variable} ${inter.variable} ${jetbrainsMono.variable} dark`}
    >
      <body className="font-sans antialiased bg-obsidian-950 text-zinc-100 selection:bg-gold-500 selection:text-obsidian-950">
        {children}
      </body>
    </html>
  );
}
