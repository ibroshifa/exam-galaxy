'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Badge, Star } from 'lucide-react'
import { Card } from './ui/card'

export function Testimonials() {
  const items = [
    {
      name: 'desalegn kefa',
      date: '12 November 2025',
      text: `I have never seen such kinda app in my life and it's perfect for entrance exam preparation because it contains a number of practice questions including matric exams and much more. this year I am proceeding to take the Entrance Examination and I hope to achieve the best result. thank you and catch ya after entrance exam Man.`,
      helpful: 42,
      rating: 5,
    },
    {
      name: 'Elias Bekele',
      date: '1 October 2025',
      text: `I have been using this app for one year and I say, it was nice (the fee is affordable, question updates, different features and the like) but now it is a bit of a mess not b/c it changed or something else, it is just b/c I changed my grade to 12. before I used to use the category mode 'cause I hadn't read grade 12, but now at least I started and I wanna do the whole exam at once to test myself with a timer. This app doesn't support this kinda feature and I gotta say, it should be updated.`,
      helpful: 64,
      reply: 'Thanks for your feedback we will consider it',
      rating: 5,
    },
    {
      name: 'Appysinia',
      date: '1 October 2025',
      text: `Thanks for your feedback we will consider it`,
      helpful: 0,
      rating: 5,
    },
    {
      name: 'Muhammed Muhammed Negash mahmud',
      date: '26 December 2025',
      text: `Great app for studying for the 12th grade and other lower grades. I like the tests and the notes they help a lot for saving time and a lot of research`,
      helpful: 2,
      rating: 5,
    },
    {
      name: 'yblay',
      date: '29 November 2025',
      text: `This app really helped me study and practice UEA past exam questions. Very easy to use and super helpful. Thank you so much!`,
      helpful: 3,
      rating: 5,
    },
    {
      name: 'Neba Kebede',
      date: '26 November 2025',
      text: `This app is very essential application. especially for grade 12 student. I recommend you to download it.`,
      helpful: 38,
      rating: 4,
    },
  ]

  const experiences = [
    {
      title: 'Software Engineer Intern',
        company: 'Tech Solutions Ltd.',
        period: 'June 2023 - August 2023',
        description: 'Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to enhance user experience and implement new features.',
        technologies: ['React', 'Node.js', 'CSS', 'Git'],
    },
    {
      title: 'Software Engineer Intern',
        company: 'Tech Solutions Ltd.',
        period: 'June 2023 - August 2023',
        description: 'Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to enhance user experience and implement new features.',
        technologies: ['React', 'Node.js', 'CSS', 'Git'],
    },
  ]
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 bg-background">
      <div className="mx-auto max-w-5xl">
        <motion.h2 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl font-bold mb-8 text-center">What Students Say</motion.h2>

        <ul className="space-y-6 relative">


          {items.map((it, idx) => (
              <motion.li
              key={idx}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.06 }}
              className=" relative pl-12 pb-8 flex gap-6"
              >
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-green-200 dark:to-stone-950" />
                {/* Timeline dot */}
              <div className="absolute left-2 top-2 w-4 h-4 bg-primary rounded-full border-4 border-background" />


              <div className="flex-1">
                <div className="mt-2 font-semibold text-foreground opacity-90">{it.name}</div>

                <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    {Array.from({ length: it.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    ))}
                    {it.rating < 5 && Array.from({ length: 5 - it.rating }).map((_, i) => (
                      <Star key={`empty-${i}`} className="h-4 w-4 text-muted-foreground" />
                    ))}
                  </div>
                  <div>{it.date}</div>
                </div>

                <p className="flex items-start gap-3">
                  <span className="text-base text-foreground">{it.text}</span>
                </p>

                {it.reply ? (
                  <div className="mt-3 text-sm text-muted-foreground pl-3 border-l-2 border-border">
                    <div className="font-medium text-sm">Reply from App:</div>
                    <div className="text-sm">{it.reply}</div>
                  </div>
                ) : null}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
