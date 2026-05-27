'use client';

import React from 'react';
import Image from 'next/image';
import WhatsAppCTA from './WhatsAppCTA';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#d1d9e0] bg-white/95 backdrop-blur-md">
      <div className="container mx-auto px-6 max-w-[1200px] h-16 flex items-center justify-between">

        {/* Brand Logo */}
        <div className="flex items-center">
          <Image
            src="/logo-lopes.png"
            alt="Lopes Manutenção de Câmaras Frigoríficas"
            width={130}
            height={44}
            priority
            className="h-10 w-auto object-contain"
          />
        </div>

        {/* Technical Status Indicator & Quick Contact */}
        <div className="hidden md:flex items-center gap-6 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-[#20bf55]" />
            Plantão Operacional
          </span>
          <span className="text-primary/30">|</span>
          <span>Atendimento em Todo o RS</span>
        </div>

        {/* CTA Button */}
        <div>
          <WhatsAppCTA className="px-4 py-2 text-[10px] tracking-wider uppercase font-extrabold rounded-[4px] bg-[#00b4d8] hover:bg-[#00a2c2]">
            Falar com Lopes
          </WhatsAppCTA>
        </div>

      </div>
    </header>
  );
}
