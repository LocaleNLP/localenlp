import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { cn } from "@/lib/utils"
import { Inter, Manrope } from "next/font/google"
import "@/styles/globals.css"
import { SiteFooter } from "@/components/site-footer"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
})

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
    "AI",
    "Translation",
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
          inter.variable,
          manrope.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1 w-full">
              <div className="container mx-auto">
                {children}
              </div>
            </main>
            <SiteFooter />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
