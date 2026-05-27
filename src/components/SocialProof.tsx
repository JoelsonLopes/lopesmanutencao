import React from 'react';

export default function SocialProof() {
  return (
    <section className="bg-muted py-10 border-b border-border">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="flex flex-col items-center">
          
          {/* Section subtitle */}
          <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-muted-foreground mb-6">
            CONTRATADO POR GRANDES REDES E ESTABELECIMENTOS LOCAIS
          </span>

          {/* Grid of Client Logos & Trust Badges */}
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
            
            {/* Rede Asun */}
            <div className="w-full bg-card p-4 rounded-[4px] border border-[#d1d9e0] flex flex-col items-center justify-center grayscale hover:grayscale-0 transition duration-300">
              <span className="font-heading text-lg font-black text-primary tracking-tight uppercase">REDE ASUN</span>
              <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest mt-1">Supermercados</span>
            </div>

            {/* Super Macrozatti */}
            <div className="w-full bg-card p-4 rounded-[4px] border border-[#d1d9e0] flex flex-col items-center justify-center grayscale hover:grayscale-0 transition duration-300">
              <span className="font-heading text-lg font-black text-primary tracking-tight uppercase">MACROZATTI</span>
              <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest mt-1">Atacado & Varejo</span>
            </div>

            {/* Mercado Medianeira */}
            <div className="w-full bg-card p-4 rounded-[4px] border border-[#d1d9e0] flex flex-col items-center justify-center grayscale hover:grayscale-0 transition duration-300">
              <span className="font-heading text-lg font-black text-primary tracking-tight uppercase">MEDIANEIRA</span>
              <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest mt-1">Mercado & Açougue</span>
            </div>

            {/* CNPJ Badge */}
            <div className="w-full bg-primary p-4 rounded-[4px] border border-primary/20 flex flex-col items-center justify-center text-white">
              <span className="text-[10px] font-mono font-bold tracking-wider text-cyan-400">CNPJ COMPLIANCE</span>
              <span className="text-[9px] font-mono text-white/70 mt-1">59.909.503/0001-27</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
