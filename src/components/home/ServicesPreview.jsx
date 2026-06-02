import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { services } from '../../lib/truckConfig'

export default function ServicesPreview() {
  return (
    <section className="section-pad bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-[#f97316]/10 text-[#f97316] font-semibold text-sm px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-4">
            Comprehensive <span className="gradient-text">Transport Solutions</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            From a single pallet to a full container — we have a solution tailored to every business need.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => {
            const Icon = svc.icon
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group relative bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden cursor-default"
              >
                {/* Badge */}
                <span
                  className="absolute top-4 right-4 text-[10px] font-bold px-2 py-1 rounded-full"
                  style={{ background: `${svc.color}15`, color: svc.color }}
                >
                  {svc.badge}
                </span>

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: svc.bg, border: `2px solid ${svc.border}` }}
                >
                  <Icon className="w-7 h-7" style={{ color: svc.color }} />
                </div>

                <h3 className="font-bold text-[#1e3a5f] text-lg mb-2">{svc.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{svc.desc}</p>

                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200"
                  style={{ color: svc.color }}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>

                {/* Hover accent line */}
                <div
                  className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 rounded-b-3xl"
                  style={{ background: `linear-gradient(90deg, ${svc.color}, transparent)` }}
                />
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-[#1e3a5f] text-white font-semibold px-8 py-4 rounded-xl hover:bg-[#2d5282] hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-[#1e3a5f]/30"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
