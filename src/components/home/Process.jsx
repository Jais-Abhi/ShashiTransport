import React from 'react'
import { motion } from 'framer-motion'
import { ClipboardList, Truck, MapPin, CheckCircle } from 'lucide-react'

const steps = [
  { icon: ClipboardList, num: '01', title: 'Request a Quote', desc: 'Fill our quick online form or call us — get a competitive quote within 30 minutes.' },
  { icon: Truck, num: '02', title: 'Truck Dispatched', desc: 'We assign the right vehicle from our fleet and dispatch to your pickup location.' },
  { icon: MapPin, num: '03', title: 'Live Tracking', desc: 'Track your shipment 24/7 via GPS. Get automated status alerts on WhatsApp & SMS.' },
  { icon: CheckCircle, num: '04', title: 'Safe Delivery', desc: 'Cargo delivered on time. Digital POD generated instantly. Invoice within 24 hours.' },
]

export default function Process() {
  return (
    <section className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#1e3a5f]/10 text-[#1e3a5f] font-semibold text-sm px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-4">
            Shipping Made <span className="gradient-text">Simple</span>
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto">Four easy steps from booking to delivery — transparent and hassle-free.</p>
        </motion.div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#1e3a5f] via-[#f97316] to-[#1e3a5f] opacity-20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative text-center group cursor-default"
                >
                  {/* Icon circle */}
                  <div className="relative mx-auto w-28 h-28 mb-6">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-[#1e3a5f] to-[#2d5282] flex items-center justify-center shadow-xl shadow-[#1e3a5f]/20 group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-9 h-9 bg-[#f97316] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {step.num}
                    </div>
                    {/* Pulse rings */}
                    <div className="absolute inset-0 rounded-full border-2 border-[#1e3a5f]/20 scale-110 group-hover:scale-125 transition-transform duration-500" />
                  </div>

                  <h3 className="font-bold text-[#1e3a5f] text-lg mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed px-2">{step.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
