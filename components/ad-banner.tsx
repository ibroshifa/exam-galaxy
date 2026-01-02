'use client'

import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useState } from 'react'

interface AdBannerProps {
  variant?: 'inline' | 'section' | 'sticky'
}

export function AdBanner({ variant = 'inline' }: AdBannerProps) {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  const baseClasses = 'relative overflow-hidden rounded-lg bg-gradient-to-r from-primary to-primary/80 p-4 sm:p-6'

  if (variant === 'sticky') {
    if (dismissed) return null
    return (
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 right-0 z-40 m-4 max-w-sm"
      >
        <div className={baseClasses}>
          <button
            onClick={() => setDismissed(true)}
            className="absolute right-4 top-4 text-primary-foreground hover:opacity-80"
            name="dismiss-ad-banner"
            aria-label='close-button'
          >
            <X className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-4 text-primary-foreground">
            <img src="/exam-galaxy-icon.jpg" alt="Exam Galaxy logo" className="w-12 h-12 sm:w-14 sm:h-14 rounded-md" />
            <div>
              <h3 className="font-display font-bold text-lg mb-1">Pass the matric exam — Fast.</h3>
              <p className="text-sm mb-3">Interactive quizzes, offline notes, and targeted practice —Study smarter, score higher.</p>
              <a
                href="https://play.google.com/store/apps/details?id=com.appysinia.exam_galaxy&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-primary-foreground px-4 py-2 text-sm font-semibold text-primary hover:opacity-90 transition"
              >
                Download the App
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      className={baseClasses}
    >
      <button
        onClick={() => setDismissed(true)}
        className="absolute right-4 top-4 text-primary-foreground hover:opacity-80"
        name="dismiss-ad-banner"
        aria-label='close-button'
      >
        <X className="h-4 w-4" />
      </button>
      <div className="flex items-center gap-4 text-primary-foreground">
        <img src="/exam-galaxy-icon.jpg" alt="Exam Galaxy logo" className="w-20 h-20 sm:w-14 sm:h-14 rounded-md" />
        <div>
          <h3 className="font-display font-bold mb-1">Pass the matric exam — Fast.</h3>
          <p className="text-sm mb-3">Interactive quizzes, offline notes, and focused practice — everything students need to win the exam.</p>
          <a
            href="https://play.google.com/store/apps/details?id=com.appysinia.exam_galaxy&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-primary-foreground px-4 py-2 text-sm font-semibold text-primary hover:opacity-90 transition"
          >
            Get the App
          </a>
        </div>
      </div>
    </motion.div>
  )
}
