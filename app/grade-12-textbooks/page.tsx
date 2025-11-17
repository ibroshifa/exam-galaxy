import { Metadata } from 'next'
import { GradeTextbooksPage } from '@/components/grade-textbooks-page'

export const metadata: Metadata = {
  title: 'Grade 12 Textbooks PDF - Free Download for Ethiopian Students (2024)',
  description: 'Download free Grade 12 Ethiopian textbooks in PDF format. Access Physics, Chemistry, Biology, Mathematics, English, and SAT preparation materials for Grade 12 students preparing for EuEE exam.',
  keywords: 'Grade 12 textbooks Ethiopia, Grade 12 Physics PDF, Grade 12 Chemistry PDF, Grade 12 Biology PDF, Grade 12 Mathematics PDF, Grade 12 English PDF, Ethiopian curriculum Grade 12, EuEE preparation',
  openGraph: {
    title: 'Grade 12 Textbooks PDF - Free Download',
    description: 'Free Ethiopian Grade 12 textbook PDFs for all subjects - Perfect for EuEE preparation',
    type: 'website',
  },
  alternates: {
    canonical: '/grade-12-textbooks',
  },
}

export default function Grade12TextbooksPage() {
  return <GradeTextbooksPage grade={12} />
}
