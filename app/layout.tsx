import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "idea精英汇 社团官网",
  description: "青年成长实践平台——活动实践、技能学习、专项项目与招新报名。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
