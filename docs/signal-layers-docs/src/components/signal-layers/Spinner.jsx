export function Spinner(contract = {}) {
  const { layer, data, state, classes, signals } = createSignalUtils(contract);
  const { inputSignal, layerSignal, dataSignal } = signals;
  let spinner;

  spinner = {
    layout: layer("layout", "spinner"),
    size: layer("size", "spinner"),
    color: layer("color", "spinner"),
    border: layer("border", "spinner"),
    animation: layer("animation", "spinner"),
    visibility: layer("visibility", "spinner"),
  };

  spinner.layout("inline-flex items-center justify-center");
  spinner.color("border-black/20 border-t-black");
  spinner.border("border-2 rounded-full");
  spinner.animation("animate-spin");
  spinner.visibility("opacity-100");
  spinner.size("w-6 h-6");

  inputSignal.xs && spinner.size("w-3 h-3 border");
  inputSignal.sm && spinner.size("w-4 h-4 border-2");
  inputSignal.md && spinner.size("w-6 h-6 border-2");
  inputSignal.lg && spinner.size("w-8 h-8 border-4");
  inputSignal.xl && spinner.size("w-12 h-12 border-4");

  inputSignal.light && spinner.color("border-white/30 border-t-white");
  inputSignal.primary && spinner.color("border-blue-600/30 border-t-blue-500");
  inputSignal.danger && spinner.color("border-red-600/30 border-t-red-500");

  inputSignal.thin && spinner.border("border rounded-full");
  inputSignal.thick && spinner.border("border-4 rounded-full");

  inputSignal.spinSlow &&
    spinner.animation("animate-spin [animation-duration:1.5s]");
  inputSignal.spinFast &&
    spinner.animation("animate-spin [animation-duration:.6s]");
  inputSignal.pause &&
    spinner.animation("animate-spin [animation-play-state:paused]");

  inputSignal.inline && spinner.layout("inline-flex");
  inputSignal.block && spinner.layout("block mx-auto");
  inputSignal.centered && spinner.layout("flex mx-auto");

  inputSignal.transparent && spinner.visibility("opacity-25");

  inputSignal.ariaLabel && data("ariaLabel");

  return (
    <div
      role="status"
      aria-label={dataSignal.ariaLabel || "loading"}
      className={classes(layerSignal.spinner)}
    />
  );
}