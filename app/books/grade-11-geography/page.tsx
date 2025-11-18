import { Metadata } from 'next'
import { TextbookDownloadComponent } from '@/components/textbook-download-component'

export const metadata: Metadata = {
  title: 'Grade 11 Geography Textbook PDF – Download for Free (2024)',
  description: 'Grade 11 Geography textbook PDF. Regional geography and development studies. Free download for Ethiopian students.',
  alternates: { canonical: '/books/grade-11-geography' },
}

export default function Page() {
  return <TextbookDownloadComponent grade={11} subject="Geography" title="Grade 11 Geography Textbook PDF – Download for Free (2024)" description="Grade 11 Geography textbook PDF. Regional geography and development studies. Free download for Ethiopian students." />
}
