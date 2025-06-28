import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger , SplitText } from 'gsap/all'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Cocktails from './components/Cocktails'
import AboutUs from './components/AboutUs'
import Art from './components/Art'
import Menu from './components/Menu'

gsap.registerPlugin(ScrollTrigger , SplitText)

const App = () => {
  return (
   <main>
    <NavBar />
    <Hero />
    <Cocktails />
    <AboutUs />
    <Art />
    <Menu />
   
   </main>
  )
}

export default App