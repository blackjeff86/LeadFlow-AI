# LeadFlow AI — Roadmap do Produto

> Copiloto de IA para vendedores que vivem no WhatsApp.

---

## Visão geral

O LeadFlow AI nasceu para resolver um problema real e mal resolvido: vendedores individuais e pequenos times que vendem pelo WhatsApp não têm ferramentas adequadas. CRMs enterprise são complexos demais; planilhas e o próprio WhatsApp são rápidos demais para virar bagunça.

A proposta central é simples: **dar ao vendedor o que ele precisa para não perder dinheiro na correria do dia a dia** — com o menor atrito possível.

---

## Status atual do protótipo (15 de maio de 2026)

**Objetivo deste momento:** transformar a proposta em um workspace navegável, coerente e pronto para validação visual e conversacional antes de entrar em login e backend.

### Já concluído no protótipo
- [x] Shell principal do produto com navegação mobile-first
- [x] Painel com visão geral da operação
- [x] Tela de leads com base visual de CRM
- [x] Tela de tarefas com rotina operacional e follow-ups
- [x] Tela de pipeline com leitura por estágio
- [x] Tela de mensagens IA com sugestões e biblioteca inicial
- [x] Tela de configurações para preferências, IA e operação
- [x] Tela de conversas como inbox comercial central
- [x] Dados mockados compartilhados entre áreas do workspace
- [x] Multichat por setor em um único número
- [x] Transferência visual entre comercial, fechamento e onboarding
- [x] Reflexo da transferência entre conversas, pipeline e tarefas

### Decisões de produto já assumidas
- [x] Priorizar inbox comercial antes de login
- [x] Posicionar conversa como centro da operação, não só como complemento do CRM
- [x] Tratar multichat por setor como diferencial estratégico do produto
- [x] Manter o produto mobile-first e orientado ao WhatsApp

### Próximos passos recomendados
- [x] Refinar regras de handoff entre setores com mais clareza operacional
- [ ] Definir se o setor é invisível ou explícito para o cliente final
- [x] Simular SLAs, fila por responsável e criação automática de tarefa por transferência
- [ ] Preparar a transição do mock compartilhado para persistência real
  Base técnica iniciada com camada `workspace`, mapeamento de persistência e migration inicial do Supabase.
- [ ] Só depois abrir a frente de autenticação e acesso
- [ ] Validar com usuários se a central de conversas realmente aumenta percepção de controle e produtividade

---

## Fase 0 — Validação (atual)

**Objetivo:** Validar a proposta de valor antes de construir o produto.

### O que fazer
- [ ] Landing page com coleta de e-mails (lista de espera)
- [ ] Entrevistas com 20–30 vendedores reais (WhatsApp, lojistas, corretores, freelancers)
- [ ] Validar disposição a pagar e qual dor é mais crítica
- [ ] Testar mensagens e posicionamento (headline A/B)

### Métricas de sucesso
- 200+ e-mails coletados em 30 dias
- Taxa de conversão da landing > 8%
- 80% dos entrevistados confirma "follow-up esquecido" como dor crítica

### O que não fazer ainda
- Construir autenticação ou banco de dados
- Qualquer infraestrutura de backend

### Entregas de protótipo já feitas dentro da validação
- [x] Construir uma primeira experiência navegável do workspace comercial
- [x] Estruturar a narrativa de CRM + tarefas + pipeline + IA
- [x] Materializar uma inbox comercial antes do login
- [x] Demonstrar o conceito de multichat por setor no mesmo número
- [x] Conectar visualmente conversa, pipeline e tarefa no mesmo fluxo

### Ajuste de prioridade após benchmark de mercado (15 de maio de 2026)
- [ ] Validar uma **inbox comercial / central de conversas** antes do login
- [ ] Testar se o vendedor percebe valor em agir direto da conversa: responder, criar follow-up, mover etapa e usar IA
- [ ] Verificar se **templates + cadências + contexto do lead** aumentam a sensação de controle no dia a dia
- [ ] Validar o diferencial de **multichat por setor em um único número** para operação com comercial, fechamento e onboarding

### Leitura de mercado usada nesta priorização
- Players como **Kommo**, **RD Station CRM**, **Agendor**, **HubSpot**, **respond.io** e **Trengo** convergem em um padrão: CRM sozinho não basta; o valor percebido cresce quando existe **conversa centralizada**, **automação simples**, **IA aplicada à rotina** e **contexto do lead dentro da inbox**.
- Para o LeadFlow AI, isso indica que a próxima peça mais importante não é autenticação, mas sim uma experiência que una **WhatsApp / conversa + CRM + follow-up + IA**.

---

## Fase 1 — MVP funcional (1–2 meses após validação)

**Objetivo:** Ter um produto real nas mãos dos primeiros usuários pagantes.

### Funcionalidades essenciais
- [ ] **Autenticação** — Login com e-mail ou Google (Supabase Auth / NextAuth)
- [ ] **CRM básico** — Cadastro de leads: nome, contato, origem, estágio, notas
  Protótipo visual já existe e precisa virar dados reais.
- [ ] **Inbox comercial / WhatsApp workspace** — Visualização de conversas com contexto do lead, próxima ação e histórico rápido
  Protótipo visual já existe e precisa virar fluxo real.
- [ ] **Multichat por setor em um único número** — Comercial, fechamento e onboarding atuando na mesma thread com histórico centralizado
  Protótipo visual já existe e precisa virar regra operacional persistida.
- [ ] **Pipeline de vendas** — Visualização em lista (sem Kanban ainda) com status: Novo, Em contato, Proposta enviada, Negociação, Fechado, Perdido
  Protótipo visual já existe e está integrado ao mock compartilhado.
- [ ] **Lembretes de follow-up** — Data + hora + nota; notificação por e-mail
- [ ] **Histórico de contatos** — Linha do tempo simples de cada lead
  Já existe como base visual nas conversas.
- [ ] **Geração de mensagens com IA** — Input de contexto → sugestão de mensagem (via Claude API)
  Já existe como base visual em Mensagens IA.
- [ ] **Dashboard simples** — Total de leads por estágio, follow-ups do dia
  Protótipo visual já existe e precisa virar leitura real.

### Stack sugerida
- Frontend: Next.js (já existente)
- Backend: Supabase (banco + auth + realtime)
- IA: Anthropic Claude API (com prompt caching para custo)
- Deploy: Vercel (já configurado)

### Métricas de sucesso
- 50 usuários ativos no primeiro mês
- 30% dos usuários retornam no dia seguinte
- NPS > 40 entre os primeiros usuários

---

## Fase 2 — Core product (2–4 meses)

**Objetivo:** Transformar o MVP em um produto que os vendedores recomendam.

### Funcionalidades

#### Pipeline e gestão
- [ ] **Pipeline Kanban** — Drag-and-drop entre estágios, colunas configuráveis
- [ ] **Segmentação por tags** — Etiquetas livres por produto, região, perfil, origem
- [ ] **Importação de leads** — Upload de CSV / planilha com mapeamento de colunas
- [ ] **Busca e filtros avançados** — Por tag, estágio, data de criação, score

#### Comunicação
- [ ] **Inbox de conversas com ações rápidas** — Responder, criar tarefa, mover etapa e abrir contexto do lead sem trocar de tela
- [ ] **Passagem de bastão entre setores** — Transferir a conversa entre comercial, fechamento e onboarding mantendo contexto e histórico
- [ ] **Templates de mensagem** — Biblioteca pessoal de scripts por estágio (abertura, follow-up, proposta, fechamento, reativação)
- [ ] **Cadências automáticas** — Sequência de follow-ups agendados: D+1, D+3, D+7
- [ ] **Histórico completo de conversas** — Registro de cada troca, nota ou contato feito

#### Integrações
- [ ] **Google Agenda** — Sincronização bidirecional de lembretes e reuniões
- [ ] **Importação de contatos** — CSV, VCF, Google Contacts

### Por que agora
A Fase 1 entrega CRM + IA. A Fase 2 entrega o fluxo comercial completo — é onde o produto começa a "prender" o usuário pela consistência do processo.

---

## Fase 3 — Inteligência (4–6 meses)

**Objetivo:** Tornar o LeadFlow AI o assistente mais inteligente da operação comercial.

### Funcionalidades

#### IA avançada
- [ ] **Lead Scoring automático** — Pontuação 0–100 baseada em: tempo de resposta, engajamento, estágio no pipeline, histórico de interações
- [ ] **Análise de sentimento** — IA detecta humor e intenção nas conversas para sugerir abordagem mais adequada
- [ ] **Sugestão de próximo passo** — Com base no histórico, a IA recomenda: "Este lead não responde há 5 dias. Sugestão: enviar mensagem de reengajamento."
- [ ] **Resumo automático de lead** — IA sintetiza o histórico completo em 3 frases para contexto rápido

#### Notificações
- [ ] **Notificações em tempo real** — Push notifications (PWA) para: follow-up vencendo, lead quente sem contato há X dias, cadência no prazo
- [ ] **Alertas de oportunidade quente** — Lead com alto score sem contato há mais de 48h

#### Métricas e relatórios
- [ ] **Dashboard avançado** — Taxa de conversão por estágio, ticket médio, tempo médio de fechamento
- [ ] **Relatório de performance semanal** — Enviado por e-mail toda segunda-feira
- [ ] **Funil de vendas visual** — Drop-off entre estágios com causas identificadas pela IA

#### Integrações
- [ ] **WhatsApp Business API (oficial)** — Envio direto de mensagens pela plataforma
- [ ] **Meta Ads** — Origem do lead mapeada automaticamente por campanha
- [ ] **Zapier / Make** — Automações entre LeadFlow AI e outras ferramentas

---

## Fase 4 — Escala (6–12 meses)

**Objetivo:** Expandir para times e novos mercados sem perder a simplicidade.

### Funcionalidades

#### Times
- [ ] **Workspace compartilhado** — Até 10 vendedores por conta
- [ ] **Atribuição de leads** — Lead ownership por vendedor
- [ ] **Setores dentro da mesma conta e do mesmo número** — Comercial, fechamento, onboarding e futuros times operando no mesmo canal
- [ ] **Dashboard de gestor** — Visão consolidada do time: produtividade, pipeline, ranking
- [ ] **Comentários internos** — Notas visíveis apenas para o time

#### Produto
- [ ] **App mobile nativo** — React Native (iOS + Android) com notificações push nativas
- [ ] **Modo offline** — Acesso básico aos dados sem internet
- [ ] **Links de pagamento** — Envio de link Pix/cartão diretamente na conversa

#### Expansão
- [ ] **White-label** — Para agências e revendedores
- [ ] **API pública** — Para integrações customizadas
- [ ] **Marketplace de templates** — Templates de vendas criados pela comunidade

---

## Funcionalidades essenciais por perfil de vendedor

### Corretor de imóveis
- Pipeline por imóvel e cliente
- Templates para primeiros contatos, visitas, proposta, financiamento
- Integração com portais (futuro)

### Lojista / e-commerce
- Rastreio de leads por produto/campanha
- Cadência pós-abandono de carrinho
- Integração com links de pagamento

### Prestador de serviço (freelancer, consultor)
- CRM de clientes recorrentes
- Templates de proposta e renovação
- Lembretes de projeto e entrega

### Vendedor autônomo (varejo, seguros, consórcio)
- Lead scoring por probabilidade de fechamento
- Cadência de reengajamento de leads frios
- Dashboard de metas vs. realizado

---

## Decisões de produto importantes

### O que nunca deve mudar
1. **Simplicidade acima de tudo** — Se precisar de manual, está errado
2. **Mobile-first** — Toda funcionalidade deve funcionar no celular primeiro
3. **WhatsApp como canal central** — Não é um CRM genérico, é para quem vende pelo WhatsApp
4. **IA como assistente, não substituto** — O vendedor decide; a IA sugere e acelera

### O que evitar
- Funcionalidades de CRM enterprise (workflows complexos, hierarquias, múltiplos pipelines)
- Onboarding demorado (meta: < 5 minutos até o primeiro lead cadastrado)
- Relatórios que o vendedor não vai ler
- Integrações que adicionam complexidade sem valor direto

---

## Perguntas que ainda precisam ser respondidas

1. **WhatsApp não-oficial (baileys) vs. API oficial?** — A API oficial tem custo por mensagem. Baileys viola os termos do WhatsApp mas é mais acessível. Definir com base nos primeiros usuários.
2. **Cobrança por uso de IA?** — Mensagens com IA têm custo. Definir se inclui no plano ou cobra por crédito.
3. **B2C ou B2B2C?** — Vender direto para o vendedor ou para gestores/agências que distribuem para o time?
4. **Qual segmento de vendedor priorizar?** — Corretores, lojistas, autônomos? Cada um tem jornada e linguagem diferente.
5. **Representantes farmacêuticos entram no ICP?** — Verificar depois se o fluxo atual atende visitação, agenda por rota e histórico por profissional de saúde sem desviar o foco principal do produto.
6. **Inbox própria ou camada complementar sobre CRM?** — Definir se o produto vai tratar conversa como centro absoluto da experiência ou como uma extensão de CRM com IA.
7. **Setor é visível para o cliente ou apenas interno?** — Definir se a passagem entre comercial, fechamento e onboarding acontece de forma totalmente invisível para quem está do outro lado do WhatsApp.

---

*Documento vivo — atualizar a cada sprint de planejamento.*
