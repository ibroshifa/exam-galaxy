import { Metadata } from 'next'
import { TextbookDownloadComponent } from '@/components/textbook-download-component'

export const metadata: Metadata = {
  title: 'Grade 10 Mathematics Textbook PDF – Natural Science – Download for Free (2024)',
  description: 'Grade 10 Mathematics for Natural Science. Advanced algebra, calculus, and trigonometry. Free PDF for EuEE preparation.',
  alternates: { canonical: '/books/grade-10-math-natural' },
}

export default function Grade10MathNaturalPage() {
  return (
    <TextbookDownloadComponent
      grade={10}
      subject="Mathematics (Natural Science)"
      title="Grade 10 Mathematics Textbook PDF – Natural Science – Download for Free (2024)"
      description="Grade 10 Mathematics for Natural Science. Advanced algebra, calculus, and trigonometry. Free PDF for EuEE preparation."
    />
  )
}
