import { Metadata } from 'next'
import { TextbookDownloadComponent } from '@/components/textbook-download-component'

export const metadata: Metadata = {
  title: 'Grade 11 English Textbook PDF – Download for Free (2024)',
  description: 'Grade 11 English textbook for Natural Science. Advanced literature and writing. Free PDF for Ethiopian students.',
  alternates: { canonical: '/books/grade-11-english-science' },
}

export default function Page() {
  return <TextbookDownloadComponent grade={11} subject="English (Natural Science)" title="Grade 11 English Textbook PDF – Download for Free (2024)" description="Grade 11 English textbook for Natural Science. Advanced literature and writing. Free PDF for Ethiopian students." />
}
