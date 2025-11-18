import { Metadata } from 'next'
import { TextbookDownloadComponent } from '@/components/textbook-download-component'

export const metadata: Metadata = {
  title: 'Grade 10 History Textbook PDF – Download for Free (2024)',
  description: 'Grade 10 History textbook PDF. Modern history, Ethiopian Renaissance, and global developments. Free resource for EuEE prep.',
  alternates: { canonical: '/books/grade-10-history' },
}

export default function Grade10HistoryPage() {
  return (
    <TextbookDownloadComponent
      grade={10}
      subject="History"
      title="Grade 10 History Textbook PDF – Download for Free (2024)"
      description="Grade 10 History textbook PDF. Modern history, Ethiopian Renaissance, and global developments. Free resource for EuEE prep."
    />
  )
}
