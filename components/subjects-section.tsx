'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Atom, Beaker, Dna, Calculator, BookA, Target } from 'lucide-react'

const subjects = [
  {
    name: 'Physics',
    icon: Atom,
    description: 'Mechanics, Electricity, Thermodynamics & Modern Physics',
    color: 'from-blue-500 to-cyan-500',
    iconColor: 'text-blue-600',
  },
  {
    name: 'Chemistry',
    icon: Beaker,
    description: 'Organic, Inorganic, Physical & Analytical Chemistry',
    color: 'from-green-500 to-emerald-500',
    iconColor: 'text-green-600',
  },
  {
    name: 'Biology',
    icon: Dna,
    description: 'Cellular Biology, Genetics, Ecology & Human Anatomy',
    color: 'from-emerald-500 to-teal-500',
    iconColor: 'text-emerald-600',
  },
  {
    name: 'Mathematics',
    icon: Calculator,
    description: 'Algebra, Calculus, Geometry & Statistics',
    color: 'from-purple-500 to-pink-500',
    iconColor: 'text-purple-600',
  },
  {
    name: 'English',
    icon: BookA,
    description: 'Grammar, Comprehension, Writing & Literature',
    color: 'from-orange-500 to-red-500',
    iconColor: 'text-orange-600',
  },
  {
    name: 'SAT',
    icon: Target,
    description: 'SAT Math, Reading & Writing Preparation',
    color: 'from-red-500 to-rose-500',
    iconColor: 'text-red-600',
  },
]

export function SubjectsSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Supported <span className="text-emerald-600">Subjects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Master all core subjects required for the Ethiopian University Entrance Examination
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject, index) => (
            <motion.div
              key={subject.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="h-full border-2 hover:border-emerald-200 transition-all overflow-hidden group">
                <CardContent className="p-6 relative">
                  {/* Animated gradient background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${subject.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />
                  
                  <div className="relative z-10">
                    <motion.div
                      animate={{
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2,
                      }}
                    >
                      <subject.icon className={`h-14 w-14 mb-4 ${subject.iconColor}`} />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-2">{subject.name}</h3>
                    <p className="text-muted-foreground leading-relaxed">{subject.description}</p>
                  </div>

                  {/* Animated particles */}
                  <motion.div
                    className={`absolute top-4 right-4 h-2 w-2 rounded-full bg-gradient-to-r ${subject.color}`}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3,
                    }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
