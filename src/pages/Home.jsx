import React from 'react'
import Hero from '../components/home/Hero'
import Stats from '../components/home/Stats'
import ServicesPreview from '../components/home/ServicesPreview'
import IndiaMap from '../components/home/IndiaMap'
import WhyUs from '../components/home/WhyUs'
import Process from '../components/home/Process'
import Testimonials from '../components/home/Testimonials'
import HomeCTA from '../components/home/HomeCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesPreview />
      <Process />
      <IndiaMap />
      <WhyUs />
      <Testimonials />
      <HomeCTA />
    </>
  )
}
