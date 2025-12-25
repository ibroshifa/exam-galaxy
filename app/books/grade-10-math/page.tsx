import { Metadata } from 'next'
import { TextbookDownloadComponent } from '@/components/textbook-download-component'

export const metadata: Metadata = {
  title: 'Download Ethiopian Grade 10 Mathematics Textbook PDF – Natural Science – Download ',
  description: 'Ethiopian Grade 10 Mathematics for Natural Science. Advanced algebra, calculus, and trigonometry. Free PDF for EuEE preparation.',
  alternates: { canonical: '/books/grade-10-math' },
}

export default function Grade10MathNaturalPage() {
  return (
    <TextbookDownloadComponent
      grade={10}
      subject="Mathematics (Natural Science)"
      title="Ethiopian Grade 10 Mathematics Textbook PDF – Natural Science – Download "
      description="Ethiopian Grade 10 Mathematics for Natural Science. Advanced algebra, calculus, and trigonometry. Free PDF for EuEE preparation."
    />
  )
}
