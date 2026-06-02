import React from 'react'
import { motion } from 'framer-motion'
import { FileText, Truck, PackageCheck, BadgeCheck } from 'lucide-react'
import { contactNumber, contactTel } from '../../lib/siteConfig'

const steps = [
  {
    icon: FileText,
    num: '01',
    title: 'Book & Get Quote',
    desc: `Fill our quick form or call ${contactNumber}. Get a competitive lorry freight quote within 30 minutes. No hidden charges.`,
    tag: 'Instant Quote',
    color: '#f97316',
  },
  {
    icon: Truck,
    num: '02',
    title: 'Truck Dispatched',
    desc: 'We assign the right vehicle from our owned fleet based on load type, route, and urgency. Driver contacts you before arrival.',
    tag: '4–6 hrs',
    color: '#3b82f6',
  },
  {
    icon: PackageCheck,
    num: '03',
    title: 'Loading & Transit',
    desc: 'Cargo is loaded, sealed, and documented with Lorry Receipt (LR). Our fleet moves day & night — no Sunday halt.',
    tag: '24/7 Movement',
    color: '#8b5cf6',
  },
  {
    icon: BadgeCheck,
    num: '04',
    title: 'Safe Delivery',
    desc: 'Cargo delivered, Digital Proof of Delivery generated on-site. Invoice within 24 hours. 100% satisfaction guaranteed.',
    tag: 'e-POD',
    color: '#10b981',
  },
]

export default function Process() {
  return (
    <section className="section-pad bg-[#f8fafc] relative overflow-hidden">
      {/* Highway road visual running horizontally */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-24 pointer-events-none hidden lg:block">
        <div className="h-full bg-gradient-to-r from-transparent via-[#1e3a5f]/5 to-transparent"/>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7}}
          className="text-center mb-16">
          <span className="inline-block bg-[#1e3a5f]/10 text-[#1e3a5f] font-semibold text-sm px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-4">
            Book to Delivered — <span className="gradient-text">4 Simple Steps</span>
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto">From your call to the truck rolling out — it's that simple. We've been doing this for 15 years.</p>
        </motion.div>

        <div className="relative">
          {/* Highway road connector (desktop only) */}
          <div className="hidden lg:block absolute top-[72px] left-[11%] right-[11%] h-10 z-0">
            {/* Road surface */}
            <div className="h-full bg-[#1e3a5f]/8 rounded-full"/>
            {/* Center line dashes */}
            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex gap-6 overflow-hidden px-4">
              {Array.from({length: 16}).map((_, i) => (
                <div key={i} className="h-1 w-8 shrink-0 bg-[#f97316] rounded opacity-40"/>
              ))}
            </div>
            {/* Animated truck on the road */}
            <motion.div
              initial={{left:'2%'}}
              animate={{left:'90%'}}
              transition={{duration:5, repeat:Infinity, ease:'linear', repeatDelay:1}}
              className="absolute top-1/2 -translate-y-1/2"
            >
              <div className="text-[22px]" style={{transform:'scaleX(-1)'}}>🚛</div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div key={step.num}
                  initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
                  transition={{duration:0.5,delay:i*0.15}}
                  className="group relative cursor-default">

                  {/* Step circle */}
                  <div className="relative mx-auto w-[88px] h-[88px] mb-6">
                    <div className="w-full h-full rounded-full bg-white shadow-xl border-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300"
                      style={{borderColor: step.color}}>
                      <Icon className="w-9 h-9" style={{color: step.color}}/>
                    </div>
                    {/* Number badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg"
                      style={{background: step.color}}>
                      {step.num}
                    </div>
                    {/* Pulse ring */}
                    <div className="absolute inset-0 rounded-full border-2 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"
                      style={{borderColor: step.color}}/>
                  </div>

                  {/* Tag */}
                  <div className="flex justify-center mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                      style={{background:`${step.color}18`, color: step.color}}>
                      {step.tag}
                    </span>
                  </div>

                  <h3 className="font-bold text-[#1e3a5f] text-lg mb-2 text-center">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed text-center px-2">{step.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA strip */}
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
          transition={{duration:0.6,delay:0.5}}
          className="mt-14 bg-gradient-to-r from-[#1e3a5f] to-[#2d5282] rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-white font-bold text-lg">Ready to move your cargo?</p>
            <p className="text-white/60 text-sm">Our dispatch team is online right now — call or book online in 2 minutes.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a href={contactTel}
              className="flex items-center gap-2 bg-white/15 border border-white/25 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-white/25 transition-colors duration-200 text-sm">
              📞 Call Now
            </a>
            <a href="/get-quote"
              className="shimmer-btn text-white font-bold px-6 py-2.5 rounded-xl text-sm shadow-lg">
              Get Free Quote →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
