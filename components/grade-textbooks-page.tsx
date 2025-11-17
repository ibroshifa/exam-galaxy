'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Download, ChevronRight, BookOpen, ArrowLeft, Star } from 'lucide-react'
import { Footer } from '@/components/footer'
import { Atom, Beaker, Dna, Calculator, BookA, Target } from 'lucide-react'

interface SubjectInfo {
  name: string
  slug: string
  icon: React.ComponentType<{ className?: string }>
  description: string
  chapters: number
  pages: number
  color: string
  gradient: string
}

const subjects: SubjectInfo[] = [
  {
    name: 'Physics',
    slug: 'physics',
    icon: Atom,
    description: 'Mechanics, Electricity, Magnetism, Thermodynamics, Waves & Optics',
    chapters: 12,
    pages: 320,
    color: 'text-blue-600',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Chemistry',
    slug: 'chemistry',
    icon: Beaker,
    description: 'Organic Chemistry, Inorganic Chemistry, Physical Chemistry, Analytical Chemistry',
    chapters: 14,
    pages: 350,
    color: 'text-green-600',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Biology',
    slug: 'biology',
    icon: Dna,
    description: 'Cell Biology, Genetics, Evolution, Ecology, Human Physiology',
    chapters: 16,
    pages: 380,
    color: 'text-emerald-600',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    name: 'Mathematics',
    slug: 'mathematics',
    icon: Calculator,
    description: 'Algebra, Trigonometry, Calculus, Geometry, Statistics & Probability',
    chapters: 15,
    pages: 420,
    color: 'text-purple-600',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'English',
    slug: 'english',
    icon: BookA,
    description: 'Grammar, Composition, Reading Comprehension, Literature, Writing Skills',
    chapters: 10,
    pages: 280,
    color: 'text-orange-600',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    name: 'SAT',
    slug: 'sat',
    icon: Target,
    description: 'SAT Math, SAT Reading, SAT Writing, Test Strategies, Practice Tests',
    chapters: 8,
    pages: 250,
    color: 'text-red-600',
    gradient: 'from-red-500 to-rose-500',
  },
]

export function GradeTextbooksPage({ grade }: { grade: number }) {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-emerald-50 via-yellow-50 to-red-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button variant="ghost" className="mb-6 gap-2" asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>

            <div className="flex items-center gap-4 mb-6">
              <motion.div
                className="p-4 rounded-2xl bg-emerald-100"
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <BookOpen className="h-12 w-12 text-emerald-600" />
              </motion.div>
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">
                  Grade {grade} <span className="text-emerald-600">Textbooks</span>
                </h1>
                <p className="text-lg text-muted-foreground mt-2">
                  Download free PDF textbooks for all subjects
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2">
                <div className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="font-medium">6 Subjects Available</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2">
                <Download className="h-4 w-4 text-emerald-600" />
                <span className="font-medium">100% Free Download</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <span className="font-medium">Official Curriculum</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Subjects Grid */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map((subject, index) => (
              <motion.div
                key={subject.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-2 hover:border-emerald-200 transition-all hover:shadow-xl group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <subject.icon className={`h-12 w-12 ${subject.color}`} />
                      </motion.div>
                      <div className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${subject.gradient} text-white font-medium`}>
                        {subject.chapters} Chapters
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-2">{subject.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                      {subject.description}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span>{subject.pages} pages</span>
                      <span>•</span>
                      <span>PDF format</span>
                    </div>

                    <Button asChild className="w-full gap-2 bg-emerald-600 hover:bg-emerald-700">
                      <Link href={`/grade-${grade}-textbooks/${subject.slug}`}>
                        View & Download
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Want More Practice Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Download our mobile app for thousands of practice questions, mock exams, and personalized study plans
            </p>
            <Button size="lg" className="gap-2 bg-emerald-600 hover:bg-emerald-700" asChild>
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                <Download className="h-5 w-5" />
                Download App
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Other Grades */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold mb-6">Other Grades</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[9, 10, 11, 12].filter(g => g !== grade).map((g) => (
              <Card key={g} className="border-2 hover:border-emerald-200 transition-all">
                <CardContent className="p-4">
                  <Link href={`/grade-${g}-textbooks`} className="flex items-center justify-between group">
                    <div>
                      <h3 className="font-semibold text-lg">Grade {g}</h3>
                      <p className="text-sm text-muted-foreground">6 subjects</p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-emerald-600 transition-colors" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
