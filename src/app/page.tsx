import React from 'react'

import Intro from '@/components/Intro'
import Skills from '@/components/Skills'
import HallOfFame from '@/components/HallOfFame'
import WhatIDo from '@/components/WhatIDo'
import Projects from '@/components/Projects'
import Writeups from '@/components/Writeups'
import { AnimationWrapper } from '@/components/ui/animation-wrapper'

const Home = () => {
  return (
    <AnimationWrapper>
      <Intro />
      <HallOfFame />
      <Skills />
      <WhatIDo />
      <Projects />
      <Writeups />
    </AnimationWrapper>
  )
}

export default Home
