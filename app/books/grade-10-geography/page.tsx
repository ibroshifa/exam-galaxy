import { Metadata } from 'next'
import { TextbookDownloadComponent } from '@/components/textbook-download-component'

export const metadata: Metadata = {
  title: 'Grade 10 Geography Textbook PDF – Download for Free (2024)',
  description: 'Grade 10 Geography textbook PDF. Global geography, climate systems, and human-environment interaction. Free download for students.',
  alternates: { canonical: '/books/grade-10-geography' },
}

export default function Grade10GeographyPage() {
  return (
    <TextbookDownloadComponent
      grade={10}
      subject="Geography"
      title="Grade 10 Geography Textbook PDF – Download for Free (2024)"
      description="Grade 10 Geography textbook PDF. Global geography, climate systems, and human-environment interaction. Free download for students."
    />
  )
}
