export function Spinner(contract = {}) {
  /* ────────────────────────────────────────────────────────────────────────────
   * CONTRACT
   * ────────────────────────────────────────────────────────────────────────────
   * 
   * SIGNALS:   xs, sm, md, lg, xl
   *            light, primary, danger
   *            thin, thick
   *            spinSlow,  spinFast, pause
   *            inline, block, centered, transparent
   * 
   * LEASES:    ariaLabel
   * 
   * ──────────────────────────────────────────────────────────────────────────── */

  const [signals, signalLayers, leases] = [{ ...contract }, {}, {}];

  /* ────────────────────────────────────────────────────────────────────────────
   * CONTRACT TOOLS
   * ──────────────────────────────────────────────────────────────────────────── */

  const layer = (name) => (className) =>
    (signalLayers[name] ||= [],
     (signalLayers[name][0] = className));

  const lease = (name, key = name) =>
    signals[key] && (leases[name] = signals[key]);

  /* ────────────────────────────────────────────────────────────────────────────
   * BASE LAYERS
   * ──────────────────────────────────────────────────────────────────────────── */

  const layout     = layer("layout");     
  const size       = layer("size");       
  const color      = layer("color");      
  const border     = layer("border");     
  const animation  = layer("animation");  
  const visibility = layer("visibility"); 
  const escape     = layer("escape");

  /* ────────────────────────────────────────────────────────────────────────────
   * DEFAULTS
   * ──────────────────────────────────────────────────────────────────────────── */

  (
    layout("inline-flex items-center justify-center"),
    color("border-black/20 border-t-black"),
    border("border-2 rounded-full"),
    animation("animate-spin"),
    visibility("opacity-100"),
    size("w-6 h-6")
  );

  /* ────────────────────────────────────────────────────────────────────────────
   * INTENT
   * ──────────────────────────────────────────────────────────────────────────── */

  signals.xs              && size("w-3 h-3 border");
  signals.sm              && size("w-4 h-4 border-2");
  signals.md              && size("w-6 h-6 border-2");
  signals.lg              && size("w-8 h-8 border-4");
  signals.xl              && size("w-12 h-12 border-4");

  signals.light           && color("border-white/30 border-t-white");
  signals.primary         && color("border-blue-600/30 border-t-blue-500");
  signals.danger          && color("border-red-600/30 border-t-red-500");

  signals.thin            && border("border rounded-full");
  signals.thick           && border("border-4 rounded-full");

  signals.spinSlow        && animation("animate-spin [animation-duration:1.5s]");
  signals.spinFast        && animation("animate-spin [animation-duration:.6s]");

  signals.inline          && layout("inline-flex");
  signals.block           && layout("block mx-auto");
  signals.centered        && layout("flex mx-auto");

  signals.transparent     && visibility("opacity-25");

  /* ────────────────────────────────────────────────────────────────────────────
   * ESCAPE & NATIVE
   * ──────────────────────────────────────────────────────────────────────────── */

  signals.class     && escape(signals.class);
  signals.className && escape(signals.className);

  signals.ariaLabel && lease("ariaLabel");

  /* ────────────────────────────────────────────────────────────────────────────
   * RENDER
   * ──────────────────────────────────────────────────────────────────────────── */

  return (
    <div
      role="status"
      aria-label={leases.ariaLabel || "loading"}
      className={Object.values(signalLayers)
        .map(l => l[0])
        .filter(Boolean)
        .join(" ")}
    />
  );
}
