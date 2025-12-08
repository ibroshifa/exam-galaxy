import React from 'react'
import data from '../contents.json'
import Script from 'next/script'
import { generateFAQSchema } from '@/lib/faqSchema'


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


function page() {
  return (
    <>
      <Script
      id='faq-schema'
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html:JSON.stringify(faqschema)
      }}
    />
      <div>
       <h1> page</h1>
          {data['grade-9'].history['Course-Outline'].map((item,index)=>{
              return(<li key={index} className='mt-2'>
                <span className='text-slate-600'>{item.split(':')[0]}</span>
              :{item.split(':')[1]}</li>)
          })}
      </div>
    </>
    
  )
}

export default page