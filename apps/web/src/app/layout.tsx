import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { cn } from "@/lib/utils"
import { Inter } from "next/font/google"
import "@/styles/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: {
    default: "LocaleNLP - Breaking Language Barriers in Africa",
    template: "%s | LocaleNLP",
  },
  description:
    "LocaleNLP is building state-of-the-art language models for African languages",
  keywords: [
    "African languages",
    "NLP",
    "machine translation",
    "language technology",
    "AI",
  ],
  authors: [
    {
      name: "LocaleNLP",
      url: "https://localenlp.com",
    },
  ],
  creator: "LocaleNLP",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://localenlp.com",
    title: "LocaleNLP - Breaking Language Barriers in Africa",
    description:
      "LocaleNLP is building state-of-the-art language models for African languages",
    siteName: "LocaleNLP",
  },
  twitter: {
    card: "summary_large_image",
    title: "LocaleNLP - Breaking Language Barriers in Africa",
    description:
      "LocaleNLP is building state-of-the-art language models for African languages",
    creator: "@localenlp",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
