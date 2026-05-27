import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lopes Manutenção — Câmaras Frigoríficas no Rio Grande do Sul",
  description: "Especialistas em troca de gaxetas, molas e vedações de câmaras frigoríficas e balcões comerciais. Atendimento técnico especializado em todo o Rio Grande do Sul.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    title: "Lopes Manutenção — Câmaras Frigoríficas no Rio Grande do Sul",
    description: "Especialistas em troca de gaxetas, molas e vedações de câmaras frigoríficas e balcões comerciais. Atendimento em todo o estado do RS.",
    type: "website",
    locale: "pt_BR",
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
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
