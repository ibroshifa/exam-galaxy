'use client'

import { motion } from 'framer-motion'
import { BookOpen, Clock, Filter, Zap, BarChart3, Smartphone } from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    title: 'Comprehensive Exam Resources',
    description: '2000+ past exam questions from 2007-2017 entrance exams with complete answers and detailed explanations',
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
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {appDescription.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed" >
            {appDescription.description}
          </p>
        </motion.div>


        <motion.div
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12 mt-16" 
        >
          <h3 className="text-2xl font-bold tracking-tight sm:text-3xl pt-16 mb-4" id='features'>
            Unique Features
          </h3>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Everything you need to excel in the EUEE, all in one app
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="py-8"
        >
          <div className="relative max-w-3xl mx-auto">
            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 1, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="relative pl-16"
                >
                  {/* left connector: two segments (top and bottom) leaving a gap at the bullet */}
                  <div className="absolute" style={{ left: 20, top: 0, height: 'calc(50% - 12px)' }}>
                    <div className="w-px bg-muted-foreground/10 h-full " />
                  </div>
                  <div className="absolute" style={{ left: 20, bottom: 0, height: 'calc(50% - 12px)' }}>
                    <div className="w-px bg-muted-foreground/10 h-full" />
                  </div>
                  <div className="absolute" style={{ left: 20, bottom: 0, height: 'calc(50% - 12px)' }}>
                    <div className="w-px bg-green-600/50 h-full" />
                  </div>
                  <div className="absolute left-0 top-0">
                    <div className="w-10 h-10 rounded-full bg-background border-2 border-muted-foreground/10 flex items-center justify-center">
                      <feature.icon className={`h-5 w-5 ${feature.color}`} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{feature.title}</h4>
                    <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
