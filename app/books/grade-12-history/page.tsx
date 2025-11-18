import { Metadata } from 'next'
import { TextbookDownloadComponent } from '@/components/textbook-download-component'

export const metadata: Metadata = {
  title: 'Grade 12 History Textbook PDF – Download for Free (2024)',
  description: 'Grade 12 History textbook PDF. Complete history curriculum for university entrance exam. Free resource for Ethiopian students.',
  alternates: { canonical: '/books/grade-12-history' },
}

export default function Page() {
  return <TextbookDownloadComponent grade={12} subject="History" title="Grade 12 History Textbook PDF – Download for Free (2024)" description="Grade 12 History textbook PDF. Complete history curriculum for university entrance exam. Free resource for Ethiopian students." />
}
