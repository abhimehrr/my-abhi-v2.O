import React, { useRef } from 'react'

// Components
import Header from '../components/Header'
import Footer from '../components/Footer'

import Hero from '../components/hero/Hero'
import Skills from '../components/about/Skills'
import Projects from '../components/projects/Projects'
import Contact from '../components/contact/Contact'

export default function Index() {
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const projectRef = useRef(null)
  const contactRef = useRef(null)
 
  return (
    <>
    <Hero heroRef={heroRef} />

    <div className='min-h-screen pt-4 bg-slate-900'>
      <Header heroRef={heroRef} aboutRef={aboutRef} projectRef={projectRef} contactRef={contactRef} />

      <div ref={aboutRef} className='my-8'>
        <div className="p-2 lg:w-4/5 md:w-11/12 sm:w-full xl:w-9/12 m-auto">
          <Skills />
        </div>
      </div>

      <div ref={projectRef} className='my-8 bg-gray-100'>
        <div className="px-2 lg:w-4/5 md:w-11/12 sm:w-full xl:w-9/12 m-auto">
          <Projects />
        </div>
      </div>

      <div className="p-2 lg:w-4/5 md:w-11/12 sm:w-full xl:w-9/12 m-auto">
        <div ref={contactRef} className='my-8'>
          <Contact />
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}