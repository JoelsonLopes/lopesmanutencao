# Plano de Implementação — Landing Page Lopes Manutenção

> **Status:** Concluído & Auditado
> **Tipo de Projeto:** WEB
> **Foco:** Scaffolding, Design Clean & Industrial, e Conversão via WhatsApp

---

## 1. Visão Geral (Overview)
Este plano descreve o passo a passo para inicializar e implementar a Landing Page da **Lopes Manutenção** em Next.js 15+, Tailwind CSS e shadcn/ui. Toda a estrutura é orientada a **Static Site Generation (SSG)** para carregar em milissegundos mesmo sob redes 4G lentas de varejo alimentar. O fluxo de conversão rastreia tags UTM dinamicamente para injetar na mensagem do WhatsApp enviado ao Lopes.

---

## 2. Critérios de Sucesso (Success Criteria)
*   **Carregamento Instantâneo:** Lighthouse Score > 95 em Performance, SEO, Acessibilidade e Melhores Práticas.
*   **Conversão Inteligente:** Clique no CTA do WhatsApp monta a mensagem baseada em UTMs (ex: origem da campanha, serviço clicado).
*   **Mobile-First e Estética Industrial:** Visual minimalista, paleta em tons frios (Azul Marinho, Aço e Branco Gelo), sem qualquer tom de roxo (obedecendo ao *Purple Ban*).

---

## 3. Tech Stack & Ferramentas
*   **Framework:** Next.js 15+ (App Router, SSG completo).
*   **Estilização:** Tailwind CSS v4 para velocidade de tokens.
*   **Componentes UI:** `shadcn/ui` (iniciado via CLI).
*   **Linguagem:** TypeScript (Strict Mode ativado, 0% `any`).
*   **Auditorias:** AG Kit Scripts (`ux_audit.py`, `security_scan.py`, `lighthouse_audit.py`).

---

## 4. Estrutura de Arquivos Planejada (File Structure)

```plaintext
.
├── docs/
│   ├── PRD.md
│   └── PLAN-landing-page-setup.md
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Estrutura base, fontes Outfit/Inter e JSON-LD
│   │   ├── page.tsx           # Página principal consolidando seções
│   │   └── globals.css        # Variáveis CSS e temas baseados em HSL
│   ├── components/
│   │   ├── ui/                # Componentes utilitários do shadcn/ui
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── accordion.tsx  # FAQ elegante
│   │   ├── Hero.tsx           # Seção Hero com CTA de alta conversão
│   │   ├── SocialProof.tsx    # Clientes atendidos (Asun, Macrozatti, Medianeira)
│   │   ├── Services.tsx       # Cards de serviços técnicos
│   │   ├── Differentials.tsx  # Valor de negócios (Economia, Velocidade, NF)
│   │   ├── FAQ.tsx            # Objeções comuns quebradas com Accordion
│   │   ├── Footer.tsx         # Informações corporativas e CNPJ
│   │   └── WhatsAppCTA.tsx    # Botão com leitura de UTM e Suspense Boundary
│   ├── utils/
│   │   └── whatsapp.ts        # Gerador dinâmico de links de WhatsApp
│   └── lib/
│       └── utils.ts           # Função cn() utilitária do shadcn
```

---

## 5. Cronograma de Tarefas (Task Breakdown)

### 📌 Fase 1: Scaffolding e Infraestrutura (P0)

#### Tarefa 1.1: Inicialização do Next.js
*   **Agente:** `project-planner`
*   **Skill:** `app-builder`
*   **Ação:** Executar a inicialização do Next.js sem interatividade no diretório atual.
    *   *Comando:* `wsl npx -y create-next-app@latest ./ --typescript --tailwind --eslint --app --src-dir --import-alias '@/*' --use-npm --yes`
*   **INPUT:** Diretório vazio (exceto `docs/` e `logomarca lopes manutenção.png`).
*   **OUTPUT:** Estrutura base do Next.js instalada com npm dependencies configuradas.
*   **VERIFICAÇÃO:** Executar `wsl ls -la` para garantir a presença de `package.json`, `tsconfig.json` e `src/`.

#### Tarefa 1.2: Configuração do Design System & Variáveis CSS
*   **Agente:** `frontend-specialist`
*   **Skill:** `tailwind-patterns`, `ui-ux-pro-max`
*   **Ação:** Configurar `src/app/globals.css` definindo cores do sistema (Azul Marinho `#0B2545`, Azul Aço `#134074`, Branco Gelo `#EEF4F8`, Verde Esmeralda `#20BF55`).
*   **INPUT:** `src/app/globals.css` padrão.
*   **OUTPUT:** `src/app/globals.css` contendo variáveis HSL ajustadas para a paleta Clean & Industrial.
*   **VERIFICAÇÃO:** Inspeção do arquivo CSS para atestar ausência de tons de roxo/violeta.

#### Tarefa 1.3: Instalação e Inicialização do shadcn/ui
*   **Agente:** `frontend-specialist`
*   **Skill:** `react-best-practices`
*   **Ação:** Instalar e configurar shadcn/ui utilizando as configurações automáticas padrão.
    *   *Comando:* `wsl npx -y shadcn@latest init -d --yes`
*   **INPUT:** Projeto Next.js configurado.
*   **OUTPUT:** `components.json` criado e pasta `src/components/ui` mapeada.
*   **VERIFICAÇÃO:** Presença do arquivo `components.json` no diretório raiz.

---

### 📌 Fase 2: Lógica Core e Componentização (P1)

#### Tarefa 2.1: Implementação dos Utilitários de Rastreamento (UTM)
*   **Agente:** `backend-specialist`
*   **Skill:** `clean-code`
*   **Ação:** Criar a função em `src/utils/whatsapp.ts` para ler as tags de UTM e retornar a URL formatada do WhatsApp.
*   **INPUT:** N/A (Novo arquivo).
*   **OUTPUT:** `src/utils/whatsapp.ts` implementado com testes simples/tipagem TypeScript estrita.
*   **VERIFICAÇÃO:** Fazer build test do script TypeScript para garantir 0 erros de compilação.

#### Tarefa 2.2: Criação do Componente WhatsAppCTA
*   **Agente:** `frontend-specialist`
*   **Skill:** `react-best-practices`
*   **Ação:** Criar o componente `WhatsAppCTA.tsx` com `useSearchParams` envolto em `<Suspense>` para evitar de-opt do SSG durante o build.
*   **INPUT:** `src/utils/whatsapp.ts`.
*   **OUTPUT:** `src/components/WhatsAppCTA.tsx` funcional.
*   **VERIFICAÇÃO:** Garantir que o componente possui o fallback de Suspense em perfeito funcionamento.

---

### 📌 Fase 3: Desenvolvimento de UI e Conteúdo (P2)

#### Tarefa 3.1: Criação das Seções Visuais
*   **Agente:** `frontend-specialist`
*   **Skill:** `frontend-design`, `ui-ux-pro-max`
*   **Ação:** Desenvolver de forma isolada e limpa os componentes de UI:
    *   `Hero.tsx`
    *   `SocialProof.tsx` (Injetando a imagem `logomarca lopes manutenção.png` de forma otimizada com `<Image />`)
    *   `Services.tsx` (Cards de serviços)
    *   `Differentials.tsx`
    *   `FAQ.tsx` (Usando Accordion do shadcn/ui)
    *   `Footer.tsx` (Exibindo CNPJ e dados corporativos)
*   **INPUT:** PRD de conteúdo.
*   **OUTPUT:** Componentes prontos em `src/components/`.
*   **VERIFICAÇÃO:** Testar imports e responsividade de cada componente via preview.

#### Tarefa 3.2: Integração e SEO da Home Page
*   **Agente:** `seo-specialist`
*   **Skill:** `seo-fundamentals`
*   **Ação:** Consolidar os componentes em `src/app/page.tsx`, configurar o metadata do Next.js (título, descrição, openGraph) e inserir o JSON-LD estruturado de `LocalBusiness` para impulsionar o Google Mapas.
*   **INPUT:** Componentes isolados.
*   **OUTPUT:** `src/app/page.tsx` e `src/app/layout.tsx` finalizados.
*   **VERIFICAÇÃO:** Garantir que a renderização estática está ativada.

---

### 📌 Fase 4: Otimização, Testes e Auditoria Final (Phase X)

#### Tarefa 4.1: Validação de Qualidade de Código & Tipagem
*   **Agente:** `test-engineer`
*   **Skill:** `lint-and-validate`
*   **Ação:** Executar lint e compilação TypeScript localmente para garantir conformidade estrita com o compilador.
    *   *Comandos:* `wsl npm run lint` e `wsl npx tsc --noEmit`
*   **INPUT:** Projeto finalizado.
*   **OUTPUT:** 0 avisos de tipagem ou sintaxe.
*   **VERIFICAÇÃO:** Logs de sucesso de compilação sem erros.

#### Tarefa 4.2: Execução das Ferramentas de Auditoria do AG Kit
*   **Agente:** `performance-optimizer`
*   **Skill:** `performance-profiling`
*   **Ação:** Subir o servidor de desenvolvimento e rodar os scripts de acessibilidade, qualidade e UX integrados na pasta `.agent/scripts`.
    *   *Comandos:* `python .agent/scripts/checklist.py .` e `python .agent/skills/frontend-design/scripts/ux_audit.py .`
*   **INPUT:** Código local funcional.
*   **OUTPUT:** Relatório de auditoria limpo com Lighthouse teórica > 95.
*   **VERIFICAÇÃO:** Execução com êxito de todos os testes recomendados.

---

## 🔄 Plano de Contingência & Rollback
Se a instalação automatizada falhar devido a dependências ou conflitos de rede:
1. **Fallback de Scaffolding:** Se `create-next-app` falhar em instalar no diretório `./` por ele não estar 100% vazio (ex: contendo a pasta `docs/`), moveremos temporariamente a pasta `docs/` e a imagem da logo para um diretório temporário, inicializaremos o Next.js e traremos os arquivos de volta.
2. **Rollback de Alterações:** Usar comandos nativos do Git para reverter qualquer arquivo quebrado, mantendo o histórico limpo e atômico.

---

## ✅ PHASE X COMPLETE
- Lint: ✅ Pass
- Security: ✅ No critical issues
- Build: ✅ Success
- Date: 2026-05-27
