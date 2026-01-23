"use client";

import { useState } from "react";
import { Server, Wrench, CheckCircle, Clock, Shield, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

type ApplyType = "trial" | "deploy" | null;

export default function ApplySection() {
  const [selectedType, setSelectedType] = useState<ApplyType>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleTrialApply = () => {
    const subject = encodeURIComponent("申请 n8n 在线体验账号");
    const body = encodeURIComponent(`神奇桑桑，你好

我希望申请 n8n 在线体验账号。

我已了解以下条款：
- 体验期最长 15 天
- 数据沙箱隔离，到期自动清理
- API 密钥需自己准备，仅供本人使用
- 需要自备网络访问条件

期待开通！`);

    window.open(`mailto:magicsang666@gmail.com?subject=${subject}&body=${body}`, "_blank");
    setSubmitted(true);
  };

  const handleDeployApply = () => {
    const subject = encodeURIComponent("咨询 n8n 远程部署服务");
    const body = encodeURIComponent(`神奇桑桑，你好

我希望咨询 n8n 远程部署服务。

【我的需求】
（请简要描述你的使用场景和需求）



【预算范围】
（请填写你愿意支付的酬劳，如：100-200 元）



期待你的回复！`);

    window.open(`mailto:magicsang666@gmail.com?subject=${subject}&body=${body}`, "_blank");
    setSubmitted(true);
  };

  const resetForm = () => {
    setSelectedType(null);
    setSubmitted(false);
  };

  // 提交成功状态
  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-8 bg-green-500/10 border border-green-500/20 rounded-xl text-center"
        >
          <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">
            邮件已准备就绪！
          </h3>
          <p className="text-gray-400 mb-4">
            请在弹出的邮件客户端中发送邮件，我会尽快回复
          </p>
          <button
            onClick={resetForm}
            className="text-sm text-n8n-orange hover:underline"
          >
            返回
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl font-bold text-white mb-3">
          🚀 选择你需要的服务
        </h2>
        <p className="text-gray-400">
          快速体验或专属部署，按需选择
        </p>
      </motion.div>

      {/* 两个选项卡片 */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* 在线体验 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          onClick={() => setSelectedType("trial")}
          className={`cursor-pointer p-6 rounded-xl border transition-all ${
            selectedType === "trial"
              ? "bg-blue-500/20 border-blue-500/50 shadow-lg shadow-blue-500/10"
              : "bg-n8n-gray/30 border-white/5 hover:border-white/20"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className={`p-3 rounded-xl ${selectedType === "trial" ? "bg-blue-500/30" : "bg-white/5"}`}>
              <Server className={`w-6 h-6 ${selectedType === "trial" ? "text-blue-400" : "text-gray-400"}`} />
            </div>
            <div>
              <h3 className="font-semibold text-white">在线体验</h3>
              <p className="text-xs text-green-400">免费</p>
            </div>
          </div>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-400" />
              最长 15 天体验期
            </li>
            <li className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-blue-400" />
              沙箱隔离，到期自动清理
            </li>
            <li className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-400" />
              需自备网络访问条件 + API
            </li>
          </ul>
        </motion.div>

        {/* 远程部署 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          onClick={() => setSelectedType("deploy")}
          className={`cursor-pointer p-6 rounded-xl border transition-all ${
            selectedType === "deploy"
              ? "bg-purple-500/20 border-purple-500/50 shadow-lg shadow-purple-500/10"
              : "bg-n8n-gray/30 border-white/5 hover:border-white/20"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className={`p-3 rounded-xl ${selectedType === "deploy" ? "bg-purple-500/30" : "bg-white/5"}`}>
              <Wrench className={`w-6 h-6 ${selectedType === "deploy" ? "text-purple-400" : "text-gray-400"}`} />
            </div>
            <div>
              <h3 className="font-semibold text-white">远程部署</h3>
              <p className="text-xs text-purple-400">付费服务</p>
            </div>
          </div>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-purple-400" />
              专属 n8n 实例，长期使用
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-purple-400" />
              帮你搭建，省心省力
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-purple-400" />
              费用根据需求沟通
            </li>
          </ul>
        </motion.div>
      </div>

      {/* 申请按钮 */}
      {selectedType && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <button
            onClick={selectedType === "trial" ? handleTrialApply : handleDeployApply}
            className={`px-8 py-3 font-medium rounded-xl transition-all ${
              selectedType === "trial"
                ? "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            } text-white`}
          >
            {selectedType === "trial" ? "发送体验申请邮件" : "发送部署咨询邮件"}
          </button>
          <p className="mt-3 text-xs text-gray-500">
            点击后将打开邮件客户端
          </p>
          <p className="mt-2 text-xs text-gray-500">
            所有邮件均会在 24 小时内回复，感谢您的耐心等待
          </p>
        </motion.div>
      )}
    </div>
  );
}
