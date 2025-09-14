'use client'

import Card from './Card'
import Link from 'next/link'
import { IconBrandFramerMotion,  IconBrandNextjs, IconBrandNodejs, IconBrandTailwind, IconBrandTypescript, IconChevronDown, IconChevronRight } from '@tabler/icons-react'
import { motion } from 'motion/react'
import { Button } from './ui/button'
import { childVariant } from './ui/animation-wrapper'
import React, { useState } from 'react'

export type Project = {
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

export type UpcomingProject = {
  title: string,
  description: string,
  image?: string,
  liveLink?: string,
  sourceLink?: string,
  tags: {
    name: string,
    logo?: React.ReactNode
  }[]
}

const NextJS = {
  name: 'Next.js',
  logo: <IconBrandNextjs size={18} />
}


const Tailwind = {
  name: 'Tailwind CSS',
  logo: <IconBrandTailwind size={18} />
}

const Motion = {
  name: 'Motion',
  logo: <IconBrandFramerMotion size={18} />
}

const TypeScript = {
  name: 'TypeScript',
  logo: <IconBrandTypescript size={18} />
}

const NodeJS = {
  name: 'NodeJS',
  logo: <IconBrandNodejs size={18} />
}


const projects: Project[] = [
  {
    title: 'Penquin',
    description: "A compact bug-bounty toolkit with pre-configured commands, optimized recon/exploitation workflows, and curated resources to remove setup friction.",
    image: '/projects/Penquin.png',
    liveLink: 'https://penquin.vercel.app',
    sourceLink: 'https://github.com/xibhi/penquin',
    tags: [
      NextJS,
      Motion,
      NodeJS,
      TypeScript,
      Tailwind
    ]
  }
]


function Projects() {
  const [showAll, setShowAll] = useState(false)
  const visibleProjects = showAll ? projects : projects.slice(0, 4)

  return (
    <div id='projects' className='mt-12'>
      <motion.h1 variants={childVariant} className='text-4xl ml-2 my-8 font-bold font-sans tracking-tight max-md:text-center text-balance'>
        Projects
      </motion.h1>
      <div className='grid gap-4 md:auto-rows-[10rem]'>
        {
          visibleProjects.map(project => (
            <motion.div variants={childVariant} key={project.title} className='h-full w-full flex'>
              <Card project={project} />
            </motion.div>
          ))
        }
      </div>

      

    </div>
  )
}

export default Projects
