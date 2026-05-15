import Link from "next/link";
import {
  ArrowRight,
  BarChart2,
  Bell,
  Bot,
  Brain,
  CalendarClock,
  Check,
  CircleDashed,
  Clock3,
  FileSpreadsheet,
  FileText,
  Flame,
  History,
  Kanban,
  Link2,
  MessageSquareText,
  PanelsTopLeft,
  Radar,
  RefreshCw,

  Sparkles,
  Star,
  Tag,
  Target,
  Users,
  WalletCards,
  type LucideIcon,
} from "lucide-react";

import { MobileNav } from "@/components/site/mobile-nav";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const problemItems = [
  {
    title: "Follow-ups esquecidos",
    description:
      "Leads somem porque a rotina é corrida e ninguém lembra de retomar a conversa na hora certa.",
    icon: Clock3,
  },
  {
    title: "WhatsApp totalmente manual",
    description:
      "Cada mensagem é escrita do zero, repetindo esforço e deixando o processo lento.",
    icon: MessageSquareText,
  },
  {
    title: "Conversas espalhadas",
    description:
      "Sem organização, fica fácil perder contexto, histórico e oportunidades importantes.",
    icon: CircleDashed,
  },
  {
    title: "Dificuldade para saber quem está quente",
    description:
      "Sem visão clara do pipeline, o vendedor não sabe qual lead merece atenção agora.",
    icon: Flame,
  },
];

const solutionItems = [
  {
    title: "Centralize todos os leads",
    description:
      "Cadastre contatos, estágio de negociação e próximos passos sem depender de planilhas ou memória.",
    icon: Users,
  },
  {
    title: "Crie mensagens com IA comercial",
    description:
      "Gere respostas, abordagens e follow-ups com contexto de venda em poucos segundos.",
    icon: Bot,
  },
  {
    title: "Automatize o follow-up",
    description:
      "Defina lembretes e agendamentos para retomar a conversa na hora certa sem deixar oportunidade esfriar.",
    icon: CalendarClock,
  },
  {
    title: "Priorize quem está quente",
    description:
      "Veja rapidamente quais leads estão avançando e onde concentrar sua energia de venda.",
    icon: Target,
  },
];

const featureCards: {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bg: string;
}[] = [
  {
    title: "CRM simples",
    description:
      "Organize leads, estágios e histórico sem a complexidade de um CRM enterprise.",
    icon: PanelsTopLeft,
    color: "text-emerald-700",
    bg: "bg-emerald-100",
  },
  {
    title: "Pipeline Kanban",
    description:
      "Visualize seu funil de vendas com drag‑and‑drop e priorize o que vai fechar.",
    icon: Kanban,
    color: "text-blue-700",
    bg: "bg-blue-100",
  },
  {
    title: "Mensagens com IA",
    description:
      "Sugestões prontas para iniciar, retomar ou fechar uma negociação mais rápido.",
    icon: Sparkles,
    color: "text-violet-700",
    bg: "bg-violet-100",
  },
  {
    title: "Templates inteligentes",
    description:
      "Biblioteca de scripts de alto impacto para cada etapa do funil de vendas.",
    icon: FileText,
    color: "text-amber-700",
    bg: "bg-amber-100",
  },
  {
    title: "Lembretes de follow-up",
    description:
      "Nunca mais perca o timing de uma oportunidade. Defina quando voltar e a IA te lembra.",
    icon: CalendarClock,
    color: "text-rose-700",
    bg: "bg-rose-100",
  },
  {
    title: "Lead Scoring por IA",
    description:
      "A IA analisa comportamento e conversa para indicar quem está pronto para fechar.",
    icon: Star,
    color: "text-orange-700",
    bg: "bg-orange-100",
  },
  {
    title: "Cadências automáticas",
    description:
      "Crie sequências de contato automáticas para não deixar leads esfriarem.",
    icon: RefreshCw,
    color: "text-teal-700",
    bg: "bg-teal-100",
  },
  {
    title: "Dashboard de vendas",
    description:
      "Métricas claras sobre pipeline, taxa de conversão e tempo de resposta.",
    icon: BarChart2,
    color: "text-indigo-700",
    bg: "bg-indigo-100",
  },
  {
    title: "Histórico de conversas",
    description:
      "Acesse o contexto completo de cada cliente para nunca perder o fio da meada.",
    icon: History,
    color: "text-cyan-700",
    bg: "bg-cyan-100",
  },
  {
    title: "Segmentação por tags",
    description:
      "Organize leads por produto, região, origem e perfil para abordar no momento certo.",
    icon: Tag,
    color: "text-fuchsia-700",
    bg: "bg-fuchsia-100",
  },
  {
    title: "Notificações inteligentes",
    description:
      "Alertas no momento certo: lead respondeu, follow-up vencendo, oportunidade quente.",
    icon: Bell,
    color: "text-yellow-700",
    bg: "bg-yellow-100",
  },
  {
    title: "Análise de sentimento",
    description:
      "A IA detecta o humor e a intenção do lead para orientar sua próxima abordagem.",
    icon: Brain,
    color: "text-pink-700",
    bg: "bg-pink-100",
  },
];

const howItWorksSteps = [
  {
    step: "01",
    title: "Puxe seus leads para um fluxo simples",
    description:
      "Importe de uma planilha ou cadastre manualmente. Cada lead já entra com histórico, status e próximo passo.",
    icon: Users,
  },
  {
    step: "02",
    title: "Deixe a IA acelerar sua resposta",
    description:
      "Com base na conversa e no momento do lead, a IA sugere mensagens de venda e follow-up para você agir mais rápido.",
    icon: Brain,
  },
  {
    step: "03",
    title: "Acompanhe e feche com consistência",
    description:
      "Follow-up no timing certo, pipeline atualizado e visão clara do que precisa da sua atenção agora.",
    icon: Target,
  },
];

const benefitCards = [
  {
    number: "01",
    title: "Menos conversa perdida, mais prioridade",
    description:
      "Centralize leads, histórico e próximos passos em um só lugar para saber quem merece atenção antes de esfriar.",
  },
  {
    number: "02",
    title: "Follow-up sem depender da memória",
    description:
      "Agende lembretes, mensagens e campanhas sem depender da memória, de post-it ou de planilhas soltas.",
  },
  {
    number: "03",
    title: "IA que ajuda a vender, não só escrever",
    description:
      "Crie mensagens com contexto comercial para iniciar conversas, retomar negociações e acelerar decisões com mais qualidade.",
  },
];

const audienceCards = [
  {
    title: "Vendedores individuais",
    description: "Para quem recebe lead o dia inteiro e precisa manter a operação rodando sem virar refém do caos.",
  },
  {
    title: "Corretores e vendedores de carros",
    description: "Para rotinas com múltiplas conversas, resposta rápida e follow-up que faz diferença no fechamento.",
  },
  {
    title: "Closers e representantes",
    description: "Para quem precisa parecer profissional, responder com contexto e não perder oportunidade por atraso.",
  },
  {
    title: "Pequenos times comerciais",
    description: "Para equipes enxutas que querem mais organização e velocidade sem contratar um CRM pesado.",
  },
];

const comparisonRows = [
  {
    label: "Organizar leads sem planilha",
    manual: "Improvisado e fácil de perder",
    crm: "Possível, mas burocrático",
    leadflow: "Simples e pronto para o dia a dia",
  },
  {
    label: "Follow-up no tempo certo",
    manual: "Depende da memória",
    crm: "Exige configuração e disciplina",
    leadflow: "Lembretes e agendamentos na rotina",
  },
  {
    label: "Mensagens de vendas com contexto",
    manual: "Tudo do zero",
    crm: "Normalmente fora do fluxo",
    leadflow: "IA comercial dentro da operação",
  },
  {
    label: "Velocidade para usar no celular",
    manual: "Rápido, mas desorganizado",
    crm: "Pesado para a rotina mobile",
    leadflow: "Mobile-first e focado em ação",
  },
];

const integrationCards: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Google Agenda",
    description: "Para lembrar retornos, reuniões e próximos contatos sem perder timing.",
    icon: CalendarClock,
  },
  {
    title: "Planilhas e CSV",
    description: "Importe leads rapidamente e organize sua operação sem fricção.",
    icon: FileSpreadsheet,
  },
  {
    title: "Meta Ads e origem do lead",
    description: "Entenda de onde vieram seus contatos e quais campanhas geram conversas.",
    icon: Radar,
  },
  {
    title: "Pagamentos e links",
    description: "Envie links de pagamento e encurte o caminho entre conversa e fechamento.",
    icon: WalletCards,
  },
  {
    title: "Webhooks, Zapier e Make",
    description: "Conecte o LeadFlow AI ao seu fluxo atual sem precisar montar algo complexo.",
    icon: Link2,
  },
];

const statsData = [
  { value: "7 dias", label: "de teste grátis" },
  { value: "100%", label: "mobile-first" },
  { value: "CRM + IA", label: "no mesmo fluxo comercial" },
  { value: "Sem", label: "CRM pesado para aprender" },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "R$49,90",
    period: "/mês",
    description: "Para vendedores que querem parar de perder lead no meio da correria.",
    features: [
      "CRM simples para leads",
      "Gestão de leads e pipeline visual",
      "Agendamento de mensagens",
      "Campanhas de WhatsApp",
      "IA para mensagens de vendas",
      "Dashboard básico",
    ],
    highlighted: false,
    cta: "Começar grátis",
  },
  {
    name: "Pro",
    price: "R$79,90",
    period: "/mês",
    description: "Para quem quer mais volume, mais consistência e follow-up mais afiado.",
    features: [
      "Tudo do Starter",
      "Mais volume de campanhas e agendamentos",
      "Mais uso de IA comercial",
      "Cadências automáticas",
      "Lead Scoring automático",
      "Dashboard mais completo",
      "Suporte prioritário",
    ],
    highlighted: true,
    cta: "Começar grátis",
  },
];

const faqs = [
  {
    question: "O LeadFlow AI é para equipes grandes?",
    answer:
      "Não. O produto foi pensado para vendedores individuais e pequenos times que precisam de velocidade e simplicidade. Sem hierarquia, sem complexidade de CRM enterprise.",
  },
  {
    question: "Preciso configurar algo complexo para começar?",
    answer:
      "Não. A proposta é justamente reduzir fricção: você organiza leads, acompanha follow-ups e começa a usar a operação sem entrar em um CRM complicado.",
  },
  {
    question: "Serve para quem vende praticamente tudo pelo WhatsApp?",
    answer:
      "Sim. O produto foi desenhado para vendedores que vivem no WhatsApp e precisam de mais organização, mais velocidade e mais consistência comercial no dia a dia.",
  },
  {
    question: "Como a IA gera as mensagens?",
    answer:
      "A IA usa o contexto do lead — histórico de conversa, estágio no pipeline, tags e notas — para sugerir mensagens personalizadas de abertura, follow-up e fechamento.",
  },
  {
    question: "O que é Lead Scoring?",
    answer:
      "É uma pontuação automática que a IA atribui a cada lead com base no engajamento, tempo de resposta e progresso no pipeline. Assim você sabe exatamente quem está quente e pronto para fechar.",
  },
  {
    question: "Posso cancelar quando quiser?",
    answer:
      "Sim. Não há fidelidade. Você pode cancelar a qualquer momento direto pela plataforma, sem burocracia.",
  },
  {
    question: "Tem período de teste gratuito?",
    answer:
      "Sim. Você começa com 7 dias grátis sem precisar de cartão de crédito. Só continua se fizer sentido para sua operação.",
  },
];

const navItems = [
  { href: "#para-quem", label: "Para quem é" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#recursos", label: "Recursos" },
  { href: "#precos", label: "Preços" },
  { href: "#faq", label: "FAQ" },
];

const sectionClassName = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";
const sectionSpacingClassName = "mt-14 sm:mt-16 lg:mt-20";
const sectionContentSpacingClassName = "mt-8 sm:mt-10";

const heroMessages = [
  {
    title: "Novo lead",
    text: "Oi! Vi seu anúncio e quero saber se ainda consigo fechar hoje.",
    time: "09:14",
    side: "left",
    position: "top-0 left-0",
  },
  {
    title: "Resposta com IA",
    text: "Consegue sim. Posso te mandar agora as melhores opções para decidir rápido.",
    time: "09:15",
    side: "right",
    position: "top-[4.8rem] right-0",
  },
  {
    title: "Lead quente",
    text: "Perfeito. Se tiver condição especial, já consigo avançar agora.",
    time: "09:16",
    side: "left",
    position: "top-[9.4rem] left-0",
  },
  {
    title: "Follow-up agendado",
    text: "Fechado. Se você não responder depois, eu te lembro às 18:30.",
    time: "09:17",
    side: "right",
    position: "top-[13.3rem] right-0",
  },
];

const heroFloatingPills = [
  {
    label: "Automação",
    icon: Bot,
    className: "-left-3 top-14 text-emerald-700 lg:-left-6",
    iconClassName: "bg-emerald-100 text-emerald-700",
  },
  {
    label: "Mensagens com IA",
    icon: Sparkles,
    className: "-right-3 top-28 text-lime-600 lg:-right-7",
    iconClassName: "bg-lime-100 text-lime-600",
  },
  {
    label: "CRM simples",
    icon: PanelsTopLeft,
    className: "-left-4 bottom-24 text-sky-600 lg:-left-8",
    iconClassName: "bg-sky-100 text-sky-600",
  },
  {
    label: "Follow-up inteligente",
    icon: CalendarClock,
    className: "-right-2 bottom-10 text-fuchsia-600 lg:-right-4",
    iconClassName: "bg-fuchsia-100 text-fuchsia-600",
  },
];

const heroFloatingPillsMobile = [
  {
    label: "Automação",
    icon: Bot,
    className: "-left-9 top-14 text-emerald-700",
    iconClassName: "bg-emerald-100 text-emerald-700",
  },
  {
    label: "Mensagens com IA",
    icon: Sparkles,
    className: "-right-12 top-24 text-lime-600",
    iconClassName: "bg-lime-100 text-lime-600",
  },
  {
    label: "CRM simples",
    icon: PanelsTopLeft,
    className: "-left-10 bottom-[5.5rem] text-sky-600",
    iconClassName: "bg-sky-100 text-sky-600",
  },
  {
    label: "Follow-up inteligente",
    icon: CalendarClock,
    className: "-right-14 bottom-10 text-fuchsia-600",
    iconClassName: "bg-fuchsia-100 text-fuchsia-600",
  },
];

const heroMobileMessages = [
  {
    title: "Novo lead",
    text: "Oi! Vi seu anúncio e quero saber se consigo fechar hoje.",
    time: "09:14",
    side: "left",
    position: "top-0 left-0",
    width: "w-[76%]",
  },
  {
    title: "Resposta com IA",
    text: "Consegue sim. Posso te mandar as melhores opções para decidir rápido.",
    time: "09:15",
    side: "right",
    position: "bottom-0 right-0",
    width: "w-[72%]",
  },
];

function HeroPhonePreview() {
  return (
    <>
      <div className="relative mx-auto flex w-full max-w-[320px] items-center justify-center py-2 sm:hidden">
        <div className="pointer-events-none absolute inset-x-4 top-8 h-36 rounded-full bg-emerald-300/25 blur-3xl" />
        <div className="pointer-events-none absolute inset-x-10 bottom-6 h-28 rounded-full bg-cyan-200/25 blur-3xl" />

        {heroFloatingPillsMobile.map((pill, index) => (
          <div
            key={pill.label}
            className={`hero-floating-chip absolute z-20 flex items-center gap-2 rounded-full border border-white/70 bg-white/92 px-3 py-2 text-[11px] font-semibold shadow-[0_24px_60px_-30px_rgba(15,23,42,0.4)] backdrop-blur-xl ${pill.className}`}
            style={{ animationDelay: `${index * 0.8}s` }}
          >
            <span className={`flex size-7 items-center justify-center rounded-full ${pill.iconClassName}`}>
              <pill.icon className="size-3.5" />
            </span>
            {pill.label}
          </div>
        ))}

        <div className="relative z-10 w-[182px]">
          <div className="absolute -left-[3px] top-20 h-12 w-[3px] rounded-r-full bg-slate-900/80" />
          <div className="absolute -left-[3px] top-[8.8rem] h-8 w-[3px] rounded-r-full bg-slate-900/80" />
          <div className="absolute -right-[3px] top-28 h-16 w-[3px] rounded-l-full bg-slate-900/80" />

          <div className="relative rounded-[2.45rem] bg-[#07090c] p-[6px] shadow-[0_45px_120px_-45px_rgba(15,23,42,0.85)] ring-1 ring-slate-950/10">
            <div className="absolute left-1/2 top-2.5 z-30 h-[1.45rem] w-[4.8rem] -translate-x-1/2 rounded-full bg-black shadow-[inset_0_1px_2px_rgba(255,255,255,0.08)]" />
            <div className="absolute left-1/2 top-[0.9rem] z-40 h-2 w-2 -translate-x-1/2 rounded-full bg-slate-950 ring-[3px] ring-black">
              <div className="h-full w-full rounded-full bg-emerald-400/35" />
            </div>

            <div className="relative aspect-[390/820] overflow-hidden rounded-[2.1rem] border border-white/10 bg-[linear-gradient(180deg,#f9fffd_0%,#eef8f4_55%,#f8fbff_100%)]">
              <div className="hero-screen-shine pointer-events-none absolute inset-y-0 -left-1/3 w-1/2 rotate-12 bg-white/35 blur-2xl" />

              <div className="absolute inset-x-0 top-0 px-3.5 pb-2 pt-[2.4rem]">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="flex size-7 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-[10px] font-semibold text-white shadow-lg shadow-emerald-500/30">
                      LF
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-slate-900">LeadFlow AI</p>
                      <p className="text-[10px] text-emerald-700">3 mensagens novas</p>
                    </div>
                  </div>
                  <div className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-emerald-700">
                    Online
                  </div>
                </div>
              </div>

              <div className="absolute inset-x-3.5 top-[5.3rem] rounded-[1.25rem] border border-white/70 bg-white/85 p-2.5 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.25)]">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                      Pipeline ao vivo
                    </p>
                    <p className="mt-1 text-[12px] font-semibold text-slate-900">
                      8 leads quentes hoje
                    </p>
                  </div>
                  <div className="rounded-full bg-emerald-100 px-2 py-1 text-[10px] font-semibold text-emerald-700">
                    +23%
                  </div>
                </div>
              </div>

              <div className="absolute inset-x-3.5 top-[10rem] h-[7rem]">
                {heroMobileMessages.map((message, index) => (
                  <div
                    key={message.title}
                    className={`hero-chat-message absolute ${message.width} rounded-[1.05rem] border px-2.5 py-2 shadow-[0_24px_60px_-35px_rgba(15,23,42,0.4)] ${message.position} ${
                      message.side === "right"
                        ? "border-emerald-400/30 bg-emerald-500 text-white"
                        : "border-white/80 bg-white/92 text-slate-900"
                    }`}
                    style={{ animationDelay: `${index * 1.15}s` }}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <p
                        className={`text-[8px] font-semibold uppercase tracking-[0.14em] ${
                          message.side === "right" ? "text-emerald-50/90" : "text-slate-400"
                        }`}
                      >
                        {message.title}
                      </p>
                      <span
                        className={`text-[8px] ${
                          message.side === "right" ? "text-emerald-50/80" : "text-slate-400"
                        }`}
                      >
                        {message.time}
                      </span>
                    </div>
                    <p
                      className={`mt-1 text-[10px] leading-[1rem] ${
                        message.side === "right" ? "text-white" : "text-slate-600"
                      }`}
                    >
                      {message.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="absolute inset-x-3.5 bottom-3 flex items-center justify-between rounded-[1rem] border border-white/8 bg-slate-950 px-3 py-2 text-white shadow-[0_20px_50px_-28px_rgba(15,23,42,0.55)]">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-emerald-300">
                    IA acompanhando
                  </p>
                  <p className="mt-0.5 text-[9px] leading-4 text-slate-200">
                    Nova mensagem chegando na conversa
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  {[0, 1, 2].map((dot) => (
                    <span
                      key={dot}
                      className="hero-typing-dot size-1.5 rounded-full bg-emerald-300"
                      style={{ animationDelay: `${dot * 0.16}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto hidden w-full max-w-[404px] items-center justify-center py-5 sm:flex">
        <div className="pointer-events-none absolute inset-x-10 top-10 h-52 rounded-full bg-emerald-300/25 blur-3xl" />
        <div className="pointer-events-none absolute inset-x-20 bottom-6 h-40 rounded-full bg-cyan-200/25 blur-3xl" />

        {heroFloatingPills.map((pill, index) => (
          <div
            key={pill.label}
            className={`hero-floating-chip absolute z-20 flex items-center gap-3 rounded-full border border-white/70 bg-white/90 px-4 py-3 text-sm font-semibold shadow-[0_24px_60px_-30px_rgba(15,23,42,0.4)] backdrop-blur-xl ${pill.className}`}
            style={{ animationDelay: `${index * 0.8}s` }}
          >
            <span className={`flex size-9 items-center justify-center rounded-full ${pill.iconClassName}`}>
              <pill.icon className="size-4.5" />
            </span>
            {pill.label}
          </div>
        ))}

        <div className="relative z-10 w-[296px] lg:w-[308px]">
          <div className="absolute -left-[3px] top-24 h-14 w-[3px] rounded-r-full bg-slate-900/80" />
          <div className="absolute -left-[3px] top-[10.5rem] h-9 w-[3px] rounded-r-full bg-slate-900/80" />
          <div className="absolute -right-[3px] top-32 h-20 w-[3px] rounded-l-full bg-slate-900/80" />

          <div className="relative rounded-[3.15rem] bg-[#07090c] p-[8px] shadow-[0_45px_120px_-45px_rgba(15,23,42,0.85)] ring-1 ring-slate-950/10">
            <div className="absolute left-1/2 top-3 z-30 h-[1.875rem] w-[6.5rem] -translate-x-1/2 rounded-full bg-black shadow-[inset_0_1px_2px_rgba(255,255,255,0.08)]" />
            <div className="absolute left-1/2 top-[1.05rem] z-40 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-slate-950 ring-[3px] ring-black">
              <div className="h-full w-full rounded-full bg-emerald-400/35" />
            </div>

            <div className="relative overflow-hidden rounded-[2.75rem] border border-white/10 bg-[linear-gradient(180deg,#f9fffd_0%,#eef8f4_55%,#f8fbff_100%)]">
              <div className="hero-screen-shine pointer-events-none absolute inset-y-0 -left-1/3 w-1/2 rotate-12 bg-white/35 blur-2xl" />

              <div className="flex items-center justify-between px-[1.125rem] pb-2.5 pt-[3rem]">
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-xs font-semibold text-white shadow-lg shadow-emerald-500/30">
                    LF
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-slate-900">LeadFlow AI</p>
                    <p className="text-xs text-emerald-700">3 mensagens novas agora</p>
                  </div>
                </div>
                <div className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700">
                  Online
                </div>
              </div>

              <div className="px-4 pb-3.5">
                <div className="rounded-[1.55rem] border border-white/70 bg-white/80 p-3 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.25)]">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                        Pipeline ao vivo
                      </p>
                      <p className="mt-1 text-[14px] font-semibold text-slate-900">
                        8 leads quentes hoje
                      </p>
                    </div>
                    <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                      +23%
                    </div>
                  </div>
                </div>

                <div className="relative mt-3 h-[16.5rem]">
                  {heroMessages.map((message, index) => (
                    <div
                      key={message.title}
                      className={`hero-chat-message absolute w-[82%] rounded-[1.5rem] border px-3.5 py-2.5 shadow-[0_24px_60px_-35px_rgba(15,23,42,0.4)] ${message.position} ${
                        message.side === "right"
                          ? "border-emerald-400/30 bg-emerald-500 text-white"
                          : "border-white/80 bg-white/92 text-slate-900"
                      }`}
                      style={{ animationDelay: `${index * 1.15}s` }}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <p
                          className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${
                            message.side === "right" ? "text-emerald-50/90" : "text-slate-400"
                          }`}
                        >
                          {message.title}
                        </p>
                        <span
                          className={`text-[11px] ${
                            message.side === "right" ? "text-emerald-50/80" : "text-slate-400"
                          }`}
                        >
                          {message.time}
                        </span>
                      </div>
                      <p
                        className={`mt-1.5 text-[12px] leading-5 ${
                          message.side === "right" ? "text-white" : "text-slate-600"
                        }`}
                      >
                        {message.text}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-[1.25rem] border border-white/70 bg-white/82 p-3 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.25)]">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                          Follow-up
                        </p>
                        <p className="mt-2 text-xl font-semibold leading-none text-slate-900">
                          14
                        </p>
                      </div>
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                        <Clock3 className="size-4" />
                      </span>
                    </div>
                    <p className="mt-2 text-[11px] leading-4 text-slate-500">
                      agendados para hoje
                    </p>
                  </div>
                  <div className="rounded-[1.25rem] border border-white/70 bg-white/82 p-3 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.25)]">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                          Oportunidades
                        </p>
                        <p className="mt-2 text-xl font-semibold leading-none text-slate-900">
                          12
                        </p>
                      </div>
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                        <Target className="size-4" />
                      </span>
                    </div>
                    <p className="mt-2 text-[11px] leading-4 text-slate-500">
                      leads em negociação
                    </p>
                  </div>
                </div>

                <div className="mt-2 flex items-center justify-between rounded-[1.3rem] bg-slate-950 px-4 py-2 text-white shadow-[0_20px_50px_-28px_rgba(15,23,42,0.55)]">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                      IA acompanhando
                    </p>
                    <p className="mt-0.5 text-[12px] text-slate-200">
                      Nova mensagem chegando na conversa
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {[0, 1, 2].map((dot) => (
                      <span
                        key={dot}
                        className="hero-typing-dot size-2 rounded-full bg-emerald-300"
                        style={{ animationDelay: `${dot * 0.16}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.18),transparent_45%)]" />

      <header className="sticky top-0 z-40 border-b border-white/60 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="#hero" className="text-base font-semibold tracking-tight text-slate-900">
            LeadFlow AI
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button asChild variant="ghost">
              <Link href="/painel">Entrar</Link>
            </Button>
            <Button asChild>
              <Link href="/login">Testar 7 dias grátis</Link>
            </Button>
          </div>

          <MobileNav />
        </div>
      </header>

      {/* Hero */}
      <section
        id="hero"
        className="mx-auto max-w-6xl px-4 pb-6 pt-12 sm:px-6 sm:pb-8 sm:pt-16 lg:px-8 lg:pb-10 lg:pt-20"
      >
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-emerald-100 bg-white/80 px-3 py-2 text-xs font-semibold text-emerald-700 shadow-sm">
              <span className="rounded-full bg-emerald-500 px-2 py-1 text-[11px] uppercase tracking-[0.2em] text-white">
                IA comercial
              </span>
              Feito para vendedores que vivem no WhatsApp
            </div>

            <h1 className="mt-6 max-w-2xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl sm:leading-[1.02]">
              Pare de perder vendas no WhatsApp por falta de follow-up
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              O LeadFlow AI une CRM simples, follow-up, campanhas e IA comercial em uma
              rotina mobile-first para você responder mais rápido, organizar seus leads e
              vender com mais consistência sem CRM complicado.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 rounded-2xl">
                <Link href="/login">
                  Testar 7 dias grátis
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="h-12 rounded-2xl">
                <Link href="#precos">Ver planos</Link>
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "CRM simples",
                "Follow-up automático",
                "Mensagens com IA",
                "Campanhas no WhatsApp",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-white/80 px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                "Pagamento por cartão e Pix",
                "Cancele quando quiser",
                "Suporte em português",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-2xl border border-white/70 bg-white/80 px-4 py-3 text-sm font-medium text-slate-700 shadow-sm"
                >
                  <Check className="size-4 shrink-0 text-emerald-600" />
                  {item}
                </div>
              ))}
            </div>

          </div>

          <HeroPhonePreview />
        </div>
      </section>

      {/* Stats banner */}
      <section className={`${sectionClassName} mt-10 sm:mt-12`}>
        <div className="rounded-2xl border border-white/70 bg-white/70 px-5 py-5 shadow-sm backdrop-blur-sm sm:px-8">
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
            {statsData.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-xl font-semibold text-slate-900 sm:text-2xl">{stat.value}</p>
                <p className="mt-1 text-xs text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="para-quem" className={`${sectionClassName} ${sectionSpacingClassName}`}>
        <SectionHeading
          eyebrow="Para quem é"
          title="Feito para quem vende no celular e não quer CRM pesado."
          description="Se sua rotina comercial acontece no WhatsApp e você sente que perde oportunidade no meio da correria, esta página é para você."
          centered
        />

        <div className={`${sectionContentSpacingClassName} grid gap-4 md:grid-cols-2 xl:grid-cols-4`}>
          {audienceCards.map((item) => (
            <Card
              key={item.title}
              className="h-full border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,248,247,0.96))]"
            >
              <CardHeader className="gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white">
                  <Users className="size-5" />
                </div>
                <div>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription className="mt-2">{item.description}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Problema */}
      <section className={`${sectionClassName} ${sectionSpacingClassName}`}>
        <SectionHeading
          eyebrow="Problema"
          title="O problema não é falta de lead. É falta de acompanhamento."
          description="Muita venda se perde porque o WhatsApp vira uma operação manual, bagunçada e sem prioridade clara."
        />

        <div className={`${sectionContentSpacingClassName} grid gap-4 sm:grid-cols-2 xl:grid-cols-4`}>
          {problemItems.map((item) => (
            <Card key={item.title} className="h-full">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-500">
                  <item.icon className="size-5" />
                </div>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Solução */}
      <section className={`${sectionClassName} ${sectionSpacingClassName}`}>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12">
          <SectionHeading
            eyebrow="Solução"
            title="Uma operação comercial simples, rápida e feita para vender."
            description="O LeadFlow AI centraliza o que realmente importa no dia a dia: organização, mensagens com IA, follow-up, campanhas e visão das oportunidades."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {solutionItems.map((item) => (
              <Card key={item.title} className="h-full">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                    <item.icon className="size-5" />
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionClassName} ${sectionSpacingClassName}`}>
        <div className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-slate-950 text-white shadow-[0_35px_120px_-50px_rgba(15,23,42,0.6)]">
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:p-10">
            <div>
              <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
                Mecanismo único
              </span>
              <h2 className="mt-4 max-w-lg text-3xl font-semibold tracking-tight sm:text-4xl">
                Não é só WhatsApp. Não é só CRM. Não é só IA.
              </h2>
              <p className="mt-4 max-w-lg text-base leading-7 text-slate-300 sm:text-lg">
                O LeadFlow AI junta WhatsApp, CRM simples, follow-up e IA comercial na mesma
                rotina para você vender mais sem precisar montar uma operação pesada.
              </p>
            </div>

            <div className="overflow-x-auto rounded-[1.6rem] border border-white/10 bg-white/5">
              <div className="min-w-[720px]">
                <div className="grid grid-cols-[1.2fr_repeat(3,minmax(0,1fr))] border-b border-white/10 text-sm">
                  <div className="px-4 py-4 font-semibold text-slate-200">O que você precisa no dia a dia</div>
                  <div className="px-4 py-4 text-center font-semibold text-slate-400">WhatsApp manual</div>
                  <div className="px-4 py-4 text-center font-semibold text-slate-400">CRM pesado</div>
                  <div className="px-4 py-4 text-center font-semibold text-emerald-300">LeadFlow AI</div>
                </div>

                {comparisonRows.map((row, index) => (
                  <div
                    key={row.label}
                    className={`grid grid-cols-[1.2fr_repeat(3,minmax(0,1fr))] text-sm ${
                      index !== comparisonRows.length - 1 ? "border-b border-white/10" : ""
                    }`}
                  >
                    <div className="px-4 py-4 font-medium text-white">{row.label}</div>
                    <div className="px-4 py-4 text-center text-slate-400">{row.manual}</div>
                    <div className="px-4 py-4 text-center text-slate-400">{row.crm}</div>
                    <div className="px-4 py-4 text-center text-emerald-200">{row.leadflow}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className={`${sectionClassName} ${sectionSpacingClassName}`}>
        <SectionHeading
          eyebrow="Como funciona"
          title="Do lead ao follow-up em três passos."
          description="Sem curva de aprendizado longa. Em minutos você já tem uma operação comercial mais organizada e mais inteligente."
          centered
        />

        <div className={`${sectionContentSpacingClassName} grid gap-8 sm:grid-cols-3`}>
          {howItWorksSteps.map((step) => (
            <div key={step.step}>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-lg shadow-emerald-500/30">
                <step.icon className="size-6" />
              </div>
              <div className="mt-5">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                  Passo {step.step}
                </span>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recursos */}
      <section id="recursos" className={`${sectionClassName} ${sectionSpacingClassName}`}>
        <SectionHeading
          eyebrow="Recursos"
          title="Tudo o que importa para vender mais no WhatsApp."
          description="Sem cara de CRM complexo. Só as ferramentas certas para manter o pipeline andando e a conversa avançando."
          centered
        />

        <div
          className={`${sectionContentSpacingClassName} grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}
        >
          {featureCards.map((feature) => (
            <Card
              key={feature.title}
              className="h-full transition-transform duration-300 hover:-translate-y-1"
            >
              <CardHeader className="gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${feature.bg} ${feature.color}`}
                >
                  <feature.icon className="size-5" />
                </div>
                <div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription className="mt-2">{feature.description}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefícios e Integrações */}
      <section className={`${sectionClassName} ${sectionSpacingClassName}`}>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-12">
          <div className="lg:sticky lg:top-24">
            <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
              Benefícios e integrações
            </span>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Não é só um CRM bonito. É uma rotina comercial mais leve e mais lucrativa.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              A ideia é dar ao vendedor uma ferramenta prática, com o ritmo do WhatsApp, mas
              com organização, inteligência e integrações que economizam tempo de verdade.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 rounded-2xl">
                <Link href="#cta">Quero testar</Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="h-12 rounded-2xl">
                <Link href="#precos">Ver oferta</Link>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            {benefitCards.map((card, index) => (
              <Card
                key={card.number}
                className="benefit-stack-card overflow-hidden border-emerald-100/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(240,253,248,0.9))]"
                style={{ animationDelay: `${index * 0.9}s` }}
              >
                <div className="grid gap-4 p-6 sm:grid-cols-[72px_1fr] sm:items-start">
                  <div className="text-5xl font-semibold tracking-tight text-emerald-100 sm:text-6xl">
                    {card.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                      {card.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div
          className={`${sectionContentSpacingClassName} rounded-[2rem] border border-white/70 bg-white/70 p-5 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.28)] backdrop-blur-sm sm:p-6`}
        >
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-slate-700">
              Integrações pensadas para vender
            </span>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              O que o vendedor vai querer conectado no dia a dia.
            </h3>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Integracoes pensadas para reduzir atrito na rotina comercial, conectar as
              ferramentas certas e ajudar o vendedor a acompanhar cada oportunidade com mais
              contexto e velocidade.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {integrationCards.map((item) => (
              <Card
                key={item.title}
                className="h-full border-slate-200/80 bg-white/95 transition-transform duration-300 hover:-translate-y-1"
              >
                <CardHeader className="gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                    <item.icon className="size-5" />
                  </div>
                  <div>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription className="mt-2">{item.description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Preços */}
      <section id="precos" className={`${sectionClassName} ${sectionSpacingClassName}`}>
        <SectionHeading
          eyebrow="Preços"
          title="Planos simples para começar rápido."
          description="7 dias grátis em qualquer plano. Pagamento simples por cartão, Pix e novos meios conforme a operação evoluir."
          centered
        />

        <div className="mx-auto mt-6 max-w-3xl rounded-[1.6rem] border border-emerald-100 bg-emerald-50/70 px-5 py-4 text-center text-sm font-medium text-emerald-900 shadow-sm">
          Se o LeadFlow AI evitar que um único lead quente esfrie por falta de follow-up, ele
          já tende a se pagar muito rápido.
        </div>

        <div className={`${sectionContentSpacingClassName} grid gap-5 lg:grid-cols-2`}>
          {pricingPlans.map((plan) => (
            <Card
              key={plan.name}
              className={
                plan.highlighted
                  ? "border-emerald-200 bg-slate-950 text-white shadow-[0_30px_80px_-40px_rgba(16,185,129,0.65)]"
                  : ""
              }
            >
              <CardHeader>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <CardTitle className={plan.highlighted ? "text-white" : ""}>
                      {plan.name}
                    </CardTitle>
                    <CardDescription
                      className={plan.highlighted ? "text-slate-300" : "text-slate-600"}
                    >
                      {plan.description}
                    </CardDescription>
                  </div>
                  {plan.highlighted ? (
                    <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                      Mais escolhido
                    </span>
                  ) : null}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-end gap-1">
                  <span
                    className={`text-4xl font-semibold ${plan.highlighted ? "text-white" : "text-slate-900"}`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`mb-1 text-base ${plan.highlighted ? "text-slate-400" : "text-slate-500"}`}
                  >
                    {plan.period}
                  </span>
                </div>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-3 text-sm leading-6 ${plan.highlighted ? "text-slate-200" : "text-slate-700"}`}
                    >
                      <span
                        className={`mt-0.5 flex size-5 items-center justify-center rounded-full ${plan.highlighted ? "bg-emerald-500/20 text-emerald-300" : "bg-emerald-100 text-emerald-700"}`}
                      >
                        <Check className="size-3.5" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  size="lg"
                  variant={plan.highlighted ? "default" : "secondary"}
                  className={`mt-8 h-12 w-full rounded-2xl ${plan.highlighted ? "" : "bg-slate-900 text-white hover:bg-slate-800"}`}
                >
                  <Link href="/login">{plan.cta}</Link>
                </Button>

                <p
                  className={`mt-3 text-center text-xs ${plan.highlighted ? "text-slate-400" : "text-slate-500"}`}
                >
                  7 dias grátis · Cancele quando quiser
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className={`mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 ${sectionSpacingClassName}`}
      >
        <SectionHeading
          eyebrow="FAQ"
          title="Perguntas frequentes"
          description="O foco do LeadFlow AI é simplificar a vida do vendedor sem transformar a rotina em um software pesado."
          centered
        />

        <div className={`${sectionContentSpacingClassName} space-y-4`}>
          {faqs.map((faq) => (
            <Card key={faq.question}>
              <CardHeader>
                <CardTitle>{faq.question}</CardTitle>
                <CardDescription>{faq.answer}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        id="cta"
        className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${sectionSpacingClassName} mb-14 sm:mb-16 lg:mb-20`}
      >
        <Card className="overflow-hidden border-emerald-200 bg-slate-950">
          <div className="relative p-6 sm:p-10">
            <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-emerald-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 left-0 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative mx-auto max-w-3xl text-center">
              <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
                7 dias grátis
              </span>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Organize seus leads e volte a vender com consistência no WhatsApp.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
                Se hoje sua operação depende de memória, conversa solta e follow-up atrasado,
                esta é a hora de trocar improviso por processo leve. Com pagamento simples e
                flexível para a sua operação.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-12 rounded-2xl">
                  <Link href="/login">Começar 7 dias grátis</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-2xl border-white/20 text-white hover:bg-white/10 hover:text-white"
                >
                  <Link href="#precos">Ver preços</Link>
                </Button>
              </div>

              <p className="mt-4 text-sm text-slate-400">
                Pagamento por cartão e Pix · Cancele quando quiser · Suporte em português
              </p>
            </div>
          </div>
        </Card>
      </section>

      <footer className="border-t border-white/60 bg-white/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="font-semibold text-slate-900">LeadFlow AI</p>
            <p className="mt-0.5 text-sm text-slate-500">
              O copiloto de IA para vendedores do WhatsApp.
            </p>
          </div>
          <nav className="flex flex-wrap gap-6 text-sm text-slate-500">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-slate-900">
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="text-sm text-slate-400">© 2025 LeadFlow AI</p>
        </div>
      </footer>
    </main>
  );
}
