import { Metadata } from 'next'
import { TextbookDownloadComponent } from '@/components/textbook-download-component'

export const metadata: Metadata = {
  title: 'Grade 9 Chemistry Textbook PDF – Download for Free (2024)',
  description: 'Download Grade 9 Chemistry textbook PDF. Master atomic structure, chemical reactions, and periodic table. Free resource for Ethiopian students.',
  keywords: 'Grade 9 Chemistry, Chemistry textbook, Ethiopian chemistry, EuEE prep, chemistry PDF',
  openGraph: {
    title: 'Grade 9 Chemistry Textbook PDF – Download for Free (2024)',
    description: 'Download Grade 9 Chemistry textbook PDF for Ethiopian students.',
    type: 'website',
  },
  alternates: {
    canonical: '/books/grade-9-chemistry',
  },
}

export default function Grade9ChemistryPage() {
  return (
    <TextbookDownloadComponent
      grade={9}
      subject="Chemistry"
      title="Grade 9 Chemistry Textbook PDF – Download for Free (2024)"
      description="Download Grade 9 Chemistry textbook PDF. Master atomic structure, chemical reactions, and periodic table. Free resource for Ethiopian students."
    />
  )
}
