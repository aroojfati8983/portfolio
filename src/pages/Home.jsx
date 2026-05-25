import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Project from '../components/Project'
import Work from '../components/Work'
import Contact from '../components/Contact'

function Home() {
  return (
   <div>
  <Hero key="hero"/>
  <About key="about"/>
  <Skills key="skills"/>
  <Project key="project"/>
  <Work key="work"/>
  <Contact key="contact"/>
</div>
  )
}

export default Home