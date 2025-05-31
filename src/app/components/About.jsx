'use client'

import React, { useRef } from 'react'
import Head from './Head'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

const AboutVariants1 = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.4, duration: 0.4 },
  },
}

const AboutVariants2 = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.4, duration: 0.4 },
  },
}

const About = () => {
  const title = 'About Genesis coaching and fitness center'
  const subtitle = 'About Us'

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div className='w-full px-6 lg:px-32 lg:pt-16 pt-16 pb-8 flex flex-col justify-center bg-[#1e1e1e]'>
      <Head title={title} subtitle={subtitle} />
      <div
        ref={ref}
        className='w-full flex flex-col-reverse lg:flex-row justify-between items-center pt-10 gap-10'
      >
        <motion.p
          variants={AboutVariants1}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          className='text-base sm:text-lg lg:text-xl text-neutral-400 max-w-[600px] text-justify'
        >
          Genesis Coaching & Fitness Center is a wellness facility located in Robertsdale, Alabama, dedicated to helping individuals achieve their health and fitness goals. With a focus on individualized attention and support, the center provides a welcoming environment for clients to improve their physical and mental well-being. Services include personalized coaching, group classes, and a variety of fitness programs tailored to meet diverse needs. Whether you're beginning your fitness journey or looking to elevate your routine, Genesis Coaching & Fitness Center offers the resources and community to support your path to wellness.

        </motion.p>
        <motion.div
          variants={AboutVariants2}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          className='w-full max-w-[500px]'
        >
          <Image
            src='/barber.jpg'
            alt='image'
            width={500}
            height={100}
            className='w-full rounded-xl border-2 border-[#FBAB55] object-cover'
          />
        </motion.div>
      </div>
    </div>
  )
}

export default About
