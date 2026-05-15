import type { ReactNode } from "react";

import { AppShell } from "@/components/app/app-shell";
import { WorkspaceDataProvider } from "@/components/app/workspace-data-provider";

export default function PainelLayout({ children }: { children: ReactNode }) {
  return (
    <WorkspaceDataProvider>
      <AppShell>{children}</AppShell>
    </WorkspaceDataProvider>
  );
}
