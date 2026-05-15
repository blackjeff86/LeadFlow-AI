import {
  ArrowUpRight,
  CalendarClock,
  CheckCheck,
  CirclePlus,
  Filter,
  MessageSquareText,
  PhoneCall,
  Search,
  Sparkles,
  Star,
  Target,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { crmFilterPills, crmLeads } from "@/lib/mock-crm-data";

const leadStats = [
  {
    label: "Leads na base",
    value: String(crmLeads.length),
    detail: "22 entraram nesta semana",
    icon: Target,
    tone: "bg-emerald-100 text-emerald-700",
  },
  {
    label: "Quentes hoje",
    value: String(crmLeads.filter((lead) => lead.temperature !== "Morno").length),
    detail: "6 pedem resposta antes do almoço",
    icon: Star,
    tone: "bg-amber-100 text-amber-700",
  },
  {
    label: "Follow-ups ativos",
    value: String(crmLeads.filter((lead) => lead.taskStatus !== "Próxima").length),
    detail: `${crmLeads.filter((lead) => lead.taskStatus === "Atrasada").length} em risco de atraso`,
    icon: CalendarClock,
    tone: "bg-sky-100 text-sky-700",
  },
];

const priorityList = [
  {
    title: `${crmLeads.filter((lead) => lead.taskStatus === "Atrasada").length} leads sem resposta há mais de 48h`,
    detail: "Os casos mais promissores estão entre proposta e negociação.",
  },
  {
    title: "Instagram Ads lidera em conversão",
    detail: "Melhor momento do dia continua sendo entre 9h e 11h.",
  },
  {
    title: "3 contatos prontos para avançar etapa",
    detail: "Vale revisar a lista e mover manualmente após resposta.",
  },
];

const nextTasks = crmLeads
  .filter((lead) => lead.taskStatus !== "Próxima")
  .slice(0, 3)
  .map((lead) => ({
    time: lead.taskDue.includes(", ") ? lead.taskDue.split(", ")[1] : lead.taskDue,
    label: lead.name,
    detail: lead.taskSummary,
  }));

function StageBadge({ stage }: { stage: string }) {
  const tone =
    stage === "Proposta enviada"
      ? "bg-amber-100 text-amber-800"
      : stage === "Negociação"
        ? "bg-sky-100 text-sky-800"
        : stage === "Em contato"
          ? "bg-emerald-100 text-emerald-800"
          : "bg-slate-100 text-slate-700";

  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ${tone}`}>{stage}</span>;
}

function TemperatureBadge({ value }: { value: string }) {
  const tone =
    value === "Muito quente"
      ? "bg-rose-100 text-rose-700"
      : value === "Quente"
        ? "bg-amber-100 text-amber-700"
        : "bg-slate-100 text-slate-700";

  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ${tone}`}>{value}</span>;
}

export default function LeadsPage() {
  return (
    <div className="space-y-5 sm:space-y-6">
      <section className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
        <Card className="overflow-hidden border-emerald-200 bg-[linear-gradient(135deg,#0f172a_0%,#16253a_48%,#0f766e_100%)] text-white shadow-[0_36px_90px_-50px_rgba(15,23,42,0.8)]">
          <CardContent className="relative p-5 sm:p-6">
            <div className="pointer-events-none absolute -right-16 top-0 size-40 rounded-full bg-emerald-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -left-8 bottom-0 size-32 rounded-full bg-cyan-400/15 blur-3xl" />

            <div className="relative flex flex-col gap-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
                  CRM de leads
                </span>
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-100">
                  Primeira versão funcional
                </span>
              </div>

              <div className="max-w-2xl">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  A base comercial agora já mostra quem está quente, quem está parado e qual é o próximo movimento.
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-200 sm:text-base">
                  Esta tela nasceu para consulta rápida no celular, com visão suficiente para agir sem abrir muitas camadas.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">Foco agora</p>
                  <p className="mt-2 text-lg font-semibold">19 leads quentes</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">Risco</p>
                  <p className="mt-2 text-lg font-semibold">6 sem resposta</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">Próxima etapa</p>
                  <p className="mt-2 text-lg font-semibold">Follow-ups e pipeline</p>
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
                  Leitura rápida
                </p>
                <CardTitle className="mt-2">Prioridades do CRM</CardTitle>
              </div>
              <div className="flex size-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                <Sparkles className="size-5" />
              </div>
            </div>
            <CardDescription>
              Resumo enxuto para orientar a operação sem depender de filtros complexos.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {priorityList.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-emerald-100 bg-emerald-50/70 px-4 py-4"
              >
                <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
              </div>
            ))}

            <div className="rounded-[1.5rem] border border-slate-200/80 bg-slate-950 px-4 py-4 text-white">
              <div className="flex items-center gap-2 text-emerald-300">
                <MessageSquareText className="size-4" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                  Insight de ação
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-200">
                Se você retomar primeiro os leads em proposta enviada, a chance de mover o funil hoje é maior do que abrir novas conversas.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-3 sm:grid-cols-3">
        {leadStats.map((stat) => (
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
                    Base ativa
                  </p>
                  <CardTitle className="mt-2">Seus leads com contexto acionável</CardTitle>
                </div>
                <Button className="w-full sm:w-auto">
                  <CirclePlus className="size-4.5" />
                  Novo lead
                </Button>
              </div>

              <div className="flex flex-col gap-3 lg:flex-row">
                <div className="flex items-center gap-3 rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 px-4 py-3 text-sm text-slate-500 lg:flex-1">
                  <Search className="size-4 text-slate-400" />
                  Buscar por nome, empresa ou origem
                </div>
                <Button variant="outline" className="justify-center rounded-[1.5rem]">
                  <Filter className="size-4.5" />
                  Filtros
                </Button>
              </div>

              <div className="flex flex-wrap gap-2">
                {crmFilterPills.map((filter) => {
                  const active = filter === "Todos";

                  return (
                    <button
                      key={filter}
                      type="button"
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
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {crmLeads.slice(0, 4).map((lead) => (
              <div
                key={lead.name}
                className="rounded-[1.75rem] border border-slate-200/80 bg-slate-50/75 p-4 sm:p-5"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-lg font-semibold text-slate-900">{lead.name}</p>
                      <p className="mt-1 text-sm text-slate-500">{lead.company}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <StageBadge stage={lead.stage} />
                      <TemperatureBadge value={lead.temperature} />
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                    <div className="rounded-2xl bg-white px-4 py-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                        Origem
                      </p>
                      <p className="mt-2 text-sm font-semibold text-slate-900">{lead.source}</p>
                    </div>
                    <div className="rounded-2xl bg-white px-4 py-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                        Responsável
                      </p>
                      <p className="mt-2 text-sm font-semibold text-slate-900">{lead.owner}</p>
                    </div>
                    <div className="rounded-2xl bg-white px-4 py-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                        Último contato
                      </p>
                      <p className="mt-2 text-sm font-semibold text-slate-900">{lead.lastContact}</p>
                    </div>
                    <div className="rounded-2xl bg-white px-4 py-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                        Próxima ação
                      </p>
                      <p className="mt-2 text-sm font-semibold text-emerald-700">{lead.nextAction}</p>
                    </div>
                  </div>

                  <p className="text-sm leading-6 text-slate-600">{lead.summary}</p>

                  <div className="flex flex-wrap gap-2">
                    {lead.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button className="flex-1 justify-center rounded-[1.25rem]">
                      <MessageSquareText className="size-4.5" />
                      Abrir lead
                    </Button>
                    <Button variant="secondary" className="flex-1 justify-center rounded-[1.25rem]">
                      <PhoneCall className="size-4.5" />
                      Registrar contato
                    </Button>
                    <Button variant="outline" className="justify-center rounded-[1.25rem] sm:w-auto">
                      <ArrowUpRight className="size-4.5" />
                    </Button>
                  </div>
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
                    Agenda comercial
                  </p>
                  <CardTitle className="mt-2">Próximos follow-ups</CardTitle>
                </div>
                <div className="flex size-11 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                  <CalendarClock className="size-5" />
                </div>
              </div>
              <CardDescription>
                A rotina do dia ao lado do CRM para reduzir ida e volta entre telas.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {nextTasks.map((task) => (
                <div
                  key={`${task.time}-${task.label}`}
                  className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
                      {task.time}
                    </p>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600">
                      Hoje
                    </span>
                  </div>
                  <p className="mt-3 font-semibold text-slate-900">{task.label}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{task.detail}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-slate-200/80 bg-slate-950 text-white">
            <CardHeader>
              <div className="flex size-12 items-center justify-center rounded-2xl bg-white/10 text-emerald-300">
                <CheckCheck className="size-5" />
              </div>
              <CardTitle className="text-white">O que esta tela já resolve</CardTitle>
              <CardDescription className="text-slate-300">
                Ela já organiza a consulta do CRM e prepara o terreno para dados reais, filtros de verdade e navegação por lead.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-6 text-slate-300">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-4">
                Listagem com prioridade visual e leitura rápida para celular.
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-4">
                Espaço claro para busca, filtros, status, origem, resumo e próxima ação.
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-4">
                Estrutura pronta para conectar depois com banco, detalhe do lead e follow-ups.
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
