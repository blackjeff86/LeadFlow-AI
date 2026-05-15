export type LeadTemperature = "Muito quente" | "Quente" | "Morno";
export type LeadStage = "Novo" | "Em contato" | "Proposta enviada" | "Negociação" | "Fechamento";
export type TaskStatus = "Atrasada" | "Hoje" | "Próxima";
export type ConversationChannel = "WhatsApp" | "Instagram" | "Site";
export type ConversationStatus = "Aguardando resposta" | "Em andamento" | "Pronto para fechar";
export type ConversationSector = "Comercial" | "Fechamento" | "Onboarding";
export type ConversationSlaState = "Crítico" | "Janela ativa" | "Saudável";
export type SectorVisibilityMode = "Invisível para o cliente" | "Explícito para o cliente";

export type LeadRecord = {
  id: string;
  name: string;
  company: string;
  source: string;
  owner: string;
  stage: LeadStage;
  temperature: LeadTemperature;
  lastContact: string;
  nextAction: string;
  summary: string;
  tags: string[];
  pipelineValue: string;
  pipelineValueNumber: number;
  responseEta: string;
  taskSummary: string;
  taskAction: string;
  taskType: string;
  taskStatus: TaskStatus;
  taskDue: string;
  messagePurpose: string;
  messageIdealTime: string;
  messageContext: string;
  messageDraft: string;
};

export type ConversationMessage = {
  sender: "lead" | "seller" | "ai";
  text: string;
  time: string;
  sector?: ConversationSector;
  internal?: boolean;
};

export type ConversationThread = {
  id: string;
  leadId: string;
  channel: ConversationChannel;
  status: ConversationStatus;
  unreadCount: number;
  preview: string;
  lastMessageAt: string;
  aiSummary: string;
  suggestedAction: string;
  activeSector: ConversationSector;
  sectorQueue: ConversationSector[];
  sectorOwner: string;
  queuePosition: number;
  slaState: ConversationSlaState;
  slaDeadline: string;
  sectorVisibilityMode: SectorVisibilityMode;
  autoTaskLabel: string;
  messages: ConversationMessage[];
};

export type WorkspaceSnapshot = {
  leads: LeadRecord[];
  threads: ConversationThread[];
};
