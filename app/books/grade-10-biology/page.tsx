import { Metadata } from 'next'
import { TextbookDownloadComponent } from '@/components/textbook-download-component'

export const metadata: Metadata = {
  title: 'Grade 10 Biology Textbook PDF – Download for Free (2024)',
  description: 'Grade 10 Biology textbook PDF. Study genetics, evolution, and ecology. Comprehensive preparation for EuEE exam.',
  alternates: { canonical: '/books/grade-10-biology' },
}

export default function Grade10BiologyPage() {
  return (
    <TextbookDownloadComponent
      grade={10}
      subject="Biology"
      title="Grade 10 Biology Textbook PDF – Download for Free (2024)"
      description="Grade 10 Biology textbook PDF. Study genetics, evolution, and ecology. Comprehensive preparation for EuEE exam."
    />
  )
}
