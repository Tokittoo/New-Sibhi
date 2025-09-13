import React from 'react'

import Intro from '@/components/Intro'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import HallOfFame from '@/components/HallOfFame'
import Projects from '@/components/Projects'
import { AnimationWrapper } from '@/components/ui/animation-wrapper'

const Home = () => {
  return (
    <AnimationWrapper>
      <Intro />
      <Skills />
      <HallOfFame />
      <Projects />
      <Experience />
    </AnimationWrapper>
  )
}

export default Home
