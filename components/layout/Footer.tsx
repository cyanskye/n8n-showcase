"use client";

import { useEffect } from "react";
import { Heart } from "lucide-react";

// 合并所有链接为一行
const ALL_LINKS = [
  { name: "智谱", url: "https://www.bigmodel.cn/claude-code?ic=IDS4NVUWUH" },
  { name: "阿里云", url: "https://www.aliyun.com/minisite/goods?userCode=oclxhd7y" },
  { name: "腾讯混元", url: "https://curl.qcloud.com/XDLOG0Ww" },
  { name: "Anyrouter", url: "https://anyrouter.top/register?aff=SImJ" },
  { name: "云雾API", url: "https://yunwu.ai/register?aff=IVX1" },
  { name: "n8n 平台", url: "https://n8n.magicagi.top" },
  { name: "B 站", url: "https://space.bilibili.com/46322186" },
  { name: "入门教程", url: "https://www.bilibili.com/video/BV1wSyUBJE3F/" },
];

export default function Footer() {
  // 加载不蒜子访客统计
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // 清理脚本
      const existingScript = document.querySelector('script[src*="busuanzi"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <footer className="border-t border-gray-200 dark:border-white/5 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* 合并的友情链接 */}
        <div className="flex flex-wrap justify-center gap-4 mb-6 text-xs">
          {ALL_LINKS.map((link) => (
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
          <div className="flex flex-col items-center gap-3">
            {/* 版权信息 + 年份 */}
            <p className="text-gray-600 dark:text-gray-500 text-sm">
              © {new Date().getFullYear()} MagicAgi · n8n 工作流展示平台
            </p>
            <p className="text-gray-500 dark:text-gray-600 text-xs">
              Made with <Heart className="w-3 h-3 inline text-red-400" /> by MagicAgi
            </p>
            {/* 访客计数 */}
            <p className="text-gray-400 dark:text-gray-600 text-xs">
              <span id="busuanzi_container_site_uv">
                第 <span id="busuanzi_value_site_uv" className="text-n8n-orange font-medium">--</span> 位访客
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
