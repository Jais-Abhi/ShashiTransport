import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { emoji: '🚛', value: 580,    suffix: '+', label: 'Owned Trucks',         sub: 'All maintained in-house' },
  { emoji: '🏭', value: 12,     suffix: '',  label: 'Loading Hubs',         sub: 'Across Bihar, UP & Bengal' },
  { emoji: '📦', value: 500,    suffix: '+', label: 'Consignments/Day',     sub: 'Average daily dispatches' },
  { emoji: '🛣️', value: 4,      suffix: 'L+',label: 'KM Covered Daily',     sub: 'Combined fleet distance' },
  { emoji: '⚖️', value: 8000,   suffix: '+', label: 'Tons Moved/Month',     sub: 'Across all cargo types' },
  { emoji: '✅', value: 99,     suffix: '%', label: 'On-Time Delivery',     sub: 'Industry-best track record' },
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
    <section className="relative overflow-hidden">
      {/* Highway road strip at top */}
      <div className="h-8 bg-[#111827] relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 right-0 flex items-center">
          <div className="highway-dashes">
            {[0,1].map(copy => (
              <div key={copy} className="flex gap-16 shrink-0 pr-16">
                {Array.from({length: 12}).map((_,i)=>(
                  <div key={i} className="h-2 w-20 shrink-0 bg-[#f97316] rounded opacity-60"/>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-br from-[#1e3a5f] to-[#0f2540] relative">
        {/* BG texture */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage:'radial-gradient(circle, #f97316 1px, transparent 1px)',
          backgroundSize:'40px 40px'
        }}/>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}}
            className="text-center mb-14">
            <span className="inline-block bg-[#f97316]/20 text-[#f97316] font-semibold text-sm px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide border border-[#f97316]/20">
              By The Numbers
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              15 Years. One Promise. <span className="text-[#f97316]">Always On Time.</span>
            </h2>
            <p className="text-white/50 mt-3 text-sm">Numbers that define The Shashi Transport Company</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.map((s, i) => (
              <motion.div key={s.label}
                initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
                transition={{duration:0.5,delay:i*0.08}}
                whileHover={{scale:1.06,y:-4}}
                className="group bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:bg-white/12 hover:border-[#f97316]/30 transition-all duration-300 cursor-default">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{s.emoji}</div>
                <div className="text-2xl font-bold text-[#f97316] mb-1">
                  <Counter target={s.value} suffix={s.suffix}/>
                </div>
                <div className="text-white/80 text-xs font-semibold mb-1">{s.label}</div>
                <div className="text-white/35 text-[10px] leading-tight">{s.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Road strip at bottom */}
      <div className="h-8 bg-[#111827] relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 right-0 flex items-center">
          <div className="highway-dashes-rev">
            {[0,1].map(copy => (
              <div key={copy} className="flex gap-16 shrink-0 pr-16">
                {Array.from({length: 12}).map((_,i)=>(
                  <div key={i} className="h-2 w-20 shrink-0 bg-[#f97316] rounded opacity-60"/>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
