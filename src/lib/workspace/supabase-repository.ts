import type { SupabaseClient } from "@supabase/supabase-js";

import {
  hydrateWorkspaceSnapshot,
  type LeadRow,
  type MessageRow,
  type ThreadRow,
} from "@/lib/workspace/persistence";
import type { WorkspaceSnapshot } from "@/lib/workspace/types";

export async function loadWorkspaceSnapshotFromSupabase(
  client: SupabaseClient,
  workspaceId: string
): Promise<WorkspaceSnapshot> {
  const [leadsResult, threadsResult, messagesResult] = await Promise.all([
    client.from("leads").select("*").eq("workspace_id", workspaceId).order("name"),
    client
      .from("conversation_threads")
      .select("*")
      .eq("workspace_id", workspaceId)
      .order("queue_position"),
    client
      .from("conversation_messages")
      .select("*, conversation_threads!inner(workspace_id)")
      .eq("conversation_threads.workspace_id", workspaceId)
      .order("sort_order"),
  ]);

  if (leadsResult.error) {
    throw leadsResult.error;
  }

  if (threadsResult.error) {
    throw threadsResult.error;
  }

  if (messagesResult.error) {
    throw messagesResult.error;
  }

  const messages = (messagesResult.data ?? []).map((message) => {
    const { conversation_threads: _thread, ...rest } = message;
    return rest;
  }) as MessageRow[];

  return hydrateWorkspaceSnapshot({
    leads: (leadsResult.data ?? []) as LeadRow[],
    threads: (threadsResult.data ?? []) as ThreadRow[],
    messages,
  });
}
