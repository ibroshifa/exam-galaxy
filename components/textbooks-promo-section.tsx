'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { BookOpen, Download } from 'lucide-react'

export function TextbooksPromoSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-gradient-to-r from-emerald-600 to-teal-600">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-white">
            Also Access Free Textbooks
          </h2>
          <p className="text-lg text-emerald-50 leading-relaxed mb-8 text-pretty">
            While using the Exam Galaxy app for practice questions, download free textbooks from our website for all Ethiopian high school subjects. Access Physics, Chemistry, Biology, Mathematics, English, History, Geography, and Economics textbooks for grades 9-12.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="gap-2" asChild>
              <a href="#textbooks">
                <BookOpen className="h-5 w-5" />
                Browse All Textbooks
              </a>
            </Button>
            <Button size="lg" className="gap-2 bg-white text-emerald-600 hover:bg-emerald-50" asChild>
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                <Download className="h-5 w-5" />
                Download App
              </a>
            </Button>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 text-sm text-emerald-100"
          >
            ✓ 100% Free • ✓ Official Curriculum • ✓ All Grades & Subjects
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
