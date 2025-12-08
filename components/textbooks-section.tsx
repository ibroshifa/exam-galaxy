'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BookOpen, Download, ChevronRight, Plus, Minus } from 'lucide-react'
import Link from 'next/link'
import { FramerAnimation3 } from './minorcomponents/animation'
import { generateFAQSchema } from '@/lib/faqSchema'
import Script from 'next/script'
import { useState } from 'react'

const grades = [
  {
    grade: 9,
    description: 'Foundation year covering core concepts',
    subjects: 13,
    downloads: '12K+',
  },
  {
    grade: 10,
    description: 'Building advanced understanding',
    subjects: 13,
    downloads: '15K+',
  },
  {
    grade: 11,
    description: 'Preparing for university entrance',
    subjects: 10,
    downloads: '18K+',
  },
  {
    grade: 12,
    description: 'Final year EuEE preparation',
    subjects: 10,
    downloads: '25K+',
  },
]

const FAQs = [
{
  question: `Where can i get past entrance exam papers?`,
  answer:
    `You can find past entrance exams with answer and explanation in exam galaxy app which you can find in our website.`,
},
{
  question: `Where can i download grade 12 books pdf?`,
  answer:
    `You can download all grade 12 books inside examgalaxy website under books section.`,
},

]
const faqschema = generateFAQSchema(FAQs)

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="rounded-lg border border-border bg-background overflow-hidden hover:shadow-md transition-shadow"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 hover:bg-muted/50 transition-colors group"
      >
        <span className="text-left font-semibold text-foreground text-sm sm:text-base leading-snug">
          {question}
        </span>
        <motion.div
          animate={{ scale: isOpen ? 1.1 : 1 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          {isOpen ? (
            <motion.div
              key="minus"
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <Minus className="h-5 w-5 text-primary" />
            </motion.div>
          ) : (
            <motion.div
              key="plus"
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <Plus className="h-5 w-5 text-primary group-hover:text-primary/80 transition-colors" />
            </motion.div>
          )}
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.2 }}
        className="overflow-hidden"
      >
        <div className="px-4 py-4 sm:px-6 sm:py-5 border-t border-border bg-card">
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            {answer}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function TextbooksSection() {
  return (<>
  

    <Script
      id='faq-schema'
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html:JSON.stringify(faqschema)
      }}
    />
    <section id="textbooks" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-background">

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Free <span className="text-primary">Textbook Downloads</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Download official Ethiopian Ministry of Education textbooks for all grades completely free with Exam Galaxy
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {grades.map((item, index) => (
            <motion.div
              key={item.grade}
              initial={{ opacity: 1, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-2 hover:border-primary/30 transition-all hover:shadow-xl group dark:hover:border-primary/40">
                <CardContent className="p-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="mb-4"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <BookOpen className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">Grade {item.grade}</h3>
                          <p className="text-sm text-muted-foreground">{item.subjects} Subjects</p>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Download className="h-4 w-4" />
                      <span>{item.downloads} downloads</span>
                    </div>

                    <Button asChild className="w-full gap-2 bg-primary hover:bg-primary/90">
                      <Link href={`/grade-${item.grade}-textbooks`}>
                        View Textbooks
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

  <div className="mt-10">
    <FramerAnimation3 >
        <h2 className="font-display text-2xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
        <div className="rounded-lg border border-border bg-card p-6 space-y-4">
          {FAQs.map((faq, idx) => (
            <FAQItem
              key={idx}
              question={faq.question}
              answer={faq.answer}
              index={idx}
            />
          ))}
        </div>
    </FramerAnimation3>
  </div>
    </section>
  </>
  )
}
