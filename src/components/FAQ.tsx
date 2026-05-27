'use client';

import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const listFaq: FAQItem[] = [
    {
      question: 'Qual é o prazo de garantia dos serviços e materiais?',
      answer: 'Oferecemos garantia de 01 mês (30 dias) em todos os serviços executados e materiais aplicados pela Lopes Manutenção. Isso assegura total tranquilidade para a operação do seu comércio.',
    },
    {
      question: 'Qual é a região de atendimento de vocês?',
      answer: 'Atendemos toda a cidade de Porto Alegre, Região Metropolitana, Serra Gaúcha, Litoral e todos os demais municípios e regiões do estado do Rio Grande do Sul. Nosso deslocamento é planejado e programado para atender chamados comerciais e de urgência com a máxima agilidade técnica.',
    },
    {
      question: 'Como funciona o fluxo de pagamento para empresas?',
      answer: 'Trabalhamos com entrada/sinal para reserva de materiais especiais (especialmente perfis de gaxetas sob medida) e o saldo restante é pago na conclusão dos serviços. Para faturamentos e contratos em redes de supermercados corporativas, dispomos de condições especiais de prazo sob consulta de CNPJ.',
    },
    {
      question: 'A troca de gaxetas exige que eu desligue o balcão ou a câmara?',
      answer: 'Na maioria dos casos, não! Nossa equipe realiza a medição prévia e a fabricação das gaxetas sob medida em nossa oficina. A instalação final no local é limpa e rápida, levando apenas alguns minutos, mantendo a temperatura de segurança e a operação do seu mercado ativa.',
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-background border-b border-border">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-secondary block mb-2">
            RESOLUÇÃO DE DÚVIDAS E OBJEÇÕES
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-primary uppercase">
            Perguntas Frequentes
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mt-4" />
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {listFaq.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="border border-[#d1d9e0] rounded-[4px] overflow-hidden bg-card transition duration-300"
              >
                {/* Accordion Toggle Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left font-heading font-bold text-primary hover:text-secondary transition duration-200"
                >
                  <span className="text-sm sm:text-base uppercase tracking-tight">{item.question}</span>
                  <svg
                    className={`w-4 h-4 text-muted-foreground shrink-0 transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-secondary' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                  </svg>
                </button>

                {/* Content Panel */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 border-t border-[#d1d9e0]' : 'max-h-0'}`}
                >
                  <p className="p-5 font-sans text-muted-foreground text-sm leading-relaxed bg-[#f0f3ff]">
                    {item.answer}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
