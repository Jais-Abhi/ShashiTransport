import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Box, Ruler, CheckCircle } from 'lucide-react';
import { truckSizes } from '../../lib/truckConfig';

// Custom component to render a dynamically-scaled truck silhouette based on size
const TruckSilhouette = ({ size, accentColor }) => {
  // Cabin is fixed size
  // Cargo width scales from 150px (14ft) to 270px (24ft)
  const cargoWidth = 150 + (size - 14) * 12;
  const totalWidth = 80 + cargoWidth + 20; // cab (80) + cargo + margins
  const isMultiAxle = size >= 22;

  // Extract base colors for gradient
  const colorStart = accentColor;
  
  return (
    <div className="w-full h-32 flex items-center justify-center p-2 bg-slate-950/40 rounded-2xl border border-slate-800/50 overflow-hidden relative group/truck">
      {/* Grid Pattern in background */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(to right, #475569 1px, transparent 1px), linear-gradient(to bottom, #475569 1px, transparent 1px)',
        backgroundSize: '10px 10px'
      }} />
      
      {/* Animated road highlight on hover */}
      <div className="absolute bottom-[28px] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sky-500/30 to-transparent scale-x-0 group-hover/truck:scale-x-100 transition-transform duration-700" />

      <motion.svg 
        viewBox={`0 0 ${totalWidth} 130`} 
        className="w-full max-w-[340px] h-auto drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        whileHover={{ x: 6 }}
        transition={{ type: 'spring', stiffness: 200, damping: 10 }}
      >
        {/* Road line */}
        <line x1="5" y1="102" x2={totalWidth - 5} y2="102" stroke="#334155" strokeWidth="2" strokeDasharray="3 3" />
        
        {/* Cabin - modern aerodynamic shape */}
        <path d="M20 100 V62 C20 58, 24 54, 28 54 H62 C68 54, 72 58, 72 65 V100 Z" fill="#1e293b" />
        {/* Cab Accent Highlight */}
        <path d="M20 75 H72 V79 H20 Z" fill="#475569" opacity="0.3" />
        {/* Windshield */}
        <path d="M22 66 V58 C22 56, 25 56, 27 56 H42 L47 66 Z" fill="#38bdf8" opacity="0.7" />
        {/* Side Window */}
        <path d="M51 66 V58 H64 C67 58, 68 59, 68 62 V66 Z" fill="#38bdf8" opacity="0.6" />
        {/* Headlight */}
        <rect x="15" y="85" width="6" height="8" rx="1" fill="#fbbf24" className="animate-pulse" />
        {/* Wheel arch front */}
        <path d="M38 100 A15 15 0 0 1 68 100" fill="none" stroke="#0f172a" strokeWidth="3" />
        
        {/* Cargo container */}
        <rect x="75" y="32" width={cargoWidth} height="68" rx="3" fill={`url(#grad-${size})`} stroke="#ffffff" strokeOpacity="0.1" strokeWidth="1" />
        
        {/* Container vertical grooves to look like real logistics trucks */}
        {Array.from({ length: Math.floor(cargoWidth / 16) }).map((_, idx) => (
          <line 
            key={idx} 
            x1={75 + (idx + 1) * 16} 
            y1="34" 
            x2={75 + (idx + 1) * 16} 
            y2="98" 
            stroke="#000000" 
            strokeOpacity="0.2" 
            strokeWidth="1.5" 
          />
        ))}
        {/* Highlight on container top */}
        <line x1="77" y1="34" x2={73 + cargoWidth} y2="34" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="1" />
        
        {/* Chassis / Frame under container */}
        <rect x="72" y="98" width={cargoWidth - 6} height="4" fill="#0f172a" />
        
        {/* Wheel arch rear */}
        {isMultiAxle ? (
          <>
            <path d={`M${75 + cargoWidth - 66} 100 A15 15 0 0 1 ${75 + cargoWidth - 36} 100`} fill="none" stroke="#0f172a" strokeWidth="3" />
            <path d={`M${75 + cargoWidth - 33} 100 A15 15 0 0 1 ${75 + cargoWidth - 3} 100`} fill="none" stroke="#0f172a" strokeWidth="3" />
          </>
        ) : (
          <path d={`M${75 + cargoWidth - 38} 100 A15 15 0 0 1 ${75 + cargoWidth - 8} 100`} fill="none" stroke="#0f172a" strokeWidth="3" />
        )}
        
        {/* Wheels */}
        {/* Front Wheel */}
        <circle cx="53" cy="100" r="11" fill="#020617" />
        <circle cx="53" cy="100" r="4" fill="#94a3b8" />
        
        {/* Rear Wheels */}
        {isMultiAxle ? (
          <>
            <circle cx={75 + cargoWidth - 51} cy="100" r="11" fill="#020617" />
            <circle cx={75 + cargoWidth - 51} cy="100" r="4" fill="#94a3b8" />
            <circle cx={75 + cargoWidth - 18} cy="100" r="11" fill="#020617" />
            <circle cx={75 + cargoWidth - 18} cy="100" r="4" fill="#94a3b8" />
          </>
        ) : (
          <>
            <circle cx={75 + cargoWidth - 23} cy="100" r="11" fill="#020617" />
            <circle cx={75 + cargoWidth - 23} cy="100" r="4" fill="#94a3b8" />
          </>
        )}

        {/* Dimension Label underneath */}
        <g opacity="0.8">
          <line x1="75" y1="120" x2={75 + cargoWidth} y2="120" stroke="#475569" strokeWidth="1" />
          <line x1="75" y1="116" x2="75" y2="124" stroke="#475569" strokeWidth="1" />
          <line x1={75 + cargoWidth} y1="116" x2={75 + cargoWidth} y2="124" stroke="#475569" strokeWidth="1" />
          <text x={75 + cargoWidth / 2} y="117" fill="#94a3b8" fontSize="8" fontWeight="800" textAnchor="middle">
            {size} FT BODY
          </text>
        </g>
        
        <defs>
          <linearGradient id={`grad-${size}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={colorStart} />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
};

export default function TruckSizes() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0f1f35] to-[#070f1a] relative overflow-hidden" id="truck-sizes">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-[#f97316]/10 text-[#f97316] font-bold text-xs px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest border border-[#f97316]/20">
              Fleet Specifications
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-5 tracking-tight">
              Explore Our <span className="text-[#f97316]">Truck Sizes</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              We offer a versatile range of 5 standardized truck sizes to match your cargo requirements and fleet planning needs.
            </p>
          </motion.div>
        </div>

          {/* Wider responsive grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
          {truckSizes.map((truck, idx) => {
            return (
              <motion.div
                key={truck.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-5 hover:border-slate-700/60 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                style={{
                  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)'
                }}
              >
                {/* Glow highlight on hover */}
                <div className={`absolute -inset-px bg-gradient-to-b ${truck.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl pointer-events-none`} />

                {/* Card Top */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/40">
                      {truck.badge}
                    </span>
                    <span className={`text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r ${truck.color}`}>
                      STANDARD
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-white mb-1 flex items-baseline gap-1">
                    {truck.name.split(' ')[0]} <span className="text-sm font-semibold text-slate-400">Feet</span>
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4 min-h-[36px]">
                    {truck.description}
                  </p>

                  {/* Silhouette Component */}
                  <TruckSilhouette size={truck.size} color={truck.color} accentColor={truck.accentColor} />

                  {/* Specifications Dash */}
                  <div className="grid grid-cols-3 gap-2 py-4 my-4 border-y border-slate-800/60">
                    <div className="text-center">
                      <Scale className="w-4 h-4 mx-auto mb-1 text-slate-500 group-hover:text-[#f97316] transition-colors" />
                      <div className="text-[11px] font-bold text-white truncate">{truck.capacity}</div>
                      <div className="text-[9px] text-slate-500 uppercase font-semibold">Payload</div>
                    </div>
                    <div className="text-center border-x border-slate-800/60 px-1">
                      <Box className="w-4 h-4 mx-auto mb-1 text-slate-500 group-hover:text-blue-400 transition-colors" />
                      <div className="text-[11px] font-bold text-white truncate">{truck.volume}</div>
                      <div className="text-[9px] text-slate-500 uppercase font-semibold">Volume</div>
                    </div>
                    <div className="text-center">
                      <Ruler className="w-4 h-4 mx-auto mb-1 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                      <div className="text-[11px] font-bold text-white truncate">{truck.dimensions.split(' ')[0]}</div>
                      <div className="text-[9px] text-slate-500 uppercase font-semibold">Dimensions</div>
                    </div>
                  </div>

                  {/* Best For Section */}
                  <div className="space-y-2 mb-6">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Suitable Commodities</p>
                    <ul className="space-y-1.5">
                      {truck.bestFor.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle className="w-3.5 h-3.5 mt-0.5 text-slate-500 shrink-0" style={{ color: truck.accentColor }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Bottom / Details */}
                <div>
                  <div className="mb-4">
                    <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Popular Models</p>
                    <div className="flex flex-wrap gap-1">
                      {truck.models.map((model) => (
                        <span key={model} className="text-[9px] font-medium text-slate-400 bg-slate-800/40 border border-slate-700/30 px-2 py-0.5 rounded">
                          {model}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-3xl bg-[#111827]/20 border border-slate-800/70 p-4">
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-2">Fleet Details</p>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      {truck.size} ft unit with {truck.capacity} payload and {truck.volume} volume capacity. Ideal for business operations requiring reliable cargo transport across regional routes.
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Small Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12 text-xs text-slate-500"
        >
          * Standard dimensions listed above. Container boxes can be customized for specific industrial requirements upon request.
        </motion.div>
      </div>
    </section>
  );
}
