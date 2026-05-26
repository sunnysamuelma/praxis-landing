import React from 'react'

/* =========================================================
   PRAXIS BADGE SVGs — pulled directly from the extension's
   achievements.js so the landing page matches the real UI.
   ========================================================= */

const BadgeSVGs = {
  firstFlame: (c = "#f97316", cL = "rgba(249,115,22,0.26)", earned = true) => (
    <svg width="68" height="68" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="33" r="27" fill={earned ? "rgba(249,115,22,0.08)" : "rgba(71,85,105,0.10)"} stroke={c} strokeWidth="1.8"/>
      <circle cx="32" cy="35" r="19" fill={earned ? cL : "rgba(71,85,105,0.18)"} stroke={c} strokeWidth="1.4" opacity="0.9"/>
      <path d="M32 52C25.4 52 21 47.4 21 41.6C21 35.4 25.5 32.3 28.2 27C29.4 24.6 30.2 21.4 29.4 18C36.9 22.7 43 30.6 43 39.4C43 46.8 38.5 52 32 52Z" fill={earned ? c : "#64748b"} stroke={c} strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M32 47.5C28.7 47.5 26.6 45.1 26.6 42.2C26.6 38.8 30.2 36.9 31.9 32C36.1 35.2 37.8 38.4 37.5 41.7C37.2 45.2 35 47.5 32 47.5Z" fill={earned ? "#fde68a" : "#cbd5e1"}/>
      <path d="M32 8V13M18.6 13.7L22 17.1M45.4 13.7L42 17.1M13 27H17M47 27H51" stroke={c} strokeWidth="2" strokeLinecap="round"/>
      <path d="M25 54H39" stroke={c} strokeWidth="2.4" strokeLinecap="round"/>
      {earned && <circle cx="32" cy="33" r="24" stroke="#fdba74" strokeWidth="1" opacity="0.32"/>}
    </svg>
  ),

  deepWorkDay: (c = "#14b8a6", cL = "rgba(20,184,166,0.25)", earned = true) => (
    <svg width="68" height="68" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="46" cy="18" r="9" fill={earned ? "#fbbf24" : "#64748b"} opacity="0.9"/>
      <path d="M7 52L25 24L36 40L43 31L57 52H7Z" fill={earned ? cL : "rgba(71,85,105,0.2)"} stroke={c} strokeWidth="2.2" strokeLinejoin="round"/>
      <path d="M25 24L29 33L22 33Z" fill={earned ? "#ccfbf1" : "#94a3b8"} opacity="0.8"/>
      <path d="M7 52H57" stroke={c} strokeWidth="3" strokeLinecap="round"/>
    </svg>
  ),

  longHaul: (c = "#0ea5e9", cL = "rgba(14,165,233,0.25)", earned = true) => (
    <svg width="68" height="68" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="27" fill={earned ? "rgba(14,165,233,0.10)" : "rgba(71,85,105,0.12)"} stroke={c} strokeWidth="2"/>
      <path d="M10 36H54" stroke={c} strokeWidth="1.8" strokeLinecap="round" opacity="0.65"/>
      <path d="M24 36C24 31.6 27.6 28 32 28C36.4 28 40 31.6 40 36" fill={earned ? "#fbbf24" : "#64748b"} opacity="0.95"/>
      <path d="M12 33C14.8 21.8 23.1 14 32 14C40.9 14 49.2 21.8 52 33" stroke={earned ? "#bae6fd" : c} strokeWidth="1.4" strokeLinecap="round" opacity="0.55"/>
      <path d="M28.5 37H35.5L43 57H21L28.5 37Z" fill={earned ? cL : "rgba(71,85,105,0.2)"} stroke={c} strokeWidth="1.9" strokeLinejoin="round"/>
      <path d="M32 40V44M32 48V53" stroke={earned ? "#e0f2fe" : "#cbd5e1"} strokeWidth="2" strokeLinecap="round"/>
      <path d="M14 57H50M18 42H23M41 42H46" stroke={c} strokeWidth="2.2" strokeLinecap="round"/>
      {earned && <path d="M14 30C18 20 25 13.5 32 12" stroke="#e0f2fe" strokeWidth="1.2" strokeLinecap="round" opacity="0.42"/>}
    </svg>
  ),

  vanguard: (c = "#10b981", cL = "rgba(16,185,129,0.25)", earned = true) => (
    <svg width="68" height="68" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 4L52 16V36C52 46 44 54 32 60C20 54 12 46 12 36V16L32 4Z" fill={earned ? cL : "rgba(71,85,105,0.12)"} stroke={c} strokeWidth="2.5" strokeLinejoin="round"/>
      {earned && <path d="M32 4L52 16V36C52 46 44 54 32 60" fill="rgba(255,255,255,0.06)"/>}
      <circle cx="32" cy="28" r="8" fill="none" stroke={c} strokeWidth="2.5"/>
      {earned && <circle cx="32" cy="28" r="4" fill={c} opacity="0.35"/>}
      <line x1="32" y1="36" x2="32" y2="48" stroke={c} strokeWidth="2.5" strokeLinecap="round"/>
      {earned && <circle cx="32" cy="28" r="12" fill="none" stroke={c} strokeWidth="1" opacity="0.15"/>}
    </svg>
  ),

  pillar: (c = "#3b82f6", cL = "rgba(59,130,246,0.25)", earned = true) => (
    <svg width="68" height="68" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="4" width="40" height="6" rx="1" fill={c}/>
      <path d="M16 10L14 13L50 13L48 10" fill={c} opacity="0.6"/>
      <rect x="20" y="13" width="24" height="39" fill={cL} stroke={c} strokeWidth="1.8" rx="1"/>
      {earned && <rect x="20" y="13" width="12" height="39" fill="rgba(255,255,255,0.08)" rx="1"/>}
      <line x1="26" y1="15" x2="26" y2="50" stroke={c} strokeWidth="1" opacity="0.35"/>
      <line x1="32" y1="15" x2="32" y2="50" stroke={c} strokeWidth="1" opacity="0.35"/>
      <line x1="38" y1="15" x2="38" y2="50" stroke={c} strokeWidth="1" opacity="0.35"/>
      <path d="M16 52L14 55L50 55L48 52" fill={c} opacity="0.6"/>
      <rect x="12" y="55" width="40" height="6" rx="1" fill={c}/>
      <rect x="18" y="52" width="28" height="3" fill={c} opacity="0.4"/>
    </svg>
  ),

  centurion: (c = "#dc2626", cL = "rgba(220,38,38,0.35)", earned = true) => (
    <svg width="72" height="58" viewBox="0 0 72 58" fill="none" xmlns="http://www.w3.org/2000/svg">
      {earned && <ellipse cx="36" cy="54" rx="28" ry="6" fill="rgba(220,38,38,0.18)"/>}
      <path d="M6 50L14 20L30 38L36 8L42 38L58 20L66 50Z" fill={cL} stroke={c} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round"/>
      <rect x="4" y="50" width="64" height="6" rx="3" fill={c}/>
      {earned && <rect x="4" y="50" width="64" height="3" rx="3" fill="rgba(255,200,200,0.25)"/>}
    </svg>
  ),

  sovereign: (c = "#f59e0b", cL = "rgba(245,158,11,0.25)", earned = true) => (
    <svg width="68" height="68" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 46L14 22L26 36L32 16L38 36L50 22L56 46Z" fill={earned ? cL : "rgba(71,85,105,0.15)"} stroke={c} strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round"/>
      <rect x="6" y="46" width="52" height="6" rx="2" fill={c}/>
      <rect x="6" y="52" width="52" height="4" rx="1.5" fill={c} opacity="0.4"/>
      {earned && <rect x="6" y="46" width="52" height="6" rx="2" fill="rgba(255,255,255,0.12)"/>}
      <line x1="32" y1="16" x2="32" y2="6" stroke={c} strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="28" y1="6" x2="36" y2="6" stroke={c} strokeWidth="2" strokeLinecap="round"/>
      <line x1="32" y1="3" x2="32" y2="9" stroke={c} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),

  pantheon: (c = "#a78bfa", cL = "rgba(167,139,250,0.25)", earned = true) => (
    <svg width="68" height="68" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 22L32 6L58 22Z" fill={earned ? cL : "rgba(71,85,105,0.15)"} stroke={c} strokeWidth="2" strokeLinejoin="round"/>
      {earned && <path d="M6 22L32 6L58 22Z" fill="rgba(255,255,255,0.06)"/>}
      <rect x="4" y="22" width="56" height="4" rx="1" fill={c}/>
      <rect x="12" y="26" width="6" height="28" fill={cL} stroke={c} strokeWidth="1.5" rx="1"/>
      <rect x="23" y="26" width="6" height="28" fill={cL} stroke={c} strokeWidth="1.5" rx="1"/>
      <rect x="35" y="26" width="6" height="28" fill={cL} stroke={c} strokeWidth="1.5" rx="1"/>
      <rect x="46" y="26" width="6" height="28" fill={cL} stroke={c} strokeWidth="1.5" rx="1"/>
      <rect x="4" y="54" width="56" height="5" rx="1" fill={c}/>
      {earned && <rect x="4" y="54" width="56" height="5" rx="1" fill="rgba(255,255,255,0.12)"/>}
    </svg>
  ),

  apex: (c = "#8254EE", cL = "rgba(130,84,238,0.22)", earned = true) => (
    <svg width="68" height="68" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="32,8 60,56 4,56" fill={cL} stroke={c} strokeWidth="2.4" strokeLinejoin="round"/>
      {earned && <polygon points="32,8 60,56 4,56" fill="rgba(255,255,255,0.05)"/>}
    </svg>
  ),

  streakstarter: (c = "#ef4444", cL = "rgba(239,68,68,0.25)", earned = true) => (
    <svg width="68" height="68" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="7" y="15" width="50" height="43" rx="8" fill={earned ? cL : "rgba(71,85,105,0.20)"} stroke={c} strokeWidth="2.2"/>
      <path d="M7 27H57" stroke={c} strokeWidth="2"/>
      <path d="M18 11V20M46 11V20" stroke={c} strokeWidth="3.2" strokeLinecap="round"/>
      <circle cx="18" cy="40" r="7.5" fill={earned ? "rgba(239,68,68,0.26)" : "rgba(71,85,105,0.28)"} stroke={c} strokeWidth="1.3"/>
      <circle cx="32" cy="40" r="7.5" fill={earned ? "rgba(239,68,68,0.34)" : "rgba(71,85,105,0.28)"} stroke={c} strokeWidth="1.3"/>
      <circle cx="46" cy="40" r="7.5" fill={earned ? c : "#64748b"} stroke={c} strokeWidth="1.3"/>
      <path d="M14.5 40L17 42.5L21.5 37.5M28.5 40L31 42.5L35.5 37.5M42.5 40L45 42.5L49.5 37.5" stroke={earned ? "#fee2e2" : "#cbd5e1"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 53H48" stroke={c} strokeWidth="1.6" strokeLinecap="round" opacity="0.55"/>
    </svg>
  ),

  ironRoutine: (c = "#94a3b8", cL = "rgba(148,163,184,0.25)", earned = true) => (
    <svg width="68" height="68" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="9" width="48" height="48" rx="8" fill={earned ? cL : "rgba(71,85,105,0.20)"} stroke={c} strokeWidth="2.2"/>
      <path d="M8 23H56" stroke={c} strokeWidth="2.2"/>
      <path d="M18 6V15M46 6V15" stroke={c} strokeWidth="3.4" strokeLinecap="round"/>
      <rect x="12" y="28" width="8" height="8" rx="2" fill={earned ? "#cbd5e1" : "#64748b"}/>
      <rect x="23" y="28" width="8" height="8" rx="2" fill={earned ? "#cbd5e1" : "#64748b"}/>
      <rect x="34" y="28" width="8" height="8" rx="2" fill={earned ? "#cbd5e1" : "#64748b"}/>
      <rect x="45" y="28" width="8" height="8" rx="2" fill={earned ? "#cbd5e1" : "#64748b"}/>
      <rect x="17.5" y="40" width="8" height="8" rx="2" fill={earned ? "#cbd5e1" : "#64748b"}/>
      <rect x="28" y="40" width="8" height="8" rx="2" fill={earned ? "#cbd5e1" : "#64748b"}/>
      <rect x="38.5" y="40" width="8" height="8" rx="2" fill={earned ? "#cbd5e1" : "#64748b"}/>
      <path d="M14 32L16 34L19 30.5M25 32L27 34L30 30.5M36 32L38 34L41 30.5M47 32L49 34L52 30.5M19.5 44L21.5 46L24.5 42.5M30 44L32 46L35 42.5M40.5 44L42.5 46L45.5 42.5" stroke={earned ? "#475569" : "#94a3b8"} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="49" cy="18" r="8" fill={earned ? "#64748b" : "#475569"} stroke={c} strokeWidth="1.4"/>
      <text x="49" y="21.2" textAnchor="middle" fontSize="9" fontWeight="800" fontFamily="Arial, sans-serif" fill={earned ? "#f8fafc" : "#cbd5e1"}>7</text>
    </svg>
  ),

  ember30: (c = "#f43f5e", cL = "rgba(244,63,94,0.25)", earned = true) => (
    <svg width="68" height="68" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 7C40 17 50 24 50 38C50 49 42 57 32 57C22 57 14 49 14 38C14 28 21 22 25 16C25 24 31 26 32 7Z" fill={earned ? cL : "rgba(71,85,105,0.22)"} stroke={c} strokeWidth="2.4" strokeLinejoin="round"/>
      <path d="M33 49C28 46 26 42 28 37C30 33 34 31 34 24C40 31 43 36 42 42C41 47 37 50 33 49Z" fill={earned ? c : "#64748b"} opacity="0.9"/>
      <path d="M33 44C31 42 31 39 33 36C36 39 37 41 36 43C36 45 34 46 33 44Z" fill={earned ? "#ffe4e6" : "#94a3b8"}/>
    </svg>
  ),

  podiumRegular: (c = "#eab308", cL = "rgba(234,179,8,0.26)", earned = true) => (
    <svg width="68" height="68" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="18" width="14" height="34" rx="2" fill={earned ? cL : "rgba(71,85,105,0.22)"} stroke={c} strokeWidth="2"/>
      <rect x="9" y="30" width="14" height="22" rx="2" fill={earned ? "rgba(148,163,184,0.22)" : "rgba(71,85,105,0.18)"} stroke={c} strokeWidth="2"/>
      <rect x="41" y="35" width="14" height="17" rx="2" fill={earned ? "rgba(180,83,9,0.22)" : "rgba(71,85,105,0.18)"} stroke={c} strokeWidth="2"/>
      <path d="M32 8L35 14L42 15L37 20L38 27L32 23L26 27L27 20L22 15L29 14L32 8Z" fill={earned ? c : "#64748b"}/>
      <path d="M8 52H56" stroke={c} strokeWidth="3" strokeLinecap="round"/>
    </svg>
  ),

  founders: (c = "#c9a227", earned = true) => (
    <svg width="68" height="80" viewBox="0 0 72 88" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="founderGold" x1="4" y1="4" x2="68" y2="84" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f7d862"/>
          <stop offset="38%" stopColor="#c9a227"/>
          <stop offset="100%" stopColor="#7a5c0e"/>
        </linearGradient>
      </defs>
      <path d="M36 4L68 20V56L54 68L36 84L18 68L4 56V20L36 4Z" fill="rgba(0,0,0,0.45)" transform="translate(1.5,2.5)"/>
      <path d="M36 4L68 20V56L54 68L36 84L18 68L4 56V20L36 4Z" fill={earned ? "url(#founderGold)" : "rgba(100,100,100,0.3)"}/>
      <path d="M36 7L65 22V54.5L52 66L36 81L20 66L7 54.5V22L36 7Z" fill="none" stroke="rgba(255,235,160,0.55)" strokeWidth="2"/>
      <text x="36" y="46" textAnchor="middle" dominantBaseline="central" fontSize="22" fontWeight="900" fontFamily="Georgia, serif" fill="rgba(8,8,8,0.88)" letterSpacing="0.05em">VII</text>
    </svg>
  )
}

export default BadgeSVGs
