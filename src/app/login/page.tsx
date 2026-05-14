import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f7fcf8_0%,#edf6f2_100%)] px-4 py-6 sm:px-6 sm:py-10">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-6xl items-center">
        <div className="grid w-full gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
          <Card className="overflow-hidden border-emerald-200 bg-[linear-gradient(135deg,#0f172a_0%,#163047_52%,#0f766e_100%)] text-white shadow-[0_36px_90px_-50px_rgba(15,23,42,0.8)]">
            <CardContent className="relative p-6 sm:p-8">
              <div className="pointer-events-none absolute -right-14 top-0 size-36 rounded-full bg-emerald-400/20 blur-3xl" />
              <div className="pointer-events-none absolute -left-10 bottom-0 size-36 rounded-full bg-cyan-300/15 blur-3xl" />

              <div className="relative">
                <Link href="/" className="inline-flex items-center gap-3">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-white/12 text-sm font-semibold text-white">
                    LF
                  </div>
                  <div>
                    <p className="text-lg font-semibold">LeadFlow AI</p>
                    <p className="text-sm text-emerald-100/80">Acesso simplificado</p>
                  </div>
                </Link>

                <div className="mt-8 max-w-xl">
                  <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
                    Teste grátis
                  </span>
                  <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                    Entre em segundos e conheça o sistema sem fricção.
                  </h1>
                  <p className="mt-4 text-sm leading-7 text-slate-200 sm:text-base">
                    Nesta fase, o acesso está liberado para demonstração. Você pode preencher os campos se quiser, mas o botão Entrar já libera a navegação para o painel.
                  </p>
                </div>

                <div className="mt-8 space-y-3">
                  {[
                    "Fluxo pensado primeiro para celular",
                    "Sem senha obrigatória nesta etapa",
                    "Acesso direto ao painel para demonstração",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3"
                    >
                      <CheckCircle2 className="size-4.5 text-emerald-300" />
                      <span className="text-sm text-slate-100">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-white/70 bg-white/92">
            <CardContent className="p-6 sm:p-8">
              <div className="max-w-xl">
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                  <Sparkles className="size-3.5" />
                  Entrar no demo
                </span>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                  Acesse o LeadFlow AI
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                  Login e senha estão opcionais por enquanto. Se preferir, é só tocar em Entrar.
                </p>
              </div>

              <form className="mt-8 space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">
                    E-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="voce@empresa.com"
                    className="h-13 w-full rounded-2xl border border-slate-200 bg-white px-4 text-base text-slate-900 outline-none transition focus:border-emerald-300 focus:ring-4 focus:ring-emerald-100"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium text-slate-700">
                    Senha
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Opcional nesta fase"
                    className="h-13 w-full rounded-2xl border border-slate-200 bg-white px-4 text-base text-slate-900 outline-none transition focus:border-emerald-300 focus:ring-4 focus:ring-emerald-100"
                  />
                </div>

                <Button asChild size="lg" className="mt-2 h-12 w-full rounded-2xl">
                  <Link href="/painel">
                    Entrar
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </form>

              <div className="mt-6 rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 p-4">
                <div className="flex items-start gap-3">
                  <div className="flex size-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                    <ShieldCheck className="size-4.5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Acesso simplificado</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Esta tela foi deixada propositalmente sem autenticação obrigatória para facilitar a navegação e a apresentação do produto.
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-center text-sm text-slate-500">
                Quer voltar primeiro para a landing?{" "}
                <Link href="/" className="font-semibold text-emerald-700 hover:text-emerald-800">
                  Ir para a home
                </Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
