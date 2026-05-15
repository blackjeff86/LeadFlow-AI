"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  ChartColumnBig,
  ChevronRight,
  CirclePlus,
  ClipboardList,
  Home,
  Menu,
  MessageCircleMore,
  MessageSquareText,
  Search,
  Settings,
  Sparkles,
  UserRound,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

type AppShellProps = {
  children: React.ReactNode;
};

const primaryNavItems = [
  { href: "/painel", label: "Painel", icon: Home },
  { href: "/painel/leads", label: "Leads", icon: UserRound },
  { href: "/painel/conversas", label: "Conversas", icon: MessageCircleMore },
  { href: "/painel/pipeline", label: "Pipeline", icon: ChartColumnBig },
  { href: "/painel/tarefas", label: "Tarefas", icon: ClipboardList },
];

const secondaryNavItems = [
  { href: "/painel/mensagens", label: "Mensagens IA", icon: MessageSquareText },
  { href: "/painel/configuracoes", label: "Configurações", icon: Settings },
];

function isCurrentPath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavLink({
  href,
  label,
  icon: Icon,
  pathname,
}: {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  pathname: string;
}) {
  const active = isCurrentPath(pathname, href);

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all",
        active
          ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25"
          : "text-slate-600 hover:bg-white hover:text-slate-900"
      )}
    >
      <span
        className={cn(
          "flex size-10 items-center justify-center rounded-2xl",
          active ? "bg-white/15" : "bg-slate-100 text-slate-500"
        )}
      >
        <Icon className="size-4.5" />
      </span>
      <span className="flex-1">{label}</span>
      {active ? <ChevronRight className="size-4 opacity-80" /> : null}
    </Link>
  );
}

function MobileMenu({ pathname }: { pathname: string }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="size-11 rounded-2xl border-white/70 bg-white/90 lg:hidden"
          aria-label="Abrir navegação do sistema"
        >
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="gap-8 bg-[linear-gradient(180deg,#fbfefc_0%,#f1f9f5_100%)]">
        <SheetHeader className="pr-10">
          <SheetTitle>LeadFlow AI</SheetTitle>
          <SheetDescription>
            A base do seu sistema comercial, pensada primeiro para o celular.
          </SheetDescription>
        </SheetHeader>

        <div className="rounded-[1.75rem] border border-emerald-100 bg-white/90 p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Espaço atual
          </p>
          <div className="mt-3 flex items-center justify-between gap-3">
            <div>
              <p className="text-base font-semibold text-slate-900">Operação comercial</p>
              <p className="text-sm text-slate-500">2 vendedores online agora</p>
            </div>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
              Demo
            </span>
          </div>
        </div>

        <nav className="space-y-2">
          {primaryNavItems.map((item) => (
            <SheetClose asChild key={item.href}>
              <div>
                <NavLink pathname={pathname} {...item} />
              </div>
            </SheetClose>
          ))}
        </nav>

        <div className="rounded-[1.75rem] border border-white/70 bg-white/85 p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Ferramentas
          </p>
          <nav className="mt-3 space-y-2">
            {secondaryNavItems.map((item) => (
              <SheetClose asChild key={item.href}>
                <div>
                  <NavLink pathname={pathname} {...item} />
                </div>
              </SheetClose>
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f6fbf8_0%,#eef5f3_100%)]">
      <div className="mx-auto flex min-h-screen max-w-[1600px] flex-col lg:flex-row">
        <aside className="hidden w-[300px] shrink-0 border-r border-white/60 bg-white/70 px-5 py-6 backdrop-blur-xl lg:flex lg:flex-col">
          <Link href="/" className="rounded-[1.75rem] border border-emerald-100 bg-white/90 p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-emerald-500 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30">
                LF
              </div>
              <div>
                <p className="text-lg font-semibold text-slate-900">LeadFlow AI</p>
                <p className="text-sm text-slate-500">Mobile-first sales workspace</p>
              </div>
            </div>
          </Link>

          <div className="mt-6 rounded-[1.75rem] border border-emerald-100 bg-[linear-gradient(180deg,#0f172a_0%,#162033_100%)] p-5 text-white shadow-[0_32px_70px_-40px_rgba(15,23,42,0.75)]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
              Operação ativa
            </p>
            <h2 className="mt-3 text-xl font-semibold">Equipe comercial</h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              A shell já está pronta para crescer com dashboard, CRM, pipeline e automações.
            </p>
            <div className="mt-5 flex items-center gap-3 rounded-2xl bg-white/8 px-4 py-3">
              <div className="flex size-10 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-300">
                <Sparkles className="size-4.5" />
              </div>
              <div>
                <p className="text-sm font-semibold">IA conectada</p>
                <p className="text-xs text-slate-400">Sugestões, follow-ups e prioridade</p>
              </div>
            </div>
          </div>

          <nav className="mt-6 space-y-2">
            {primaryNavItems.map((item) => (
              <NavLink key={item.href} pathname={pathname} {...item} />
            ))}
          </nav>

          <div className="mt-6 rounded-[1.75rem] border border-white/60 bg-white/85 p-4 shadow-sm">
            <p className="px-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Mais
            </p>
            <div className="mt-3 space-y-2">
              {secondaryNavItems.map((item) => (
                <NavLink key={item.href} pathname={pathname} {...item} />
              ))}
            </div>
          </div>

          <div className="mt-auto rounded-[1.75rem] border border-white/60 bg-white/85 p-4 shadow-sm">
            <p className="text-sm font-semibold text-slate-900">Etapa atual</p>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              A shell já virou dashboard inicial. Agora seguimos para o CRM de leads sem precisar refazer a estrutura.
            </p>
          </div>
        </aside>

        <div className="flex min-h-screen min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-40 border-b border-white/60 bg-white/75 px-4 py-3 backdrop-blur-xl sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <MobileMenu pathname={pathname} />

              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
                  Sistema
                </p>
                <h1 className="truncate text-lg font-semibold text-slate-900 sm:text-xl">
                  LeadFlow AI Workspace
                </h1>
              </div>

              <div className="hidden items-center gap-3 rounded-full border border-white/70 bg-white/90 px-4 py-2 shadow-sm sm:flex">
                <Search className="size-4 text-slate-400" />
                <span className="text-sm text-slate-500">Buscar leads, tarefas ou tags</span>
              </div>

              <Button
                variant="outline"
                size="icon"
                className="size-11 rounded-2xl border-white/70 bg-white/90"
                aria-label="Notificações"
              >
                <Bell className="size-4.5" />
              </Button>

              <Button className="hidden h-11 rounded-2xl px-5 sm:inline-flex">
                <CirclePlus className="size-4.5" />
                Novo lead
              </Button>
            </div>
          </header>

          <main className="flex-1 px-4 pb-28 pt-5 sm:px-6 sm:pb-8 lg:px-8 lg:pt-8">{children}</main>

          <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-white/70 bg-white/92 px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl lg:hidden">
            <div className="mx-auto grid max-w-xl grid-cols-5 gap-2">
              {primaryNavItems.map((item) => {
                const active = isCurrentPath(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex flex-col items-center gap-1 rounded-2xl px-2 py-2 text-[11px] font-semibold transition-all",
                      active
                        ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30"
                        : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                    )}
                  >
                    <item.icon className="size-4.5" />
                    <span className="truncate">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
