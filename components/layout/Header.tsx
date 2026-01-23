"use client";

import { Zap, Coffee } from "lucide-react";

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onDonateClick: () => void;
}

const TABS = [
  { id: "workflows", name: "工作流模板", icon: "📦" },
  { id: "apply", name: "申请体验", icon: "🚀" },
  { id: "services", name: "推荐服务", icon: "💎" },
];

export default function Header({ activeTab, onTabChange, onDonateClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-n8n-darker/80 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Row */}
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-n8n-orange to-orange-600 flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">n8n 工作流展示</h1>
              <p className="text-xs text-gray-400">2000+ 自动化模板</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onDonateClick}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-amber-400 hover:text-amber-300 hover:bg-amber-500/10 rounded-lg transition-colors"
            >
              <Coffee className="w-4 h-4" />
              <span className="hidden sm:inline">赞赏</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-1 -mb-px">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? "border-n8n-orange text-n8n-orange"
                  : "border-transparent text-gray-400 hover:text-white hover:border-gray-600"
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.name}</span>
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
