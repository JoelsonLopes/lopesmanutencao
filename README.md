# Lopes Manutenção — Câmaras Frigoríficas e Refrigeração Comercial

> **Landing Page de Alta Conversão com Foco em Performance, SEO e Rastreabilidade de Leads.**

Este repositório contém a landing page institucional moderna e de alta precisão da **Lopes Manutenção de Câmaras Frigoríficas LTDA**, empresa que atende supermercados, padarias, açougues e distribuidoras de alimentos em todo o estado do **Rio Grande do Sul (RS)**.

A interface foi concebida sob os pilares do **Modern Industrialism**, utilizando uma paleta cromática "Steel, Navy & Gold" extraída diretamente do cartão de visitas físico da empresa, entregando sofisticação estética e credibilidade técnica de alto nível.

---

## 🎯 Diferenciais Técnicos e de Negócio

1. **Static Site Generation (SSG):** 
   O projeto foi compilado para exportação 100% estática (`output: 'export'`), permitindo carregamento em milissegundos mesmo sob redes móveis oscilantes (3G/4G) de donos de estabelecimentos comerciais.
2. **Design System Industrial Otimizado (OKLCH):** 
   Configurado em `src/app/globals.css` utilizando o espaço de cores nativo do CSS Moderno (**OKLCH**) do Tailwind CSS v4. A cor primária é o **Navy Escuro** (`#001026`), a cor de fundo é o **Branco Gelo** (`#f9f9ff`) e o destaque de alta conversão é o **Amarelo Ouro corporativo** (`#ffb300`) do logotipo.
3. **Rastreamento Dinâmico de Campanhas (UTMs):** 
   Implementa a captura e processamento dinâmico de parâmetros de URL em tempo de execução via React (`useSearchParams`) protegido por `<Suspense>`. Quando o usuário clica em qualquer chamada de ação (CTA), o sistema monta uma mensagem personalizada e humanizada no WhatsApp oficial da empresa com base no serviço e na origem do clique (ex: Google, Instagram), garantindo inteligência comercial impecável.
4. **Assets Visuais Dedicados e Exclusivos:** 
   O projeto faz uso de imagens realistas em alta definição geradas exclusivamente para representar os quatro serviços principais do catálogo (Vedações, Mecânica de Portas, Revitalização de Balcões e Perfis sob Medida).
5. **SEO Avançado e Dados Estruturados JSON-LD:** 
   Metatags completas de OpenGraph, tags semânticas hierárquicas e injeção do Schema estruturado `LocalBusiness` com geolocalização e área de cobertura em todo o Rio Grande do Sul (RS) para excelente indexação orgânica no Google.
6. **Design Defensivo para Logotipo Opaque:** 
   A logomarca da empresa foi perfeitamente integrada ao cabeçalho branco translúcido (`bg-white/95`) e emoldurada no rodapé em um badge arredondado com borda leve, emulando com perfeição a própria estética física de apresentação do cartão de visitas.

---

## 🛠️ Tecnologias Utilizadas

* **Framework Core:** [Next.js 14.2.23 (App Router)](https://nextjs.org/)
* **Biblioteca Visual:** [React 18.3.1](https://react.dev/)
* **Estilização e Temas:** [Tailwind CSS v4](https://tailwindcss.com/)
* **Componentes Base:** [shadcn/ui](https://ui.shadcn.com/)
* **Lógica e Contratos:** [TypeScript (Strict Mode)](https://www.typescriptlang.org/)
* **Pacote de Ícones:** [Lucide React](https://lucide.dev/)
* **Auditorias de Qualidade:** Antigravity Kit (Security Scan, Lint Check, UX Audit, SEO Checker)

---

## 📂 Estrutura de Pastas Principal

```plaintext
.
├── docs/                                  # Documentação de requisitos (PRD) e planos
├── public/                                # Imagens dedicadas, logo e assets estáticos
├── src/
│   ├── app/
│   │   ├── globals.css                    # Variáveis cromáticas baseadas em OKLCH
│   │   ├── layout.tsx                     # Font pairing (Inter & Outfit) e metadados globais
│   │   └── page.tsx                       # Home page com o Schema JSON-LD indexável
│   ├── components/
│   │   ├── ui/                            # Componentes atômicos do shadcn/ui
│   │   ├── Header.tsx                     # Cabeçalho translúcido com logo oficial
│   │   ├── Hero.tsx                       # Dobra principal com fundo imersivo e telemetria
│   │   ├── SocialProof.tsx                # Logotipos de clientes e conformidade fiscal (CNPJ)
│   │   ├── Services.tsx                   # Grid dos 4 serviços com imagens dedicadas
│   │   ├── Differentials.tsx              # Benefícios de negócio e nota fiscal
│   │   ├── FAQ.tsx                        # Acordeão de perguntas frequentes
│   │   ├── Footer.tsx                     # Rodapé corporativo com canais de contato e assinatura
│   │   └── WhatsAppCTA.tsx                # Componente cliente com rastreamento UTM
│   └── utils/
│       └── whatsapp.ts                    # Lógica geradora de mensagens do WhatsApp
├── package.json                           # Scripts e dependências
└── tsconfig.json                          # Tipagem estrita de TypeScript
```

---

## 🚀 Como Executar e Testar Localmente

Para iniciar o ambiente de desenvolvimento local e realizar simulações de conversão ou novos ajustes de layout:

### 1. Clonar o repositório e instalar dependências
```bash
git clone https://github.com/JoelsonLopes/lopesmanutencao.git
cd lopesmanutencao
npm install
```

### 2. Iniciar o servidor de desenvolvimento
```bash
npm run dev
```
Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

### 3. Simular Rastreamento UTM (Lógica comercial)
Acesse a página local passando parâmetros na URL:
```plaintext
http://localhost:3000/?utm_source=google&utm_campaign=camaras-sul&service=mecanica
```
Ao clicar em qualquer botão para falar com o suporte, a API geradora criará um redirecionamento do WhatsApp comercial com a mensagem automática e humanizada:
> *"Olá Lopes! Vi a página de Lopes Manutenção pelo [google (Campanha: camaras-sul)] e gostaria de solicitar um orçamento para o serviço de [Mecânica de Portas (Molas e Dobradiças)]."*

### 4. Compilar e Gerar Build de Produção Estática
Para validar se o projeto continua 100% otimizado e livre de inconsistências:
```bash
npm run build
```
Os arquivos gerados para hospedagem estática gratuita (Vercel, GitHub Pages, etc.) ficarão localizados na pasta `/out`.

---

## ✍️ Desenvolvedor & Autor

Este projeto foi projetado, desenvolvido e publicado com orgulho por:

**Joelson Lopes**  
*Desenvolvedor Fullstack Sênior*  
* 💼 **Portfólio Pessoal:** [joelson-lopes.vercel.app](https://joelson-lopes.vercel.app/)
* 🐙 **GitHub:** [@JoelsonLopes](https://github.com/JoelsonLopes)

---

## 📄 Licença

Este projeto está sob a licença da **Lopes Manutenção de Câmaras Frigoríficas LTDA**. Todos os direitos reservados.
