import { Metadata } from 'next'
import { TextbookDownloadComponent } from '@/components/textbook-download-component'

export const metadata: Metadata = {
  title: 'Download Ethiopian Grade 11 English New Curriculum Textbook',
  description: 'Ethiopian Grade 11 English textbook for Natural Science. Advanced literature and writing. Free PDF for Ethiopian students.',
  alternates: { canonical: '/books/grade-11-english' },
}

export default function Page() {
  return <TextbookDownloadComponent grade={11} subject="English (Natural Science)" title="Ethiopian Grade 11 English New Curriculum Textbook pdf" description="Ethiopian Grade 11 English textbook for Natural Science. Advanced literature and writing. Free PDF for Ethiopian students." />
}
