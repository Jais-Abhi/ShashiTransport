import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useSearchParams } from 'react-router-dom'
import { ArrowRight, CheckCircle, Truck, Package, MapPin, Calendar, Weight, Phone } from 'lucide-react'
import { truckSizes } from '../lib/truckConfig'

const serviceTypes = ['Full Truck Load (FTL)', 'Part Load (LTL)', 'Cold Chain', 'Express Delivery', 'Insured Transport', 'Reverse Logistics']
const vehicleTypes = [
  ...truckSizes.map(t => `${t.size} ft Truck`),
  'Refrigerated Van',
  'Flatbed Trailer'
]

const steps = [
  { num: 1, label: 'Shipment Details' },
  { num: 2, label: 'Route Info' },
  { num: 3, label: 'Contact Details' },
]

export default function GetQuote() {
  const [searchParams] = useSearchParams()
  const initialSize = searchParams.get('size')
  const initialVehicle = initialSize ? `${initialSize} ft Truck` : ''

  const [step, setStep] = useState(1)
  const [done, setDone] = useState(false)
  const [form, setForm] = useState({
    serviceType: '', vehicleType: initialVehicle, weight: '', description: '',
    fromCity: '', fromState: '', toCity: '', toState: '', pickupDate: '', deliveryDate: '',
    name: '', company: '', phone: '', email: '', notes: '',
  })

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const next = () => setStep(s => Math.min(s + 1, 3))
  const prev = () => setStep(s => Math.max(s - 1, 1))
  const submit = e => { e.preventDefault(); setDone(true) }

  const inputCls = "w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/30 focus:border-[#1e3a5f] transition-all bg-white"
  const labelCls = "block text-sm font-medium text-slate-700 mb-1.5"

  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0f1f35] via-[#1e3a5f] to-[#0f2540] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#ffffff20 1px,transparent 1px),linear-gradient(90deg,#ffffff20 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-[#f97316] text-sm font-semibold uppercase tracking-widest mb-3">Free Estimate</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Get a <span className="text-[#f97316]">Quote</span></h1>
            <p className="text-white/60 text-lg max-w-xl mx-auto">Fill in your shipment details and receive a competitive quote within 30 minutes.</p>
          </motion.div>
        </div>
      </div>

      <section className="section-pad bg-[#f8fafc]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {done ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-3xl shadow-xl p-12 text-center">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-green-500" />
              </div>
              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-3">Quote Request Submitted!</h2>
              <p className="text-slate-500 mb-2">Thank you, <strong>{form.name}</strong>. We have received your request.</p>
              <p className="text-slate-500 mb-8">Our team will contact you at <strong className="text-[#f97316]">{form.phone}</strong> within <strong>30 minutes</strong> with a competitive quote.</p>
              <div className="bg-[#f8fafc] rounded-2xl p-5 text-left mb-8">
                <h4 className="font-bold text-[#1e3a5f] mb-3 text-sm uppercase tracking-wide">Your Request Summary</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-slate-500">Service</span><span className="font-medium text-[#1e3a5f]">{form.serviceType}</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Route</span><span className="font-medium text-[#1e3a5f]">{form.fromCity} → {form.toCity}</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Vehicle</span><span className="font-medium text-[#1e3a5f]">{form.vehicleType}</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Pickup</span><span className="font-medium text-[#1e3a5f]">{form.pickupDate}</span></div>
                </div>
              </div>
              <div className="flex gap-3 justify-center">
                <a href="tel:+918888888888" className="flex items-center gap-2 bg-[#1e3a5f] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#2d5282] transition-colors">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
                <button onClick={() => { setDone(false); setStep(1); setForm({ serviceType:'',vehicleType:'',weight:'',description:'',fromCity:'',fromState:'',toCity:'',toState:'',pickupDate:'',deliveryDate:'',name:'',company:'',phone:'',email:'',notes:'' }) }} className="flex items-center gap-2 bg-slate-100 text-slate-700 font-semibold px-6 py-3 rounded-xl hover:bg-slate-200 transition-colors">
                  New Quote
                </button>
              </div>
            </motion.div>
          ) : (
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              {/* Step indicator */}
              <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2d5282] p-6">
                <div className="flex items-center justify-between">
                  {steps.map((s, i) => (
                    <div key={s.num} className="flex items-center gap-2 flex-1">
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold shrink-0 transition-all duration-300 ${step >= s.num ? 'bg-[#f97316] text-white' : 'bg-white/10 text-white/50'}`}>
                        {step > s.num ? '✓' : s.num}
                      </div>
                      <span className={`text-sm font-medium transition-colors duration-300 hidden sm:block ${step >= s.num ? 'text-white' : 'text-white/40'}`}>{s.label}</span>
                      {i < steps.length - 1 && (
                        <div className={`flex-1 h-0.5 mx-2 transition-colors duration-300 ${step > s.num ? 'bg-[#f97316]' : 'bg-white/10'}`} />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <form onSubmit={submit} className="p-8">
                {/* Step 1 */}
                {step === 1 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} className="space-y-5">
                    <h2 className="text-xl font-bold text-[#1e3a5f] mb-6 flex items-center gap-2">
                      <Package className="w-5 h-5 text-[#f97316]" /> Shipment Details
                    </h2>
                    <div>
                      <label className={labelCls}>Service Type *</label>
                      <select required name="serviceType" value={form.serviceType} onChange={handleChange} className={inputCls}>
                        <option value="">Choose service</option>
                        {serviceTypes.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className={labelCls}>Preferred Vehicle *</label>
                      <select required name="vehicleType" value={form.vehicleType} onChange={handleChange} className={inputCls}>
                        <option value="">Choose vehicle</option>
                        {vehicleTypes.map(v => <option key={v} value={v}>{v}</option>)}
                      </select>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelCls}><span className="flex items-center gap-1"><Weight className="w-3.5 h-3.5" /> Cargo Weight (kg)</span></label>
                        <input name="weight" value={form.weight} onChange={handleChange} placeholder="e.g. 5000 kg" className={inputCls} />
                      </div>
                      <div>
                        <label className={labelCls}>Cargo Description *</label>
                        <input required name="description" value={form.description} onChange={handleChange} placeholder="e.g. Steel pipes, textiles..." className={inputCls} />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 2 */}
                {step === 2 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} className="space-y-5">
                    <h2 className="text-xl font-bold text-[#1e3a5f] mb-6 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-[#f97316]" /> Route Information
                    </h2>
                    <div className="bg-[#f8fafc] rounded-2xl p-5 space-y-4">
                      <p className="text-sm font-semibold text-[#1e3a5f]">Pickup Location</p>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className={labelCls}>City *</label>
                          <input required name="fromCity" value={form.fromCity} onChange={handleChange} placeholder="From city" className={inputCls} />
                        </div>
                        <div>
                          <label className={labelCls}>State *</label>
                          <input required name="fromState" value={form.fromState} onChange={handleChange} placeholder="State" className={inputCls} />
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#fff8f3] rounded-2xl p-5 space-y-4 border border-orange-100">
                      <p className="text-sm font-semibold text-[#f97316]">Delivery Location</p>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className={labelCls}>City *</label>
                          <input required name="toCity" value={form.toCity} onChange={handleChange} placeholder="To city" className={inputCls} />
                        </div>
                        <div>
                          <label className={labelCls}>State *</label>
                          <input required name="toState" value={form.toState} onChange={handleChange} placeholder="State" className={inputCls} />
                        </div>
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelCls}><span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> Pickup Date *</span></label>
                        <input required type="date" name="pickupDate" value={form.pickupDate} onChange={handleChange} className={inputCls} />
                      </div>
                      <div>
                        <label className={labelCls}>Expected Delivery Date</label>
                        <input type="date" name="deliveryDate" value={form.deliveryDate} onChange={handleChange} className={inputCls} />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3 */}
                {step === 3 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} className="space-y-5">
                    <h2 className="text-xl font-bold text-[#1e3a5f] mb-6 flex items-center gap-2">
                      <Phone className="w-5 h-5 text-[#f97316]" /> Contact Details
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelCls}>Full Name *</label>
                        <input required name="name" value={form.name} onChange={handleChange} placeholder="Your name" className={inputCls} />
                      </div>
                      <div>
                        <label className={labelCls}>Company Name</label>
                        <input name="company" value={form.company} onChange={handleChange} placeholder="Company (optional)" className={inputCls} />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelCls}>Phone Number *</label>
                        <input required name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className={inputCls} />
                      </div>
                      <div>
                        <label className={labelCls}>Email Address</label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className={inputCls} />
                      </div>
                    </div>
                    <div>
                      <label className={labelCls}>Additional Notes</label>
                      <textarea name="notes" value={form.notes} onChange={handleChange} rows={3} placeholder="Any special instructions, fragile goods, hazmat, etc." className={`${inputCls} resize-none`} />
                    </div>

                    {/* Summary */}
                    <div className="bg-[#f8fafc] rounded-2xl p-4 border border-slate-100">
                      <h4 className="font-bold text-[#1e3a5f] text-sm mb-3">Quote Summary</h4>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div><span className="text-slate-400">Service: </span><span className="font-medium text-[#1e3a5f]">{form.serviceType || '—'}</span></div>
                        <div><span className="text-slate-400">Vehicle: </span><span className="font-medium text-[#1e3a5f]">{form.vehicleType || '—'}</span></div>
                        <div><span className="text-slate-400">Route: </span><span className="font-medium text-[#1e3a5f]">{form.fromCity && form.toCity ? `${form.fromCity} → ${form.toCity}` : '—'}</span></div>
                        <div><span className="text-slate-400">Pickup: </span><span className="font-medium text-[#1e3a5f]">{form.pickupDate || '—'}</span></div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Navigation */}
                <div className="flex gap-3 mt-8">
                  {step > 1 && (
                    <button type="button" onClick={prev} className="flex-1 bg-slate-100 text-slate-700 font-semibold py-3.5 rounded-xl hover:bg-slate-200 transition-colors">
                      ← Back
                    </button>
                  )}
                  {step < 3 ? (
                    <button type="button" onClick={next} className="flex-1 shimmer-btn text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2">
                      Continue <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="flex-1 shimmer-btn text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2">
                      <Truck className="w-5 h-5" /> Submit Quote Request
                    </motion.button>
                  )}
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
