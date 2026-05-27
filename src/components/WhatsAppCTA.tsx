'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { generateWhatsAppLink } from '@/utils/whatsapp';

interface WhatsAppCTAProps {
  service?: string; // Slug do serviço opcional para CTAs em cards
  className?: string;
  children?: React.ReactNode;
}

function WhatsAppButton({ service, className, children }: WhatsAppCTAProps) {
  const searchParams = useSearchParams();

  // Captura os parâmetros UTM da URL em tempo de execução
  const utmSource = searchParams ? searchParams.get('utm_source') : null;
  const utmCampaign = searchParams ? searchParams.get('utm_campaign') : null;

  // Telefone corporativo oficial da Lopes Manutenção (Lopes Manutenção)
  const phone = '5551994043311'; // Telefone fictício estruturado, ou preenchido conforme dados reais

  const link = generateWhatsAppLink({
    phone,
    service,
    utmSource,
    utmCampaign,
  });

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-[4px] text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg transform active:scale-95 px-6 py-3.5 bg-[#00b4d8] hover:bg-[#00a2c2] text-white ${className}`}
    >
      <svg
        className="w-5 h-5 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.574 1.978 14.1 1.953 12.006 1.953c-5.437 0-9.865 4.371-9.87 9.8.001 1.77.472 3.498 1.365 5.011L2.502 21.84l5.145-1.346zm12.116-4.524c-.312-.156-1.85-.91-2.137-1.014-.288-.105-.497-.156-.706.156-.21.312-.81 1.014-.993 1.22-.183.208-.367.234-.68.078-.312-.156-1.318-.485-2.51-1.548-.928-.827-1.554-1.849-1.737-2.16-.183-.313-.02-.482.137-.638.14-.14.312-.365.468-.547.156-.182.208-.312.312-.52.105-.209.052-.391-.026-.547-.079-.156-.706-1.7-.967-2.327-.254-.61-.513-.526-.706-.536-.183-.01-.392-.01-.6-.01-.208 0-.547.078-.834.39-.287.313-1.096 1.072-1.096 2.613 0 1.541 1.122 3.028 1.278 3.236.156.208 2.209 3.374 5.353 4.73.748.323 1.332.516 1.787.66.752.239 1.436.205 1.977.125.602-.09 1.85-.756 2.11-1.449.261-.692.261-1.287.183-1.411-.078-.125-.287-.204-.6-.36z" />
      </svg>
      {children || 'Solicitar Orçamento via WhatsApp'}
    </a>
  );
}

export default function WhatsAppCTA(props: WhatsAppCTAProps) {
  return (
    <Suspense
      fallback={
        <button
          disabled
          className={`inline-flex items-center justify-center gap-2 rounded-[4px] text-sm font-bold uppercase tracking-wider px-6 py-3.5 bg-[#00a2c2] text-white opacity-70 cursor-not-allowed ${props.className}`}
        >
          Carregando...
        </button>
      }
    >
      <WhatsAppButton {...props} />
    </Suspense>
  );
}
