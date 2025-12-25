import { Metadata } from 'next'
import { TextbookDownloadComponent } from '@/components/textbook-download-component'

export const metadata: Metadata = {
  title: 'Download Ethiopian Grade 10 English New Curriculum Textbook',
  description: 'Ethiopian Grade 10 English textbook for Natural Science students. Advanced grammar, literature, and comprehension. Free download.',
  alternates: { canonical: '/books/grade-10-english' },
}

export default function Grade10EnglishSciencePage() {
  return (
    <TextbookDownloadComponent
      grade={10}
      subject="English (Natural Science)"
      title="Ethiopian Grade 10 English New Curriculum Textbook pdf"
      description="Ethiopian Grade 10 English textbook for Natural Science students. Advanced grammar, literature, and comprehension. Free download."
    />
  )
}
