'use client'

import { motion } from 'framer-motion'
import { Download, BookOpen, Target } from 'lucide-react'
import { AdBanner } from './ad-banner'

interface TextbookDownloadComponentProps {
  grade: number
  subject: string
  title: string
  description: string
}

export function TextbookDownloadComponent({
  grade,
  subject,
  title,
  description,
}: TextbookDownloadComponentProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="border-b border-border bg-card">
        <div className="mx-auto max-w-4xl px-4 py-4 sm:px-6 lg:px-8">
          <nav className="flex gap-2 text-sm text-muted-foreground">
            <a href="/" className="hover:text-foreground transition">Home</a>
            <span>/</span>
            <a href={`/grade-${grade}-textbooks`} className="hover:text-foreground transition">
              Grade {grade}
            </a>
            <span>/</span>
            <span className="text-foreground">{subject}</span>
          </nav>
        </div>
      </div>

      <motion.div
        className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {title}
          </h1>
          <p className="text-lg text-muted-foreground">
            {description}
          </p>
        </motion.div>

        {/* Quick Download Button */}
        <motion.div variants={itemVariants} className="mb-8">
          <a
            href="#download"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90 transition"
          >
            <Download className="h-5 w-5" />
            Download PDF Now
          </a>
        </motion.div>

        {/* Ad Banner */}
        <motion.div variants={itemVariants} className="mb-8">
          <AdBanner variant="inline" />
        </motion.div>

        {/* Table of Contents */}
        <motion.section variants={itemVariants} className="mb-8">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">Table of Contents</h2>
          <div className="rounded-lg border border-border bg-card p-6">
            <ul className="space-y-2 text-foreground">
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                Chapter 1: Fundamental Concepts & Units
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                Chapter 2: Core Principles & Laws
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                Chapter 3: Applications & Problem Solving
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                Chapter 4: Advanced Topics
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                Chapter 5: Review Questions & Answers
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                Appendix: Formulas & Constants
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Key Features */}
        <motion.section variants={itemVariants} className="mb-8">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">What's Inside</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-6">
              <BookOpen className="h-6 w-6 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Comprehensive Curriculum</h3>
              <p className="text-sm text-muted-foreground">
                Complete coverage of all topics according to Ethiopian education standards.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <Target className="h-6 w-6 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-2">EuEE Focused</h3>
              <p className="text-sm text-muted-foreground">
                Aligned with university entrance examination patterns and requirements.
              </p>
            </div>
          </div>
        </motion.section>

        {/* How It Helps */}
        <motion.section variants={itemVariants} className="mb-8">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">How This Textbook Helps You</h2>
          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <p className="text-foreground">
              This Grade {grade} {subject} textbook is designed specifically for Ethiopian students preparing for the EuEE exam. It includes:
            </p>
            <ul className="space-y-2 text-foreground pl-4">
              <li>✓ Clear explanations of complex concepts</li>
              <li>✓ Worked examples for better understanding</li>
              <li>✓ Practice problems with solutions</li>
              <li>✓ EuEE exam-style questions</li>
              <li>✓ Quick reference summaries</li>
              <li>✓ Offline access and printable format</li>
            </ul>
          </div>
        </motion.section>

        {/* Download Section */}
        <motion.section
          variants={itemVariants}
          id="download"
          className="mb-8 rounded-lg border border-border bg-gradient-to-r from-primary/10 to-primary/5 p-8"
        >
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">Download Your Textbook</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://example.com/download"
              className="flex-1 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90 transition text-center"
            >
              Download PDF
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.appysinia.exam_galaxy&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-lg border border-primary px-6 py-3 font-semibold text-primary hover:bg-primary/5 transition text-center"
            >
              Get Exam Galaxy App
            </a>
          </div>
        </motion.section>

        {/* Additional CTA */}
        <motion.section variants={itemVariants} className="mb-8">
          <AdBanner variant="inline" />
        </motion.section>

        {/* More Resources */}
        <motion.section variants={itemVariants}>
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">More Resources</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a
              href={`/grade-${grade}-textbooks`}
              className="rounded-lg border border-border bg-card p-4 hover:bg-card/80 transition"
            >
              <p className="font-semibold text-foreground">All Grade {grade} Subjects</p>
              <p className="text-sm text-muted-foreground">Browse all available textbooks for this grade</p>
            </a>
            {grade < 12 && (
              <a
                href={`/grade-${grade + 1}-textbooks`}
                className="rounded-lg border border-border bg-card p-4 hover:bg-card/80 transition"
              >
                <p className="font-semibold text-foreground">Grade {grade + 1} Textbooks</p>
                <p className="text-sm text-muted-foreground">Prepare for next grade with advanced materials</p>
              </a>
            )}
          </div>
        </motion.section>
      </motion.div>
    </main>
  )
}
