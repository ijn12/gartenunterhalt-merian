const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#F39200",
  "btnColor": "#2A2A28",
  "showProcess": false,
  "showCountdown": true,
  "bgTone": "warm"
}/*EDITMODE-END*/;

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply tweaks to CSS vars on root
  React.useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--orange', tweaks.accent);
    root.style.setProperty('--btn', tweaks.btnColor);
    root.style.setProperty('--btn-hover', shade(tweaks.btnColor, -15));
    if (tweaks.bgTone === 'warm') {
      root.style.setProperty('--bg', '#FAFAF6');
    } else if (tweaks.bgTone === 'cool') {
      root.style.setProperty('--bg', '#F6F8FA');
    } else {
      root.style.setProperty('--bg', '#FFFFFF');
    }
  }, [tweaks]);

  return (
    <React.Fragment>
      <Header />
      <main>
        <Hero />
        <About />
        <TechnischeHilfe />
        <Services />
        <Reasons />
        <Testimonials />
        {tweaks.showProcess && <Process />}
        <Contact />
      </main>
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Brand">
          <TweakColor label="Accent" value={tweaks.accent} onChange={(v) => setTweak('accent', v)}
            options={['#F39200', '#1E96D4', '#E0533A', '#5B7A2E']} />
          <TweakColor label="Button" value={tweaks.btnColor} onChange={(v) => setTweak('btnColor', v)}
            options={['#2A2A28', '#131313', '#1E96D4', '#3A3A38']} />
        </TweakSection>
        <TweakSection title="Background">
          <TweakRadio label="Tone" value={tweaks.bgTone} onChange={(v) => setTweak('bgTone', v)}
            options={[{ value: 'warm', label: 'Warm' }, { value: 'cool', label: 'Cool' }, { value: 'plain', label: 'White' }]} />
        </TweakSection>
        <TweakSection title="Sections">
          <TweakToggle label="Process strip" value={tweaks.showProcess} onChange={(v) => setTweak('showProcess', v)} />
          <TweakToggle label="Countdown card" value={tweaks.showCountdown} onChange={(v) => setTweak('showCountdown', v)} />
        </TweakSection>
      </TweaksPanel>
    </React.Fragment>
  );
}

function shade(hex, percent) {
  const num = parseInt(hex.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = Math.max(0, Math.min(255, (num >> 16) + amt));
  const G = Math.max(0, Math.min(255, ((num >> 8) & 0xff) + amt));
  const B = Math.max(0, Math.min(255, (num & 0xff) + amt));
  return '#' + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
