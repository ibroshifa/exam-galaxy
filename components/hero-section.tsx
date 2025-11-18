'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Download, BookOpen, Zap } from 'lucide-react'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-yellow-50 to-red-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      {/* Animated background elements */}
      <motion.div
        className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-emerald-200/30 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-yellow-200/30 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-800"
            >
              <Zap className="h-4 w-4" />
              <span>2007-2017 EuEE Question Bank</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance"
            >
              Ace the <span className="text-emerald-600">Ethiopian University Entrance Exam</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-8 text-lg text-muted-foreground leading-relaxed text-pretty"
            >
              Download Exam Galaxy to access complete Ethiopian University Entrance Exam (EuEE) question bank from 2007-2017. Get free textbooks for grades 9-12 and study materials designed to help you excel.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <Button size="lg" className="gap-2 bg-emerald-600 hover:bg-emerald-700 text-white" asChild>
                <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                  <Download className="h-5 w-5" />
                  Download Exam Galaxy App
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 border-2" asChild>
                <a href="#textbooks">
                  <BookOpen className="h-5 w-5" />
                  Browse Free Textbooks
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex items-center justify-center gap-6 lg:justify-start text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>1000+ Questions</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-yellow-500" />
                <span>Free Access</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-red-500" />
                <span>All Subjects</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content - App Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md">
              <motion.div
                className="relative z-10"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="relative aspect-[9/19] w-full overflow-hidden rounded-3xl border-8 border-gray-800 bg-white shadow-2xl">
                  <Image
                    src="/exam-galaxy-app-euee-questions-interface.jpg"
                    alt="Exam Galaxy App - EuEE Questions"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>

              {/* Floating second screenshot */}
              <motion.div
                className="absolute -right-4 top-20 z-0 w-3/4 opacity-75"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <div className="relative aspect-[9/19] w-full overflow-hidden rounded-3xl border-8 border-gray-700 bg-white shadow-xl">
                  <Image
                    src="/ethiopian-student-studying-with-practice-questions.jpg"
                    alt="Practice Questions Screenshot"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -left-8 top-1/4 h-16 w-16 rounded-full bg-emerald-400/80"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div
                className="absolute -right-4 bottom-1/4 h-12 w-12 rounded-full bg-yellow-400/80"
                animate={{
                  scale: [1.3, 1, 1.3],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
