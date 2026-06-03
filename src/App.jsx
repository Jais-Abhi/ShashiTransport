import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import GetQuote from './pages/GetQuote'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main className="overflow-x-hidden">
        <Routes>
          <Route path="/"          element={<Home />} />
          <Route path="/about"     element={<About />} />
          <Route path="/services"  element={<Services />} />
          <Route path="/gallery"   element={<Gallery />} />
          <Route path="/contact"   element={<Contact />} />
          <Route path="/get-quote" element={<GetQuote />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}
