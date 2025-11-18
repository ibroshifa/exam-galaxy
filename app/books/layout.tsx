import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Exam Galaxy Textbooks',
    default: 'Download Exam Galaxy Textbooks',
  },
  description: 'Download free Ethiopian textbooks for all grades. High-quality PDFs for EuEE exam preparation with Exam Galaxy.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function BooksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
