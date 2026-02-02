import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sean Wi | Portfolio",
  description: "Personal portfolio and career records of Sean Wi.",
};

import { LanguageProvider } from "@/context/LanguageContext";
import { ViewModeProvider } from "@/context/ViewModeContext";
import ClientLayout from "@/components/layout/ClientLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ViewModeProvider>
          <LanguageProvider>
            <ClientLayout>
              {children}
            </ClientLayout>
          </LanguageProvider>
        </ViewModeProvider>
      </body>
    </html>
  );
}
