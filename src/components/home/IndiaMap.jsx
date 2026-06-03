import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Truck } from 'lucide-react'
import india from '@svg-maps/india'

const HIGHLIGHTED = {
  up: {
    label: 'Uttar Pradesh',
    trucks: '200+',
    districts: 'All 75 Districts',
    hubs: 'Lucknow, Kanpur, Varanasi, Agra',
    desc: 'Dense network coverage across the state — from industrial corridors to agricultural distribution hubs.',
  },
  br: {
    label: 'Bihar',
    trucks: '150+',
    districts: 'All 38 Districts',
    hubs: 'Patna, Gaya, Bhagalpur, Muzaffarpur',
    desc: 'Headquarters state with strong operational control over freight moving through the Gangetic plains.',
  },
  jh: {
    label: 'Jharkhand',
    trucks: '90+',
    districts: 'All 24 Districts',
    hubs: 'Ranchi, Jamshedpur, Dhanbad, Bokaro',
    desc: 'Industrial and mineral logistics focus — built for heavy equipment, steel, and resource transport.',
  },
  wb: {
    label: 'West Bengal',
    trucks: '120+',
    districts: 'All 23 Districts',
    hubs: 'Kolkata, Howrah, Siliguri, Asansol',
    desc: 'Eastern gateway logistics — port, manufacturing, retail, and FMCG freight across the state.',
  },
  or: {
    label: 'Odisha',
    trucks: '85+',
    districts: 'All 30 Districts',
    hubs: 'Bhubaneswar, Cuttack, Rourkela, Paradeep',
    desc: 'Coastal and industrial coverage for mining, steel, agriculture, and port-facing distribution.',
  },
  as: {
    label: 'Assam',
    trucks: '70+',
    districts: 'All 33 Districts',
    hubs: 'Guwahati, Jorhat, Dibrugarh, Silchar',
    desc: 'North East specialist routes — reliable transit for tea, oil, FMCG, and regional freight.',
  },
}

export default function IndiaMap() {
  const [hovered, setHovered] = useState(null)
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const svgEl = e.currentTarget.closest('svg')
    const rect = svgEl.getBoundingClientRect()
    const wrapper = svgEl.parentElement
    const wrapperRect = wrapper?.getBoundingClientRect() || rect
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const tooltipWidth = 256
    const rightEdge = wrapperRect.width - tooltipWidth - 16
    const left = x > wrapperRect.width * 0.65 ? Math.max(x - tooltipWidth - 18, 12) : Math.min(x + 18, rightEdge)
    const top = Math.min(Math.max(y - 90, 12), wrapperRect.height - 220)

    setTooltipPos({ x: left, y: top })
  }

  const hovInfo = hovered ? (HIGHLIGHTED[hovered] || { label: india.locations.find(l => l.id === hovered)?.name }) : null

  return (
    <section className="section-pad bg-gradient-to-b from-white to-[#f0f6ff] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-[#1e3a5f]/10 text-[#1e3a5f] font-semibold text-sm px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
            Our Coverage
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-4">
            Pan India <span className="gradient-text">Network Map</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Hover over the highlighted states to explore our coverage in Uttar Pradesh, Bihar, Jharkhand, West Bengal, Odisha, and Assam.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10 items-start">

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 relative"
          >
            <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 p-4 md:p-6 relative overflow-hidden">
              <svg
                viewBox={india.viewBox}
                className="w-full h-auto"
                style={{ maxHeight: '580px' }}
                aria-label="Map of India"
              >
                {india.locations.map(location => {
                  const isHighlighted = !!HIGHLIGHTED[location.id]
                  const isHovered = hovered === location.id
                  return (
                    <motion.path
                      key={location.id}
                      d={location.path}
                      fill={
                        isHovered
                          ? '#1e3a5f'
                          : isHighlighted
                          ? '#f97316'
                          : '#cbd5e1'
                      }
                      stroke="#fff"
                      strokeWidth="0.8"
                      strokeLinejoin="round"
                      className="cursor-pointer"
                      style={{
                        filter: isHovered ? 'drop-shadow(0 4px 10px rgba(30,58,95,0.45))' : 'none',
                        transition: 'fill 0.18s ease',
                      }}
                      onMouseEnter={(e) => {
                        setHovered(location.id)
                        handleMouseMove(e)
                      }}
                      onMouseMove={handleMouseMove}
                      onMouseLeave={() => setHovered(null)}
                    />
                  )
                })}
              </svg>

              {/* Tooltip */}
              <AnimatePresence>
                {hovInfo && hovered && (
                  <motion.div
                    key={hovered}
                    initial={{ opacity: 0, scale: 0.85, y: 4 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    transition={{ duration: 0.15 }}
                    className="absolute z-20 glass rounded-2xl shadow-2xl p-4 w-64 pointer-events-none"
                    style={{
                      left: Math.min(tooltipPos.x + 14, 370),
                      top: Math.max(tooltipPos.y - 90, 8),
                    }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-[#f97316] shrink-0" />
                      <span className="font-bold text-[#1e3a5f] text-sm leading-tight">{hovInfo.label}</span>
                      {HIGHLIGHTED[hovered] && (
                        <span className="ml-auto shrink-0 bg-[#f97316] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">ACTIVE</span>
                      )}
                    </div>
                    {HIGHLIGHTED[hovered] && (
                      <>
                        <div className="text-xs text-slate-500 space-y-1 mb-2">
                          <div className="flex justify-between">
                            <span>Fleet Size</span>
                            <span className="font-semibold text-[#f97316]">{HIGHLIGHTED[hovered].trucks} trucks</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Coverage</span>
                            <span className="font-medium text-slate-700">{HIGHLIGHTED[hovered].districts}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Hubs</span>
                            <span className="font-medium text-slate-700 text-right ml-2">{HIGHLIGHTED[hovered].hubs}</span>
                          </div>
                        </div>
                        <p className="text-[11px] text-slate-500 pt-2 border-t border-slate-100 italic leading-relaxed">
                          {HIGHLIGHTED[hovered].desc}
                        </p>
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Legend */}
              <div className="absolute bottom-4 left-4 flex items-center gap-4 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-xl shadow-sm">
                <div className="flex items-center gap-1.5">
                  <div className="w-3.5 h-3.5 rounded bg-[#f97316]" />
                  <span className="text-xs text-slate-500">Primary States</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3.5 h-3.5 rounded bg-[#cbd5e1]" />
                  <span className="text-xs text-slate-500">All India</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: State info cards */}
          <div className="space-y-4">
            <h3 className="font-bold text-[#1e3a5f] text-lg mb-5">Primary Operations</h3>
            {Object.entries(HIGHLIGHTED).map(([id, info], i) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.02, x: 4 }}
                onMouseEnter={() => setHovered(id)}
                onMouseLeave={() => setHovered(null)}
                className={`p-4 rounded-2xl border-2 cursor-default transition-all duration-200 ${
                  hovered === id
                    ? 'border-[#f97316] bg-[#fff8f3] shadow-lg shadow-orange-100'
                    : 'border-slate-100 bg-white shadow-sm'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-bold text-[#1e3a5f] text-sm">{info.label}</h4>
                    <p className="text-slate-400 text-xs mt-0.5">{info.districts}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[#f97316] font-bold text-lg">{info.trucks}</span>
                    <p className="text-slate-400 text-[10px]">trucks</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {info.hubs.split(',').slice(0, 2).map(hub => (
                    <span key={hub} className="bg-[#f97316]/10 text-[#f97316] text-[10px] px-2 py-0.5 rounded-full">{hub.trim()}</span>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Total Network */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-br from-[#1e3a5f] to-[#2d5282] rounded-2xl p-5 text-white"
            >
              <div className="flex items-center gap-3 mb-3">
                <Truck className="w-5 h-5 text-[#f97316]" />
                <span className="font-bold">Total Network</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div className="text-2xl font-bold text-[#f97316]">580+</div>
                  <div className="text-white/60 text-xs">Total Trucks</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#f97316]">28</div>
                  <div className="text-white/60 text-xs">States Served</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#f97316]">500+</div>
                  <div className="text-white/60 text-xs">Daily Routes</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#f97316]">99%</div>
                  <div className="text-white/60 text-xs">On-time Rate</div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
