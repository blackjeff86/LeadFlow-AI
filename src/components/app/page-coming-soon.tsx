import { ArrowRight, Construction, Smartphone } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type PageComingSoonProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageComingSoon({
  eyebrow,
  title,
  description,
}: PageComingSoonProps) {
  return (
    <div className="space-y-5 sm:space-y-6">
      <Card className="overflow-hidden border-emerald-200 bg-[linear-gradient(135deg,#fafffc_0%,#eef8f3_50%,#f8fbff_100%)]">
        <CardContent className="p-5 sm:p-6">
          <div className="flex flex-col gap-4 sm:gap-5">
            <span className="inline-flex w-fit rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              {eyebrow}
            </span>
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                {title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                {description}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 lg:grid-cols-[1fr_0.9fr]">
        <Card>
          <CardHeader>
            <div className="flex size-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
              <Construction className="size-5" />
            </div>
            <CardTitle>Base pronta para evoluir</CardTitle>
            <CardDescription>
              A estrutura já respeita mobile first: cabe bem em telas pequenas, mantém toque confortável e cresce com ordem no desktop.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-6 text-slate-600">
            <div className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 px-4 py-4">
              O conteúdo funcional desta área entra nas próximas etapas, sem precisar refazer a navegação ou a hierarquia visual.
            </div>
            <div className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 px-4 py-4">
              Isso nos permite construir CRM, pipeline e tarefas em cima de uma shell consistente.
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200/80 bg-slate-950 text-white">
          <CardHeader>
            <div className="flex size-12 items-center justify-center rounded-2xl bg-white/10 text-emerald-300">
              <Smartphone className="size-5" />
            </div>
            <CardTitle className="text-white">Critério desta fase</CardTitle>
            <CardDescription className="text-slate-300">
              Garantir que o sistema já tenha uma experiência sólida em celular antes de aprofundar as regras de negócio.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-sm font-semibold text-white">
              Próxima construção
              <ArrowRight className="size-4" />
              Dashboard inicial
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
