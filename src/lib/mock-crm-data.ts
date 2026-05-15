export type LeadTemperature = "Muito quente" | "Quente" | "Morno";
export type LeadStage = "Novo" | "Em contato" | "Proposta enviada" | "Negociação" | "Fechamento";
export type TaskStatus = "Atrasada" | "Hoje" | "Próxima";
export type ConversationChannel = "WhatsApp" | "Instagram" | "Site";
export type ConversationStatus = "Aguardando resposta" | "Em andamento" | "Pronto para fechar";
export type ConversationSector = "Comercial" | "Fechamento" | "Onboarding";

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
  messages: ConversationMessage[];
};

export const crmLeads: LeadRecord[] = [
  {
    id: "lead-vanessa-rocha",
    name: "Vanessa Rocha",
    company: "VR Studio",
    source: "Instagram Ads",
    owner: "Jeffe",
    stage: "Proposta enviada",
    temperature: "Muito quente",
    lastContact: "Hoje, 09:12",
    nextAction: "Responder com condição especial até 10:30",
    summary:
      "Pediu proposta atualizada e mostrou urgência para fechar ainda hoje se houver flexibilidade comercial.",
    tags: ["Alta intenção", "Follow-up hoje", "Pix"],
    pipelineValue: "R$ 12 mil",
    pipelineValueNumber: 12000,
    responseEta: "Pronta agora",
    taskSummary: "Retornar com condição especial e prazo curto para fechamento.",
    taskAction: "Enviar resposta",
    taskType: "Proposta",
    taskStatus: "Atrasada",
    taskDue: "Ontem, 18:00",
    messagePurpose: "Fechamento hoje",
    messageIdealTime: "Pronta agora",
    messageContext:
      "Lead pediu condição especial para decidir ainda hoje. Já houve boa troca e intenção clara de fechamento.",
    messageDraft:
      "Vanessa, consegui ajustar a condição para você avançar hoje com mais segurança. Se fizer sentido, já te mando o próximo passo agora e deixamos isso resolvido ainda hoje.",
  },
  {
    id: "lead-clinica-nexo",
    name: "Clínica Nexo",
    company: "Clínica de estética",
    source: "Landing page",
    owner: "Jeffe",
    stage: "Em contato",
    temperature: "Quente",
    lastContact: "Ontem, 18:40",
    nextAction: "Retomar com mensagem curta às 13:00",
    summary:
      "Conversou bem com a proposta, mas parou depois da tabela. IA sugere retomar com objetividade e urgência leve.",
    tags: ["B2B", "Decisor respondeu", "Recuperação"],
    pipelineValue: "R$ 8 mil",
    pipelineValueNumber: 8000,
    responseEta: "Enviar às 13:00",
    taskSummary: "Retomar conversa interrompida depois da proposta comercial.",
    taskAction: "Reativar lead",
    taskType: "Follow-up",
    taskStatus: "Atrasada",
    taskDue: "Ontem, 13:00",
    messagePurpose: "Reativar conversa",
    messageIdealTime: "Enviar às 13:00",
    messageContext:
      "Parou depois de receber a proposta. Melhor abordagem: curta, leve e com retomada objetiva.",
    messageDraft:
      "Oi! Passei aqui rapidinho porque separei a forma mais simples de seguir com isso sem te tomar tempo. Se quiser, te resumo em uma mensagem e você já vê se faz sentido.",
  },
  {
    id: "lead-loja-prisma",
    name: "Loja Prisma",
    company: "Varejo local",
    source: "Indicação",
    owner: "Jeffe",
    stage: "Negociação",
    temperature: "Morno",
    lastContact: "Ontem, 16:05",
    nextAction: "Cobrar retorno do financeiro às 18:30",
    summary:
      "Existe interesse real, mas a decisão depende de aprovação interna. Vale manter cadência sem parecer pressão.",
    tags: ["Negociação", "Ticket médio", "Financeiro"],
    pipelineValue: "R$ 11 mil",
    pipelineValueNumber: 11000,
    responseEta: "Enviar às 18:30",
    taskSummary: "Cobrar retorno do financeiro antes que a oportunidade esfrie.",
    taskAction: "Cobrar retorno",
    taskType: "Negociação",
    taskStatus: "Atrasada",
    taskDue: "Ontem, 10:30",
    messagePurpose: "Cobrar retorno",
    messageIdealTime: "Enviar às 18:30",
    messageContext:
      "A negociação depende do financeiro. O texto precisa lembrar o valor da proposta sem soar pressionado.",
    messageDraft:
      "Oi! Quis retomar só para ver se você conseguiu avançar internamente sobre a proposta. Se fizer sentido, posso te mandar um resumo rápido dos pontos principais para facilitar a decisão.",
  },
  {
    id: "lead-mateus-silva",
    name: "Mateus Silva",
    company: "Consultor autônomo",
    source: "WhatsApp",
    owner: "Jeffe",
    stage: "Novo",
    temperature: "Quente",
    lastContact: "Hoje, 08:15",
    nextAction: "Qualificar dor e prazo ainda pela manhã",
    summary:
      "Chegou pedindo informações objetivas, respondeu rápido e parece estar comparando alternativas agora.",
    tags: ["Entrada recente", "Resposta rápida", "Qualificação"],
    pipelineValue: "R$ 5 mil",
    pipelineValueNumber: 5000,
    responseEta: "10:45",
    taskSummary: "Entender prazo, ticket e urgência antes de montar proposta.",
    taskAction: "Qualificar lead",
    taskType: "Qualificação",
    taskStatus: "Hoje",
    taskDue: "10:45",
    messagePurpose: "Resposta rápida",
    messageIdealTime: "10:45",
    messageContext:
      "Lead entrou hoje e já mostrou agilidade. Melhor abordagem: objetiva, consultiva e sem excesso de detalhes.",
    messageDraft:
      "Mateus, para eu te indicar a melhor forma de seguir, me diz só uma coisa: você quer resolver isso ainda agora ou está avaliando para os próximos dias?",
  },
  {
    id: "lead-studio-a7",
    name: "Studio A7",
    company: "Marketing local",
    source: "Instagram Ads",
    owner: "Jeffe",
    stage: "Novo",
    temperature: "Quente",
    lastContact: "há 29 min",
    nextAction: "Abrir conversa às 11:20",
    summary:
      "Lead de anúncio com boa aderência inicial e tempo de resposta favorável para primeira abordagem.",
    tags: ["Anúncio", "Primeiro contato", "Alto potencial"],
    pipelineValue: "R$ 6 mil",
    pipelineValueNumber: 6000,
    responseEta: "11:20",
    taskSummary: "Responder entrada nova do anúncio com contexto e CTA objetivo.",
    taskAction: "Abrir conversa",
    taskType: "Primeiro contato",
    taskStatus: "Hoje",
    taskDue: "11:20",
    messagePurpose: "Primeiro contato",
    messageIdealTime: "11:20",
    messageContext:
      "Lead acabou de entrar e o momento ainda é bom para puxar resposta rápida.",
    messageDraft:
      "Oi! Vi seu interesse e já separei a forma mais simples de te mostrar como isso pode funcionar no seu caso. Se quiser, te explico em 2 linhas e você vê se faz sentido.",
  },
  {
    id: "lead-carlos-mendes",
    name: "Carlos Mendes",
    company: "Operação comercial",
    source: "WhatsApp",
    owner: "Jeffe",
    stage: "Em contato",
    temperature: "Quente",
    lastContact: "há 8 min",
    nextAction: "Responder às 15:00 com prazo de implantação",
    summary:
      "Perguntou sobre prazo de implantação e demonstrou intenção de avançar se a operação for simples.",
    tags: ["Prazo", "Objeção leve", "Resposta hoje"],
    pipelineValue: "R$ 7 mil",
    pipelineValueNumber: 7000,
    responseEta: "15:00",
    taskSummary: "Confirmar prazo de implantação solicitado hoje cedo.",
    taskAction: "Confirmar prazo",
    taskType: "Mensagem",
    taskStatus: "Hoje",
    taskDue: "15:00",
    messagePurpose: "Esclarecer objeção",
    messageIdealTime: "15:00",
    messageContext:
      "A conversa depende de segurança sobre prazo e simplicidade de implantação.",
    messageDraft:
      "Carlos, consigo te passar um prazo bem claro para implantação e, mais importante, sem complicar sua rotina. Se quiser, já te resumo como funcionaria na prática.",
  },
  {
    id: "lead-juliana-torres",
    name: "Juliana Torres",
    company: "Consultoria premium",
    source: "Indicação",
    owner: "Jeffe",
    stage: "Proposta enviada",
    temperature: "Quente",
    lastContact: "Ontem, 14:30",
    nextAction: "Refinar proposta amanhã",
    summary:
      "Pediu ajuste fino no pacote e segue interessada, mas quer se sentir segura antes de decidir.",
    tags: ["Ajuste comercial", "Proposta", "Boa aderência"],
    pipelineValue: "R$ 16 mil",
    pipelineValueNumber: 16000,
    responseEta: "Amanhã, 14:00",
    taskSummary: "Enviar versão final após ajuste solicitado no pacote.",
    taskAction: "Preparar proposta",
    taskType: "Proposta",
    taskStatus: "Próxima",
    taskDue: "Amanhã, 14:00",
    messagePurpose: "Follow-up de proposta",
    messageIdealTime: "Amanhã, 14:00",
    messageContext:
      "Lead quer uma versão final mais aderente ao cenário dela antes de bater o martelo.",
    messageDraft:
      "Juliana, revisei sua proposta com o ajuste que conversamos para ela ficar mais alinhada ao que você precisa agora. Se quiser, te envio a versão final ainda hoje.",
  },
  {
    id: "lead-grupo-atlas",
    name: "Grupo Atlas",
    company: "Serviços B2B",
    source: "Landing page",
    owner: "Jeffe",
    stage: "Negociação",
    temperature: "Morno",
    lastContact: "Segunda, 17:10",
    nextAction: "Lembrar decisão na sexta",
    summary:
      "Cliente alinhado, mas a decisão ainda depende de reunião interna.",
    tags: ["B2B", "Decisão interna", "Acompanhamento"],
    pipelineValue: "R$ 9 mil",
    pipelineValueNumber: 9000,
    responseEta: "Sexta, 10:00",
    taskSummary: "Acompanhar reunião interna do cliente e abrir caminho para assinatura.",
    taskAction: "Lembrar decisão",
    taskType: "Fechamento",
    taskStatus: "Próxima",
    taskDue: "Sexta, 10:00",
    messagePurpose: "Fechamento",
    messageIdealTime: "Sexta, 10:00",
    messageContext:
      "Lead está perto do fechamento, mas depende de validação interna do cliente.",
    messageDraft:
      "Oi! Passando para acompanhar se vocês conseguiram avançar internamente. Se ajudar, posso resumir em uma mensagem os pontos que tornam essa decisão mais simples agora.",
  },
  {
    id: "lead-oral-prime",
    name: "Oral Prime",
    company: "Clínica odontológica",
    source: "Google",
    owner: "Jeffe",
    stage: "Em contato",
    temperature: "Morno",
    lastContact: "Segunda, 11:20",
    nextAction: "Agendar mensagem amanhã às 09:30",
    summary:
      "Lead esfriou após diagnóstico inicial; ainda existe abertura para um novo ângulo de abordagem.",
    tags: ["Lead frio", "Reengajamento", "Serviços"],
    pipelineValue: "R$ 10 mil",
    pipelineValueNumber: 10000,
    responseEta: "Amanhã, 09:30",
    taskSummary: "Lead esfriou após diagnóstico inicial; vale retomar com novo ângulo.",
    taskAction: "Agendar mensagem",
    taskType: "Reengajamento",
    taskStatus: "Próxima",
    taskDue: "Amanhã, 09:30",
    messagePurpose: "Reengajamento",
    messageIdealTime: "Amanhã, 09:30",
    messageContext:
      "A conversa esfriou depois do diagnóstico, então a retomada precisa soar útil e não repetitiva.",
    messageDraft:
      "Oi! Lembrei do seu cenário e pensei em uma forma mais simples de seguir sem gerar peso na rotina. Se fizer sentido, te mostro rapidamente e você vê se vale retomar.",
  },
];

export const dashboardAiInsights = [
  "Leads do Instagram estão convertendo melhor pela manhã.",
  "Mensagens com CTA objetivo tiveram 21% mais resposta hoje.",
  "Existem 3 oportunidades com risco de esfriar até o fim da tarde.",
];

export const dashboardActivityFeed = [
  {
    title: "Carlos Mendes respondeu",
    detail: "Perguntou sobre prazo de implantação e quer retorno hoje.",
    time: "há 8 min",
  },
  {
    title: "IA marcou 3 leads como quentes",
    detail: "Com base no tempo de resposta e intenção de compra.",
    time: "há 16 min",
  },
  {
    title: "Novo lead entrou pelo anúncio",
    detail: "Studio A7 chegou pela campanha de WhatsApp.",
    time: "há 29 min",
  },
  {
    title: "Follow-up concluído",
    detail: "Mateus Silva recebeu a nova proposta com link de pagamento.",
    time: "há 42 min",
  },
];

export const crmFilterPills = [
  "Todos",
  "Quentes",
  "Sem resposta",
  "Proposta enviada",
  "Hoje",
  "Instagram Ads",
];

export const messageTemplateLibrary = [
  {
    title: "Primeiro contato",
    detail: "Abertura curta para leads que chegaram pelo anúncio ou WhatsApp.",
  },
  {
    title: "Follow-up de proposta",
    detail: "Retomada com urgência leve para quem já recebeu condição comercial.",
  },
  {
    title: "Reengajamento",
    detail: "Mensagem para leads frios sem parecer insistência genérica.",
  },
  {
    title: "Fechamento",
    detail: "Texto com CTA claro para puxar decisão ainda no mesmo dia.",
  },
];

export const conversationThreads: ConversationThread[] = [
  {
    id: "thread-vanessa-rocha",
    leadId: "lead-vanessa-rocha",
    channel: "WhatsApp",
    status: "Pronto para fechar",
    unreadCount: 2,
    preview: "Se você conseguir melhorar a condição, eu consigo decidir hoje.",
    lastMessageAt: "09:12",
    aiSummary:
      "Lead em proposta enviada, com urgência alta e boa intenção de compra. O ponto central da conversa é condição comercial para fechamento ainda hoje.",
    suggestedAction: "Responder com condição especial e CTA de fechamento",
    activeSector: "Fechamento",
    sectorQueue: ["Comercial", "Fechamento", "Onboarding"],
    sectorOwner: "Luan Freire",
    messages: [
      {
        sender: "lead",
        text: "Gostei bastante da proposta, mas preciso de uma condição melhor para conseguir avançar hoje.",
        time: "08:54",
      },
      {
        sender: "seller",
        text: "Perfeito, Vanessa. Vou revisar isso agora e já te retorno com a melhor condição possível.",
        time: "08:58",
        sector: "Comercial",
      },
      {
        sender: "seller",
        text: "Passando para o setor de fechamento porque a lead já sinalizou decisão para hoje.",
        time: "09:00",
        sector: "Comercial",
        internal: true,
      },
      {
        sender: "lead",
        text: "Se você conseguir melhorar a condição, eu consigo decidir hoje.",
        time: "09:12",
      },
    ],
  },
  {
    id: "thread-clinica-nexo",
    leadId: "lead-clinica-nexo",
    channel: "WhatsApp",
    status: "Aguardando resposta",
    unreadCount: 0,
    preview: "Pode me resumir a forma mais simples de seguir com isso?",
    lastMessageAt: "Ontem, 18:40",
    aiSummary:
      "Conversa esfriou depois da proposta. O lead ainda parece interessado, mas precisa de uma retomada objetiva e sem peso.",
    suggestedAction: "Enviar retomada curta às 13:00",
    activeSector: "Comercial",
    sectorQueue: ["Comercial", "Fechamento", "Onboarding"],
    sectorOwner: "Jeffe",
    messages: [
      {
        sender: "seller",
        text: "Enviei a proposta com os principais cenários para você comparar com calma.",
        time: "Ontem, 17:55",
        sector: "Comercial",
      },
      {
        sender: "lead",
        text: "Pode me resumir a forma mais simples de seguir com isso?",
        time: "Ontem, 18:40",
      },
      {
        sender: "ai",
        text: "Sugestão: retomar com mensagem curta, destacando simplicidade e próximo passo.",
        time: "Hoje, 08:10",
      },
    ],
  },
  {
    id: "thread-carlos-mendes",
    leadId: "lead-carlos-mendes",
    channel: "WhatsApp",
    status: "Em andamento",
    unreadCount: 1,
    preview: "Qual seria o prazo real de implantação no meu caso?",
    lastMessageAt: "há 8 min",
    aiSummary:
      "Lead com boa intenção, mas travado por dúvida operacional. Resposta clara sobre prazo pode destravar o avanço da conversa.",
    suggestedAction: "Responder com prazo e onboarding simplificado",
    activeSector: "Comercial",
    sectorQueue: ["Comercial", "Fechamento", "Onboarding"],
    sectorOwner: "Jeffe",
    messages: [
      {
        sender: "lead",
        text: "Gostei da ideia, mas preciso entender se a implantação não vai virar mais trabalho para o time.",
        time: "09:47",
      },
      {
        sender: "seller",
        text: "Faz sentido. Posso te mostrar o caminho mais simples de começar sem travar a rotina.",
        time: "09:50",
        sector: "Comercial",
      },
      {
        sender: "lead",
        text: "Qual seria o prazo real de implantação no meu caso?",
        time: "há 8 min",
      },
    ],
  },
  {
    id: "thread-studio-a7",
    leadId: "lead-studio-a7",
    channel: "Instagram",
    status: "Aguardando resposta",
    unreadCount: 1,
    preview: "Quero entender melhor como isso funciona no dia a dia.",
    lastMessageAt: "há 29 min",
    aiSummary:
      "Lead novo vindo de anúncio, com curiosidade real e boa janela para primeiro contato ainda pela manhã.",
    suggestedAction: "Abrir conversa com explicação curta e CTA",
    activeSector: "Comercial",
    sectorQueue: ["Comercial", "Fechamento", "Onboarding"],
    sectorOwner: "Jeffe",
    messages: [
      {
        sender: "lead",
        text: "Quero entender melhor como isso funciona no dia a dia.",
        time: "há 29 min",
      },
      {
        sender: "ai",
        text: "Sugestão: responder com visão prática e convite para continuar no WhatsApp.",
        time: "há 21 min",
      },
    ],
  },
];
