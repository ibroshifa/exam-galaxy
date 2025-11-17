import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { TextbookDownloadPage } from '@/components/textbook-download-page'

const subjects = ['physics', 'chemistry', 'biology', 'mathematics', 'english', 'sat']
const grades = [9, 10, 11, 12]

type Props = {
  params: Promise<{
    grade: string
    subject: string
  }>
}

export async function generateStaticParams() {
  const params = []
  for (const grade of grades) {
    for (const subject of subjects) {
      params.push({
        grade: grade.toString(),
        subject: subject,
      })
    }
  }
  return params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { grade, subject } = await params
  
  if (!grades.includes(Number(grade)) || !subjects.includes(subject)) {
    return {}
  }

  const subjectTitle = subject.charAt(0).toUpperCase() + subject.slice(1)
  
  return {
    title: `Grade ${grade} ${subjectTitle} Textbook PDF – Download for Free (2024)`,
    description: `Download free Grade ${grade} ${subjectTitle} textbook PDF for Ethiopian students. Official curriculum material for EuEE exam preparation with comprehensive chapters, examples, and exercises.`,
    keywords: `Grade ${grade} ${subjectTitle} PDF, Grade ${grade} ${subjectTitle} textbook Ethiopia, Ethiopian ${subjectTitle} textbook, ${subjectTitle} PDF download, EuEE ${subjectTitle} preparation, Grade ${grade} ${subjectTitle} study material`,
    openGraph: {
      title: `Grade ${grade} ${subjectTitle} Textbook PDF – Free Download`,
      description: `Free Ethiopian Grade ${grade} ${subjectTitle} textbook PDF for EuEE exam preparation`,
      type: 'article',
    },
    alternates: {
      canonical: `/grade-${grade}-textbooks/${subject}`,
    },
  }
}

export default async function TextbookPage({ params }: Props) {
  const { grade, subject } = await params
  
  if (!grades.includes(Number(grade)) || !subjects.includes(subject)) {
    notFound()
  }

  return <TextbookDownloadPage grade={Number(grade)} subject={subject} />
}
