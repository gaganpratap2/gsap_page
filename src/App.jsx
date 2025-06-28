import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger , SplitText } from 'gsap/all'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Cocktails from './components/Cocktails'
import AboutUs from './components/AboutUs'

gsap.registerPlugin(ScrollTrigger , SplitText)

const App = () => {
  return (
   <main>
    <NavBar />
    <Hero />
    <Cocktails />
    <AboutUs />
   
   </main>
  )
}

export default App