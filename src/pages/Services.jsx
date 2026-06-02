import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MapPin, Clock, CheckCircle, ArrowRight, ChevronDown } from 'lucide-react'
import { truckSizes, services } from '../lib/truckConfig'

export default function Services() {
  const [activeService, setActiveService] = useState(null)

  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0f1f35] via-[#1e3a5f] to-[#0f2540] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#ffffff20 1px,transparent 1px),linear-gradient(90deg,#ffffff20 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-[#f97316] text-sm font-semibold uppercase tracking-widest mb-3">What We Offer</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Transport <span className="text-[#f97316]">Services</span></h1>
            <p className="text-white/60 text-lg max-w-xl mx-auto">From a single pallet to an entire fleet — comprehensive solutions tailored to your logistics needs.</p>
          </motion.div>
        </div>
      </div>

      {/* Service grid */}
      <section className="section-pad bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            {services.map((svc, i) => {
              const Icon = svc.icon
              const isOpen = activeService === svc.id
              return (
                <motion.div
                  key={svc.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Header */}
                  <button
                    onClick={() => setActiveService(isOpen ? null : svc.id)}
                    className="w-full text-left p-6 flex items-start gap-4 group"
                  >
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300" style={{ background: svc.bg, border: `2px solid ${svc.color}30` }}>
                      <Icon className="w-7 h-7" style={{ color: svc.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-[#1e3a5f] text-lg leading-tight">{svc.title}</h3>
                      <p className="text-slate-500 text-sm mt-1 italic">{svc.tagline}</p>
                    </div>
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="shrink-0 mt-1">
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 border-t border-slate-100 pt-5">
                          <p className="text-slate-600 text-sm leading-relaxed mb-5">{svc.desc}</p>
                          <div className="grid grid-cols-2 gap-2 mb-5">
                            {svc.features.map(f => (
                              <div key={f} className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 shrink-0" style={{ color: svc.color }} />
                                <span className="text-slate-600 text-xs">{f}</span>
                              </div>
                            ))}
                          </div>
                          <div className="grid grid-cols-2 gap-3 mb-5">
                            <div className="bg-[#f8fafc] rounded-xl p-3">
                              <p className="text-[10px] text-slate-400 uppercase font-semibold mb-1">Ideal For</p>
                              <p className="text-xs text-slate-600">{svc.ideal}</p>
                            </div>
                            <div className="bg-[#f8fafc] rounded-xl p-3">
                              <p className="text-[10px] text-slate-400 uppercase font-semibold mb-1 flex items-center gap-1"><Clock className="w-3 h-3" /> Transit Time</p>
                              <p className="text-xs font-bold" style={{ color: svc.color }}>{svc.transit}</p>
                            </div>
                          </div>
                          <Link to="/get-quote" className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200" style={{ color: svc.color }}>
                            Get Quote for this Service <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>

          <div className="mt-12 bg-slate-50 rounded-3xl border border-slate-200 p-8 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#1e3a5f] mb-3">Fleet details</p>
                <h2 className="text-3xl font-bold text-[#1e3a5f]">Standard truck sizes and specifications</h2>
                <p className="text-slate-500 max-w-2xl mt-3">These are the core truck sizes used across our services. They are fleet details used for planning capacity, not separate service offerings.</p>
              </div>
              <div className="rounded-3xl bg-white border border-slate-200 p-4 text-sm text-slate-600">
                <p className="font-semibold text-slate-700">Usage note:</p>
                <p>Truck size is a planning detail. Select a service first, then choose the ideal size based on your cargo weight and volume.</p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {truckSizes.map((truck) => (
                <div key={truck.id} className="rounded-3xl bg-white border border-slate-200 p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-[#1e3a5f]">{truck.label}</h3>
                      <p className="text-xs uppercase tracking-[0.28em] text-slate-400">{truck.badge}</p>
                    </div>
                    <span className="text-sm font-bold text-[#f97316]">{truck.capacity}</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">{truck.description}</p>
                  <div className="space-y-2 text-sm text-slate-500">
                    <div className="flex justify-between border-t border-slate-100 pt-3">
                      <span>Dimensions</span>
                      <span>{truck.dimensions}</span>
                    </div>
                    <div className="flex justify-between border-t border-slate-100 pt-3">
                      <span>Volume</span>
                      <span>{truck.volume}</span>
                    </div>
                    <div className="flex justify-between border-t border-slate-100 pt-3">
                      <span>Key uses</span>
                      <span className="text-slate-700">{truck.bestFor[0]}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-3">Industries We <span className="gradient-text">Serve</span></h2>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['Manufacturing', 'Pharmaceuticals', 'Agriculture', 'E-Commerce', 'Automotive', 'FMCG', 'Textiles', 'Steel & Metals', 'Electronics', 'Food & Dairy', 'Chemicals', 'Construction'].map((ind, i) => (
              <motion.div key={ind} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }} whileHover={{ scale: 1.05, y: -2 }} className="bg-[#f8fafc] hover:bg-[#1e3a5f] hover:text-white rounded-2xl p-4 text-center text-sm font-medium text-slate-600 border border-slate-100 hover:border-[#1e3a5f] transition-all duration-200 cursor-default">
                {ind}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#1e3a5f] to-[#0f2540]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Not sure which service suits you?</h2>
          <p className="text-white/60 mb-8">Our logistics experts will assess your needs and recommend the best solution.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center gap-2 shimmer-btn text-white font-bold px-8 py-4 rounded-xl shadow-xl hover:-translate-y-1 transition-transform duration-200">
              Talk to an Expert <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/get-quote" className="inline-flex items-center gap-2 bg-white/10 border-2 border-white/20 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/20 transition-colors duration-200">
              Get Instant Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
