"use client";

import { useState } from "react";
import { Copy, Check, ExternalLink, FileJson, Info } from "lucide-react";
import Modal from "../ui/Modal";

interface Workflow {
  id: string;
  name: string;
  fileName: string;
}

interface ImportModalProps {
  workflow: Workflow | null;
  isOpen: boolean;
  onClose: () => void;
  onNavigateToApply?: () => void;
}

export default function ImportModal({ workflow, isOpen, onClose, onNavigateToApply }: ImportModalProps) {
  const [copied, setCopied] = useState(false);

  if (!workflow) return null;

  // 生成工作流 URL（需要替换为实际部署域名）
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const workflowUrl = `${baseUrl}/workflows/${workflow.id}.json`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(workflowUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('复制失败:', err);
    }
  };

  const handleApply = () => {
    onClose();
    onNavigateToApply?.();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="导入工作流到 n8n">
      <div className="space-y-6">
        {/* 工作流信息 */}
        <div className="flex items-center gap-3 p-4 bg-gray-100 dark:bg-white/5 rounded-xl">
          <div className="w-10 h-10 rounded-lg bg-n8n-orange/20 flex items-center justify-center">
            <FileJson className="w-5 h-5 text-n8n-orange" />
          </div>
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white">{workflow.name}</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">{workflow.fileName}</p>
          </div>
        </div>

        {/* URL 复制区域 */}
        <div>
          <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">工作流 URL</label>
          <div className="flex gap-2">
            <input
              readOnly
              value={workflowUrl}
              className="flex-1 px-4 py-2.5 bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-lg text-gray-900 dark:text-white text-sm font-mono truncate"
            />
            <button
              onClick={handleCopy}
              className={`px-4 py-2.5 rounded-lg font-medium transition-all flex items-center gap-2 ${
                copied
                  ? 'bg-green-500 text-white'
                  : 'bg-n8n-orange text-white hover:bg-n8n-orange/90'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  已复制
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  复制
                </>
              )}
            </button>
          </div>
        </div>

        {/* 导入步骤教程 */}
        <div className="space-y-3">
          <h4 className="font-medium text-gray-900 dark:text-white flex items-center gap-2">
            <Info className="w-4 h-4 text-blue-400" />
            如何导入到 n8n？
          </h4>
          <div className="space-y-2">
            {[
              '打开你的 n8n 实例（本地或在线平台）',
              '点击右上角 "..." 菜单',
              '选择 "Import from URL"',
              '粘贴上方复制的 URL',
              '点击 "Import" 完成导入'
            ].map((step, index) => (
              <div key={index} className="flex items-start gap-3 text-sm">
                <span className="shrink-0 w-6 h-6 rounded-full bg-n8n-orange/20 text-n8n-orange flex items-center justify-center font-medium">
                  {index + 1}
                </span>
                <span className="text-gray-700 dark:text-gray-300 pt-0.5">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 没有 n8n 实例的解决方案 - 左右两列布局 */}
        <div className="grid grid-cols-2 gap-3">
          {/* Zeabur 快速部署 */}
          <a
            href="https://zeabur.com/referral?referralCode=cyanskye&utm_source=cyanskye&utm_campaign=oss"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col p-4 bg-gradient-to-r from-purple-500/10 to-violet-500/10 border border-purple-500/20 rounded-xl hover:border-purple-500/40 transition-all"
          >
            <div className="shrink-0 w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center mb-3">
              <span className="text-xl">🚀</span>
            </div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-1">Zeabur 一键部署</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 flex-1">
              跟着 B 站视频 5 分钟光速搭建，新手尝鲜首选！
            </p>
          </a>

          {/* 申请体验入口 */}
          <div className="flex flex-col p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl hover:border-blue-500/40 transition-all">
            <div className="shrink-0 w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mb-3">
              <ExternalLink className="w-5 h-5 text-blue-400" />
            </div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-1">申请体验账号</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 flex-1">
              通过邮箱申请，24 小时内开通。
            </p>
            <button
              onClick={handleApply}
              className="w-full px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors"
            >
              前往申请 →
            </button>
          </div>
        </div>
        <p className="text-xs text-gray-500 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
          提示：需科学上网访问
        </p>
      </div>
    </Modal>
  );
}
