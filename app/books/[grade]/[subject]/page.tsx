
import { Metadata } from 'next'
import { TextbookDownloadComponent } from '@/components/textbook-download-component'
import { notFound } from 'next/navigation'

// This is a dynamic route for testing new features and functionality
// It accepts any grade and subject parameter and generates pages on-demand
// For production, use the static routes in /books/grade-X-Y/ instead

const validSubjects = [
  'physics',
  'chemistry',
  'biology',
  'english-science',
  'math-natural',
  'history',
  'geography',
  'economics',
  'english-social',
  'math-social',
]

const subjectTitles: Record<string, string> = {
  'physics': 'Physics',
  'chemistry': 'Chemistry',
  'biology': 'Biology',
  'english-science': 'English (Natural Science)',
  'math-natural': 'Mathematics (Natural Science)',
  'history': 'History',
  'geography': 'Geography',
  'economics': 'Economics',
  'english-social': 'English (Social Science)',
  'math-social': 'Mathematics (Social Science)',
}

const subjectDescriptions: Record<string, string> = {
  'physics': 'Free Physics textbook PDF for Ethiopian students. Prepare for EuEE exam with comprehensive coverage of mechanics, electricity, thermodynamics, waves, optics, and modern physics.',
  'chemistry': 'Download Chemistry textbook PDF. Master atomic structure, chemical reactions, organic chemistry, and periodic table. Free resource for Ethiopian students.',
  'biology': 'Biology textbook PDF download. Learn cell biology, genetics, evolution, ecology, and human physiology. Prepare for EuEE with our comprehensive study material.',
  'english-science': 'English textbook PDF for Natural Science stream. Improve grammar, reading comprehension, writing skills, and literature. Free download for Ethiopian students.',
  'math-natural': 'Mathematics textbook for Natural Science stream. Master algebra, geometry, calculus fundamentals, and statistics. Free PDF for EuEE preparation.',
  'history': 'History textbook PDF. Explore Ethiopian history, world history, and modern developments. Free resource for students preparing for EuEE exam.',
  'geography': 'Geography textbook PDF download. Learn physical geography, human geography, and environmental systems. Prepare for EuEE with comprehensive study materials.',
  'economics': 'Economics textbook PDF. Master economic principles, microeconomics, macroeconomics, and Ethiopian economy. Free resource for university entrance preparation.',
  'english-social': 'English textbook for Social Science stream. Develop comprehensive English skills, literature analysis, and academic writing. Free download for Ethiopian students.',
  'math-social': 'Mathematics for Social Science stream. Learn statistics, applied mathematics, economics mathematics. Free PDF download for EuEE preparation.',
}

// This is now a pure Server Component → generateStaticParams is allowed
export default function TextbookPage({ params }: { params: { grade: string; subject: string } }) {
  const grade = parseInt(params.grade) as 9|10|11|12
  const subject = params.subject

  if (isNaN(grade) || grade < 9 || grade > 12 || !validSubjects.includes(subject as any)) {
    notFound()
  }

  const subjectTitle = subjectTitles[subject]
  const subjectDescription = subjectDescriptions[subject]
  const pageTitle = `Grade ${grade} ${subjectTitle} Textbook PDF – Download for Free (2025)`

  return (
    <TextbookDownloadComponent
      grade={grade as 9|10|11|12}
      subject={subjectTitle}
      title={pageTitle}
      description={subjectDescription}
    />
  )
}

// Add this function at the bottom of your file (or top, doesn't matter)
export async function generateStaticParams() {
  const grades = [9, 10, 11, 12] as const
  const subjects = [
    'physics',
    'chemistry',
    'biology',
    'english-science',
    'math-natural',
    'history',
    'geography',
    'economics',
    'english-social',
    'math-social',
  ] as const

  const paths: { grade: string; subject: string }[] = []

  for (const grade of grades) {
    for (const subject of subjects) {
      paths.push({
        grade: grade.toString(),    // must be string
        subject: subject,
      })
    }
  }

  return paths
}
