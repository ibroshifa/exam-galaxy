import { Metadata } from 'next'
import { TextbookDownloadComponent } from '@/components/textbook-download-component'

export const metadata: Metadata = {
  title: 'Grade 12 Chemistry Textbook PDF – Download for Free (2024)',
  description: 'Grade 12 Chemistry textbook PDF. Complete chemistry preparation for EuEE entrance exam. Free download for Ethiopian students.',
  alternates: { canonical: '/books/grade-12-chemistry' },
}

export default function Page() {
  return <TextbookDownloadComponent grade={12} subject="Chemistry" title="Grade 12 Chemistry Textbook PDF – Download for Free (2024)" description="Grade 12 Chemistry textbook PDF. Complete chemistry preparation for EuEE entrance exam. Free download for Ethiopian students." />
}
