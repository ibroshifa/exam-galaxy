import { Metadata } from 'next'
import { GradeTextbooksPage } from '@/components/grade-textbooks-page'

export const metadata: Metadata = {
  title: 'Grade 9 Textbooks PDF - Free Download for Ethiopian Students (2024)',
  description: 'Download free Grade 9 Ethiopian textbooks in PDF format. Access Physics, Chemistry, Biology, Mathematics, English, and SAT preparation materials for Grade 9 students preparing for EuEE exam.',
  keywords: 'Grade 9 textbooks Ethiopia, Grade 9 Physics PDF, Grade 9 Chemistry PDF, Grade 9 Biology PDF, Grade 9 Mathematics PDF, Grade 9 English PDF, Ethiopian curriculum Grade 9',
  openGraph: {
    title: 'Grade 9 Textbooks PDF - Free Download',
    description: 'Free Ethiopian Grade 9 textbook PDFs for all subjects',
    type: 'website',
  },
  alternates: {
    canonical: '/grade-9-textbooks',
  },
}

export default function Grade9TextbooksPage() {
  return <GradeTextbooksPage grade={9} />
}
