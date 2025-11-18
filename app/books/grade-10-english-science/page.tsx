import { Metadata } from 'next'
import { TextbookDownloadComponent } from '@/components/textbook-download-component'

export const metadata: Metadata = {
  title: 'Grade 10 English Textbook PDF – Download for Free (2024)',
  description: 'Grade 10 English textbook for Natural Science students. Advanced grammar, literature, and comprehension. Free download.',
  alternates: { canonical: '/books/grade-10-english-science' },
}

export default function Grade10EnglishSciencePage() {
  return (
    <TextbookDownloadComponent
      grade={10}
      subject="English (Natural Science)"
      title="Grade 10 English Textbook PDF – Download for Free (2024)"
      description="Grade 10 English textbook for Natural Science students. Advanced grammar, literature, and comprehension. Free download."
    />
  )
}
