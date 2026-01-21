"use client";

import { Heart } from "lucide-react";

// CPS 快速链接
const QUICK_LINKS = [
  { name: "智谱", url: "https://www.bigmodel.cn/claude-code?ic=IDS4NVUWUH" },
  { name: "阿里云", url: "https://www.aliyun.com/minisite/goods?userCode=oclxhd7y" },
  { name: "腾讯混元", url: "https://curl.qcloud.com/XDLOG0Ww" },
  { name: "Anyrouter", url: "https://anyrouter.top/register?aff=SImJ" },
  { name: "云雾API", url: "https://yunwu.ai/register?aff=IVX1" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-white/5 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* CPS 快速链接 */}
        <div className="flex flex-wrap justify-center gap-4 mb-6 text-xs">
          {QUICK_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-n8n-orange transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* 分隔线 */}
        <div className="border-t border-gray-200 dark:border-white/5 pt-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Left */}
            <div className="text-center md:text-left">
              <p className="text-gray-600 dark:text-gray-500 text-sm">
                n8n 工作流展示平台 · 2000+ 自动化模板
              </p>
              <p className="text-gray-500 dark:text-gray-600 text-xs mt-1">
                Made with <Heart className="w-3 h-3 inline text-red-400" /> by MagicAgi
              </p>
            </div>

            {/* Right - Links */}
            <div className="flex items-center justify-center gap-6 text-sm">
              <a
                href="https://n8n.magicagi.top"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                n8n 平台
              </a>
              <a
                href="https://space.bilibili.com/46322186"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-pink-400 transition-colors"
              >
                B 站
              </a>
              <a
                href="https://www.bilibili.com/video/BV1wSyUBJE3F/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-pink-400 transition-colors"
              >
                入门教程
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
