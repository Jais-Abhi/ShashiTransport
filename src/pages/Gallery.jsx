import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn, Truck, Package, MapPin, Users } from 'lucide-react'

const categories = ['All', 'Fleet', 'Operations', 'Warehouse', 'Team', 'Delivery']

const galleryItems = [
  { id: 1, cat: 'Fleet', title: '40ft Flatbed Trucks', desc: 'Our flagship heavy-duty fleet', icon: '🚛', bg: 'from-orange-500 to-red-500', size: 'large' },
  { id: 2, cat: 'Operations', title: 'Loading Operations', desc: 'Efficient cargo loading at hub', icon: '📦', bg: 'from-blue-500 to-indigo-600', size: 'normal' },
  { id: 3, cat: 'Fleet', title: '22ft Container Trucks', desc: 'Mid-size fleet for LTL', icon: '🚚', bg: 'from-emerald-500 to-teal-600', size: 'normal' },
  { id: 4, cat: 'Warehouse', title: 'Patna Hub — 50,000 sq ft', desc: 'State-of-the-art sorting facility', icon: '🏭', bg: 'from-violet-500 to-purple-600', size: 'large' },
  { id: 5, cat: 'Operations', title: 'Cold Chain Fleet', desc: 'Temperature-controlled vehicles', icon: '❄️', bg: 'from-cyan-500 to-blue-500', size: 'normal' },
  { id: 6, cat: 'Team', title: 'Operations Team', desc: '500+ dedicated professionals', icon: '👥', bg: 'from-pink-500 to-rose-500', size: 'normal' },
  { id: 7, cat: 'Delivery', title: 'Safe Delivery', desc: 'On-time at client site', icon: '✅', bg: 'from-green-500 to-emerald-600', size: 'large' },
  { id: 8, cat: 'Fleet', title: 'Express Fleet', desc: 'Dedicated express vehicles', icon: '⚡', bg: 'from-yellow-500 to-orange-500', size: 'normal' },
  { id: 9, cat: 'Warehouse', title: 'Kolkata Hub', desc: 'Eastern India distribution centre', icon: '🏪', bg: 'from-slate-500 to-slate-700', size: 'normal' },
  { id: 10, cat: 'Team', title: 'Driver Training', desc: 'Monthly safety & skill training', icon: '🎓', bg: 'from-amber-500 to-yellow-600', size: 'normal' },
  { id: 11, cat: 'Operations', title: 'GPS Control Room', desc: 'Live tracking command centre', icon: '📡', bg: 'from-blue-600 to-indigo-700', size: 'large' },
  { id: 12, cat: 'Delivery', title: 'Client Handover', desc: 'Verified digital e-POD delivery', icon: '🤝', bg: 'from-green-600 to-teal-700', size: 'normal' },
]

export default function Gallery() {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = active === 'All' ? galleryItems : galleryItems.filter(g => g.cat === active)

  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0f1f35] via-[#1e3a5f] to-[#0f2540] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#ffffff20 1px,transparent 1px),linear-gradient(90deg,#ffffff20 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-[#f97316] text-sm font-semibold uppercase tracking-widest mb-3">Visual Journey</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Our <span className="text-[#f97316]">Gallery</span></h1>
            <p className="text-white/60 text-lg max-w-xl mx-auto">A glimpse into our world-class fleet, facilities, and operations across India.</p>
          </motion.div>
        </div>
      </div>

      <section className="section-pad bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(cat => (
              <motion.button
                key={cat}
                onClick={() => setActive(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  active === cat
                    ? 'bg-[#1e3a5f] text-white shadow-lg shadow-[#1e3a5f]/30'
                    : 'bg-white border border-slate-200 text-slate-600 hover:border-[#1e3a5f]/30'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Masonry grid */}
          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            <AnimatePresence>
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="break-inside-avoid mb-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -3 }}
                    onClick={() => setLightbox(item)}
                    className={`relative overflow-hidden rounded-3xl cursor-pointer group ${item.size === 'large' ? 'h-64' : 'h-44'}`}
                  >
                    {/* Gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.bg}`} />
                    {/* Pattern overlay */}
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.3) 0%, transparent 50%)' }} />

                    <div className="absolute inset-0 p-6 flex flex-col justify-between">
                      <div className="text-5xl">{item.icon}</div>
                      <div>
                        <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-1">{item.cat}</p>
                        <h3 className="text-white font-bold text-lg leading-tight">{item.title}</h3>
                        <p className="text-white/70 text-sm">{item.desc}</p>
                      </div>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                        <ZoomIn className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Stats banner */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Truck, val: '580+', label: 'Trucks in Fleet', color: '#f97316' },
              { icon: Package, val: '10L+', label: 'Deliveries Made', color: '#3b82f6' },
              { icon: MapPin, val: '8', label: 'Major Hubs', color: '#10b981' },
              { icon: Users, val: '500+', label: 'Team Members', color: '#8b5cf6' },
            ].map(({ icon: Icon, val, label, color }, i) => (
              <motion.div key={label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="text-center">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3" style={{ background: `${color}15` }}>
                  <Icon className="w-7 h-7" style={{ color }} />
                </div>
                <div className="text-3xl font-bold text-[#1e3a5f]">{val}</div>
                <div className="text-slate-500 text-sm mt-1">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={e => e.stopPropagation()}
              className={`relative overflow-hidden rounded-3xl w-full max-w-lg bg-gradient-to-br ${lightbox.bg}`}
            >
              <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-colors">
                <X className="w-5 h-5" />
              </button>
              <div className="p-10">
                <div className="text-8xl mb-6 text-center">{lightbox.icon}</div>
                <div className="text-center">
                  <p className="text-white/60 text-sm font-semibold uppercase tracking-wider mb-2">{lightbox.cat}</p>
                  <h3 className="text-white font-bold text-2xl mb-2">{lightbox.title}</h3>
                  <p className="text-white/70">{lightbox.desc}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
