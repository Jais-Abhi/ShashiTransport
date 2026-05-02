import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Truck, Users, Star } from 'lucide-react'

/* ── Coordinate helpers ──────────────────────────────────
   ViewBox: 0 0 560 640
   x = (lon - 68) * 18.7
   y = (38 - lat) * 20
──────────────────────────────────────────────────────── */

const statesData = [
  {
    id: 'jk',
    name: 'Jammu & Kashmir',
    highlighted: true,
    details: {
      capital: 'Srinagar / Jammu',
      trucks: '80+',
      districts: '20 Districts',
      hubs: 'Jammu, Srinagar, Katra',
      desc: 'Connecting the northern frontier — our fleet navigates high-altitude routes year-round.',
    },
    polygon: '93,20 205,20 262,50 243,100 187,100 168,80 131,90 112,120 93,100',
  },
  {
    id: 'ladakh',
    name: 'Ladakh',
    highlighted: false,
    details: { capital: 'Leh', trucks: '20+', districts: '2 Districts', hubs: 'Leh, Kargil', desc: 'High-altitude freight operations.' },
    polygon: '243,20 310,20 310,70 262,60 262,50',
  },
  {
    id: 'hp',
    name: 'Himachal Pradesh',
    highlighted: false,
    details: { capital: 'Shimla', trucks: '40+', districts: '12 Districts', hubs: 'Shimla, Manali', desc: 'Mountain state deliveries.' },
    polygon: '131,90 187,100 205,140 177,150 150,150 140,140',
  },
  {
    id: 'punjab',
    name: 'Punjab',
    highlighted: false,
    details: { capital: 'Chandigarh', trucks: '60+', districts: '23 Districts', hubs: 'Ludhiana, Amritsar', desc: 'Grain belt logistics hub.' },
    polygon: '93,100 131,90 140,140 150,150 131,160 112,160 109,140',
  },
  {
    id: 'haryana',
    name: 'Haryana',
    highlighted: false,
    details: { capital: 'Chandigarh', trucks: '70+', districts: '22 Districts', hubs: 'Gurgaon, Faridabad', desc: 'Gateway to Delhi NCR.' },
    polygon: '150,150 177,150 177,210 158,220 121,210 112,200 112,160 131,160',
  },
  {
    id: 'delhi',
    name: 'Delhi',
    highlighted: false,
    details: { capital: 'New Delhi', trucks: '50+', districts: '11 Districts', hubs: 'New Delhi', desc: 'Capital city distribution hub.' },
    polygon: '165,180 174,180 174,193 165,193',
  },
  {
    id: 'uttarakhand',
    name: 'Uttarakhand',
    highlighted: false,
    details: { capital: 'Dehradun', trucks: '45+', districts: '13 Districts', hubs: 'Haridwar, Dehradun', desc: 'Devbhoomi freight services.' },
    polygon: '187,100 243,100 243,140 205,140',
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    highlighted: false,
    details: { capital: 'Jaipur', trucks: '90+', districts: '33 Districts', hubs: 'Jaipur, Jodhpur, Kota', desc: 'Desert highway logistics.' },
    polygon: '109,140 112,160 131,160 121,210 150,260 103,310 37,310 19,280 9,220 19,160',
  },
  {
    id: 'up',
    name: 'Uttar Pradesh',
    highlighted: true,
    details: {
      capital: 'Lucknow',
      trucks: '200+',
      districts: 'All 75 Districts',
      hubs: 'Lucknow, Kanpur, Varanasi, Agra',
      desc: 'Our largest operational state — densest network covering every district.',
    },
    polygon: '177,150 243,140 310,160 310,210 299,280 168,280 158,220 177,210',
  },
  {
    id: 'bihar',
    name: 'Bihar',
    highlighted: true,
    details: {
      capital: 'Patna',
      trucks: '150+',
      districts: 'All 38 Districts',
      hubs: 'Patna, Gaya, Bhagalpur, Muzaffarpur',
      desc: 'Our headquarters state — the heart of our operations since day one.',
    },
    polygon: '310,210 378,210 374,270 355,280 299,280',
  },
  {
    id: 'sikkim',
    name: 'Sikkim',
    highlighted: false,
    details: { capital: 'Gangtok', trucks: '10+', districts: '4 Districts', hubs: 'Gangtok', desc: 'Himalayan state services.' },
    polygon: '374,194 393,194 393,216 374,216',
  },
  {
    id: 'wb',
    name: 'West Bengal',
    highlighted: true,
    details: {
      capital: 'Kolkata',
      trucks: '120+',
      districts: 'All 23 Districts',
      hubs: 'Kolkata, Howrah, Siliguri, Asansol',
      desc: 'Eastern India gateway — connecting ports and industries.',
    },
    polygon: '378,210 411,220 409,320 374,330 355,320 355,280 374,270',
  },
  {
    id: 'jharkhand',
    name: 'Jharkhand',
    highlighted: false,
    details: { capital: 'Ranchi', trucks: '55+', districts: '24 Districts', hubs: 'Ranchi, Jamshedpur', desc: 'Steel city freight corridor.' },
    polygon: '299,280 355,280 355,320 310,322 290,320',
  },
  {
    id: 'odisha',
    name: 'Odisha',
    highlighted: false,
    details: { capital: 'Bhubaneswar', trucks: '65+', districts: '30 Districts', hubs: 'Bhubaneswar, Cuttack', desc: 'Eastern coast industries.' },
    polygon: '252,320 290,320 355,320 337,410 252,400',
  },
  {
    id: 'chhattisgarh',
    name: 'Chhattisgarh',
    highlighted: false,
    details: { capital: 'Raipur', trucks: '50+', districts: '33 Districts', hubs: 'Raipur, Bhilai', desc: 'Mineral heartland logistics.' },
    polygon: '224,278 290,280 290,320 252,320 252,400 233,400 224,380',
  },
  {
    id: 'mp',
    name: 'Madhya Pradesh',
    highlighted: false,
    details: { capital: 'Bhopal', trucks: '80+', districts: '55 Districts', hubs: 'Bhopal, Indore, Jabalpur', desc: 'Heart of India highway network.' },
    polygon: '112,220 177,210 299,260 233,320 205,340 121,340 112,310',
  },
  {
    id: 'gujarat',
    name: 'Gujarat',
    highlighted: false,
    details: { capital: 'Gandhinagar', trucks: '75+', districts: '33 Districts', hubs: 'Ahmedabad, Surat, Vadodara', desc: 'Industrial powerhouse logistics.' },
    polygon: '1,270 37,270 112,280 121,340 75,360 37,340 9,310',
  },
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    highlighted: false,
    details: { capital: 'Mumbai', trucks: '110+', districts: '36 Districts', hubs: 'Mumbai, Pune, Nagpur, Nashik', desc: 'Financial capital freight hub.' },
    polygon: '86,320 112,320 121,340 233,320 224,400 158,450 107,444 93,430 86,380',
  },
  {
    id: 'goa',
    name: 'Goa',
    highlighted: true,
    details: {
      capital: 'Panaji',
      trucks: '30+',
      districts: 'Both Districts',
      hubs: 'Panaji, Margao, Vasco',
      desc: 'Coastal resort state — tourism & export logistics specialists.',
    },
    polygon: '107,444 118,444 118,462 107,462',
    isSmall: true,
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    highlighted: false,
    details: { capital: 'Bengaluru', trucks: '95+', districts: '31 Districts', hubs: 'Bengaluru, Mysuru, Mangaluru', desc: 'Tech city supply chain.' },
    polygon: '114,390 197,390 196,520 168,520 140,530 114,520',
  },
  {
    id: 'telangana',
    name: 'Telangana',
    highlighted: false,
    details: { capital: 'Hyderabad', trucks: '70+', districts: '33 Districts', hubs: 'Hyderabad, Warangal', desc: 'Pharma and tech corridor.' },
    polygon: '177,362 248,362 252,440 196,450 177,440',
  },
  {
    id: 'ap',
    name: 'Andhra Pradesh',
    highlighted: false,
    details: { capital: 'Amaravati', trucks: '80+', districts: '26 Districts', hubs: 'Visakhapatnam, Vijayawada', desc: 'East coast port logistics.' },
    polygon: '248,362 310,410 229,500 196,510 196,450 252,440',
  },
  {
    id: 'tn',
    name: 'Tamil Nadu',
    highlighted: false,
    details: { capital: 'Chennai', trucks: '90+', districts: '38 Districts', hubs: 'Chennai, Coimbatore, Madurai', desc: 'South India manufacturing hub.' },
    polygon: '196,510 229,500 214,600 168,598 152,590 168,540',
  },
  {
    id: 'kerala',
    name: 'Kerala',
    highlighted: false,
    details: { capital: 'Thiruvananthapuram', trucks: '60+', districts: '14 Districts', hubs: 'Kochi, Kozhikode, Thiruvananthapuram', desc: 'Spice coast delivery network.' },
    polygon: '129,504 168,520 168,540 158,590 152,590 131,550',
  },
  {
    id: 'northeast',
    name: 'North East States',
    highlighted: false,
    details: { capital: 'Various', trucks: '40+', districts: 'Multiple', hubs: 'Guwahati, Imphal, Shillong', desc: 'Seven Sisters — special mountain logistics.' },
    polygon: '408,220 553,220 543,320 449,320 411,310',
  },
]

const highlightedStates = new Set(['jk', 'up', 'bihar', 'wb', 'goa'])

export default function IndiaMap() {
  const [hovered, setHovered] = useState(null)
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.closest('svg').getBoundingClientRect()
    setTooltipPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const hoveredState = statesData.find(s => s.id === hovered)

  return (
    <section className="section-pad bg-gradient-to-b from-white to-[#f0f6ff]">
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
            Hover over highlighted states to explore our operations. We serve all 28 states & 8 UTs.
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
                viewBox="0 0 560 640"
                className="w-full h-auto"
                style={{ maxHeight: '580px' }}
              >
                {statesData.map(state => (
                  <motion.polygon
                    key={state.id}
                    points={state.polygon}
                    fill={
                      hovered === state.id
                        ? '#1e3a5f'
                        : highlightedStates.has(state.id)
                        ? '#f97316'
                        : '#cbd5e1'
                    }
                    stroke="#fff"
                    strokeWidth={state.isSmall ? 0.5 : 1}
                    strokeLinejoin="round"
                    className="cursor-pointer transition-colors duration-150"
                    whileHover={{ scale: 1.015, originX: 0.5, originY: 0.5 }}
                    onMouseEnter={(e) => {
                      setHovered(state.id)
                      handleMouseMove(e)
                    }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => setHovered(null)}
                    style={{ filter: hovered === state.id ? 'drop-shadow(0 4px 8px rgba(30,58,95,0.4))' : 'none' }}
                  />
                ))}

                {/* Goa label (special, tiny state) */}
                <text x="96" y="470" fontSize="5" fill="#fff" fontWeight="700" pointerEvents="none">Goa</text>

                {/* Highlighted state markers */}
                {statesData.filter(s => s.highlighted).map(s => {
                  const points = s.polygon.split(' ').map(p => p.split(',').map(Number))
                  const cx = points.reduce((a, p) => a + p[0], 0) / points.length
                  const cy = points.reduce((a, p) => a + p[1], 0) / points.length
                  return (
                    <g key={`marker-${s.id}`} pointerEvents="none">
                      <circle cx={cx} cy={cy} r="5" fill="#fff" opacity="0.9" />
                      <circle cx={cx} cy={cy} r="3" fill="#1e3a5f" />
                    </g>
                  )
                })}
              </svg>

              {/* Tooltip */}
              <AnimatePresence>
                {hoveredState && (
                  <motion.div
                    key={hoveredState.id}
                    initial={{ opacity: 0, scale: 0.85, y: 4 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    transition={{ duration: 0.15 }}
                    className="absolute z-20 glass rounded-2xl shadow-2xl p-4 w-60 pointer-events-none"
                    style={{
                      left: Math.min(tooltipPos.x + 12, 360),
                      top: Math.max(tooltipPos.y - 80, 8),
                    }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-[#f97316]" />
                      <span className="font-bold text-[#1e3a5f] text-sm">{hoveredState.name}</span>
                      {highlightedStates.has(hoveredState.id) && (
                        <span className="ml-auto bg-[#f97316] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">ACTIVE</span>
                      )}
                    </div>
                    <div className="text-xs text-slate-500 space-y-1">
                      <div className="flex justify-between">
                        <span>Capital</span>
                        <span className="font-medium text-slate-700">{hoveredState.details.capital}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Fleet Size</span>
                        <span className="font-medium text-[#f97316]">{hoveredState.details.trucks} trucks</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Coverage</span>
                        <span className="font-medium text-slate-700">{hoveredState.details.districts}</span>
                      </div>
                    </div>
                    {highlightedStates.has(hoveredState.id) && (
                      <p className="text-[11px] text-slate-500 mt-2 pt-2 border-t border-slate-100 italic">
                        {hoveredState.details.desc}
                      </p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Legend */}
              <div className="absolute bottom-4 left-4 flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 rounded bg-[#f97316]" />
                  <span className="text-xs text-slate-500">Primary States</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 rounded bg-[#cbd5e1]" />
                  <span className="text-xs text-slate-500">All India</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: State cards */}
          <div className="space-y-4">
            <h3 className="font-bold text-[#1e3a5f] text-lg mb-5">Primary Operations</h3>
            {statesData.filter(s => s.highlighted).map((state, i) => (
              <motion.div
                key={state.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.02, x: 4 }}
                onMouseEnter={() => setHovered(state.id)}
                onMouseLeave={() => setHovered(null)}
                className={`p-4 rounded-2xl border-2 cursor-default transition-all duration-200 ${
                  hovered === state.id
                    ? 'border-[#f97316] bg-[#fff8f3] shadow-lg shadow-orange-100'
                    : 'border-slate-100 bg-white shadow-sm'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-bold text-[#1e3a5f] text-sm">{state.name}</h4>
                    <p className="text-slate-400 text-xs">{state.details.capital}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[#f97316] font-bold text-lg">{state.details.trucks}</span>
                    <p className="text-slate-400 text-[10px]">trucks</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-slate-100 text-slate-600 text-[10px] px-2 py-0.5 rounded-full">{state.details.districts}</span>
                  {state.details.hubs.split(',').slice(0, 2).map(hub => (
                    <span key={hub} className="bg-[#f97316]/10 text-[#f97316] text-[10px] px-2 py-0.5 rounded-full">{hub.trim()}</span>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Total */}
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
