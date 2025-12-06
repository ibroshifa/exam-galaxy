import { Download, BookOpen, Target } from 'lucide-react'
import { AdBanner } from './ad-banner'
import { FramerAnimation1, FramerAnimation2, FramerAnimation3 } from './minorcomponents/animation'
import data from '../app/contents.json'
import { Footer } from './footer';
import Script from 'next/script';
import { generateFAQSchema } from '@/lib/faqSchema';
interface TextbookDownloadComponentProps {
  grade: 9|10|11|12;
  subject: string
  title: string
  description: string
}

const a = {
  question: `Where can past entrance exams?`,
  answer:
  `You can find exam galaxy questions and practice tests in our app to help you prepare for the EuEE.`,
}
export function TextbookDownloadComponent({
  grade,
  subject,
  title,
  description,
}: TextbookDownloadComponentProps) {
  
  if (subject.split(' ')[0]=='Mathematics') {
    subject='math'
  }else if (subject.split(' ')[0]=='English') {
    subject='english'
  }else(
    subject = subject.split(' ')[0]
  )
  const units = data[`grade-${grade}`][subject.toLocaleLowerCase() as 'physics' | 'biology' | 'chemistry' | 'english' | 'history' | 'geography' | 'economics' | 'math']['Course-Outline']

  const grade9BiologyFAQ = [
  {
    question: `What topics are covered in the Ethiopis Grade ${grade} ${subject} textbook?`,
    answer:
      `The Grade ${grade} ${subject} textbook covers topics such as ${units.map(unit=>unit.split(':')[1]).splice(0,units.length-1).join()} and ${units[units.length-1].split(':')[1]}`,
  },
  {
    question: `How can I download the Grade ${grade} ${subject} textbook PDF?`,
    answer:
      `You can download the Grade ${grade} ${subject} textbook PDF for free from our website by clicking the download link provided on the page.`,
  },
  {
    question: `Where can i get past entrance exams for Grade ${grade} ${subject}?`,
    answer:
      `You can find past entrance questions and practice tests in our EXAM GALAXY app to help you prepare for the entrance exam.`,
  }
]

const faqschema = generateFAQSchema(grade9BiologyFAQ)
  
  return (
    <>
    <Script
      id='faq-schema'
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html:JSON.stringify(faqschema)
      }}
    />
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
        <FramerAnimation1>
          <FramerAnimation2>

            <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {title}
            </h1>
            <p className="text-lg text-muted-foreground">
              {description}
            </p>
          </FramerAnimation2>
        
        {/* Header */}

        {/* Quick Download Button */}
        <FramerAnimation2>
          <a
            href="#download"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90 transition"
          >
            <Download className="h-5 w-5" />
            Download PDF Now
          </a>

        </FramerAnimation2>
        

        {/* Ad Banner */} 
        <FramerAnimation2>
          <AdBanner variant="inline" />
        </FramerAnimation2>

        {/* Table of Contents */}
          <FramerAnimation3>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Table of Contents</h2>
            <div className="rounded-lg border border-border bg-card p-6">
              <ul className="space-y-2 text-foreground">
                {units.map((item,index)=>(
                  <li key={index}>
                    <span className="text-primary">•  </span>
                      {item}
                  </li>
                ))}
              </ul>
            </div>
          </FramerAnimation3>
        

        {/* Key Features */}
        <FramerAnimation3>
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
        </FramerAnimation3>

        {/* How It Helps */}
        <FramerAnimation3>
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
        
        </FramerAnimation3>

        {/* Download Section */}
        <section
          id="download"
          className="rounded-lg border border-border bg-gradient-to-r from-primary/10 to-primary/5 p-8"
        >
          <FramerAnimation2>

          <h2 className="font-display text-2xl font-bold text-foreground mb-4">Download Your Textbook</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={data[`grade-${grade}`][subject.toLocaleLowerCase() as 'physics' | 'biology' | 'chemistry' | 'english' | 'history' | 'geography' | 'economics' | 'math']['book_URL']}
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
              </FramerAnimation2>
        </section>

        {/* Additional CTA */}
        <FramerAnimation2>
          <AdBanner variant="inline" />
        </FramerAnimation2>

        {/* More Resources */}
        <FramerAnimation3>
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
        </FramerAnimation3>
        {/* FAQ Section */}
        <FramerAnimation3>
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <div className="rounded-lg border border-border bg-card p-6 space-y-4">
            {grade9BiologyFAQ.map((faq, idx) => (
              <details
                key={idx}
                className="rounded-md border border-border bg-background p-4"
              >
                <summary className="cursor-pointer list-none font-semibold text-foreground">
                  {faq.question}
                </summary>
                <p className="mt-2 text-sm text-muted-foreground">{faq.answer}</p>
              </details>
            ))}
          </div>
        </FramerAnimation3>
      
      </FramerAnimation1>
      <Footer/>
    </main>
    </>
  )
}
