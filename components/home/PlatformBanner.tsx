"use client";

import { ExternalLink, Server, Mail, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function PlatformBanner() {
  const handleVisit = () => {
    window.open('https://n8n.magicagi.top', '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 border border-white/10"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          {/* Icon */}
          <div className="shrink-0">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
              <Server className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-white">
                n8n 在线平台
              </h3>
              <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs font-medium rounded-full">
                免费试用
              </span>
            </div>
            <p className="text-gray-300">
              无需本地安装，在线体验 n8n 自动化工作流。上传模板、调试运行、一键部署。
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>邮箱申请注册</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Shield className="w-4 h-4 text-green-400" />
                <span>独立工作区</span>
              </div>
              <div className="flex items-center gap-2 text-amber-400">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>需境外 IP 访问</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="shrink-0">
            <button
              onClick={handleVisit}
              className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-xl transition-all shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30"
            >
              访问平台
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
