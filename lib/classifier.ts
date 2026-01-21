import { CATEGORIES, CategoryConfig } from './categories';

interface ClassificationResult {
  category: CategoryConfig;
  score: number;
  matchedKeywords: string[];
  matchedNodes: string[];
}

/**
 * 智能分类工作流
 * 基于文件名、节点类型和目录结构进行多维度匹配
 */
export function classifyWorkflow(
  fileName: string,
  nodeTypes: string[],
  filePath: string
): CategoryConfig {
  const result = calculateBestCategory(fileName, nodeTypes, filePath);
  return result.category;
}

/**
 * 计算最佳分类（带详细得分）
 */
export function calculateBestCategory(
  fileName: string,
  nodeTypes: string[],
  filePath: string
): ClassificationResult {
  const fileNameLower = fileName.toLowerCase();
  const nodeTypesLower = nodeTypes.map(n => n.toLowerCase());
  const filePathLower = filePath.toLowerCase();

  const scores: ClassificationResult[] = [];

  for (const category of CATEGORIES) {
    let score = 0;
    const matchedKeywords: string[] = [];
    const matchedNodes: string[] = [];

    // 1. 文件名关键词匹配（权重: 10）
    for (const keyword of category.keywords) {
      if (fileNameLower.includes(keyword.toLowerCase())) {
        score += 10;
        matchedKeywords.push(keyword);
      }
    }

    // 2. 节点类型匹配（权重: 8 per match）
    for (const pattern of category.nodePatterns) {
      const patternLower = pattern.toLowerCase();
      for (const nodeType of nodeTypesLower) {
        if (nodeType.includes(patternLower)) {
          score += 8;
          matchedNodes.push(nodeType);
        }
      }
    }

    // 3. 目录结构匹配（基于原有 A3 子目录命名）
    // A3 目录下的子目录名称通常直接对应分类
    if (filePathLower.includes('/a3/')) {
      for (const keyword of category.keywords) {
        if (filePathLower.includes(keyword.toLowerCase())) {
          score += 6;
        }
      }

      // 特殊目录名映射
      const directoryMappings: Record<string, string> = {
        'openai_and_llms': 'ai-llm',
        'ai_research_rag': 'ai-llm',
        'gmail_and_email': 'email',
        'instagram_twitter': 'instagram',
        'pdf_and_document': 'document',
        'database_and_storage': 'data-processing',
        'forms_and_surveys': 'project-management',
        'hr_and_recruitment': 'crm-sales',
      };

      for (const [dirPattern, catId] of Object.entries(directoryMappings)) {
        if (filePathLower.includes(dirPattern) && category.id === catId) {
          score += 15;
        }
      }
    }

    // 4. A1 目录特殊处理 - SEO 工具
    if (filePathLower.includes('/a1/') && category.id === 'seo') {
      score += 20;
    }

    // 5. A2 目录处理 - 按节点名称的目录
    if (filePathLower.includes('/a2/')) {
      // A2 下的目录名通常是节点名，匹配节点模式
      for (const pattern of category.nodePatterns) {
        if (filePathLower.includes('/' + pattern.toLowerCase())) {
          score += 12;
        }
      }
    }

    // 应用优先级调整（优先级越小，权重越大）
    if (score > 0) {
      score = score * (100 - category.priority);
    }

    scores.push({
      category,
      score,
      matchedKeywords,
      matchedNodes
    });
  }

  // 按分数排序
  scores.sort((a, b) => b.score - a.score);

  // 如果最高分为0，返回"其他"分类
  if (scores[0].score === 0) {
    const otherCategory = CATEGORIES.find(c => c.id === 'other')!;
    return {
      category: otherCategory,
      score: 0,
      matchedKeywords: [],
      matchedNodes: []
    };
  }

  return scores[0];
}

/**
 * 从节点类型提取标签
 */
export function extractTagsFromNodes(nodeTypes: string[]): string[] {
  const tags = new Set<string>();

  const tagPatterns: Record<string, string[]> = {
    'OpenAI': ['openai', 'gpt'],
    'AI': ['langchain', 'agent', 'lmChat'],
    'DeepSeek': ['deepseek'],
    'Claude': ['anthropic', 'claude'],
    'Telegram': ['telegram'],
    'Slack': ['slack'],
    'Discord': ['discord'],
    'Twitter': ['twitter'],
    'Google': ['google', 'gmail'],
    'Notion': ['notion'],
    'Airtable': ['airtable'],
    'Webhook': ['webhook'],
    'HTTP': ['httpRequest', 'http'],
    'Agent': ['agent'],
    'RAG': ['rag', 'vector', 'embedding'],
    'Shopify': ['shopify'],
    'WordPress': ['wordpress'],
  };

  for (const nodeType of nodeTypes) {
    const nodeTypeLower = nodeType.toLowerCase();
    for (const [tag, patterns] of Object.entries(tagPatterns)) {
      if (patterns.some(p => nodeTypeLower.includes(p.toLowerCase()))) {
        tags.add(tag);
      }
    }
  }

  return Array.from(tags);
}

/**
 * 从文件名提取额外标签
 */
export function extractTagsFromFileName(fileName: string): string[] {
  const tags = new Set<string>();
  const fileNameLower = fileName.toLowerCase();

  const fileNameTags: Record<string, string[]> = {
    'SEO': ['seo'],
    'Email': ['email', 'mail', 'gmail'],
    'Automation': ['automat', 'auto'],
    'Bot': ['bot'],
    'Scraper': ['scrap', 'crawl'],
    'API': ['api'],
    'Sync': ['sync'],
    'Backup': ['backup'],
    'Report': ['report'],
    'Analytics': ['analytic', 'metric'],
  };

  for (const [tag, patterns] of Object.entries(fileNameTags)) {
    if (patterns.some(p => fileNameLower.includes(p))) {
      tags.add(tag);
    }
  }

  return Array.from(tags);
}
