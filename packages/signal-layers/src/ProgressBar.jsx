export function ProgressBar(contract = {}) {
  /* ────────────────────────────────────────────────────────────────────────────
   * CONTRACT
   * ────────────────────────────────────────────────────────────────────────────
   *
   * SIGNALS:   xs, sm, md, lg, xl
   *            primary, success, danger, neutral
   *            inline, block, centered, transparent
   *            square
   * 
   * LEASES:    value, max 
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
    signals[key] !== undefined &&
    (leases[name] = signals[key]);

  /* ────────────────────────────────────────────────────────────────────────────
   * LAYERS
   * ──────────────────────────────────────────────────────────────────────────── */

  const base   = layer("base");
  const size   = layer("size");
  const color  = layer("color");
  const shape  = layer("shape");
  const layout = layer("layout");
  const escape = layer("escape");

 /* ────────────────────────────────────────────────────────────────────────────
   * DEFAULTS
   * ──────────────────────────────────────────────────────────────────────────── */

    (
        base(
                "[&::-webkit-progress-value]:transition-all " +
                "[&::-webkit-progress-bar]:transition-all " +
                "[&::-moz-progress-bar]:transition-all"
            ),

        shape(
                "[&::-webkit-progress-value]:rounded-full " +
                "[&::-webkit-progress-bar]:rounded-full " +
                "[&::-moz-progress-bar]:rounded-full"
            ),

        color(
                "[&::-webkit-progress-value]:bg-violet-400 " +
                "[&::-webkit-progress-bar]:bg-slate-300 " +
                "[&::-moz-progress-bar]:bg-violet-400"
            ),
        
        size("h-2 w-32"),
        
        layout("block")

    );

  /* ────────────────────────────────────────────────────────────────────────────
   * INTENT
   * ──────────────────────────────────────────────────────────────────────────── */

    signals.square       && shape(
                                   `[&::-webkit-progress-bar]:rounded-none 
                                    [&::-webkit-progress-value]:rounded-none 
                                    [&::-moz-progress-bar]:rounded-none`
                                );

    signals.primary      && color(
                                   `[&::-webkit-progress-bar]:bg-slate-300 
                                    [&::-moz-progress-bar]:bg-blue-500 
                                    [&::-webkit-progress-value]:bg-blue-500`
                                );

    signals.success      && color(
                                   `[&::-webkit-progress-bar]:bg-slate-300 
                                    [&::-moz-progress-bar]:bg-green-500 
                                    [&::-webkit-progress-value]:bg-green-500`
                                );

    signals.danger       && color(
                                   `[&::-webkit-progress-bar]:bg-slate-300 
                                    [&::-moz-progress-bar]:bg-red-500 
                                    [&::-webkit-progress-value]:bg-red-500`
                               );

    signals.neutral      && color(
                                   `[&::-webkit-progress-bar]:bg-slate-300 
                                    [&::-moz-progress-bar]:bg-gray-500 
                                    [&::-webkit-progress-value]:bg-gray-500`
                               );

                            
    signals.transparent  && color(
                                   `[&::-webkit-progress-bar]:bg-transparent 
                                    [&::-moz-progress-bar]:bg-transparent 
                                    [&::-webkit-progress-value]:bg-transparent`
                               );
                            
    signals.sm           && size("h-1 w-16");
    signals.md           && size("h-2 w-32");
    signals.lg           && size("h-3 w-48");
    signals.xl           && size("h-4 w-64");
    signals.responsive   && size("h-2 w-full");

    signals.inline       && layout("inline-block");
    signals.block        && layout("block");
    signals.centered     && layout("mx-auto");
  /* ────────────────────────────────────────────────────────────────────────────
   * ESCAPE & NATIVE
   * ──────────────────────────────────────────────────────────────────────────── */

    signals.value       && lease("value");
    signals.max         && lease("max");

    signals.class       && escape(signals.class);
    signals.className   && escape(signals.className);

    const value =
        leases.value !== undefined
        ? Math.min(100, Math.max(0, Number(leases.value)))
        : 0;
  /* ────────────────────────────────────────────────────────────────────────────
   * RENDER
   * ──────────────────────────────────────────────────────────────────────────── */

  return (
    <progress
      value={value}
      max={leases.max ?? 100}
      className={Object.values(signalLayers)
        .map(l => l[0])
        .filter(Boolean)
        .join(" ")}
    />
  );
}
