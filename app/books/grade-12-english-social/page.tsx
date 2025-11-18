import { Metadata } from 'next'
import { TextbookDownloadComponent } from '@/components/textbook-download-component'

export const metadata: Metadata = {
  title: 'Grade 12 English Textbook PDF – Download for Free (2024)',
  description: 'Grade 12 English textbook for Social Science. Complete English curriculum for entrance exam. Free PDF for Ethiopian students.',
  alternates: { canonical: '/books/grade-12-english-social' },
}

export default function Page() {
  return <TextbookDownloadComponent grade={12} subject="English (Social Science)" title="Grade 12 English Textbook PDF – Download for Free (2024)" description="Grade 12 English textbook for Social Science. Complete English curriculum for entrance exam. Free PDF for Ethiopian students." />
}
