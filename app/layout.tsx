import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "n8n 工作流展示 | Workflow Showcase",
  description: "探索 2000+ n8n 自动化工作流模板，涵盖 AI、社交媒体、数据处理等多个领域",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}
