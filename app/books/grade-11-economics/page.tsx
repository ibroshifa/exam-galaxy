import { Metadata } from 'next'
import { TextbookDownloadComponent } from '@/components/textbook-download-component'

export const metadata: Metadata = {
  title: 'Grade 11 Economics Textbook PDF – Download for Free (2024)',
  description: 'Grade 11 Economics textbook PDF. Advanced economics and development economics. Free resource for university entrance preparation.',
  alternates: { canonical: '/books/grade-11-economics' },
}

export default function Page() {
  return <TextbookDownloadComponent grade={11} subject="Economics" title="Grade 11 Economics Textbook PDF – Download for Free (2024)" description="Grade 11 Economics textbook PDF. Advanced economics and development economics. Free resource for university entrance preparation." />
}
