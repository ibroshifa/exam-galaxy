import { Metadata } from 'next'
import { TextbookDownloadComponent } from '@/components/textbook-download-component'

export const metadata: Metadata = {
  title: 'Grade 11 Chemistry Textbook PDF – Download for Free (2024)',
  description: 'Grade 11 Chemistry textbook PDF. Advanced organic and inorganic chemistry. Free resource for Ethiopian students preparing for EuEE.',
  alternates: { canonical: '/books/grade-11-chemistry' },
}

export default function Page() {
  return <TextbookDownloadComponent grade={11} subject="Chemistry" title="Grade 11 Chemistry Textbook PDF – Download for Free (2024)" description="Grade 11 Chemistry textbook PDF. Advanced organic and inorganic chemistry. Free resource for Ethiopian students preparing for EuEE." />
}
