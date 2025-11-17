'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Download, ChevronRight, BookOpen, ArrowLeft, CheckCircle2, FileText, Smartphone, Star, Clock, Users } from 'lucide-react'
import { Footer } from '@/components/footer'
import { Atom, Beaker, Dna, Calculator, BookA, Target } from 'lucide-react'

interface SubjectData {
  name: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  gradient: string
  description: string
  chapters: string[]
  features: string[]
  topics: string[]
  studyTips: string[]
}

const subjectData: Record<string, SubjectData> = {
  physics: {
    name: 'Physics',
    icon: Atom,
    color: 'text-blue-600',
    gradient: 'from-blue-500 to-cyan-500',
    description: 'Master the fundamental laws of nature and understand how the physical world works',
    chapters: [
      'Measurements and Units',
      'Motion in a Straight Line',
      'Vectors and Scalars',
      'Newton\'s Laws of Motion',
      'Work, Energy, and Power',
      'Momentum and Impulse',
      'Circular Motion',
      'Gravitation',
      'Properties of Matter',
      'Heat and Thermodynamics',
      'Waves and Sound',
      'Light and Optics',
    ],
    features: [
      'Comprehensive theory explanations',
      'Step-by-step problem solutions',
      '200+ practice problems',
      'Real-world applications',
      'Lab experiment guides',
      'Quick revision notes',
    ],
    topics: [
      'Classical Mechanics',
      'Thermodynamics',
      'Electromagnetism',
      'Waves & Optics',
      'Modern Physics',
    ],
    studyTips: [
      'Start with understanding the core concepts before memorizing formulas',
      'Practice numerical problems daily to build problem-solving skills',
      'Draw diagrams to visualize physical situations and processes',
      'Review units and dimensional analysis to avoid calculation errors',
    ],
  },
  chemistry: {
    name: 'Chemistry',
    icon: Beaker,
    color: 'text-green-600',
    gradient: 'from-green-500 to-emerald-500',
    description: 'Explore the composition, structure, and properties of matter and chemical reactions',
    chapters: [
      'Atomic Structure',
      'Chemical Bonding',
      'States of Matter',
      'Chemical Reactions',
      'Stoichiometry',
      'Acids and Bases',
      'Redox Reactions',
      'Thermochemistry',
      'Chemical Equilibrium',
      'Organic Chemistry Basics',
      'Hydrocarbons',
      'Functional Groups',
    ],
    features: [
      'Detailed chemical equations',
      'Interactive periodic table guide',
      '150+ solved examples',
      'Laboratory safety procedures',
      'Chemical nomenclature reference',
      'Mole concept mastery',
    ],
    topics: [
      'Atomic Structure',
      'Chemical Bonding',
      'Organic Chemistry',
      'Inorganic Chemistry',
      'Physical Chemistry',
    ],
    studyTips: [
      'Memorize the periodic table structure and element properties',
      'Practice balancing chemical equations regularly',
      'Create flashcards for chemical formulas and nomenclature',
      'Understand reaction mechanisms rather than just memorizing them',
    ],
  },
  biology: {
    name: 'Biology',
    icon: Dna,
    color: 'text-emerald-600',
    gradient: 'from-emerald-500 to-teal-500',
    description: 'Discover the fascinating world of living organisms and life processes',
    chapters: [
      'Cell Biology',
      'Cell Division',
      'Genetics and Heredity',
      'DNA and RNA',
      'Evolution',
      'Classification of Living Things',
      'Plant Structure and Function',
      'Animal Systems',
      'Human Anatomy',
      'Ecology and Environment',
      'Biodiversity',
      'Biotechnology',
    ],
    features: [
      'High-quality diagrams and illustrations',
      'System-wise human anatomy',
      'Genetic problem-solving guide',
      'Ecological concepts simplified',
      '100+ practice questions',
      'Mnemonics for easy memorization',
    ],
    topics: [
      'Cell Biology',
      'Genetics',
      'Evolution',
      'Ecology',
      'Human Physiology',
    ],
    studyTips: [
      'Use labeled diagrams to understand anatomical structures',
      'Create concept maps to connect different biological processes',
      'Practice Punnett squares for genetics problems',
      'Study in small sessions to retain complex biological terms',
    ],
  },
  mathematics: {
    name: 'Mathematics',
    icon: Calculator,
    color: 'text-purple-600',
    gradient: 'from-purple-500 to-pink-500',
    description: 'Develop strong analytical and problem-solving skills through mathematical reasoning',
    chapters: [
      'Number Systems',
      'Algebra Fundamentals',
      'Linear Equations',
      'Quadratic Equations',
      'Functions and Graphs',
      'Trigonometry',
      'Sequences and Series',
      'Coordinate Geometry',
      'Calculus Introduction',
      'Statistics',
      'Probability',
      'Matrices and Determinants',
    ],
    features: [
      '500+ solved problems',
      'Formula reference sheets',
      'Step-by-step solutions',
      'Graphical representations',
      'Shortcut techniques',
      'Previous EuEE questions',
    ],
    topics: [
      'Algebra',
      'Trigonometry',
      'Calculus',
      'Geometry',
      'Statistics & Probability',
    ],
    studyTips: [
      'Practice problems daily to build speed and accuracy',
      'Keep a formula sheet and review it regularly',
      'Understand the logic behind formulas, not just memorize them',
      'Work on previous years\' EuEE questions for exam pattern',
    ],
  },
  english: {
    name: 'English',
    icon: BookA,
    color: 'text-orange-600',
    gradient: 'from-orange-500 to-red-500',
    description: 'Enhance your language skills with comprehensive grammar, writing, and literature study',
    chapters: [
      'Parts of Speech',
      'Sentence Structure',
      'Tenses and Verb Forms',
      'Active and Passive Voice',
      'Direct and Indirect Speech',
      'Reading Comprehension',
      'Vocabulary Building',
      'Essay Writing',
      'Letter Writing',
      'Poetry Analysis',
      'Short Stories',
      'Drama and Literature',
    ],
    features: [
      'Grammar rules with examples',
      'Vocabulary enhancement exercises',
      'Writing templates and samples',
      'Reading comprehension passages',
      'Literature analysis guides',
      'Common error corrections',
    ],
    topics: [
      'Grammar',
      'Composition',
      'Reading Comprehension',
      'Literature',
      'Writing Skills',
    ],
    studyTips: [
      'Read English newspapers and books daily to improve vocabulary',
      'Practice writing essays on various topics',
      'Learn common idioms and phrases used in exams',
      'Analyze the structure of well-written paragraphs and essays',
    ],
  },
  sat: {
    name: 'SAT',
    icon: Target,
    color: 'text-red-600',
    gradient: 'from-red-500 to-rose-500',
    description: 'Prepare for the SAT exam with targeted practice and proven test-taking strategies',
    chapters: [
      'SAT Test Format Overview',
      'Reading Comprehension Strategies',
      'Evidence-Based Reading',
      'Writing and Language',
      'Grammar for SAT',
      'SAT Math: Algebra',
      'SAT Math: Geometry',
      'SAT Math: Trigonometry',
      'Problem Solving Techniques',
      'Data Analysis',
      'Essay Writing (Optional)',
      'Time Management Skills',
    ],
    features: [
      'Full-length practice tests',
      'Timed practice sections',
      'Answer explanations',
      'Score improvement strategies',
      'Test-taking tips',
      'Common pitfalls to avoid',
    ],
    topics: [
      'Reading',
      'Writing & Language',
      'Math (No Calculator)',
      'Math (Calculator)',
      'Essay (Optional)',
    ],
    studyTips: [
      'Take full-length practice tests under timed conditions',
      'Focus on your weakest sections first',
      'Learn to eliminate wrong answer choices quickly',
      'Review answer explanations even for questions you got right',
    ],
  },
}

export function TextbookDownloadPage({ grade, subject }: { grade: number; subject: string }) {
  const data = subjectData[subject]
  
  if (!data) {
    return <div>Subject not found</div>
  }

  const SubjectIcon = data.icon

  return (
    <main className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-yellow-50 to-red-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button variant="ghost" className="mb-6 gap-2" asChild>
              <Link href={`/grade-${grade}-textbooks`}>
                <ArrowLeft className="h-4 w-4" />
                Back to Grade {grade}
              </Link>
            </Button>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    className={`p-4 rounded-2xl bg-gradient-to-br ${data.gradient}`}
                    whileHover={{ scale: 1.05, rotate: 5 }}
                  >
                    <SubjectIcon className="h-12 w-12 text-white" />
                  </motion.div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Grade {grade}</div>
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                      {data.name} <span className="text-emerald-600">Textbook PDF</span>
                    </h1>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {data.description}
                </p>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button size="lg" className="w-full sm:w-auto gap-2 bg-emerald-600 hover:bg-emerald-700 text-lg px-8">
                    <Download className="h-5 w-5" />
                    Download PDF (Free)
                  </Button>
                </motion.div>

                <div className="flex flex-wrap gap-4 mt-6 text-sm">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-emerald-600" />
                    <span className="text-muted-foreground">Official Curriculum</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-emerald-600" />
                    <span className="text-muted-foreground">10,000+ Downloads</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-muted-foreground">4.8/5 Rating</span>
                  </div>
                </div>
              </div>

              {/* Textbook Preview */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative aspect-[3/4] max-w-sm mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 rounded-lg shadow-2xl border-4 border-white transform rotate-2">
                    <div className={`h-full bg-gradient-to-br ${data.gradient} p-8 rounded flex flex-col items-center justify-center text-white`}>
                      <SubjectIcon className="h-24 w-24 mb-4 opacity-90" />
                      <div className="text-center">
                        <div className="text-2xl font-bold mb-2">Grade {grade}</div>
                        <div className="text-3xl font-bold mb-4">{data.name}</div>
                        <div className="text-sm opacity-90">Ethiopian Curriculum</div>
                        <div className="text-sm opacity-90">2024 Edition</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-background">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-2">Table of Contents</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              This textbook covers {data.chapters.length} comprehensive chapters aligned with the Ethiopian curriculum
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {data.chapters.map((chapter, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Card className="border-2 hover:border-emerald-200 transition-all">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br ${data.gradient} flex items-center justify-center text-white font-bold text-sm`}>
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="font-semibold">{chapter}</h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-2">What's Inside This Textbook</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Comprehensive learning materials designed to help you excel in {data.name}
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="border-2 h-full">
                    <CardContent className="p-6">
                      <CheckCircle2 className={`h-8 w-8 ${data.color} mb-3`} />
                      <p className="font-medium leading-relaxed">{feature}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Helps */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-background">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-2">How This Textbook Helps Ethiopian Students</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Designed specifically for EuEE exam preparation and academic excellence
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-6 w-6 text-emerald-600" />
                    Aligned with Ethiopian Curriculum
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Every chapter follows the official Ministry of Education curriculum, ensuring you study exactly what's needed for your exams and EuEE preparation.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-6 w-6 text-emerald-600" />
                    EuEE Exam Focused
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Practice questions and examples are designed to match EuEE exam patterns, helping you prepare effectively for university entrance examinations.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-6 w-6 text-emerald-600" />
                    Self-Paced Learning
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Study at your own pace with clear explanations and structured content that builds from basic concepts to advanced topics progressively.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Smartphone className="h-6 w-6 text-emerald-600" />
                    Mobile-Friendly Format
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Download once and study anywhere, anytime. The PDF format works on all devices, allowing offline access without internet connection.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Study Tips */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-2">Study Tips for {data.name}</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Expert recommendations to maximize your learning efficiency
            </p>

            <Card className="border-2">
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {data.studyTips.map((tip, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <p className="leading-relaxed">{tip}</p>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* App CTA */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Smartphone className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Want More Than Just Textbooks?
            </h2>
            <p className="text-xl text-emerald-50 mb-8 leading-relaxed">
              Download our mobile app for interactive practice questions, mock exams, video explanations, and personalized study plans for {data.name} and all other subjects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2 bg-white text-emerald-700 hover:bg-emerald-50" asChild>
                <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                  <Download className="h-5 w-5" />
                  Download App
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 border-2 border-white text-white hover:bg-white/10">
                <Download className="h-5 w-5" />
                Download This PDF
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Textbooks */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-background">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold mb-6">More Grade {grade} Textbooks</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(subjectData)
              .filter(([key]) => key !== subject)
              .slice(0, 5)
              .map(([key, subj]) => {
                const Icon = subj.icon
                return (
                  <Card key={key} className="border-2 hover:border-emerald-200 transition-all">
                    <CardContent className="p-4">
                      <Link href={`/grade-${grade}-textbooks/${key}`} className="flex items-center justify-between group">
                        <div className="flex items-center gap-3">
                          <Icon className={`h-8 w-8 ${subj.color}`} />
                          <div>
                            <h3 className="font-semibold">{subj.name}</h3>
                            <p className="text-xs text-muted-foreground">Grade {grade}</p>
                          </div>
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-emerald-600 transition-colors" />
                      </Link>
                    </CardContent>
                  </Card>
                )
              })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
