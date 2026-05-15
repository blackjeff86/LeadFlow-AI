create extension if not exists "pgcrypto";

create table if not exists public.workspaces (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.leads (
  id text primary key,
  workspace_id uuid not null references public.workspaces (id) on delete cascade,
  name text not null,
  company text not null,
  source text not null,
  owner text not null,
  stage text not null,
  temperature text not null,
  last_contact text not null,
  next_action text not null,
  summary text not null,
  tags text[] not null default '{}',
  pipeline_value_label text not null,
  pipeline_value_number integer not null default 0,
  response_eta text not null,
  task_summary text not null,
  task_action text not null,
  task_type text not null,
  task_status text not null,
  task_due text not null,
  message_purpose text not null,
  message_ideal_time text not null,
  message_context text not null,
  message_draft text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.conversation_threads (
  id text primary key,
  workspace_id uuid not null references public.workspaces (id) on delete cascade,
  lead_id text not null references public.leads (id) on delete cascade,
  channel text not null,
  status text not null,
  unread_count integer not null default 0,
  preview text not null,
  last_message_at text not null,
  ai_summary text not null,
  suggested_action text not null,
  active_sector text not null,
  sector_queue text[] not null default '{}',
  sector_owner text not null,
  queue_position integer not null default 1,
  sla_state text not null,
  sla_deadline text not null,
  sector_visibility_mode text not null,
  auto_task_label text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.conversation_messages (
  id text primary key,
  thread_id text not null references public.conversation_threads (id) on delete cascade,
  sender text not null,
  text text not null,
  time_label text not null,
  sector text,
  is_internal boolean not null default false,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create index if not exists leads_workspace_stage_idx
  on public.leads (workspace_id, stage);

create index if not exists leads_workspace_task_status_idx
  on public.leads (workspace_id, task_status);

create index if not exists leads_workspace_owner_idx
  on public.leads (workspace_id, owner);

create index if not exists conversation_threads_workspace_sector_idx
  on public.conversation_threads (workspace_id, active_sector, queue_position);

create index if not exists conversation_threads_workspace_status_idx
  on public.conversation_threads (workspace_id, status, sla_state);

create index if not exists conversation_threads_lead_idx
  on public.conversation_threads (lead_id);

create index if not exists conversation_messages_thread_sort_idx
  on public.conversation_messages (thread_id, sort_order);

comment on table public.workspaces is
  'Conta principal do workspace comercial. Base para evoluir auth, time e multitenancy.';

comment on table public.leads is
  'Leads persistidos com snapshot operacional atual. Task fields permanecem aqui nesta fase para reduzir atrito de migração.';

comment on table public.conversation_threads is
  'Threads da inbox comercial com SLA, fila do setor, handoff e modo de visibilidade do setor.';

comment on table public.conversation_messages is
  'Histórico cronológico de mensagens e notas internas por thread.';
