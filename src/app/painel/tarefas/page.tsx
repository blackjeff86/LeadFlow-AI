import {
  AlarmClockCheck,
  ArrowUpRight,
  CalendarRange,
  CheckCheck,
  CirclePlus,
  Clock3,
  ListTodo,
  MessageSquareText,
  Sparkles,
  Target,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { crmLeads } from "@/lib/mock-crm-data";

const taskStats = [
  {
    label: "Tarefas abertas",
    value: String(crmLeads.length),
    detail: "14 para hoje",
    icon: ListTodo,
    tone: "bg-emerald-100 text-emerald-700",
  },
  {
    label: "Atrasadas",
    value: String(crmLeads.filter((lead) => lead.taskStatus === "Atrasada").length),
    detail: "precisam de ação imediata",
    icon: AlarmClockCheck,
    tone: "bg-rose-100 text-rose-700",
  },
  {
    label: "Concluídas hoje",
    value: "11",
    detail: "4 vieram da IA",
    icon: CheckCheck,
    tone: "bg-sky-100 text-sky-700",
  },
];

const focusCards = [
  {
    title: "Prioridade máxima",
    value: `${crmLeads.filter((lead) => lead.taskStatus === "Atrasada").length} follow-ups vencidos`,
    detail: "Todos entre proposta e negociação.",
  },
  {
    title: "Melhor janela",
    value: "9h às 11h",
    detail: "Maior taxa de resposta nesta manhã.",
  },
  {
    title: "Meta do dia",
    value: "Zerar atrasos",
    detail: "e mover 3 leads de etapa.",
  },
];

const taskColumns = [
  {
    title: "Atrasadas",
    eyebrow: "Resolver primeiro",
    accent: "border-rose-200 bg-rose-50/70",
    badge: `${crmLeads.filter((lead) => lead.taskStatus === "Atrasada").length} urgentes`,
    items: crmLeads
      .filter((lead) => lead.taskStatus === "Atrasada")
      .map((lead) => ({
        lead: lead.name,
        type: lead.taskType,
        due: lead.taskDue,
        summary: lead.taskSummary,
        action: lead.taskAction,
      })),
  },
  {
    title: "Hoje",
    eyebrow: "Rotina do dia",
    accent: "border-amber-200 bg-amber-50/70",
    badge: `${crmLeads.filter((lead) => lead.taskStatus === "Hoje").length} programadas`,
    items: crmLeads
      .filter((lead) => lead.taskStatus === "Hoje")
      .map((lead) => ({
        lead: lead.name,
        type: lead.taskType,
        due: lead.taskDue,
        summary: lead.taskSummary,
        action: lead.taskAction,
      })),
  },
  {
    title: "Próximas",
    eyebrow: "Em seguida",
    accent: "border-emerald-200 bg-emerald-50/70",
    badge: `${crmLeads.filter((lead) => lead.taskStatus === "Próxima").length} agendadas`,
    items: crmLeads
      .filter((lead) => lead.taskStatus === "Próxima")
      .map((lead) => ({
        lead: lead.name,
        type: lead.taskType,
        due: lead.taskDue,
        summary: lead.taskSummary,
        action: lead.taskAction,
      })),
  },
];

const aiRecommendations = [
  "Comece pelos leads em proposta enviada: eles têm maior chance de conversão hoje.",
  "As tarefas de recuperação estão performando melhor com mensagens mais curtas e diretas.",
  "Se zerar os atrasos antes do meio-dia, a tarde pode ser usada para avanço de pipeline.",
];

const executionBlocks = [
  {
    title: "Cadência da manhã",
    detail: "Priorize follow-ups vencidos e respostas com prazo sensível.",
  },
  {
    title: "Meio do dia",
    detail: "Use a faixa de melhor resposta para abrir e reativar conversas.",
  },
  {
    title: "Fim da tarde",
    detail: "Feche pendências de proposta e confirme próximos passos com leads quentes.",
  },
];

function TaskTypeBadge({ value }: { value: string }) {
  const tone =
    value === "Proposta"
      ? "bg-amber-100 text-amber-800"
      : value === "Negociação"
        ? "bg-sky-100 text-sky-800"
        : value === "Follow-up" || value === "Reengajamento"
          ? "bg-emerald-100 text-emerald-800"
          : "bg-slate-100 text-slate-700";

  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ${tone}`}>{value}</span>;
}

export default function TarefasPage() {
  return (
    <div className="space-y-5 sm:space-y-6">
      <section className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
        <Card className="overflow-hidden border-amber-200 bg-[linear-gradient(135deg,#0f172a_0%,#20263b_52%,#b45309_100%)] text-white shadow-[0_36px_90px_-50px_rgba(15,23,42,0.8)]">
          <CardContent className="relative p-5 sm:p-6">
            <div className="pointer-events-none absolute -right-16 top-0 size-40 rounded-full bg-amber-300/20 blur-3xl" />
            <div className="pointer-events-none absolute -left-8 bottom-0 size-32 rounded-full bg-emerald-400/15 blur-3xl" />

            <div className="relative flex flex-col gap-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-100">
                  Rotina operacional
                </span>
                <span className="rounded-full bg-amber-300/15 px-3 py-1 text-xs font-semibold text-amber-50">
                  Follow-ups, retornos e execução
                </span>
              </div>

              <div className="max-w-2xl">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Aqui o vendedor enxerga o que está atrasado, o que vence hoje e o que deve ser feito primeiro.
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-200 sm:text-base">
                  A tela foi desenhada para virar rotina de uso real, reduzindo esquecimento de follow-up e mantendo o dia comercial sob controle.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {focusCards.map((card) => (
                  <div
                    key={card.title}
                    className="rounded-[1.5rem] border border-white/10 bg-white/10 p-4 backdrop-blur-sm"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-amber-100">{card.title}</p>
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
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                  Assistente de execução
                </p>
                <CardTitle className="mt-2">Leitura rápida do dia</CardTitle>
              </div>
              <div className="flex size-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                <Sparkles className="size-5" />
              </div>
            </div>
            <CardDescription>
              Resumo da fila de trabalho com foco em ação imediata e priorização.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {aiRecommendations.map((recommendation) => (
              <div
                key={recommendation}
                className="rounded-[1.5rem] border border-amber-100 bg-amber-50/70 px-4 py-4 text-sm leading-6 text-slate-700"
              >
                {recommendation}
              </div>
            ))}

            <div className="rounded-[1.5rem] border border-slate-200/80 bg-slate-950 px-4 py-4 text-white">
              <div className="flex items-center gap-2 text-amber-300">
                <Target className="size-4" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                  Objetivo imediato
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-200">
                Zere primeiro os atrasos ligados a proposta e negociação. Essa é a parte da fila com maior impacto no caixa.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-3 sm:grid-cols-3">
        {taskStats.map((stat) => (
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

      <section className="grid gap-5 xl:grid-cols-[1.12fr_0.88fr]">
        <Card>
          <CardHeader>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Fila operacional
                  </p>
                  <CardTitle className="mt-2">Tarefas prontas para execução</CardTitle>
                </div>
                <Button className="w-full sm:w-auto">
                  <CirclePlus className="size-4.5" />
                  Nova tarefa
                </Button>
              </div>
              <CardDescription>
                A estrutura já separa o que está vencido, o que entra hoje e o que vem depois, sem apertar demais a leitura no celular.
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {taskColumns.map((column) => (
              <div
                key={column.title}
                className={`rounded-[1.75rem] border p-4 sm:p-5 ${column.accent}`}
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {column.eyebrow}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-slate-900">{column.title}</h3>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                    {column.badge}
                  </span>
                </div>

                <div className="mt-4 space-y-3">
                  {column.items.map((item) => (
                    <div
                      key={`${column.title}-${item.lead}`}
                      className="rounded-[1.5rem] border border-white/80 bg-white/90 p-4 shadow-sm"
                    >
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <p className="text-base font-semibold text-slate-900">{item.lead}</p>
                            <p className="mt-1 text-sm text-slate-500">{item.summary}</p>
                          </div>
                          <TaskTypeBadge value={item.type} />
                        </div>

                        <div className="flex flex-wrap items-center gap-3 text-sm">
                          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-slate-600">
                            <Clock3 className="size-4" />
                            {item.due}
                          </div>
                          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-emerald-700">
                            <MessageSquareText className="size-4" />
                            {item.action}
                          </div>
                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row">
                          <Button className="flex-1 justify-center rounded-[1.25rem]">
                            <CheckCheck className="size-4.5" />
                            Concluir tarefa
                          </Button>
                          <Button variant="secondary" className="flex-1 justify-center rounded-[1.25rem]">
                            <MessageSquareText className="size-4.5" />
                            Abrir lead
                          </Button>
                          <Button variant="outline" className="justify-center rounded-[1.25rem] sm:w-auto">
                            <ArrowUpRight className="size-4.5" />
                          </Button>
                        </div>
                      </div>
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
                    Ritmo do dia
                  </p>
                  <CardTitle className="mt-2">Blocos de execução</CardTitle>
                </div>
                <div className="flex size-11 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                  <CalendarRange className="size-5" />
                </div>
              </div>
              <CardDescription>
                Uma leitura simples da rotina comercial para orientar manhã, meio do dia e fechamento.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {executionBlocks.map((block) => (
                <div
                  key={block.title}
                  className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 p-4"
                >
                  <p className="font-semibold text-slate-900">{block.title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{block.detail}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-slate-200/80 bg-slate-950 text-white">
            <CardHeader>
              <div className="flex size-12 items-center justify-center rounded-2xl bg-white/10 text-emerald-300">
                <ListTodo className="size-5" />
              </div>
              <CardTitle className="text-white">O que esta tela já prepara</CardTitle>
              <CardDescription className="text-slate-300">
                Ela já organiza a lógica central de follow-up e cria o esqueleto ideal para dados reais, lembretes e automações.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-6 text-slate-300">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-4">
                Separação clara entre atrasadas, tarefas do dia e próximas ações.
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-4">
                Espaço pronto para marcar conclusão, abrir lead e depois reagendar tarefas.
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-4">
                Base perfeita para conectar notificações, cadências e lembretes da IA.
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
