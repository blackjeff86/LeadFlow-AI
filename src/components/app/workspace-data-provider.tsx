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
  createMockWorkspaceRepository,
  type ConversationSector,
  type ConversationThread,
  type LeadRecord,
  type WorkspaceRepositoryMode,
  type WorkspaceSnapshot,
} from "@/lib/workspace";

type WorkspaceDataContextValue = {
  leads: LeadRecord[];
  threads: ConversationThread[];
  repositoryMode: WorkspaceRepositoryMode;
  transferThreadToSector: (threadId: string, nextSector: ConversationSector) => void;
};

const WorkspaceDataContext = createContext<WorkspaceDataContextValue | null>(null);

export function WorkspaceDataProvider({ children }: { children: ReactNode }) {
  const [repository] = useState(() => createMockWorkspaceRepository());
  const [snapshot, setSnapshot] = useState<WorkspaceSnapshot>(() => repository.loadSnapshot());

  const transferThreadToSector = useCallback(
    (threadId: string, nextSector: ConversationSector) => {
      setSnapshot((currentSnapshot) =>
        repository.transferThreadToSector(currentSnapshot, threadId, nextSector)
      );
    },
    [repository]
  );

  const value = useMemo(
    () => ({
      leads: snapshot.leads,
      threads: snapshot.threads,
      repositoryMode: repository.mode,
      transferThreadToSector,
    }),
    [repository.mode, snapshot.leads, snapshot.threads, transferThreadToSector]
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
