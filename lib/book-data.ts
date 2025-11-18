// Book metadata for SEO optimization
export interface BookMetadata {
  grade: number
  subject: string
  title: string
  description: string
  keywords: string[]
}

export const bookDatabase: Record<string, BookMetadata> = {
  // Grade 9 - Natural Science
  'grade-9-physics': {
    grade: 9,
    subject: 'Physics',
    title: 'Grade 9 Physics Textbook PDF – Download for Free (2024)',
    description: 'Free Grade 9 Physics textbook PDF for Ethiopian students. Prepare for EuEE exam with comprehensive coverage of mechanics, thermodynamics, and more.',
    keywords: ['Grade 9 Physics', 'Physics textbook', 'Ethiopian physics', 'EuEE prep', 'physics PDF'],
  },
  'grade-9-chemistry': {
    grade: 9,
    subject: 'Chemistry',
    title: 'Grade 9 Chemistry Textbook PDF – Download for Free (2024)',
    description: 'Download Grade 9 Chemistry textbook PDF. Master atomic structure, chemical reactions, and periodic table. Free resource for Ethiopian students.',
    keywords: ['Grade 9 Chemistry', 'Chemistry textbook', 'Ethiopian chemistry', 'EuEE prep', 'chemistry PDF'],
  },
  'grade-9-biology': {
    grade: 9,
    subject: 'Biology',
    title: 'Grade 9 Biology Textbook PDF – Download for Free (2024)',
    description: 'Grade 9 Biology textbook PDF download. Learn cell biology, genetics, and ecology. Prepare for EuEE with our comprehensive study material.',
    keywords: ['Grade 9 Biology', 'Biology textbook', 'Ethiopian biology', 'EuEE prep', 'biology PDF'],
  },
  'grade-9-english-science': {
    grade: 9,
    subject: 'English (Natural Science)',
    title: 'Grade 9 English Textbook PDF – Download for Free (2024)',
    description: 'Grade 9 English textbook PDF for Natural Science stream. Improve grammar, reading, and writing skills. Free download for Ethiopian students.',
    keywords: ['Grade 9 English', 'English textbook', 'Ethiopian English', 'EuEE prep', 'English PDF'],
  },
  'grade-9-math-natural': {
    grade: 9,
    subject: 'Mathematics (Natural Science)',
    title: 'Grade 9 Mathematics Textbook PDF – Natural Science – Download for Free (2024)',
    description: 'Grade 9 Mathematics textbook for Natural Science stream. Master algebra, geometry, and calculus fundamentals. Free PDF for EuEE preparation.',
    keywords: ['Grade 9 Math', 'Mathematics textbook', 'Natural Science Math', 'Ethiopian math', 'EuEE prep'],
  },
  // Grade 9 - Social Science
  'grade-9-history': {
    grade: 9,
    subject: 'History',
    title: 'Grade 9 History Textbook PDF – Download for Free (2024)',
    description: 'Grade 9 History textbook PDF. Explore Ethiopian and world history. Free resource for students preparing for EuEE exam.',
    keywords: ['Grade 9 History', 'History textbook', 'Ethiopian history', 'EuEE prep', 'history PDF'],
  },
  'grade-9-geography': {
    grade: 9,
    subject: 'Geography',
    title: 'Grade 9 Geography Textbook PDF – Download for Free (2024)',
    description: 'Grade 9 Geography textbook PDF download. Learn physical and human geography. Prepare for EuEE with comprehensive study materials.',
    keywords: ['Grade 9 Geography', 'Geography textbook', 'Ethiopian geography', 'EuEE prep', 'geography PDF'],
  },
  'grade-9-economics': {
    grade: 9,
    subject: 'Economics',
    title: 'Grade 9 Economics Textbook PDF – Download for Free (2024)',
    description: 'Grade 9 Economics textbook PDF. Master economic principles and Ethiopian economy. Free resource for students preparing for university entrance.',
    keywords: ['Grade 9 Economics', 'Economics textbook', 'Ethiopian economics', 'EuEE prep', 'economics PDF'],
  },
  'grade-9-english-social': {
    grade: 9,
    subject: 'English (Social Science)',
    title: 'Grade 9 English Textbook PDF – Download for Free (2024)',
    description: 'Grade 9 English textbook for Social Science stream. Develop comprehensive English skills. Free download for Ethiopian students.',
    keywords: ['Grade 9 English', 'English textbook', 'Social Science English', 'EuEE prep', 'English PDF'],
  },
  'grade-9-math-social': {
    grade: 9,
    subject: 'Mathematics (Social Science)',
    title: 'Grade 9 Mathematics Textbook PDF – Social Science – Download for Free (2024)',
    description: 'Grade 9 Mathematics for Social Science stream. Learn mathematics relevant to economics and social studies. Free PDF download.',
    keywords: ['Grade 9 Math', 'Mathematics textbook', 'Social Science Math', 'Ethiopian math', 'EuEE prep'],
  },

  // Grade 10 - Natural Science
  'grade-10-physics': {
    grade: 10,
    subject: 'Physics',
    title: 'Grade 10 Physics Textbook PDF – Download for Free (2024)',
    description: 'Free Grade 10 Physics textbook PDF for Ethiopian students. Advanced mechanics, electricity, and magnetism. Prepare for EuEE exam.',
    keywords: ['Grade 10 Physics', 'Physics textbook', 'Ethiopian physics', 'EuEE prep', 'physics PDF'],
  },
  'grade-10-chemistry': {
    grade: 10,
    subject: 'Chemistry',
    title: 'Grade 10 Chemistry Textbook PDF – Download for Free (2024)',
    description: 'Grade 10 Chemistry textbook PDF download. Organic chemistry, kinetics, and equilibrium. Free resource for Ethiopian students.',
    keywords: ['Grade 10 Chemistry', 'Chemistry textbook', 'Ethiopian chemistry', 'EuEE prep', 'chemistry PDF'],
  },
  'grade-10-biology': {
    grade: 10,
    subject: 'Biology',
    title: 'Grade 10 Biology Textbook PDF – Download for Free (2024)',
    description: 'Grade 10 Biology textbook PDF. Study genetics, evolution, and ecology. Comprehensive preparation for EuEE exam.',
    keywords: ['Grade 10 Biology', 'Biology textbook', 'Ethiopian biology', 'EuEE prep', 'biology PDF'],
  },
  'grade-10-english-science': {
    grade: 10,
    subject: 'English (Natural Science)',
    title: 'Grade 10 English Textbook PDF – Download for Free (2024)',
    description: 'Grade 10 English textbook for Natural Science students. Advanced grammar, literature, and comprehension. Free download.',
    keywords: ['Grade 10 English', 'English textbook', 'Ethiopian English', 'EuEE prep', 'English PDF'],
  },
  'grade-10-math-natural': {
    grade: 10,
    subject: 'Mathematics (Natural Science)',
    title: 'Grade 10 Mathematics Textbook PDF – Natural Science – Download for Free (2024)',
    description: 'Grade 10 Mathematics for Natural Science. Advanced algebra, calculus, and trigonometry. Free PDF for EuEE preparation.',
    keywords: ['Grade 10 Math', 'Mathematics textbook', 'Natural Science Math', 'Ethiopian math', 'EuEE prep'],
  },
  // Grade 10 - Social Science
  'grade-10-history': {
    grade: 10,
    subject: 'History',
    title: 'Grade 10 History Textbook PDF – Download for Free (2024)',
    description: 'Grade 10 History textbook PDF. Modern history, Ethiopian Renaissance, and global developments. Free resource for EuEE prep.',
    keywords: ['Grade 10 History', 'History textbook', 'Ethiopian history', 'EuEE prep', 'history PDF'],
  },
  'grade-10-geography': {
    grade: 10,
    subject: 'Geography',
    title: 'Grade 10 Geography Textbook PDF – Download for Free (2024)',
    description: 'Grade 10 Geography textbook PDF. Global geography, climate systems, and human-environment interaction. Free download for students.',
    keywords: ['Grade 10 Geography', 'Geography textbook', 'Ethiopian geography', 'EuEE prep', 'geography PDF'],
  },
  'grade-10-economics': {
    grade: 10,
    subject: 'Economics',
    title: 'Grade 10 Economics Textbook PDF – Download for Free (2024)',
    description: 'Grade 10 Economics textbook PDF. Microeconomics, macroeconomics, and Ethiopian economy. Free resource for university entrance prep.',
    keywords: ['Grade 10 Economics', 'Economics textbook', 'Ethiopian economics', 'EuEE prep', 'economics PDF'],
  },
  'grade-10-english-social': {
    grade: 10,
    subject: 'English (Social Science)',
    title: 'Grade 10 English Textbook PDF – Download for Free (2024)',
    description: 'Grade 10 English textbook for Social Science. Literature, composition, and communication skills. Free download for Ethiopian students.',
    keywords: ['Grade 10 English', 'English textbook', 'Social Science English', 'EuEE prep', 'English PDF'],
  },
  'grade-10-math-social': {
    grade: 10,
    subject: 'Mathematics (Social Science)',
    title: 'Grade 10 Mathematics Textbook PDF – Social Science – Download for Free (2024)',
    description: 'Grade 10 Mathematics for Social Science. Statistics, economics mathematics, and practical applications. Free PDF download.',
    keywords: ['Grade 10 Math', 'Mathematics textbook', 'Social Science Math', 'Ethiopian math', 'EuEE prep'],
  },

  // Grade 11 - Natural Science
  'grade-11-physics': {
    grade: 11,
    subject: 'Physics',
    title: 'Grade 11 Physics Textbook PDF – Download for Free (2024)',
    description: 'Grade 11 Physics textbook PDF. Advanced physics including optics, waves, and modern physics. Prepare for EuEE entrance exam.',
    keywords: ['Grade 11 Physics', 'Physics textbook', 'Ethiopian physics', 'EuEE prep', 'physics PDF'],
  },
  'grade-11-chemistry': {
    grade: 11,
    subject: 'Chemistry',
    title: 'Grade 11 Chemistry Textbook PDF – Download for Free (2024)',
    description: 'Grade 11 Chemistry textbook PDF. Advanced organic and inorganic chemistry. Free resource for Ethiopian students preparing for EuEE.',
    keywords: ['Grade 11 Chemistry', 'Chemistry textbook', 'Ethiopian chemistry', 'EuEE prep', 'chemistry PDF'],
  },
  'grade-11-biology': {
    grade: 11,
    subject: 'Biology',
    title: 'Grade 11 Biology Textbook PDF – Download for Free (2024)',
    description: 'Grade 11 Biology textbook PDF. Advanced biology including molecular biology and human physiology. Free download for EuEE prep.',
    keywords: ['Grade 11 Biology', 'Biology textbook', 'Ethiopian biology', 'EuEE prep', 'biology PDF'],
  },
  'grade-11-english-science': {
    grade: 11,
    subject: 'English (Natural Science)',
    title: 'Grade 11 English Textbook PDF – Download for Free (2024)',
    description: 'Grade 11 English textbook for Natural Science. Advanced literature and writing. Free PDF for Ethiopian students.',
    keywords: ['Grade 11 English', 'English textbook', 'Ethiopian English', 'EuEE prep', 'English PDF'],
  },
  'grade-11-math-natural': {
    grade: 11,
    subject: 'Mathematics (Natural Science)',
    title: 'Grade 11 Mathematics Textbook PDF – Natural Science – Download for Free (2024)',
    description: 'Grade 11 Mathematics for Natural Science. Advanced calculus, vectors, and analytical geometry. Free PDF for EuEE preparation.',
    keywords: ['Grade 11 Math', 'Mathematics textbook', 'Natural Science Math', 'Ethiopian math', 'EuEE prep'],
  },
  // Grade 11 - Social Science
  'grade-11-history': {
    grade: 11,
    subject: 'History',
    title: 'Grade 11 History Textbook PDF – Download for Free (2024)',
    description: 'Grade 11 History textbook PDF. Contemporary world history and Ethiopian development. Free resource for EuEE exam preparation.',
    keywords: ['Grade 11 History', 'History textbook', 'Ethiopian history', 'EuEE prep', 'history PDF'],
  },
  'grade-11-geography': {
    grade: 11,
    subject: 'Geography',
    title: 'Grade 11 Geography Textbook PDF – Download for Free (2024)',
    description: 'Grade 11 Geography textbook PDF. Regional geography and development studies. Free download for Ethiopian students.',
    keywords: ['Grade 11 Geography', 'Geography textbook', 'Ethiopian geography', 'EuEE prep', 'geography PDF'],
  },
  'grade-11-economics': {
    grade: 11,
    subject: 'Economics',
    title: 'Grade 11 Economics Textbook PDF – Download for Free (2024)',
    description: 'Grade 11 Economics textbook PDF. Advanced economics and development economics. Free resource for university entrance preparation.',
    keywords: ['Grade 11 Economics', 'Economics textbook', 'Ethiopian economics', 'EuEE prep', 'economics PDF'],
  },
  'grade-11-english-social': {
    grade: 11,
    subject: 'English (Social Science)',
    title: 'Grade 11 English Textbook PDF – Download for Free (2024)',
    description: 'Grade 11 English textbook for Social Science. Critical reading and analytical writing. Free PDF for Ethiopian students.',
    keywords: ['Grade 11 English', 'English textbook', 'Social Science English', 'EuEE prep', 'English PDF'],
  },
  'grade-11-math-social': {
    grade: 11,
    subject: 'Mathematics (Social Science)',
    title: 'Grade 11 Mathematics Textbook PDF – Social Science – Download for Free (2024)',
    description: 'Grade 11 Mathematics for Social Science. Advanced statistics and mathematical applications. Free PDF download for EuEE prep.',
    keywords: ['Grade 11 Math', 'Mathematics textbook', 'Social Science Math', 'Ethiopian math', 'EuEE prep'],
  },

  // Grade 12 - Natural Science
  'grade-12-physics': {
    grade: 12,
    subject: 'Physics',
    title: 'Grade 12 Physics Textbook PDF – Download for Free (2024)',
    description: 'Grade 12 Physics textbook PDF. Final preparation for EuEE physics. Comprehensive coverage of all physics topics with solved examples.',
    keywords: ['Grade 12 Physics', 'Physics textbook', 'Ethiopian physics', 'EuEE prep', 'physics PDF'],
  },
  'grade-12-chemistry': {
    grade: 12,
    subject: 'Chemistry',
    title: 'Grade 12 Chemistry Textbook PDF – Download for Free (2024)',
    description: 'Grade 12 Chemistry textbook PDF. Complete chemistry preparation for EuEE entrance exam. Free download for Ethiopian students.',
    keywords: ['Grade 12 Chemistry', 'Chemistry textbook', 'Ethiopian chemistry', 'EuEE prep', 'chemistry PDF'],
  },
  'grade-12-biology': {
    grade: 12,
    subject: 'Biology',
    title: 'Grade 12 Biology Textbook PDF – Download for Free (2024)',
    description: 'Grade 12 Biology textbook PDF. Comprehensive biology resource for EuEE exam preparation. Free PDF for all Ethiopian students.',
    keywords: ['Grade 12 Biology', 'Biology textbook', 'Ethiopian biology', 'EuEE prep', 'biology PDF'],
  },
  'grade-12-english-science': {
    grade: 12,
    subject: 'English (Natural Science)',
    title: 'Grade 12 English Textbook PDF – Download for Free (2024)',
    description: 'Grade 12 English textbook for Natural Science. Final exam preparation with comprehensive materials. Free PDF download.',
    keywords: ['Grade 12 English', 'English textbook', 'Ethiopian English', 'EuEE prep', 'English PDF'],
  },
  'grade-12-math-natural': {
    grade: 12,
    subject: 'Mathematics (Natural Science)',
    title: 'Grade 12 Mathematics Textbook PDF – Natural Science – Download for Free (2024)',
    description: 'Grade 12 Mathematics for Natural Science. Final exam preparation with all topics. Free PDF for EuEE entrance preparation.',
    keywords: ['Grade 12 Math', 'Mathematics textbook', 'Natural Science Math', 'Ethiopian math', 'EuEE prep'],
  },
  // Grade 12 - Social Science
  'grade-12-history': {
    grade: 12,
    subject: 'History',
    title: 'Grade 12 History Textbook PDF – Download for Free (2024)',
    description: 'Grade 12 History textbook PDF. Complete history curriculum for university entrance exam. Free resource for Ethiopian students.',
    keywords: ['Grade 12 History', 'History textbook', 'Ethiopian history', 'EuEE prep', 'history PDF'],
  },
  'grade-12-geography': {
    grade: 12,
    subject: 'Geography',
    title: 'Grade 12 Geography Textbook PDF – Download for Free (2024)',
    description: 'Grade 12 Geography textbook PDF. Final exam preparation materials. Free download for Ethiopian high school students.',
    keywords: ['Grade 12 Geography', 'Geography textbook', 'Ethiopian geography', 'EuEE prep', 'geography PDF'],
  },
  'grade-12-economics': {
    grade: 12,
    subject: 'Economics',
    title: 'Grade 12 Economics Textbook PDF – Download for Free (2024)',
    description: 'Grade 12 Economics textbook PDF. Complete economics curriculum for EuEE exam. Free resource for university entrance preparation.',
    keywords: ['Grade 12 Economics', 'Economics textbook', 'Ethiopian economics', 'EuEE prep', 'economics PDF'],
  },
  'grade-12-english-social': {
    grade: 12,
    subject: 'English (Social Science)',
    title: 'Grade 12 English Textbook PDF – Download for Free (2024)',
    description: 'Grade 12 English textbook for Social Science. Complete English curriculum for entrance exam. Free PDF for Ethiopian students.',
    keywords: ['Grade 12 English', 'English textbook', 'Social Science English', 'EuEE prep', 'English PDF'],
  },
  'grade-12-math-social': {
    grade: 12,
    subject: 'Mathematics (Social Science)',
    title: 'Grade 12 Mathematics Textbook PDF – Social Science – Download for Free (2024)',
    description: 'Grade 12 Mathematics for Social Science. Final exam preparation with all relevant topics. Free PDF download for EuEE prep.',
    keywords: ['Grade 12 Math', 'Mathematics textbook', 'Social Science Math', 'Ethiopian math', 'EuEE prep'],
  },
}

export function getBookMetadata(slug: string): BookMetadata | null {
  return bookDatabase[slug] || null
}

export function getAllBookSlugs(): string[] {
  return Object.keys(bookDatabase)
}
