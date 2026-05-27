import React from 'react';

export default function Differentials() {
  return (
    <section className="py-20 bg-muted border-b border-border">
      <div className="container mx-auto px-6 max-w-[1200px]">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-secondary block mb-2">
            MÉTRICAS E VANTAGENS COMERCIAIS
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-primary uppercase">
            Eficiência Comprovada
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mt-4" />
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Economia de Energia */}
          <div className="bg-card p-8 rounded-[8px] border border-[#d1d9e0] hover:shadow-sm transition duration-300 flex flex-col justify-between">
            <div>
              {/* Tonal Indicator Accent */}
              <div className="w-10 h-10 rounded-[4px] bg-[#395f95]/10 text-[#395f95] flex items-center justify-center mb-6">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path>
                </svg>
              </div>
              <h3 className="font-heading text-lg font-bold text-primary mb-3 uppercase tracking-tight">
                Redução de Consumo
              </h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                Portas frigoríficas desreguladas ou com gaxetas rasgadas obrigam o motor a trabalhar dobrado para compensar a perda térmica. A vedação precisa restaura o isolamento original, reduzindo o consumo de energia elétrica mensal do comércio.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-border/50">
              <span className="font-mono text-xs font-bold text-[#20bf55]">RETORNO FINANCEIRO IMEDIATO</span>
            </div>
          </div>

          {/* Conformidade Fiscal */}
          <div className="bg-card p-8 rounded-[8px] border border-[#d1d9e0] hover:shadow-sm transition duration-300 flex flex-col justify-between">
            <div>
              {/* Tonal Indicator Accent */}
              <div className="w-10 h-10 rounded-[4px] bg-[#395f95]/10 text-[#395f95] flex items-center justify-center mb-6">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.03 0 1.9.693 2.166 1.638m-7.377 2.24a4.5 4.5 0 1115.002 0V18a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 18V6.25a2.25 2.25 0 012.25-2.25h1.5A2.25 2.25 0 0110.5 6.25v.002z"></path>
                </svg>
              </div>
              <h3 className="font-heading text-lg font-bold text-primary mb-3 uppercase tracking-tight">
                Idoneidade Fiscal (NF)
              </h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                Empresa registrada com **CNPJ ativo** pronto para homologação e faturamento de prestadores de serviços B2B. Emitimos Notas Fiscais eletrônicas de serviços de forma ágil, facilitando processos de contas a pagar em grandes redes.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-border/50">
              <span className="font-mono text-xs font-bold text-primary">COMPLIANCE CORPORATIVO B2B</span>
            </div>
          </div>

          {/* Rapidez e Operação */}
          <div className="bg-card p-8 rounded-[8px] border border-[#d1d9e0] hover:shadow-sm transition duration-300 flex flex-col justify-between">
            <div>
              {/* Tonal Indicator Accent */}
              <div className="w-10 h-10 rounded-[4px] bg-[#395f95]/10 text-[#395f95] flex items-center justify-center mb-6">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="font-heading text-lg font-bold text-primary mb-3 uppercase tracking-tight">
                Agilidade Sem Pausa
              </h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                Fabricação prévia em nossa oficina com base em medidas exatas coletadas anteriormente. A instalação final no local é rápida, limpa e minimamente invasiva, garantindo que o seu estabelecimento não precise interromper as vendas.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-border/50">
              <span className="font-mono text-xs font-bold text-[#20bf55]">ZERO DESPERDÍCIO DE CARNES/FRIOS</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
