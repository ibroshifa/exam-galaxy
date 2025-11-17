import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#10b981',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://ethiotextbooks.com'),
  title: {
    default: 'Ethiopian Textbooks & EuEE Exam Preparation - Free PDF Downloads',
    template: '%s | EthioTextbooks',
  },
  description: 'Download free Ethiopian high school textbooks for grades 9-12. Access Physics, Chemistry, Biology, Mathematics, English, and SAT preparation materials. Prepare for EuEE exam with our mobile app.',
  keywords: 'Ethiopian textbooks, EuEE exam, Grade 9 textbooks, Grade 10 textbooks, Grade 11 textbooks, Grade 12 textbooks, Physics PDF, Chemistry PDF, Biology PDF, Mathematics PDF, English PDF, SAT preparation Ethiopia, free textbook download, Ethiopian education',
  authors: [{ name: 'EthioTextbooks' }],
  creator: 'EthioTextbooks',
  publisher: 'EthioTextbooks',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ethiotextbooks.com',
    siteName: 'EthioTextbooks',
    title: 'Ethiopian Textbooks & EuEE Exam Preparation',
    description: 'Free Ethiopian textbook PDFs and EuEE exam preparation app for high school students',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'EthioTextbooks - Free Ethiopian Textbook Downloads',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ethiopian Textbooks & EuEE Exam Preparation',
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
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EducationalOrganization',
              name: 'EthioTextbooks',
              description: 'Free Ethiopian high school textbooks and EuEE exam preparation resources',
              url: 'https://ethiotextbooks.com',
              logo: 'https://ethiotextbooks.com/logo.png',
              sameAs: [
                'https://facebook.com/ethiotextbooks',
                'https://twitter.com/ethiotextbooks',
                'https://instagram.com/ethiotextbooks',
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
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
