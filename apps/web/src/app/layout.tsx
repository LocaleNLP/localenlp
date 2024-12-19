import "@localenlp/ui/globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Provider as AnalyticsProvider } from "@localenlp/analytics/client";
import { cn } from "@localenlp/ui/cn";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import localFont from "next/font/local";

const DepartureMono = localFont({
  src: "../fonts/DepartureMono-Regular.woff2",
  variable: "--font-departure-mono",
});

export const metadata: Metadata = {
metadataBase: new URL("https://localenlp.com"),
title: "LocaleNLP",
description:
  "LocaleNLP is revolutionizing digital communication in Africa with cutting-edge NLP solutions tailored for underserved languages. Explore our tools for text translation, speech recognition, and AI-powered linguistic solutions, driving inclusivity and empowering communities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          `${DepartureMono.variable} ${GeistSans.variable} ${GeistMono.variable}`,
          "antialiased dark",
        )}
      >
        <Header />
        {children}
        <Footer />

        <AnalyticsProvider />
      </body>
    </html>
  );
}
