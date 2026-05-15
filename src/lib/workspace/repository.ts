import { conversationThreads, crmLeads } from "@/lib/mock-crm-data";
import type {
  ConversationSector,
  ConversationThread,
  LeadRecord,
  WorkspaceSnapshot,
} from "@/lib/workspace/types";

export type WorkspaceRepositoryMode = "mock";

export type WorkspaceRepository = {
  mode: WorkspaceRepositoryMode;
  loadSnapshot: () => WorkspaceSnapshot;
  transferThreadToSector: (
    snapshot: WorkspaceSnapshot,
    threadId: string,
    nextSector: ConversationSector
  ) => WorkspaceSnapshot;
};

const sectorOwners: Record<ConversationSector, string> = {
  Comercial: "Jeffe",
  Fechamento: "Luan Freire",
  Onboarding: "Karen Sousa",
};

function cloneLeads(leads: LeadRecord[]) {
  return leads.map((lead) => ({ ...lead, tags: [...lead.tags] }));
}

function cloneThreads(threads: ConversationThread[]) {
  return threads.map((thread) => ({
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

function getThreadUpdatesForSector(nextSector: ConversationSector) {
  if (nextSector === "Fechamento") {
    return {
      status: "Pronto para fechar" as const,
      preview: "Conversa assumida por fechamento para validar condição final.",
      suggestedAction: "Fechamento deve responder com condição final e CTA de decisão",
      queuePosition: 1,
      slaState: "Crítico" as const,
      slaDeadline: "Responder em até 15 min",
      autoTaskLabel: "Tarefa criada automaticamente para fechamento assumir a decisão final",
    };
  }

  return {
    status: "Em andamento" as const,
    preview: "Conversa assumida por onboarding para alinhar kickoff.",
    suggestedAction: "Onboarding deve confirmar kickoff e orientar primeiros passos",
    queuePosition: 1,
    slaState: "Janela ativa" as const,
    slaDeadline: "Confirmar kickoff ainda hoje",
    autoTaskLabel: "Tarefa criada automaticamente para onboarding iniciar kickoff",
  };
}

export function createSeedWorkspaceSnapshot(): WorkspaceSnapshot {
  return {
    leads: cloneLeads(crmLeads),
    threads: cloneThreads(conversationThreads),
  };
}

export function createMockWorkspaceRepository(): WorkspaceRepository {
  return {
    mode: "mock",
    loadSnapshot: createSeedWorkspaceSnapshot,
    transferThreadToSector(snapshot, threadId, nextSector) {
      const currentThread = snapshot.threads.find((thread) => thread.id === threadId);

      if (!currentThread || currentThread.activeSector === nextSector) {
        return snapshot;
      }

      const previousSector = currentThread.activeSector;
      const nextOwner = sectorOwners[nextSector];
      const transferTime = "Agora";

      return {
        leads: snapshot.leads.map((lead) =>
          lead.id === currentThread.leadId
            ? {
                ...lead,
                owner: nextOwner,
                ...getLeadUpdatesForSector(nextSector),
              }
            : lead
        ),
        threads: snapshot.threads.map((thread) => {
          if (thread.id !== threadId) {
            return thread;
          }

          return {
            ...thread,
            activeSector: nextSector,
            sectorOwner: nextOwner,
            ...getThreadUpdatesForSector(nextSector),
            unreadCount: 0,
            lastMessageAt: transferTime,
            messages: [
              ...thread.messages,
              {
                sender: "seller",
                text: `Handoff interno: ${previousSector} passou a conversa para ${nextSector}. Responsável atual: ${nextOwner}.`,
                time: transferTime,
                sector: nextSector,
                internal: true,
              },
              {
                sender: "seller",
                text:
                  nextSector === "Fechamento"
                    ? "Tarefa automática criada para fechamento validar condição final e tentar decisão ainda hoje."
                    : "Tarefa automática criada para onboarding alinhar kickoff e próximos passos da implantação.",
                time: transferTime,
                sector: nextSector,
                internal: true,
              },
            ],
          };
        }),
      };
    },
  };
}
