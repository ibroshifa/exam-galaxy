import { Metadata } from 'next'
import { TextbookDownloadComponent } from '@/components/textbook-download-component'

export const metadata: Metadata = {
  title: 'Grade 9 Mathematics Textbook PDF – Natural Science – Download for Free (2024)',
  description: 'Grade 9 Mathematics textbook for Natural Science stream. Master algebra, geometry, and calculus fundamentals. Free PDF for EuEE preparation.',
  keywords: 'Grade 9 Math, Mathematics textbook, Natural Science Math, Ethiopian math, EuEE prep',
  alternates: {
    canonical: '/books/grade-9-math-natural',
  },
}

export default function Grade9MathNaturalPage() {
  return (
    <TextbookDownloadComponent
      grade={9}
      subject="Mathematics (Natural Science)"
      title="Grade 9 Mathematics Textbook PDF – Natural Science – Download for Free (2024)"
      description="Grade 9 Mathematics textbook for Natural Science stream. Master algebra, geometry, and calculus fundamentals. Free PDF for EuEE preparation."
    />
  )
}
