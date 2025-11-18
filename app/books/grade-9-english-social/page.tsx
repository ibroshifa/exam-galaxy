import { Metadata } from 'next'
import { TextbookDownloadComponent } from '@/components/textbook-download-component'

export const metadata: Metadata = {
  title: 'Grade 9 English Textbook PDF – Social Science – Download for Free (2024)',
  description: 'Grade 9 English textbook for Social Science stream. Develop comprehensive English skills. Free download for Ethiopian students.',
  keywords: 'Grade 9 English, English textbook, Social Science English, EuEE prep, English PDF',
  alternates: {
    canonical: '/books/grade-9-english-social',
  },
}

export default function Grade9EnglishSocialPage() {
  return (
    <TextbookDownloadComponent
      grade={9}
      subject="English (Social Science)"
      title="Grade 9 English Textbook PDF – Download for Free (2024)"
      description="Grade 9 English textbook for Social Science stream. Develop comprehensive English skills. Free download for Ethiopian students."
    />
  )
}
