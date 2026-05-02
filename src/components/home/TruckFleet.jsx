import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

/* ─── Small truck (from Figma) — used for Mini category ─── */
function SmallTruckSVG() {
  return (
    <svg viewBox="-550 -420 4300 2750" className="w-full h-auto" aria-hidden="true">
      <defs>
        <linearGradient id="miniSkyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#04091a"/>
          <stop offset="60%" stopColor="#0b1e38"/>
          <stop offset="82%" stopColor="#122848"/>
          <stop offset="93%" stopColor="#7c2d12" stopOpacity="0.5"/>
          <stop offset="100%" stopColor="#111827"/>
        </linearGradient>
      </defs>
      {/* Sky */}
      <rect x="-550" y="-420" width="4300" height="2750" fill="url(#miniSkyGrad)"/>
      {/* Stars */}
      {[[200,-300],[600,-180],[1100,-350],[1700,-200],[2400,-310],[3100,-150],[3500,-280],[400,-80],[900,-260],[2000,-80],[2800,-220]].map(([sx,sy],i)=>(
        <circle key={i} cx={sx} cy={sy} r={i%3===0?12:8} fill="white" opacity={i%2===0?0.6:0.35}/>
      ))}
      {/* Horizon glow */}
      <rect x="-550" y="1290" width="4300" height="80" fill="#ea580c" opacity="0.10"/>
      {/* Road surface */}
      <rect x="-550" y="1350" width="4300" height="980" fill="#111827"/>
      <rect x="-550" y="1375" width="4300" height="955" fill="#1a2640"/>
      {/* Road shoulder line */}
      <rect x="-550" y="1352" width="4300" height="7" fill="#f97316" opacity="0.25"/>
      {/* Road center dashes */}
      <g>
        <animateTransform attributeName="transform" type="translate" from="0 0" to="400 0" dur="1.2s" repeatCount="indefinite"/>
        {[-800,-400,0,400,800,1200,1600,2000,2400,2800,3200,3600].map((x,i)=>(
          <rect key={i} x={x} y="1510" width="260" height="28" rx="14" fill="#f97316" opacity="0.5"/>
        ))}
      </g>

      {/* ── TRAILER BODY (red cargo container) ── */}
      <rect x="918" y="25" width="2128" height="1058" rx="12" fill="#ED1B2E"/>
      <rect x="978" y="76" width="2009" height="956" fill="#AE111F"/>
      {/* Vertical panel lines */}
      {[981,1023,1006,1109,1151,1134,1237,1279,1262,1365,1407,1390,1493,1535,1518,1621,1663,1646,1749,1791,1774,1877,1919,1902,2005,2047,2030,2133,2175,2158,2261,2303,2286,2389,2431,2414,2517,2559,2542,2645,2687,2670,2773,2815,2798,2901,2943,2926].map((x,i)=>{
        const colors=['#75090B','#EF4345','#ED1B2E']
        return <rect key={i} x={x} y="76" width={i%3===2?34:42} height="956" fill={colors[i%3]}/>
      })}
      {/* Side trim strips */}
      <rect x="918" y="25" width="2128" height="35" fill="#ED1B2E"/>
      <rect x="2986" y="25" width="60" height="1058" fill="#ED1B2E"/>
      <rect x="3039" y="25" width="7" height="1058" fill="#D7B248"/>
      <rect x="918" y="25" width="60" height="1058" fill="#ED1B2E"/>
      <rect x="918" y="25" width="8" height="1058" fill="#EF4345"/>
      {/* Company text on trailer */}
      <text x="2050" y="580" textAnchor="middle" fill="white" fontSize="120" fontWeight="900" fontFamily="sans-serif" opacity="0.15" letterSpacing="8">SHASHI TRANSPORT</text>
      {/* Reflector panels */}
      <rect x="1564" y="1052" width="159" height="25" fill="#000024"/>
      <rect x="2323" y="1052" width="159" height="25" fill="#000024"/>

      {/* ── CAB (blue section) ── */}
      <path fill="#275D87" d="M892,632c0,0-1.8-61-95-70H391c0,0-42-6-74,70L162,931c0,0-11,34-40,33c0,0-67,12-67,69l-8,228c0,0,0.1,50,21,52h369l72-74h384L892,632z"/>
      {/* Cab window area */}
      <polygon fill="#1E1A22" points="325,663 189,952 545,955 545,663"/>
      <polygon fill="#3C3841" points="338,671 215,932 536,935 536,671"/>
      {/* Blue glass reflection */}
      <path fill="#008DC5" fillOpacity="0.55" d="M355,640h508c0,0-33-67-77-63H391c0,0-30,1-43,25l-22,38H355z"/>
      <path fill="#008DC5" fillOpacity="0.55" d="M190,984c0,0-78-12-100,35l5,231l342,7c0,0,57-90,90-88V983L190,984z"/>
      {/* Cab roof / extra box */}
      <path fill="#1E1A22" d="M584,662v290h109c0,0,64-6,74-45V696c0,0-6-35-40-36C727,660,583,661,584,662z"/>
      <path fill="#3C3841" d="M593,681v249h94c0,0,55-5,63-39V710c0,0-5-30-34-31C716,680,592,680,593,681z"/>
      {/* Side panel / chassis */}
      <rect x="810" y="1162" width="2245" height="241" fill="#97999C"/>
      <rect x="810" y="1268" width="2245" height="135" fill="#5E6063"/>
      <rect x="872" y="1067" width="2204" height="102" fill="#231F20"/>
      <rect x="888" y="1162" width="2211" height="65" fill="#56595B"/>
      {/* Front bumper area */}
      <path fill="#2D2E2F" d="M82,1285v113c0,0-7,25,25,28h322l103-172h278l85,145V1229H129L82,1285z"/>
      {/* Shock absorber side */}
      <path fill="#3D3F3C" d="M113,1047c-8,32-28,55-45,51c-17-4-25-34-18-66c8-32,28-55,45-51C112,985,120,1015,113,1047z"/>
      <ellipse cx="79" cy="1041" rx="35" ry="48" fill="#E6E8E3"/>
      <ellipse cx="79" cy="1023" rx="16" ry="19" fill="#fff"/>
      {/* Front face trim */}
      <rect x="89" y="1394" width="363" height="64" fill="#231F20"/>
      <rect x="2943" y="1147" width="152" height="163" fill="#423D3E"/>
      {/* Exhaust pipe */}
      <rect x="3045" y="1094" width="32" height="83" fill="#CF6528"/>

      {/* ── WHEELS ── */}
      {/* Front wheel */}
      <circle cx="673" cy="1473" r="191" fill="#17191A"/>
      <circle cx="673" cy="1471" r="174" fill="#393B3C"/>
      <circle cx="673" cy="1471" r="96" fill="#2F3133"/>
      <circle cx="673" cy="1469" r="60" fill="#5A5B5E"/>
      <path fill="#525456" d="M673,1349c-68,0-124,55-124,124s56,124,124,124s124-55,124-124S741,1349,673,1349z M673,1583c-61,0-111-50-111-111s50-111,111-111s111,50,111,111S734,1583,673,1583z"/>
      {/* Rear wheel 1 */}
      <circle cx="2002" cy="1473" r="191" fill="#17191A"/>
      <circle cx="2002" cy="1471" r="174" fill="#393B3C"/>
      <circle cx="2002" cy="1471" r="96" fill="#2F3133"/>
      <circle cx="2002" cy="1469" r="60" fill="#5A5B5E"/>
      <path fill="#525456" d="M2002,1349c-68,0-124,55-124,124s56,124,124,124s124-55,124-124S2070,1349,2002,1349z M2002,1583c-61,0-111-50-111-111s50-111,111-111s111,50,111,111S2063,1583,2002,1583z"/>
      {/* Rear wheel 2 */}
      <circle cx="2401" cy="1473" r="191" fill="#17191A"/>
      <circle cx="2401" cy="1471" r="174" fill="#393B3C"/>
      <circle cx="2401" cy="1471" r="96" fill="#2F3133"/>
      <circle cx="2401" cy="1469" r="60" fill="#5A5B5E"/>
      <path fill="#525456" d="M2401,1349c-68,0-124,55-124,124s56,124,124,124s124-55,124-124S2469,1349,2401,1349z M2401,1583c-61,0-111-50-111-111s50-111,111-111s111,50,111,111S2462,1583,2401,1583z"/>
      {/* Axle suspension arms */}
      <polygon fill="#393B3C" points="2555,1248 2474,1248 2441,1248 1848,1248 1726,1434 1776,1434 1880,1277 2441,1277 2627,1434 2677,1434"/>
      <polygon fill="#393B3C" points="828,1248 803,1248 546,1248 521,1248 399,1434 449,1434 553,1277 771,1277 900,1434 950,1434"/>
      {/* Front axle bogie */}
      <path fill="#393B3C" d="M1608,1461H1056c-61,0-111-50-111-111s50-111,111-111h551c61,0,111,50,111,111S1668,1461,1608,1461z"/>
      <path fill="#393B3C" d="M2921,1461h-125c-61,0-111-50-111-111s50-111,111-111h125c61,0,111,50,111,111S2982,1461,2921,1461z"/>
    </svg>
  )
}

/* ─── Medium truck — small SVG scaled up, recolored blue ─── */
function MediumTruckSVG() {
  return (
    <svg viewBox="-350 -320 3950 2500" className="w-full h-auto" aria-hidden="true">
      <defs>
        <linearGradient id="medSkyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#04091a"/>
          <stop offset="58%" stopColor="#0b1e38"/>
          <stop offset="80%" stopColor="#122848"/>
          <stop offset="92%" stopColor="#7c2d12" stopOpacity="0.55"/>
          <stop offset="100%" stopColor="#111827"/>
        </linearGradient>
      </defs>
      {/* Sky */}
      <rect x="-350" y="-320" width="3950" height="2500" fill="url(#medSkyGrad)"/>
      {/* Stars */}
      {[[300,-240],[750,-140],[1300,-280],[1900,-160],[2500,-240],[400,-60],[1000,-200],[2200,-60]].map(([sx,sy],i)=>(
        <circle key={i} cx={sx} cy={sy} r={i%3===0?11:7} fill="white" opacity={i%2===0?0.55:0.3}/>
      ))}
      {/* Horizon glow */}
      <rect x="-350" y="1295" width="3950" height="70" fill="#ea580c" opacity="0.12"/>
      {/* Road surface */}
      <rect x="-350" y="1350" width="3950" height="830" fill="#111827"/>
      <rect x="-350" y="1374" width="3950" height="806" fill="#1a2640"/>
      {/* Road shoulder line */}
      <rect x="-350" y="1352" width="3950" height="7" fill="#f97316" opacity="0.25"/>
      {/* Road center dashes */}
      <g>
        <animateTransform attributeName="transform" type="translate" from="0 0" to="400 0" dur="1.1s" repeatCount="indefinite"/>
        {[-800,-400,0,400,800,1200,1600,2000,2400,2800,3200,3600].map((x,i)=>(
          <rect key={i} x={x} y="1510" width="260" height="28" rx="14" fill="#f97316" opacity="0.5"/>
        ))}
      </g>

      {/* TRAILER — recolored navy/blue */}
      <rect x="918" y="25" width="2128" height="1058" rx="12" fill="#1e3a5f"/>
      <rect x="978" y="76" width="2009" height="956" fill="#162d4a"/>
      {[981,1023,1006,1109,1151,1134,1237,1279,1262,1365,1407,1390,1493,1535,1518,1621,1663,1646,1749,1791,1774,1877,1919,1902,2005,2047,2030,2133,2175,2158,2261,2303,2286,2389,2431,2414,2517,2559,2542,2645,2687,2670,2773,2815,2798,2901,2943,2926].map((x,i)=>{
        const colors=['#0f2240','#2d5282','#1e3a5f']
        return <rect key={i} x={x} y="76" width={i%3===2?34:42} height="956" fill={colors[i%3]}/>
      })}
      <rect x="918" y="25" width="2128" height="40" fill="#f97316"/>
      <rect x="918" y="1040" width="2128" height="43" fill="#f97316" opacity="0.8"/>
      <rect x="2986" y="25" width="60" height="1058" fill="#1e3a5f"/>
      <rect x="3039" y="25" width="7" height="1058" fill="#f97316"/>
      <rect x="918" y="25" width="60" height="1058" fill="#1e3a5f"/>
      <text x="2050" y="590" textAnchor="middle" fill="#f97316" fontSize="110" fontWeight="900" fontFamily="sans-serif" opacity="0.9" letterSpacing="6">SHASHI TRANSPORT CO.</text>
      <text x="2050" y="730" textAnchor="middle" fill="white" fontSize="70" fontFamily="sans-serif" opacity="0.4" letterSpacing="14">22FT · SINGLE AXLE · PATNA</text>
      <rect x="1564" y="1052" width="159" height="25" fill="#000024"/>
      <rect x="2323" y="1052" width="159" height="25" fill="#000024"/>

      {/* CAB — orange */}
      <path fill="#f97316" d="M892,632c0,0-1.8-61-95-70H391c0,0-42-6-74,70L162,931c0,0-11,34-40,33c0,0-67,12-67,69l-8,228c0,0,0.1,50,21,52h369l72-74h384L892,632z"/>
      <polygon fill="#1E1A22" points="325,663 189,952 545,955 545,663"/>
      <polygon fill="#87ceeb" fillOpacity="0.55" points="338,671 215,932 536,935 536,671"/>
      <path fill="#e06010" d="M355,640h508c0,0-33-67-77-63H391c0,0-30,1-43,25l-22,38H355z"/>
      <path fill="#e06010" fillOpacity="0.7" d="M190,984c0,0-78-12-100,35l5,231l342,7c0,0,57-90,90-88V983L190,984z"/>
      <path fill="#1E1A22" d="M584,662v290h109c0,0,64-6,74-45V696c0,0-6-35-40-36C727,660,583,661,584,662z"/>
      <path fill="#3C3841" d="M593,681v249h94c0,0,55-5,63-39V710c0,0-5-30-34-31C716,680,592,680,593,681z"/>
      <rect x="810" y="1162" width="2245" height="241" fill="#97999C"/>
      <rect x="810" y="1268" width="2245" height="135" fill="#5E6063"/>
      <rect x="872" y="1067" width="2204" height="102" fill="#231F20"/>
      <rect x="888" y="1162" width="2211" height="65" fill="#56595B"/>
      <path fill="#2D2E2F" d="M82,1285v113c0,0-7,25,25,28h322l103-172h278l85,145V1229H129L82,1285z"/>
      <path fill="#3D3F3C" d="M113,1047c-8,32-28,55-45,51c-17-4-25-34-18-66c8-32,28-55,45-51C112,985,120,1015,113,1047z"/>
      <ellipse cx="79" cy="1041" rx="35" ry="48" fill="#E6E8E3"/>
      <ellipse cx="79" cy="1023" rx="16" ry="19" fill="#fff"/>
      <rect x="89" y="1394" width="363" height="64" fill="#231F20"/>
      <rect x="2943" y="1147" width="152" height="163" fill="#423D3E"/>
      <rect x="3045" y="1094" width="32" height="83" fill="#CF6528"/>

      {/* WHEELS */}
      <circle cx="673" cy="1473" r="191" fill="#17191A"/>
      <circle cx="673" cy="1471" r="174" fill="#393B3C"/>
      <circle cx="673" cy="1471" r="96" fill="#2F3133"/>
      <circle cx="673" cy="1469" r="60" fill="#5A5B5E"/>
      <path fill="#525456" d="M673,1349c-68,0-124,55-124,124s56,124,124,124s124-55,124-124S741,1349,673,1349z M673,1583c-61,0-111-50-111-111s50-111,111-111s111,50,111,111S734,1583,673,1583z"/>
      <circle cx="2002" cy="1473" r="191" fill="#17191A"/>
      <circle cx="2002" cy="1471" r="174" fill="#393B3C"/>
      <circle cx="2002" cy="1471" r="96" fill="#2F3133"/>
      <circle cx="2002" cy="1469" r="60" fill="#5A5B5E"/>
      <path fill="#525456" d="M2002,1349c-68,0-124,55-124,124s56,124,124,124s124-55,124-124S2070,1349,2002,1349z M2002,1583c-61,0-111-50-111-111s50-111,111-111s111,50,111,111S2063,1583,2002,1583z"/>
      <circle cx="2401" cy="1473" r="191" fill="#17191A"/>
      <circle cx="2401" cy="1471" r="174" fill="#393B3C"/>
      <circle cx="2401" cy="1471" r="96" fill="#2F3133"/>
      <circle cx="2401" cy="1469" r="60" fill="#5A5B5E"/>
      <path fill="#525456" d="M2401,1349c-68,0-124,55-124,124s56,124,124,124s124-55,124-124S2469,1349,2401,1349z M2401,1583c-61,0-111-50-111-111s50-111,111-111s111,50,111,111S2462,1583,2401,1583z"/>
      <polygon fill="#393B3C" points="2555,1248 2474,1248 2441,1248 1848,1248 1726,1434 1776,1434 1880,1277 2441,1277 2627,1434 2677,1434"/>
      <polygon fill="#393B3C" points="828,1248 803,1248 546,1248 521,1248 399,1434 449,1434 553,1277 771,1277 900,1434 950,1434"/>
      <path fill="#393B3C" d="M1608,1461H1056c-61,0-111-50-111-111s50-111,111-111h551c61,0,111,50,111,111S1668,1461,1608,1461z"/>
      <path fill="#393B3C" d="M2921,1461h-125c-61,0-111-50-111-111s50-111,111-111h125c61,0,111,50,111,111S2982,1461,2921,1461z"/>
    </svg>
  )
}

/* ─── Heavy truck (from Figma large SVG) — two trailer sections ─── */
function HeavyTruckSVG() {
  return (
    <svg viewBox="-450 -300 5100 2150" className="w-full h-auto" aria-hidden="true">
      <defs>
        <linearGradient id="hvySkyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#04091a"/>
          <stop offset="60%" stopColor="#0b1e38"/>
          <stop offset="82%" stopColor="#122848"/>
          <stop offset="92%" stopColor="#7c2d12" stopOpacity="0.5"/>
          <stop offset="100%" stopColor="#111827"/>
        </linearGradient>
      </defs>
      {/* Sky */}
      <rect x="-450" y="-300" width="5100" height="2150" fill="url(#hvySkyGrad)"/>
      {/* Stars */}
      {[[200,-220],[700,-120],[1400,-250],[2100,-140],[2900,-210],[3600,-130],[4200,-240],[500,-50],[1100,-180],[2500,-50],[3200,-190]].map(([sx,sy],i)=>(
        <circle key={i} cx={sx} cy={sy} r={i%3===0?11:7} fill="white" opacity={i%2===0?0.55:0.3}/>
      ))}
      {/* Horizon glow */}
      <rect x="-450" y="1048" width="5100" height="65" fill="#ea580c" opacity="0.11"/>
      {/* Road surface */}
      <rect x="-450" y="1100" width="5100" height="750" fill="#111827"/>
      <rect x="-450" y="1122" width="5100" height="728" fill="#1a2640"/>
      {/* Road shoulder line */}
      <rect x="-450" y="1102" width="5100" height="7" fill="#f97316" opacity="0.25"/>
      {/* Road center dashes */}
      <g>
        <animateTransform attributeName="transform" type="translate" from="0 0" to="400 0" dur="0.9s" repeatCount="indefinite"/>
        {[-800,-400,0,400,800,1200,1600,2000,2400,2800,3200,3600,4000,4400].map((x,i)=>(
          <rect key={i} x={x} y="1210" width="260" height="22" rx="11" fill="#f97316" opacity="0.5"/>
        ))}
      </g>

      {/* ── TRAILER 1 (left) ── navy */}
      <rect x="818" y="20" width="1563" height="778" rx="10" fill="#1e3a5f"/>
      <rect x="818" y="20" width="1563" height="40" fill="#f97316"/>
      <rect x="818" y="756" width="1563" height="42" fill="#f97316" opacity="0.75"/>
      <rect x="861" y="57" width="1476" height="703" fill="#162d4a"/>
      {[863,894,882,957,988,976,1052,1082,1070,1146,1177,1164,1240,1271,1258,1334,1365,1352,1428,1459,1446,1522,1553,1540,1616,1647,1634,1710,1741,1729,1804,1835,1823,1898,1929,1917,1993,2023,2011,2087,2118,2105,2181,2212,2199,2275,2306,2293].map((x,i)=>{
        const colors=['#0f2240','#2d5282','#1e3a5f']
        return <rect key={i} x={x} y="57" width={i%3===2?25:31} height="703" fill={colors[i%3]}/>
      })}
      <rect x="2337" y="20" width="44" height="778" fill="#1e3a5f"/>
      <rect x="2376" y="20" width="5" height="778" fill="#f97316"/>
      <rect x="818" y="20" width="44" height="778" fill="#1e3a5f"/>
      {/* Text on trailer 1 */}
      <text x="1598" y="440" textAnchor="middle" fill="#f97316" fontSize="90" fontWeight="900" fontFamily="sans-serif" opacity="0.9" letterSpacing="4">SHASHI</text>
      <text x="1598" y="550" textAnchor="middle" fill="white" fontSize="60" fontFamily="sans-serif" opacity="0.4" letterSpacing="10">TRANSPORT CO.</text>

      {/* ── TRAILER 2 (right) ── slightly lighter navy */}
      <rect x="2335" y="20" width="1563" height="778" rx="10" fill="#1e3a5f"/>
      <rect x="2335" y="20" width="1563" height="40" fill="#f97316"/>
      <rect x="2335" y="756" width="1563" height="42" fill="#f97316" opacity="0.75"/>
      <rect x="2378" y="57" width="1476" height="703" fill="#162d4a"/>
      {[2380,2411,2399,2475,2505,2493,2569,2600,2587,2663,2694,2681,2757,2788,2775,2851,2882,2869,2945,2976,2963,3039,3070,3057,3133,3164,3151,3227,3258,3246,3321,3352,3340,3415,3446,3434,3510,3540,3528,3604,3635,3622,3698,3729,3716,3792,3823,3810].map((x,i)=>{
        const colors=['#0f2240','#2d5282','#1e3a5f']
        return <rect key={i} x={x} y="57" width={i%3===2?25:31} height="703" fill={colors[i%3]}/>
      })}
      <rect x="3855" y="20" width="44" height="778" fill="#1e3a5f"/>
      <rect x="3893" y="20" width="5" height="778" fill="#f97316"/>
      <rect x="2335" y="20" width="44" height="778" fill="#1e3a5f"/>
      {/* Text on trailer 2 */}
      <text x="3115" y="440" textAnchor="middle" fill="#f97316" fontSize="90" fontWeight="900" fontFamily="sans-serif" opacity="0.9" letterSpacing="4">PATNA · INDIA</text>
      <text x="3115" y="550" textAnchor="middle" fill="white" fontSize="55" fontFamily="sans-serif" opacity="0.4" letterSpacing="8">40FT MULTI-AXLE</text>

      {/* ── CHASSIS / UNDERCARRIAGE ── */}
      <rect x="778" y="784" width="3069" height="209" fill="#97999C"/>
      <rect x="778" y="876" width="3069" height="117" fill="#5E6063"/>
      <rect x="777" y="784" width="3180" height="89" fill="#231F20"/>
      <rect x="829" y="866" width="3023" height="56" fill="#56595B"/>

      {/* ── WHEEL ARCH BOGIES ── */}
      <path fill="#393B3C" d="M1416,1126H937c-53,0-96-43-96-96s43-96,96-96h480c53,0,96,43,96,96S1469,1126,1416,1126z"/>
      <path fill="#393B3C" d="M2928,1126H2449c-53,0-96-43-96-96s43-96,96-96h480c53,0,96,43,96,96S2981,1126,2928,1126z"/>
      {/* Suspension axle arms */}
      <polygon fill="#393B3C" points="2240,941 2170,941 2140,941 1625,941 1519,1102 1563,1102 1653,966 2140,966 2302,1102 2346,1102"/>
      <polygon fill="#393B3C" points="3751,941 3681,941 3652,941 3137,941 3031,1102 3074,1102 3165,966 3652,966 3814,1102 3857,1102"/>

      {/* ── CAB ── */}
      <path fill="#B5B79A" d="M795,406c0,0-1.6-53-82-61H359c0,0-36-5-64,61L161,666c0,0-9.8,29-35,29c0,0-58,10-58,60l-7,198c0,0,0.1,43,18,45h321l62-65h333L795,406z"/>
      <polygon fill="#1E1A22" points="302,432 184,683 493,686 493,432"/>
      <polygon fill="#3C3841" points="313,439 206,666 485,668 485,439"/>
      {/* Windshield glass */}
      <path fill="#9FA288" d="M328,412h441c0,0-29-58-67-55H359c0,0-26,0.9-37,22l-20,33H328z"/>
      <path fill="#9FA288" d="M185,711c0,0-68-10-87,30l4,201l297,6c0,0,49-78,79-76V710L185,711z"/>
      {/* Shock absorber */}
      <path fill="#3D3F3C" d="M117,765c-6.6,28-24,48-39,45c-15-4-22-29-15-57c6.6-28,24-48,39-45C117,712,124,737,117,765z"/>
      <ellipse cx="87" cy="761" rx="30" ry="44" fill="#E6E8E3"/>
      <ellipse cx="87" cy="745" rx="14" ry="16" fill="#fff"/>
      {/* Front face */}
      <path fill="#2D2E2F" d="M91,973v98c0,0-5.8,21,22,25h280l89-149h242l74,126V924H131L91,973z"/>
      <rect x="97" y="1067" width="315" height="56" fill="#231F20"/>
      <rect x="3765" y="853" width="132" height="142" fill="#423D3E"/>
      <rect x="3914" y="806" width="46" height="73" fill="#CF6528"/>
      {/* Cab side box */}
      <path fill="#1E1A22" d="M527,431v252h95c0,0,56-5,64-39V449c0,0-5-30-34-31C652,430,526,430,527,431z"/>
      <path fill="#3C3841" d="M535,448V665h82c0,0,48-4,55-34V457c0,0-4-26-30-27C642,430,534,447,535,448z"/>
      <polygon fill="#9FA288" points="717,435 717,914 778,914 778,434"/>

      {/* ── WHEELS ── (4 rear dual axle + 1 front) */}
      {/* Front */}
      <circle cx="604" cy="1136" r="166" fill="#17191A"/>
      <circle cx="604" cy="1134" r="151" fill="#393B3C"/>
      <circle cx="604" cy="1135" r="83" fill="#2F3133"/>
      <circle cx="604" cy="1132" r="52" fill="#5A5B5E"/>
      <path fill="#525456" d="M604,1028c-59,0-108,48-108,108s48,108,108,108s108-48,108-108S663,1028,604,1028z M604,1232c-53,0-96-43-96-96s43-96,96-96s96,43,96,96S657,1232,604,1232z"/>
      {/* Rear axle 1 wheel A */}
      <circle cx="1759" cy="1136" r="166" fill="#17191A"/>
      <circle cx="1759" cy="1134" r="151" fill="#393B3C"/>
      <circle cx="1759" cy="1135" r="83" fill="#2F3133"/>
      <circle cx="1759" cy="1132" r="52" fill="#5A5B5E"/>
      <path fill="#525456" d="M1759,1028c-59,0-108,48-108,108s48,108,108,108s108-48,108-108S1818,1028,1759,1028z M1759,1232c-53,0-96-43-96-96s43-96,96-96s96,43,96,96S1812,1232,1759,1232z"/>
      {/* Rear axle 1 wheel B */}
      <circle cx="2106" cy="1136" r="166" fill="#17191A"/>
      <circle cx="2106" cy="1134" r="151" fill="#393B3C"/>
      <circle cx="2106" cy="1135" r="83" fill="#2F3133"/>
      <circle cx="2106" cy="1132" r="52" fill="#5A5B5E"/>
      <path fill="#525456" d="M2106,1028c-59,0-108,48-108,108s48,108,108,108s108-48,108-108S2165,1028,2106,1028z M2106,1232c-53,0-96-43-96-96s43-96,96-96s96,43,96,96S2159,1232,2106,1232z"/>
      {/* Rear axle 2 wheel A */}
      <circle cx="3279" cy="1136" r="166" fill="#17191A"/>
      <circle cx="3279" cy="1134" r="151" fill="#393B3C"/>
      <circle cx="3279" cy="1135" r="83" fill="#2F3133"/>
      <circle cx="3279" cy="1132" r="52" fill="#5A5B5E"/>
      <path fill="#525456" d="M3279,1028c-59,0-108,48-108,108s48,108,108,108s108-48,108-108S3338,1028,3279,1028z M3279,1232c-53,0-96-43-96-96s43-96,96-96s96,43,96,96S3332,1232,3279,1232z"/>
      {/* Rear axle 2 wheel B */}
      <circle cx="3625" cy="1136" r="166" fill="#17191A"/>
      <circle cx="3625" cy="1134" r="151" fill="#393B3C"/>
      <circle cx="3625" cy="1135" r="83" fill="#2F3133"/>
      <circle cx="3625" cy="1132" r="52" fill="#5A5B5E"/>
      <path fill="#525456" d="M3625,1028c-59,0-108,48-108,108s48,108,108,108s108-48,108-108S3684,1028,3625,1028z M3625,1232c-53,0-96-43-96-96s43-96,96-96s96,43,96,96S3678,1232,3625,1232z"/>
    </svg>
  )
}

const fleet = [
  {
    id: 'mini',
    name: 'Mini & Tempo Trucks',
    subtitle: 'Last-Mile & City Delivery',
    capacity: 'Up to 2 Tons',
    length: '8 ft – 14 ft',
    axles: '2-axle',
    types: ['Tata Ace', 'Mahindra Bolero', 'Eicher 10.90'],
    uses: ['Retail distribution', 'E-commerce last mile', 'Intra-city cargo', 'Small business shipments'],
    color: '#f97316',
    Svg: SmallTruckSVG,
  },
  {
    id: 'medium',
    name: 'Medium Trucks',
    subtitle: 'State & Regional Freight',
    capacity: '5 – 15 Tons',
    length: '17 ft – 22 ft',
    axles: '2–3 axle',
    types: ['Tata 1109', 'Ashok Leyland 2518', 'Mahindra Furio'],
    uses: ['Wholesale trade', 'Factory-to-warehouse', 'Inter-district delivery', 'FMCG distribution'],
    color: '#3b82f6',
    Svg: MediumTruckSVG,
  },
  {
    id: 'heavy',
    name: 'Heavy Multi-Axle Trucks',
    subtitle: 'Long-Haul Pan India Freight',
    capacity: '20 – 40 Tons',
    length: '32 ft – 40 ft',
    axles: '5–7 axle',
    types: ['Tata Signa 4825', 'Volvo FH Series', 'Eicher Pro 8031'],
    uses: ['Steel & heavy industry', 'Construction material', 'Container transport', 'Chemical & pharma'],
    color: '#10b981',
    Svg: HeavyTruckSVG,
  },
]

export default function TruckFleet() {
  const [active, setActive] = useState('medium')
  const current = fleet.find(f => f.id === active)

  return (
    <section className="section-pad bg-[#0f1c2e] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage:'linear-gradient(#ffffff 1px,transparent 1px),linear-gradient(90deg,#ffffff 1px,transparent 1px)',
        backgroundSize:'80px 80px'
      }}/>
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-60 bg-[#f97316]/8 rounded-full blur-3xl"/>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7}}
          className="text-center mb-12">
          <span className="inline-block bg-[#f97316]/20 text-[#f97316] font-semibold text-sm px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide border border-[#f97316]/20">
            Our Fleet
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Right Truck for <span className="text-[#f97316]">Every Load</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            580+ owned trucks across 3 categories — mini tempos for last-mile delivery to 40-ft multi-axle for heavy industrial freight.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {fleet.map(f => (
            <button key={f.id} onClick={() => setActive(f.id)}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-250 border ${
                active === f.id
                  ? 'text-white border-transparent shadow-lg'
                  : 'bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white'
              }`}
              style={active === f.id ? {background: f.color, borderColor: f.color} : {}}>
              {f.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div key={active}
            initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}}
            transition={{duration:0.35}}
            className="grid lg:grid-cols-5 gap-6 items-center">

            {/* Truck SVG */}
            <div className="lg:col-span-3 bg-white/5 border border-white/10 rounded-3xl p-4 overflow-hidden relative">
              <div className="absolute top-3 left-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full animate-pulse" style={{background: current.color}}/>
                <span className="text-white/50 text-xs font-mono">FLEET LIVE VIEW</span>
              </div>
              <div className="mt-6">
                <current.Svg/>
              </div>
              {/* Specs bar */}
              <div className="flex gap-4 mt-4 pt-4 border-t border-white/10 flex-wrap">
                {[
                  {label:'Max Capacity', val: current.capacity},
                  {label:'Body Length',  val: current.length},
                  {label:'Axle Config',  val: current.axles},
                ].map(s => (
                  <div key={s.label} className="text-center px-4">
                    <div className="font-bold text-white text-sm">{s.val}</div>
                    <div className="text-white/40 text-xs mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Info panel */}
            <div className="lg:col-span-2 space-y-5">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{color: current.color}}>
                  {current.subtitle}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{current.name}</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  Available in our fleet across all major dispatch hubs. Ready within 4–6 hours of booking.
                </p>
              </div>

              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Available Models</p>
                <div className="flex flex-wrap gap-2">
                  {current.types.map(t => (
                    <span key={t} className="bg-white/8 border border-white/10 text-white/70 text-xs px-3 py-1.5 rounded-lg">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Best For</p>
                <ul className="space-y-2">
                  {current.uses.map(u => (
                    <li key={u} className="flex items-center gap-2 text-sm text-white/70">
                      <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{background: current.color}}/>
                      {u}
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/get-quote"
                className="inline-flex items-center gap-2 font-bold text-sm px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                style={{background: current.color, color: 'white', boxShadow: `0 4px 20px ${current.color}50`}}>
                Book This Truck <ArrowRight className="w-4 h-4"/>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
