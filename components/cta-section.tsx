'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Download, Star } from 'lucide-react'

export function CTASection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-yellow-400/20 blur-3xl"
        animate={{
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-red-400/20 blur-3xl"
        animate={{
          y: [0, -50, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="mx-auto max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Start Your EUEE Preparation with Exam Galaxy
          </h2>
          <p className="text-xl text-emerald-50 mb-8 leading-relaxed max-w-2xl mx-auto">
            Download the Exam Galaxy app to access 1000+ past exam questions from 2007-2017. Practice with real EUEE questions and download free textbooks from this website.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="gap-2 bg-white text-emerald-700 hover:bg-emerald-50" asChild>
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                <Download className="h-5 w-5" />
                Download Exam Galaxy App
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 border-2 border-white text-white hover:bg-white/10" asChild>
              <a href="#textbooks">
                Browse Free Textbooks
              </a>
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-2 text-emerald-100"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm">4.8/5 rating from 10,000+ students</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
