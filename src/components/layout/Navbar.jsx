import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  // { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setOpen(false) }, [location])

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg shadow-slate-200/60' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-3">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
                <img
                  src={scrolled ? '/logo_1.png' : '/logo_2.png'}
                  alt="Shashi Transport Company"
                  className="w-18 h-16 object-contain rounded-xl shadow-lg"
                />
                <div className="leading-none">
                  <span className={`font-bold text-base block transition-colors duration-300 ${scrolled ? 'text-[#1e3a5f]' : 'text-white'}`}>
                    Shashi Transport Company
                  </span>
                  <span className={`text-[10px] tracking-widest uppercase transition-colors duration-300 ${scrolled ? 'text-[#f97316]' : 'text-orange-300'}`}>
                    Logistics Partner
                  </span>
                </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map(link => {
                const active = location.pathname === link.to
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 group ${
                      active
                        ? 'text-[#f97316]'
                        : scrolled ? 'text-[#1e3a5f] hover:text-[#f97316]' : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {link.label}
                    <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-[#f97316] rounded-full transition-all duration-300 ${active ? 'w-4' : 'w-0 group-hover:w-4'}`} />
                  </Link>
                )
              })}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a href="tel:+918888888888" className={`flex items-center gap-2 text-sm font-medium transition-colors duration-200 ${scrolled ? 'text-[#1e3a5f]' : 'text-white/90'}`}>
                <Phone className="w-4 h-4" />
                +91 88888 88888
              </a>
              <Link
                to="/get-quote"
                className="shimmer-btn text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-lg hover:shadow-[#f97316]/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setOpen(v => !v)}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${scrolled ? 'text-[#1e3a5f]' : 'text-white'}`}
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white shadow-2xl border-t border-slate-100 lg:hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    location.pathname === link.to
                      ? 'bg-[#1e3a5f] text-white'
                      : 'text-[#1e3a5f] hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/get-quote"
                className="mt-2 shimmer-btn text-white text-sm font-semibold px-5 py-3 rounded-xl text-center"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
