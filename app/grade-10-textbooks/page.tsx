import { Metadata } from 'next'
import { GradeTextbooksPage } from '@/components/grade-textbooks-page'

export const metadata: Metadata = {
  title: 'Grade 10 Textbooks PDF - Free Download for Ethiopian Students (2024)',
  description: 'Download free Grade 10 Ethiopian textbooks in PDF format. Access Physics, Chemistry, Biology, Mathematics, English, and SAT preparation materials for Grade 10 students preparing for EuEE exam.',
  keywords: 'Grade 10 textbooks Ethiopia, Grade 10 Physics PDF, Grade 10 Chemistry PDF, Grade 10 Biology PDF, Grade 10 Mathematics PDF, Grade 10 English PDF, Ethiopian curriculum Grade 10',
  openGraph: {
    title: 'Grade 10 Textbooks PDF - Free Download',
    description: 'Free Ethiopian Grade 10 textbook PDFs for all subjects',
    type: 'website',
  },
  alternates: {
    canonical: '/grade-10-textbooks',
  },
}

export default function Grade10TextbooksPage() {
  return <GradeTextbooksPage grade={10} />
}
