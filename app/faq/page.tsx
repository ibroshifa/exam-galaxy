'use client'

import { generateFAQSchema } from "@/lib/faqSchema"
import Script from "next/script"
import { motion } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'
import { useState } from 'react'
import { Footer } from "@/components/footer"
import { AdBanner } from "@/components/ad-banner"

const FAQs = [
  {
    question: `Where can i get past entrance exam papers?`,
    answer:
      `You can find past entrance exams with answer and explanation in exam galaxy app which you can find in our website. The app contains question banks from 2007-2017 with detailed solutions.`,
  },
  {
    question: `Where can i download grade 12 books pdf?`,
    answer:
      `You can download all grade 12 books inside examgalaxy website under books section. All textbooks are available for free in PDF format for offline access.`,
  },
  {
    question: `What subjects are available in the textbook section?`,
    answer:
      `We provide textbooks for subjects including Mathematics, Physics, Chemistry, Biology, English, History, Geography, and Economics for grades 9-12.`,
  },
  {
    question: `How can I use the Exam Galaxy app?`,
    answer:
      `Download the Exam Galaxy app from Google Play Store, create an account, and start practicing with our comprehensive question bank. The app features detailed explanations for each question.`,
  },
  {
    question: `Can I download textbooks for offline use?`,
    answer:
      `Yes, all textbook PDFs can be downloaded and used offline. This is perfect for studying without internet connectivity.`,
  },
  {
    question: `Which grades are covered?`,
    answer:
      `We provide comprehensive study materials for grades 9, 10, 11, and 12, aligned with Ethiopian education standards.`,
  },
  {
    question: `How often are the materials updated?`,
    answer:
      `Our materials are regularly updated to reflect the latest curriculum and exam patterns. Check back frequently for new content.`,
  },
]

const faqschema = generateFAQSchema(FAQs)

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="rounded-lg border border-border bg-card overflow-hidden hover:shadow-md transition-shadow"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 hover:bg-muted/50 transition-colors group"
      >
        <span className="text-left font-semibold text-foreground text-sm sm:text-base leading-snug">
          {question}
        </span>
        <motion.div
          animate={{ scale: isOpen ? 1.1 : 1 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          {isOpen ? (
            <motion.div
              key="minus"
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <Minus className="h-5 w-5 text-primary" />
            </motion.div>
          ) : (
            <motion.div
              key="plus"
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <Plus className="h-5 w-5 text-primary group-hover:text-primary/80 transition-colors" />
            </motion.div>
          )}
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.2 }}
        className="overflow-hidden"
      >
        <div className="px-4 py-4 sm:px-6 sm:py-5 border-t border-border bg-muted/30">
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            {answer}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function FAQPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqschema),
        }}
      />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-yellow-50 to-red-50 px-4 py-12 sm:py-16 lg:py-24 dark:from-stone-950 dark:via-stone-950 dark:to-stone-950">
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
              ease: "easeInOut",
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
              ease: "easeInOut",
            }}
          />

          <div className="relative mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-4 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-800"
              >
                <HelpCircle className="h-4 w-4" />
                <span>Got Questions?</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-4 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance"
              >
                Frequently Asked Questions
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty"
              >
                Find answers to common questions about Exam Galaxy, textbooks, and how to make the most of our study materials.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Items Section */}
        <section className="px-4 py-12 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-3xl">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-6"
            >
              {FAQs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  index={index}
                />
              ))}
            </motion.div>

            {/* Additional Help Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-12 sm:mt-16 rounded-lg border border-border bg-card p-6 sm:p-8 text-center"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                Didn't find your answer?
              </h3>
              <p className="text-muted-foreground mb-6 text-sm sm:text-base">
                Check out our website resources or download the Exam Galaxy app for more comprehensive help and support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://play.google.com/store/apps/details?id=com.appysinia.exam_galaxy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90 transition text-sm sm:text-base"
                >
                  Download Exam Galaxy App
                </a>
                <a
                  href="/"
                  className="inline-flex items-center justify-center rounded-lg border border-primary px-6 py-3 font-semibold text-primary hover:bg-primary/5 transition text-sm sm:text-base"
                >
                  Go Home
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Ad Banner */}
        <AdBanner variant="inline" />

        {/* Footer */}
        <Footer />
      </main>
    </>
  )
}