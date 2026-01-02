'use client'
import { motion } from 'framer-motion'
import { Footer } from '@/components/footer'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            About Us
          </motion.h1>

          <p className="text-lg text-muted-foreground mb-6">
            Exam Galaxy helps Ethiopian high‑school students prepare for
            university entrance exams. The app focuses on Grade 12
            exam preparation and provides interactive practice and concise
            study notes.
          </p>

          <p className="text-lg text-muted-foreground mb-4">
            Exam Galaxy includes entrance exam questions and worked solutions
            from 2000–2017 (EC) and Grade 10 matric past questions from
            2003–2008, all with answers and explanations.
          </p>

          <p className="mb-6">
            In addition, the app contains short, textbook-aligned notes for
            Grades 9–12 to support revision and quick review.
          </p>

          {/* Mission Section (merged) */}
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-semibold mt-8 mb-3"
          >
            Mission & Purpose
          </motion.h2>

          <p className="text-lg text-muted-foreground mb-4">
            Our mission is to make high-quality, curriculum-aligned EUEE Questions and
            practice materials easily accessible to every student in Ethiopia.
          </p>

          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Provide accurate, up-to-date Course Outlines and textbooks.</li>
            <li>Offer interactive practice and offline study tools.</li>
            <li>Support equitable access to exam preparation resources.</li>
          </ul>

          {/* Contact Section (merged) */}
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-semibold mt-8 mb-3"
          >
            Contact Us
          </motion.h2>

          <p className="text-lg text-muted-foreground mb-4">
            For feedback, corrections, or partnership inquiries, email us at
            <a className="text-primary ml-1" href="mailto:ibroshifa@gmail.com.com">ibroshifa@gmail.com</a>.
          </p>

          <p className="mb-6">You can also reach us on our social channels linked in the footer.</p>

          {/* <div className="mt-6">
            <form className="grid gap-4">
              <input className="border rounded px-3 py-2" placeholder="Your name" aria-label="Your name" />
              <input className="border rounded px-3 py-2" placeholder="Your email" aria-label="Your email" />
              <textarea className="border rounded px-3 py-2" placeholder="Message" aria-label="Message" rows={4} />
              <button type="submit" className="inline-flex items-center gap-2 px-4 py-2 rounded bg-primary text-white">Send</button>
            </form>
          </div> */}
        </div>
      </section>

      <Footer />
    </main>
  )
}
