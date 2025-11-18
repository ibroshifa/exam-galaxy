import { Metadata } from 'next'
import { TextbookDownloadComponent } from '@/components/textbook-download-component'

export const metadata: Metadata = {
  title: 'Grade 10 Economics Textbook PDF – Download for Free (2024)',
  description: 'Grade 10 Economics textbook PDF. Microeconomics, macroeconomics, and Ethiopian economy. Free resource for university entrance prep.',
  alternates: { canonical: '/books/grade-10-economics' },
}

export default function Grade10EconomicsPage() {
  return (
    <TextbookDownloadComponent
      grade={10}
      subject="Economics"
      title="Grade 10 Economics Textbook PDF – Download for Free (2024)"
      description="Grade 10 Economics textbook PDF. Microeconomics, macroeconomics, and Ethiopian economy. Free resource for university entrance prep."
    />
  )
}
