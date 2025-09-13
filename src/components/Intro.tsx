'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'
import { IconBrandX } from '@tabler/icons-react'
import { Socials } from './ui/socials'
import { FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa6'
import { Highlight } from './ui/highlight'
import { childVariant } from './ui/animation-wrapper'

const socials = [
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/_xibhi_',
    icon: FaInstagram
  },
  {
    name: 'X',
    link: 'https://x.com/xibhi_',
    icon: IconBrandX
  },
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/sibhibalamurugan',
    icon: FaLinkedin
  },
  {
    name: 'GitHub',
    link: 'https://github.com/xibhi',
    icon: FaGithub
  }
]

const Intro = () => {
  return (
    <div className='my-4'>
      <div className='flex gap-4'>
        <motion.div
          variants={childVariant}
          className='overflow-hidden rounded-full w-max h-max shrink-0 border border-border shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]'
        >
          <Image
            src={'/avatar.jpg'}
            height={120}
            width={120}
            alt='Image'
            className='max-md:size-[6rem]'
          />
        </motion.div>
        <div>
          <motion.h1 variants={childVariant} className='text-4xl md:text-5xl font-sans font-bold tracking-tight'>
            Sibhi
          </motion.h1>
          <motion.p variants={childVariant} className='text-muted-foreground text-sm'>Tech meets creativity — that’s where I live.</motion.p>
          <motion.div variants={childVariant}><Socials socials={socials} /></motion.div>
        </div>
      </div>
      <AboutMe />
    </div>
  )
}

const AboutMe = () => (
  <div className='text-muted-foreground text-sm my-4 flex flex-col gap-2 text-justify'>
    <motion.p variants={childVariant}>
    Hey, I’m <Highlight>Sibhi</Highlight>. Started programming at the age of 13, I got a keen interest towards <Highlight>Cyber Security</Highlight> and have explored multiple dimensions of it. I progressively worked on multiple technologies ranging from <Highlight>software to security</Highlight>, which gave me a brief exposure towards the industry. Whether it’s turning ideas into reality or consulting on software and security solutions, I’m always up for creating something impactful.
    </motion.p>
  </div>
)

export default Intro
