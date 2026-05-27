import React from 'react';
import Image from 'next/image';
import WhatsAppCTA from './WhatsAppCTA';

interface ServiceCard {
  slug: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

export default function Services() {
  const listServices: ServiceCard[] = [
    {
      slug: 'vedacao',
      title: 'Vedações & Gaxetas Térmicas',
      description: 'Substituição especializada de gaxetas imantadas de borracha e aplicação de fitas vedantes de alto desempenho.',
      features: [
        'Troca de gaxetas envelhecidas ou rasgadas',
        'Cálculo milimétrico de estanqueidade',
        'Redução imediata da perda de carga fria',
        'Menor ciclo de funcionamento do compressor'
      ],
      image: '/cold_room_gasket_replacement.png'
    },
    {
      slug: 'mecanica',
      title: 'Mecânica de Portas Frigoríficas',
      description: 'Manutenção estrutural e substituição de ferragens pesadas, dobradiças e molas de torção robustas.',
      features: [
        'Instalação de molas de torção metálicas',
        'Troca de dobradiças industriais reforçadas',
        'Ajuste e alinhamento do trilho de correr',
        'Garantia de fechamento hermético mecânico'
      ],
      image: '/heavy_duty_cold_room_hinges.png'
    },
    {
      slug: 'balcao',
      title: 'Revitalização de Balcões Frios',
      description: 'Modernização estética, desgerminação sanitária profunda e iluminação LED branca brilhante para cortes e laticínios.',
      features: [
        'Instalação de LEDs de alta eficiência fria',
        'Substituição de cabeceiras térmicas gastas',
        'Desgerminação e higienização antibacteriana',
        'Destaque visual impecável dos produtos expostos'
      ],
      image: '/supermarket_dairy_display_case.png'
    },
    {
      slug: 'gaxeta-encaixe',
      title: 'Perfis de Encaixe Sob Medida',
      description: 'Fabricação e instalação ágil de perfis de borracha sob medida para balcões e câmaras frias.',
      features: [
        'Perfis magnéticos de encaixe rápido',
        'Adaptação a qualquer modelo ou fabricante',
        'Instalação limpa que preserva os alimentos',
        'Borrachas anti-fungo de alta durabilidade'
      ],
      image: '/custom_magnetic_profile_gaskets.png'
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-background border-b border-border">
      <div className="container mx-auto px-6 max-w-[1200px]">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-secondary block mb-2">
            ESPECIFICAÇÕES TÉCNICAS E SERVIÇOS
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-primary uppercase">
            O Que Nós Resolvemos
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mt-4" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {listServices.map((service) => (
            <div 
              key={service.slug}
              className="bg-card rounded-[8px] border border-[#d1d9e0] overflow-hidden flex flex-col justify-between hover:shadow-md transition-all duration-300 group"
            >
              <div>
                {/* Visual Header using Real Photos */}
                <div className="relative w-full h-48 bg-muted overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 580px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent pointer-events-none" />
                  
                  {/* Category overlay */}
                  <span className="absolute bottom-4 left-4 bg-primary/95 text-white font-mono text-[9px] uppercase tracking-wider px-2 py-1 rounded-[2px] border border-white/10">
                    SPEC CODE: {service.slug.toUpperCase()}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-primary mb-3 uppercase tracking-tight">
                    {service.title}
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Tech Specs list */}
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-foreground">
                        <svg className="w-4 h-4 text-[#20bf55] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                        </svg>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button - minimal border radius */}
              <div className="p-6 pt-0">
                <WhatsAppCTA 
                  service={service.slug}
                  className="w-full py-3.5 text-xs font-bold tracking-wider uppercase bg-primary hover:bg-primary/95 text-white rounded-[4px] shadow-none"
                >
                  Solicitar Orçamento de {service.title.split(' ')[0]}
                </WhatsAppCTA>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
