// 分类配置 - 按使用场景分类
export interface CategoryConfig {
  id: string;
  name: string;
  nameZh: string;
  icon: string;
  color: string;
  keywords: string[];      // 文件名关键词匹配
  nodePatterns: string[];  // 节点类型匹配
  priority: number;        // 匹配优先级（数字越小优先级越高）
}

export const CATEGORIES: CategoryConfig[] = [
  // 社交媒体平台（最高优先级）
  {
    id: 'twitter',
    name: 'Twitter/X',
    nameZh: 'Twitter/X',
    icon: '𝕏',
    color: 'from-gray-700 to-gray-900',
    keywords: ['twitter', 'tweet', 'x.com', 'x-'],
    nodePatterns: ['twitter', 'twitterV2'],
    priority: 1
  },
  {
    id: 'telegram',
    name: 'Telegram',
    nameZh: 'Telegram',
    icon: '✈️',
    color: 'from-blue-400 to-blue-600',
    keywords: ['telegram', 'tg-bot', 'tg_'],
    nodePatterns: ['telegram'],
    priority: 1
  },
  {
    id: 'youtube',
    name: 'YouTube',
    nameZh: 'YouTube',
    icon: '▶️',
    color: 'from-red-500 to-red-700',
    keywords: ['youtube', 'yt-', 'video'],
    nodePatterns: ['youtube'],
    priority: 1
  },
  {
    id: 'instagram',
    name: 'Instagram',
    nameZh: 'Instagram',
    icon: '📸',
    color: 'from-purple-500 to-pink-500',
    keywords: ['instagram', 'ig-', 'insta'],
    nodePatterns: ['instagram'],
    priority: 1
  },
  {
    id: 'discord',
    name: 'Discord',
    nameZh: 'Discord',
    icon: '💬',
    color: 'from-indigo-500 to-indigo-700',
    keywords: ['discord'],
    nodePatterns: ['discord'],
    priority: 1
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    nameZh: 'WhatsApp',
    icon: '💚',
    color: 'from-green-500 to-green-700',
    keywords: ['whatsapp', 'wa-'],
    nodePatterns: ['whatsapp'],
    priority: 1
  },
  {
    id: 'slack',
    name: 'Slack',
    nameZh: 'Slack',
    icon: '💼',
    color: 'from-purple-600 to-purple-800',
    keywords: ['slack'],
    nodePatterns: ['slack'],
    priority: 1
  },

  // 业务场景（中等优先级）
  {
    id: 'ai-llm',
    name: 'AI/LLM Applications',
    nameZh: 'AI/LLM 应用',
    icon: '🤖',
    color: 'from-emerald-500 to-emerald-700',
    keywords: ['ai', 'llm', 'gpt', 'openai', 'claude', 'gemini', 'deepseek', 'agent', 'rag', 'langchain', 'chatbot'],
    nodePatterns: ['openai', 'langchain', 'agent', 'lmChat', 'deepseek', 'anthropic', 'openRouter'],
    priority: 2
  },
  {
    id: 'ecommerce',
    name: 'Cross-Border E-commerce',
    nameZh: '跨境电商',
    icon: '🛒',
    color: 'from-orange-400 to-orange-600',
    keywords: ['shopify', 'woocommerce', 'amazon', 'ebay', 'aliexpress', 'ecommerce', 'e-commerce', 'order', 'product', 'inventory', 'store', 'shop'],
    nodePatterns: ['shopify', 'woocommerce', 'magento', 'wooCommerce'],
    priority: 2
  },
  {
    id: 'content-creation',
    name: 'Content Creation',
    nameZh: '内容创作',
    icon: '✍️',
    color: 'from-pink-400 to-pink-600',
    keywords: ['content', 'blog', 'article', 'post', 'writer', 'copywriting', 'seo-content', 'writing', 'create'],
    nodePatterns: ['wordpress', 'medium', 'ghost'],
    priority: 2
  },
  {
    id: 'data-processing',
    name: 'Data Processing',
    nameZh: '数据处理',
    icon: '📊',
    color: 'from-cyan-500 to-cyan-700',
    keywords: ['data', 'etl', 'transform', 'sync', 'migration', 'backup', 'csv', 'excel', 'json', 'database', 'sql'],
    nodePatterns: ['spreadsheet', 'postgres', 'mysql', 'mongodb', 'redis'],
    priority: 3
  },
  {
    id: 'invoice',
    name: 'Invoice Processing',
    nameZh: '发票处理',
    icon: '🧾',
    color: 'from-amber-500 to-amber-700',
    keywords: ['invoice', 'billing', 'payment', 'receipt', 'accounting', 'finance', 'expense'],
    nodePatterns: ['stripe', 'paypal', 'quickbooks', 'xero'],
    priority: 2
  },
  {
    id: 'seo',
    name: 'SEO Optimization',
    nameZh: 'SEO 优化',
    icon: '🔍',
    color: 'from-green-400 to-green-600',
    keywords: ['seo', 'keyword', 'serp', 'backlink', 'sitemap', 'ranking', 'search', 'google-search'],
    nodePatterns: [],
    priority: 2
  },
  {
    id: 'email',
    name: 'Email Automation',
    nameZh: '邮件自动化',
    icon: '📧',
    color: 'from-blue-500 to-blue-700',
    keywords: ['email', 'mail', 'gmail', 'outlook', 'newsletter', 'smtp', 'imap', 'mailchimp', 'sendgrid'],
    nodePatterns: ['gmail', 'emailSend', 'email', 'imap', 'smtp', 'mailchimp', 'sendGrid'],
    priority: 2
  },
  {
    id: 'document',
    name: 'Document Processing',
    nameZh: '文档处理',
    icon: '📄',
    color: 'from-slate-500 to-slate-700',
    keywords: ['pdf', 'document', 'doc', 'spreadsheet', 'excel', 'word', 'file', 'ocr'],
    nodePatterns: ['pdf', 'googleDocs', 'googleSheets', 'microsoftExcel'],
    priority: 3
  },
  {
    id: 'project-management',
    name: 'Project Management',
    nameZh: '项目管理',
    icon: '📋',
    color: 'from-violet-500 to-violet-700',
    keywords: ['project', 'task', 'todo', 'notion', 'trello', 'asana', 'jira', 'clickup', 'monday', 'airtable'],
    nodePatterns: ['notion', 'trello', 'asana', 'jira', 'clickUp', 'airtable', 'monday'],
    priority: 3
  },
  {
    id: 'crm-sales',
    name: 'CRM/Sales',
    nameZh: 'CRM/销售',
    icon: '💰',
    color: 'from-teal-500 to-teal-700',
    keywords: ['crm', 'sales', 'lead', 'customer', 'hubspot', 'salesforce', 'pipedrive', 'zoho', 'deal'],
    nodePatterns: ['hubspot', 'salesforce', 'pipedrive', 'zoho', 'activeCampaign'],
    priority: 3
  },

  // 兜底分类
  {
    id: 'other',
    name: 'Other',
    nameZh: '其他',
    icon: '📦',
    color: 'from-gray-500 to-gray-700',
    keywords: [],
    nodePatterns: [],
    priority: 99
  }
];

// CPS 推广链接配置
export const SPONSOR_LINKS = [
  {
    id: 'zhipu',
    name: '智谱 GLM Coding',
    description: 'Claude Code、Cline 等 10+ 编程工具无缝支持',
    url: 'https://www.bigmodel.cn/claude-code?ic=IDS4NVUWUH',
    tag: 'AI 编程',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    id: 'aliyun',
    name: '阿里云百炼',
    description: '企业级 AI 应用开发平台',
    url: 'https://www.aliyun.com/minisite/goods?userCode=oclxhd7y',
    tag: '云服务',
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'tencent',
    name: '腾讯混元大模型',
    description: '腾讯自研大模型，多场景应用',
    url: 'https://curl.qcloud.com/XDLOG0Ww',
    tag: 'AI 模型',
    color: 'from-blue-400 to-blue-600'
  },
  {
    id: 'anyrouter',
    name: 'Anyrouter',
    description: 'Claude Code 免费 API 调用',
    url: 'https://anyrouter.top/register?aff=SImJ',
    tag: 'API 服务',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'yunwu',
    name: '云雾 API',
    description: '国内大模型 API 中转站',
    url: 'https://yunwu.ai/register?aff=IVX1',
    tag: 'API 服务',
    color: 'from-cyan-500 to-blue-500'
  }
];

// 个人导流链接配置
export const PERSONAL_LINKS = {
  bilibili: 'https://space.bilibili.com/46322186',
  n8nTutorial: 'https://www.bilibili.com/video/BV1wSyUBJE3F/',
  n8nPlatform: 'https://n8n.magicagi.top'
};

// 获取分类配置
export function getCategoryById(id: string): CategoryConfig | undefined {
  return CATEGORIES.find(c => c.id === id);
}

// 获取所有分类（不含"其他"）
export function getMainCategories(): CategoryConfig[] {
  return CATEGORIES.filter(c => c.id !== 'other');
}
