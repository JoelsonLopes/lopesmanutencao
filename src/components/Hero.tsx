import React from 'react';
import Image from 'next/image';
import WhatsAppCTA from './WhatsAppCTA';

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-white py-20 lg:py-32 border-b border-white/10">
      {/* Background Image & Overlay System */}
      <div className="absolute inset-0 w-full h-full bg-[#001026]">
        <Image
          src="/modern_commercial_industrial_cold_room_very_clean_bright_.png"
          alt="Instalação de Câmara Frigorífica Industrial Lopes"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dark gradient overlay to guarantee WCAG AAA contrast ratio */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001026]/98 via-[#001026]/90 to-[#001026]/60 lg:from-[#001026]/98 lg:via-[#001026]/90 lg:to-[#001026]/50" />
        
        {/* Chilled industrial grid line pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.81_0.01_250/6%)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.81_0.01_250/6%)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
      </div>

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Technical Content */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Tag - Industrial Spec */}
            <span className="inline-flex items-center gap-2 rounded-[4px] bg-white/10 px-3 py-1 text-xs font-mono font-medium text-secondary uppercase tracking-widest mb-6 border border-white/10">
              <span className="size-2 rounded-full bg-[#20bf55] animate-pulse" />
              Atendimento em todo o Rio Grande do Sul
            </span>

            {/* Headline (Outfit, Bold) */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6 uppercase">
              Mantenha o Frio.<br />
              <span className="text-secondary">Reduza os Custos.</span>
            </h1>

            {/* Subtitle (Inter, Body-lg) */}
            <p className="font-sans text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8">
              Manutenção técnica de alta precisão em câmaras frigoríficas. Troca de gaxetas imantadas, molas de torção e vedações estruturais com <strong className="text-white font-semibold">emissão de Nota Fiscal</strong> e <strong className="text-white font-semibold">garantia de 30 dias</strong>. Foco absoluto na estanqueidade térmica para supermercados, padarias e açougues.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
              <WhatsAppCTA className="w-full sm:w-auto px-8 py-4 text-sm font-bold tracking-wider">
                Solicitar Orçamento via WhatsApp
              </WhatsAppCTA>
              
              {/* Technical Indicator */}
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider">
                <svg className="w-4 h-4 text-[#20bf55]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"></path>
                </svg>
                Contrato & Nota Fiscal Emitidos
              </div>
            </div>
          </div>

          {/* Right Column: Technical Monitoring Panel (Frosted Glass) */}
          <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end items-center">
            <div className="relative w-full max-w-[380px] backdrop-blur-md bg-[#001026]/75 p-6 rounded-[8px] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] font-mono text-white text-xs">
              {/* Industrial Rivets */}
              <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-white/20" />
              <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-white/20" />
              <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-white/20" />
              <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-white/20" />

              {/* Panel Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <span className="text-[10px] tracking-widest text-slate-400 uppercase">TELEMETRIA CÂMARA LOPES</span>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#20bf55] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#20bf55]"></span>
                  </span>
                  <span className="text-[10px] text-[#20bf55] font-bold tracking-wider">ATIVO</span>
                </div>
              </div>

              {/* Temperature Sensor Display */}
              <div className="bg-black/40 border border-white/5 rounded-[4px] p-4 text-center mb-4">
                <div className="text-[9px] text-slate-500 uppercase tracking-widest mb-1">Temperatura Alvo</div>
                <div className="text-3xl font-bold text-cyan-400 tracking-tight">-18.0°C</div>
                <div className="text-[9px] text-[#20bf55] uppercase tracking-widest mt-1 font-semibold">Estabilidade Térmica Máxima</div>
              </div>

              {/* System Specifications / Logs */}
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-slate-400">GAXETAS IMANTADAS</span>
                  <span className="text-[#20bf55] font-bold">100% VEDADO</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-slate-400">PERDA DE CARGA FRIA</span>
                  <span className="text-cyan-400 font-bold">0.0% (NULA)</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-slate-400">COMPORTAMENTO MOLA</span>
                  <span className="text-slate-300">ALINHAMENTO OK</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">EFICIÊNCIA ENERGÉTICA</span>
                  <span className="text-[#20bf55] font-bold">MAXIMIZADA</span>
                </div>
              </div>

              {/* Decorative Barcode / ID */}
              <div className="mt-6 border-t border-white/10 pt-4 flex items-center justify-between">
                <div className="h-6 w-1/2 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.1),rgba(255,255,255,0.1)_2px,transparent_2px,transparent_6px)]" />
                <span className="text-[9px] text-slate-500 font-mono">SPEC-ISO: 9001:2015</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
