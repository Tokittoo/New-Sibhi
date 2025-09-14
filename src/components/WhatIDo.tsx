import React from 'react';
import { childVariant } from './ui/animation-wrapper';
import * as motion from 'motion/react-client';

type WhatIDoItem = {
  title: string;
  description: string;
}

const whatIDoItems: WhatIDoItem[] = [
  {
    title: "Defend",
    description: "With 3 years of experience in ethical hacking and penetration testing, I identify vulnerabilities before attackers do. I build resilient systems that keep your data safe from breaches."
  },
  {
    title: "Develop",
    description: "I turn complex ideas into functional, high-performance software. Whether it's mobile apps, web platforms, or scalable backend systems, I build solutions that work flawlessly under real-world demands."
  },
  {
    title: "Design",
    description: "I don't just write code - I craft systems. From intuitive user flows to scalable cloud infrastructures, I design software that's elegant under the hood and effortless to use. Your business logic gets translated into a future-proof technical blueprint."
  },
  {
    title: "Hustle",
    description: "There is no one thing. I hustle a lot to explore opportunities and learn various domains of science, technology and engineering to apply them in my work."
  }
];

const WhatIDo = () => {
  return (
    <div className='mt-12'>
      <motion.h1 variants={childVariant} className='text-4xl ml-2 my-8 font-bold font-sans tracking-tight max-md:text-center text-balance'>
        What I Do
      </motion.h1>
      
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full'>
        {whatIDoItems.map((item, index) => (
          <WhatIDoCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

const WhatIDoCard = ({ item }: { item: WhatIDoItem }) => (
  <motion.div 
    variants={childVariant}
    className='flex overflow-hidden rounded-lg w-full h-full border transition-colors duration-200 hover:bg-muted/30 border-border shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] relative group'
  >
    <div className='p-4 w-full flex flex-col justify-between flex-1'>
      <div>
        <h1 className='text-xl font-sans tracking-tight font-semibold mb-3'>{item.title}</h1>
        <p className='text-muted-foreground text-sm'>{item.description}</p>
      </div>
    </div>
  </motion.div>
);

export default WhatIDo;
