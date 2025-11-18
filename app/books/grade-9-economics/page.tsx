import { Metadata } from 'next'
import { TextbookDownloadComponent } from '@/components/textbook-download-component'

export const metadata: Metadata = {
  title: 'Grade 9 Economics Textbook PDF – Download for Free (2024)',
  description: 'Grade 9 Economics textbook PDF. Master economic principles and Ethiopian economy. Free resource for students preparing for university entrance.',
  keywords: 'Grade 9 Economics, Economics textbook, Ethiopian economics, EuEE prep, economics PDF',
  alternates: {
    canonical: '/books/grade-9-economics',
  },
}

export default function Grade9EconomicsPage() {
  return (
    <TextbookDownloadComponent
      grade={9}
      subject="Economics"
      title="Grade 9 Economics Textbook PDF – Download for Free (2024)"
      description="Grade 9 Economics textbook PDF. Master economic principles and Ethiopian economy. Free resource for students preparing for university entrance."
    />
  )
}
