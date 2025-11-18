import { Metadata } from 'next'
import { TextbookDownloadComponent } from '@/components/textbook-download-component'

export const metadata: Metadata = {
  title: 'Grade 9 History Textbook PDF – Download for Free (2024)',
  description: 'Grade 9 History textbook PDF. Explore Ethiopian and world history. Free resource for students preparing for EuEE exam.',
  keywords: 'Grade 9 History, History textbook, Ethiopian history, EuEE prep, history PDF',
  alternates: {
    canonical: '/books/grade-9-history',
  },
}

export default function Grade9HistoryPage() {
  return (
    <TextbookDownloadComponent
      grade={9}
      subject="History"
      title="Grade 9 History Textbook PDF – Download for Free (2024)"
      description="Grade 9 History textbook PDF. Explore Ethiopian and world history. Free resource for students preparing for EuEE exam."
    />
  )
}
