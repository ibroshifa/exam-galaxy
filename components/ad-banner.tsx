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
          >
            <X className="h-4 w-4" />
          </button>
          <div className="text-primary-foreground">
            <h3 className="font-display font-bold text-lg mb-1">Prepare with Exam Galaxy</h3>
            <p className="text-sm mb-3">Master EuEE with interactive practice tests and expert-curated content.</p>
            <a
              href="https://play.google.com/store/apps/details?id=com.examgalaxy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-primary-foreground px-4 py-2 text-sm font-semibold text-primary hover:opacity-90 transition"
            >
              Download Now
            </a>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={baseClasses}
    >
      <button
        onClick={() => setDismissed(true)}
        className="absolute right-4 top-4 text-primary-foreground hover:opacity-80"
      >
        <X className="h-4 w-4" />
      </button>
      <div className="text-primary-foreground">
        <h3 className="font-display font-bold mb-2">Download Exam Galaxy App</h3>
        <p className="text-sm mb-3">Get interactive practice tests, offline access, and personalized learning paths for EuEE exam preparation.</p>
        <a
          href="https://play.google.com/store/apps/details?id=com.examgalaxy"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-primary-foreground px-4 py-2 text-sm font-semibold text-primary hover:opacity-90 transition"
        >
          Get App
        </a>
      </div>
    </motion.div>
  )
}
