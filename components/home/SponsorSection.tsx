"use client";

import { ExternalLink, Coffee, Heart } from "lucide-react";
import { motion } from "framer-motion";

// CPS 推广链接配置（链接不可修改）
const SPONSOR_LINKS = [
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

export default function SponsorSection() {
  return (
    <section className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center justify-center gap-2">
          <Heart className="w-6 h-6 text-red-400" />
          推荐服务
        </h2>
        <p className="text-gray-400">优质 AI 服务推荐，助力你的自动化之旅</p>
      </div>

      {/* 推广卡片网格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {SPONSOR_LINKS.map((link, index) => (
          <motion.a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group block p-5 bg-n8n-gray/50 hover:bg-n8n-gray/70 border border-white/5 hover:border-white/10 rounded-xl transition-all"
          >
            <div className="flex items-start justify-between mb-3">
              <div className={`px-2.5 py-1 bg-gradient-to-r ${link.color} text-white text-xs font-medium rounded-full`}>
                {link.tag}
              </div>
              <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-semibold text-white group-hover:text-n8n-orange transition-colors mb-1">
              {link.name}
            </h3>
            <p className="text-sm text-gray-400">{link.description}</p>
          </motion.a>
        ))}
      </div>

      {/* B站视频推荐 */}
      <div className="bg-gradient-to-r from-pink-500/10 to-red-500/10 border border-pink-500/20 rounded-xl p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white mb-2">
              🎬 n8n 光速入门第一课
            </h3>
            <p className="text-gray-400 mb-3">
              3 分钟教会你搭建自己的 n8n 运行环境，零基础快速上手！
            </p>
            <a
              href="https://www.bilibili.com/video/BV1wSyUBJE3F/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white text-sm font-medium rounded-lg transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.659.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906L17.813 4.653zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773H5.333zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373z"/>
              </svg>
              观看视频教程
            </a>
          </div>
          <div className="shrink-0">
            <a
              href="https://space.bilibili.com/46322186"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-pink-400 transition-colors"
            >
              访问 B 站主页 →
            </a>
          </div>
        </div>
      </div>

      {/* 赞助提示 */}
      <div className="mt-8 text-center">
        <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
          <Coffee className="w-4 h-4" />
          如果觉得有帮助，欢迎请作者喝杯咖啡 ☕
        </p>
        {/* 二维码占位区域 */}
        <div className="mt-4 flex justify-center gap-4">
          <div className="w-24 h-24 bg-white/5 border border-dashed border-white/20 rounded-lg flex items-center justify-center text-xs text-gray-500">
            微信公众号
          </div>
          <div className="w-24 h-24 bg-white/5 border border-dashed border-white/20 rounded-lg flex items-center justify-center text-xs text-gray-500">
            微信支付
          </div>
          <div className="w-24 h-24 bg-white/5 border border-dashed border-white/20 rounded-lg flex items-center justify-center text-xs text-gray-500">
            支付宝
          </div>
        </div>
      </div>
    </section>
  );
}
