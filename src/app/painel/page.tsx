import {
  Activity,
  ArrowRight,
  Bot,
  Brain,
  CalendarClock,
  CheckCheck,
  Clock3,
  Flame,
  Funnel,
  MessageSquareText,
  MoveUpRight,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { crmLeads, dashboardActivityFeed, dashboardAiInsights } from "@/lib/mock-crm-data";

const headlineStats = [
  {
    label: "Leads ativos",
    value: String(crmLeads.length),
    change: "+12%",
    detail: "comparado aos últimos 7 dias",
    icon: Target,
    tone: "bg-emerald-100 text-emerald-700",
  },
  {
    label: "Taxa de resposta",
    value: "64%",
    change: "+8%",
    detail: "em conversas iniciadas hoje",
    icon: MessageSquareText,
    tone: "bg-sky-100 text-sky-700",
  },
  {
    label: "Follow-ups hoje",
    value: String(crmLeads.filter((lead) => lead.taskStatus !== "Próxima").length),
    change: `${crmLeads.filter((lead) => lead.taskStatus === "Atrasada").length} urgentes`,
    detail: "vencem antes das 18h",
    icon: CalendarClock,
    tone: "bg-amber-100 text-amber-700",
  },
  {
    label: "IA pronta",
    value: String(crmLeads.filter((lead) => lead.messageDraft).length),
    change: `${crmLeads.filter((lead) => lead.taskStatus !== "Próxima").length} novas`,
    detail: "sugestões esperando revisão",
    icon: Bot,
    tone: "bg-fuchsia-100 text-fuchsia-700",
  },
];

const funnelSummary = [
  { stage: "Entrada", total: crmLeads.filter((lead) => lead.stage === "Novo").length, width: "w-[82%]", tone: "bg-slate-900" },
  { stage: "Em contato", total: crmLeads.filter((lead) => lead.stage === "Em contato").length, width: "w-[64%]", tone: "bg-sky-500" },
  { stage: "Proposta", total: crmLeads.filter((lead) => lead.stage === "Proposta enviada").length, width: "w-[42%]", tone: "bg-amber-500" },
  { stage: "Fechamento", total: crmLeads.filter((lead) => lead.stage === "Negociação" || lead.stage === "Fechamento").length, width: "w-[24%]", tone: "bg-emerald-500" },
];

const hotLeads = crmLeads
  .filter((lead) => lead.temperature !== "Morno")
  .slice(0, 3)
  .map((lead) => ({
    name: lead.name,
    source: lead.source,
    status: lead.temperature === "Muito quente" ? "Muito quente" : "Pronto para follow-up",
    note: lead.summary,
    action: lead.nextAction,
  }));

const todayAgenda = crmLeads
  .filter((lead) => lead.taskStatus !== "Próxima")
  .slice(0, 4)
  .map((lead) => ({
    time: lead.taskDue.includes(", ") ? lead.taskDue.split(", ")[1] : lead.taskDue,
    title: `${lead.taskAction} ${lead.name}`,
    detail: lead.taskSummary,
    type: lead.taskType,
  }));

const performanceCards = [
  {
    title: "Tempo médio de resposta",
    value: "11 min",
    description: "Meta do dia: abaixo de 15 min",
    icon: Clock3,
  },
  {
    title: "Conversas retomadas",
    value: String(crmLeads.filter((lead) => lead.taskType === "Follow-up" || lead.taskType === "Reengajamento").length + 10),
    description: "7 vieram de lembretes automáticos",
    icon: CheckCheck,
  },
  {
    title: "Taxa de avanço",
    value: "38%",
    description: "leads que avançaram de etapa hoje",
    icon: TrendingUp,
  },
];

export default function PainelPage() {
  return (
    <div className="space-y-5 sm:space-y-6">
      <section className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
        <Card className="overflow-hidden border-emerald-200 bg-[linear-gradient(135deg,#0f172a_0%,#14243a_50%,#0f766e_100%)] text-white shadow-[0_36px_90px_-50px_rgba(15,23,42,0.8)]">
          <CardContent className="relative p-5 sm:p-6">
            <div className="pointer-events-none absolute -right-16 top-0 size-40 rounded-full bg-emerald-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -left-10 bottom-0 size-36 rounded-full bg-cyan-400/15 blur-3xl" />

            <div className="relative flex flex-col gap-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
                  Dashboard do dia
                </span>
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-100">
                  Mobile-first
                </span>
              </div>

              <div className="max-w-2xl">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Seu vendedor abre o celular e já sabe exatamente o que precisa fazer agora.
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-200 sm:text-base">
                  O dashboard agora já entrega leitura rápida de prioridades, funil, follow-ups e atividade recente sem apertar informação demais em telas pequenas.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">Foco do dia</p>
                  <p className="mt-2 text-lg font-semibold">9 follow-ups urgentes</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">Melhor origem</p>
                  <p className="mt-2 text-lg font-semibold">Instagram Ads</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">Meta</p>
                  <p className="mt-2 text-lg font-semibold">Fechar 3 propostas</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-white/70 bg-white/90">
          <CardHeader>
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                  Assistente IA
                </p>
                <CardTitle className="mt-2">Leituras rápidas para agir</CardTitle>
              </div>
              <div className="flex size-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                <Brain className="size-5" />
              </div>
            </div>
            <CardDescription>
              Um resumo enxuto para caber no celular sem perder contexto comercial.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {dashboardAiInsights.map((insight) => (
              <div
                key={insight}
                className="rounded-[1.5rem] border border-emerald-100 bg-emerald-50/70 px-4 py-4 text-sm leading-6 text-slate-700"
              >
                {insight}
              </div>
            ))}

            <div className="rounded-[1.5rem] border border-slate-200/80 bg-slate-950 px-4 py-4 text-white">
              <div className="flex items-center gap-2 text-emerald-300">
                <Sparkles className="size-4" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                  Próxima recomendação
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-200">
                Priorize Vanessa Rocha agora: intenção alta, urgência explícita e chance real de fechamento ainda hoje.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {headlineStats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                  <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
                    {stat.value}
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-sm">
                    <span className="font-semibold text-emerald-700">{stat.change}</span>
                    <span className="text-slate-500">{stat.detail}</span>
                  </div>
                </div>
                <div className={`flex size-12 items-center justify-center rounded-2xl ${stat.tone}`}>
                  <stat.icon className="size-5" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.05fr_0.95fr]">
        <Card>
          <CardHeader>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Funil resumido
                </p>
                <CardTitle className="mt-2">Visão rápida de conversão</CardTitle>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-600">
                Etapa seguinte
                <ArrowRight className="size-3.5" />
                CRM de leads
              </div>
            </div>
            <CardDescription>
              O resumo visual do pipeline já foi desenhado para leitura confortável no celular.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {funnelSummary.map((item) => (
              <div key={item.stage} className="space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className={`size-3 rounded-full ${item.tone}`} />
                    <span className="text-sm font-semibold text-slate-900">{item.stage}</span>
                  </div>
                  <span className="text-sm text-slate-500">{item.total} leads</span>
                </div>
                <div className="h-3 rounded-full bg-slate-100">
                  <div className={`h-3 rounded-full ${item.tone} ${item.width}`} />
                </div>
              </div>
            ))}

            <div className="grid gap-3 pt-2 sm:grid-cols-3">
              {performanceCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 p-4"
                >
                  <div className="flex size-10 items-center justify-center rounded-2xl bg-white text-slate-600 shadow-sm">
                    <card.icon className="size-4.5" />
                  </div>
                  <p className="mt-4 text-sm font-medium text-slate-500">{card.title}</p>
                  <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
                    {card.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{card.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Leads quentes
                </p>
                <CardTitle className="mt-2">Quem merece atenção agora</CardTitle>
              </div>
              <div className="flex size-11 items-center justify-center rounded-2xl bg-rose-100 text-rose-600">
                <Flame className="size-5" />
              </div>
            </div>
            <CardDescription>
              Cards compactos, mas com contexto suficiente para ação imediata no celular.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {hotLeads.map((lead) => (
              <div
                key={lead.name}
                className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50/75 p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold text-slate-900">{lead.name}</p>
                    <p className="mt-1 text-sm text-slate-500">{lead.source}</p>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-emerald-700">
                    {lead.status}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{lead.note}</p>
                <div className="mt-4 flex items-center justify-between gap-3 rounded-2xl bg-white px-3 py-3">
                  <span className="text-sm font-semibold text-slate-700">{lead.action}</span>
                  <MoveUpRight className="size-4 text-slate-300" />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-5 xl:grid-cols-[0.92fr_1.08fr]">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Agenda de hoje
                </p>
                <CardTitle className="mt-2">Rotina pronta para execução</CardTitle>
              </div>
              <div className="flex size-11 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                <CalendarClock className="size-5" />
              </div>
            </div>
            <CardDescription>
              Ordem do dia otimizada para o jeito que o vendedor consulta o sistema no celular.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {todayAgenda.map((item) => (
              <div
                key={`${item.time}-${item.title}`}
                className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50/75 p-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
                    {item.time}
                  </p>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600">
                    {item.type}
                  </span>
                </div>
                <p className="mt-3 text-base font-semibold text-slate-900">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Atividade recente
                </p>
                <CardTitle className="mt-2">O que aconteceu na operação</CardTitle>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700">
                <Funnel className="size-3.5" />
                7 movimentações hoje
              </div>
            </div>
            <CardDescription>
              Feed que mantém o time contextualizado sem exigir navegação profunda.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 lg:grid-cols-2">
            {dashboardActivityFeed.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-slate-200/80 bg-white p-4 shadow-sm"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex size-10 items-center justify-center rounded-2xl bg-slate-100 text-slate-600">
                    <Activity className="size-4.5" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    {item.time}
                  </span>
                </div>
                <p className="mt-4 font-semibold text-slate-900">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
