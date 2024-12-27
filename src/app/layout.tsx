import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { ThemeProvider } from '@/providers/theme-provider'
import { AOSProvider } from '@/providers/AOSProvider'
import { Red_Hat_Display as RedHatDisplay } from 'next/font/google'
import { siteConfig } from '@/config'
import { Metadata } from 'next'
import '@/assets/css/global.css'

const redHatDisplay = RedHatDisplay({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: ['LinkJr', 'Facomp', 'UFPA', 'Castanhal', 'Pará', 'Tecnologia'],
  authors: [{ name: 'LinkJr', url: siteConfig.url }],
  creator: 'LinkJr',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={redHatDisplay.className}
      suppressHydrationWarning
    >
      <body className="relative h-full antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AOSProvider>
            <div className="flex min-h-screen w-full flex-col">
              <Navbar />
              <main>{children}</main>
              <Footer />
            </div>
          </AOSProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
