import { Metadata } from 'next'
import { TextbookDownloadComponent } from '@/components/textbook-download-component'

export const metadata: Metadata = {
  title: 'Grade 11 Physics Textbook PDF – Download for Free (2024)',
  description: 'Grade 11 Physics textbook PDF. Advanced physics including optics, waves, and modern physics. Prepare for EuEE entrance exam.',
  alternates: { canonical: '/books/grade-11-physics' },
}

export default function Page() {
  return <TextbookDownloadComponent grade={11} subject="Physics" title="Grade 11 Physics Textbook PDF – Download for Free (2024)" description="Grade 11 Physics textbook PDF. Advanced physics including optics, waves, and modern physics. Prepare for EuEE entrance exam." />
}
