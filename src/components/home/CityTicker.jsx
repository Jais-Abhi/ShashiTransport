import React from 'react'

const cities = [
  'Patna','Delhi','Mumbai','Kolkata','Chennai','Bengaluru','Hyderabad','Ahmedabad',
  'Jaipur','Lucknow','Kanpur','Varanasi','Surat','Pune','Nagpur','Bhopal',
  'Ranchi','Guwahati','Bhubaneswar','Visakhapatnam','Kochi','Siliguri','Jammu',
  'Srinagar','Jodhpur','Amritsar','Chandigarh','Indore','Vadodara','Agra',
  'Meerut','Muzaffarpur','Gaya','Bhagalpur','Panaji','Margao',
]

export default function CityTicker() {
  const doubled = [...cities, ...cities]

  return (
    <div className="bg-[#1e3a5f] border-y border-[#f97316]/20 py-3.5 overflow-hidden select-none">
      <div className="flex items-center gap-0">
        {/* Label */}
        <div className="shrink-0 flex items-center gap-2 bg-[#f97316] px-5 py-1 mr-0 z-10">
          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M1 3h15v13H1z"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
          </svg>
          <span className="text-white font-bold text-xs tracking-widest uppercase whitespace-nowrap">We Deliver To</span>
        </div>

        {/* Scrolling cities */}
        <div className="overflow-hidden flex-1">
          <div className="ticker-track flex items-center gap-0 whitespace-nowrap">
            {doubled.map((city, i) => (
              <span key={i} className="inline-flex items-center gap-3 px-4 text-white/80 text-sm font-medium">
                {city}
                <span className="w-1.5 h-1.5 bg-[#f97316] rounded-full opacity-70"/>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
