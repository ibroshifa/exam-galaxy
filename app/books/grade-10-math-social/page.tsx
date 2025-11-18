import { Metadata } from 'next'
import { TextbookDownloadComponent } from '@/components/textbook-download-component'

export const metadata: Metadata = {
  title: 'Grade 10 Mathematics Textbook PDF – Social Science – Download for Free (2024)',
  description: 'Grade 10 Mathematics for Social Science. Statistics, economics mathematics, and practical applications. Free PDF download.',
  alternates: { canonical: '/books/grade-10-math-social' },
}

export default function Grade10MathSocialPage() {
  return (
    <TextbookDownloadComponent
      grade={10}
      subject="Mathematics (Social Science)"
      title="Grade 10 Mathematics Textbook PDF – Social Science – Download for Free (2024)"
      description="Grade 10 Mathematics for Social Science. Statistics, economics mathematics, and practical applications. Free PDF download."
    />
  )
}
