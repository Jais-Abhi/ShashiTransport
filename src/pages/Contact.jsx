import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react'

const SocialFacebook = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
)
const SocialInstagram = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
)
const SocialLinkedin = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
)

const offices = [
  { city: 'Patna (HQ)', address: 'Near Gandhi Maidan, Patna, Bihar - 800001', phone: '+91 88888 88888', email: 'patna@shashitransport.in' },
  { city: 'Lucknow', address: 'Transport Nagar, Lucknow, UP - 226012', phone: '+91 77777 77777', email: 'lucknow@shashitransport.in' },
  { city: 'Kolkata', address: 'Netaji Subhas Dock, Kolkata, WB - 700043', phone: '+91 66666 66666', email: 'kolkata@shashitransport.in' },
  { city: 'Goa', address: 'Panaji Industrial Estate, Goa - 403001', phone: '+91 55555 55555', email: 'goa@shashitransport.in' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0f1f35] via-[#1e3a5f] to-[#0f2540] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#ffffff20 1px,transparent 1px),linear-gradient(90deg,#ffffff20 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-[#f97316] text-sm font-semibold uppercase tracking-widest mb-3">Reach Out</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Contact <span className="text-[#f97316]">Us</span></h1>
            <p className="text-white/60 text-lg max-w-xl mx-auto">We're available 24/7 — by phone, email, WhatsApp, or in person at any of our offices across India.</p>
          </motion.div>
        </div>
      </div>

      <section className="section-pad bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Left: form */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-2">Send us a Message</h2>
              <p className="text-slate-500 mb-8">We typically respond within 2 hours during business hours.</p>

              {sent ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-green-50 border-2 border-green-200 rounded-3xl p-10 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="font-bold text-green-800 text-xl mb-2">Message Sent!</h3>
                  <p className="text-green-600">Thank you for reaching out. Our team will get back to you within 2 hours.</p>
                  <button onClick={() => { setSent(false); setForm({ name: '', phone: '', email: '', subject: '', message: '' }) }} className="mt-6 bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700 transition-colors">
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
                      <input required name="name" value={form.name} onChange={handleChange} placeholder="Your name" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/30 focus:border-[#1e3a5f] transition-all bg-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone *</label>
                      <input required name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/30 focus:border-[#1e3a5f] transition-all bg-white" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
                    <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="your@email.com" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/30 focus:border-[#1e3a5f] transition-all bg-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Subject *</label>
                    <select required name="subject" value={form.subject} onChange={handleChange} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/30 focus:border-[#1e3a5f] transition-all bg-white text-slate-700">
                      <option value="">Select a subject</option>
                      <option value="quote">Get a Quote</option>
                      <option value="inquiry">General Inquiry</option>
                      <option value="complaint">Complaint / Feedback</option>
                      <option value="partnership">Business Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Message *</label>
                    <textarea required name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Describe your requirement in detail..." className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/30 focus:border-[#1e3a5f] transition-all bg-white resize-none" />
                  </div>
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="w-full shimmer-btn text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    Send Message
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Right: info */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              {/* Quick contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Phone, label: 'Call Us', value: '+91 88888 88888', sub: '24/7 Available', color: '#f97316', href: 'tel:+918888888888' },
                  { icon: MessageCircle, label: 'WhatsApp', value: '+91 88888 88888', sub: 'Instant Response', color: '#25d366', href: 'https://wa.me/918888888888' },
                  { icon: Mail, label: 'Email Us', value: 'info@shashitransport.in', sub: 'Reply within 2 hrs', color: '#3b82f6', href: 'mailto:info@shashitransport.in' },
                  { icon: Clock, label: 'Business Hours', value: '24/7 Operations', sub: 'Support always on', color: '#8b5cf6', href: null },
                ].map(({ icon: Icon, label, value, sub, color, href }) => (
                  <motion.div key={label} whileHover={{ scale: 1.03, y: -2 }} className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
                    {href ? (
                      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${color}15` }}>
                          <Icon className="w-5 h-5" style={{ color }} />
                        </div>
                        <div>
                          <p className="text-[10px] text-slate-400 uppercase font-semibold">{label}</p>
                          <p className="text-[#1e3a5f] font-bold text-sm">{value}</p>
                          <p className="text-slate-400 text-xs">{sub}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${color}15` }}>
                          <Icon className="w-5 h-5" style={{ color }} />
                        </div>
                        <div>
                          <p className="text-[10px] text-slate-400 uppercase font-semibold">{label}</p>
                          <p className="text-[#1e3a5f] font-bold text-sm">{value}</p>
                          <p className="text-slate-400 text-xs">{sub}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Offices */}
              <h3 className="font-bold text-[#1e3a5f] text-lg mb-4">Our Offices</h3>
              <div className="space-y-3">
                {offices.map((office, i) => (
                  <motion.div key={office.city} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="bg-white rounded-2xl p-4 border border-slate-100">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#f97316] mt-0.5 shrink-0" />
                      <div>
                        <p className="font-bold text-[#1e3a5f] text-sm">{office.city}</p>
                        <p className="text-slate-500 text-xs mt-0.5">{office.address}</p>
                        <div className="flex flex-wrap gap-3 mt-2">
                          <a href={`tel:${office.phone}`} className="text-[#f97316] text-xs font-medium hover:underline">{office.phone}</a>
                          <a href={`mailto:${office.email}`} className="text-[#3b82f6] text-xs font-medium hover:underline">{office.email}</a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social */}
              <div className="mt-6 flex gap-3">
                {[SocialFacebook, SocialInstagram, SocialLinkedin].map((Icon, i) => (
                  <motion.a key={i} href="#" whileHover={{ scale: 1.15, y: -2 }} className="w-10 h-10 bg-[#1e3a5f]/10 hover:bg-[#1e3a5f] rounded-xl flex items-center justify-center text-[#1e3a5f] hover:text-white transition-all duration-200">
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
