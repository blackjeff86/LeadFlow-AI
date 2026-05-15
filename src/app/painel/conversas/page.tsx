"use client";

import {
  AlertTriangle,
  ArrowUpRight,
  Bot,
  Building2,
  ClipboardList,
  Clock3,
  MessageCircleMore,
  MessageSquareText,
  Send,
  Sparkles,
  Star,
  Target,
  UsersRound,
  WandSparkles,
} from "lucide-react";
import { useMemo, useState } from "react";

import { useWorkspaceData } from "@/components/app/workspace-data-provider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { type ConversationSector } from "@/lib/mock-crm-data";

const benchmarkSignals = [
  "O benchmark mostrou que conversa centralizada é o bloco que mais aproxima o produto do valor percebido pelos concorrentes.",
  "A inbox precisa reduzir troca de tela: responder, criar follow-up, mover etapa e usar IA no mesmo fluxo.",
  "O diferencial não está em ter chat, mas em transformar conversa em próxima ação comercial com contexto.",
  "Um único número com multichat por setor dá mais controle para donos de operação sem quebrar histórico em vários WhatsApps.",
];

const focusCards = [
  {
    title: "Melhor oportunidade agora",
    value: "Vanessa Rocha",
    detail: "Conversa pronta para fechamento ainda hoje.",
  },
  {
    title: "Canal dominante",
    value: "WhatsApp",
    detail: "Fluxo principal da operação e maior urgência de resposta.",
  },
  {
    title: "Papel da IA",
    value: "Resumir + sugerir",
    detail: "Menos ruído e mais ação comercial clara.",
  },
  {
    title: "Diferencial operacional",
    value: "Multichat por setor",
    detail: "Comercial, fechamento e onboarding na mesma thread.",
  },
];

const sectorFilters: Array<"Todos" | ConversationSector> = [
  "Todos",
  "Comercial",
  "Fechamento",
  "Onboarding",
];

const sectorTransferActions = [
  {
    title: "Transferir para fechamento",
    detail: "Quando a conversa já virou negociação ou condição final.",
    sector: "Fechamento",
  },
  {
    title: "Transferir para onboarding",
    detail: "Quando a venda foi confirmada e o próximo passo é implantação.",
    sector: "Onboarding",
  },
];

const ownershipViews = ["Minhas conversas", "Fila do setor"];
const journeySteps = ["Comercial", "Fechamento", "Onboarding"];

function StatusBadge({ value }: { value: string }) {
  const tone =
    value === "Pronto para fechar"
      ? "bg-rose-100 text-rose-700"
      : value === "Em andamento"
        ? "bg-sky-100 text-sky-700"
        : "bg-amber-100 text-amber-700";

  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ${tone}`}>{value}</span>;
}

function ChannelBadge({ value }: { value: string }) {
  const tone =
    value === "WhatsApp"
      ? "bg-emerald-100 text-emerald-700"
      : value === "Instagram"
        ? "bg-fuchsia-100 text-fuchsia-700"
        : "bg-slate-100 text-slate-700";

  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ${tone}`}>{value}</span>;
}

function SectorBadge({ value }: { value: string }) {
  const tone =
    value === "Comercial"
      ? "bg-sky-100 text-sky-700"
      : value === "Fechamento"
        ? "bg-rose-100 text-rose-700"
        : "bg-violet-100 text-violet-700";

  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ${tone}`}>{value}</span>;
}

export default function ConversasPage() {
  const { leads, threads, transferThreadToSector } = useWorkspaceData();
  const [selectedThreadId, setSelectedThreadId] = useState(threads[0]?.id ?? "");
  const [activeSectorFilter, setActiveSectorFilter] = useState<"Todos" | ConversationSector>("Todos");
  const [ownershipView, setOwnershipView] = useState<(typeof ownershipViews)[number]>(
    "Minhas conversas"
  );
  const selectedThread = threads.find((thread) => thread.id === selectedThreadId);
  const filteredThreads = useMemo(() => {
    const sectorScopedThreads =
      activeSectorFilter === "Todos"
        ? threads
        : threads.filter((thread) => thread.activeSector === activeSectorFilter);

    if (ownershipView === "Minhas conversas") {
      return sectorScopedThreads.filter((thread) => thread.sectorOwner === "Jeffe");
    }

    return sectorScopedThreads;
  }, [activeSectorFilter, ownershipView, threads]);
  const activeThread = filteredThreads.find((thread) => thread.id === selectedThread?.id) ?? filteredThreads[0];
  const activeLead = leads.find((lead) => lead.id === activeThread?.leadId);
  const handoffTimeline = activeThread?.messages.filter((message) => message.internal) ?? [];
  const myThreads = threads.filter((thread) => thread.sectorOwner === "Jeffe");
  const sectorThreads = threads.filter((thread) => thread.activeSector === activeThread?.activeSector);
  const criticalThreads = threads.filter((thread) => thread.slaState === "Crítico");
  const sectorSummaryCards = [
    {
      title: "Minhas conversas",
      value: String(myThreads.length),
      detail: "threads sob responsabilidade direta",
    },
    {
      title: "Fila do setor",
      value: String(sectorThreads.length),
      detail: `threads atualmente em ${activeThread.activeSector.toLowerCase()}`,
    },
    {
      title: "SLA crítico",
      value: String(criticalThreads.length),
      detail: "sem resposta ideal dentro da janela",
    },
  ];
  const activeStepIndex = activeThread ? journeySteps.indexOf(activeThread.activeSector) : -1;

  const conversationStats = [
    {
      label: "Conversas ativas",
      value: String(threads.length),
      detail: "centralizadas no workspace",
      icon: MessageCircleMore,
      tone: "bg-emerald-100 text-emerald-700",
    },
    {
      label: "Aguardando resposta",
      value: String(threads.filter((thread) => thread.status === "Aguardando resposta").length),
      detail: "pedem retomada objetiva",
      icon: Clock3,
      tone: "bg-amber-100 text-amber-700",
    },
    {
      label: "IA pronta para agir",
      value: String(threads.filter((thread) => thread.aiSummary).length),
      detail: "com resumo e próxima ação",
      icon: Bot,
      tone: "bg-fuchsia-100 text-fuchsia-700",
    },
    {
      label: "Setores no mesmo número",
      value: "3",
      detail: "comercial, fechamento e onboarding",
      icon: UsersRound,
      tone: "bg-slate-100 text-slate-700",
    },
  ];

  if (!activeThread || !activeLead) {
    return null;
  }

  return (
    <div className="space-y-5 sm:space-y-6">
      <section className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
        <Card className="overflow-hidden border-emerald-200 bg-[linear-gradient(135deg,#0f172a_0%,#14243a_48%,#0f766e_100%)] text-white shadow-[0_36px_90px_-50px_rgba(15,23,42,0.8)]">
          <CardContent className="relative p-5 sm:p-6">
            <div className="pointer-events-none absolute -right-16 top-0 size-40 rounded-full bg-emerald-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -left-8 bottom-0 size-32 rounded-full bg-cyan-400/15 blur-3xl" />

            <div className="relative flex flex-col gap-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-100">
                  Inbox comercial
                </span>
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-50">
                  Conversa + CRM + IA no mesmo fluxo
                </span>
              </div>

              <div className="max-w-2xl">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Esta é a peça que liga o produto ao WhatsApp de verdade: conversa centralizada com contexto, prioridade e próxima ação.
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-200 sm:text-base">
                  Em vez de alternar entre CRM, tarefa e mensagem, o vendedor enxerga tudo no mesmo lugar e age mais rápido.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {focusCards.map((card) => (
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
                  Sinais do benchmark
                </p>
                <CardTitle className="mt-2">Por que esta tela importa</CardTitle>
              </div>
              <div className="flex size-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                <Sparkles className="size-5" />
              </div>
            </div>
            <CardDescription>
              A direção de produto agora fica mais clara: menos CRM isolado e mais operação em cima da conversa.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {benchmarkSignals.map((signal) => (
              <div
                key={signal}
                className="rounded-[1.5rem] border border-emerald-100 bg-emerald-50/70 px-4 py-4 text-sm leading-6 text-slate-700"
              >
                {signal}
              </div>
            ))}

            <div className="rounded-[1.5rem] border border-slate-200/80 bg-slate-950 px-4 py-4 text-white">
              <div className="flex items-center gap-2 text-emerald-300">
                <Target className="size-4" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                  Meta desta área
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-200">
                Transformar cada conversa em resposta, tarefa, avanço de etapa ou fechamento sem atrito.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {conversationStats.map((stat) => (
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

      <section className="flex flex-wrap gap-2">
        {sectorFilters.map((filter) => {
          const active = filter === activeSectorFilter;

          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveSectorFilter(filter)}
              className={
                active
                  ? "rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20"
                  : "rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-200"
              }
            >
              {filter}
            </button>
          );
        })}
      </section>

      <section className="grid gap-3 lg:grid-cols-[0.95fr_1.05fr]">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Visões da fila
                </p>
                <CardTitle className="mt-2">Responsabilidade operacional</CardTitle>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700">
                <UsersRound className="size-4" />
                mesmo número, filas separadas
              </div>
            </div>
            <CardDescription>
              O gestor e o operador precisam enxergar tanto a fila pessoal quanto a fila do setor.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {ownershipViews.map((view) => {
                const active = view === ownershipView;

                return (
                  <button
                    key={view}
                    type="button"
                    onClick={() => setOwnershipView(view)}
                    className={
                      active
                        ? "rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
                        : "rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600"
                    }
                  >
                    {view}
                  </button>
                );
              })}
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {sectorSummaryCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 p-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    {card.title}
                  </p>
                <p className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
                  {card.value}
                </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{card.detail}</p>
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
                  SLA por conversa
                </p>
                <CardTitle className="mt-2">Tempo parado e urgência</CardTitle>
              </div>
              <div className="flex size-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                <Clock3 className="size-5" />
              </div>
            </div>
            <CardDescription>
              Uma camada simples para o dono da operação entender onde a conversa pode esfriar.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {threads.map((thread) => {
              const lead = leads.find((item) => item.id === thread.leadId);
              const slaTone =
                thread.slaState === "Crítico"
                  ? "bg-rose-100 text-rose-700"
                  : thread.slaState === "Janela ativa"
                    ? "bg-sky-100 text-sky-700"
                    : "bg-amber-100 text-amber-700";

              return (
                <div
                  key={`sla-${thread.id}`}
                  className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-slate-900">{lead?.name}</p>
                      <p className="mt-1 text-sm text-slate-500">{thread.slaDeadline}</p>
                    </div>
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${slaTone}`}>
                      {thread.slaState === "Crítico"
                        ? "crítico agora"
                        : thread.slaState === "Janela ativa"
                          ? "janela ativa"
                          : "saudável"}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{thread.suggestedAction}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    fila #{thread.queuePosition} no setor
                  </p>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr_0.9fr]">
        <Card>
          <CardHeader>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Fila de conversas
                </p>
                <CardTitle className="mt-2">Onde responder primeiro</CardTitle>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-sky-50 px-3 py-2 text-xs font-semibold text-sky-700">
                <MessageCircleMore className="size-4" />
                1 número, 3 setores
              </div>
            </div>
            <CardDescription>
              Prioridade visual por urgência, canal e intenção comercial.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {filteredThreads.map((thread) => {
              const lead = leads.find((item) => item.id === thread.leadId);
              const active = thread.id === activeThread.id;

              return (
                <button
                  key={thread.id}
                  type="button"
                  onClick={() => setSelectedThreadId(thread.id)}
                  className={
                    active
                      ? "w-full rounded-[1.5rem] border border-emerald-200 bg-emerald-50/80 p-4 text-left shadow-sm"
                      : "w-full rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 p-4 text-left"
                  }
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-slate-900">{lead?.name}</p>
                      <p className="mt-1 text-sm text-slate-500">{lead?.company}</p>
                    </div>
                    {thread.unreadCount > 0 ? (
                      <span className="rounded-full bg-emerald-500 px-2.5 py-1 text-xs font-semibold text-white">
                        {thread.unreadCount}
                      </span>
                    ) : null}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <ChannelBadge value={thread.channel} />
                    <StatusBadge value={thread.status} />
                    <SectorBadge value={thread.activeSector} />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{thread.preview}</p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    {thread.lastMessageAt}
                  </p>
                </button>
              );
            })}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Conversa ativa
                </p>
                <CardTitle className="mt-2">{activeLead?.name}</CardTitle>
              </div>
              <div className="flex flex-wrap gap-2">
                <ChannelBadge value={activeThread.channel} />
                <StatusBadge value={activeThread.status} />
                <SectorBadge value={activeThread.activeSector} />
              </div>
            </div>
            <CardDescription>
              Histórico rápido, contexto suficiente e ação imediata sem sair da inbox.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Posição na fila
                </p>
                <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
                  #{activeThread.queuePosition}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Ordem de resposta dentro do setor atual.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  SLA atual
                </p>
                <p className="mt-2 text-base font-semibold text-slate-900">{activeThread.slaDeadline}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Estado: {activeThread.slaState.toLowerCase()}.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Setor para o cliente
                </p>
                <p className="mt-2 text-base font-semibold text-slate-900">
                  {activeThread.sectorVisibilityMode}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Define se a troca de setor aparece ou fica invisível na experiência final.
                </p>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Fluxo por setor no mesmo número
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {activeThread.sectorQueue.map((sector) => (
                      <SectorBadge key={sector} value={sector} />
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Responsável atual
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-900">{activeThread.sectorOwner}</p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-amber-100 bg-amber-50/80 p-4">
              <div className="flex items-center gap-2 text-amber-800">
                <ClipboardList className="size-4" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                  Tarefa criada por handoff
                </span>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-700">{activeThread.autoTaskLabel}</p>
            </div>

            <div className="rounded-[1.5rem] border border-emerald-100 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                Jornada da conversa
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {journeySteps.map((step, index) => {
                  const done = index < activeStepIndex;
                  const active = index === activeStepIndex;

                  return (
                    <div
                      key={step}
                      className={
                        active
                          ? "rounded-[1.25rem] border border-emerald-200 bg-emerald-50 px-4 py-4"
                          : done
                            ? "rounded-[1.25rem] border border-sky-200 bg-sky-50 px-4 py-4"
                            : "rounded-[1.25rem] border border-slate-200 bg-slate-50 px-4 py-4"
                      }
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                        {done ? "Concluído" : active ? "Atual" : "Próximo"}
                      </p>
                      <p className="mt-2 font-semibold text-slate-900">{step}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {activeThread.messages.map((message, index) => {
              const isLead = message.sender === "lead";
              const isAi = message.sender === "ai";
              const isInternal = Boolean(message.internal);

              return (
                <div
                  key={`${message.time}-${index}`}
                  className={
                    isInternal
                      ? "mx-8 rounded-[1.5rem] border border-sky-100 bg-sky-50/80 p-4"
                      : isLead
                      ? "mr-6 rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 p-4"
                      : isAi
                        ? "mx-4 rounded-[1.5rem] border border-fuchsia-100 bg-fuchsia-50/80 p-4"
                        : "ml-6 rounded-[1.5rem] border border-emerald-100 bg-emerald-50/80 p-4"
                  }
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      {isLead ? activeLead?.name : isAi ? "IA" : isInternal ? "Nota interna" : "Você"}
                    </p>
                    <p className="text-xs text-slate-400">{message.time}</p>
                  </div>
                  {message.sector ? (
                    <div className="mt-2">
                      <SectorBadge value={message.sector} />
                    </div>
                  ) : null}
                  <p className="mt-3 text-sm leading-7 text-slate-700">{message.text}</p>
                </div>
              );
            })}

            <div className="rounded-[1.5rem] border border-emerald-100 bg-emerald-50/70 px-4 py-4">
              <div className="flex items-center gap-2 text-emerald-700">
                <WandSparkles className="size-4" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                  Sugestão pronta
                </span>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-700">{activeLead?.messageDraft}</p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button className="flex-1 justify-center rounded-[1.25rem]">
                <Send className="size-4.5" />
                Responder agora
              </Button>
              <Button variant="secondary" className="flex-1 justify-center rounded-[1.25rem]">
                <UsersRound className="size-4.5" />
                Passar de setor
              </Button>
              <Button variant="outline" className="justify-center rounded-[1.25rem] sm:w-auto">
                <ArrowUpRight className="size-4.5" />
              </Button>
            </div>

            <div className="grid gap-3 lg:grid-cols-2">
              {sectorTransferActions.map((action) => (
                <div
                  key={action.title}
                  className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-slate-900">{action.title}</p>
                    <SectorBadge value={action.sector} />
                  </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">{action.detail}</p>
                <Button
                  variant="outline"
                    className="mt-3 w-full justify-center rounded-[1.25rem]"
                    onClick={() => transferThreadToSector(activeThread.id, action.sector as ConversationSector)}
                    disabled={activeThread.activeSector === action.sector}
                  >
                    <UsersRound className="size-4.5" />
                    {activeThread.activeSector === action.sector
                      ? `${action.sector} já assumiu`
                      : `Enviar para ${action.sector}`}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-5">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Contexto do lead
                  </p>
                  <CardTitle className="mt-2">Tudo sem trocar de tela</CardTitle>
                </div>
                <div className="flex size-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                  <Star className="size-5" />
                </div>
              </div>
              <CardDescription>
                O vendedor precisa ver estágio, origem e próxima ação enquanto conversa.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Estágio
                </p>
                <p className="mt-2 font-semibold text-slate-900">{activeLead?.stage}</p>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Origem
                </p>
                <p className="mt-2 font-semibold text-slate-900">{activeLead?.source}</p>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Próxima ação
                </p>
                <p className="mt-2 font-semibold text-emerald-700">{activeLead?.nextAction}</p>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Setor atual
                </p>
                <p className="mt-2 font-semibold text-slate-900">{activeThread.activeSector}</p>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Visibilidade do setor
                </p>
                <p className="mt-2 font-semibold text-slate-900">{activeThread.sectorVisibilityMode}</p>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Tarefa ligada
                </p>
                <p className="mt-2 font-semibold text-slate-900">{activeLead?.taskSummary}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Linha do tempo interna
                  </p>
                  <CardTitle className="mt-2">Passagem entre setores</CardTitle>
                </div>
                <div className="flex size-11 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                  <UsersRound className="size-5" />
                </div>
              </div>
              <CardDescription>
                Histórico de bastão para o gestor ver quem assumiu a conversa e quando.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {handoffTimeline.map((item, index) => (
                <div
                  key={`${item.time}-${index}`}
                  className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <SectorBadge value={item.sector ?? "Comercial"} />
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      {item.time}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-700">{item.text}</p>
                </div>
              ))}
              {handoffTimeline.length === 0 ? (
                <div className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 p-4 text-sm text-slate-600">
                  Nenhuma passagem de setor registrada ainda nesta conversa.
                </div>
              ) : null}
            </CardContent>
          </Card>

          <Card className="border-slate-200/80 bg-slate-950 text-white">
            <CardHeader>
              <div className="flex size-12 items-center justify-center rounded-2xl bg-white/10 text-emerald-300">
                <Building2 className="size-5" />
              </div>
              <CardTitle className="text-white">O que esta tela entrega</CardTitle>
              <CardDescription className="text-slate-300">
                Ela aproxima o produto do padrão que mais importa no mercado: conversa no centro da operação.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-6 text-slate-300">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-4">
                Inbox com prioridade, contexto e status da conversa.
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-4">
                IA resumindo a situação e sugerindo o próximo movimento.
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-4">
                CRM, tarefa e resposta prontos para se encontrar num único fluxo.
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-4">
                Multichat por setor em um único número, com passagem de bastão e histórico centralizado.
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-4">
                SLA, fila por responsável e tarefa automática deixam a operação mais explícita antes do backend.
              </div>
              <Button className="mt-2 w-full justify-center rounded-[1.25rem]">
                <AlertTriangle className="size-4.5" />
                Validar regras operacionais
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
