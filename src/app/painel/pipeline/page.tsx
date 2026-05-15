"use client";

import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CirclePlus,
  Clock3,
  DollarSign,
  Flame,
  KanbanSquare,
  MoveRight,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

import { useWorkspaceData } from "@/components/app/workspace-data-provider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const pipelineInsights = [
  "A maior concentração de valor está entre contato e proposta enviada.",
  "Se Vanessa Rocha e Loja Prisma avançarem hoje, o funil ganha tração real ainda nesta semana.",
  "Existem 6 leads com risco de travar por falta de follow-up nas próximas 24h.",
];

const conversionSignals = [
  {
    title: "Melhor ponto de aceleração",
    detail: "Propostas enviadas com urgência explícita estão avançando mais rápido.",
  },
  {
    title: "Maior gargalo",
    detail: "Leads em contato sem próxima ação clara tendem a parar por mais de 48h.",
  },
  {
    title: "Ação recomendada",
    detail: "Transformar cada cartão em uma próxima tarefa acionável melhora a cadência.",
  },
  {
    title: "Responsabilidade por setor",
    detail: "A conversa precisa mostrar quando ainda está no comercial e quando já passou para fechamento.",
  },
];

function OpportunityCard({
  lead,
  company,
  note,
  nextStep,
  sector,
  conversationStatus,
}: {
  lead: string;
  company: string;
  note: string;
  nextStep: string;
  sector: string;
  conversationStatus: string;
}) {
  return (
    <div className="rounded-[1.5rem] border border-white/80 bg-white/92 p-4 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <p className="text-base font-semibold text-slate-900">{lead}</p>
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
            {sector}
          </span>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
            {conversationStatus}
          </span>
        </div>
      </div>
      <p className="mt-1 text-sm text-slate-500">{company}</p>
      <p className="mt-3 text-sm leading-6 text-slate-600">{note}</p>
      <div className="mt-4 flex items-center justify-between gap-3 rounded-2xl bg-slate-50 px-3 py-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
            Próximo passo
          </p>
          <p className="mt-1 text-sm font-semibold text-emerald-700">{nextStep}</p>
        </div>
        <ArrowUpRight className="size-4 text-slate-300" />
      </div>
    </div>
  );
}

export default function PipelinePage() {
  const { leads, threads } = useWorkspaceData();

  function getConversationMeta(leadId: string) {
    const thread = threads.find((item) => item.leadId === leadId);

    return {
      sector: thread?.activeSector ?? "Comercial",
      conversationStatus: thread?.status ?? "Em andamento",
    };
  }

  const pipelineStats = [
    {
      label: "Oportunidades ativas",
      value: String(leads.length),
      detail: "18 avançaram nesta semana",
      icon: Target,
      tone: "bg-emerald-100 text-emerald-700",
    },
    {
      label: "Valor em aberto",
      value: `R$ ${Math.round(leads.reduce((sum, lead) => sum + lead.pipelineValueNumber, 0) / 1000)} mil`,
      detail: "pipeline atual estimado",
      icon: DollarSign,
      tone: "bg-sky-100 text-sky-700",
    },
    {
      label: "Taxa de avanço",
      value: "38%",
      detail: "entre contato e proposta",
      icon: TrendingUp,
      tone: "bg-amber-100 text-amber-700",
    },
  ];

  const stageSummary = [
    {
      title: "Novo",
      count: leads.filter((lead) => lead.stage === "Novo").length,
      amount: `R$ ${Math.round(leads.filter((lead) => lead.stage === "Novo").reduce((sum, lead) => sum + lead.pipelineValueNumber, 0) / 1000)} mil`,
      tone: "bg-slate-900",
      width: "w-[92%]",
    },
    {
      title: "Em contato",
      count: leads.filter((lead) => lead.stage === "Em contato").length,
      amount: `R$ ${Math.round(leads.filter((lead) => lead.stage === "Em contato").reduce((sum, lead) => sum + lead.pipelineValueNumber, 0) / 1000)} mil`,
      tone: "bg-sky-500",
      width: "w-[78%]",
    },
    {
      title: "Proposta enviada",
      count: leads.filter((lead) => lead.stage === "Proposta enviada").length,
      amount: `R$ ${Math.round(leads.filter((lead) => lead.stage === "Proposta enviada").reduce((sum, lead) => sum + lead.pipelineValueNumber, 0) / 1000)} mil`,
      tone: "bg-amber-500",
      width: "w-[64%]",
    },
    {
      title: "Negociação",
      count: leads.filter((lead) => lead.stage === "Negociação").length,
      amount: `R$ ${Math.round(leads.filter((lead) => lead.stage === "Negociação").reduce((sum, lead) => sum + lead.pipelineValueNumber, 0) / 1000)} mil`,
      tone: "bg-emerald-500",
      width: "w-[42%]",
    },
    {
      title: "Fechamento",
      count: leads.filter((lead) => lead.stage === "Fechamento").length,
      amount: `R$ ${Math.round(leads.filter((lead) => lead.stage === "Fechamento").reduce((sum, lead) => sum + lead.pipelineValueNumber, 0) / 1000)} mil`,
      tone: "bg-rose-500",
      width: "w-[20%]",
    },
  ];

  const stageColumns = [
    {
      title: "Novo",
      count: leads.filter((lead) => lead.stage === "Novo").length,
      amount: `R$ ${Math.round(leads.filter((lead) => lead.stage === "Novo").reduce((sum, lead) => sum + lead.pipelineValueNumber, 0) / 1000)} mil`,
      accent: "border-slate-200 bg-slate-50/80",
      dot: "bg-slate-900",
      items: leads
        .filter((lead) => lead.stage === "Novo")
        .map((lead) => ({
          lead: lead.name,
          company: lead.company,
          note: lead.summary,
          nextStep: lead.nextAction,
          ...getConversationMeta(lead.id),
        })),
    },
    {
      title: "Em contato",
      count: leads.filter((lead) => lead.stage === "Em contato").length,
      amount: `R$ ${Math.round(leads.filter((lead) => lead.stage === "Em contato").reduce((sum, lead) => sum + lead.pipelineValueNumber, 0) / 1000)} mil`,
      accent: "border-sky-200 bg-sky-50/80",
      dot: "bg-sky-500",
      items: leads
        .filter((lead) => lead.stage === "Em contato")
        .map((lead) => ({
          lead: lead.name,
          company: lead.company,
          note: lead.summary,
          nextStep: lead.nextAction,
          ...getConversationMeta(lead.id),
        })),
    },
    {
      title: "Proposta enviada",
      count: leads.filter((lead) => lead.stage === "Proposta enviada").length,
      amount: `R$ ${Math.round(leads.filter((lead) => lead.stage === "Proposta enviada").reduce((sum, lead) => sum + lead.pipelineValueNumber, 0) / 1000)} mil`,
      accent: "border-amber-200 bg-amber-50/80",
      dot: "bg-amber-500",
      items: leads
        .filter((lead) => lead.stage === "Proposta enviada")
        .map((lead) => ({
          lead: lead.name,
          company: lead.company,
          note: lead.summary,
          nextStep: lead.nextAction,
          ...getConversationMeta(lead.id),
        })),
    },
    {
      title: "Negociação",
      count: leads.filter((lead) => lead.stage === "Negociação").length,
      amount: `R$ ${Math.round(leads.filter((lead) => lead.stage === "Negociação").reduce((sum, lead) => sum + lead.pipelineValueNumber, 0) / 1000)} mil`,
      accent: "border-emerald-200 bg-emerald-50/80",
      dot: "bg-emerald-500",
      items: leads
        .filter((lead) => lead.stage === "Negociação")
        .map((lead) => ({
          lead: lead.name,
          company: lead.company,
          note: lead.summary,
          nextStep: lead.nextAction,
          ...getConversationMeta(lead.id),
        })),
    },
  ];

  return (
    <div className="space-y-5 sm:space-y-6">
      <section className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
        <Card className="overflow-hidden border-sky-200 bg-[linear-gradient(135deg,#0f172a_0%,#16263e_48%,#0f766e_100%)] text-white shadow-[0_36px_90px_-50px_rgba(15,23,42,0.8)]">
          <CardContent className="relative p-5 sm:p-6">
            <div className="pointer-events-none absolute -right-16 top-0 size-40 rounded-full bg-sky-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -left-8 bottom-0 size-32 rounded-full bg-emerald-400/15 blur-3xl" />

            <div className="relative flex flex-col gap-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-100">
                  Pipeline comercial
                </span>
                <span className="rounded-full bg-sky-400/15 px-3 py-1 text-xs font-semibold text-sky-50">
                  Funil visual pronto para evoluir
                </span>
              </div>

              <div className="max-w-2xl">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  O funil agora mostra onde estão as oportunidades, onde o valor se concentra e qual etapa precisa de mais atenção.
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-200 sm:text-base">
                  Essa primeira versão já organiza a leitura do pipeline em colunas claras, com contexto suficiente para decisão rápida no celular e no desktop.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.2em] text-sky-100">Maior volume</p>
                  <p className="mt-2 text-lg font-semibold">Em contato</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.2em] text-sky-100">Maior valor</p>
                  <p className="mt-2 text-lg font-semibold">Proposta enviada</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.2em] text-sky-100">Próximo salto</p>
                  <p className="mt-2 text-lg font-semibold">Virar negociação em fechamento</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-white/70 bg-white/90">
          <CardHeader>
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
                  Leituras do funil
                </p>
                <CardTitle className="mt-2">Sinais para agir</CardTitle>
              </div>
              <div className="flex size-11 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                <Sparkles className="size-5" />
              </div>
            </div>
            <CardDescription>
              Um resumo estratégico para mostrar gargalos, concentração de valor e oportunidades de avanço.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {pipelineInsights.map((insight) => (
              <div
                key={insight}
                className="rounded-[1.5rem] border border-sky-100 bg-sky-50/70 px-4 py-4 text-sm leading-6 text-slate-700"
              >
                {insight}
              </div>
            ))}

            <div className="rounded-[1.5rem] border border-slate-200/80 bg-slate-950 px-4 py-4 text-white">
              <div className="flex items-center gap-2 text-sky-300">
                <Flame className="size-4" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                  Oportunidade quente
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-200">
                Vanessa Rocha está na melhor posição para puxar uma vitória rápida e dar prova real de avanço no pipeline ainda hoje.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-3 sm:grid-cols-3">
        {pipelineStats.map((stat) => (
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
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Resumo por etapa
                </p>
                <CardTitle className="mt-2">Leitura rápida de conversão</CardTitle>
              </div>
              <Button className="w-full sm:w-auto">
                <CirclePlus className="size-4.5" />
                Nova oportunidade
              </Button>
            </div>
            <CardDescription>
              Uma visão condensada do funil para entender volume e valor antes de entrar nas colunas.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {stageSummary.map((stage) => (
              <div key={stage.title} className="space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className={`size-3 rounded-full ${stage.tone}`} />
                    <span className="text-sm font-semibold text-slate-900">{stage.title}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-500">
                    <span>{stage.count} leads</span>
                    <span>{stage.amount}</span>
                  </div>
                </div>
                <div className="h-3 rounded-full bg-slate-100">
                  <div className={`h-3 rounded-full ${stage.tone} ${stage.width}`} />
                </div>
              </div>
            ))}

            <div className="grid gap-3 pt-2 sm:grid-cols-3">
              {conversionSignals.map((signal) => (
                <div
                  key={signal.title}
                  className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 p-4"
                >
                  <p className="text-sm font-semibold text-slate-900">{signal.title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{signal.detail}</p>
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
                  Próxima etapa
                </p>
                <CardTitle className="mt-2">Como esse pipeline evolui</CardTitle>
              </div>
              <div className="flex size-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                <KanbanSquare className="size-5" />
              </div>
            </div>
            <CardDescription>
              A estrutura já está pronta para virar um kanban completo sem recomeçar o trabalho.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 p-4">
              <div className="flex items-center gap-2 text-slate-700">
                <MoveRight className="size-4" />
                <span className="text-sm font-semibold">Arrastar cartões entre etapas</span>
              </div>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 p-4">
              <div className="flex items-center gap-2 text-slate-700">
                <Clock3 className="size-4" />
                <span className="text-sm font-semibold">Mostrar idade da oportunidade por estágio</span>
              </div>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 p-4">
              <div className="flex items-center gap-2 text-slate-700">
                <BarChart3 className="size-4" />
                <span className="text-sm font-semibold">Comparar conversão e perdas por etapa</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Funil visual
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
              Colunas prontas para operação
            </h3>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700">
            Leads
            <ArrowRight className="size-3.5" />
            Pipeline
            <ArrowRight className="size-3.5" />
            Tarefas
          </div>
        </div>

        <div className="grid gap-4 2xl:grid-cols-4 xl:grid-cols-2">
          {stageColumns.map((column) => (
            <Card key={column.title} className={`border ${column.accent}`}>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className={`size-3 rounded-full ${column.dot}`} />
                    <CardTitle>{column.title}</CardTitle>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                    {column.count}
                  </span>
                </div>
                <CardDescription>{column.amount} em oportunidades nesta etapa</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {column.items.map((item) => (
                  <OpportunityCard key={`${column.title}-${item.lead}`} {...item} />
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
