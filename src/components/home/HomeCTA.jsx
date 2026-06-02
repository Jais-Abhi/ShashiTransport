import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, MessageCircle } from 'lucide-react'

export default function HomeCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#1e3a5f] via-[#2d5282] to-[#0f2540] relative overflow-hidden">
      {/* Decorations */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 20% 50%, #f97316 0%, transparent 60%), radial-gradient(circle at 80% 50%, #3b82f6 0%, transparent 60%)'
      }} />
      <div className="absolute top-0 left-0 w-full h-full" style={{
        backgroundImage: 'linear-gradient(#ffffff08 1px, transparent 1px), linear-gradient(90deg, #ffffff08 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block bg-[#f97316]/20 text-orange-300 font-semibold text-sm px-4 py-1.5 rounded-full mb-6 uppercase tracking-wide border border-orange-400/20">
            Ready to Ship?
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Let's Move Your Cargo<br />
            <span className="text-[#f97316]">Anywhere in India.</span>
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
            Join 10,000+ businesses that rely on Shashi Transport Company for safe, fast, and affordable logistics.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/get-quote"
              className="group inline-flex items-center justify-center gap-2 shimmer-btn text-white font-bold px-10 py-4 rounded-xl shadow-2xl hover:-translate-y-1 transition-transform duration-200 text-lg"
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+918888888888"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border-2 border-white/20 text-white font-bold px-10 py-4 rounded-xl hover:bg-white/20 transition-colors duration-200 text-lg"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href="https://wa.me/918888888888"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500/20 border-2 border-green-400/30 text-green-300 font-bold px-10 py-4 rounded-xl hover:bg-green-500/30 transition-colors duration-200 text-lg"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
