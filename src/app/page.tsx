import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import Differentials from "@/components/Differentials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Lopes Manutenção",
    "image": "https://lopesmanutencao.com.br/logomarca.png",
    "@id": "https://lopesmanutencao.com.br",
    "url": "https://lopesmanutencao.com.br",
    "telephone": "+5551994043311",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Atendimento em todo o Rio Grande do Sul",
      "addressLocality": "Porto Alegre",
      "addressRegion": "RS",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -30.0346,
      "longitude": -51.2177
    },
    "description": "Especialistas em troca de gaxetas, molas e vedações de câmaras frigoríficas e balcões comerciais com atendimento em todo o Rio Grande do Sul.",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  return (
    <>
      {/* Schema de SEO Local */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Cabeçalho Frosted Navigation */}
      <Header />

      <main className="flex-1">
        {/* Seção Hero */}
        <Hero />

        {/* Seção de Clientes / Autoridade */}
        <SocialProof />

        {/* Seção de Serviços Detalhados */}
        <Services />

        {/* Seção de Diferenciais de Negócio */}
        <Differentials />

        {/* Seção de FAQ / Perguntas Frequentes */}
        <FAQ />
      </main>

      {/* Rodapé Corporativo */}
      <Footer />
    </>
  );
}
