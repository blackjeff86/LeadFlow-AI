"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

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

const navItems = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#recursos", label: "Recursos" },
  { href: "#precos", label: "Preços" },
  { href: "#faq", label: "FAQ" },
];

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="h-11 w-11 rounded-2xl border-slate-200 bg-white/80 lg:hidden"
          aria-label="Abrir menu"
        >
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="gap-8">
        <SheetHeader className="pr-10">
          <SheetTitle>LeadFlow AI</SheetTitle>
          <SheetDescription>
            Menos planilhas, mais vendas no WhatsApp.
          </SheetDescription>
        </SheetHeader>

        <nav className="flex flex-col gap-3">
          {navItems.map((item) => (
            <SheetClose asChild key={item.href}>
              <Link
                className="rounded-2xl px-4 py-4 text-base font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
                href={item.href}
              >
                {item.label}
              </Link>
            </SheetClose>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-3">
          <SheetClose asChild>
            <Button
              asChild
              variant="outline"
              className="h-12 w-full rounded-2xl border-slate-200"
            >
              <Link href="#cta">Entrar</Link>
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button asChild className="h-12 w-full rounded-2xl">
              <Link href="#cta">Testar 14 dias grátis</Link>
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
