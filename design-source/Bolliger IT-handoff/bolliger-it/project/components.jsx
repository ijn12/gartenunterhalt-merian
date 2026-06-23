// ---------- Shared primitives ----------

const PillButton = ({ children, variant = 'dark', size = 'md', href = '#', icon = true, onClick }) => {
  const sizes = {
    sm: { padding: '10px 18px 10px 22px', fontSize: 13, gap: 10 },
    md: { padding: '14px 22px 14px 28px', fontSize: 14, gap: 12 },
    lg: { padding: '18px 28px 18px 34px', fontSize: 15, gap: 14 },
  };
  const variants = {
    dark: { background: 'var(--btn)', color: '#fff', border: '1px solid var(--btn)' },
    ghost: { background: 'transparent', color: 'var(--ink)', border: '1px solid var(--ink)' },
    light: { background: '#fff', color: 'var(--ink)', border: '1px solid var(--line)' },
    orange: { background: 'var(--orange)', color: '#fff', border: '1px solid var(--orange)' },
  };
  const s = sizes[size];
  const v = variants[variant];
  return (
    <a href={href} onClick={onClick}
      className="pill-btn"
      style={{
        display: 'inline-flex', alignItems: 'center', gap: s.gap,
        padding: s.padding, fontSize: s.fontSize, fontWeight: 500,
        letterSpacing: '-0.005em',
        borderRadius: 999, ...v,
        transition: 'transform .2s ease, background .2s ease, color .2s ease, box-shadow .25s ease',
        cursor: 'pointer', whiteSpace: 'nowrap',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-1px)';
        if (variant === 'dark') e.currentTarget.style.background = 'var(--btn-hover)';
        e.currentTarget.style.boxShadow = '0 8px 24px -10px rgba(0,0,0,.25)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        if (variant === 'dark') e.currentTarget.style.background = 'var(--btn)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <span>{children}</span>
      {icon && (
        <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }} className="pill-arrow">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3.5 8h9M8.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      )}
    </a>
  );
};

// Wordmark — original take on the Bolliger IT logo (own brand).
const Wordmark = ({ tagline = true, size = 'md', invert = false }) => {
  const scale = size === 'sm' ? 0.85 : size === 'lg' ? 1.25 : 1;
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', lineHeight: 1, alignItems: 'flex-start' }}>
      <div style={{
        fontWeight: 600, fontSize: 22 * scale, letterSpacing: '-0.025em',
        color: invert ? '#fff' : 'var(--ink)', display: 'flex', alignItems: 'baseline', gap: 6 * scale,
      }}>
        <span>Bolliger</span>
        <span style={{ color: 'var(--orange)', fontWeight: 700 }}>IT</span>
      </div>
      {tagline && (
        <div className="mono" style={{
          fontSize: 9.5 * scale, letterSpacing: '0.18em', textTransform: 'uppercase',
          color: invert ? 'rgba(255,255,255,.7)' : 'var(--ink-3)', marginTop: 5 * scale,
        }}>
          PC&nbsp;·&nbsp;Beratung&nbsp;·&nbsp;Service
        </div>
      )}
    </div>
  );
};

// ---------- Header ----------

const Header = ({ onContact }) => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const nav = [
    { label: 'Hauptseite', href: '#top', active: true },
    { label: 'Über uns', href: '#ueber' },
    { label: 'Dienstleistungen', href: '#services' },
    { label: 'Kontaktformular', href: '#kontakt' },
  ];

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: scrolled ? 'rgba(250,250,246,.85)' : 'transparent',
      backdropFilter: scrolled ? 'saturate(180%) blur(14px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'saturate(180%) blur(14px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
      transition: 'background .25s ease, border-color .25s ease',
    }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto',
        padding: '18px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32,
      }}>
        <a href="#top" style={{ display: 'inline-flex' }}>
          <Wordmark size="md" />
        </a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {nav.map((n) => (
            <a key={n.label} href={n.href}
              style={{
                padding: '8px 14px', fontSize: 14, fontWeight: 500,
                color: n.active ? 'var(--ink)' : 'var(--ink-3)',
                borderRadius: 999, transition: 'color .15s, background .15s',
                position: 'relative', whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--ink)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = n.active ? 'var(--ink)' : 'var(--ink-3)'; }}
            >
              {n.label}
              {n.active && (
                <span style={{
                  position: 'absolute', bottom: 2, left: '50%', transform: 'translateX(-50%)',
                  width: 4, height: 4, borderRadius: 999, background: 'var(--orange)',
                }} />
              )}
            </a>
          ))}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a href="tel:+41" className="mono hide-md" style={{
            fontSize: 12, color: 'var(--ink-3)', letterSpacing: '0.04em', whiteSpace: 'nowrap',
          }}>+41 79 000 00 00</a>
          <PillButton href="#kontakt" size="sm">Termin anfragen</PillButton>
        </div>
      </div>
    </header>
  );
};

// ---------- Countdown ----------

const useCountdown = (target) => {
  const [t, setT] = React.useState(() => computeDelta(target));
  React.useEffect(() => {
    const id = setInterval(() => setT(computeDelta(target)), 1000);
    return () => clearInterval(id);
  }, [target]);
  return t;
};
function computeDelta(target) {
  const ms = Math.max(0, target - Date.now());
  const d = Math.floor(ms / 86400000);
  const h = Math.floor((ms % 86400000) / 3600000);
  const m = Math.floor((ms % 3600000) / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  return { d, h, m, s };
}

const CountdownChip = ({ label, value }) => (
  <div style={{
    display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8,
    padding: '14px 18px', minWidth: 96,
    background: '#fff', border: '1px solid var(--line)', borderRadius: 14,
  }}>
    <div className="mono" style={{ fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>{label}</div>
    <div style={{ fontSize: 32, fontWeight: 500, letterSpacing: '-0.04em', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>
      {String(value).padStart(2, '0')}
    </div>
  </div>
);

// ---------- Hero ----------

const Hero = ({ accent }) => {
  // Target: August 15, 2026
  const target = React.useMemo(() => new Date('2026-08-15T09:00:00').getTime(), []);
  const t = useCountdown(target);

  return (
    <section id="top" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* soft blue accent wash */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(60% 80% at 85% 10%, rgba(30,150,212,0.10), transparent 60%), radial-gradient(50% 70% at 0% 100%, rgba(243,146,0,0.06), transparent 60%)',
      }} />
      <div style={{
        position: 'relative', maxWidth: 1280, margin: '0 auto',
        padding: '64px 40px 96px',
        display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 64, alignItems: 'center',
      }}>
        {/* Left: copy */}
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 28,
            padding: '6px 12px 6px 8px', background: '#fff', border: '1px solid var(--line)', borderRadius: 999,
          }}>
            <span style={{ width: 8, height: 8, borderRadius: 999, background: 'var(--orange)', boxShadow: '0 0 0 4px rgba(243,146,0,.15)' }} />
            <span className="mono" style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-2)' }}>
              Eröffnung · August 2026
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(48px, 6vw, 84px)', lineHeight: 0.98, letterSpacing: '-0.035em',
            margin: '0 0 24px', fontWeight: 500, color: 'var(--ink)',
          }}>
            Reparieren{' '}
            <span className="serif" style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--ink-2)' }}>statt</span>{' '}
            <br />
            wegwerfen.
          </h1>

          <p style={{
            fontSize: 18, lineHeight: 1.5, color: 'var(--ink-2)', maxWidth: 460, margin: '0 0 36px',
          }}>
            Technische Hilfe aus einer Hand. Mit über 30&nbsp;Jahren Erfahrung in
            Multimedia und IT verlängert Bolliger&nbsp;IT das Leben deiner Technik —
            ehrlich, persönlich, unabhängig.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
            <PillButton href="#kontakt" size="lg">Kontaktiere uns</PillButton>
            <PillButton href="#services" variant="ghost" size="lg" icon={false}>Dienstleistungen ansehen</PillButton>
          </div>

          {/* Reassurance row */}
          <div style={{
            marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24, paddingTop: 28, borderTop: '1px solid var(--line)',
          }}>
            {[
              ['30+', 'Jahre Erfahrung'],
              ['1998', 'In der IT seit'],
              ['1:1', 'Mensch zu Mensch'],
            ].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontSize: 28, fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 1 }}>{n}</div>
                <div className="mono" style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-3)', marginTop: 8 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: countdown card + image placeholder */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{
            background: '#fff', border: '1px solid var(--line)', borderRadius: 22, padding: 28,
            boxShadow: '0 1px 0 rgba(0,0,0,.02), 0 24px 60px -32px rgba(15,111,163,.18)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
              <div>
                <div className="mono" style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>Grand Opening</div>
                <div style={{ fontSize: 22, fontWeight: 500, letterSpacing: '-0.02em', marginTop: 4 }}>15. August 2026</div>
              </div>
              <div style={{
                width: 44, height: 44, borderRadius: 12, background: 'var(--orange-soft)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M8 2v3M16 2v3M3.5 9h17M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" stroke="#B36A00" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
              <CountdownChip label="Tage" value={t.d} />
              <CountdownChip label="Std" value={t.h} />
              <CountdownChip label="Min" value={t.m} />
              <CountdownChip label="Sek" value={t.s} />
            </div>
            <div style={{
              marginTop: 22, padding: '14px 16px', borderRadius: 12,
              background: 'linear-gradient(180deg, #F4FAFE 0%, #ECF5FC 100%)',
              border: '1px solid #DDEAF4', display: 'flex', alignItems: 'center', gap: 12,
            }}>
              <span className="mono" style={{ fontSize: 11, color: 'var(--blue-deep)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Status</span>
              <span style={{ fontSize: 13, color: 'var(--ink-2)' }}>Werkstatt wird eingerichtet — Anfragen jetzt möglich</span>
            </div>
          </div>

          {/* Soft image placeholder card */}
          <div style={{
            position: 'relative', borderRadius: 22, overflow: 'hidden',
            border: '1px solid var(--line)',
            aspectRatio: '16 / 9',
            background: 'repeating-linear-gradient(135deg, #F3F1EA 0 12px, #ECEAE2 12px 24px)',
          }}>
            <div style={{
              position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: 6, color: 'var(--ink-3)',
            }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="5" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.4"/>
                <path d="M3 16l4-4 3 3 5-5 6 6" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
                <circle cx="9" cy="10" r="1.2" fill="currentColor"/>
              </svg>
              <div className="mono" style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                Werkstatt-Foto folgt
              </div>
            </div>
            <div style={{
              position: 'absolute', top: 12, left: 12,
              padding: '4px 10px', borderRadius: 999,
              background: 'rgba(255,255,255,.85)', backdropFilter: 'blur(6px)',
              border: '1px solid var(--line)',
            }} className="mono">
              <span style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>Platzhalter · 1600×900</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ---------- About ----------

const About = () => {
  return (
    <section id="ueber" style={{ background: '#fff', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto', padding: '120px 40px',
        display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 80, alignItems: 'center',
      }}>
        <div>
          <div className="mono" style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 18 }}>
            ◦ Wer ist Bolliger IT
          </div>
          <h2 style={{
            fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1.02, letterSpacing: '-0.03em',
            margin: '0 0 28px', fontWeight: 500,
          }}>
            Ein Techniker.<br />
            <span className="serif" style={{ fontStyle: 'italic', color: 'var(--ink-2)' }}>Eine Werkstatt.</span><br />
            Volle Verantwortung.
          </h2>
          <p style={{ fontSize: 17, color: 'var(--ink-2)', lineHeight: 1.6, maxWidth: 480, margin: '0 0 20px' }}>
            Hinter Bolliger&nbsp;IT steht Roger Bolliger. Nach meiner Lehre als
            Audio-Video-Elektroniker bin ich 1998 in die IT gewechselt. Ich habe
            einige Jahre ein Informatikgeschäft geleitet, bis ich krankheitsbedingt
            kürzertreten musste.
          </p>
          <p style={{ fontSize: 17, color: 'var(--ink-2)', lineHeight: 1.6, maxWidth: 480, margin: '0 0 36px' }}>
            Nach wie vor bin ich mit Herz und Seele technikbegeistert. Meine
            langjährige Erfahrung möchte ich gerne an meine Kunden weitergeben.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <PillButton href="#kontakt" size="md">Mit Roger sprechen</PillButton>
            <span className="mono" style={{ fontSize: 12, color: 'var(--ink-3)' }}>Antwort i.&nbsp;d.&nbsp;R. innert 24h</span>
          </div>
        </div>

        {/* Right: portrait placeholder + signature card */}
        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'relative', borderRadius: 24, overflow: 'hidden',
            border: '1px solid var(--line)', aspectRatio: '4 / 5',
            background: 'linear-gradient(180deg, #F1EEE5 0%, #E8E4D8 100%)',
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,.08) 1px, transparent 0)',
              backgroundSize: '14px 14px', opacity: 0.5,
            }}/>
            <div style={{
              position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: 10, color: 'var(--ink-3)',
            }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.4"/>
                <path d="M3 21c1.5-4.5 5-7 9-7s7.5 2.5 9 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
              <div className="mono" style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                Porträt Roger · folgt
              </div>
            </div>

            {/* signature chip */}
            <div style={{
              position: 'absolute', left: 20, bottom: 20,
              background: 'rgba(255,255,255,.92)', backdropFilter: 'blur(8px)',
              border: '1px solid var(--line)', borderRadius: 14,
              padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12, maxWidth: 320,
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: 999, background: 'var(--blue)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
                fontWeight: 600, fontSize: 14, letterSpacing: '-0.02em',
              }}>RB</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 500, letterSpacing: '-0.01em' }}>Roger Bolliger</div>
                <div className="mono" style={{ fontSize: 10.5, letterSpacing: '0.1em', color: 'var(--ink-3)', textTransform: 'uppercase' }}>Inhaber & Techniker</div>
              </div>
            </div>
          </div>

          {/* floating quote tag */}
          <div style={{
            position: 'absolute', top: 24, right: -16,
            background: 'var(--ink)', color: '#fff',
            padding: '12px 16px', borderRadius: 12,
            fontSize: 13, lineHeight: 1.35, maxWidth: 220,
            boxShadow: '0 12px 30px -10px rgba(0,0,0,.25)',
          }}>
            <span className="serif" style={{ fontStyle: 'italic', fontSize: 15 }}>"Technik soll Menschen dienen — nicht umgekehrt."</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// ---------- Services ----------

// Simple inline icons for each service
const Icon = {
  Home: (p) => (<svg {...p} viewBox="0 0 24 24" fill="none"><path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1v-9Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>),
  Desktop: (p) => (<svg {...p} viewBox="0 0 24 24" fill="none"><rect x="2.5" y="4" width="19" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M9 21h6M12 17v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>),
  Mobile: (p) => (<svg {...p} viewBox="0 0 24 24" fill="none"><rect x="7" y="2.5" width="10" height="19" rx="2.5" stroke="currentColor" strokeWidth="1.5"/><path d="M11 18.5h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>),
  Gaming: (p) => (<svg {...p} viewBox="0 0 24 24" fill="none"><path d="M6 8h12a4 4 0 0 1 4 4v3a3 3 0 0 1-5.4 1.8L15 14H9l-1.6 2.8A3 3 0 0 1 2 15v-3a4 4 0 0 1 4-4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M8 11v2M7 12h2M15 12h.01M17 12h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>),
  Wrench: (p) => (<svg {...p} viewBox="0 0 24 24" fill="none"><path d="M14.5 3a5 5 0 0 1 4.9 6.1l2.6 2.6-2.3 2.3-2.6-2.6A5 5 0 0 1 11 9.5L5 15.5 8.5 19l6-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"/></svg>),
  Heart: (p) => (<svg {...p} viewBox="0 0 24 24" fill="none"><path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>),
};

const services = [
  {
    n: '01',
    icon: 'Home',
    title: 'Vor-Ort-Service',
    desc: 'Gerne löse ich deine Probleme rund um PC, Notebook, Drucker, Internet, E-Mail, Telekom-Abos, WLAN und NAS — direkt bei dir vor Ort.',
    items: ['Hausbesuch in der Region', 'Privat & KMU', 'Termin nach Absprache'],
  },
  {
    n: '02',
    icon: 'Desktop',
    title: 'PC-Service im Geschäft',
    desc: 'Ich bringe deine Geräte wie PCs, Drucker, Router, NAS, Modems oder TV-Boxen in der Werkstatt wieder in Schuss.',
    items: ['Diagnose vor Ort', 'Fester Kostenrahmen', 'Geprüfte Übergabe'],
  },
  {
    n: '03',
    icon: 'Mobile',
    title: 'Mobile Geräte',
    desc: 'Grundlegende Hilfe für Apps, E-Mail, Updates und Cloud — für iPhones, iPads, Android-Smartphones und Tablets.',
    items: ['iOS · Android', 'Einrichtung & Backup', 'Verständlich erklärt'],
  },
  {
    n: '04',
    icon: 'Gaming',
    title: 'PC Gaming',
    desc: 'Beratung, Support und Aufrüstung für Gaming-PCs — von klassischer Luftkühlung bis zur Custom-Wasserkühlung.',
    items: ['Konfiguration', 'Upgrade & Tuning', 'Custom Loops'],
  },
  {
    n: '05',
    icon: 'Wrench',
    title: 'Allgemeine Reparaturen',
    desc: 'Stecker lose, Kabel ab — ich repariere und löte auch kleinere Probleme an technischen Geräten aller Art.',
    items: ['Löten & Anschlüsse', 'Audio · Video', 'Sorgfältige Arbeit'],
  },
  {
    n: '06',
    icon: 'Heart',
    title: 'Beratung mit Herz',
    desc: 'Bei technischen Fragen — neue Programme, Providerwechsel, Abo-Wechsel, WLAN, Handy-Abos — helfe ich gerne und unabhängig.',
    items: ['Hersteller-unabhängig', 'Ohne Verkaufsdruck', 'Auf deiner Seite'],
  },
];

const ServiceCard = ({ s }) => {
  const IconComp = Icon[s.icon];
  return (
    <div style={{
      background: '#fff', border: '1px solid var(--line)', borderRadius: 22,
      padding: '28px 28px 26px',
      display: 'flex', flexDirection: 'column', gap: 16,
      transition: 'transform .2s ease, box-shadow .25s ease, border-color .2s ease',
      cursor: 'pointer', height: '100%',
    }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 24px 50px -28px rgba(0,0,0,.18)';
        e.currentTarget.style.borderColor = '#D9D6CC';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.borderColor = 'var(--line)';
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div style={{
          width: 44, height: 44, borderRadius: 12,
          background: 'var(--orange-soft)', color: '#7A4400',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {IconComp && <IconComp width="22" height="22" />}
        </div>
        <span className="mono" style={{ fontSize: 11, color: 'var(--ink-3)', letterSpacing: '0.14em' }}>{s.n}</span>
      </div>
      <h3 style={{
        fontSize: 22, fontWeight: 500, letterSpacing: '-0.02em',
        margin: 0, lineHeight: 1.1,
      }}>{s.title}</h3>
      <p style={{ fontSize: 14.5, color: 'var(--ink-2)', lineHeight: 1.55, margin: 0 }}>{s.desc}</p>
      <ul style={{ margin: 'auto 0 0', padding: '14px 0 0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, borderTop: '1px solid var(--line-2)' }}>
        {s.items.map((it) => (
          <li key={it} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'var(--ink-2)' }}>
            <span style={{ width: 5, height: 5, borderRadius: 999, background: 'var(--orange)' }} />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" style={{ background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '120px 40px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 40, marginBottom: 56, flexWrap: 'wrap' }}>
          <div>
            <div className="mono" style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 18 }}>
              ◦ Dienstleistungen
            </div>
            <h2 style={{
              fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1.02, letterSpacing: '-0.03em',
              margin: 0, fontWeight: 500, maxWidth: 720,
            }}>
              Dienstleistungen von <span className="serif" style={{ fontStyle: 'italic', color: 'var(--ink-2)' }}>Bolliger&nbsp;IT</span>.
            </h2>
          </div>
          <PillButton href="#kontakt" variant="ghost" size="md">Anfrage stellen</PillButton>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {services.map((s) => <ServiceCard key={s.n} s={s} />)}
        </div>
      </div>
    </section>
  );
};

// ---------- Technische Hilfe (full-bleed CTA strip) ----------

const TechnischeHilfe = () => (
  <section style={{
    position: 'relative', overflow: 'hidden',
    background: 'linear-gradient(135deg, #0F6FA3 0%, #1E96D4 60%, #2BA6E0 100%)',
    color: '#fff',
  }}>
    {/* circuit-board texture */}
    <svg aria-hidden width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.18, mixBlendMode: 'soft-light' }}>
      <defs>
        <pattern id="circuit" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M0 20h30v-20M40 0v30h40M0 60h20v20M40 80v-20h40M60 40h20" stroke="#fff" strokeWidth="1" fill="none" />
          <circle cx="30" cy="20" r="2.5" fill="#fff" />
          <circle cx="40" cy="30" r="2.5" fill="#fff" />
          <circle cx="20" cy="60" r="2.5" fill="#fff" />
          <circle cx="60" cy="40" r="2.5" fill="#fff" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit)" />
    </svg>

    <div style={{
      position: 'relative', maxWidth: 1280, margin: '0 auto',
      padding: '100px 40px', display: 'flex', flexDirection: 'column',
      alignItems: 'center', textAlign: 'center', gap: 28,
    }}>
      <div style={{
        width: 72, height: 72, borderRadius: 999,
        background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.25)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(8px)',
      }}>
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
          <path d="M14.5 3a5 5 0 0 1 4.9 6.1l2.6 2.6-2.3 2.3-2.6-2.6A5 5 0 0 1 11 9.5L5 15.5 8.5 19l6-6" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round"/>
        </svg>
      </div>
      <h2 style={{
        fontSize: 'clamp(36px, 4.5vw, 60px)', fontWeight: 500, letterSpacing: '-0.03em',
        margin: 0, lineHeight: 1.02, maxWidth: 900,
      }}>
        Technische Hilfe <span className="serif" style={{ fontStyle: 'italic', color: 'rgba(255,255,255,.85)' }}>aus einer Hand</span>.
      </h2>
      <p style={{ fontSize: 17, lineHeight: 1.55, color: 'rgba(255,255,255,.85)', maxWidth: 540, margin: 0 }}>
        Ein Ansprechpartner für alles, was piept, blinkt oder nicht mehr startet — vom Heim-WLAN bis zum Custom-Gaming-Rig.
      </p>
      <a href="#kontakt"
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 12,
          padding: '16px 26px 16px 32px', fontSize: 15, fontWeight: 500,
          borderRadius: 999, background: '#fff', color: 'var(--ink)', border: '1px solid #fff',
          transition: 'transform .2s ease, box-shadow .2s ease',
          marginTop: 8,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-1px)';
          e.currentTarget.style.boxShadow = '0 16px 40px -16px rgba(0,0,0,.35)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}>
        Kontaktiere uns
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3.5 8h9M8.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </div>
  </section>
);

// ---------- Reasons (Qualität, Professionelle Arbeit) ----------

const reasons = [
  {
    n: '01',
    kicker: 'Qualität',
    title: 'Direkt 1:1 — Mensch zu Mensch.',
    body: 'In meinem Kleinbetrieb ist mir die persönliche Beziehung zum Kunden wichtig. Du schilderst deine Sorgen und ich versuche sie bestmöglich und unabhängig zu lösen. Ohne überteuerte Hotline. Ohne KI-Assistent. Einfach Mensch zu Mensch.',
    chips: ['Persönlich', 'Unabhängig', 'Kein Skript'],
  },
  {
    n: '02',
    kicker: 'Professionelle Arbeit',
    title: 'Über 30 Jahre Berufserfahrung.',
    body: 'Als gelernter Audio-/Video-Elektroniker mit über 30 Jahren Berufserfahrung in der Multimedia- und Informatikbranche gebe ich mein fundiertes Wissen gerne an meine Kundschaft weiter — egal ob es um Hardware, Software oder die richtige Wahl beim Neukauf geht.',
    chips: ['Audio · Video · IT', 'Seit 1998 in der IT', 'Hardware bis Software'],
  },
];

const Reasons = () => (
  <section id="gruende" style={{ background: '#fff', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto', padding: '120px 40px' }}>
      <div style={{ marginBottom: 56, maxWidth: 760 }}>
        <div className="mono" style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 18 }}>
          ◦ Warum Bolliger IT
        </div>
        <h2 style={{
          fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1.02, letterSpacing: '-0.03em',
          margin: 0, fontWeight: 500,
        }}>
          Die wichtigsten Gründe,<br />
          warum Sie sich für <span className="serif" style={{ fontStyle: 'italic', color: 'var(--ink-2)' }}>uns</span> entscheiden sollten.
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        {reasons.map((r, i) => (
          <div key={r.n} style={{
            position: 'relative', background: 'var(--bg)', border: '1px solid var(--line)',
            borderRadius: 24, padding: '36px 36px 36px',
            display: 'flex', flexDirection: 'column', gap: 18,
            overflow: 'hidden',
          }}>
            {/* image placeholder header band */}
            <div style={{
              position: 'relative', height: 200, borderRadius: 16, overflow: 'hidden',
              border: '1px solid var(--line)',
              background: i === 0
                ? 'repeating-linear-gradient(135deg, #E8E2D0 0 14px, #DFD8C2 14px 28px)'
                : 'repeating-linear-gradient(135deg, #DDE6EF 0 14px, #CFD9E4 14px 28px)',
              marginBottom: 6,
            }}>
              <div style={{
                position: 'absolute', inset: 0, display: 'flex',
                alignItems: 'center', justifyContent: 'center', gap: 8,
                color: 'var(--ink-3)',
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="5" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.4"/>
                  <path d="M3 16l4-4 3 3 5-5 6 6" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
                </svg>
                <span className="mono" style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                  {i === 0 ? 'Foto Festplatte folgt' : 'Foto Reparatur folgt'}
                </span>
              </div>
              <div style={{
                position: 'absolute', top: 12, left: 12,
                padding: '4px 10px', borderRadius: 999,
                background: 'rgba(255,255,255,.85)', backdropFilter: 'blur(6px)',
                border: '1px solid var(--line)',
              }}>
                <span className="mono" style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>
                  Platzhalter
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span className="mono" style={{ fontSize: 11, color: 'var(--orange)', letterSpacing: '0.16em' }}>{r.n}</span>
              <span className="mono" style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>{r.kicker}</span>
            </div>
            <h3 style={{ fontSize: 28, fontWeight: 500, letterSpacing: '-0.025em', margin: 0, lineHeight: 1.1 }}>{r.title}</h3>
            <p style={{ fontSize: 15.5, color: 'var(--ink-2)', lineHeight: 1.6, margin: 0 }}>{r.body}</p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 'auto', paddingTop: 8 }}>
              {r.chips.map((c) => (
                <span key={c} style={{
                  padding: '6px 12px', borderRadius: 999, fontSize: 12,
                  background: '#fff', border: '1px solid var(--line)', color: 'var(--ink-2)',
                }}>{c}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ---------- Testimonials ----------

const testimonials = [
  { name: 'Hier könnten Sie als zufriedener Kunde stehen.', role: 'Platzhalter · Privatkunde' },
  { name: 'Irgendwer hat sicher bald was Positives zu berichten…', role: 'Platzhalter · KMU' },
  { name: 'Folgt sicher auch bald.', role: 'Platzhalter · Gaming-Kunde' },
];

const Testimonials = () => (
  <section style={{ background: 'var(--blue)', color: '#fff' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto', padding: '100px 40px' }}>
      <div style={{ textAlign: 'center', marginBottom: 56 }}>
        <div className="mono" style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,.65)', marginBottom: 16 }}>
          ◦ Stimmen
        </div>
        <h2 style={{
          fontSize: 'clamp(32px, 3.8vw, 48px)', fontWeight: 500, letterSpacing: '-0.025em',
          margin: 0, lineHeight: 1.05,
        }}>
          Was unsere Kunden <span className="serif" style={{ fontStyle: 'italic', color: 'rgba(255,255,255,.8)' }}>über uns</span> sagen.
        </h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {testimonials.map((t, i) => (
          <div key={i} style={{
            background: 'rgba(255,255,255,.08)',
            border: '1px solid rgba(255,255,255,.18)',
            backdropFilter: 'blur(8px)',
            borderRadius: 22, padding: '28px 26px',
            display: 'flex', flexDirection: 'column', gap: 18,
          }}>
            <svg width="28" height="22" viewBox="0 0 28 22" fill="none">
              <path d="M0 22V13C0 5.5 4 .5 11 0v4.5C7.5 5.5 5.5 8 5 13h4v9H0Zm17 0V13C17 5.5 21 .5 28 0v4.5c-3.5 1-5.5 3.5-6 8.5h4v9h-9Z" fill="rgba(255,255,255,.5)"/>
            </svg>
            <p style={{ fontSize: 16, lineHeight: 1.5, margin: 0, color: 'rgba(255,255,255,.95)' }}>
              "{t.name}"
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 'auto', paddingTop: 8, borderTop: '1px solid rgba(255,255,255,.15)' }}>
              <div style={{
                width: 38, height: 38, borderRadius: 999,
                background: 'repeating-linear-gradient(135deg, rgba(255,255,255,.25) 0 6px, rgba(255,255,255,.15) 6px 12px)',
                border: '1px solid rgba(255,255,255,.25)',
              }}/>
              <div className="mono" style={{ fontSize: 10.5, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.75)' }}>
                {t.role}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ---------- Process strip ----------

const Process = () => {
  const steps = [
    { n: '01', t: 'Anfragen', d: 'Per Formular, Telefon oder vorbeischauen.' },
    { n: '02', t: 'Diagnose', d: 'Fixer Preis, keine bösen Überraschungen.' },
    { n: '03', t: 'Reparieren', d: 'Originalteile, sauber dokumentiert.' },
    { n: '04', t: 'Abholen', d: 'Mit 6 Monaten Garantie auf die Arbeit.' },
  ];
  return (
    <section style={{ background: 'var(--ink)', color: '#fff' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '88px 40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 48, gap: 32, flexWrap: 'wrap' }}>
          <div>
            <div className="mono" style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)', marginBottom: 12 }}>
              ◦ So läuft's ab
            </div>
            <h2 style={{ fontSize: 'clamp(32px, 3.5vw, 44px)', fontWeight: 500, letterSpacing: '-0.025em', margin: 0, lineHeight: 1.05 }}>
              Vier Schritte. <span className="serif" style={{ fontStyle: 'italic', color: 'rgba(255,255,255,.65)' }}>Keine Tricks.</span>
            </h2>
          </div>
          <a href="#kontakt"
            className="pill-btn"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 12,
              padding: '14px 22px 14px 28px', fontSize: 14, fontWeight: 500,
              borderRadius: 999, background: '#fff', color: 'var(--ink)', border: '1px solid #fff',
            }}>
            Anfrage starten
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3.5 8h9M8.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, borderTop: '1px solid rgba(255,255,255,.12)' }}>
          {steps.map((s, i) => (
            <div key={s.n} style={{
              padding: '32px 28px 32px 0',
              borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,.12)',
              paddingLeft: i === 0 ? 0 : 28,
            }}>
              <div className="mono" style={{ fontSize: 11, color: 'var(--orange)', letterSpacing: '0.16em', marginBottom: 18 }}>{s.n}</div>
              <div style={{ fontSize: 22, fontWeight: 500, letterSpacing: '-0.02em', marginBottom: 8 }}>{s.t}</div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,.65)', lineHeight: 1.5 }}>{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ---------- CTA / Contact ----------

const Contact = () => {
  const [submitted, setSubmitted] = React.useState(false);
  return (
    <section id="kontakt" style={{ background: 'var(--bg)' }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto', padding: '120px 40px',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start',
      }}>
        <div>
          <div className="mono" style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 18 }}>
            ◦ Kontaktformular
          </div>
          <h2 style={{ fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 500, letterSpacing: '-0.03em', margin: '0 0 24px', lineHeight: 1.02 }}>
            Schreib mir, was{' '}
            <span className="serif" style={{ fontStyle: 'italic', color: 'var(--ink-2)' }}>kaputt</span> ist.
          </h2>
          <p style={{ fontSize: 17, color: 'var(--ink-2)', lineHeight: 1.6, maxWidth: 440, margin: '0 0 40px' }}>
            Ein paar Zeilen reichen. Ich melde mich i.&nbsp;d.&nbsp;R. innert 24&nbsp;Stunden zurück
            — auch wenn die Werkstatt noch nicht offiziell geöffnet ist.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
            {[
              ['Telefon', '+41 79 000 00 00'],
              ['E-Mail', 'roger@bolliger-it.ch'],
              ['Werkstatt', 'Hauptstrasse 12, 5000 Aarau'],
              ['Öffnungszeiten', 'Mo–Fr 09:00–18:00 · Sa nach Absprache'],
            ].map(([k, v]) => (
              <div key={k} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 16, padding: '12px 0', borderBottom: '1px solid var(--line)' }}>
                <div className="mono" style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>{k}</div>
                <div style={{ fontSize: 15, color: 'var(--ink)' }}>{v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Form card */}
        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          style={{
            background: '#fff', border: '1px solid var(--line)', borderRadius: 24, padding: 32,
            display: 'flex', flexDirection: 'column', gap: 18,
            boxShadow: '0 1px 0 rgba(0,0,0,.02), 0 30px 60px -40px rgba(15,111,163,.18)',
          }}>
          {submitted ? (
            <div style={{ padding: '40px 0', textAlign: 'center' }}>
              <div style={{
                width: 56, height: 56, borderRadius: 999, background: 'var(--orange-soft)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18,
              }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12l5 5 9-11" stroke="#B36A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div style={{ fontSize: 22, fontWeight: 500, letterSpacing: '-0.02em', marginBottom: 8 }}>Danke, ist angekommen.</div>
              <div style={{ fontSize: 14, color: 'var(--ink-3)' }}>Du hörst innert 24 Stunden von Roger.</div>
            </div>
          ) : (
            <React.Fragment>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <Field label="Name" placeholder="Roger Bolliger" />
                <Field label="E-Mail" placeholder="du@example.ch" type="email" />
              </div>
              <Field label="Gerät" placeholder="MacBook Air 2020, iPhone 13, Tower-PC …" />
              <SelectField label="Anliegen" options={['Reparatur', 'Datenrettung', 'Beratung', 'Etwas anderes']} />
              <Field label="Was ist passiert?" textarea placeholder="Bildschirm flackert seit dem Update auf macOS 15 …" rows={4} />
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 6 }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'var(--ink-3)' }}>
                  <input type="checkbox" defaultChecked style={{ accentColor: 'var(--ink)' }} />
                  Datenschutz akzeptieren
                </label>
                <button type="submit"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 12,
                    padding: '14px 22px 14px 28px', fontSize: 14, fontWeight: 500,
                    borderRadius: 999, background: 'var(--btn)', color: '#fff', border: 'none', cursor: 'pointer',
                  }}>
                  Absenden
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3.5 8h9M8.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </React.Fragment>
          )}
        </form>
      </div>
    </section>
  );
};

const Field = ({ label, textarea, rows, ...rest }) => (
  <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
    <span className="mono" style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>{label}</span>
    {textarea ? (
      <textarea rows={rows || 3} {...rest}
        style={{
          fontFamily: 'inherit', fontSize: 14.5, padding: '12px 14px',
          background: '#FAFAF6', border: '1px solid var(--line)', borderRadius: 12,
          color: 'var(--ink)', resize: 'vertical', outline: 'none',
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--ink)')}
        onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--line)')}
      />
    ) : (
      <input {...rest}
        style={{
          fontFamily: 'inherit', fontSize: 14.5, padding: '12px 14px',
          background: '#FAFAF6', border: '1px solid var(--line)', borderRadius: 12,
          color: 'var(--ink)', outline: 'none',
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--ink)')}
        onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--line)')}
      />
    )}
  </label>
);

const SelectField = ({ label, options }) => {
  const [active, setActive] = React.useState(options[0]);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <span className="mono" style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>{label}</span>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {options.map((o) => (
          <button key={o} type="button" onClick={() => setActive(o)}
            style={{
              padding: '8px 14px', fontSize: 13, borderRadius: 999, cursor: 'pointer',
              background: active === o ? 'var(--ink)' : '#FAFAF6',
              color: active === o ? '#fff' : 'var(--ink-2)',
              border: '1px solid ' + (active === o ? 'var(--ink)' : 'var(--line)'),
              transition: 'all .15s ease',
            }}>{o}</button>
        ))}
      </div>
    </div>
  );
};

// ---------- Footer ----------

const Footer = () => (
  <footer style={{ background: '#fff', borderTop: '1px solid var(--line)' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto', padding: '56px 40px 40px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 40, marginBottom: 48 }}>
        <div>
          <Wordmark size="md" />
          <p style={{ fontSize: 14, color: 'var(--ink-3)', lineHeight: 1.55, maxWidth: 280, marginTop: 16 }}>
            Ehrliche PC- und Geräte-Reparatur aus dem Aargau. Werkstatt-Eröffnung im August 2026.
          </p>
        </div>
        {[
          ['Seiten', ['Hauptseite', 'Über uns', 'Dienstleistungen', 'Kontakt']],
          ['Reparatur', ['PC & Mac', 'Datenrettung', 'Smartphone', 'IT-Beratung']],
          ['Adresse', ['Hauptstrasse 12', '5000 Aarau', '+41 79 000 00 00', 'roger@bolliger-it.ch']],
        ].map(([title, items]) => (
          <div key={title}>
            <div className="mono" style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 16 }}>{title}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {items.map((i) => <a key={i} href="#" style={{ fontSize: 14, color: 'var(--ink-2)' }}>{i}</a>)}
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 24, borderTop: '1px solid var(--line)', gap: 16, flexWrap: 'wrap' }}>
        <div className="mono" style={{ fontSize: 11.5, color: 'var(--ink-3)', letterSpacing: '0.04em' }}>
          © 2026 <a href="https://www.bolligerit.ch" style={{ color: 'var(--ink-2)' }}>www.bolligerit.ch</a> · PC-Beratung und Service
        </div>
        <div style={{ display: 'flex', gap: 18 }}>
          {['Impressum', 'Datenschutz', 'AGB'].map((l) => (
            <a key={l} href="#" style={{ fontSize: 12.5, color: 'var(--ink-3)' }}>{l}</a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

// expose to other babel scripts
Object.assign(window, { Header, Hero, About, Services, Process, Contact, Footer, PillButton, Wordmark, TechnischeHilfe, Reasons, Testimonials });
