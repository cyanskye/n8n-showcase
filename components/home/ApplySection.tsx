"use client";

import { useState } from "react";
import { AlertCircle, Clock, User, Shield, CheckCircle, Server, Wrench, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ApplySection() {
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;

    // 构造 mailto 链接
    const subject = encodeURIComponent("申请体验 n8n 平台");
    const body = encodeURIComponent(`您好，

我希望申请体验 n8n 在线平台。

我已阅读并同意以下条款：
1. 账号仅限本人使用，不得共享给他人
2. API 密钥和账号充值由本人负责
3. 首次开通后 7 天内未登录将自动回收账号

期待您的回复！`);

    window.open(`mailto:magicsang666@gmail.com?subject=${subject}&body=${body}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl font-bold text-white mb-3">
          🚀 申请体验 n8n 在线平台
        </h2>
        <p className="text-gray-400">
          免费获取 n8n 在线实例，无需本地安装，邮箱申请后 24 小时内开通
        </p>
      </motion.div>

      {/* 平台说明 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="mb-6 p-5 bg-blue-500/10 border border-blue-500/20 rounded-xl"
      >
        <div className="flex items-start gap-3 mb-4">
          <Server className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
          <h3 className="font-semibold text-blue-400">平台说明</h3>
        </div>
        <ul className="space-y-3 text-sm">
          <li className="flex items-start gap-3 text-gray-300">
            <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
            <span>我们提供 <strong className="text-green-400">在线运行环境</strong>，您无需自己搭建服务器或安装软件</span>
          </li>
          <li className="flex items-start gap-3 text-gray-300">
            <Shield className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span>各种 <strong className="text-amber-400">API 密钥</strong>（如 OpenAI、Telegram Bot 等）需要您自己准备，平台不提供</span>
          </li>
          <li className="flex items-start gap-3 text-gray-300">
            <Clock className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
            <span>免费体验期限为 <strong className="text-purple-400">7 天</strong>，足够您熟悉平台和测试工作流</span>
          </li>
        </ul>
      </motion.div>

      {/* 深度使用说明 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08 }}
        className="mb-6 p-5 bg-purple-500/10 border border-purple-500/20 rounded-xl"
      >
        <div className="flex items-start gap-3 mb-4">
          <Wrench className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
          <h3 className="font-semibold text-purple-400">需要深度使用？</h3>
        </div>
        <div className="space-y-3 text-sm text-gray-300">
          <p>
            如果您需要 <strong className="text-purple-400">长期深度使用</strong>，但自己不会搭建 n8n 服务：
          </p>
          <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
            <MessageCircle className="w-4 h-4 text-n8n-orange shrink-0 mt-0.5" />
            <span>
              可以联系我，我可以帮你 <strong className="text-n8n-orange">远程搭建</strong> 专属的 n8n 实例，具体费用根据实际需求沟通
            </span>
          </div>
          <p className="text-xs text-gray-500">
            邮箱：magicsang666@gmail.com
          </p>
        </div>
      </motion.div>

      {/* 说明条款 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8 p-5 bg-amber-500/10 border border-amber-500/20 rounded-xl"
      >
        <div className="flex items-start gap-3 mb-4">
          <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <h3 className="font-semibold text-amber-400">申请须知（请仔细阅读）</h3>
        </div>
        <ul className="space-y-3 text-sm">
          <li className="flex items-start gap-3 text-gray-300">
            <User className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
            <span><strong>账号专属：</strong>开通的 n8n 账号仅限您本人使用，不支持共享给他人使用</span>
          </li>
          <li className="flex items-start gap-3 text-gray-300">
            <Shield className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
            <span><strong>自备资源：</strong>API 密钥（OpenAI 等）和相关账号充值需您自行处理，平台不提供</span>
          </li>
          <li className="flex items-start gap-3 text-gray-300">
            <Clock className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
            <span><strong>账号回收：</strong>首次开通后，若 <strong className="text-red-400">7 天内未登录</strong>，账号将被自动关闭回收</span>
          </li>
          <li className="flex items-start gap-3 text-gray-300">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span><strong>访问限制：</strong>需要 <strong className="text-amber-400">科学上网</strong> 才能访问</span>
          </li>
        </ul>
      </motion.div>

      {/* 申请表单 */}
      {!submitted ? (
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="p-6 bg-n8n-gray/30 border border-white/5 rounded-xl"
        >
          <div className="mb-6">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-gray-600 text-n8n-orange focus:ring-n8n-orange focus:ring-offset-0"
              />
              <span className="text-sm text-gray-400">
                我已阅读并同意上述申请须知，理解账号仅限本人使用、需自备 API 资源、7 天未登录将被回收
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={!agreed}
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-all"
          >
            发送申请邮件
          </button>

          <p className="mt-4 text-center text-xs text-gray-500">
            点击后将打开邮件客户端，发送至 magicsang666@gmail.com
          </p>
        </motion.form>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-8 bg-green-500/10 border border-green-500/20 rounded-xl text-center"
        >
          <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">
            申请邮件已准备就绪！
          </h3>
          <p className="text-gray-400 mb-4">
            请在弹出的邮件客户端中发送邮件，我们会尽快为您开通账号
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-sm text-n8n-orange hover:underline"
          >
            重新填写
          </button>
        </motion.div>
      )}
    </div>
  );
}
