export interface WorkflowNode {
  name: string;
  type: string;
  parameters?: Record<string, unknown>;
}

export interface Workflow {
  id: string;
  name: string;
  description?: string;
  nodes: WorkflowNode[];
  nodeCount: number;
  nodeTypes: string[];
  category: string;
  subcategory?: string;
  tags: string[];
  filePath: string;
  source: 'custom' | 'templates';
}

export interface Category {
  id: string;
  name: string;
  nameZh: string;
  count: number;
  icon: string;
  subcategories?: {
    id: string;
    name: string;
    count: number;
  }[];
}

export interface WorkflowsData {
  workflows: Workflow[];
  categories: Category[];
  totalCount: number;
  lastUpdated: string;
}

// Node type to display name mapping
export const NODE_TYPE_NAMES: Record<string, string> = {
  'n8n-nodes-base.httpRequest': 'HTTP 请求',
  'n8n-nodes-base.function': '函数',
  'n8n-nodes-base.code': '代码',
  'n8n-nodes-base.if': '条件判断',
  'n8n-nodes-base.switch': '多路分支',
  'n8n-nodes-base.set': '设置字段',
  'n8n-nodes-base.webhook': 'Webhook',
  'n8n-nodes-base.cron': '定时触发',
  'n8n-nodes-base.wait': '等待',
  'n8n-nodes-base.rssFeedRead': 'RSS 订阅',
  'n8n-nodes-base.formTrigger': '表单触发',
  'n8n-nodes-base.stickyNote': '便签',
  '@n8n/n8n-nodes-langchain.agent': 'AI Agent',
  '@n8n/n8n-nodes-langchain.lmChatOpenAi': 'OpenAI 聊天',
  '@n8n/n8n-nodes-langchain.lmChatDeepSeek': 'DeepSeek',
  '@n8n/n8n-nodes-langchain.agentTool': 'Agent 工具',
};

// Category icons
export const CATEGORY_ICONS: Record<string, string> = {
  'AI': '🤖',
  'Social': '📱',
  'Email': '📧',
  'Database': '🗄️',
  'DevOps': '⚙️',
  'Document': '📄',
  'Custom': '⭐',
  'SEO': '🔍',
  'Other': '📦',
};
