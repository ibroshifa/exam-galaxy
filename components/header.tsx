'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const grades = ['Grade 9', 'Grade 10', 'Grade 11', 'Grade 12']

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 rounded-b-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8 ">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image alt='' src={'/exam-galaxy-icon.jpg'} width={40} height={40} className='rounded-lg'/>
          <span className="hidden font-display font-bold text-foreground sm:inline">Exam Galaxy</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition">
            Home
          </Link>

          {/* Grades Dropdown */}
          <div className="group relative">
            <button className="text-sm font-medium text-foreground hover:text-primary transition">
              Grades
            </button>
            <div className="invisible absolute left-0 top-full mt-0 w-40 rounded-lg border border-border bg-card shadow-lg group-hover:visible">
              {grades.map((grade) => {
                const gradeNum = grade.split(' ')[1]
                return (
                  <Link
                    key={grade}
                    href={`/grade-${gradeNum}-textbooks`}
                    className="block px-4 py-3 text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition rounded-lg"
                  >
                    {grade}
                  </Link>
                )
              })}
            </div>
          </div>

          <Link href="/#features" className="text-sm font-medium text-foreground hover:text-primary transition">
            Features
          </Link>

          <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition">
            About
          </a>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Download Button */}
          <a
            href="https://play.google.com/store/apps/details?id=com.appysinia.exam_galaxy&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition"
          >
            Download App
          </a>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-lg p-2 hover:bg-muted transition"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5 text-foreground" />
            ) : (
              <Moon className="h-5 w-5 text-foreground" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-lg p-2 hover:bg-muted transition"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 1, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 1, y: -10 }}
          className="border-t border-border bg-card md:hidden"
        >
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/"
              className="block text-sm font-medium text-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <div className="space-y-2">
              <p className="text-xs font-semibold text-muted-foreground">GRADES</p>
              {grades.map((grade) => {
                const gradeNum = grade.split(' ')[1]
                return (
                  <Link
                    key={grade}
                    href={`/grade-${gradeNum}-textbooks`}
                    className="block pl-2 text-sm text-foreground hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {grade}
                  </Link>
                )
              })}
            </div>
            <Link
              href="/#features"
              className="block text-sm font-medium text-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <a
              href="#"
              className="block text-sm font-medium text-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.appysinia.exam_galaxy&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-lg bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground hover:bg-primary/90"
              onClick={() => setIsOpen(false)}
            >
              Download App
            </a>
          </div>
        </motion.div>
      )}
    </header>
  )
}
