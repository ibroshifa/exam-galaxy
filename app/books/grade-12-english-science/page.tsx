import { Metadata } from 'next'
import { TextbookDownloadComponent } from '@/components/textbook-download-component'

export const metadata: Metadata = {
  title: 'Grade 12 English Textbook PDF – Download for Free (2024)',
  description: 'Grade 12 English textbook for Natural Science. Final exam preparation with comprehensive materials. Free PDF download.',
  alternates: { canonical: '/books/grade-12-english-science' },
}

export default function Page() {
  return <TextbookDownloadComponent grade={12} subject="English (Natural Science)" title="Grade 12 English Textbook PDF – Download for Free (2024)" description="Grade 12 English textbook for Natural Science. Final exam preparation with comprehensive materials. Free PDF download." />
}
