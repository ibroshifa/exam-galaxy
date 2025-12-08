import { Metadata } from 'next'
import { HeroSection } from '@/components/hero-section'
import { AppFeaturesSection } from '@/components/app-features-section'
import { AppScreenshotCarousel } from '@/components/app-screenshot-carousel'
import { TextbooksPromoSection } from '@/components/textbooks-promo-section'
import { TextbooksSection } from '@/components/textbooks-section'
import { Footer } from '@/components/footer'
import { AdBanner } from '@/components/ad-banner'
import Script from 'next/script'
import { generateFAQSchema } from '@/lib/faqSchema'

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
const FAQs = [
  {
    question: `Where can i get past entrance exam papers?`,
    answer:
      `You can find past entrance exams with answer and explanation in exam galaxy app which you can find in our website. The app contains question banks from 2007-2017 with detailed solutions.`,
  },
  {
    question: `Where can i download grade 12 books pdf?`,
    answer:
      `You can download all grade 12 books inside examgalaxy website under books section. All textbooks are available for free in PDF format for offline access.`,
  },
  {
    question: `What subjects are available in the textbook section?`,
    answer:
      `We provide textbooks for subjects including Mathematics, Physics, Chemistry, Biology, English, History, Geography, and Economics for grades 9-12.`,
  },
]
const faqschema = generateFAQSchema(FAQs)
export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Script
      id='faq-schema'
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html:JSON.stringify(faqschema)
      }}
    />
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
