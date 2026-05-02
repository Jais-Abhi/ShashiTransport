import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ArrowRight, Shield, Clock, MapPin, Truck, Package, ChevronDown } from 'lucide-react'

const stats = [
  { val: '15+', label: 'Years Experience' },
  { val: '500+', label: 'Trucks Fleet' },
  { val: '28', label: 'States Covered' },
  { val: '10K+', label: 'Happy Clients' },
]

const badges = [
  { icon: Shield, text: 'ISO 9001 Certified' },
  { icon: Clock, text: '24/7 Support' },
  { icon: MapPin, text: 'Pan India Network' },
]

export default function Hero() {
  const truckRef = useRef(null)
  const roadRef = useRef(null)
  const particlesRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Road shimmer
      gsap.fromTo(roadRef.current,
        { scaleX: 0, transformOrigin: 'left center' },
        { scaleX: 1, duration: 1.4, ease: 'power3.out', delay: 0.5 }
      )
      // Truck drive-in
      gsap.fromTo(truckRef.current,
        { x: -300, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.8 }
      )
      // Floating particles
      particlesRef.current.forEach((el, i) => {
        if (!el) return
        gsap.to(el, {
          y: `-=${20 + Math.random() * 30}`,
          x: `+=${(Math.random() - 0.5) * 20}`,
          opacity: 0,
          duration: 2 + Math.random() * 2,
          delay: Math.random() * 2,
          repeat: -1,
          ease: 'power1.out',
          onRepeat: () => {
            gsap.set(el, { y: 0, x: 0, opacity: 0.6 })
          }
        })
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#1e3a5f] to-[#0f2540]">

      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(#ffffff20 1px,transparent 1px),linear-gradient(90deg,#ffffff20 1px,transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#f97316]/20 rounded-full blur-3xl float-anim" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl float-anim" style={{ animationDelay: '2s' }} />

      {/* Floating particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          ref={el => particlesRef.current[i] = el}
          className="absolute w-1.5 h-1.5 bg-[#f97316]/60 rounded-full"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${20 + Math.random() * 60}%`,
            opacity: 0.6,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: Text */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">India's Trusted Transport Partner</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Moving India
              <span className="block text-[#f97316]">Forward,</span>
              <span className="block text-white/90">One Load at a Time.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg"
            >
              The Shashi Transport Company delivers freight across India — from the mountains of Kashmir to the beaches of Goa — with reliability, speed, and care.
            </motion.p>

            {/* Badges row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {badges.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-lg px-3 py-2">
                  <Icon className="w-4 h-4 text-[#f97316]" />
                  <span className="text-white/80 text-sm">{text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/get-quote"
                className="group flex items-center gap-2 shimmer-btn text-white font-semibold px-8 py-4 rounded-xl shadow-2xl hover:-translate-y-1 transition-transform duration-200"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                to="/contact"
                className="flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-colors duration-200"
              >
                <Package className="w-5 h-5" />
                Contact Us
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="grid grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/10"
            >
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-bold text-[#f97316]">{s.val}</div>
                  <div className="text-white/60 text-xs mt-1 leading-tight">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Truck illustration */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
            className="relative hidden lg:block"
          >
            {/* Big truck SVG visual */}
            <div className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm p-8">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#f97316]/10 to-transparent rounded-3xl" />

              {/* Truck Icon Large */}
              <div className="flex items-center justify-center mb-6">
                <div ref={truckRef} className="relative">
                  <div className="w-40 h-40 bg-gradient-to-br from-[#f97316] to-[#ea6c0a] rounded-3xl flex items-center justify-center shadow-2xl shadow-orange-500/40 float-anim">
                    <Truck className="w-20 h-20 text-white" />
                  </div>
                  {/* Orbit ring */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-orange-400/30 spin-slow" style={{ margin: '-12px' }} />
                </div>
              </div>

              {/* Road */}
              <div ref={roadRef} className="h-3 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full mx-4 mb-6" />

              {/* Feature cards */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: '🚛', title: 'Full Truck Load', desc: '22 ft – 40 ft' },
                  { icon: '📦', title: 'Part Load', desc: 'Any quantity' },
                  { icon: '❄️', title: 'Cold Chain', desc: 'Temp controlled' },
                  { icon: '⚡', title: 'Express', desc: '24 hr delivery' },
                ].map((item) => (
                  <motion.div
                    key={item.title}
                    whileHover={{ scale: 1.04, y: -2 }}
                    className="bg-white/10 border border-white/10 rounded-2xl p-4 cursor-default"
                  >
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="text-white font-semibold text-sm">{item.title}</div>
                    <div className="text-white/50 text-xs">{item.desc}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating card: Live GPS */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute -bottom-4 -left-6 glass rounded-2xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-[#1e3a5f] font-bold text-sm">Live GPS Tracking</p>
                  <p className="text-slate-500 text-xs">Real-time updates</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 text-white/40" />
      </motion.div>
    </section>
  )
}
