import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/header'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

// const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
// const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#10b981',
  colorScheme: 'light dark',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://books.examgalaxy.com/'),
  title: {
    default: 'Exam Galaxy - Free Ethiopian Textbooks & EuEE Exam Preparation',
    template: '%s | Exam Galaxy',
  },
  description: 'Download free Ethiopian high school textbooks for grades 9-12. Access Physics, Chemistry, Biology, Mathematics, English, History, Geography, Economics textbooks. Prepare for EuEE exam with Exam Galaxy mobile app.',
  keywords: 'Ethiopian textbooks, EuEE exam, Grade 9 textbooks, Grade 10 textbooks, Grade 11 textbooks, Grade 12 textbooks, Physics PDF, Chemistry PDF, Biology PDF, Mathematics PDF, English PDF, History, Geography, Economics, Exam Galaxy, free textbook download, Ethiopian education',
  authors: [{ name: 'Exam Galaxy' }],
  creator: 'Exam Galaxy',
  publisher: 'Exam Galaxy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://books.examgalaxy.com',
    siteName: 'Exam Galaxy',
    title: 'Exam Galaxy - Ethiopian Textbooks & EuEE Exam Preparation',
    description: 'Free Ethiopian textbook PDFs and EuEE exam preparation app for high school students',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Exam Galaxy - Free Ethiopian Textbook Downloads',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Exam Galaxy - Ethiopian Textbooks & EuEE Exam Preparation',
    description: 'Free Ethiopian textbook PDFs and EuEE exam preparation for grades 9-12',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="64dHM-uDm5DkSH7PjmVS7pyxn1CievmGIs1Byx95U-Q" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EducationalOrganization',
              name: 'Exam Galaxy',
              description: 'Free Ethiopian high school textbooks and EuEE exam preparation resources',
              url: 'https://books.examgalaxy.com',
              logo: 'https://books.examgalaxy.com/logo.png',
              sameAs: [
                'https://facebook.com/examgalaxy',
                'https://twitter.com/examgalaxy',
                'https://instagram.com/examgalaxy',
              ],
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'ETB',
                availability: 'https://schema.org/InStock',
              },
            }),
          }}
        />
      </head>
      {/* <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}> */}
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
