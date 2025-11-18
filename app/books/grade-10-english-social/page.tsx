import { Metadata } from 'next'
import { TextbookDownloadComponent } from '@/components/textbook-download-component'

export const metadata: Metadata = {
  title: 'Grade 10 English Textbook PDF – Download for Free (2024)',
  description: 'Grade 10 English textbook for Social Science. Literature, composition, and communication skills. Free download for Ethiopian students.',
  alternates: { canonical: '/books/grade-10-english-social' },
}

export default function Grade10EnglishSocialPage() {
  return (
    <TextbookDownloadComponent
      grade={10}
      subject="English (Social Science)"
      title="Grade 10 English Textbook PDF – Download for Free (2024)"
      description="Grade 10 English textbook for Social Science. Literature, composition, and communication skills. Free download for Ethiopian students."
    />
  )
}
