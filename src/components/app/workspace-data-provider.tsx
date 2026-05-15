"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  conversationThreads,
  crmLeads,
  type ConversationSector,
  type ConversationThread,
  type LeadRecord,
} from "@/lib/mock-crm-data";

type WorkspaceDataContextValue = {
  leads: LeadRecord[];
  threads: ConversationThread[];
  transferThreadToSector: (threadId: string, nextSector: ConversationSector) => void;
};

const WorkspaceDataContext = createContext<WorkspaceDataContextValue | null>(null);

const sectorOwners: Record<ConversationSector, string> = {
  Comercial: "Jeffe",
  Fechamento: "Luan Freire",
  Onboarding: "Karen Sousa",
};

function cloneLeads() {
  return crmLeads.map((lead) => ({ ...lead, tags: [...lead.tags] }));
}

function cloneThreads() {
  return conversationThreads.map((thread) => ({
    ...thread,
    sectorQueue: [...thread.sectorQueue],
    messages: thread.messages.map((message) => ({ ...message })),
  }));
}

function getLeadUpdatesForSector(nextSector: ConversationSector) {
  if (nextSector === "Fechamento") {
    return {
      stage: "Fechamento" as const,
      nextAction: "Fechamento deve validar condição final e puxar decisão ainda hoje",
      taskSummary: "Assumir negociação final e fechar condição comercial com o lead.",
      taskAction: "Assumir fechamento",
      taskType: "Fechamento",
      taskStatus: "Hoje" as const,
      taskDue: "Agora",
      messagePurpose: "Fechamento",
      messageIdealTime: "Agora",
    };
  }

  return {
    stage: "Fechamento" as const,
    nextAction: "Onboarding deve confirmar kickoff e alinhar os próximos passos da implantação",
    taskSummary: "Abrir onboarding e alinhar kickoff com o cliente sem perder o contexto da venda.",
    taskAction: "Iniciar onboarding",
    taskType: "Onboarding",
    taskStatus: "Hoje" as const,
    taskDue: "Agora",
    messagePurpose: "Onboarding",
    messageIdealTime: "Agora",
  };
}

export function WorkspaceDataProvider({ children }: { children: ReactNode }) {
  const [leads, setLeads] = useState<LeadRecord[]>(cloneLeads);
  const [threads, setThreads] = useState<ConversationThread[]>(cloneThreads);

  const transferThreadToSector = useCallback(
    (threadId: string, nextSector: ConversationSector) => {
      const currentThread = threads.find((thread) => thread.id === threadId);

      if (!currentThread || currentThread.activeSector === nextSector) {
        return;
      }

      const previousSector = currentThread.activeSector;
      const nextOwner = sectorOwners[nextSector];
      const transferTime = "Agora";

      setThreads((currentThreads) =>
        currentThreads.map((thread) => {
          if (thread.id !== threadId) {
            return thread;
          }

          return {
            ...thread,
            activeSector: nextSector,
            sectorOwner: nextOwner,
            status: nextSector === "Fechamento" ? "Pronto para fechar" : "Em andamento",
            unreadCount: 0,
            preview:
              nextSector === "Fechamento"
                ? "Conversa assumida por fechamento para validar condição final."
                : "Conversa assumida por onboarding para alinhar kickoff.",
            lastMessageAt: transferTime,
            suggestedAction:
              nextSector === "Fechamento"
                ? "Fechamento deve responder com condição final e CTA de decisão"
                : "Onboarding deve confirmar kickoff e orientar primeiros passos",
            messages: [
              ...thread.messages,
              {
                sender: "seller",
                text: `Handoff interno: ${previousSector} passou a conversa para ${nextSector}. Responsável atual: ${nextOwner}.`,
                time: transferTime,
                sector: nextSector,
                internal: true,
              },
            ],
          };
        })
      );

      setLeads((currentLeads) =>
        currentLeads.map((lead) =>
          lead.id === currentThread.leadId
            ? {
                ...lead,
                owner: nextOwner,
                ...getLeadUpdatesForSector(nextSector),
              }
            : lead
        )
      );
    },
    [threads]
  );

  const value = useMemo(
    () => ({
      leads,
      threads,
      transferThreadToSector,
    }),
    [leads, threads, transferThreadToSector]
  );

  return <WorkspaceDataContext.Provider value={value}>{children}</WorkspaceDataContext.Provider>;
}

export function useWorkspaceData() {
  const context = useContext(WorkspaceDataContext);

  if (!context) {
    throw new Error("useWorkspaceData must be used within WorkspaceDataProvider");
  }

  return context;
}
