import { Metadata } from 'next'
import { TextbookDownloadComponent } from '@/components/textbook-download-component'

export const metadata: Metadata = {
  title: 'Grade 10 Physics Textbook PDF – Download for Free (2024)',
  description: 'Free Grade 10 Physics textbook PDF for Ethiopian students. Advanced mechanics, electricity, and magnetism. Prepare for EuEE exam.',
  alternates: { canonical: '/books/grade-10-physics' },
}

export default function Grade10PhysicsPage() {
  return (
    <TextbookDownloadComponent
      grade={10}
      subject="Physics"
      title="Grade 10 Physics Textbook PDF – Download for Free (2024)"
      description="Free Grade 10 Physics textbook PDF for Ethiopian students. Advanced mechanics, electricity, and magnetism. Prepare for EuEE exam."
    />
  )
}
