export function Spinner(contract = {}) {
  /* ────────────────────────────────────────────────────────────────────────────
   * CONTRACT
   * ────────────────────────────────────────────────────────────────────────────
   * 
   * Spinner - Animated loading indicator with customizable appearance
   *
   * Foundation: CSS animated div with spinning border
   *
   * Signals:
   *   Size: xs, sm, md, lg, xl
   *   Color: light, primary, danger
   *   Border: thin, thick
   *   Animation: spinSlow, spinFast, pause
   *   Layout: inline, block, centered
   *   Visibility: transparent
   *
   * Data:
   *   ariaLabel - Accessibility label for screen readers
   *
   * Defaults: md, inline, spin
   *
   * Usage:
   * <Spinner />
   * <Spinner lg primary />
   * <Spinner sm light transparent />
   * 
   * ──────────────────────────────────────────────────────────────────────────── */

  const [inputSignal, layerSignal, dataSignal] = [{ ...contract }, {}, {}];

  /* ────────────────────────────────────────────────────────────────────────────
   * CONTRACT TOOLS
   * ──────────────────────────────────────────────────────────────────────────── */

  const layer = (name) => (className) =>
    (layerSignal[name] ||= [],
     (layerSignal[name][0] = className));

  const data = (name, key = name) =>
    inputSignal[key] && (dataSignal[name] = inputSignal[key]);

  const classes = (layers = {}) =>
    Object.values(layers).map(l => l[0]).filter(Boolean).join(" ");

  /* ────────────────────────────────────────────────────────────────────────────
   * BASE LAYERS
   * ──────────────────────────────────────────────────────────────────────────── */
    let spinner;
       (() => 
        (
            spinner = {
                layout:layer("layout"),
                size:layer("size"),       
                color:layer("color"),      
                border:layer("border"),     
                animation:layer("animation"),  
                visibility:layer("visibility") 
            }
        )
    )(),
  /* ────────────────────────────────────────────────────────────────────────────
   * DEFAULTS
   * ──────────────────────────────────────────────────────────────────────────── */
    (() => 
        (
                spinner.layout("inline-flex items-center justify-center"),
                spinner.color("border-black/20 border-t-black"),
                spinner.border("border-2 rounded-full"),
                spinner.animation("animate-spin"),
                spinner.visibility("opacity-100"),
                spinner.size("w-6 h-6")
        )
    )(),
  /* ────────────────────────────────────────────────────────────────────────────
   * SIZE SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */
  (() => 
        (
              inputSignal.xs && spinner.size("w-3 h-3 border"),
              inputSignal.sm && spinner.size("w-4 h-4 border-2"),
              inputSignal.md && spinner.size("w-6 h-6 border-2"),
              inputSignal.lg && spinner.size("w-8 h-8 border-4"),
              inputSignal.xl && spinner.size("w-12 h-12 border-4")
        )
    )(),
  /* ────────────────────────────────────────────────────────────────────────────
   * COLOR SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */
  (() => 
        (
           
              inputSignal.light && spinner.color("border-white/30 border-t-white"),
              inputSignal.primary && spinner.color("border-blue-600/30 border-t-blue-500"),
              inputSignal.danger && spinner.color("border-red-600/30 border-t-red-500")
        )
    )(),
  /* ────────────────────────────────────────────────────────────────────────────
   * BORDER SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */
  (() => 
        (
           
              inputSignal.thin && spinner.border("border rounded-full"),
              inputSignal.thick && spinner.border("border-4 rounded-full")
        )
    )(),
   /* ────────────────────────────────────────────────────────────────────────────
   * ANIMATION SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */
  (() => 
        (
           
              inputSignal.spinSlow && spinner.animation("animate-spin [animation-duration:1.5s]"),
              inputSignal.spinFast && spinner.animation("animate-spin [animation-duration:.6s]"),
              inputSignal.pause && spinner.animation("animate-spin [animation-play-state:paused]")
        )
    )(),
  /* ────────────────────────────────────────────────────────────────────────────
   * LAYOUT SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */
  (() => 
        (
              inputSignal.inline && spinner.layout("inline-flex"),
              inputSignal.block && spinner.layout("block mx-auto"),
              inputSignal.centered && spinner.layout("flex mx-auto")
        )
    )(),
  /* ────────────────────────────────────────────────────────────────────────────
   * VISIBILITY SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */
  (() => 
        (
              inputSignal.transparent && spinner.visibility("opacity-25")
        )
    )(),
  /* ────────────────────────────────────────────────────────────────────────────
   * DATA
   * ──────────────────────────────────────────────────────────────────────────── */
  (() => 
        (
            inputSignal.ariaLabel && data("ariaLabel")
        )
    )();
  /* ────────────────────────────────────────────────────────────────────────────
   * RENDER
   * ──────────────────────────────────────────────────────────────────────────── */
  return (
    <div
      role="status"
      aria-label={dataSignal.ariaLabel || "loading"}
      className={classes(layerSignal)}
    />
  );
}
