import { Metadata } from 'next'
import Link from 'next/link'
import { HeroSection } from '@/components/hero-section'
import { FeaturesSection } from '@/components/features-section'
import { SubjectsSection } from '@/components/subjects-section'
import { TextbooksSection } from '@/components/textbooks-section'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Ethiopian Textbooks & EuEE Exam Preparation App - Free PDF Downloads',
  description: 'Download free Ethiopian high school textbooks for grades 9-12. Access Physics, Chemistry, Biology, Mathematics, English, and SAT preparation materials. Prepare for EuEE exam with our mobile app.',
  keywords: 'Ethiopian textbooks, EuEE exam, Grade 9 textbooks, Grade 10 textbooks, Grade 11 textbooks, Grade 12 textbooks, Physics PDF, Chemistry PDF, Biology PDF, Mathematics PDF, English PDF, SAT preparation Ethiopia, free textbook download',
  openGraph: {
    title: 'Ethiopian Textbooks & EuEE Exam Preparation',
    description: 'Free Ethiopian textbook PDFs and EuEE exam preparation app for high school students',
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
      <FeaturesSection />
      <SubjectsSection />
      <TextbooksSection />
      <CTASection />
      <Footer />
    </main>
  )
}
