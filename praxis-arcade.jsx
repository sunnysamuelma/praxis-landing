/* PRAXIS — ARCADE STACK · HIGH-FI LANDING */

const { useState, useEffect, useRef } = React;

const CHROME_STORE_URL = "https://chromewebstore.google.com/detail/praxis-student-productivi/jpjkpnolomkbbdhkaenljkbjbabikilk";

/* ---------- Hook: trigger when element scrolls into view ---------- */
const useInView = (threshold = 0.2) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { setInView(true); io.disconnect(); }
      }),
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, inView];
};

/* ---------- icons ---------- */
const Icon = {
  arrow: (
    <svg className="chev" width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  play: (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z"/>
    </svg>
  ),
  trophy: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 01-10 0V4zM5 4H3v3a3 3 0 003 3M19 4h2v3a3 3 0 01-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  bolt: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13 2L4.5 13.5h6L9 22l8.5-11.5h-6L13 2z"/>
    </svg>
  ),
  spark: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  check: (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
};

/* ---------- AMBIENT LAYER (drifts behind everything) ---------- */
const Ambient = () => (
  <div className="ambient" aria-hidden="true">
    {/* tech grid */}
    <div className="amb-grid"></div>

    {/* drifting geometric primitives */}
    <span className="amb-shape amb-tri-1"></span>
    <span className="amb-shape amb-tri-2"></span>
    <span className="amb-shape amb-diamond-1"></span>
    <span className="amb-shape amb-diamond-2"></span>
    <span className="amb-shape amb-plus-1"></span>
    <span className="amb-shape amb-plus-2"></span>

    {/* floating blurred notification cards */}
    <div className="amb-note an-1">
      <span className="dot"></span>
      <span>Lock-in session started</span>
    </div>
    <div className="amb-note an-2">
      <span className="ic">⏱</span>
      <span>+45 min focused</span>
    </div>
    <div className="amb-note an-3">
      <span className="ic">🔥</span>
      <span>Streak: 7 days</span>
    </div>
    <div className="amb-note an-4">
      <span className="ic">★</span>
      <span>School rank: #2</span>
    </div>
    <div className="amb-note an-5">
      <span className="ic">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L14.5 9H22L16 13.5L18.5 21L12 16.5L5.5 21L8 13.5L2 9H9.5L12 2Z"
            fill="#fbbf24" stroke="#fbbf24" strokeWidth="1.2" strokeLinejoin="round"/>
        </svg>
      </span>
      <span>Badge unlocked</span>
    </div>

    {/* slow vertical scanbeam */}
    <div className="amb-beam"></div>
  </div>
);
const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("top");
  const [progress, setProgress] = useState(0);
  const [liveCount, setLiveCount] = useState(142);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);

      // active section
      const sections = ["how", "leaderboard", "badges"];
      const offset = 140;
      let current = "top";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top - offset <= 0) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // wobble the live count to feel alive
  useEffect(() => {
    const i = setInterval(() => {
      setLiveCount((c) => {
        const drift = Math.random() < 0.5 ? -1 : 1;
        return Math.max(120, Math.min(180, c + drift * (1 + Math.floor(Math.random() * 2))));
      });
    }, 2400);
    return () => clearInterval(i);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container inner">
        <a className="nav-brand" href="#top">
          <span className="brand-mark">
            <img src="praxis-icon-128.png" alt="Praxis" />
            <span className="brand-glow"></span>
          </span>
          <span>Praxis</span>
          <span className="brand-live"><span className="dot"></span>{liveCount} locked in</span>
        </a>
        <div className="nav-links">
          <a href="#how" className={active === "how" ? "is-active" : ""}>How it works</a>
          <a href="#leaderboard" className={active === "leaderboard" ? "is-active" : ""}>Leaderboard</a>
          <a href="#badges" className={active === "badges" ? "is-active" : ""}>Badges</a>
        </div>
        <a className="btn btn-primary nav-cta" href={CHROME_STORE_URL} target="_blank" rel="noreferrer">
          <span className="chrome-ic"></span>
          Add to Chrome
        </a>
      </div>
      <span className="nav-progress" style={{ transform: `scaleX(${progress / 100})` }}></span>
    </nav>
  );
};

/* ---------- LIVE LEADERBOARD (extension-shaped) ---------- */
const Leaderboard = () => {
  const [period, setPeriod] = useState("weekly");
  // Times are stored as milliseconds — extension format
  const rows = {
    daily: [
      { rank: 1, name: "maya.k",   color: "a2", time: 4 * 3600 * 1000 + 12 * 60 * 1000, live: true,  hour: "vanguard" },
      { rank: 2, name: "jonah_w",  color: "a3", time: 3 * 3600 * 1000 + 48 * 60 * 1000, live: false, hour: null },
      { rank: 3, name: "you",      color: "a1", time: 3 * 3600 * 1000 + 22 * 60 * 1000, live: true,  hour: null, you: true },
      { rank: 4, name: "sam.b",    color: "a4", time: 2 * 3600 * 1000 + 41 * 60 * 1000, live: false, hour: null },
      { rank: 5, name: "riya",     color: "a5", time: 1 * 3600 * 1000 + 58 * 60 * 1000, live: false, hour: "pillar" },
      { rank: 6, name: "noah.t",   color: "a6", time: 1 * 3600 * 1000 + 12 * 60 * 1000, live: false, hour: null }
    ],
    weekly: [
      { rank: 1, name: "maya.k",   color: "a2", time: 14 * 3600 * 1000 + 32 * 60 * 1000, live: true,  hour: "vanguard" },
      { rank: 2, name: "jonah_w",  color: "a3", time: 11 * 3600 * 1000 + 48 * 60 * 1000, live: false, hour: "vanguard" },
      { rank: 3, name: "you",      color: "a1", time:  9 * 3600 * 1000 + 24 * 60 * 1000, live: true,  hour: null, you: true },
      { rank: 4, name: "sam.b",    color: "a4", time:  7 * 3600 * 1000 +  0 * 60 * 1000, live: false, hour: null },
      { rank: 5, name: "riya",     color: "a5", time:  6 * 3600 * 1000 +  6 * 60 * 1000, live: false, hour: "pillar" },
      { rank: 6, name: "noah.t",   color: "a6", time:  4 * 3600 * 1000 + 18 * 60 * 1000, live: false, hour: null }
    ],
    total: [
      { rank: 1, name: "maya.k",   color: "a2", time: 142 * 3600 * 1000, live: true,  hour: "centurion" },
      { rank: 2, name: "jonah_w",  color: "a3", time:  78 * 3600 * 1000, live: false, hour: "pillar" },
      { rank: 3, name: "sam.b",    color: "a4", time:  64 * 3600 * 1000, live: false, hour: "pillar" },
      { rank: 7, name: "you",      color: "a1", time:  31 * 3600 * 1000, live: true,  hour: "vanguard", you: true, outOfTop: true }
    ]
  };

  const fmt = (ms) => {
    const min = Math.floor(ms / 60000);
    const h = Math.floor(min / 60);
    const m = min % 60;
    return h > 0 ? `${h}h ${m}m` : `${m}m`;
  };

  const data = rows[period];
  const inTop = data.filter(r => !r.outOfTop);
  const outOfTop = data.find(r => r.outOfTop);

  return (
    <div className="lb-card">
      <div className="lb-head">
        <div className="title">{Icon.trophy} Lock-In Leaderboard</div>
        <div className="lb-tabs">
          <button className={period === "daily"  ? "active" : ""} onClick={() => setPeriod("daily")}>Daily</button>
          <button className={period === "weekly" ? "active" : ""} onClick={() => setPeriod("weekly")}>Weekly</button>
          <button className={period === "total"  ? "active" : ""} onClick={() => setPeriod("total")}>All-Time</button>
        </div>
      </div>
      <div className="lb-body">
        {inTop.map((r) => {
          const medal = r.rank === 1 ? "🥇" : r.rank === 2 ? "🥈" : r.rank === 3 ? "🥉" : `#${r.rank}`;
          return (
            <div key={r.rank} className={`lb-entry rank-${r.rank} ${r.you ? "current-user" : ""}`}>
              <div className="lb-left">
                <span className={`lb-medal ${r.rank > 3 ? "rank-n" : ""}`}>{medal}</span>
                <span className={`lb-av ${r.color}`}>{r.name[0].toUpperCase()}</span>
                <span className="lb-name">
                  {r.name}
                  {r.you && <span className="you-tag">YOU</span>}
                  {r.hour && <span className={`hour-badge ${r.hour}`}>{r.hour.toUpperCase()}</span>}
                </span>
              </div>
              <div className="lb-time">
                {fmt(r.time)}
                {r.live && <span className="ago">● locked in now</span>}
              </div>
            </div>
          );
        })}
        {outOfTop && (
          <>
            <div className="lb-sep"><span>YOUR RANK</span></div>
            <div className={`lb-entry current-user`}>
              <div className="lb-left">
                <span className="lb-medal rank-n">#{outOfTop.rank}</span>
                <span className={`lb-av ${outOfTop.color}`}>{outOfTop.name[0].toUpperCase()}</span>
                <span className="lb-name">
                  {outOfTop.name}
                  <span className="you-tag">YOU</span>
                  {outOfTop.hour && <span className={`hour-badge ${outOfTop.hour}`}>{outOfTop.hour.toUpperCase()}</span>}
                </span>
              </div>
              <div className="lb-time">
                {fmt(outOfTop.time)}
                {outOfTop.live && <span className="ago">● locked in now</span>}
              </div>
            </div>
          </>
        )}
      </div>
      <div className="lb-foot">
        <a className="arr" href={CHROME_STORE_URL + "?utm_source=landing_leaderboard"} target="_blank" rel="noreferrer">Install to see your real board →</a>
      </div>
    </div>
  );
};

/* ---------- HERO TAG (rotating taglines + shimmer) ---------- */
const HERO_TAGS = [
  "A focus game for students",
  "Built by students, for students",
  "Beat your friends at locking in"
];
const HeroTag = () => {
  const [i, setI] = useState(0);
  const sizerRef = useRef(null);
  const [rotatorWidth, setRotatorWidth] = useState("auto");

  // Measure the current tagline width and smoothly resize the pill
  useEffect(() => {
    if (sizerRef.current) {
      setRotatorWidth(sizerRef.current.offsetWidth + "px");
    }
  }, [i]);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % HERO_TAGS.length), 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="hero-tag">
      <span className="badge-mini">NEW</span>
      <span className="tag-rotator" style={{ width: rotatorWidth, transition: "width 420ms cubic-bezier(0.4,0,0.2,1)" }}>
        {/* invisible sizer always shows the current tagline to drive width measurement */}
        <span ref={sizerRef} className="tag-sizer">{HERO_TAGS[i]}</span>
        {HERO_TAGS.map((t, idx) => (
          <span key={idx} className={`tag-line ${idx === i ? "is-active" : ""}`}>{t}</span>
        ))}
      </span>
      <span className="tag-spark"></span>
    </span>
  );
};

/* ---------- HERO ---------- */
const Hero = () => (
  <section className="hero" id="top">
    <div className="container grid">
      <div className="hero-copy">
        <HeroTag />
        <h1 className="hero-h1">
          <span className="line line-1">Turn focus into a <span className="game">game</span>.</span>
          <span className="line line-2"><span className="lockin-text">Lock In</span>.</span>
        </h1>
        <p className="sub">
          Praxis blocks distractions, tracks your lock-in time, and pits your study sessions against your friends'. Earn badges. Climb the board. Keep your streak alive.
        </p>
        <div className="cta-row">
          <a className="btn btn-primary btn-lg" href={CHROME_STORE_URL} target="_blank" rel="noreferrer">
            <span className="chrome-ic"></span>
            Add to Chrome — Free
            {Icon.arrow}
          </a>
          <a className="btn btn-ghost btn-lg" href="#how">
            {Icon.play} See how it works
          </a>
        </div>
      </div>
      <div className="hero-side">
        <Leaderboard />
        <div className="float-card fc-xp">
          <span className="icon ic-flame">
            <svg width="34" height="34" viewBox="0 0 64 64" fill="none">
              <circle cx="32" cy="32" r="24" fill="rgba(249,115,22,0.22)" stroke="#f97316" strokeWidth="2.4"/>
              <path d="M32 49C25 43 23 38 25 32C27 26 33 24 32 16C39 23 45 29 44 38C43 45 38 49 32 49Z" fill="#f97316" opacity="0.85"/>
              <path d="M32 43C29 40 28 37 30 34C31 31 34 30 34 26C38 31 39 35 38 38C37 41 35 43 32 43Z" fill="#fde68a"/>
            </svg>
          </span>
          <span className="label"><span>First Flame</span><small>BADGE UNLOCKED</small></span>
        </div>
        <div className="float-card fc-streak">
          <span className="icon">🔥</span>
          <span className="label"><span>7-day streak</span><small>+1 TODAY</small></span>
        </div>
      </div>
    </div>
  </section>
);

/* ---------- TRUST STRIP ---------- */
const useCountUp = (target, { duration = 1600, decimals = 0, start = false } = {}) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / duration);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return decimals > 0
    ? val.toFixed(decimals)
    : Math.round(val).toLocaleString();
};

const Trust = () => {
  const [start, setStart] = useState(false);
  useEffect(() => {
    const el = document.getElementById("trust-strip");
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { setStart(true); io.disconnect(); } });
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const students = useCountUp(549, { duration: 1400, start });
  const hours    = useCountUp(2011, { duration: 1800, start });
  const sessions = useCountUp(3342, { duration: 1600, start });
  const focus    = useCountUp(4.2, { duration: 1600, decimals: 1, start });

  return (
    <section className="trust" id="trust-strip">
      <div className="container inner">
        <div className="trust-item">
          <div className="big grad"><span className="num">{students}</span>+</div>
          <div className="cap">Students locked in</div>
        </div>
        <div className="trust-item">
          <div className="big"><span className="num">{hours}</span></div>
          <div className="cap">Hours focused</div>
        </div>
        <div className="trust-item">
          <div className="big"><span className="num">{sessions}</span></div>
          <div className="cap">Lock-In Sessions</div>
        </div>
        <div className="trust-item">
          <div className="big">+<span className="num">{focus}</span><span className="unit">h</span></div>
          <div className="cap">Avg. focus gained / wk</div>
        </div>
        <div className="trust-item">
          <div className="big">5<span className="star">★</span></div>
          <div className="cap">Chrome Web Store</div>
        </div>
      </div>
    </section>
  );
};

/* ---------- STEPS ---------- */
const Steps = () => {
  const [ref, inView] = useInView(0.2);
  return (
    <section className="section" id="how" ref={ref}>
      <div className="container">
        <div className={`section-head reveal ${inView ? "is-in" : ""}`}>
          <span className="section-num">02 · HOW IT WORKS</span>
          <h2>3 Steps. That's it.</h2>
          <p>No accounts to set up before you start. Click the extension, pick a duration, lock in. Earn badges, climb the board.</p>
        </div>

        <div className={`steps ${inView ? "is-in" : ""}`}>
        {/* Step 1 — Pick a duration (matches popup quick-select) */}
        <div className="step-card s1" data-num="01">
          <span className="step-tag"><span className="lvl">01</span><span>STEP <span className="of">/ 03</span></span></span>
          <h3>Pick a duration</h3>
          <p>20, 30, 45, 60, 90 — or set a custom length. Drop in what you're working on.</p>

          <div className="mock">
            <div className="mock-bar">
              <div className="left"><span className="dot"></span>LOCK-IN MODE</div>
              <span>QUICK SELECT</span>
            </div>
            <div className="chips">
              <span className="chip">20m</span>
              <span className="chip">30m</span>
              <span className="chip active">45m</span>
              <span className="chip">60m</span>
              <span className="chip">90m</span>
            </div>
            <div className="chip-start">Start Session</div>
          </div>
        </div>

        {/* Step 2 — Stay locked in */}
        <div className="step-card s2" data-num="02">
          <span className="step-tag"><span className="lvl">02</span><span>STEP <span className="of">/ 03</span></span></span>
          <h3>Stay locked in</h3>
          <p>Praxis blocks distractions across every tab. The harder the temptation, the harder to break it.</p>

          <div className="mock">
            <div className="mock-bar">
              <div className="left"><span className="dot" style={{background: "#fca5a5", boxShadow: "0 0 8px #fca5a5"}}></span>BLOCKING · 5 SITES</div>
            </div>
            <div className="blocklist">
              <div className="block-item"><span className="x">×</span><span className="url">tiktok.com</span></div>
              <div className="block-item"><span className="x">×</span><span className="url">youtube.com</span></div>
              <div className="block-item"><span className="x">×</span><span className="url">instagram.com</span></div>
              <div className="block-item"><span className="x">×</span><span className="url">x.com</span></div>
              <div className="block-item"><span className="x">×</span><span className="url">reddit.com</span></div>
            </div>
          </div>
        </div>

        {/* Step 3 — Earn badges + climb */}
        <div className="step-card s3" data-num="03">
          <span className="step-tag"><span className="lvl">03</span><span>STEP <span className="of">/ 03</span></span></span>
          <h3>Earn badges. Climb the board.</h3>
          <p>Every session unlocks badges and feeds your streak. Beat your friends. Get smug about it.</p>

          <div className="reward-stack">
            <div className="mini-badge">
              <span className="ic">{BadgeSVGs.firstFlame("#f97316","rgba(249,115,22,0.26)", true)}</span>
              <span className="nm">
                <strong>First Flame</strong>
                <span>1 hour of deep work</span>
              </span>
            </div>
            <div className="mini-streak">
              <span className="flame">🔥</span>
              <span className="copy">
                <strong>7 day streak</strong>
                <span>KINDLED TIER</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

/* ---------- LEADERBOARD DEEP DIVE (friends/clans) ---------- */
const ClanCard = () => (
  <div className="clan-card">
    <div className="clan-head">
      <div className="name">
        <div className="crest">CS</div>
        <div>
          <strong>Comp Sci Crew</strong>
          <span>8 members · since Oct</span>
        </div>
      </div>
      <span className="rank-pill">★ RANK 4 OF 23</span>
    </div>
    <div className="clan-members">
      <div className="clan-member">
        <span className="lb-av a2 live" style={{width: 32, height: 32}}>M</span>
        <span className="nm">maya.k <small>captain</small></span>
        <span className="status live">● Locked in</span>
        <span className="hrs">14h 32m <small>this week</small></span>
      </div>
      <div className="clan-member">
        <span className="lb-av a1" style={{width: 32, height: 32}}>Y</span>
        <span className="nm">you <small>just joined</small></span>
        <span className="status">on break</span>
        <span className="hrs">9h 24m <small>this week</small></span>
      </div>
      <div className="clan-member">
        <span className="lb-av a3 live" style={{width: 32, height: 32}}>J</span>
        <span className="nm">jonah_w <small>vanguard</small></span>
        <span className="status live">● Locked in</span>
        <span className="hrs">11h 48m <small>this week</small></span>
      </div>
      <div className="clan-member">
        <span className="lb-av a5" style={{width: 32, height: 32}}>R</span>
        <span className="nm">riya <small>pillar</small></span>
        <span className="status">offline · 2h ago</span>
        <span className="hrs">6h 06m <small>this week</small></span>
      </div>
    </div>
    <div className="clan-foot">
      <span>Combined this week: <strong>52h 14m</strong></span>
      <span style={{color: "var(--green-lt)"}}>↑ 12% vs last week</span>
    </div>
  </div>
);

const FriendsSection = () => {
  const [ref, inView] = useInView(0.25);
  return (
    <section className="section" id="leaderboard" style={{paddingTop: 32}} ref={ref}>
      <div className="container">
        <div className="feature-split">
          <div className="feature-copy">
            <span className="section-num">03 · FRIENDS &amp; CLANS</span>
            <h3 style={{marginTop: 12}}>Your friends are <span className="grad-text">locking in</span>. Right now.</h3>
            <p>Add friends with a code. Join a clan with your study group. The leaderboard updates live — and your rank moves the second a friend starts a session.</p>
            <ul className={`feature-bullets ${inView ? "is-in" : ""}`}>
              <li><span className="pin">{Icon.check}</span><span><strong>Friend-only by default.</strong> No randoms. No global noise.</span></li>
              <li><span className="pin">{Icon.check}</span><span><strong>Clan rankings.</strong> Your group vs. theirs, by combined hours.</span></li>
              <li><span className="pin">{Icon.check}</span><span><strong>Live status.</strong> See who's locked in right now, who's on break, who's slacking.</span></li>
              <li><span className="pin">{Icon.check}</span><span><strong>Daily, weekly, all-time.</strong> Switch the lens. The grind is always visible.</span></li>
            </ul>
          </div>
          <ClanCard />
        </div>
      </div>
    </section>
  );
};

/* ---------- BADGES ---------- */
const BADGES = [
  { key: "first-flame",   cls: "c-first-flame",   svg: BadgeSVGs.firstFlame,    color: "#f97316", cL: "rgba(249,115,22,0.26)",  name: "First Flame",     req: "1 hour deep work",    rarity: "COMMON" },
  { key: "vanguard",      cls: "c-vanguard",      svg: BadgeSVGs.vanguard,      color: "#10b981", cL: "rgba(16,185,129,0.25)",  name: "Vanguard",        req: "20 hours total",      rarity: "COMMON" },
  { key: "deep-work",     cls: "c-deep-work",     svg: BadgeSVGs.deepWorkDay,   color: "#14b8a6", cL: "rgba(20,184,166,0.25)",  name: "Deep Work Day",   req: "5h in one day",       rarity: "RARE" },
  { key: "streakstarter", cls: "c-streakstarter", svg: BadgeSVGs.streakstarter, color: "#ef4444", cL: "rgba(239,68,68,0.25)",   name: "Streakstarter",   req: "3 days in a row",     rarity: "COMMON" },
  { key: "pillar",        cls: "c-pillar",        svg: BadgeSVGs.pillar,        color: "#3b82f6", cL: "rgba(59,130,246,0.25)",  name: "Pillar",          req: "50 hours total",      rarity: "RARE" },
  { key: "long-haul",     cls: "c-long-haul",     svg: BadgeSVGs.longHaul,      color: "#0ea5e9", cL: "rgba(14,165,233,0.25)",  name: "The Long Haul",   req: "8h in one day",       rarity: "RARE" },
  { key: "iron-routine",  cls: "c-iron-routine",  svg: BadgeSVGs.ironRoutine,   color: "#94a3b8", cL: "rgba(148,163,184,0.25)", name: "Iron Routine",    req: "7 days in a row",     rarity: "RARE" },
  { key: "podium",        cls: "c-podium",        svg: BadgeSVGs.podiumRegular, color: "#eab308", cL: "rgba(234,179,8,0.26)",   name: "Podium Regular",  req: "Top 3 · 10x",         rarity: "RARE"},
  { key: "ember-30",      cls: "c-ember-30",      svg: BadgeSVGs.ember30,       color: "#f43f5e", cL: "rgba(244,63,94,0.25)",   name: "30-Day Ember",    req: "30 days in a row",    rarity: "LEGENDARY"},
  { key: "centurion",     cls: "c-centurion",     svg: BadgeSVGs.centurion,     color: "#dc2626", cL: "rgba(220,38,38,0.35)",   name: "Centurion",       req: "100 hours total",     rarity: "LEGENDARY"},
  { key: "sovereign",     cls: "c-sovereign",     svg: BadgeSVGs.sovereign,     color: "#f59e0b", cL: "rgba(245,158,11,0.25)",  name: "Sovereign",       req: "200 hours total",     rarity: "LEGENDARY"},
  { key: "pantheon",      cls: "c-pantheon",      svg: BadgeSVGs.pantheon,      color: "#a78bfa", cL: "rgba(167,139,250,0.25)", name: "Pantheon",        req: "500 hours total",     rarity: "MYTHIC"},
  { key: "apex",          cls: "c-apex",          svg: BadgeSVGs.apex,          color: "#8254ee", cL: "rgba(130,84,238,0.22)",  name: "Apex: Daily Zenith", req: "#1 globally for a day", rarity: "MYTHIC"},
  { key: "founders",      cls: "c-founders",      svg: (c, cL, e) => BadgeSVGs.founders("#c9a227", e),   color: "#f59e0b", cL: "rgba(245,158,11,0.30)",  name: "Founders",        req: "First 100 users",     rarity: "FOUNDING"}
];

const Badges = () => {
  // split into two rows for opposing-direction marquee
  const row1 = BADGES.slice(0, 7);
  const row2 = BADGES.slice(7);
  // duplicate each row for seamless infinite loop
  const dup = (arr) => [...arr, ...arr];

  return (
    <section className="section" id="badges">
      <div className="container badge-wrap">
        <div className="section-head">
          <span className="section-num">04 · BADGES</span>
          <h2>14 badges to flex.</h2>
          <p>Every milestone unlocks a real badge that shows on your profile and next to your name on the leaderboard. Some are easy. Some take 500 hours.</p>
        </div>
      </div>

      {/* Marquee bleeds full-width past the container */}
      <div className="badge-marquee">
        <div className="marquee-track track-left">
          {dup(row1).map((b, i) => (
            <div key={`r1-${i}`} className={`b ${b.cls} ${b.locked ? "locked" : ""}`}>
              <span className="ic">{b.svg(b.color, b.cL, !b.locked)}</span>
              <span className="nm">{b.name}</span>
              <span className="req">{b.req}</span>
            </div>
          ))}
        </div>
        <div className="marquee-track track-right">
          {dup(row2).map((b, i) => (
            <div key={`r2-${i}`} className={`b ${b.cls} ${b.locked ? "locked" : ""}`}>
              <span className="ic">{b.svg(b.color, b.cL, !b.locked)}</span>
              <span className="nm">{b.name}</span>
              <span className="req">{b.req}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- STREAK SHOWCASE ---------- */
const TierFlame = ({ color }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M12 2C13 7 18 9 18 14C18 17.31 15.31 20 12 20C8.69 20 6 17.31 6 14C6 11 8 9 9 6C9 9 12 9 12 2Z"
      fill={color} stroke="rgba(255,255,255,0.45)" strokeWidth="0.6" strokeLinejoin="round"/>
    <path d="M12 17C10.5 15.5 10 13.8 11 12.2C12 10.5 13.2 10 13 7.5C15.2 10.2 16 12.2 15.5 14C15 16 13.5 17.3 12 17Z"
      fill="rgba(255,255,255,0.55)"/>
  </svg>
);

const StreakBand = () => (
  <section className="section">
    <div className="container">
      <div className="streak-band">
        <div className="streak-copy">
          <span className="section-num">05 · STREAKS</span>
          <h3 style={{marginTop: 14}}>Don't break the <span className="fire-text">flame</span>.</h3>
          <p>Lock in once a day and your streak grows. The longer it runs, the rarer your tier — and the brighter the fire burns next to your name on the board.</p>
          <div className="tier-ladder">
            <div className="tier-step t1">
              <span className="flame-ic"><TierFlame color="#fb923c" /></span>
              <span className="days">1<small>d</small></span>
              <span className="nm">Ember</span>
            </div>
            <div className="tier-step t2">
              <span className="flame-ic"><TierFlame color="#fbbf24" /></span>
              <span className="days">3<small>d</small></span>
              <span className="nm">Kindled</span>
            </div>
            <div className="tier-step t3">
              <span className="flame-ic"><TierFlame color="#38bdf8" /></span>
              <span className="days">7<small>d</small></span>
              <span className="nm">Blue</span>
            </div>
            <div className="tier-step t4">
              <span className="flame-ic"><TierFlame color="#a78bfa" /></span>
              <span className="days">14<small>d</small></span>
              <span className="nm">Violet</span>
            </div>
            <div className="tier-step t5">
              <span className="flame-ic"><TierFlame color="#fff7ed" /></span>
              <span className="days">30<small>d</small></span>
              <span className="nm">Wildfire</span>
            </div>
          </div>
        </div>
        <div className="big-streak v-violet">
          <span className="flame">
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C13 7 18 9 18 14C18 17.31 15.31 20 12 20C8.69 20 6 17.31 6 14C6 11 8 9 9 6C9 9 12 9 12 2Z"
                fill="#a78bfa" stroke="rgba(255,255,255,0.55)" strokeWidth="0.6" strokeLinejoin="round"/>
              <path d="M12 17C10.5 15.5 10 13.8 11 12.2C12 10.5 13.2 10 13 7.5C15.2 10.2 16 12.2 15.5 14C15 16 13.5 17.3 12 17Z"
                fill="#ddd6fe"/>
            </svg>
          </span>
          <span className="copy">
            <span className="n">23</span>
            <span className="l">DAY STREAK · VIOLET TIER</span>
          </span>
        </div>
      </div>
    </div>
  </section>
);

/* ---------- HARDCORE ---------- */
const Hardcore = () => (
  <section className="section" id="hardcore" style={{paddingTop: 0}}>
    <div className="container">
      <div className="hardcore">
        <span className="glyph">🔥</span>
        <div>
          <h3>Hardcore Mode</h3>
          <p>Block sites 24/7 — not just during sessions. For when your future self knows what's good for you, and your present self can't be trusted.</p>
        </div>
        <span className="switch" aria-label="hardcore toggle on"></span>
      </div>
    </div>
  </section>
);

/* ---------- TESTIMONIALS ---------- */
const TESTIMONIALS = [
  {
    quote: "I used to lose 3 hours a day to TikTok between classes. Now I lose at the leaderboard to my roommate instead — but my GPA is up 0.7.",
    name: "Maya K.",
    handle: "@maya.k",
    school: "CS Sophomore · Berkeley",
    av: "M", avCls: "a2",
    hours: "142h", streak: 23
  },
  {
    quote: "Praxis is the only productivity thing my friends actually use. We started a clan, now we're ranked #4 in our school. It's stupid how motivating that is.",
    name: "Jonah W.",
    handle: "@jonah_w",
    school: "Pre-Med · Michigan",
    av: "J", avCls: "a3",
    hours: "78h", streak: 14
  },
  {
    quote: "Other focus apps feel like punishment. Praxis feels like a game I want to win. Earned 8 badges in my first two weeks and I'm not stopping.",
    name: "Riya P.",
    handle: "@riya",
    school: "Econ Junior · NYU",
    av: "R", avCls: "a5",
    hours: "64h", streak: 9
  }
];

const Testimonials = () => {
  const [ref, inView] = useInView(0.15);
  return (
    <section className="section testimonials" ref={ref}>
      <div className="container">
        <div className={`section-head reveal ${inView ? "is-in" : ""}`}>
          <span className="section-num">06 · WHAT THEY SAY</span>
          <h2>Students who locked&nbsp;in.</h2>
          <p>Real students. Real hours. Real bragging rights.</p>
        </div>

        <div className={`testimonial-grid ${inView ? "is-in" : ""}`}>
          {TESTIMONIALS.map((t, i) => (
            <figure key={i} className={`t-card t-${i + 1}`}>
              <span className="t-quote-mark" aria-hidden="true">"</span>
              <blockquote className="t-quote">{t.quote}</blockquote>
              <figcaption className="t-foot">
                <span className={`t-av lb-av ${t.avCls}`}>{t.av}</span>
                <span className="t-meta">
                  <strong>{t.name}</strong>
                  <span className="t-school">{t.school}</span>
                </span>
                <span className="t-stats">
                  <span className="t-hours">{t.hours}</span>
                  <span className="t-streak">🔥 {t.streak}d</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
const Final = () => {
  const [ref, inView] = useInView(0.25);
  return (
    <section className="final" id="cta" ref={ref}>
      {/* animated background layers */}
      <div className="final-bg">
        <div className="grid-floor"></div>
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="scanlines"></div>
      </div>

      <div className="container">
        <h2 className={`final-h2 ${inView ? "is-in" : ""}`}>
          <span className="ln ln-1">Your friends are</span>
          <span className="ln ln-2"><span className="lockin-mega">locking in</span>.</span>
          <span className="ln ln-3">Your move.</span>
        </h2>
        <div className={`final-cta reveal ${inView ? "is-in" : ""}`}>
          <a className="btn btn-primary btn-mega" href={CHROME_STORE_URL} target="_blank" rel="noreferrer">
            <span className="chrome-ic"></span>
            Add Praxis to Chrome
            {Icon.arrow}
          </a>
          <div className="meta">
            <span>FREE FOREVER</span><span className="sep">◆</span>
            <span>30-SECOND INSTALL</span><span className="sep">◆</span>
            <span>NO SIGNUP TO START</span>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------- FOOTER ---------- */
const Footer = () => (
  <footer className="foot">
    <div className="container inner">
      <span className="left">
        <img src="praxis-icon-128.png" alt="" />
        © PRAXIS 2026 · MADE BY STUDENTS, FOR STUDENTS
      </span>
      <div className="links">
        <a href="https://sunnysamuelma.github.io/praxis-extension/privacy-policy.html" target="_blank" rel="noreferrer">PRIVACY</a>
        <a href="mailto:praxisfocus.mp4@gmail.com">CONTACT</a>
        <a href="https://instagram.com/praxis.mp4" target="_blank" rel="noreferrer">@PRAXIS.MP4</a>
      </div>
    </div>
  </footer>
);

/* ---------- ROOT ---------- */
const App = () => (
  <div>
    <Ambient />
    <Nav />
    <Hero />
    <Trust />
    <Steps />
    <FriendsSection />
    <Badges />
    <StreakBand />
    <Testimonials />
    <Final />
    <Footer />
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
