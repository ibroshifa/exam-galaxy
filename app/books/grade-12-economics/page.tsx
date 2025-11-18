import { Metadata } from 'next'
import { TextbookDownloadComponent } from '@/components/textbook-download-component'

export const metadata: Metadata = {
  title: 'Grade 12 Economics Textbook PDF – Download for Free (2024)',
  description: 'Grade 12 Economics textbook PDF. Complete economics curriculum for EuEE exam. Free resource for university entrance preparation.',
  alternates: { canonical: '/books/grade-12-economics' },
}

export default function Page() {
  return <TextbookDownloadComponent grade={12} subject="Economics" title="Grade 12 Economics Textbook PDF – Download for Free (2024)" description="Grade 12 Economics textbook PDF. Complete economics curriculum for EuEE exam. Free resource for university entrance preparation." />
}
