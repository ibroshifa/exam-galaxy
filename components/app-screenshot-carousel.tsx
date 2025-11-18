'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const screenshots = [
  {
    id: 1,
    image: '/exam-galaxy-app-questions-list.jpg',
    title: 'Complete Question Bank',
    description: 'Browse thousands of exam questions organized by subject and difficulty level',
  },
  {
    id: 2,
    image: '/exam-galaxy-practice-test-mode.jpg',
    title: 'Practice Test Mode',
    description: 'Take timed practice exams that simulate the real EUEE experience',
  },
  {
    id: 3,
    image: '/exam-galaxy-detailed-solutions.jpg',
    title: 'Detailed Solutions',
    description: 'Learn from detailed explanations for every question',
  },
]

export function AppScreenshotCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % screenshots.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [autoPlay])

  const next = () => {
    setCurrent((prev) => (prev + 1) % screenshots.length)
    setAutoPlay(false)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + screenshots.length) % screenshots.length)
    setAutoPlay(false)
  }

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-gradient-to-br from-emerald-50 to-blue-50">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            App Screenshots
          </h2>
          <p className="text-lg text-muted-foreground">
            See how Exam Galaxy helps you prepare effectively
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          {/* Screenshots carousel */}
          <div className="relative w-full lg:w-1/2 max-w-md">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="relative aspect-[9/19] w-full overflow-hidden rounded-3xl border-8 border-gray-800 bg-white shadow-2xl">
                  <Image
                    src={screenshots[current].image || "/placeholder.svg"}
                    alt={screenshots[current].title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <button
              onClick={prev}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-emerald-600 p-2 text-white hover:bg-emerald-700 transition-colors shadow-lg"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={next}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-emerald-600 p-2 text-white hover:bg-emerald-700 transition-colors shadow-lg"
              aria-label="Next screenshot"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrent(index)
                    setAutoPlay(false)
                  }}
                  className={`h-2 rounded-full transition-all ${
                    index === current ? 'bg-emerald-600 w-6' : 'bg-gray-300 w-2'
                  }`}
                  aria-label={`Go to screenshot ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Content section */}
          <div className="w-full lg:w-1/2 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-3xl font-bold text-foreground">
                  {screenshots[current].title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                  {screenshots[current].description}
                </p>
              </motion.div>
            </AnimatePresence>

            <Button size="lg" className="gap-2 bg-emerald-600 hover:bg-emerald-700 text-white w-full sm:w-auto mt-8" asChild>
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 13.5h8v8H3zM13.5 3h8v8h-8zM3 3h8v8H3zM13.5 13.5h8v8h-8z" />
                </svg>
                Download from Play Store
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
