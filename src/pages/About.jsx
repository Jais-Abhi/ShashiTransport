import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { truckSizes } from '../lib/truckConfig'
import { Truck, Users, Target, Heart, ArrowRight, CheckCircle, Award, Globe, TrendingUp } from 'lucide-react'

const timeline = [
  { year: '2009', title: 'Founded in Patna', desc: 'Started with 5 trucks and a vision to provide honest, reliable transport across Bihar.' },
  { year: '2012', title: 'Expanded to UP & Bengal', desc: 'Opened branch offices in Lucknow and Kolkata, growing fleet to 50 trucks.' },
  { year: '2015', title: 'ISO 9001 Certification', desc: 'Achieved ISO 9001:2015 certification — our commitment to quality formalized.' },
  { year: '2018', title: 'Pan India Operations', desc: 'Reached 28 states. Launched GPS tracking platform and mobile app for clients.' },
  { year: '2021', title: 'Cold Chain Launch', desc: 'Introduced temperature-controlled logistics fleet for pharma and perishables.' },
  { year: '2024', title: '500+ Trucks Strong', desc: 'Fleet expanded to 580+ trucks. Serving 10,000+ clients across all of India.' },
]

const values = [
  { icon: Heart, title: 'Integrity', desc: 'Honest pricing, transparent operations, no hidden charges — ever.' },
  { icon: Target, title: 'Reliability', desc: 'We show up when we say we will. Your deadline is our deadline.' },
  { icon: Users, title: 'Partnership', desc: 'We\'re not vendors — we\'re partners invested in your business success.' },
  { icon: Globe, title: 'Reach', desc: 'From Kanyakumari to Kashmir — our network leaves no corner uncovered.' },
]

const team = [
  { name: 'Shashi Kumar', role: 'Founder & Managing Director', exp: '20+ years', initials: 'SK', color: '#f97316' },
  { name: 'Amit Prasad', role: 'Director of Operations', exp: '15+ years', initials: 'AP', color: '#3b82f6' },
  { name: 'Sunita Devi', role: 'Head of Finance', exp: '12+ years', initials: 'SD', color: '#10b981' },
  { name: 'Rajiv Ranjan', role: 'Head of Technology', exp: '10+ years', initials: 'RR', color: '#8b5cf6' },
]

function PageHeader({ title, subtitle, breadcrumb }) {
  return (
    <div className="bg-gradient-to-br from-[#0f1f35] via-[#1e3a5f] to-[#0f2540] pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(#ffffff20 1px,transparent 1px),linear-gradient(90deg,#ffffff20 1px,transparent 1px)',
        backgroundSize: '60px 60px'
      }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-[#f97316] text-sm font-semibold uppercase tracking-widest mb-3">{breadcrumb}</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{title}</h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">{subtitle}</p>
        </motion.div>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <div>
      <PageHeader
        breadcrumb="Our Story"
        title="About Shashi Transport Company"
        subtitle="15 years of moving India's goods with integrity, reliability, and passion."
      />

      {/* Mission & Vision */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <span className="inline-block bg-[#f97316]/10 text-[#f97316] font-semibold text-sm px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">Our Story</span>
              <h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">Built on Trust,<br /><span className="gradient-text">Driven by Purpose</span></h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                In 2009, Shashi Kumar started this company with 5 trucks and a simple promise: treat every client's cargo like your own. That promise built the foundation of what is today one of India's most trusted transport companies.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                From the plains of Uttar Pradesh and Bihar to the industrial corridors of West Bengal, Odisha, Assam and Jharkhand — our trucks carry not just goods, but the ambitions of thousands of businesses across eastern and central India.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Award, text: 'ISO 9001:2015 Certified' },
                  { icon: TrendingUp, text: '40% YoY Growth' },
                  { icon: Users, text: '500+ Employees' },
                  { icon: Globe, text: '28 States Covered' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 bg-[#f8fafc] rounded-xl p-3 border border-slate-100">
                    <div className="w-9 h-9 bg-[#1e3a5f]/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-4 h-4 text-[#1e3a5f]" />
                    </div>
                    <span className="text-sm font-medium text-[#1e3a5f]">{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2d5282] rounded-3xl p-6 text-white col-span-2">
                  <Truck className="w-10 h-10 text-[#f97316] mb-4" />
                  <h3 className="font-bold text-xl mb-2">Our Mission</h3>
                  <p className="text-white/70 text-sm leading-relaxed">To be India's most trusted transport partner — delivering not just cargo, but confidence, on time, every time, to every corner of the country.</p>
                </div>
                <div className="bg-[#f97316]/10 border-2 border-[#f97316]/20 rounded-3xl p-6">
                  <Target className="w-8 h-8 text-[#f97316] mb-3" />
                  <h3 className="font-bold text-[#1e3a5f] mb-2">Vision 2030</h3>
                  <p className="text-slate-600 text-sm">1,000+ trucks, 36 states, and India's #1 rated transport company.</p>
                </div>
                <div className="bg-[#3b82f6]/10 border-2 border-[#3b82f6]/20 rounded-3xl p-6">
                  <Heart className="w-8 h-8 text-[#3b82f6] mb-3" />
                  <h3 className="font-bold text-[#1e3a5f] mb-2">Our Pledge</h3>
                  <p className="text-slate-600 text-sm">Zero cargo loss. Zero surprise charges. Zero excuses.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fleet size highlights */}
      <section className="section-pad bg-[#f0f6ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12">
            <span className="inline-block bg-[#1e3a5f]/10 text-[#1e3a5f] font-semibold text-sm px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">Fleet by Size</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-4">Our standard truck sizes, built for every cargo type</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">From compact city deliveries to long-haul heavy loads, our owned fleet is optimized in 14, 17, 20, 22 and 24 feet configurations.</p>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {truckSizes.map((truck, i) => (
              <motion.div key={truck.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-400 mb-2">{truck.badge}</p>
                    <h3 className="text-2xl font-bold text-[#1e3a5f]">{truck.label}</h3>
                  </div>
                  <span className="text-sm font-bold text-[#f97316]">{truck.capacity}</span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{truck.description}</p>
                <div className="grid gap-2 text-sm text-slate-600 mb-4">
                  <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                    <span className="font-medium">Dimensions</span>
                    <span>{truck.dimensions}</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                    <span className="font-medium">Volume</span>
                    <span>{truck.volume}</span>
                  </div>
                </div>
                <div className="rounded-3xl bg-[#1e3a5f]/5 border border-slate-200 p-4">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-2">Best For</p>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    {truck.bestFor.slice(0, 3).map(item => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-0.5 h-2.5 w-2.5 rounded-full bg-[#f97316]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-3">Our <span className="gradient-text">Journey</span></h2>
            <p className="text-slate-500">15 years of milestones and continuous growth.</p>
          </motion.div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1e3a5f] to-[#f97316]" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div key={item.year} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="flex gap-6 items-start relative pl-16">
                  <div className="absolute left-5 top-3 w-7 h-7 bg-gradient-to-br from-[#1e3a5f] to-[#f97316] rounded-full flex items-center justify-center shadow-lg z-10">
                    <div className="w-2.5 h-2.5 bg-white rounded-full" />
                  </div>
                  <div className="flex-1 bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                    <span className="inline-block bg-[#f97316]/10 text-[#f97316] font-bold text-sm px-3 py-1 rounded-full mb-2">{item.year}</span>
                    <h4 className="font-bold text-[#1e3a5f] mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-3">Our <span className="gradient-text">Core Values</span></h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} whileHover={{ y: -5 }} className="text-center bg-[#f8fafc] rounded-3xl p-8 border border-slate-100 hover:border-[#f97316]/30 hover:shadow-lg transition-all duration-300 cursor-default">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1e3a5f] to-[#2d5282] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-[#1e3a5f] text-lg mb-2">{v.title}</h3>
                  <p className="text-slate-500 text-sm">{v.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-pad bg-gradient-to-b from-[#f8fafc] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-3">Meet the <span className="gradient-text">Leadership</span></h2>
            <p className="text-slate-500">The experienced team driving India's most trusted transport company.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <motion.div key={m.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} whileHover={{ y: -5 }} className="bg-white rounded-3xl p-6 text-center border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4 shadow-xl" style={{ background: `linear-gradient(135deg, ${m.color}, ${m.color}99)` }}>
                  {m.initials}
                </div>
                <h4 className="font-bold text-[#1e3a5f] mb-1">{m.name}</h4>
                <p className="text-[#f97316] text-sm font-medium mb-1">{m.role}</p>
                <p className="text-slate-400 text-xs">{m.exp} experience</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1e3a5f]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to partner with us?</h2>
          <p className="text-white/60 mb-8">Let's build a logistics partnership that drives your business forward.</p>
          <Link to="/get-quote" className="inline-flex items-center gap-2 shimmer-btn text-white font-bold px-10 py-4 rounded-xl shadow-xl hover:-translate-y-1 transition-transform duration-200">
            Get a Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
