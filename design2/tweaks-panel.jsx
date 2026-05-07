// useTweaks hook
function useTweaks(defaults) {
  const [tweaks, setTweaks] = React.useState(defaults);
  const setTweak = (key, val) =>
    setTweaks(prev => ({ ...prev, [key]: val }));
  return [tweaks, setTweak];
}

// TweaksPanel — floating debug panel (bottom-right)
const TweaksPanel = ({ title, children }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{
      position: 'fixed', bottom: 20, right: 20, zIndex: 9999,
      fontFamily: 'system-ui, sans-serif', fontSize: 13,
    }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          background: '#14233f', color: '#fff', border: 'none',
          padding: '8px 14px', cursor: 'pointer', borderRadius: 6,
          boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
        }}
      >
        {open ? '✕ Cerrar' : '⚙ ' + (title || 'Tweaks')}
      </button>
      {open && (
        <div style={{
          marginTop: 8, background: '#fff', border: '1px solid #e0e0e0',
          borderRadius: 8, padding: 16, minWidth: 240,
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
        }}>
          {children}
        </div>
      )}
    </div>
  );
};

const TweakSection = ({ title, children }) => (
  <div style={{ marginBottom: 16 }}>
    <div style={{ fontWeight: 600, marginBottom: 8, color: '#14233f' }}>{title}</div>
    {children}
  </div>
);

const TweakToggle = ({ label, value, onChange }) => (
  <label style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8, cursor: 'pointer' }}>
    <span>{label}</span>
    <input type="checkbox" checked={value} onChange={e => onChange(e.target.checked)} />
  </label>
);

const TweakSlider = ({ label, min, max, step, value, onChange }) => (
  <div style={{ marginBottom: 8 }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
      <span>{label}</span>
      <span style={{ color: '#888' }}>{value}</span>
    </div>
    <input
      type="range" min={min} max={max} step={step} value={value}
      onChange={e => onChange(Number(e.target.value))}
      style={{ width: '100%' }}
    />
  </div>
);
