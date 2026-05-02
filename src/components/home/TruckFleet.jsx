import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function MiniTruckSVG() {
  return (
    <svg viewBox="0 0 260 110" className="w-full h-auto" aria-hidden="true">
      <defs>
        <linearGradient id="miniSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f0f9ff"/>
          <stop offset="100%" stopColor="#e0f2fe"/>
        </linearGradient>
        <style>{`
          @keyframes miniRoad { from{transform:translateX(0)} to{transform:translateX(80px)} }
          .mini-road { animation: miniRoad 1s linear infinite; }
        `}</style>
      </defs>
      <rect width="260" height="110" fill="url(#miniSky)"/>
      {/* Road */}
      <rect y="78" width="260" height="32" fill="#1e293b"/>
      <rect y="80" width="260" height="30" fill="#334155"/>
      <g className="mini-road">
        {[-80,0,80,160,240].map((x,i)=>(
          <rect key={i} x={x} y="92" width="50" height="3" rx="1.5" fill="#f97316" opacity="0.5"/>
        ))}
      </g>
      {/* Cab */}
      <rect x="20" y="46" width="52" height="36" rx="5" fill="#f97316"/>
      <rect x="28" y="52" width="36" height="22" rx="3" fill="#7dd3fc" opacity="0.7"/>
      <rect x="9" y="68" width="15" height="14" rx="2" fill="#c2560a"/>
      <rect x="11" y="70" width="11" height="10" rx="1" fill="#1e3a5f"/>
      {[0,2,4,6,8].map(y=><line key={y} x1="11" y1={71+y} x2="22" y2={71+y} stroke="#f97316" strokeWidth="0.5" opacity="0.5"/>)}
      <rect x="11" y="60" width="10" height="6" rx="2" fill="#fef9c3" opacity="0.9"/>
      {/* Body */}
      <rect x="70" y="38" width="160" height="44" rx="3" fill="#1e3a5f"/>
      <rect x="70" y="38" width="160" height="5" fill="#f97316"/>
      <rect x="70" y="77" width="160" height="5" fill="#f97316" opacity="0.7"/>
      <text x="150" y="63" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700" fontFamily="sans-serif" letterSpacing="2">STC LOGISTICS</text>
      <line x1="70" y1="57" x2="230" y2="57" stroke="#2d4a6f" strokeWidth="1"/>
      {/* Wheels */}
      <circle cx="42" cy="90" r="14" fill="#111" stroke="#333" strokeWidth="2"/>
      <circle cx="42" cy="90" r="7" fill="#333"/>
      <circle cx="42" cy="90" r="2.5" fill="#555"/>
      <circle cx="175" cy="90" r="14" fill="#111" stroke="#333" strokeWidth="2"/>
      <circle cx="175" cy="90" r="7" fill="#333"/>
      <circle cx="193" cy="90" r="14" fill="#111" stroke="#333" strokeWidth="2"/>
      <circle cx="193" cy="90" r="7" fill="#333"/>
    </svg>
  )
}

function MediumTruckSVG() {
  return (
    <svg viewBox="0 0 340 110" className="w-full h-auto" aria-hidden="true">
      <defs>
        <linearGradient id="medSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff7ed"/>
          <stop offset="100%" stopColor="#ffedd5"/>
        </linearGradient>
        <style>{`
          @keyframes medRoad { from{transform:translateX(0)} to{transform:translateX(80px)} }
          .med-road { animation: medRoad 0.85s linear infinite; }
        `}</style>
      </defs>
      <rect width="340" height="110" fill="url(#medSky)"/>
      <rect y="78" width="340" height="32" fill="#1e293b"/>
      <rect y="80" width="340" height="30" fill="#334155"/>
      <g className="med-road">
        {[-80,0,80,160,240,320].map((x,i)=>(
          <rect key={i} x={x} y="92" width="50" height="3" rx="1.5" fill="#f97316" opacity="0.5"/>
        ))}
      </g>
      {/* Cab */}
      <rect x="20" y="42" width="68" height="40" rx="5" fill="#f97316"/>
      <rect x="28" y="48" width="46" height="26" rx="3" fill="#7dd3fc" opacity="0.7"/>
      <rect x="30" y="50" width="14" height="8" rx="2" fill="white" opacity="0.2"/>
      <rect x="8" y="62" width="14" height="20" rx="2" fill="#c2560a"/>
      <rect x="10" y="64" width="10" height="16" rx="1" fill="#1e3a5f"/>
      {[0,3,6,9,12].map(y=><line key={y} x1="10" y1={65+y} x2="20" y2={65+y} stroke="#f97316" strokeWidth="0.6" opacity="0.4"/>)}
      <rect x="10" y="53" width="12" height="8" rx="2" fill="#fef9c3" opacity="0.9"/>
      <rect x="6" y="74" width="20" height="4" rx="2" fill="#555"/>
      {/* Side mirror */}
      <rect x="14" y="48" width="9" height="6" rx="1" fill="#c2560a"/>
      {/* Body */}
      <rect x="86" y="30" width="232" height="52" rx="3" fill="#1e3a5f"/>
      <rect x="86" y="30" width="232" height="6" fill="#f97316"/>
      <rect x="86" y="76" width="232" height="6" fill="#f97316" opacity="0.7"/>
      <text x="202" y="58" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="800" fontFamily="sans-serif" letterSpacing="3">SHASHI TRANSPORT</text>
      <text x="202" y="70" textAnchor="middle" fill="#94a3b8" fontSize="7" fontFamily="monospace" letterSpacing="2">22 FT · SINGLE AXLE</text>
      {[0,14,28].map((y,i)=><line key={i} x1="86" y1={44+y} x2="318" y2={44+y} stroke="#2d4a6f" strokeWidth="0.8" opacity="0.6"/>)}
      {/* Rivets */}
      {[100,130,160,190,220,250,280].map((x,i)=>(
        <circle key={i} cx={x} cy="33" r="2" fill="#2d4a6f"/>
      ))}
      {/* Wheels */}
      <circle cx="46" cy="90" r="15" fill="#111" stroke="#333" strokeWidth="2"/>
      <circle cx="46" cy="90" r="8" fill="#333"/>
      <circle cx="46" cy="90" r="3" fill="#555"/>
      {[0,60,120,180,240,300].map((a,i)=>{
        const r=a*Math.PI/180
        return <line key={i} x1={46+3*Math.cos(r)} y1={90+3*Math.sin(r)} x2={46+7*Math.cos(r)} y2={90+7*Math.sin(r)} stroke="#555" strokeWidth="2"/>
      })}
      <circle cx="215" cy="90" r="15" fill="#111" stroke="#333" strokeWidth="2"/>
      <circle cx="215" cy="90" r="8" fill="#333"/>
      <circle cx="215" cy="90" r="3" fill="#555"/>
      <circle cx="235" cy="90" r="15" fill="#111" stroke="#333" strokeWidth="2"/>
      <circle cx="235" cy="90" r="8" fill="#333"/>
      <circle cx="235" cy="90" r="3" fill="#555"/>
    </svg>
  )
}

function HeavyTruckSVG() {
  return (
    <svg viewBox="0 0 440 110" className="w-full h-auto" aria-hidden="true">
      <defs>
        <linearGradient id="hvySky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f0fdf4"/>
          <stop offset="100%" stopColor="#dcfce7"/>
        </linearGradient>
        <style>{`
          @keyframes hvyRoad { from{transform:translateX(0)} to{transform:translateX(80px)} }
          .hvy-road { animation: hvyRoad 0.75s linear infinite; }
        `}</style>
      </defs>
      <rect width="440" height="110" fill="url(#hvySky)"/>
      <rect y="78" width="440" height="32" fill="#1e293b"/>
      <rect y="80" width="440" height="30" fill="#334155"/>
      <g className="hvy-road">
        {[-80,0,80,160,240,320,400].map((x,i)=>(
          <rect key={i} x={x} y="92" width="50" height="3" rx="1.5" fill="#f97316" opacity="0.5"/>
        ))}
      </g>
      {/* Cab sleeper */}
      <rect x="18" y="38" width="82" height="44" rx="5" fill="#f97316"/>
      <rect x="18" y="38" width="82" height="8" rx="4" fill="#e06010"/>
      <rect x="26" y="46" width="55" height="28" rx="3" fill="#7dd3fc" opacity="0.7"/>
      <rect x="28" y="48" width="18" height="10" rx="2" fill="white" opacity="0.2"/>
      <rect x="5" y="62" width="16" height="20" rx="2" fill="#c2560a"/>
      <rect x="7" y="64" width="12" height="16" rx="1" fill="#1e3a5f"/>
      {[0,3,6,9,12].map(y=><line key={y} x1="7" y1={65+y} x2="19" y2={65+y} stroke="#f97316" strokeWidth="0.6" opacity="0.4"/>)}
      <rect x="8" y="52" width="13" height="8" rx="2" fill="#fef9c3" opacity="0.9"/>
      <rect x="3" y="76" width="22" height="4" rx="2" fill="#555"/>
      <rect x="12" y="44" width="10" height="7" rx="2" fill="#c2560a"/>
      {/* Exhaust */}
      <rect x="21" y="20" width="7" height="20" rx="3" fill="#444"/>
      <circle cx="24" cy="20" r="5" fill="#666" opacity="0.4"/>
      <circle cx="26" cy="14" r="4" fill="#555" opacity="0.25"/>
      {/* Trailer */}
      <rect x="98" y="26" width="318" height="56" rx="3" fill="#1e3a5f" stroke="#f9731618" strokeWidth="1.5"/>
      <rect x="98" y="26" width="318" height="7" rx="2" fill="#f97316" opacity="0.9"/>
      <rect x="98" y="75" width="318" height="7" rx="1" fill="#f97316" opacity="0.65"/>
      {[110,145,180,215,250,285,320,355,385].map((x,i)=>(
        <circle key={i} cx={x} cy="29" r="2" fill="#2d4a6f"/>
      ))}
      <text x="257" y="52" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="800" fontFamily="sans-serif" letterSpacing="4">SHASHI TRANSPORT CO.</text>
      <text x="257" y="66" textAnchor="middle" fill="#94a3b8" fontSize="7.5" fontFamily="monospace" letterSpacing="3">40 FT MULTI-AXLE · PATNA</text>
      <line x1="98" y1="43" x2="416" y2="43" stroke="#2d4a6f" strokeWidth="0.8" opacity="0.6"/>
      <line x1="98" y1="58" x2="416" y2="58" stroke="#2d4a6f" strokeWidth="0.8" opacity="0.6"/>
      {/* Coupling */}
      <rect x="94" y="70" width="10" height="8" rx="2" fill="#444"/>
      {/* Wheels front */}
      <circle cx="55" cy="90" r="16" fill="#111" stroke="#333" strokeWidth="2"/>
      <circle cx="55" cy="90" r="9" fill="#222" stroke="#444" strokeWidth="1.5"/>
      <circle cx="55" cy="90" r="3.5" fill="#555"/>
      {[0,60,120,180,240,300].map((a,i)=>{
        const r=a*Math.PI/180
        return <line key={i} x1={55+3.5*Math.cos(r)} y1={90+3.5*Math.sin(r)} x2={55+8.5*Math.cos(r)} y2={90+8.5*Math.sin(r)} stroke="#555" strokeWidth="2.5"/>
      })}
      {/* Drive axle */}
      <circle cx="215" cy="90" r="16" fill="#111" stroke="#333" strokeWidth="2"/>
      <circle cx="215" cy="90" r="9" fill="#222" stroke="#444" strokeWidth="1.5"/>
      <circle cx="215" cy="90" r="3.5" fill="#555"/>
      <circle cx="235" cy="90" r="16" fill="#111" stroke="#333" strokeWidth="2"/>
      <circle cx="235" cy="90" r="9" fill="#222" stroke="#444" strokeWidth="1.5"/>
      <circle cx="235" cy="90" r="3.5" fill="#555"/>
      {/* Trailer rear axles */}
      <circle cx="337" cy="90" r="16" fill="#111" stroke="#333" strokeWidth="2"/>
      <circle cx="337" cy="90" r="9" fill="#222" stroke="#444" strokeWidth="1.5"/>
      <circle cx="337" cy="90" r="3.5" fill="#555"/>
      <circle cx="357" cy="90" r="16" fill="#111" stroke="#333" strokeWidth="2"/>
      <circle cx="357" cy="90" r="9" fill="#222" stroke="#444" strokeWidth="1.5"/>
      <circle cx="357" cy="90" r="3.5" fill="#555"/>
      {/* Mudflaps */}
      <rect x="73" y="76" width="5" height="16" rx="1" fill="#333"/>
      <rect x="310" y="76" width="5" height="16" rx="1" fill="#333"/>
    </svg>
  )
}

const fleet = [
  {
    id: 'mini',
    name: 'Mini & Tempo Trucks',
    subtitle: 'Last-Mile & City Delivery',
    capacity: 'Up to 2 Tons',
    length: '8 ft – 14 ft',
    axles: '2-axle',
    types: ['Tata Ace', 'Mahindra Bolero', 'Eicher 10.90'],
    uses: ['Retail distribution', 'E-commerce last mile', 'Intra-city cargo', 'Small business shipments'],
    color: '#f97316',
    bg: 'from-orange-50 to-amber-50',
    border: 'border-orange-200',
    Svg: MiniTruckSVG,
  },
  {
    id: 'medium',
    name: 'Medium Trucks',
    subtitle: 'State & Regional Freight',
    capacity: '5 – 15 Tons',
    length: '17 ft – 22 ft',
    axles: '2–3 axle',
    types: ['Tata 1109', 'Ashok Leyland 2518', 'Mahindra Furio'],
    uses: ['Wholesale trade', 'Factory-to-warehouse', 'Inter-district delivery', 'FMCG distribution'],
    color: '#3b82f6',
    bg: 'from-blue-50 to-sky-50',
    border: 'border-blue-200',
    Svg: MediumTruckSVG,
  },
  {
    id: 'heavy',
    name: 'Heavy Multi-Axle Trucks',
    subtitle: 'Long-Haul Pan India Freight',
    capacity: '20 – 40 Tons',
    length: '32 ft – 40 ft',
    axles: '5–7 axle',
    types: ['Tata Signa 4825', 'Volvo FH Series', 'Eicher Pro 8031'],
    uses: ['Steel & heavy industry', 'Construction material', 'Container transport', 'Chemical & pharma'],
    color: '#10b981',
    bg: 'from-emerald-50 to-green-50',
    border: 'border-emerald-200',
    Svg: HeavyTruckSVG,
  },
]

export default function TruckFleet() {
  const [active, setActive] = useState('medium')
  const current = fleet.find(f => f.id === active)

  return (
    <section className="section-pad bg-[#0f1c2e] relative overflow-hidden">
      {/* BG decoration */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage:'linear-gradient(#ffffff 1px,transparent 1px),linear-gradient(90deg,#ffffff 1px,transparent 1px)',
        backgroundSize:'80px 80px'
      }}/>
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-60 bg-[#f97316]/8 rounded-full blur-3xl"/>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7}}
          className="text-center mb-12">
          <span className="inline-block bg-[#f97316]/20 text-[#f97316] font-semibold text-sm px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide border border-[#f97316]/20">
            Our Fleet
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Right Truck for <span className="text-[#f97316]">Every Load</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            580+ owned trucks across 3 categories — mini tempos for last-mile delivery to 40-ft multi-axle for heavy industrial freight.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {fleet.map(f => (
            <button key={f.id} onClick={() => setActive(f.id)}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-250 border ${
                active === f.id
                  ? 'text-white border-transparent shadow-lg'
                  : 'bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white'
              }`}
              style={active === f.id ? {background: f.color, borderColor: f.color} : {}}>
              {f.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div key={active}
            initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}}
            transition={{duration:0.35}}
            className="grid lg:grid-cols-5 gap-6 items-center">

            {/* Truck SVG — large */}
            <div className="lg:col-span-3 bg-white/5 border border-white/10 rounded-3xl p-6 overflow-hidden relative">
              <div className="absolute top-3 left-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full animate-pulse" style={{background: current.color}}/>
                <span className="text-white/50 text-xs font-mono">FLEET LIVE VIEW</span>
              </div>
              <div className="mt-4">
                <current.Svg/>
              </div>
              {/* Specs bar */}
              <div className="flex gap-4 mt-4 pt-4 border-t border-white/10 flex-wrap">
                {[
                  {label:'Max Capacity', val: current.capacity},
                  {label:'Body Length',  val: current.length},
                  {label:'Axle Config',  val: current.axles},
                ].map(s => (
                  <div key={s.label} className="text-center px-4">
                    <div className="font-bold text-white text-sm">{s.val}</div>
                    <div className="text-white/40 text-xs mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Info panel */}
            <div className="lg:col-span-2 space-y-5">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{color: current.color}}>
                  {current.subtitle}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{current.name}</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  Available in our fleet across all major dispatch hubs. Ready within 4–6 hours of booking.
                </p>
              </div>

              {/* Vehicle models */}
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Available Models</p>
                <div className="flex flex-wrap gap-2">
                  {current.types.map(t => (
                    <span key={t} className="bg-white/8 border border-white/10 text-white/70 text-xs px-3 py-1.5 rounded-lg">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Use cases */}
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Best For</p>
                <ul className="space-y-2">
                  {current.uses.map(u => (
                    <li key={u} className="flex items-center gap-2 text-sm text-white/70">
                      <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{background: current.color}}/>
                      {u}
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/get-quote"
                className="inline-flex items-center gap-2 font-bold text-sm px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                style={{background: current.color, color: 'white', boxShadow: `0 4px 20px ${current.color}50`}}>
                Book This Truck <ArrowRight className="w-4 h-4"/>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
