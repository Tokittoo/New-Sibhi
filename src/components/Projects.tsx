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
    description: "Developed a bug bounty toolkit designed to streamline the hunting process. It includes pre-configured commands, optimized recon and exploitation workflows, and curated resources, allowing more focus on discovering vulnerabilities rather than setup.",
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

const upcomingProjects: UpcomingProject[] = [
  {
    title: 'Higher Secondary - Computer Science',
    description: "In a schooling environment where freedom and extra curricular is considered as equal as curricular and co-curricular activities, I was able to understand life.",
    tags: [
    ]
  },
  {
    title: 'Hustling',
    description: "Hustling is the best form of education. Tapping into opportunities and exploring them and learning what is required to tap that opportunity and make it successful is all I do, 24/7. Learning, education and innovation goes hand in hand.",
    tags: [
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

      {!showAll && (
        <motion.div variants={childVariant}>
          <Button
            variant={'hidden'}
            asChild
            className='flex items-center gap-1 w-max text-sm mx-auto my-8'
            onClick={() => setShowAll(true)}
          >
            <span>
              See More <IconChevronDown size={16} />
            </span>
          </Button>
        </motion.div>
      )}

      {showAll && (
        <motion.div variants={childVariant}>
          <Button
            variant={'hidden'}
            asChild
            className='flex items-center gap-1 hover:gap-2 transition-all duration-200 w-max text-sm mx-auto my-8'
          >
            <Link href={'https://github.com/M-SaaD-H'} target='_blank'>
              View on GitHub <IconChevronRight size={16} />
            </Link>
          </Button>
        </motion.div>
      )}

      <motion.h1 variants={childVariant} className='text-4xl ml-2 my-8 font-bold font-sans tracking-tight max-md:text-center text-balance'>Education</motion.h1>
      <div className='grid md:grid-cols-2 gap-4 w-full'>
        {
          upcomingProjects.map(project => (
            <motion.div variants={childVariant} key={project.title}>
              <Card project={project} />
            </motion.div>
          ))
        }
      </div>
    </div>
  )
}

export default Projects
