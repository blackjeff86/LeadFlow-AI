import type { ConversationMessage, ConversationThread, LeadRecord, WorkspaceSnapshot } from "@/lib/workspace/types";

export type LeadRow = {
  id: string;
  workspace_id: string;
  name: string;
  company: string;
  source: string;
  owner: string;
  stage: LeadRecord["stage"];
  temperature: LeadRecord["temperature"];
  last_contact: string;
  next_action: string;
  summary: string;
  tags: string[];
  pipeline_value_label: string;
  pipeline_value_number: number;
  response_eta: string;
  task_summary: string;
  task_action: string;
  task_type: string;
  task_status: LeadRecord["taskStatus"];
  task_due: string;
  message_purpose: string;
  message_ideal_time: string;
  message_context: string;
  message_draft: string;
};

export type ThreadRow = {
  id: string;
  workspace_id: string;
  lead_id: string;
  channel: ConversationThread["channel"];
  status: ConversationThread["status"];
  unread_count: number;
  preview: string;
  last_message_at: string;
  ai_summary: string;
  suggested_action: string;
  active_sector: ConversationThread["activeSector"];
  sector_queue: ConversationThread["sectorQueue"];
  sector_owner: string;
  queue_position: number;
  sla_state: ConversationThread["slaState"];
  sla_deadline: string;
  sector_visibility_mode: ConversationThread["sectorVisibilityMode"];
  auto_task_label: string;
};

export type MessageRow = {
  id: string;
  thread_id: string;
  sender: ConversationMessage["sender"];
  text: string;
  time_label: string;
  sector: ConversationMessage["sector"] | null;
  is_internal: boolean;
  sort_order: number;
};

export type WorkspacePersistenceSnapshot = {
  leads: LeadRow[];
  threads: ThreadRow[];
  messages: MessageRow[];
};

export function serializeWorkspaceSnapshot(
  workspaceId: string,
  snapshot: WorkspaceSnapshot
): WorkspacePersistenceSnapshot {
  return {
    leads: snapshot.leads.map((lead) => ({
      id: lead.id,
      workspace_id: workspaceId,
      name: lead.name,
      company: lead.company,
      source: lead.source,
      owner: lead.owner,
      stage: lead.stage,
      temperature: lead.temperature,
      last_contact: lead.lastContact,
      next_action: lead.nextAction,
      summary: lead.summary,
      tags: [...lead.tags],
      pipeline_value_label: lead.pipelineValue,
      pipeline_value_number: lead.pipelineValueNumber,
      response_eta: lead.responseEta,
      task_summary: lead.taskSummary,
      task_action: lead.taskAction,
      task_type: lead.taskType,
      task_status: lead.taskStatus,
      task_due: lead.taskDue,
      message_purpose: lead.messagePurpose,
      message_ideal_time: lead.messageIdealTime,
      message_context: lead.messageContext,
      message_draft: lead.messageDraft,
    })),
    threads: snapshot.threads.map((thread) => ({
      id: thread.id,
      workspace_id: workspaceId,
      lead_id: thread.leadId,
      channel: thread.channel,
      status: thread.status,
      unread_count: thread.unreadCount,
      preview: thread.preview,
      last_message_at: thread.lastMessageAt,
      ai_summary: thread.aiSummary,
      suggested_action: thread.suggestedAction,
      active_sector: thread.activeSector,
      sector_queue: [...thread.sectorQueue],
      sector_owner: thread.sectorOwner,
      queue_position: thread.queuePosition,
      sla_state: thread.slaState,
      sla_deadline: thread.slaDeadline,
      sector_visibility_mode: thread.sectorVisibilityMode,
      auto_task_label: thread.autoTaskLabel,
    })),
    messages: snapshot.threads.flatMap((thread) =>
      thread.messages.map((message, index) => ({
        id: `${thread.id}-message-${index + 1}`,
        thread_id: thread.id,
        sender: message.sender,
        text: message.text,
        time_label: message.time,
        sector: message.sector ?? null,
        is_internal: Boolean(message.internal),
        sort_order: index,
      }))
    ),
  };
}

export function hydrateWorkspaceSnapshot(snapshot: WorkspacePersistenceSnapshot): WorkspaceSnapshot {
  const messagesByThread = new Map<string, MessageRow[]>();

  snapshot.messages.forEach((message) => {
    const current = messagesByThread.get(message.thread_id) ?? [];
    current.push(message);
    messagesByThread.set(message.thread_id, current);
  });

  return {
    leads: snapshot.leads.map((lead) => ({
      id: lead.id,
      name: lead.name,
      company: lead.company,
      source: lead.source,
      owner: lead.owner,
      stage: lead.stage,
      temperature: lead.temperature,
      lastContact: lead.last_contact,
      nextAction: lead.next_action,
      summary: lead.summary,
      tags: [...lead.tags],
      pipelineValue: lead.pipeline_value_label,
      pipelineValueNumber: lead.pipeline_value_number,
      responseEta: lead.response_eta,
      taskSummary: lead.task_summary,
      taskAction: lead.task_action,
      taskType: lead.task_type,
      taskStatus: lead.task_status,
      taskDue: lead.task_due,
      messagePurpose: lead.message_purpose,
      messageIdealTime: lead.message_ideal_time,
      messageContext: lead.message_context,
      messageDraft: lead.message_draft,
    })),
    threads: snapshot.threads.map((thread) => ({
      id: thread.id,
      leadId: thread.lead_id,
      channel: thread.channel,
      status: thread.status,
      unreadCount: thread.unread_count,
      preview: thread.preview,
      lastMessageAt: thread.last_message_at,
      aiSummary: thread.ai_summary,
      suggestedAction: thread.suggested_action,
      activeSector: thread.active_sector,
      sectorQueue: [...thread.sector_queue],
      sectorOwner: thread.sector_owner,
      queuePosition: thread.queue_position,
      slaState: thread.sla_state,
      slaDeadline: thread.sla_deadline,
      sectorVisibilityMode: thread.sector_visibility_mode,
      autoTaskLabel: thread.auto_task_label,
      messages: (messagesByThread.get(thread.id) ?? [])
        .sort((left, right) => left.sort_order - right.sort_order)
        .map((message) => ({
          sender: message.sender,
          text: message.text,
          time: message.time_label,
          sector: message.sector ?? undefined,
          internal: message.is_internal,
        })),
    })),
  };
}
