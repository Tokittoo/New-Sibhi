import Image from 'next/image';
import React from 'react'
import { AnimationWrapper, childVariant } from './ui/animation-wrapper';
import * as motion from 'motion/react-client';

type Skill = {
  name: string;
  icon: string
}

const languages: Skill[] = [
  { name: "C/C++", icon: "/skills/C.svg" },
  { name: "Python", icon: "/skills/python.svg" },
  { name: "PHP", icon: "/skills/php.svg" },
  { name: "Java", icon: "/skills/C.svg" },
  { name: "Rust", icon: "/skills/Rust.svg" },
  { name: "Solidity", icon: "/skills/pngwing.com.svg" }
];

const frameworks: Skill[] = [
  { name: "Application Development & Security", icon: "/skills/security.svg" },
  { name: "Cloud Security", icon: "/skills/cloud-security.svg" },
  { name: "Web3 Security", icon: "/skills/ethereum.svg" },
  { name: "RF Security", icon: "/skills/rf.svg" },
  { name: "3D Art & Animation", icon: "/skills/dimensions.svg" },
  { name: "Graphic Design", icon: "/skills/art-studies.svg" },
];


const Skills = () => {
  return (
    <div className='my-8'>
      <motion.h1 variants={childVariant} className='text-3xl md:text-4xl font-sans font-bold tracking-tight'>Skills</motion.h1>
      <motion.div variants={childVariant} className='my-4'>
        <h3 className='font-sans tracking-tight my-2'>Languages</h3>
        <AnimationWrapper className='flex flex-wrap gap-2'>
          {
            languages.map(l => (
              <motion.div variants={childVariant} key={l.name}>
                <Tag tag={l} />
              </motion.div>
            ))
          }
        </AnimationWrapper>
      </motion.div>
      <motion.div variants={childVariant} className='my-4'>
        <h3 className='font-sans tracking-tight my-2'>Knowledges</h3>
        <AnimationWrapper className='flex flex-wrap gap-2'>
          {
            frameworks.map(f => (
              <motion.div variants={childVariant} key={f.name}>
                <Tag tag={f} />
              </motion.div>
            ))
          }
        </AnimationWrapper>
      </motion.div>
    </div>
  )
}

const Tag = ({ tag }: { tag: Skill }) => (
  <div className='flex items-center gap-2 bg-muted border border-border rounded-lg px-3 py-1 transition-colors duration-200 hover:border-foreground/70 select-none'>
    <Image
      src={tag.icon}
      height={18}
      width={18}
      alt={tag.name}
    />
    <span className='text-sm'>{tag.name}</span>
  </div>
)

export default Skills
