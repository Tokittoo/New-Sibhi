import React from 'react'

import Intro from '@/components/Intro'
import Skills from '@/components/Skills'
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
    </AnimationWrapper>
  )
}

export default Home
