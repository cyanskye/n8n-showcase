"use client";

import { ExternalLink, Play, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

// 推荐服务配置（7个卡片 = 5个CPS + 1个Zeabur + 1个课程）
const SERVICES = [
  {
    id: 'zhipu',
    name: '智谱 GLM Coding',
    description: 'Claude Code、Cline 等 10+ 编程工具无缝支持，"码力"全开！',
    url: 'https://www.bigmodel.cn/claude-code?ic=IDS4NVUWUH',
    tag: 'AI 编程',
    color: 'from-blue-500 to-indigo-600',
    icon: '🤖'
  },
  {
    id: 'zeabur',
    name: 'Zeabur 一键部署',
    description: '跟着 B 站视频 5 分钟光速搭建 n8n，新手尝鲜首选！深度使用推荐本地部署。',
    url: 'https://zeabur.com/referral?referralCode=cyanskye&utm_source=cyanskye&utm_campaign=oss',
    tag: '快速部署',
    color: 'from-purple-500 to-violet-600',
    icon: '🚀',
    isZeabur: true
  },
  {
    id: 'aliyun',
    name: '阿里云百炼',
    description: '企业级 AI 应用开发平台，快速构建智能应用',
    url: 'https://www.aliyun.com/minisite/goods?userCode=oclxhd7y',
    tag: '云服务',
    color: 'from-orange-500 to-red-500',
    icon: '☁️'
  },
  {
    id: 'tencent',
    name: '腾讯混元大模型',
    description: '腾讯自研大模型，多场景应用，性能卓越',
    url: 'https://curl.qcloud.com/XDLOG0Ww',
    tag: 'AI 模型',
    color: 'from-blue-400 to-blue-600',
    icon: '🧠'
  },
  {
    id: 'anyrouter',
    name: 'Anyrouter',
    description: 'Claude Code 免费 API 调用，稳定快速',
    url: 'https://anyrouter.top/register?aff=SImJ',
    tag: 'API 服务',
    color: 'from-purple-500 to-pink-500',
    icon: '🔌'
  },
  {
    id: 'yunwu',
    name: '云雾 API',
    description: '国内大模型 API 中转站，多模型聚合',
    url: 'https://yunwu.ai/register?aff=IVX1',
    tag: 'API 服务',
    color: 'from-cyan-500 to-blue-500',
    icon: '🌐'
  },
  {
    id: 'course',
    name: 'n8n 光速入门课',
    description: '3 分钟教会你搭建自己的 n8n 运行环境，零基础快速上手！',
    url: 'https://www.bilibili.com/video/BV1wSyUBJE3F/',
    tag: '免费教程',
    color: 'from-pink-500 to-rose-500',
    icon: '🎬',
    isCourse: true
  }
];

export default function ServicesSection() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
          💎 推荐服务
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          精选 AI 服务与学习资源，助力你的自动化之旅
        </p>
      </motion.div>

      {/* 服务卡片网格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {SERVICES.map((service, index) => (
          <motion.a
            key={service.id}
            href={service.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group block p-5 bg-gray-50 dark:bg-n8n-gray/30 hover:bg-gray-100 dark:hover:bg-n8n-gray/50 border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/10 rounded-xl transition-all"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{service.icon}</span>
                <span className={`px-2.5 py-1 bg-gradient-to-r ${service.color} text-white text-xs font-medium rounded-full`}>
                  {service.tag}
                </span>
              </div>
              {service.isCourse ? (
                <Play className="w-4 h-4 text-gray-500 group-hover:text-pink-400 transition-colors" />
              ) : (
                <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
              )}
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-n8n-orange transition-colors mb-1">
              {service.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
              {service.description}
            </p>
          </motion.a>
        ))}
      </div>

      {/* B站主页链接 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-center p-6 bg-gradient-to-r from-pink-500/10 to-rose-500/10 border border-pink-500/20 rounded-xl"
      >
        <div className="flex items-center justify-center gap-2 mb-3">
          <BookOpen className="w-5 h-5 text-pink-400" />
          <h3 className="font-semibold text-gray-900 dark:text-white">
            更多教程内容
          </h3>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          关注 B 站频道，获取更多 n8n 自动化教程和实战案例
        </p>
        <a
          href="https://space.bilibili.com/46322186"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-lg transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
            <path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.659.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906L17.813 4.653zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773H5.333zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373z"/>
          </svg>
          访问 B 站主页
        </a>
      </motion.div>
    </div>
  );
}
