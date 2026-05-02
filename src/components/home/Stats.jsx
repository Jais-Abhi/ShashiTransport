import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Truck, Users, MapPin, Star, Package, Clock } from 'lucide-react'

const stats = [
  { icon: Truck,   value: 580,  suffix: '+', label: 'Trucks in Fleet',     color: '#f97316' },
  { icon: Users,   value: 10000, suffix: '+', label: 'Satisfied Clients',   color: '#3b82f6' },
  { icon: MapPin,  value: 28,   suffix: '',  label: 'States Covered',      color: '#10b981' },
  { icon: Star,    value: 15,   suffix: '+', label: 'Years of Experience',  color: '#8b5cf6' },
  { icon: Package, value: 500,  suffix: '+', label: 'Daily Deliveries',     color: '#f97316' },
  { icon: Clock,   value: 99,   suffix: '%', label: 'On-Time Delivery Rate',color: '#ef4444' },
]

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1e3a5f] to-[#0f2540] relative overflow-hidden">
      {/* BG decoration */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#f97316]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Numbers That Speak <span className="text-[#f97316]">For Themselves</span>
          </h2>
          <p className="text-white/60 mt-3">Trusted by thousands across India for over 15 years</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ scale: 1.06, y: -4 }}
                className="group bg-white/8 border border-white/10 rounded-2xl p-5 text-center hover:bg-white/15 transition-all duration-300 cursor-default"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${s.color}20`, border: `1px solid ${s.color}40` }}
                >
                  <Icon className="w-6 h-6" style={{ color: s.color }} />
                </div>
                <div className="text-2xl font-bold text-white mb-1">
                  <Counter target={s.value} suffix={s.suffix} />
                </div>
                <div className="text-white/50 text-xs leading-tight">{s.label}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
