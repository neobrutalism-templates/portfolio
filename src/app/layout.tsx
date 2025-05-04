import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Nav from '@/components/nav'
import { ViewTransitions } from 'next-view-transitions'
import { ThemeProvider } from '@/components/theme-provider'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nufar Galin',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ViewTransitions>
      <html suppressHydrationWarning lang="en">
        <head>
          <meta
            httpEquiv="Content-Security-Policy"
            content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https:; font-src 'self' data: https:; connect-src 'self' https:;"
          />
        </head>
        <body className={montserrat.className}>
          <ThemeProvider attribute="class" disableTransitionOnChange>
            <Nav />
            <main className="text-foreground mx-auto w-[750px] max-w-full px-5 pt-28 pb-10 min-h-screen">
              {children}
            </main>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  )
}
