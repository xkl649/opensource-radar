import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/components/lang-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { datasetMeta } from "@/lib/data";
import { messages } from "@/lib/i18n";

export const metadata: Metadata = {
  title: {
    default: `${messages.zh["site.name"]} · ${messages.en["site.name"]}`,
    template: `%s · ${messages.zh["site.name"]}`,
  },
  description: messages.zh["site.description"],
  keywords: [
    "开源项目",
    "开源雷达",
    "AI 开源",
    "机器人开源",
    "智能硬件",
    "open source",
    "robotics",
    "embedded",
  ],
  openGraph: {
    title: `${messages.zh["site.name"]} · ${messages.en["site.name"]}`,
    description: messages.zh["site.description"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <LangProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter meta={datasetMeta} />
        </LangProvider>
      </body>
    </html>
  );
}
