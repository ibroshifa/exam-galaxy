'use client'

import { motion } from 'framer-motion'
import { BookOpen, Clock, Filter, Zap, BarChart3, Smartphone } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const features = [
  {
    icon: BookOpen,
    title: 'Comprehensive Exam Resources',
    description: '2000+ past exam questions from 2000-2017 EC entrance exams and 2003-2008 Grade 10 matric questions with complete answers and detailed explanations',
    color: 'text-emerald-600',
  },
  {
    icon: Zap,
    title: 'Brief Explanations',
    description: 'Every question includes not just the correct answer, but also a detailed explanation to help you understand the concept deeply',
    color: 'text-yellow-600',
  },
  {
    icon: Filter,
    title: 'Categorized by Chapter',
    description: 'Filter and organize practice questions by unit and chapter, allowing you to focus on specific topics and master them systematically',
    color: 'text-blue-600',
  },
  {
    icon: BookOpen,
    title: 'Short Notes from Textbooks',
    description: 'Access brief and comprehensive summaries of Ethiopian Curriculum textbooks covering grades 9-12, perfect for quick revisions',
    color: 'text-red-600',
  },
  {
    icon: Clock,
    title: 'Time Tracker & Focus Timer',
    description: 'Track your study patterns by logging study sessions, dates, and times. Built-in timer helps you maintain focused study sessions',
    color: 'text-orange-600',
  },
  {
    icon: Smartphone,
    title: 'User-Friendly Interface',
    description: 'Designed specifically for students, with a clean and intuitive interface that makes it easy to find materials and study efficiently',
    color: 'text-purple-600',
  },
]

const appDescription = {
  title: 'About Exam Galaxy',
  description: 'Exam Galaxy is an Ethiopian entrance exam preparation app designed specifically for grade 12 students preparing for the Ethiopian University Entrance Examination (EUEE). The app provides comprehensive resources to help you succeed.',
}

export function AppFeaturesSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {appDescription.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {appDescription.description}
          </p>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12 mt-16"
        >
          <h3 className="text-2xl font-bold tracking-tight sm:text-3xl mb-4">
            Unique Features
          </h3>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Everything you need to excel in the EUEE, all in one app
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-2 hover:border-primary/20 transition-all hover:shadow-lg dark:hover:border-primary/30">
                <CardContent className="p-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <feature.icon className={`h-12 w-12 mb-4 ${feature.color}`} />
                  </motion.div>
                  <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
