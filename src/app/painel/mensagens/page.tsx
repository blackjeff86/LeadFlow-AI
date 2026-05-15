import {
  Bot,
  CheckCheck,
  CirclePlus,
  Clock3,
  Copy,
  MessageSquareText,
  MessagesSquare,
  RefreshCcw,
  Send,
  Sparkles,
  Star,
  WandSparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { crmLeads, messageTemplateLibrary } from "@/lib/mock-crm-data";

const messageStats = [
  {
    label: "Sugestões prontas",
    value: String(crmLeads.filter((lead) => lead.messageDraft).length),
    detail: `${crmLeads.filter((lead) => lead.taskStatus === "Atrasada").length} de follow-up urgente`,
    icon: Bot,
    tone: "bg-emerald-100 text-emerald-700",
  },
  {
    label: "Copiadas hoje",
    value: "11",
    detail: "4 já viraram resposta",
    icon: Copy,
    tone: "bg-sky-100 text-sky-700",
  },
  {
    label: "Taxa de uso",
    value: "64%",
    detail: "das mensagens sugeridas hoje",
    icon: CheckCheck,
    tone: "bg-amber-100 text-amber-700",
  },
];

const inboxCards = [
  {
    title: "Resposta rápida",
    value: `${crmLeads.filter((lead) => lead.taskStatus === "Hoje").length} leads aguardando texto curto`,
    detail: "Ideal para conversas que pedem clareza e velocidade.",
  },
  {
    title: "Recuperação",
    value: `${crmLeads.filter((lead) => lead.taskType === "Follow-up" || lead.taskType === "Reengajamento").length} leads sem resposta`,
    detail: "IA já separou mensagens de reengajamento.",
  },
  {
    title: "Fechamento",
    value: `${crmLeads.filter((lead) => lead.stage === "Proposta enviada" || lead.stage === "Negociação").length} oportunidades quentes`,
    detail: "Foco em CTA direto e urgência saudável.",
  },
];

const messageQueue = crmLeads.slice(0, 3).map((lead) => ({
  lead: lead.name,
  stage: lead.stage,
  purpose: lead.messagePurpose,
  temperature: lead.temperature,
  time: lead.messageIdealTime,
  context: lead.messageContext,
  draft: lead.messageDraft,
}));

const aiInsights = [
  "Mensagens curtas com CTA direto estão performando melhor nos leads quentes.",
  "Recuperações funcionam melhor quando a IA assume tom leve e útil, sem cobrança seca.",
  "As melhores oportunidades de uso agora estão em proposta enviada e negociação.",
];

function ToneBadge({ value }: { value: string }) {
  const tone =
    value === "Muito quente"
      ? "bg-rose-100 text-rose-700"
      : value === "Quente"
        ? "bg-amber-100 text-amber-700"
        : "bg-slate-100 text-slate-700";

  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ${tone}`}>{value}</span>;
}

function StageBadge({ value }: { value: string }) {
  const tone =
    value === "Proposta enviada"
      ? "bg-amber-100 text-amber-800"
      : value === "Negociação"
        ? "bg-sky-100 text-sky-800"
        : "bg-emerald-100 text-emerald-800";

  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ${tone}`}>{value}</span>;
}

export default function MensagensPage() {
  return (
    <div className="space-y-5 sm:space-y-6">
      <section className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
        <Card className="overflow-hidden border-fuchsia-200 bg-[linear-gradient(135deg,#0f172a_0%,#201a38_48%,#0f766e_100%)] text-white shadow-[0_36px_90px_-50px_rgba(15,23,42,0.8)]">
          <CardContent className="relative p-5 sm:p-6">
            <div className="pointer-events-none absolute -right-16 top-0 size-40 rounded-full bg-fuchsia-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -left-8 bottom-0 size-32 rounded-full bg-emerald-400/15 blur-3xl" />

            <div className="relative flex flex-col gap-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-fuchsia-100">
                  Assistente de mensagens
                </span>
                <span className="rounded-full bg-fuchsia-400/15 px-3 py-1 text-xs font-semibold text-fuchsia-50">
                  Revisar, copiar e enviar
                </span>
              </div>

              <div className="max-w-2xl">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  A IA agora já mostra o contexto do lead e entrega uma mensagem pronta para acelerar a resposta.
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-200 sm:text-base">
                  O fluxo foi pensado para o uso comercial real: entender a situação, revisar o texto e partir para ação sem travar a rotina.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {inboxCards.map((card) => (
                  <div
                    key={card.title}
                    className="rounded-[1.5rem] border border-white/10 bg-white/10 p-4 backdrop-blur-sm"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-fuchsia-100">{card.title}</p>
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
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-700">
                  Leitura da IA
                </p>
                <CardTitle className="mt-2">Onde usar agora</CardTitle>
              </div>
              <div className="flex size-11 items-center justify-center rounded-2xl bg-fuchsia-100 text-fuchsia-700">
                <Sparkles className="size-5" />
              </div>
            </div>
            <CardDescription>
              A IA destaca em quais tipos de conversa vale mais a pena intervir primeiro.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {aiInsights.map((insight) => (
              <div
                key={insight}
                className="rounded-[1.5rem] border border-fuchsia-100 bg-fuchsia-50/70 px-4 py-4 text-sm leading-6 text-slate-700"
              >
                {insight}
              </div>
            ))}

            <div className="rounded-[1.5rem] border border-slate-200/80 bg-slate-950 px-4 py-4 text-white">
              <div className="flex items-center gap-2 text-fuchsia-300">
                <Star className="size-4" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                  Melhor uso imediato
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-200">
                Priorize mensagens para leads com proposta enviada. É onde um bom texto pode virar avanço concreto no mesmo dia.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-3 sm:grid-cols-3">
        {messageStats.map((stat) => (
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
                    Fila de sugestões
                  </p>
                  <CardTitle className="mt-2">Mensagens prontas para revisar</CardTitle>
                </div>
                <Button className="w-full sm:w-auto">
                  <CirclePlus className="size-4.5" />
                  Nova geração
                </Button>
              </div>
              <CardDescription>
                Cada bloco junta contexto, objetivo e rascunho para o vendedor agir sem sair montando mensagem do zero.
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {messageQueue.map((item) => (
              <div
                key={item.lead}
                className="rounded-[1.75rem] border border-slate-200/80 bg-slate-50/75 p-4 sm:p-5"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-lg font-semibold text-slate-900">{item.lead}</p>
                      <p className="mt-1 text-sm text-slate-500">{item.purpose}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <StageBadge value={item.stage} />
                      <ToneBadge value={item.temperature} />
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
                    <div className="rounded-[1.5rem] bg-white px-4 py-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                        Contexto da IA
                      </p>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{item.context}</p>
                    </div>
                    <div className="rounded-[1.5rem] bg-white px-4 py-4 sm:min-w-[170px]">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                        Janela ideal
                      </p>
                      <div className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700">
                        <Clock3 className="size-4" />
                        {item.time}
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[1.5rem] border border-emerald-100 bg-emerald-50/70 px-4 py-4">
                    <div className="flex items-center gap-2 text-emerald-700">
                      <WandSparkles className="size-4" />
                      <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                        Rascunho sugerido
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-700">{item.draft}</p>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button className="flex-1 justify-center rounded-[1.25rem]">
                      <Copy className="size-4.5" />
                      Copiar texto
                    </Button>
                    <Button variant="secondary" className="flex-1 justify-center rounded-[1.25rem]">
                      <RefreshCcw className="size-4.5" />
                      Gerar variação
                    </Button>
                    <Button variant="outline" className="justify-center rounded-[1.25rem] sm:w-auto">
                      <Send className="size-4.5" />
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
                    Biblioteca base
                  </p>
                  <CardTitle className="mt-2">Modelos por objetivo</CardTitle>
                </div>
                <div className="flex size-11 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                  <MessagesSquare className="size-5" />
                </div>
              </div>
              <CardDescription>
                Espaço pensado para evoluir depois para templates, histórico e preferências de tom.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {messageTemplateLibrary.map((template) => (
                <div
                  key={template.title}
                  className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 p-4"
                >
                  <p className="font-semibold text-slate-900">{template.title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{template.detail}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-slate-200/80 bg-slate-950 text-white">
            <CardHeader>
              <div className="flex size-12 items-center justify-center rounded-2xl bg-white/10 text-emerald-300">
                <MessageSquareText className="size-5" />
              </div>
              <CardTitle className="text-white">O que esta tela já prepara</CardTitle>
              <CardDescription className="text-slate-300">
                Ela já dá forma ao coração da proposta do produto: usar IA para destravar resposta, follow-up e reengajamento.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-6 text-slate-300">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-4">
                Fila de mensagens com contexto, estágio, temperatura e rascunho.
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-4">
                Estrutura pronta para depois conectar prompt, histórico do lead e copy real.
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-4">
                Espaço natural para adicionar variantes de tom, copiar, regenerar e registrar uso.
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
