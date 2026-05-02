import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Truck, HeadphonesIcon, ShieldCheck, Zap, BarChart3 } from 'lucide-react'

const reasons = [
  { icon: Truck, title: '500+ Trucks Ready', desc: 'Massive owned fleet ensures truck availability even at peak demand — no delays, no excuses.' },
  { icon: HeadphonesIcon, title: '24/7 Dedicated Support', desc: 'Round-the-clock customer service team to resolve queries, provide updates, and handle emergencies.' },
  { icon: ShieldCheck, title: 'Fully Insured Cargo', desc: 'Every consignment covered under comprehensive cargo insurance — your goods are always protected.' },
  { icon: Zap, title: 'Real-Time GPS Tracking', desc: 'Live tracking of every truck via our mobile app and web portal. Know exactly where your cargo is.' },
  { icon: BarChart3, title: '99% On-Time Record', desc: 'Industry-leading delivery performance built through 15 years of operational excellence.' },
  { icon: CheckCircle2, title: 'Digital Documentation', desc: 'Paperless operations — instant e-POD, digital invoices, and automated delivery reports.' },
]

export default function WhyUs() {
  return (
    <section className="section-pad bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#eff6ff] to-transparent opacity-50" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#f97316]/5 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block bg-[#1e3a5f]/10 text-[#1e3a5f] font-semibold text-sm px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-6 leading-tight">
                The Shashi Standard —<br />
                <span className="gradient-text">Above Industry Norms</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                We're not just a transport company — we're your supply chain partner. Every promise we make is backed by 15 years of operational excellence and thousands of happy clients.
              </p>

              {/* Trust indicators */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { num: 'ISO', sub: '9001:2015 Certified' },
                  { num: '15+', sub: 'Years in Business' },
                  { num: 'A+', sub: 'Credit Rating' },
                ].map(item => (
                  <div key={item.num} className="text-center p-4 bg-[#f8fafc] rounded-2xl border border-slate-100">
                    <div className="text-2xl font-bold text-[#f97316]">{item.num}</div>
                    <div className="text-xs text-slate-500 mt-1">{item.sub}</div>
                  </div>
                ))}
              </div>

              {/* Testimonial mini */}
              <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2d5282] rounded-2xl p-5 text-white">
                <p className="italic text-white/80 text-sm mb-3">
                  "Shashi Transport has been our logistics partner for 8 years. Their reliability and professionalism are unmatched in the industry."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#f97316] rounded-full flex items-center justify-center font-bold text-white text-sm">R</div>
                  <div>
                    <p className="font-semibold text-sm">Ramesh Kumar</p>
                    <p className="text-white/60 text-xs">MD, Kumar Industries, Patna</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-yellow-400 text-sm">★</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: reason cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((r, i) => {
              const Icon = r.icon
              return (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ scale: 1.04, y: -3 }}
                  className="group bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:border-[#f97316]/30 transition-all duration-300 cursor-default"
                >
                  <div className="w-11 h-11 bg-gradient-to-br from-[#1e3a5f]/10 to-[#f97316]/10 rounded-xl flex items-center justify-center mb-3 group-hover:from-[#1e3a5f]/20 group-hover:to-[#f97316]/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-[#1e3a5f]" />
                  </div>
                  <h4 className="font-bold text-[#1e3a5f] text-sm mb-1">{r.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{r.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
