"use client";

import { useState, useMemo, useEffect } from "react";
import { Search, Filter, Upload, Box, Tag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import workflowsData from "@/data/workflows.json";

// Components
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CategoryGrid from "@/components/home/CategoryGrid";
import ApplySection from "@/components/home/ApplySection";
import ServicesSection from "@/components/home/ServicesSection";
import ImportModal from "@/components/workflow/ImportModal";
import DonateModal from "@/components/home/DonateModal";

interface Workflow {
  id: string;
  name: string;
  description: string;
  nodeCount: number;
  nodeTypes: string[];
  category: string;
  categoryName: string;
  categoryIcon: string;
  categoryColor: string;
  tags: string[];
  fileName: string;
  filePath: string;
  source: string;
}

interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  count: number;
}

const data = workflowsData as {
  workflows: Workflow[];
  categories: Category[];
  totalCount: number;
  lastUpdated: string;
  version: string;
};

// 节点类型颜色
const NODE_COLORS: Record<string, string> = {
  httprequest: "bg-blue-500/20 text-blue-400",
  webhook: "bg-green-500/20 text-green-400",
  agent: "bg-purple-500/20 text-purple-400",
  openai: "bg-emerald-500/20 text-emerald-400",
  code: "bg-yellow-500/20 text-yellow-400",
  function: "bg-orange-500/20 text-orange-400",
  if: "bg-pink-500/20 text-pink-400",
  set: "bg-cyan-500/20 text-cyan-400",
  telegram: "bg-blue-400/20 text-blue-300",
  slack: "bg-purple-400/20 text-purple-300",
  discord: "bg-indigo-400/20 text-indigo-300",
  default: "bg-gray-500/20 text-gray-400",
};

function getNodeColor(nodeType: string): string {
  const type = nodeType.toLowerCase();
  for (const [key, value] of Object.entries(NODE_COLORS)) {
    if (type.includes(key)) return value;
  }
  return NODE_COLORS.default;
}

function getNodeShortName(nodeType: string): string {
  if (!nodeType) return "Unknown";
  const parts = nodeType.split(".");
  const name = parts[parts.length - 1] || nodeType;
  return name
    .replace(/^lmChat/, "")
    .replace(/Tool$/, "")
    .replace(/([A-Z])/g, " $1")
    .trim()
    .slice(0, 15);
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("workflows");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [importModalOpen, setImportModalOpen] = useState(false);
  const [donateModalOpen, setDonateModalOpen] = useState(false);
  const [selectedWorkflow, setSelectedWorkflow] = useState<Workflow | null>(null);
  const [isDark, setIsDark] = useState(true);
  const [displayCount, setDisplayCount] = useState(60);

  // 主题切换
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  // 禁用右键菜单和开发者工具快捷键
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
        (e.ctrlKey && e.key === 'U')
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // 提取所有唯一标签
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    data.workflows.forEach((w) => w.tags.forEach((t) => tags.add(t)));
    return Array.from(tags).sort();
  }, []);

  // 过滤工作流
  const filteredWorkflows = useMemo(() => {
    return data.workflows.filter((workflow) => {
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        !searchQuery ||
        workflow.name.toLowerCase().includes(searchLower) ||
        workflow.description.toLowerCase().includes(searchLower) ||
        workflow.tags.some((t) => t.toLowerCase().includes(searchLower)) ||
        workflow.nodeTypes.some((n) => n.toLowerCase().includes(searchLower));

      const matchesCategory =
        selectedCategory === "all" || workflow.category === selectedCategory;

      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => workflow.tags.includes(tag));

      return matchesSearch && matchesCategory && matchesTags;
    });
  }, [searchQuery, selectedCategory, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // 切换分类/搜索时重置显示数量
  useEffect(() => {
    setDisplayCount(60);
  }, [selectedCategory, searchQuery, selectedTags]);

  const handleImport = (workflow: Workflow) => {
    setSelectedWorkflow(workflow);
    setImportModalOpen(true);
  };

  return (
    <div className={`min-h-screen transition-colors ${isDark ? "bg-gradient-to-br from-n8n-darker via-n8n-dark to-n8n-darker" : "bg-gradient-to-br from-gray-50 via-white to-gray-100"}`}>
      <Header
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onDonateClick={() => setDonateModalOpen(true)}
        isDark={isDark}
        onThemeToggle={() => setIsDark(!isDark)}
      />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Tab Content */}
        {activeTab === "workflows" && (
          <>
            {/* Hero Section */}
            <section className="text-center mb-10">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
                <span className="gradient-text">2000+</span> n8n 自动化工作流模板
              </h2>
              <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                按使用场景分类，一键导入到你的 n8n 实例
              </p>
            </section>

            {/* Category Grid */}
            <section className="mb-8">
              <h3 className={`text-lg font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>按场景浏览</h3>
              <CategoryGrid
                categories={data.categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
            </section>

            {/* Search & Filters */}
            <section className="mb-8 space-y-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="搜索工作流名称、标签、节点类型..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`search-input w-full pl-12 pr-4 py-3 border rounded-xl placeholder-gray-500 focus:outline-none focus:border-n8n-orange/50 transition-all ${
                    isDark
                      ? "bg-n8n-gray/50 border-white/10 text-white"
                      : "bg-white border-gray-300 text-gray-900"
                  }`}
                />
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-lg transition-colors ${
                    showFilters ? "bg-n8n-orange text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  <Filter className="w-5 h-5" />
                </button>
              </div>

              {/* Tags Filter */}
              <AnimatePresence>
                {showFilters && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className={`p-4 rounded-xl border ${isDark ? "bg-n8n-gray/30 border-white/5" : "bg-gray-50 border-gray-200"}`}>
                      <div className="flex items-center gap-2 mb-3">
                        <Tag className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-400">标签筛选</span>
                        {selectedTags.length > 0 && (
                          <button
                            onClick={() => setSelectedTags([])}
                            className="text-xs text-n8n-orange hover:underline"
                          >
                            清除
                          </button>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {allTags.map((tag) => (
                          <button
                            key={tag}
                            onClick={() => toggleTag(tag)}
                            className={`px-3 py-1 rounded-full text-xs transition-all ${
                              selectedTags.includes(tag)
                                ? "bg-n8n-orange text-white"
                                : isDark
                                ? "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                            }`}
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </section>

            {/* Results Count */}
            <div className="mb-6 flex items-center justify-between">
              <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                找到 <span className={`font-medium ${isDark ? "text-white" : "text-gray-900"}`}>{filteredWorkflows.length}</span> 个工作流
              </p>
              <p className="text-xs text-gray-500">
                更新于 {new Date(data.lastUpdated).toLocaleDateString("zh-CN")}
              </p>
            </div>

            {/* Workflows Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredWorkflows.slice(0, displayCount).map((workflow, index) => (
                <motion.div
                  key={workflow.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(index * 0.02, 0.5) }}
                  className={`workflow-card group rounded-2xl border overflow-hidden ${
                    isDark
                      ? "bg-gradient-to-br from-n8n-gray/50 to-n8n-gray/30 border-white/5"
                      : "bg-white border-gray-200 shadow-sm"
                  }`}
                >
                  {/* Card Header */}
                  <div className={`p-5 border-b ${isDark ? "border-white/5" : "border-gray-100"}`}>
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className={`font-semibold group-hover:text-n8n-orange transition-colors line-clamp-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                        {workflow.name}
                      </h3>
                      <span className="shrink-0 text-lg" title={workflow.categoryName}>
                        {workflow.categoryIcon}
                      </span>
                    </div>
                    <p className={`text-sm line-clamp-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                      {workflow.description}
                    </p>
                  </div>

                  {/* Node Types */}
                  <div className="p-5 space-y-4">
                    <div className="flex items-center gap-2">
                      <Box className="w-4 h-4 text-gray-500" />
                      <span className="text-xs text-gray-500">
                        {workflow.nodeCount} 个节点
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {workflow.nodeTypes.slice(0, 4).map((nodeType, i) => (
                        <span
                          key={i}
                          className={`node-badge ${getNodeColor(nodeType)}`}
                        >
                          {getNodeShortName(nodeType)}
                        </span>
                      ))}
                      {workflow.nodeTypes.length > 4 && (
                        <span className="node-badge bg-gray-500/20 text-gray-400">
                          +{workflow.nodeTypes.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Tags */}
                    {workflow.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {workflow.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className={`px-2 py-0.5 text-xs rounded ${isDark ? "bg-white/5 text-gray-400" : "bg-gray-100 text-gray-600"}`}
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Card Footer */}
                  <div className={`px-5 py-3 border-t flex items-center justify-between ${isDark ? "bg-white/2 border-white/5" : "bg-gray-50 border-gray-100"}`}>
                    <span className="text-xs text-gray-500">{workflow.categoryName}</span>
                    <button
                      onClick={() => handleImport(workflow)}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-n8n-orange/20 hover:bg-n8n-orange text-n8n-orange hover:text-white text-xs font-medium rounded-lg transition-all"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      导入
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Load More Button */}
            {filteredWorkflows.length > displayCount && (
              <div className="mt-8 text-center">
                <button
                  onClick={() => setDisplayCount(prev => prev + 60)}
                  className="px-6 py-3 bg-n8n-orange/20 hover:bg-n8n-orange text-n8n-orange hover:text-white font-medium rounded-xl transition-all"
                >
                  加载更多（还有 {filteredWorkflows.length - displayCount} 个）
                </button>
              </div>
            )}

            {/* Empty State */}
            {filteredWorkflows.length === 0 && (
              <div className="text-center py-20">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${isDark ? "bg-n8n-gray/50" : "bg-gray-100"}`}>
                  <Search className="w-10 h-10 text-gray-600" />
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                  未找到匹配的工作流
                </h3>
                <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                  尝试调整搜索关键词或筛选条件
                </p>
              </div>
            )}
          </>
        )}

        {activeTab === "apply" && <ApplySection />}

        {activeTab === "services" && <ServicesSection />}
      </main>

      <Footer />

      {/* Modals */}
      <ImportModal
        workflow={selectedWorkflow}
        isOpen={importModalOpen}
        onClose={() => setImportModalOpen(false)}
        onNavigateToApply={() => setActiveTab("apply")}
      />
      <DonateModal
        isOpen={donateModalOpen}
        onClose={() => setDonateModalOpen(false)}
      />
    </div>
  );
}
