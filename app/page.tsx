import { Metadata } from 'next'
import { HeroSection } from '@/components/hero-section'
import { AppFeaturesSection } from '@/components/app-features-section'
import { AppScreenshotCarousel } from '@/components/app-screenshot-carousel'
import { TextbooksPromoSection } from '@/components/textbooks-promo-section'
import { TextbooksSection } from '@/components/textbooks-section'
import { Footer } from '@/components/footer'
import { AdBanner } from '@/components/ad-banner'

export const metadata: Metadata = {
  title: 'Exam Galaxy - Ethiopian University Entrance Exam Questions & Free Textbooks',
  description: 'Download Exam Galaxy app with 2007-2017 Ethiopian University Entrance Exam (EuEE) questions. Get free textbooks for grades 9-12 and ace your exam with our comprehensive study materials.',
  keywords: 'Exam Galaxy, EuEE exam questions, Ethiopian University Entrance Exam, exam preparation app, textbooks, past papers 2007-2017, Grade 9-12 textbooks, exam practice',
  openGraph: {
    title: 'Exam Galaxy - Ethiopian University Entrance Exam Questions & Free Textbooks',
    description: 'Download Exam Galaxy app with 2007-2017 EuEE questions. Get free textbooks and prepare for Ethiopian University Entrance Exam.',
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AppFeaturesSection />
      <AppScreenshotCarousel />
      <AdBanner variant="inline" />
      <TextbooksPromoSection />
      <AdBanner variant="inline" />
      <TextbooksSection />
      <AdBanner variant="inline" />
      <Footer />
    </main>
  )
}
