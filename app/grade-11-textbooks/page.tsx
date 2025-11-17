import { Metadata } from 'next'
import { GradeTextbooksPage } from '@/components/grade-textbooks-page'

export const metadata: Metadata = {
  title: 'Grade 11 Textbooks PDF - Free Download for Ethiopian Students (2024)',
  description: 'Download free Grade 11 Ethiopian textbooks in PDF format. Access Physics, Chemistry, Biology, Mathematics, English, and SAT preparation materials for Grade 11 students preparing for EuEE exam.',
  keywords: 'Grade 11 textbooks Ethiopia, Grade 11 Physics PDF, Grade 11 Chemistry PDF, Grade 11 Biology PDF, Grade 11 Mathematics PDF, Grade 11 English PDF, Ethiopian curriculum Grade 11',
  openGraph: {
    title: 'Grade 11 Textbooks PDF - Free Download',
    description: 'Free Ethiopian Grade 11 textbook PDFs for all subjects',
    type: 'website',
  },
  alternates: {
    canonical: '/grade-11-textbooks',
  },
}

export default function Grade11TextbooksPage() {
  return <GradeTextbooksPage grade={11} />
}
