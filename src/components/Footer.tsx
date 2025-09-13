import Link from 'next/link'
import React from 'react'
import { Socials } from './ui/socials'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'
import { IconBrandX, IconMail } from '@tabler/icons-react'
import { Highlight } from './ui/highlight'

const socials = [
  {
    name: 'GitHub',
    link: 'https://github.com/xibhi',
    icon: FaGithub
  },
  {
    name: 'X',
    link: 'https://x.com/xibhi_',
    icon: IconBrandX
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/_xibhi_',
    icon: FaInstagram
  },
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/sibhibalamurugan',
    icon: FaLinkedinIn
  },
  {
    name: 'Email',
    link: 'mailto:sibhi.b@proton.me',
    icon: IconMail
  }
]


const Footer = () => {
  return (
    <footer className='w-full flex flex-col gap-2 justify-center items-center mt-16 min-h-[20rem]'>
      <h1 className='font-sans font-bold tracking-tight text-4xl md:text-5xl'>Get in Touch</h1>
      <p className='text-muted-foreground text-center text-balance'>Want to chat? Just shoot me a
        <Link href={'https://x.com/intent/follow?screen_name=_MSaaDH'} target='_blank'>
          <Highlight className='hover:underline underline-offset-2 mx-1'>
            DM
          </Highlight>
        </Link>
        and I&apos;ll respond whenever I can.</p>
      <div className='mt-4'>
        <Socials socials={socials} />
      </div>
    </footer>
  )
}

export default Footer
