import React from 'react'
import { ArrowDown } from 'lucide-react'
export default function HeroSection() {
  return (
  <section id='hero'
  className='relative min-h-screen flex flex-col items-center justify-center px-4'
  >
<div
 className='container max-w-4xl mx-auto text-center z-10'
>
    <div className='space-y-6'>
        <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
            <span
            className='opacity-0 animate-fade-in'
            >Hi,I'm</span>

            <span
             className='text-primary ml-2 opacity-0 animate-fade-in-delay-1'
            > Alok</span>

            <span    className='text-gradient opacity-0 ml-2 animate-fade-in-delay-2'>  Kumar  Dwivedi</span>
        </h1>
        <p className='text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3'>I craft stellar web experiences that feel as smooth as gliding through space. With a focus on front-end development, I build interfaces that are sleek, responsive, and performant. Backed by full-stack skills, I bring ideas to life from launch to landing  blending design, code, and modern technologies into seamless digital journeys.</p>
     
  <div className='pt-4 opacity-0 animate-fade-in-delay-4'>
    <a href="#projects" className='cosmic-button'> view My work</a>
  </div>
    </div>

</div>
<div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce'> <span className='text-sm text-muted-foregound mb-2'>Scroll</span>

  <ArrowDown className='h-5 w-5 text-primary' />
 </div>
  </section>
  )
}

