'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BookOpen, Download, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const grades = [
  {
    grade: 9,
    description: 'Foundation year covering core concepts',
    subjects: 6,
    downloads: '12K+',
  },
  {
    grade: 10,
    description: 'Building advanced understanding',
    subjects: 6,
    downloads: '15K+',
  },
  {
    grade: 11,
    description: 'Preparing for university entrance',
    subjects: 6,
    downloads: '18K+',
  },
  {
    grade: 12,
    description: 'Final year EuEE preparation',
    subjects: 6,
    downloads: '25K+',
  },
]

export function TextbooksSection() {
  return (
    <section id="textbooks" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Free <span className="text-emerald-600">Textbook Downloads</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Download official Ethiopian Ministry of Education textbooks for all grades completely free
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {grades.map((item, index) => (
            <motion.div
              key={item.grade}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-2 hover:border-emerald-200 transition-all hover:shadow-xl group">
                <CardContent className="p-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="mb-4"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-emerald-100 group-hover:bg-emerald-200 transition-colors">
                          <BookOpen className="h-6 w-6 text-emerald-600" />
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

                    <Button asChild className="w-full gap-2 bg-emerald-600 hover:bg-emerald-700">
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
    </section>
  )
}
