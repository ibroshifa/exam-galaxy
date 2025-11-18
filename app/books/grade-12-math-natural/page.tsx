import { Metadata } from 'next'
import { TextbookDownloadComponent } from '@/components/textbook-download-component'

export const metadata: Metadata = {
  title: 'Grade 12 Mathematics Textbook PDF – Natural Science – Download for Free (2024)',
  description: 'Grade 12 Mathematics for Natural Science. Final exam preparation with all topics. Free PDF for EuEE entrance preparation.',
  alternates: { canonical: '/books/grade-12-math-natural' },
}

export default function Page() {
  return <TextbookDownloadComponent grade={12} subject="Mathematics (Natural Science)" title="Grade 12 Mathematics Textbook PDF – Natural Science – Download for Free (2024)" description="Grade 12 Mathematics for Natural Science. Final exam preparation with all topics. Free PDF for EuEE entrance preparation." />
}
