import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/components/lang-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { datasetMeta } from "@/lib/data";
import { messages } from "@/lib/i18n";

export const metadata: Metadata = {
  title: {
    default: `${messages.en["site.name"]} · ${messages.zh["site.name"]}`,
    template: `%s · ${messages.en["site.name"]}`,
  },
  description: messages.en["site.description"],
  keywords: [
    "open source",
    "open source radar",
    "AI",
    "robotics",
    "embedded",
    "开源项目",
    "开源雷达",
    "智能硬件",
  ],
  openGraph: {
    title: `${messages.en["site.name"]} · ${messages.zh["site.name"]}`,
    description: messages.en["site.description"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
