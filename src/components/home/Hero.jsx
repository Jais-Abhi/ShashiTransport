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
    <svg viewBox="0 0 520 230" className="w-full h-auto" aria-hidden="true">
      <defs>
        <linearGradient id="skyG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a1628"/>
          <stop offset="100%" stopColor="#1e3a5f"/>
        </linearGradient>
        <linearGradient id="roadG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a1f2e"/>
          <stop offset="100%" stopColor="#0d1018"/>
        </linearGradient>
        <linearGradient id="cabG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f97316"/>
          <stop offset="100%" stopColor="#c2560a"/>
        </linearGradient>
        <linearGradient id="trailerG" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1e3a5f"/>
          <stop offset="100%" stopColor="#162d4a"/>
        </linearGradient>
        <radialGradient id="headlightG" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff7d6" stopOpacity="1"/>
          <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.6"/>
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <style>{`
          @keyframes roadMove {
            from { transform: translateX(0); }
            to   { transform: translateX(-110px); }
          }
          @keyframes smokeUp {
            0%   { opacity:0.7; transform:translateY(0) scale(1); }
            100% { opacity:0;   transform:translateY(-18px) scale(1.6); }
          }
          @keyframes wheelSpin {
            from { transform-origin: center; transform: rotate(0deg); }
            to   { transform-origin: center; transform: rotate(360deg); }
          }
          .road-dashes { animation: roadMove 0.9s linear infinite; }
          .smoke1 { animation: smokeUp 1.2s ease-out infinite; }
          .smoke2 { animation: smokeUp 1.2s ease-out 0.4s infinite; }
          .smoke3 { animation: smokeUp 1.2s ease-out 0.8s infinite; }
        `}</style>
      </defs>

      {/* Sky */}
      <rect width="520" height="230" fill="url(#skyG)"/>

      {/* Stars */}
      {[[30,15],[80,8],[150,22],[230,10],[310,18],[420,6],[480,14],[500,28]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r={Math.random()*1.2+0.5} fill="white" opacity={0.4+Math.random()*0.4}/>
      ))}

      {/* Moon */}
      <circle cx="460" cy="28" r="14" fill="#fef3c7" opacity="0.9"/>
      <circle cx="467" cy="22" r="11" fill="#1e3a5f"/>

      {/* Road ground */}
      <rect x="0" y="165" width="520" height="65" fill="url(#roadG)"/>

      {/* Asphalt texture */}
      <rect x="0" y="168" width="520" height="62" fill="#1a1f2e" rx="0"/>

      {/* Road edge lines */}
      <rect x="0" y="170" width="520" height="3" fill="#4b5563" opacity="0.5"/>
      <rect x="0" y="224" width="520" height="2" fill="#374151" opacity="0.4"/>

      {/* Animated center dashes */}
      <g className="road-dashes">
        {[-110,-0,110,220,330,440,550].map((x,i)=>(
          <rect key={i} x={x} y="196" width="70" height="4" rx="2" fill="#f97316" opacity="0.55"/>
        ))}
      </g>

      {/* White shoulder dashes */}
      <g className="road-dashes" style={{animationDuration:'1.2s'}}>
        {[-110,-0,110,220,330,440,550].map((x,i)=>(
          <rect key={i} x={x+20} y="183" width="30" height="2" rx="1" fill="white" opacity="0.2"/>
        ))}
      </g>

      {/* ─── TRAILER ─── */}
      {/* Main trailer box */}
      <rect x="128" y="76" width="335" height="88" rx="3" fill="url(#trailerG)" stroke="#f9731615" strokeWidth="1.5"/>
      {/* Top orange stripe */}
      <rect x="128" y="76" width="335" height="7" rx="3" fill="#f97316" opacity="0.9"/>
      {/* Bottom reflector strip */}
      <rect x="128" y="157" width="335" height="7" rx="0" fill="#f97316" opacity="0.7"/>
      {/* Trailer rivets top row */}
      {[140,170,200,230,260,290,320,350,380,410,440].map((x,i)=>(
        <circle key={i} cx={x} cy="80" r="2.5" fill="#2d4a6f"/>
      ))}
      {/* Trailer rivets bottom row */}
      {[140,170,200,230,260,290,320,350,380,410,440].map((x,i)=>(
        <circle key={i} cx={x} cy="157" r="2.5" fill="#2d4a6f"/>
      ))}
      {/* Horizontal body panel lines */}
      <line x1="128" y1="110" x2="463" y2="110" stroke="#2d4a6f" strokeWidth="1" opacity="0.7"/>
      <line x1="128" y1="132" x2="463" y2="132" stroke="#2d4a6f" strokeWidth="1" opacity="0.7"/>
      {/* Company text on trailer */}
      <text x="295" y="102" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="800" fontFamily="sans-serif" letterSpacing="3" opacity="0.9">SHASHI TRANSPORT CO.</text>
      <text x="295" y="119" textAnchor="middle" fill="white" fontSize="7" fontFamily="sans-serif" letterSpacing="5" opacity="0.5">PATNA · BIHAR · INDIA</text>
      <text x="295" y="147" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace" letterSpacing="2" opacity="0.6">STC-GJ-14-T-4820</text>
      {/* Rear doors */}
      <line x1="295" y1="83" x2="295" y2="157" stroke="#2d4a6f" strokeWidth="1.5" opacity="0.7"/>
      <rect x="460" y="83" width="3" height="74" rx="1" fill="#2d4a6f"/>

      {/* ─── CAB ─── */}
      {/* Main cab body */}
      <rect x="48" y="82" width="84" height="82" rx="6" fill="url(#cabG)"/>
      {/* Cab top/roof */}
      <rect x="52" y="76" width="76" height="14" rx="4" fill="#e06010"/>
      {/* Windshield */}
      <rect x="62" y="89" width="55" height="44" rx="5" fill="#87ceeb" opacity="0.65"/>
      {/* Windshield glare */}
      <rect x="65" y="92" width="18" height="12" rx="3" fill="white" opacity="0.25"/>
      {/* Cab door line */}
      <line x1="105" y1="89" x2="105" y2="164" stroke="#c2560a" strokeWidth="1.5" opacity="0.5"/>
      {/* Door handle */}
      <rect x="106" y="128" width="16" height="4" rx="2" fill="#c2560a"/>
      {/* Cab side window */}
      <rect x="108" y="94" width="18" height="22" rx="3" fill="#87ceeb" opacity="0.5"/>
      {/* Side mirror */}
      <rect x="42" y="98" width="12" height="8" rx="2" fill="#c2560a"/>
      <line x1="48" y1="106" x2="48" y2="114" stroke="#c2560a" strokeWidth="2"/>

      {/* Bumper / Front face */}
      <rect x="22" y="136" width="28" height="28" rx="3" fill="#c2560a"/>
      {/* Grill */}
      <rect x="24" y="138" width="24" height="20" rx="2" fill="#1e3a5f"/>
      {[0,4,8,12,16].map((y,i)=>(
        <line key={i} x1="24" y1={140+y} x2="48" y2={140+y} stroke="#f97316" strokeWidth="0.7" opacity="0.5"/>
      ))}
      {/* Bumper bar */}
      <rect x="18" y="158" width="36" height="6" rx="3" fill="#555"/>

      {/* Headlight */}
      <rect x="24" y="120" width="20" height="14" rx="3" fill="#fef9c3" filter="url(#glow)" opacity="0.9"/>
      <rect x="26" y="122" width="16" height="10" rx="2" fill="white" opacity="0.6"/>
      {/* Headlight beam rays */}
      <line x1="18" y1="124" x2="2" y2="118" stroke="#fbbf24" strokeWidth="1" opacity="0.3"/>
      <line x1="18" y1="127" x2="0" y2="126" stroke="#fbbf24" strokeWidth="1.5" opacity="0.4"/>
      <line x1="18" y1="130" x2="2" y2="134" stroke="#fbbf24" strokeWidth="1" opacity="0.3"/>

      {/* Exhaust pipe */}
      <rect x="55" y="36" width="8" height="48" rx="4" fill="#444"/>
      <rect x="57" y="34" width="4" height="6" rx="2" fill="#555"/>
      {/* Smoke puffs */}
      <circle className="smoke1" cx="59" cy="34" r="5" fill="#888" opacity="0.6"/>
      <circle className="smoke2" cx="62" cy="28" r="6" fill="#777" opacity="0.5"/>
      <circle className="smoke3" cx="57" cy="22" r="7" fill="#666" opacity="0.3"/>

      {/* Coupling/fifth wheel area */}
      <rect x="124" y="152" width="12" height="12" rx="2" fill="#555"/>

      {/* ─── WHEELS ─── */}
      {/* Front wheel */}
      <circle cx="90" cy="182" r="22" fill="#111" stroke="#3a3a3a" strokeWidth="2.5"/>
      <circle cx="90" cy="182" r="14" fill="#222" stroke="#444" strokeWidth="1.5"/>
      <circle cx="90" cy="182" r="5" fill="#555"/>
      {[0,60,120,180,240,300].map((a,i)=>{
        const rad=a*Math.PI/180
        return <line key={i} x1={90+5*Math.cos(rad)} y1={182+5*Math.sin(rad)} x2={90+13*Math.cos(rad)} y2={182+13*Math.sin(rad)} stroke="#555" strokeWidth="2.5"/>
      })}
      {/* Front wheel hubcap bolts */}
      {[0,60,120,180,240,300].map((a,i)=>{
        const rad=a*Math.PI/180
        return <circle key={i} cx={90+9*Math.cos(rad)} cy={182+9*Math.sin(rad)} r="1.5" fill="#888"/>
      })}

      {/* Drive axle dual wheels */}
      <circle cx="268" cy="182" r="22" fill="#111" stroke="#3a3a3a" strokeWidth="2.5"/>
      <circle cx="268" cy="182" r="14" fill="#222" stroke="#444" strokeWidth="1.5"/>
      <circle cx="268" cy="182" r="5" fill="#555"/>
      <circle cx="290" cy="182" r="22" fill="#111" stroke="#3a3a3a" strokeWidth="2.5"/>
      <circle cx="290" cy="182" r="14" fill="#222" stroke="#444" strokeWidth="1.5"/>
      <circle cx="290" cy="182" r="5" fill="#555"/>

      {/* Rear trailer axle dual wheels */}
      <circle cx="392" cy="182" r="22" fill="#111" stroke="#3a3a3a" strokeWidth="2.5"/>
      <circle cx="392" cy="182" r="14" fill="#222" stroke="#444" strokeWidth="1.5"/>
      <circle cx="392" cy="182" r="5" fill="#555"/>
      <circle cx="414" cy="182" r="22" fill="#111" stroke="#3a3a3a" strokeWidth="2.5"/>
      <circle cx="414" cy="182" r="14" fill="#222" stroke="#444" strokeWidth="1.5"/>
      <circle cx="414" cy="182" r="5" fill="#555"/>

      {/* Mudflap front */}
      <rect x="112" y="162" width="6" height="20" rx="1" fill="#333"/>
      {/* Mudflap rear */}
      <rect x="368" y="162" width="6" height="20" rx="1" fill="#333"/>

      {/* Route sign floating top right */}
      <rect x="360" y="14" width="145" height="50" rx="8" fill="#1e3a5f" stroke="#f97316" strokeWidth="1.5" opacity="0.9"/>
      <text x="432" y="30" textAnchor="middle" fill="#f97316" fontSize="7" fontWeight="700" fontFamily="sans-serif" letterSpacing="2">ACTIVE ROUTE</text>
      <text x="432" y="44" textAnchor="middle" fill="white" fontSize="10" fontWeight="800" fontFamily="sans-serif">Patna → Mumbai</text>
      <text x="432" y="56" textAnchor="middle" fill="#94a3b8" fontSize="7" fontFamily="monospace">1,847 KM · ETA 28h</text>

      {/* Speed chip top left */}
      <rect x="14" y="14" width="100" height="38" rx="8" fill="#f97316" opacity="0.92"/>
      <text x="64" y="28" textAnchor="middle" fill="white" fontSize="7" fontWeight="600" fontFamily="sans-serif" letterSpacing="1">FLEET ONLINE</text>
      <text x="64" y="44" textAnchor="middle" fill="white" fontSize="14" fontWeight="800" fontFamily="sans-serif">234 Trucks</text>
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
