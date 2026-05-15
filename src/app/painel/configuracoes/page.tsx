import {
  Bell,
  Bot,
  Cable,
  CheckCheck,
  ChevronRight,
  Globe,
  LockKeyhole,
  MessageSquareText,
  Settings2,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  UserRoundCog,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const settingsStats = [
  {
    label: "Preferências prontas",
    value: "12",
    detail: "base inicial da operação",
    icon: Settings2,
    tone: "bg-emerald-100 text-emerald-700",
  },
  {
    label: "Integrações mapeadas",
    value: "4",
    detail: "WhatsApp, agenda e contatos",
    icon: Cable,
    tone: "bg-sky-100 text-sky-700",
  },
  {
    label: "Alertas configuráveis",
    value: "9",
    detail: "follow-up, IA e rotina",
    icon: Bell,
    tone: "bg-amber-100 text-amber-700",
  },
];

const highlightCards = [
  {
    title: "Foco da conta",
    value: "Operação individual",
    detail: "Estrutura pronta para crescer depois para workspace em time.",
  },
  {
    title: "Tom da IA",
    value: "Consultivo e direto",
    detail: "Mais aderente a follow-up, reengajamento e fechamento.",
  },
  {
    title: "Canal central",
    value: "WhatsApp",
    detail: "Toda a configuração mantém o fluxo comercial centrado na conversa.",
  },
];

const preferenceGroups = [
  {
    title: "Perfil comercial",
    eyebrow: "Identidade da operação",
    icon: UserRoundCog,
    accent: "border-emerald-200 bg-emerald-50/70",
    items: [
      {
        label: "Nome exibido no workspace",
        value: "Jeffe | LeadFlow AI Demo",
      },
      {
        label: "Modelo de operação",
        value: "Vendedor individual com rotina mobile-first",
      },
      {
        label: "Segmento principal",
        value: "Vendas consultivas pelo WhatsApp",
      },
    ],
  },
  {
    title: "IA e mensagens",
    eyebrow: "Comportamento do assistente",
    icon: Bot,
    accent: "border-fuchsia-200 bg-fuchsia-50/70",
    items: [
      {
        label: "Tom padrão das respostas",
        value: "Direto, consultivo e com CTA objetivo",
      },
      {
        label: "Prioridade da IA",
        value: "Propostas, follow-ups vencidos e reengajamento",
      },
      {
        label: "Comprimento preferido",
        value: "Mensagens curtas para leitura rápida no celular",
      },
    ],
  },
  {
    title: "Notificações",
    eyebrow: "Rotina e urgência",
    icon: Bell,
    accent: "border-amber-200 bg-amber-50/70",
    items: [
      {
        label: "Alertar follow-up atrasado",
        value: "Sim, com prioridade máxima",
      },
      {
        label: "Resumo da manhã",
        value: "Enviar agenda e prioridades às 08:30",
      },
      {
        label: "Resumo de fim do dia",
        value: "Mostrar pendências e oportunidades quentes",
      },
    ],
  },
];

const integrationCards = [
  {
    title: "WhatsApp",
    status: "Planejado",
    detail: "Conectar origem principal das conversas e registrar contexto comercial.",
  },
  {
    title: "Google Agenda",
    status: "Próximo passo",
    detail: "Sincronizar follow-ups, retornos e blocos de execução do dia.",
  },
  {
    title: "Importação de contatos",
    status: "Mapeado",
    detail: "Trazer contatos por CSV, planilha e outras fontes simples.",
  },
  {
    title: "Automações",
    status: "Futuro",
    detail: "Disparar lembretes, cadências e regras de movimentação do funil.",
  },
];

const securityCards = [
  {
    title: "Acesso e autenticação",
    detail: "Preparado para entrar depois com login, sessão e regras por usuário.",
    icon: LockKeyhole,
  },
  {
    title: "Privacidade operacional",
    detail: "Base pronta para separar notas internas, mensagens e visões por conta.",
    icon: ShieldCheck,
  },
  {
    title: "Idioma e região",
    detail: "Estrutura já considera operação em português e rotina local de horário.",
    icon: Globe,
  },
];

const setupChecklist = [
  "Definir preferências padrão da IA para cada tipo de mensagem.",
  "Escolher quais alertas realmente ajudam sem virar ruído.",
  "Mapear integrações essenciais antes de mexer em backend.",
];

export default function ConfiguracoesPage() {
  return (
    <div className="space-y-5 sm:space-y-6">
      <section className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
        <Card className="overflow-hidden border-emerald-200 bg-[linear-gradient(135deg,#0f172a_0%,#1a2438_48%,#0f766e_100%)] text-white shadow-[0_36px_90px_-50px_rgba(15,23,42,0.8)]">
          <CardContent className="relative p-5 sm:p-6">
            <div className="pointer-events-none absolute -right-16 top-0 size-40 rounded-full bg-emerald-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -left-8 bottom-0 size-32 rounded-full bg-cyan-400/15 blur-3xl" />

            <div className="relative flex flex-col gap-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-100">
                  Configurações da operação
                </span>
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-50">
                  Preferências, alertas e integrações
                </span>
              </div>

              <div className="max-w-2xl">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  A base de configurações agora já organiza como a operação quer trabalhar antes mesmo de ligar backend e autenticação.
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-200 sm:text-base">
                  Esta área foi desenhada para concentrar preferências do vendedor, regras da IA, notificações e integração futura sem quebrar a simplicidade do produto.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {highlightCards.map((card) => (
                  <div
                    key={card.title}
                    className="rounded-[1.5rem] border border-white/10 bg-white/10 p-4 backdrop-blur-sm"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-emerald-100">{card.title}</p>
                    <p className="mt-2 text-lg font-semibold">{card.value}</p>
                    <p className="mt-2 text-sm text-slate-200">{card.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-white/70 bg-white/90">
          <CardHeader>
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                  Direção da conta
                </p>
                <CardTitle className="mt-2">O que vale configurar primeiro</CardTitle>
              </div>
              <div className="flex size-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                <Sparkles className="size-5" />
              </div>
            </div>
            <CardDescription>
              Um guia rápido para focar nas configurações que mais influenciam o uso diário do sistema.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {setupChecklist.map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-emerald-100 bg-emerald-50/70 px-4 py-4 text-sm leading-6 text-slate-700"
              >
                {item}
              </div>
            ))}

            <div className="rounded-[1.5rem] border border-slate-200/80 bg-slate-950 px-4 py-4 text-white">
              <div className="flex items-center gap-2 text-emerald-300">
                <SlidersHorizontal className="size-4" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                  Prioridade recomendada
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-200">
                Primeiro configuramos a lógica da rotina e da IA. Depois entram integrações e regras de acesso.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-3 sm:grid-cols-3">
        {settingsStats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                  <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-slate-500">{stat.detail}</p>
                </div>
                <div className={`flex size-12 items-center justify-center rounded-2xl ${stat.tone}`}>
                  <stat.icon className="size-5" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.08fr_0.92fr]">
        <Card>
          <CardHeader>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Preferências centrais
                  </p>
                  <CardTitle className="mt-2">Ajustes do workspace</CardTitle>
                </div>
                <Button className="w-full sm:w-auto">
                  <Settings2 className="size-4.5" />
                  Editar preferências
                </Button>
              </div>
              <CardDescription>
                A tela já organiza os blocos que mais influenciam o comportamento do produto no uso diário.
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {preferenceGroups.map((group) => (
              <div
                key={group.title}
                className={`rounded-[1.75rem] border p-4 sm:p-5 ${group.accent}`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex size-11 items-center justify-center rounded-2xl bg-white text-slate-700 shadow-sm">
                      <group.icon className="size-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        {group.eyebrow}
                      </p>
                      <h3 className="mt-1 text-xl font-semibold text-slate-900">{group.title}</h3>
                    </div>
                  </div>
                  <Button variant="outline" className="rounded-[1.25rem] px-4">
                    Ajustar
                    <ChevronRight className="size-4" />
                  </Button>
                </div>

                <div className="mt-4 grid gap-3">
                  {group.items.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[1.5rem] border border-white/80 bg-white/90 p-4 shadow-sm"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-slate-900">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="space-y-5">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Integrações
                  </p>
                  <CardTitle className="mt-2">Conexões planejadas</CardTitle>
                </div>
                <div className="flex size-11 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                  <Cable className="size-5" />
                </div>
              </div>
              <CardDescription>
                Um bloco claro para o que ainda vai conectar o workspace ao resto da operação.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {integrationCards.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-semibold text-slate-900">{item.title}</p>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600">
                      {item.status}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-slate-200/80 bg-slate-950 text-white">
            <CardHeader>
              <div className="flex size-12 items-center justify-center rounded-2xl bg-white/10 text-emerald-300">
                <LockKeyhole className="size-5" />
              </div>
              <CardTitle className="text-white">Próximas camadas</CardTitle>
              <CardDescription className="text-slate-300">
                A tela já reserva espaço para segurança, idioma, acesso e detalhes mais sensíveis da conta.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-6 text-slate-300">
              {securityCards.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-4"
                >
                  <div className="flex items-center gap-2 text-white">
                    <item.icon className="size-4.5 text-emerald-300" />
                    <span className="font-semibold">{item.title}</span>
                  </div>
                  <p className="mt-2 text-slate-300">{item.detail}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[1fr_0.95fr]">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Regras da IA
                </p>
                <CardTitle className="mt-2">Comportamento esperado do assistente</CardTitle>
              </div>
              <div className="flex size-11 items-center justify-center rounded-2xl bg-fuchsia-100 text-fuchsia-700">
                <Bot className="size-5" />
              </div>
            </div>
            <CardDescription>
              Um espaço para transformar preferências de mensagem em configuração explícita do produto.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 p-4">
              <p className="font-semibold text-slate-900">Priorizar mensagens curtas</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Útil para WhatsApp e leitura móvel, principalmente em follow-up e reengajamento.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 p-4">
              <p className="font-semibold text-slate-900">Sugerir CTA sempre que fizer sentido</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Ajuda o vendedor a sair da conversa vaga e puxar o próximo passo comercial.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 p-4">
              <p className="font-semibold text-slate-900">Evitar tom insistente</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Especialmente em recuperação de leads frios e negociações mais sensíveis.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 p-4">
              <p className="font-semibold text-slate-900">Levar estágio do lead em conta</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                A mensagem precisa mudar conforme o lead está em entrada, proposta ou fechamento.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Resultado esperado
                </p>
                <CardTitle className="mt-2">O que esta tela já resolve</CardTitle>
              </div>
              <div className="flex size-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                <CheckCheck className="size-5" />
              </div>
            </div>
            <CardDescription>
              A área de configurações deixou de ser só navegação vazia e virou parte real da arquitetura do produto.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-6 text-slate-600">
            <div className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 px-4 py-4">
              Já existe uma casa clara para preferências da operação, IA, alertas e integrações.
            </div>
            <div className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 px-4 py-4">
              O produto agora consegue crescer para login, backend e sincronizações sem improvisar onde cada regra vai morar.
            </div>
            <div className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 px-4 py-4">
              A experiência continua simples, mas já com cara de sistema pronto para configuração de verdade.
            </div>
            <Button className="mt-2 w-full justify-center rounded-[1.25rem]">
              <MessageSquareText className="size-4.5" />
              Revisar próximos ajustes do produto
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
