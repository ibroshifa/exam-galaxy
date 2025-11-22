import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://exam-galaxy.vercel.app'
  
  const grades = [9, 10, 11, 12]
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
  ]
  
  // Grade pages
  const gradePages = grades.map(grade => ({
    url: `${baseUrl}/grade-${grade}-textbooks`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))
  
  // Individual textbook pages - Updated route structure to /books/grade-X-subject
  const textbookPages = grades.flatMap(grade =>
    subjects.map(subject => ({
      url: `${baseUrl}/books/grade-${grade}-${subject}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))
  )

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...gradePages,
    ...textbookPages,
  ]
}
