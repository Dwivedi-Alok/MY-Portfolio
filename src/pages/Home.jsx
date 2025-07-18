import React from 'react'
import ThemeToggle from '../components/ThemeToggle' 
import StarBAck from '@/components/StarBAck.jsx'
import Navbar from '@/components/Navbar.jsx'
import HeroSection from '@/components/HeroSection.jsx'
import { AboutSection } from '../components/AboutSection'
import { SkillsSection } from '../components/SkillsSection'
function Home() {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden '>
        {/*theme Toggle*/}
       {/* <ThemeToggle/> */}
        {/* background Effect */}
    <StarBAck />
        {/*NavBAr */}
        
       <Navbar/>
        {/* Main content */}
<main>
    <HeroSection/>
    <AboutSection />
    <SkillsSection />
   
</main>


        {/*footer */}
    </div>
  )
}

export default Home