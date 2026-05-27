import React from 'react';
import Image from 'next/image';
import WhatsAppCTA from './WhatsAppCTA';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-white/5 py-16">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          {/* Column 1: Brand Info & Contacts */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="mb-4 bg-white p-2 rounded-[4px] border border-white/10 flex items-center justify-center">
              <Image
                src="/logo-lopes.png"
                alt="Lopes Manutenção"
                width={130}
                height={44}
                className="h-9 w-auto object-contain"
              />
            </div>
            <p className="font-sans text-sm text-white/60 max-w-sm leading-relaxed mb-6">
              Manutenção e engenharia especializada em refrigeração comercial e industrial. Foco total em estanqueidade mecânica, conservação de temperatura e eficiência de energia.
            </p>
            
            {/* Contact Details from Business Card */}
            <div className="space-y-2.5 font-mono text-[12px] text-white/70 mb-6">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 01-7.108-7.108c-.145-.44.02-.927.396-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"></path>
                </svg>
                <span>Watts: (51) 99404-3311</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path>
                </svg>
                <a href="mailto:jlcamaras@hotmail.com" className="hover:text-secondary transition-colors">jlcamaras@hotmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"></path>
                </svg>
                <a href="https://instagram.com/lopes_manutencao" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">@lopes_manutencao</a>
              </div>
            </div>

            <div className="bg-white/5 rounded-[4px] px-3 py-1.5 border border-white/10">
              <span className="text-[10px] font-mono text-white/40 block">CNPJ DE COMPLIANCE</span>
              <span className="text-[11px] font-mono text-secondary font-bold">59.909.503/0001-27</span>
            </div>
          </div>

          {/* Column 2: Tech Specs links */}
          <div className="md:col-span-3">
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider mb-4 font-mono text-secondary">
              SERVIÇOS TÉCNICOS
            </h4>
            <ul className="space-y-3 font-sans text-sm text-white/60">
              <li>Vedações Térmicas Câmaras Frias</li>
              <li>Mecânica de Portas Industriais</li>
              <li>Revitalização Balcões de Açougue</li>
              <li>Perfis Magnéticos sob Medida</li>
            </ul>
          </div>

          {/* Column 3: Direct Action */}
          <div className="md:col-span-4 flex flex-col items-start md:items-end">
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider mb-4 font-mono text-secondary w-full md:text-right">
              SOLICITAR ESPECIFICAÇÃO
            </h4>
            <p className="font-sans text-sm text-white/60 mb-4 w-full md:text-right leading-relaxed">
              Atendimento especializado e chamados programados ou de emergência em todo o Rio Grande do Sul.
            </p>
            <WhatsAppCTA className="w-full md:w-auto py-3 px-6 text-xs tracking-wider" />
          </div>

        </div>

        {/* Bottom Line */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <p className="font-sans text-xs text-white/40">
              © {new Date().getFullYear()} Lopes Manutenção de Câmaras Frias. Todos os direitos reservados.
            </p>
            <p className="font-sans text-[11px] text-white/30">
              Desenvolvido com precisão técnica por{" "}
              <a
                href="https://joelson-lopes.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors font-medium underline underline-offset-2"
              >
                Joelson Lopes
              </a>
            </p>
          </div>
          <div className="flex gap-6 text-xs text-white/40 font-mono">
            <span>Rio Grande do Sul - RS</span>
            <span>Garantia Contratual</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
