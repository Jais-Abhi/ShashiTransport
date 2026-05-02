import React from 'react'
import Hero from '../components/home/Hero'
import CityTicker from '../components/home/CityTicker'
import Stats from '../components/home/Stats'
import TruckFleet from '../components/home/TruckFleet'
import ServicesPreview from '../components/home/ServicesPreview'
import Process from '../components/home/Process'
import IndiaMap from '../components/home/IndiaMap'
import WhyUs from '../components/home/WhyUs'
import Testimonials from '../components/home/Testimonials'
import HomeCTA from '../components/home/HomeCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <CityTicker />
      <Stats />
      <TruckFleet />
      <ServicesPreview />
      <Process />
      <IndiaMap />
      <WhyUs />
      <Testimonials />
      <HomeCTA />
    </>
  )
}
