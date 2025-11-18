import { Metadata } from 'next'
import { TextbookDownloadComponent } from '@/components/textbook-download-component'

export const metadata: Metadata = {
  title: 'Grade 10 Chemistry Textbook PDF – Download for Free (2024)',
  description: 'Grade 10 Chemistry textbook PDF download. Organic chemistry, kinetics, and equilibrium. Free resource for Ethiopian students.',
  alternates: { canonical: '/books/grade-10-chemistry' },
}

export default function Grade10ChemistryPage() {
  return (
    <TextbookDownloadComponent
      grade={10}
      subject="Chemistry"
      title="Grade 10 Chemistry Textbook PDF – Download for Free (2024)"
      description="Grade 10 Chemistry textbook PDF download. Organic chemistry, kinetics, and equilibrium. Free resource for Ethiopian students."
    />
  )
}
