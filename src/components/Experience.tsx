import React from 'react';
import { childVariant } from './ui/animation-wrapper';
import * as motion from 'motion/react-client';

type Experience = {
  title: string;
  duration: string;
  description: string;
  icon: string;
}

const experiences: Experience[] = [
  {
    title: "Freelancer",
    duration: "2023 - Present",
    description: "Freelancing is one of the best ways to acquire amazing knowledge and experience from the designers, developers and hustlers all over the world, from sitting in my home. I always freelance when I feel I reached an impasse, to get myself moving.",
    icon: "🛡️"
  },
  {
    title: "Senior Director @SECURE WORLDZ",
    duration: "2024 - Present",
    description: "Where I was able to network, acquire experience and earn knowledge. This company set the start of my professional career. I dealt with various web development and security technologies.",
    icon: "⚡"
  }
];

const Experience = () => {
  return (
    <div className='my-8'>
      <motion.h1 variants={childVariant} className='text-3xl md:text-4xl font-sans font-bold tracking-tight'>Experience</motion.h1>
      
      <motion.div 
        variants={childVariant}
        className='grid md:grid-cols-2 gap-4 w-full my-4 mt-6'
      >
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </motion.div>
    </div>
  );
};

const ExperienceCard = ({ experience }: { experience: Experience }) => (
  <motion.div 
    variants={childVariant}
    className='flex overflow-hidden rounded-lg w-full h-full border transition-colors duration-200 hover:bg-muted/30 border-border shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] relative group'
  >
    <div className='p-4 w-full flex flex-col justify-between flex-1'>
      <div>
        <h1 className='text-xl font-sans tracking-tight font-semibold mb-2'>{experience.title}</h1>
        <p className='text-muted-foreground text-sm mb-3'>{experience.duration}</p>
        <p className='text-muted-foreground text-sm'>{experience.description}</p>
      </div>
    </div>
  </motion.div>
);

export default Experience;
