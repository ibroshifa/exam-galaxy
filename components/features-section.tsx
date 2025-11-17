'use client'

import { motion } from 'framer-motion'
import { BookOpen, Brain, FileText, TrendingUp, Users, Zap } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const features = [
  {
    icon: BookOpen,
    title: 'Complete Textbooks',
    description: 'Access all Ethiopian curriculum textbooks for grades 9-12 in PDF format',
    color: 'text-emerald-600',
  },
  {
    icon: Brain,
    title: 'Smart Practice',
    description: 'AI-powered question bank with thousands of EuEE practice questions',
    color: 'text-blue-600',
  },
  {
    icon: FileText,
    title: 'Past Papers',
    description: 'Complete collection of previous EuEE exam papers with solutions',
    color: 'text-yellow-600',
  },
  {
    icon: TrendingUp,
    title: 'Progress Tracking',
    description: 'Monitor your study progress and identify weak areas to improve',
    color: 'text-red-600',
  },
  {
    icon: Users,
    title: 'Study Community',
    description: 'Connect with fellow students and share study tips and resources',
    color: 'text-purple-600',
  },
  {
    icon: Zap,
    title: 'Offline Access',
    description: 'Download materials and study anytime, anywhere without internet',
    color: 'text-orange-600',
  },
]

export function FeaturesSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Everything You Need to <span className="text-emerald-600">Excel</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive study tools designed specifically for Ethiopian students preparing for university entrance exams
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
              <Card className="h-full border-2 hover:border-emerald-200 transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <feature.icon className={`h-12 w-12 mb-4 ${feature.color}`} />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
