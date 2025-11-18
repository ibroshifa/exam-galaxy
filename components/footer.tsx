import Link from 'next/link'
import { BookOpen, Facebook, Twitter, Instagram, Mail } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 border-t">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-6 w-6 text-emerald-600" />
              <span className="text-xl font-bold">Exam Galaxy</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ethiopian University Entrance Exam (EuEE) preparation app with 1000+ past questions (2007-2017). Free textbooks for grades 9-12 available on our website.
            </p>
          </div>

          {/* Textbooks */}
          <div>
            <h3 className="font-semibold mb-4">Textbooks</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/grade-9-textbooks" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                  Grade 9 Textbooks
                </Link>
              </li>
              <li>
                <Link href="/grade-10-textbooks" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                  Grade 10 Textbooks
                </Link>
              </li>
              <li>
                <Link href="/grade-11-textbooks" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                  Grade 11 Textbooks
                </Link>
              </li>
              <li>
                <Link href="/grade-12-textbooks" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                  Grade 12 Textbooks
                </Link>
              </li>
            </ul>
          </div>

          {/* Subjects */}
          <div>
            <h3 className="font-semibold mb-4">Subjects</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/grade-9-textbooks" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                  Physics
                </Link>
              </li>
              <li>
                <Link href="/grade-9-textbooks" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                  Chemistry
                </Link>
              </li>
              <li>
                <Link href="/grade-9-textbooks" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                  Biology
                </Link>
              </li>
              <li>
                <Link href="/grade-9-textbooks" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                  Mathematics
                </Link>
              </li>
              <li>
                <Link href="/grade-9-textbooks" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                  English
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex gap-4 mb-4">
              <a href="#" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="mailto:contact@examgalaxy.com" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              <a href="mailto:contact@examgalaxy.com" className="hover:text-emerald-600">
                contact@examgalaxy.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} Exam Galaxy. All rights reserved. Helping Ethiopian students ace their entrance exam.
          </p>
        </div>
      </div>
    </footer>
  )
}
