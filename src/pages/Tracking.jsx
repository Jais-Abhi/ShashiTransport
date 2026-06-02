import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, MapPin, Truck, Package, CheckCircle, Clock, Phone, AlertCircle } from 'lucide-react'
import { contactNumber, contactTel } from '../lib/siteConfig'

const mockShipments = {
  'STC001234': {
    id: 'STC001234', status: 'in-transit',
    from: 'Patna, Bihar', to: 'Kolkata, WB',
    cargo: 'Textile Goods — 2400 kg',
    driver: 'Ranjit Singh', driverPhone: '+91 99999 11111',
    vehicle: 'BR 01 AB 1234 — 22ft Truck',
    timeline: [
      { status: 'Booked', time: 'May 01, 09:00 AM', done: true, loc: 'Patna HQ' },
      { status: 'Picked Up', time: 'May 01, 02:30 PM', done: true, loc: 'Patna, Bihar' },
      { status: 'In Transit', time: 'May 02, 08:15 AM', done: true, loc: 'Purnia, Bihar' },
      { status: 'Expected Arrival', time: 'May 02, 11:00 PM', done: false, loc: 'Kolkata, WB' },
      { status: 'Delivered', time: 'Pending', done: false, loc: 'Howrah, WB' },
    ]
  },
  'STC005678': {
    id: 'STC005678', status: 'delivered',
    from: 'Lucknow, UP', to: 'Goa',
    cargo: 'Furniture — 1800 kg',
    driver: 'Manoj Yadav', driverPhone: '+91 99999 22222',
    vehicle: 'UP 32 CD 5678 — 24ft Truck',
    timeline: [
      { status: 'Booked', time: 'Apr 28, 10:00 AM', done: true, loc: 'Lucknow HQ' },
      { status: 'Picked Up', time: 'Apr 28, 04:00 PM', done: true, loc: 'Lucknow, UP' },
      { status: 'In Transit', time: 'Apr 29, 09:00 AM', done: true, loc: 'Nagpur, Maharashtra' },
      { status: 'In Transit', time: 'Apr 30, 06:00 AM', done: true, loc: 'Pune, Maharashtra' },
      { status: 'Delivered', time: 'Apr 30, 09:30 PM', done: true, loc: 'Panaji, Goa' },
    ]
  },
}

const statusConfig = {
  'in-transit': { color: '#f59e0b', bg: '#fffbeb', label: 'In Transit', icon: Truck },
  'delivered': { color: '#10b981', bg: '#f0fdf4', label: 'Delivered', icon: CheckCircle },
  'pending': { color: '#6366f1', bg: '#eef2ff', label: 'Pending', icon: Clock },
}

export default function Tracking() {
  const [query, setQuery] = useState('')
  const [result, setResult] = useState(null)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSearch = e => {
    e.preventDefault()
    setLoading(true)
    setError(false)
    setTimeout(() => {
      const found = mockShipments[query.trim().toUpperCase()]
      if (found) { setResult(found); setError(false) }
      else { setResult(null); setError(true) }
      setLoading(false)
    }, 1000)
  }

  const cfg = result ? statusConfig[result.status] : null

  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0f1f35] via-[#1e3a5f] to-[#0f2540] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#ffffff20 1px,transparent 1px),linear-gradient(90deg,#ffffff20 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-[#f97316] text-sm font-semibold uppercase tracking-widest mb-3">Live Status</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Track Your <span className="text-[#f97316]">Shipment</span></h1>
            <p className="text-white/60 text-lg max-w-xl mx-auto">Enter your tracking ID to get live updates on your cargo.</p>
          </motion.div>
        </div>
      </div>

      <section className="section-pad bg-[#f8fafc]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Search box */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSearch}
            className="bg-white rounded-3xl shadow-xl p-6 border border-slate-100 mb-8"
          >
            <h2 className="font-bold text-[#1e3a5f] text-lg mb-4">Enter Tracking Number</h2>
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="e.g. STC001234"
                  className="w-full border border-slate-200 rounded-xl pl-12 pr-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/30 focus:border-[#1e3a5f] transition-all uppercase"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={loading}
                className="shimmer-btn text-white font-bold px-8 py-3.5 rounded-xl disabled:opacity-60"
              >
                {loading ? 'Searching...' : 'Track'}
              </motion.button>
            </div>
            <p className="text-slate-400 text-xs mt-3">
              Try: <button type="button" onClick={() => setQuery('STC001234')} className="text-[#f97316] font-medium hover:underline">STC001234</button> or <button type="button" onClick={() => setQuery('STC005678')} className="text-[#f97316] font-medium hover:underline">STC005678</button>
            </p>
          </motion.form>

          {/* Error */}
          <AnimatePresence>
            {error && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="bg-red-50 border border-red-200 rounded-2xl p-5 mb-8 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold text-red-700">Shipment Not Found</p>
                  <p className="text-red-600 text-sm">No shipment found for "{query}". Please check your tracking number or contact us at {contactNumber}.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Result */}
          <AnimatePresence>
            {result && cfg && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>

                {/* Status card */}
                <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden mb-6">
                  {/* Top banner */}
                  <div className="p-6 border-b border-slate-100" style={{ background: cfg.bg }}>
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div>
                        <p className="text-slate-500 text-sm">Tracking ID</p>
                        <h3 className="font-bold text-[#1e3a5f] text-xl">{result.id}</h3>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm shadow-sm" style={{ background: cfg.bg, color: cfg.color, border: `2px solid ${cfg.color}30` }}>
                        <cfg.icon className="w-4 h-4" />
                        {cfg.label}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-5">
                    {/* Route */}
                    <div className="flex items-center gap-4">
                      <div className="text-center shrink-0">
                        <div className="w-10 h-10 bg-[#1e3a5f]/10 rounded-xl flex items-center justify-center mx-auto mb-1">
                          <MapPin className="w-5 h-5 text-[#1e3a5f]" />
                        </div>
                        <p className="text-xs font-semibold text-[#1e3a5f]">From</p>
                        <p className="text-xs text-slate-500">{result.from}</p>
                      </div>
                      <div className="flex-1 relative">
                        <div className="h-0.5 bg-gradient-to-r from-[#1e3a5f] to-[#f97316]" />
                        <Truck className="absolute left-1/2 -translate-x-1/2 -top-3.5 w-7 h-7 text-[#f97316]" style={{ filter: 'drop-shadow(0 2px 4px rgba(249,115,22,0.4))' }} />
                      </div>
                      <div className="text-center shrink-0">
                        <div className="w-10 h-10 bg-[#f97316]/10 rounded-xl flex items-center justify-center mx-auto mb-1">
                          <MapPin className="w-5 h-5 text-[#f97316]" />
                        </div>
                        <p className="text-xs font-semibold text-[#f97316]">To</p>
                        <p className="text-xs text-slate-500">{result.to}</p>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="bg-[#f8fafc] rounded-xl p-3">
                        <p className="text-[10px] text-slate-400 uppercase font-semibold mb-1">Cargo</p>
                        <p className="text-sm font-medium text-[#1e3a5f]">{result.cargo}</p>
                      </div>
                      <div className="bg-[#f8fafc] rounded-xl p-3">
                        <p className="text-[10px] text-slate-400 uppercase font-semibold mb-1">Vehicle</p>
                        <p className="text-sm font-medium text-[#1e3a5f]">{result.vehicle}</p>
                      </div>
                    </div>

                    {/* Driver */}
                    <div className="flex items-center gap-4 bg-[#1e3a5f]/5 rounded-2xl p-4">
                      <div className="w-11 h-11 bg-gradient-to-br from-[#1e3a5f] to-[#2d5282] rounded-full flex items-center justify-center text-white font-bold">
                        {result.driver.split(' ').map(w => w[0]).join('')}
                      </div>
                      <div>
                        <p className="font-bold text-[#1e3a5f] text-sm">{result.driver}</p>
                        <p className="text-slate-500 text-xs">Assigned Driver</p>
                      </div>
                      <a href={`tel:${result.driverPhone}`} className="ml-auto flex items-center gap-2 bg-[#1e3a5f] text-white text-xs font-semibold px-3 py-2 rounded-xl hover:bg-[#2d5282] transition-colors">
                        <Phone className="w-3.5 h-3.5" /> Call Driver
                      </a>
                    </div>
                  </div>
                </div>

                {/* Timeline */}
                <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6">
                  <h3 className="font-bold text-[#1e3a5f] text-lg mb-6">Shipment Timeline</h3>
                  <div className="relative space-y-6">
                    <div className="absolute left-5 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#1e3a5f] to-slate-100" />
                    {result.timeline.map((item, i) => (
                      <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }} className="flex items-start gap-4 pl-12 relative">
                        <div className={`absolute left-2 top-0.5 w-7 h-7 rounded-full flex items-center justify-center z-10 ${item.done ? 'bg-[#1e3a5f]' : 'bg-slate-200'}`}>
                          {item.done ? <CheckCircle className="w-4 h-4 text-white" /> : <Clock className="w-4 h-4 text-slate-400" />}
                        </div>
                        <div className={`${!item.done && 'opacity-50'}`}>
                          <div className="flex items-center gap-2 flex-wrap">
                            <p className={`font-bold text-sm ${item.done ? 'text-[#1e3a5f]' : 'text-slate-400'}`}>{item.status}</p>
                            {i === result.timeline.findLastIndex(t => t.done) && (
                              <span className="bg-[#f97316] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">CURRENT</span>
                            )}
                          </div>
                          <p className="text-slate-500 text-xs">{item.time} · {item.loc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Help */}
          {!result && !error && (
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 text-center">
              <Package className="w-16 h-16 text-slate-200 mx-auto mb-4" />
              <h3 className="font-bold text-[#1e3a5f] text-lg mb-2">Track Your Shipment</h3>
              <p className="text-slate-500 text-sm mb-6">Enter your tracking number above to get real-time updates on your cargo's location and status.</p>
              <p className="text-slate-400 text-sm">Need help? <a href={contactTel} className="text-[#f97316] font-semibold hover:underline">Call {contactNumber}</a></p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
