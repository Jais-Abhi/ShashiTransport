import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Truck, Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import { contactNumber, contactTel, contactAddress, contactMapUrl } from '../../lib/siteConfig'

const SocialFacebook = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
)
const SocialTwitter = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
)
const SocialInstagram = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
)
const SocialLinkedin = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
)

const links = {
  Company: [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about' },
    { label: 'Our Services', to: '/services' },
    // { label: 'Gallery', to: '/gallery' },
  ],
  Services: [
    { label: 'Full Truck Load', to: '/services' },
    { label: 'Part Load', to: '/services' },
    { label: 'Express Delivery', to: '/services' },
    { label: 'Cold Chain', to: '/services' },
  ],
  Support: [
    { label: 'Get Quote', to: '/get-quote' },
    { label: 'Contact Us', to: '/contact' },
  ],
}

const socials = [
  { icon: SocialFacebook, href: '#' },
  { icon: SocialTwitter, href: '#' },
  { icon: SocialInstagram, href: '#' },
  { icon: SocialLinkedin, href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0f1f35] text-white">
      {/* CTA Band */}
      <div className="bg-gradient-to-r from-[#1e3a5f] to-[#0f2540]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Ready to ship with confidence?</h3>
            <p className="text-slate-300 mt-1">Get an instant quote for your cargo today.</p>
          </div>
          <Link
            to="/get-quote"
            className="flex items-center gap-2 shimmer-btn text-white font-semibold px-8 py-4 rounded-xl shadow-xl hover:-translate-y-0.5 transition-transform duration-200"
          >
            Get Free Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* Brand */}
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-3 mb-5">
            <img src="/logo_2.png" alt="Shashi Transport Company" className="w-20 h-14 object-contain rounded-xl shadow-lg" />
            <div className="leading-none">
              <span className="font-bold text-lg text-white block">Shashi Transport Company</span>
              <span className="text-[10px] tracking-widest text-orange-400 uppercase">Logistics Partner</span>
            </div>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
            Trusted logistics partner across India. We deliver your cargo safely and on time — from the plains of UP to the coasts of Goa.
          </p>
          <div className="space-y-3">
            <a href={contactTel} className="flex items-center gap-3 text-slate-300 hover:text-[#f97316] transition-colors duration-200 text-sm">
              <Phone className="w-4 h-4 text-[#f97316]" /> {contactNumber}
            </a>
            <a href="mailto:info@shashitransport.in" className="flex items-center gap-3 text-slate-300 hover:text-[#f97316] transition-colors duration-200 text-sm">
              <Mail className="w-4 h-4 text-[#f97316]" /> info@shashitransport.in
            </a>
            <div className="flex items-start gap-3 text-slate-100 text-sm bg-white/5 border border-white/10 rounded-2xl p-3 shadow-sm">
              <MapPin className="w-4 h-4 text-[#f97316] mt-0.5 shrink-0" />
              <a href={contactMapUrl} target="_blank" rel="noreferrer" className="font-semibold text-slate-100 hover:text-white transition-colors duration-200">
                {contactAddress}
              </a>
            </div>
          </div>
          <div className="flex gap-3 mt-6">
            {socials.map(({ icon: Icon, href }, i) => (
              <motion.a
                key={i} href={href} target="_blank"
                whileHover={{ scale: 1.15, y: -2 }}
                className="w-9 h-9 bg-white/5 hover:bg-[#f97316] rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Link Columns */}
        {Object.entries(links).map(([title, items]) => (
          <div key={title}>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">{title}</h4>
            <ul className="space-y-2.5">
              {items.map(item => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-slate-400 hover:text-[#f97316] text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 text-[#f97316]">›</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Shashi Transport Company. All rights reserved.</p>
          <p className="text-slate-600 text-xs">Delivering trust across India 🇮🇳</p>
        </div>
      </div>
    </footer>
  )
}
