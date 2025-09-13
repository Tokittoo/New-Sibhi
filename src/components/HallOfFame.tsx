import Image from 'next/image';
import React from 'react';
import { childVariant } from './ui/animation-wrapper';
import * as motion from 'motion/react-client';

type Company = {
  name: string;
  logo: string;
  description?: string;
}

const companies: Company[] = [
  { name: "NASA", logo: "/hall-of-fame/nasa.png", description: "National Aeronautics and Space Administration" },
  { name: "Cisco", logo: "/hall-of-fame/cisco.png", description: "Networking and Cybersecurity" },
  { name: "Lenovo", logo: "/hall-of-fame/lenovo.png", description: "Technology and Computing" },
  { name: "United Airlines", logo: "/hall-of-fame/united-airlines.png", description: "Aviation and Travel" },
  { name: "OYO", logo: "/hall-of-fame/oyo.png", description: "Hospitality and Travel" },
  { name: "Citi", logo: "/hall-of-fame/citi.png", description: "Banking and Financial Services" },
];

const HallOfFame = () => {
  return (
    <div className='my-8'>
      <motion.h1 variants={childVariant} className='text-3xl md:text-4xl font-sans font-bold tracking-tight'>Hall of Fames</motion.h1>
      
      <motion.div 
        variants={childVariant}
        className='relative overflow-hidden bg-gradient-to-r from-background via-muted/5 to-background my-4'
      >
        {/* Gradient overlays for smooth edges */}
        <div className='absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none' />
        <div className='absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none' />
        
        <div className='flex animate-scroll gap-6 md:gap-8 py-6'>
          {/* First set of companies */}
          {companies.map((company, index) => (
            <CompanyCard key={`first-${index}`} company={company} />
          ))}
          {/* Duplicate set for seamless loop */}
          {companies.map((company, index) => (
            <CompanyCard key={`second-${index}`} company={company} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const CompanyCard = ({ company }: { company: Company }) => (
  <div className='flex-shrink-0 flex flex-col items-center justify-center group'>
    <div className='w-16 h-16 md:w-20 md:h-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110'>
      <Image
        src={company.logo}
        alt={company.name}
        width={64}
        height={64}
        className='w-16 h-16 md:w-20 md:h-20 object-contain'
      />
    </div>
  </div>
);

export default HallOfFame;
