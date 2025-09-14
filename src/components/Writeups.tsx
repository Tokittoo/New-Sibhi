'use client'

import Card from './Card'
import { motion } from 'motion/react'
import { childVariant } from './ui/animation-wrapper'
import React, { useState } from 'react'

export type Writeup = {
  title: string,
  description: string,
  image: string,
  liveLink: string,
  sourceLink: string,
  tags: {
    name: string,
    logo?: React.ReactNode
  }[]
}


const writeups: Writeup[] = [
  {
    title: 'Sample Writeup',
    description: "A detailed technical writeup showcasing security research, vulnerability approach to ethical hacking and penetration testing methodologies.",
    image: '/projects/Penquin.png', // Using existing image as placeholder
    liveLink: 'https://example.com',
    sourceLink: 'https://github.com/example',
    tags: [
    ]
  }
]

function Writeups() {
  const [showAll, setShowAll] = useState(false)
  const visibleWriteups = showAll ? writeups : writeups.slice(0, 4)

  return (
    <div id='writeups' className='mt-12'>
      <motion.h1 variants={childVariant} className='text-4xl ml-2 my-8 font-bold font-sans tracking-tight max-md:text-center text-balance'>
        Writeups
      </motion.h1>
      <div className='grid gap-4 md:auto-rows-[10rem]'>
        {
          visibleWriteups.map(writeup => (
            <motion.div variants={childVariant} key={writeup.title} className='h-full w-full flex'>
              <Card project={writeup} />
            </motion.div>
          ))
        }
      </div>

      

    </div>
  )
}

export default Writeups
