import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ArrowRight, Shield, Clock, MapPin, Phone } from 'lucide-react'

const stats = [
  { val: '580+', label: 'Trucks' },
  { val: '28',   label: 'States' },
  { val: '15+',  label: 'Years' },
  { val: '99%',  label: 'On-Time' },
]

const badges = [
  { icon: Shield, text: 'ISO 9001 Certified' },
  { icon: Clock,  text: '24/7 Operations' },
  { icon: MapPin, text: 'Pan India Network' },
]

function TruckScene() {
  return (
    <svg viewBox="-150 -210 4450 1820" className="w-full h-auto" aria-hidden="true">
      <defs>
        <linearGradient id="heroSkyG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#04091a"/>
          <stop offset="58%" stopColor="#0b1e38"/>
          <stop offset="80%" stopColor="#122848"/>
          <stop offset="92%" stopColor="#7c2d12" stopOpacity="0.45"/>
          <stop offset="100%" stopColor="#111827"/>
        </linearGradient>
      </defs>

      {/* Sky */}
      <rect x="-150" y="-210" width="4450" height="1820" fill="url(#heroSkyG)"/>
      {/* Stars */}
      {[[180,-170],[550,-100],[1050,-160],[1650,-80],[2200,-140],[2900,-60],[3500,-130],[3900,-80],[700,-50],[1400,-120],[2600,-90],[3200,-160]].map(([sx,sy],i)=>(
        <circle key={i} cx={sx} cy={sy} r={i%3===0?10:6} fill="white" opacity={i%2===0?0.55:0.3}/>
      ))}
      {/* Moon */}
      <circle cx="3900" cy="-120" r="70" fill="#fef3c7" opacity="0.85"/>
      <circle cx="3930" cy="-138" r="55" fill="#0b1e38"/>

      {/* Horizon glow */}
      <rect x="-150" y="1048" width="4450" height="65" fill="#ea580c" opacity="0.11"/>
      {/* Road surface */}
      <rect x="-150" y="1100" width="4450" height="510" fill="#111827"/>
      <rect x="-150" y="1122" width="4450" height="488" fill="#1a2640"/>
      {/* Road shoulder */}
      <rect x="-150" y="1102" width="4450" height="7" fill="#f97316" opacity="0.25"/>
      {/* Road center dashes */}
      <g>
        <animateTransform attributeName="transform" type="translate" from="0 0" to="400 0" dur="0.9s" repeatCount="indefinite"/>
        {[-800,-400,0,400,800,1200,1600,2000,2400,2800,3200,3600,4000,4400].map((x,i)=>(
          <rect key={i} x={x} y="1210" width="260" height="22" rx="11" fill="#f97316" opacity="0.5"/>
        ))}
      </g>

      {/* ── TRAILER 1 (left) ── */}
      <rect x="818" y="20" width="1563" height="778" rx="10" fill="#1e3a5f"/>
      <rect x="818" y="20" width="1563" height="40" fill="#f97316"/>
      <rect x="818" y="756" width="1563" height="42" fill="#f97316" opacity="0.75"/>
      <rect x="861" y="57" width="1476" height="703" fill="#162d4a"/>
      {[863,894,882,957,988,976,1052,1082,1070,1146,1177,1164,1240,1271,1258,1334,1365,1352,1428,1459,1446,1522,1553,1540,1616,1647,1634,1710,1741,1729,1804,1835,1823,1898,1929,1917,1993,2023,2011,2087,2118,2105,2181,2212,2199,2275,2306,2293].map((x,i)=>{
        const colors=['#0f2240','#2d5282','#1e3a5f']
        return <rect key={i} x={x} y="57" width={i%3===2?25:31} height="703" fill={colors[i%3]}/>
      })}
      <rect x="2337" y="20" width="44" height="778" fill="#1e3a5f"/>
      <rect x="2376" y="20" width="5" height="778" fill="#f97316"/>
      <rect x="818" y="20" width="44" height="778" fill="#1e3a5f"/>
      <text x="1598" y="430" textAnchor="middle" fill="#f97316" fontSize="90" fontWeight="900" fontFamily="sans-serif" opacity="0.9" letterSpacing="4">SHASHI</text>
      <text x="1598" y="540" textAnchor="middle" fill="white" fontSize="60" fontFamily="sans-serif" opacity="0.4" letterSpacing="10">TRANSPORT CO.</text>

      {/* ── TRAILER 2 (right) ── */}
      <rect x="2335" y="20" width="1563" height="778" rx="10" fill="#1e3a5f"/>
      <rect x="2335" y="20" width="1563" height="40" fill="#f97316"/>
      <rect x="2335" y="756" width="1563" height="42" fill="#f97316" opacity="0.75"/>
      <rect x="2378" y="57" width="1476" height="703" fill="#162d4a"/>
      {[2380,2411,2399,2475,2505,2493,2569,2600,2587,2663,2694,2681,2757,2788,2775,2851,2882,2869,2945,2976,2963,3039,3070,3057,3133,3164,3151,3227,3258,3246,3321,3352,3340,3415,3446,3434,3510,3540,3528,3604,3635,3622,3698,3729,3716,3792,3823,3810].map((x,i)=>{
        const colors=['#0f2240','#2d5282','#1e3a5f']
        return <rect key={i} x={x} y="57" width={i%3===2?25:31} height="703" fill={colors[i%3]}/>
      })}
      <rect x="3855" y="20" width="44" height="778" fill="#1e3a5f"/>
      <rect x="3893" y="20" width="5" height="778" fill="#f97316"/>
      <rect x="2335" y="20" width="44" height="778" fill="#1e3a5f"/>
      <text x="3115" y="430" textAnchor="middle" fill="#f97316" fontSize="90" fontWeight="900" fontFamily="sans-serif" opacity="0.9" letterSpacing="4">PATNA · INDIA</text>
      <text x="3115" y="540" textAnchor="middle" fill="white" fontSize="55" fontFamily="sans-serif" opacity="0.4" letterSpacing="8">40FT MULTI-AXLE</text>

      {/* ── CHASSIS ── */}
      <rect x="778" y="784" width="3069" height="209" fill="#97999C"/>
      <rect x="778" y="876" width="3069" height="117" fill="#5E6063"/>
      <rect x="777" y="784" width="3180" height="89" fill="#231F20"/>
      <rect x="829" y="866" width="3023" height="56" fill="#56595B"/>

      {/* ── WHEEL ARCH BOGIES ── */}
      <path fill="#393B3C" d="M1416,1126H937c-53,0-96-43-96-96s43-96,96-96h480c53,0,96,43,96,96S1469,1126,1416,1126z"/>
      <path fill="#393B3C" d="M2928,1126H2449c-53,0-96-43-96-96s43-96,96-96h480c53,0,96,43,96,96S2981,1126,2928,1126z"/>
      {/* Suspension arms */}
      <polygon fill="#393B3C" points="2240,941 2170,941 2140,941 1625,941 1519,1102 1563,1102 1653,966 2140,966 2302,1102 2346,1102"/>
      <polygon fill="#393B3C" points="3751,941 3681,941 3652,941 3137,941 3031,1102 3074,1102 3165,966 3652,966 3814,1102 3857,1102"/>

      {/* ── CAB ── */}
      <path fill="#B5B79A" d="M795,406c0,0-1.6-53-82-61H359c0,0-36-5-64,61L161,666c0,0-9.8,29-35,29c0,0-58,10-58,60l-7,198c0,0,0.1,43,18,45h321l62-65h333L795,406z"/>
      <polygon fill="#1E1A22" points="302,432 184,683 493,686 493,432"/>
      <polygon fill="#3C3841" points="313,439 206,666 485,668 485,439"/>
      <path fill="#9FA288" d="M328,412h441c0,0-29-58-67-55H359c0,0-26,0.9-37,22l-20,33H328z"/>
      <path fill="#9FA288" d="M185,711c0,0-68-10-87,30l4,201l297,6c0,0,49-78,79-76V710L185,711z"/>
      <path fill="#3D3F3C" d="M117,765c-6.6,28-24,48-39,45c-15-4-22-29-15-57c6.6-28,24-48,39-45C117,712,124,737,117,765z"/>
      <ellipse cx="87" cy="761" rx="30" ry="44" fill="#E6E8E3"/>
      <ellipse cx="87" cy="745" rx="14" ry="16" fill="#fff"/>
      <path fill="#2D2E2F" d="M91,973v98c0,0-5.8,21,22,25h280l89-149h242l74,126V924H131L91,973z"/>
      <rect x="97" y="1067" width="315" height="56" fill="#231F20"/>
      <rect x="3765" y="853" width="132" height="142" fill="#423D3E"/>
      {/* Exhaust pipe */}
      <rect x="3914" y="806" width="46" height="73" fill="#CF6528"/>
      <path fill="#1E1A22" d="M527,431v252h95c0,0,56-5,64-39V449c0,0-5-30-34-31C652,430,526,430,527,431z"/>
      <path fill="#3C3841" d="M535,448V665h82c0,0,48-4,55-34V457c0,0-4-26-30-27C642,430,534,447,535,448z"/>
      <polygon fill="#9FA288" points="717,435 717,914 778,914 778,434"/>

      {/* Exhaust smoke (SVG-native animate) */}
      <circle cx="3937" cy="790" r="22" fill="#888" opacity="0.5">
        <animate attributeName="cy" from="790" to="680" dur="1.3s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.5;0" dur="1.3s" repeatCount="indefinite"/>
        <animate attributeName="r" values="22;40" dur="1.3s" repeatCount="indefinite"/>
      </circle>
      <circle cx="3945" cy="760" r="28" fill="#777" opacity="0.35">
        <animate attributeName="cy" from="760" to="640" dur="1.3s" begin="0.45s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.35;0" dur="1.3s" begin="0.45s" repeatCount="indefinite"/>
        <animate attributeName="r" values="28;50" dur="1.3s" begin="0.45s" repeatCount="indefinite"/>
      </circle>
      <circle cx="3930" cy="740" r="18" fill="#666" opacity="0.2">
        <animate attributeName="cy" from="740" to="610" dur="1.3s" begin="0.9s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.2;0" dur="1.3s" begin="0.9s" repeatCount="indefinite"/>
        <animate attributeName="r" values="18;38" dur="1.3s" begin="0.9s" repeatCount="indefinite"/>
      </circle>

      {/* ── WHEELS ── */}
      <circle cx="604" cy="1136" r="166" fill="#17191A"/>
      <circle cx="604" cy="1134" r="151" fill="#393B3C"/>
      <circle cx="604" cy="1135" r="83" fill="#2F3133"/>
      <circle cx="604" cy="1132" r="52" fill="#5A5B5E"/>
      <path fill="#525456" d="M604,1028c-59,0-108,48-108,108s48,108,108,108s108-48,108-108S663,1028,604,1028z M604,1232c-53,0-96-43-96-96s43-96,96-96s96,43,96,96S657,1232,604,1232z"/>
      <circle cx="1759" cy="1136" r="166" fill="#17191A"/>
      <circle cx="1759" cy="1134" r="151" fill="#393B3C"/>
      <circle cx="1759" cy="1135" r="83" fill="#2F3133"/>
      <circle cx="1759" cy="1132" r="52" fill="#5A5B5E"/>
      <path fill="#525456" d="M1759,1028c-59,0-108,48-108,108s48,108,108,108s108-48,108-108S1818,1028,1759,1028z M1759,1232c-53,0-96-43-96-96s43-96,96-96s96,43,96,96S1812,1232,1759,1232z"/>
      <circle cx="2106" cy="1136" r="166" fill="#17191A"/>
      <circle cx="2106" cy="1134" r="151" fill="#393B3C"/>
      <circle cx="2106" cy="1135" r="83" fill="#2F3133"/>
      <circle cx="2106" cy="1132" r="52" fill="#5A5B5E"/>
      <path fill="#525456" d="M2106,1028c-59,0-108,48-108,108s48,108,108,108s108-48,108-108S2165,1028,2106,1028z M2106,1232c-53,0-96-43-96-96s43-96,96-96s96,43,96,96S2159,1232,2106,1232z"/>
      <circle cx="3279" cy="1136" r="166" fill="#17191A"/>
      <circle cx="3279" cy="1134" r="151" fill="#393B3C"/>
      <circle cx="3279" cy="1135" r="83" fill="#2F3133"/>
      <circle cx="3279" cy="1132" r="52" fill="#5A5B5E"/>
      <path fill="#525456" d="M3279,1028c-59,0-108,48-108,108s48,108,108,108s108-48,108-108S3338,1028,3279,1028z M3279,1232c-53,0-96-43-96-96s43-96,96-96s96,43,96,96S3332,1232,3279,1232z"/>
      <circle cx="3625" cy="1136" r="166" fill="#17191A"/>
      <circle cx="3625" cy="1134" r="151" fill="#393B3C"/>
      <circle cx="3625" cy="1135" r="83" fill="#2F3133"/>
      <circle cx="3625" cy="1132" r="52" fill="#5A5B5E"/>
      <path fill="#525456" d="M3625,1028c-59,0-108,48-108,108s48,108,108,108s108-48,108-108S3684,1028,3625,1028z M3625,1232c-53,0-96-43-96-96s43-96,96-96s96,43,96,96S3678,1232,3625,1232z"/>

      {/* ── INFO BADGES (baked into SVG) ── */}
      {/* Fleet Online — top left */}
      <rect x="60" y="-160" width="560" height="130" rx="22" fill="#f97316"/>
      <text x="340" y="-105" textAnchor="middle" fill="white" fontSize="38" fontWeight="600" fontFamily="sans-serif" letterSpacing="4">FLEET ONLINE</text>
      <text x="340" y="-52" textAnchor="middle" fill="white" fontSize="72" fontWeight="900" fontFamily="sans-serif">234 Trucks</text>

      {/* Active Route — top right */}
      <rect x="3480" y="-160" width="820" height="130" rx="22" fill="#1e3a5f" stroke="#f97316" strokeWidth="5" opacity="0.95"/>
      <text x="3890" y="-105" textAnchor="middle" fill="#f97316" fontSize="34" fontWeight="700" fontFamily="sans-serif" letterSpacing="5">ACTIVE ROUTE</text>
      <text x="3890" y="-55" textAnchor="middle" fill="white" fontSize="62" fontWeight="800" fontFamily="sans-serif">Patna → Mumbai</text>
      <text x="3890" y="-15" textAnchor="middle" fill="#94a3b8" fontSize="36" fontFamily="monospace">1,847 KM · ETA 28h</text>
    </svg>
  )
}

export default function Hero() {
  const particlesRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      particlesRef.current.forEach((el) => {
        if (!el) return
        gsap.to(el, {
          y: `-=${20 + Math.random() * 30}`,
          x: `+=${(Math.random() - 0.5) * 20}`,
          opacity: 0,
          duration: 2 + Math.random() * 2,
          delay: Math.random() * 2,
          repeat: -1,
          ease: 'power1.out',
          onRepeat: () => { gsap.set(el, { y: 0, x: 0, opacity: 0.6 }) }
        })
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#080f1e] via-[#1e3a5f] to-[#0f2540]">

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: 'linear-gradient(#ffffff 1px,transparent 1px),linear-gradient(90deg,#ffffff 1px,transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#f97316]/15 rounded-full blur-3xl float-anim" />
      <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl float-anim" style={{animationDelay:'2s'}} />

      {/* Floating particles */}
      {Array.from({length: 10}).map((_, i) => (
        <div key={i} ref={el => particlesRef.current[i] = el}
          className="absolute w-1.5 h-1.5 bg-[#f97316]/50 rounded-full"
          style={{ left:`${10+Math.random()*80}%`, top:`${20+Math.random()*60}%`, opacity:0.5 }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* ── LEFT: Text ── */}
          <div>
            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"/>
              <span className="text-white/90 text-sm font-medium">Fleet Dispatching — 24 × 7</span>
            </motion.div>

            <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.7,delay:0.15}}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
              India's Road.<br/>
              <span className="text-[#f97316]">Our Trucks.</span><br/>
              <span className="text-white/85 text-4xl sm:text-5xl">Your Cargo — Delivered.</span>
            </motion.h1>

            <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.3}}
              className="text-white/65 text-lg leading-relaxed mb-7 max-w-lg">
              580+ trucks running every day — from Bihar's loading docks to Goa's ports, from Kashmir's mountain routes to Bengal's industrial belts. Full loads, part loads, cold chain, express.
            </motion.p>

            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.4}}
              className="flex flex-wrap gap-2.5 mb-8">
              {badges.map(({icon:Icon,text}) => (
                <div key={text} className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-lg px-3 py-2">
                  <Icon className="w-4 h-4 text-[#f97316]"/>
                  <span className="text-white/80 text-sm">{text}</span>
                </div>
              ))}
              <a href="tel:+918888888888" className="flex items-center gap-2 bg-[#f97316]/20 border border-[#f97316]/40 rounded-lg px-3 py-2">
                <Phone className="w-4 h-4 text-[#f97316]"/>
                <span className="text-white/80 text-sm">+91 88888 88888</span>
              </a>
            </motion.div>

            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.5}}
              className="flex flex-wrap gap-4 mb-12">
              <Link to="/get-quote"
                className="group flex items-center gap-2 shimmer-btn text-white font-bold px-8 py-4 rounded-xl shadow-2xl hover:-translate-y-1 transition-transform duration-200 text-base">
                Get Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"/>
              </Link>
              <Link to="/services"
                className="flex items-center gap-2 bg-white/10 border border-white/25 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-colors duration-200">
                View Fleet & Services
              </Link>
            </motion.div>

            {/* Mini stats row */}
            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.65}}
              className="grid grid-cols-4 gap-3 pt-7 border-t border-white/10">
              {stats.map((s,i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-bold text-[#f97316]">{s.val}</div>
                  <div className="text-white/50 text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Truck Scene ── */}
          <motion.div initial={{opacity:0,x:60}} animate={{opacity:1,x:0}}
            transition={{duration:0.9,delay:0.3,ease:'easeOut'}}
            className="relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
              <TruckScene/>
              {/* Overlay gradient at top */}
              <div className="absolute top-0 inset-x-0 h-8 bg-gradient-to-b from-[#080f1e] to-transparent"/>
            </div>

            {/* Floating badge: Cargo insured */}
            <motion.div initial={{opacity:0,scale:0.8}} animate={{opacity:1,scale:1}}
              transition={{delay:1.1,duration:0.5}}
              className="absolute -bottom-3 -left-5 glass rounded-2xl px-4 py-3 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-green-500 rounded-xl flex items-center justify-center text-lg">✓</div>
                <div>
                  <p className="text-[#1e3a5f] font-bold text-sm">Cargo Fully Insured</p>
                  <p className="text-slate-500 text-xs">Every consignment covered</p>
                </div>
              </div>
            </motion.div>

            {/* Floating badge: Loading hub */}
            <motion.div initial={{opacity:0,scale:0.8}} animate={{opacity:1,scale:1}}
              transition={{delay:1.3,duration:0.5}}
              className="absolute -top-3 -right-4 glass rounded-2xl px-4 py-3 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#f97316] rounded-xl flex items-center justify-center text-lg">🏭</div>
                <div>
                  <p className="text-[#1e3a5f] font-bold text-sm">12 Loading Hubs</p>
                  <p className="text-slate-500 text-xs">Across India</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div animate={{y:[0,8,0]}} transition={{duration:1.5,repeat:Infinity}}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-white/40 rounded-full animate-bounce"/>
        </div>
      </motion.div>
    </section>
  )
}
