'use client'

import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import { motion } from 'framer-motion'

const HeroVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.2, duration: 0.4 }
  }
}

const Hero = () => {
  return (
    <div className='relative w-full h-screen overflow-hidden flex justify-center items-center'>
      <Image
        src='/background2.svg'
        alt='Pilates Studio Background'
        fill
        className='object-cover w-full h-full brightness-35 absolute'
      />
      <Navbar />
      <motion.div
        variants={HeroVariants}
        initial='hidden'
        animate='visible'
        className='flex flex-col items-center text-white text-center z-40 px-4'
      >
        <h1 className='font-serif font-bold leading-snug text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-5xl'>
          Train with Purpose. Thrive with Community.<br className='hidden sm:block' />
        </h1>
        <p className='mt-4 font-medium text-sm sm:text-base md:text-lg max-w-md sm:max-w-xl'>
          Genesis Coaching & Fitness Center in Robertsdale, AL, offers personalized coaching and fitness programs designed to help individuals reach their health goals in a supportive environment.
        </p>
        <button className='mt-6 lg:px-10 px-6 py-3 lg:py-4 rounded-xl bg-[#fb9930] hover:bg-[#e68722] transition duration-300 font-semibold text-sm sm:text-base md:text-lg'>
          Start Your Journey Today
        </button>
      </motion.div>
    </div>
  )
}

export default Hero
