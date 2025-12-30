export function ProgressBar(contract = {}) {
  /* ────────────────────────────────────────────────────────────────────────────
   * CONTRACT
   * ────────────────────────────────────────────────────────────────────────────
   *
   * ProgressBar - Visual progress indicator with customizable styling
   *
   * Foundation: HTML progress element with enhanced styling
   *
   * Signals:
   *   Size: xs, sm, md, lg, xl, responsive
   *   Color: primary, success, danger, neutral, transparent
   *   Layout: inline, block, centered
   *   Shape: square
   *
   * Data:
   *   value - Progress value (0-100)
   *   max - Maximum progress value
   *
   * Defaults: md, block, primary
   *
   * Usage:
   * <ProgressBar value={50} />
   * <ProgressBar value={75} success lg />
   * <ProgressBar value={30} danger transparent />
   *
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
    dataSignal[key] !== undefined &&
    (dataSignal[name] = dataSignal[key]);

  /* ────────────────────────────────────────────────────────────────────────────
   * LAYERS
   * ──────────────────────────────────────────────────────────────────────────── */
    let progressbar;
     (() => 
        (
            progressbar = {
                base: layer("base", "progressbar"),
                size: layer("size", "progressbar"),
                color: layer("color", "progressbar"),
                shape: layer("shape", "progressbar"),
                layout: layer("layout", "progressbar")
            }
        )
    )(),
 /* ────────────────────────────────────────────────────────────────────────────
   * DEFAULTS
   * ──────────────────────────────────────────────────────────────────────────── */
    (() => 
        (
            progressbar.base("[&::-webkit-progress-value]:transition-all [&::-webkit-progress-bar]:transition-all [&::-moz-progress-bar]:transition-all" ),
            progressbar.shape("[&::-webkit-progress-value]:rounded-full [&::-webkit-progress-bar]:rounded-full [&::-moz-progress-bar]:rounded-full" ),
            progressbar.color("[&::-webkit-progress-value]:bg-violet-400 [&::-webkit-progress-bar]:bg-slate-300 [&::-moz-progress-bar]:bg-violet-400" ),
            progressbar.size("h-2 w-32"),
            progressbar.layout("block")
        )
    )(),
  /* ────────────────────────────────────────────────────────────────────────────
   * SHAPE SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */
    (() => 
        (
           inputSignal.square       && progressbar.shape(`[&::-webkit-progress-bar]:rounded-none [&::-webkit-progress-value]:rounded-none [&::-moz-progress-bar]:rounded-none`)
        )
    )(),
  /* ────────────────────────────────────────────────────────────────────────────
   * COLOR SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */
    (() => 
        (
            inputSignal.primary      && progressbar.color(`[&::-webkit-progress-bar]:bg-slate-300 [&::-moz-progress-bar]:bg-blue-500 [&::-webkit-progress-value]:bg-blue-500`),
            inputSignal.success      && progressbar.color(`[&::-webkit-progress-bar]:bg-slate-300 [&::-moz-progress-bar]:bg-green-500 [&::-webkit-progress-value]:bg-green-500`),
            inputSignal.danger       && progressbar.color(`[&::-webkit-progress-bar]:bg-slate-300 [&::-moz-progress-bar]:bg-red-500 [&::-webkit-progress-value]:bg-red-500`),
            inputSignal.neutral      && progressbar.color(`[&::-webkit-progress-bar]:bg-slate-300 [&::-moz-progress-bar]:bg-gray-500 [&::-webkit-progress-value]:bg-gray-500`),
            inputSignal.transparent  && progressbar.color(`[&::-webkit-progress-bar]:bg-transparent [&::-moz-progress-bar]:bg-transparent [&::-webkit-progress-value]:bg-transparent`)
        )
    )(),
  /* ────────────────────────────────────────────────────────────────────────────
   * SIZE SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */
    (() => 
        (
            inputSignal.sm           && progressbar.size("h-1 w-16"),
            inputSignal.md           && progressbar.size("h-2 w-32"),
            inputSignal.lg           && progressbar.size("h-3 w-48"),
            inputSignal.xl           && progressbar.size("h-4 w-64"),
            inputSignal.responsive   && progressbar.size("h-2 w-full")
        )
    )(),
  /* ────────────────────────────────────────────────────────────────────────────
   * LAYOUT SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */
    (() => 
        (
            inputSignal.inline       && progressbar.layout("inline-block"),
            inputSignal.block        && progressbar.layout("block"),
            inputSignal.centered     && progressbar.layout("mx-auto")
        )
    )(),
  /* ────────────────────────────────────────────────────────────────────────────
   * DATA
   * ──────────────────────────────────────────────────────────────────────────── */
    (() => 
        (
            inputSignal.value       && data("value"),
            inputSignal.max         && data("max")
        )
    )();
    const value = dataSignal.value !== undefined ? Math.min(100, Math.max(0, Number(dataSignal.value))) : 0;
  /* ────────────────────────────────────────────────────────────────────────────
   * RENDER
   * ──────────────────────────────────────────────────────────────────────────── */
  return (
    <progress
      value={value}
      max={dataSignal.max ?? 100}
      className={Object.values(layerSignal)
        .map(l => l[0])
        .filter(Boolean)
        .join(" ")}
    />
  );
}
