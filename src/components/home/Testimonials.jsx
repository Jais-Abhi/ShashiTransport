import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Arun Sharma',
    role: 'CEO, Sharma Textiles',
    location: 'Kanpur, UP',
    rating: 5,
    text: 'Shashi Transport has completely transformed our supply chain. We ship 3–4 FTL loads weekly from Kanpur to Kolkata, and the consistency is remarkable. Never missed a delivery deadline in 5 years.',
    initials: 'AS',
    color: '#f97316',
  },
  {
    name: 'Priya Mehta',
    role: 'Logistics Head, Mehta Pharma',
    location: 'Patna, Bihar',
    rating: 5,
    text: 'Their cold chain logistics for our pharmaceutical products is outstanding. Temperature logs are precise, documentation is spotless, and their 24/7 support means we are never left guessing.',
    initials: 'PM',
    color: '#3b82f6',
  },
  {
    name: 'Suresh Nair',
    role: 'MD, Nair Export House',
    location: 'Goa',
    rating: 5,
    text: 'We needed a reliable partner for our export cargo from Goa to Delhi. Shashi Transport delivered flawlessly every single time. The real-time GPS tracking is a game-changer for our operations.',
    initials: 'SN',
    color: '#10b981',
  },
  {
    name: 'Deepak Banerjee',
    role: 'Supply Chain Manager, BD Industries',
    location: 'Kolkata, WB',
    rating: 5,
    text: 'Managing logistics for our heavy machinery used to be a nightmare. With Shashi Transport, things just work. Their 40 ft flatbed fleet and specialized handlers have saved us immensely.',
    initials: 'DB',
    color: '#8b5cf6',
  },
  {
    name: 'Kavita Joshi',
    role: 'Owner, Joshi Agro Exports',
    location: 'Agra, UP',
    rating: 5,
    text: 'Fresh produce needs speed. Shashi\'s express cold chain gets our vegetables from Agra to Mumbai overnight in perfect condition. Best investment we made for our agro business.',
    initials: 'KJ',
    color: '#ef4444',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % testimonials.length), 5000)
    return () => clearInterval(t)
  }, [])

  const prev = () => setCurrent(p => (p - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent(p => (p + 1) % testimonials.length)

  return (
    <section className="section-pad bg-gradient-to-b from-[#f0f6ff] to-white relative overflow-hidden">
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#f97316]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-[#f97316]/10 text-[#f97316] font-semibold text-sm px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            Client Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">Over 10,000 businesses trust us to keep their supply chains moving.</p>
        </motion.div>

        {/* Featured testimonial */}
        <div className="relative max-w-3xl mx-auto mb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
              className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 p-8 md:p-10 relative"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-slate-100" />
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-slate-600 text-lg leading-relaxed mb-8 italic">
                "{testimonials[current].text}"
              </p>
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg"
                  style={{ background: testimonials[current].color }}
                >
                  {testimonials[current].initials}
                </div>
                <div>
                  <p className="font-bold text-[#1e3a5f] text-base">{testimonials[current].name}</p>
                  <p className="text-slate-500 text-sm">{testimonials[current].role}</p>
                  <p className="text-slate-400 text-xs">{testimonials[current].location}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-md hover:bg-[#1e3a5f] hover:text-white hover:border-[#1e3a5f] transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-md hover:bg-[#1e3a5f] hover:text-white hover:border-[#1e3a5f] transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-[#f97316]' : 'w-2 bg-slate-200'}`}
            />
          ))}
        </div>

        {/* Mini cards row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-12">
          {testimonials.map((t, i) => (
            <motion.button
              key={i}
              onClick={() => setCurrent(i)}
              whileHover={{ scale: 1.04 }}
              className={`p-3 rounded-2xl border text-left transition-all duration-200 ${
                i === current ? 'border-[#f97316] bg-[#fff8f3] shadow-sm' : 'border-slate-100 bg-white hover:border-slate-200'
              }`}
            >
              <div className="w-8 h-8 rounded-xl flex items-center justify-center text-white text-xs font-bold mb-2" style={{ background: t.color }}>
                {t.initials}
              </div>
              <p className="text-xs font-semibold text-[#1e3a5f] truncate">{t.name}</p>
              <p className="text-[10px] text-slate-400 truncate">{t.location}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
