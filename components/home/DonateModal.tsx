"use client";

import Image from "next/image";
import { Coffee, Heart } from "lucide-react";
import Modal from "../ui/Modal";

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DonateModal({ isOpen, onClose }: DonateModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="感谢支持 ❤️" size="sm">
      <div className="text-center space-y-6">
        <div className="flex items-center justify-center gap-2 text-amber-400">
          <Coffee className="w-8 h-8" />
          <span className="text-lg font-medium">请我喝杯咖啡</span>
        </div>

        <p className="text-gray-600 dark:text-gray-400 text-sm">
          如果这个项目对你有帮助，欢迎打赏支持！你的支持是我持续更新的动力 🙏
        </p>

        {/* 支付二维码 */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl">
            <div className="w-full aspect-square relative rounded-lg overflow-hidden mb-2">
              <Image
                src="/images/donate/WeiXinPayQrcode.jpg"
                alt="微信支付"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-xs text-gray-500">微信支付</p>
          </div>
          <div className="p-4 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl">
            <div className="w-full aspect-square relative rounded-lg overflow-hidden mb-2">
              <Image
                src="/images/donate/AlipayQrcode.png"
                alt="支付宝"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-xs text-gray-500">支付宝</p>
          </div>
        </div>

        {/* 公众号 */}
        <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
            关注公众号获取更多自动化技巧
          </p>
          <div className="w-32 h-32 mx-auto relative rounded-lg overflow-hidden">
            <Image
              src="/images/donate/gzhQrcode.png"
              alt="公众号二维码"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
          Made with <Heart className="w-3 h-3 text-red-400" /> by MagicAgi
        </p>
      </div>
    </Modal>
  );
}
