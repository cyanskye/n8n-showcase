const fs = require('fs');
const path = require('path');

// ==================== 分类配置 ====================
const CATEGORIES = [
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
  // 业务场景
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
    keywords: ['content', 'blog', 'article', 'post', 'writer', 'copywriting', 'writing', 'create'],
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

// 工作流来源目录
const WORKFLOW_SOURCES = [
  {
    path: '../XianYu/n8n-workflows-templates/Workflows',
    source: 'templates'
  }
];

// ==================== 分类算法 ====================
function classifyWorkflow(fileName, nodeTypes, filePath) {
  const fileNameLower = fileName.toLowerCase();
  const nodeTypesLower = nodeTypes.map(n => n.toLowerCase());
  const filePathLower = filePath.toLowerCase();

  let bestScore = 0;
  let bestCategory = CATEGORIES.find(c => c.id === 'other');

  for (const category of CATEGORIES) {
    let score = 0;

    // 1. 文件名关键词匹配（权重: 10）
    for (const keyword of category.keywords) {
      if (fileNameLower.includes(keyword.toLowerCase())) {
        score += 10;
      }
    }

    // 2. 节点类型匹配（权重: 8）
    for (const pattern of category.nodePatterns) {
      const patternLower = pattern.toLowerCase();
      for (const nodeType of nodeTypesLower) {
        if (nodeType.includes(patternLower)) {
          score += 8;
        }
      }
    }

    // 3. 目录结构匹配
    if (filePathLower.includes('/a3/')) {
      for (const keyword of category.keywords) {
        if (filePathLower.includes(keyword.toLowerCase())) {
          score += 6;
        }
      }

      // A3 子目录特殊映射
      const dirMappings = {
        'openai_and_llms': 'ai-llm',
        'ai_research_rag': 'ai-llm',
        'gmail_and_email': 'email',
        'instagram_twitter': 'instagram',
        'pdf_and_document': 'document',
        'database_and_storage': 'data-processing',
      };

      for (const [dirPattern, catId] of Object.entries(dirMappings)) {
        if (filePathLower.includes(dirPattern) && category.id === catId) {
          score += 15;
        }
      }
    }

    // 4. A1 目录 = SEO
    if (filePathLower.includes('/a1/') && category.id === 'seo') {
      score += 20;
    }

    // 5. A2 目录按节点名匹配
    if (filePathLower.includes('/a2/')) {
      for (const pattern of category.nodePatterns) {
        if (filePathLower.includes('/' + pattern.toLowerCase())) {
          score += 12;
        }
      }
    }

    // 应用优先级
    if (score > 0) {
      score = score * (100 - category.priority);
    }

    if (score > bestScore) {
      bestScore = score;
      bestCategory = category;
    }
  }

  return bestCategory;
}

// ==================== 辅助函数 ====================
function getNodeTypeName(type) {
  if (!type) return 'Unknown';
  const parts = type.split('.');
  return parts[parts.length - 1] || type;
}

function generateDescription(workflow, fileName) {
  const nodes = workflow.nodes || [];
  const nodeTypes = [...new Set(nodes.map(n => getNodeTypeName(n.type)))];
  const cleanName = fileName.replace(/\.json$/, '').replace(/[_-]/g, ' ');

  if (nodeTypes.length > 0) {
    return `使用 ${nodeTypes.slice(0, 3).join('、')} 等节点的自动化工作流`;
  }
  return `${cleanName} 自动化工作流`;
}

function extractTags(workflow, filePath, category) {
  const tags = new Set();
  const nodes = workflow.nodes || [];

  // 从节点类型提取标签
  const tagPatterns = {
    'OpenAI': ['openai', 'gpt'],
    'AI': ['langchain', 'agent', 'lmChat'],
    'DeepSeek': ['deepseek'],
    'Telegram': ['telegram'],
    'Slack': ['slack'],
    'Discord': ['discord'],
    'Twitter': ['twitter'],
    'Google': ['google', 'gmail'],
    'Notion': ['notion'],
    'Airtable': ['airtable'],
    'Webhook': ['webhook'],
    'HTTP': ['httpRequest'],
    'Agent': ['agent'],
  };

  nodes.forEach(node => {
    const type = (node.type || '').toLowerCase();
    for (const [tag, patterns] of Object.entries(tagPatterns)) {
      if (patterns.some(p => type.includes(p.toLowerCase()))) {
        tags.add(tag);
      }
    }
  });

  // 从文件名提取标签
  const fileName = path.basename(filePath).toLowerCase();
  if (fileName.includes('seo')) tags.add('SEO');
  if (fileName.includes('email') || fileName.includes('gmail')) tags.add('Email');
  if (fileName.includes('automat')) tags.add('Automation');
  if (fileName.includes('bot')) tags.add('Bot');

  return Array.from(tags);
}

function findJsonFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (!entry.name.startsWith('.') && entry.name !== 'node_modules') {
        findJsonFiles(fullPath, files);
      }
    } else if (entry.isFile() && entry.name.endsWith('.json')) {
      if (!entry.name.includes('package') && !entry.name.includes('tsconfig')) {
        files.push(fullPath);
      }
    }
  }

  return files;
}

function parseWorkflow(filePath, source) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const workflow = JSON.parse(content);

    if (!workflow.nodes || !Array.isArray(workflow.nodes)) {
      return null;
    }

    const nodes = workflow.nodes || [];
    const nodeTypes = [...new Set(nodes.map(n => n.type).filter(Boolean))];
    const fileName = path.basename(filePath);

    // 使用新的分类算法
    const category = classifyWorkflow(fileName, nodeTypes, filePath);
    const tags = extractTags(workflow, filePath, category);

    // 生成唯一 ID（使用文件名 + 部分路径哈希确保唯一性）
    const uniqueStr = fileName + '_' + filePath.split('/').slice(-3).join('_');
    const id = Buffer.from(uniqueStr).toString('base64').replace(/[^a-zA-Z0-9]/g, '').slice(0, 24);

    return {
      id: id,
      name: workflow.name || fileName.replace(/\.json$/, ''),
      description: generateDescription(workflow, fileName),
      nodes: nodes.slice(0, 10).map(n => ({
        name: n.name,
        type: n.type
      })),
      nodeCount: nodes.length,
      nodeTypes: nodeTypes.slice(0, 8),
      category: category.id,
      categoryName: category.nameZh,
      categoryIcon: category.icon,
      categoryColor: category.color,
      tags: tags,
      filePath: filePath,
      fileName: fileName,
      source: source
    };
  } catch (error) {
    console.error(`Error parsing ${filePath}:`, error.message);
    return null;
  }
}

// ==================== 主函数 ====================
function generateWorkflowsData() {
  console.log('🚀 开始生成工作流数据（新分类系统）...\n');

  const allWorkflows = [];
  const categoryStats = {};

  const baseDir = path.resolve(__dirname, '..');

  for (const source of WORKFLOW_SOURCES) {
    const sourceDir = path.resolve(baseDir, source.path);
    console.log(`📁 扫描目录: ${sourceDir}`);

    if (!fs.existsSync(sourceDir)) {
      console.log(`   ⚠️ 目录不存在，跳过\n`);
      continue;
    }

    const jsonFiles = findJsonFiles(sourceDir);
    console.log(`   找到 ${jsonFiles.length} 个 JSON 文件`);

    let validCount = 0;
    for (const file of jsonFiles) {
      const workflow = parseWorkflow(file, source.source);
      if (workflow) {
        allWorkflows.push(workflow);
        validCount++;

        // 统计分类
        const cat = workflow.category;
        if (!categoryStats[cat]) {
          const categoryConfig = CATEGORIES.find(c => c.id === cat);
          categoryStats[cat] = {
            id: cat,
            name: categoryConfig.nameZh,
            icon: categoryConfig.icon,
            color: categoryConfig.color,
            count: 0
          };
        }
        categoryStats[cat].count++;
      }
    }

    console.log(`   有效工作流: ${validCount} 个\n`);
  }

  // 生成分类列表（按数量排序）
  const categories = Object.values(categoryStats)
    .sort((a, b) => b.count - a.count);

  // 添加"全部"分类
  categories.unshift({
    id: 'all',
    name: '全部',
    icon: '🌐',
    color: 'from-n8n-orange to-orange-600',
    count: allWorkflows.length
  });

  const data = {
    workflows: allWorkflows,
    categories: categories,
    totalCount: allWorkflows.length,
    lastUpdated: new Date().toISOString(),
    version: '2.0.0'
  };

  // 写入数据文件
  const outputPath = path.resolve(__dirname, '../data/workflows.json');
  fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));

  // 复制工作流文件到 public 目录
  const publicWorkflowsDir = path.resolve(__dirname, '../public/workflows');
  if (!fs.existsSync(publicWorkflowsDir)) {
    fs.mkdirSync(publicWorkflowsDir, { recursive: true });
  }

  console.log('📦 复制工作流文件到 public/workflows...');
  let copiedCount = 0;
  for (const workflow of allWorkflows) {
    try {
      const content = fs.readFileSync(workflow.filePath, 'utf-8');
      const destPath = path.join(publicWorkflowsDir, workflow.id + '.json');
      fs.writeFileSync(destPath, content);
      copiedCount++;
    } catch (err) {
      // 跳过无法读取的文件
    }
  }
  console.log(`   已复制 ${copiedCount} 个文件\n`);

  console.log('✅ 数据生成完成!');
  console.log(`   总工作流数: ${allWorkflows.length}`);
  console.log(`   分类数: ${categories.length - 1}`);
  console.log(`   输出文件: ${outputPath}\n`);

  // 输出分类统计
  console.log('📊 分类统计:');
  categories.slice(1).forEach(cat => {
    console.log(`   ${cat.icon} ${cat.name}: ${cat.count} 个`);
  });
}

generateWorkflowsData();
