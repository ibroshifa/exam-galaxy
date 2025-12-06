import { generateFAQSchema } from "@/lib/faqSchema"
import Script from "next/script"

const FAQs = [
{
  question: `Where can i get past entrance exam papers?`,
  answer:
    `You can find past entrance exams with answer and explanation in exam galaxy app which you can find in our website.`,
},
{
  question: `Where can i download grade 12 books pdf?`,
  answer:
    `You can download all grade 12 books inside examgalaxy website under books section.`,
},

]
const faqschema = generateFAQSchema(FAQs)
export default function page() {
  return (<>
  <Script
      id='faq-schema'
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html:JSON.stringify(faqschema)
      }}
    />
    <div>page</div>
  </>
  )
}