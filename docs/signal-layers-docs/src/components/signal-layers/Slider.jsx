export function Slider(contract = {}) {
  const { layer, data, state, classes, signals } = createSignalUtils(contract);
  const { inputSignal, layerSignal, dataSignal, stateSignal } = signals;
  let container, slider, text, bubble;
  container = {
    base: layer("base", "container"),
  };
  slider = {
    base: layer("base", "slider"),
    track: layer("track", "slider"),
    thumb: layer("thumb", "slider"),
    size: layer("size", "slider"),
    color: layer("color", "slider"),
    shape: layer("shape", "slider"),
    layout: layer("layout", "slider"),
    interaction: layer("interaction", "slider"),
  };

  text = {
    base: layer("text-base", "text"),
    position: layer("position", "text"),
    bubble: layer("bubble", "text"),
    color: layer("color", "text"),
  };

  bubble = {
    base: layer("base", "bubble"),
    color: layer("color", "bubble"),
    size: layer("size", "bubble"),
    shape: layer("shape", "bubble"),
  };

  container.base("inline-flex items-center select-none relative");

  slider.base("appearance-none outline-none focus:outline-none transition-all duration-200");
  slider.track("[&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-runnable-track]:rounded-full [&::-moz-range-track]:h-2 [&::-moz-range-track]:rounded-full");
  slider.thumb("[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:-mt-1 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full");
  slider.color("[&::-webkit-slider-runnable-track]:bg-gray-900 [&::-moz-range-track]:bg-gray-900");
  slider.interaction("cursor-pointer");
  slider.shape("rounded-full");
  slider.layout("block");
  slider.size("w-48");
  
  text.base("text-gray-800 font-light font-mono text-xs absolute -top-8");
  text.position("left-(--thumb-position) -translate-x-1/2 ml-(--thumb-margin)");
  text.color("text-gray-800");
  
  bubble.base("inline-block");
  bubble.color("bg-white");
  bubble.size("px-2 py-1");
  bubble.shape("rounded shadow-md");

  inputSignal.xs && slider.size("w-24");
  inputSignal.sm && slider.size("w-32");
  inputSignal.md && slider.size("w-48");
  inputSignal.lg && slider.size("w-64");
  inputSignal.xl && slider.size("w-80");

  inputSignal.bubbleXs && bubble.size("px-1 py-0.5 text-2xs");
  inputSignal.bubbleSm && bubble.size("px-1.5 py-0.5 text-xs");
  inputSignal.bubbleMd && bubble.size("px-2 py-1 text-xs");
  inputSignal.bubbleLg && bubble.size("px-3 py-1.5 text-sm");
  inputSignal.bubbleXl && bubble.size("px-4 py-2 text-base");

  inputSignal.bubbleSquare && bubble.shape("rounded-none shadow-sm");
  inputSignal.bubblePill && bubble.shape("rounded-full shadow-lg");
  inputSignal.bubbleFlat && bubble.shape("rounded shadow-none");
  inputSignal.bubbleSharp && bubble.shape("rounded-xl shadow-2xl");

  inputSignal.primary &&
    (slider.color("[&::-webkit-slider-runnable-track]:bg-blue-500 [&::-moz-range-track]:bg-blue-500"),
    bubble.color("bg-blue-600"),
    text.color("text-white"));
  inputSignal.neutral &&
    (slider.color("[&::-webkit-slider-runnable-track]:bg-gray-400 [&::-moz-range-track]:bg-gray-400"),
    bubble.color("bg-gray-500"),
    text.color("text-white"));

  inputSignal.square && slider.shape("[&::-webkit-slider-runnable-track]:rounded-none [&::-webkit-slider-thumb]:rounded-none [&::-moz-range-track]:rounded-none [&::-moz-range-thumb]:rounded-none");
  inputSignal.pill && slider.shape("[&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-thumb]:rounded-full [&::-moz-range-track]:rounded-full [&::-moz-range-thumb]:rounded-full");

  inputSignal.inline && slider.layout("inline-block");
  inputSignal.block && slider.layout("block");
  inputSignal.centered && slider.layout("mx-auto");

  inputSignal.disabled && slider.interaction("opacity-50 pointer-events-none");

  inputSignal.min && data("min");
  inputSignal.max && data("max");
  inputSignal.step && data("step");
  inputSignal.ariaLabel && data("ariaLabel");
  inputSignal.onChange && data("onChange");
  inputSignal.defaultValue && data("defaultValue");
  inputSignal.value && data("value");
  state("isSliding", 1, false);
  state("value", 2, dataSignal.defaultValue ?? 0);

  const thumbVars = () => {
    const percentage =
      ((stateSignal.value.get - (dataSignal.min ?? 0)) /
        ((dataSignal.max ?? 100) - (dataSignal.min ?? 0))) *
      100;
    return {
      position: `${percentage}%`,
      margin: `${Math.max(0, 5 - (percentage * 5) / 100)}px`,
    };
  };

  return (
    <div className={classes(layerSignal.container)}>
      <input
        type="range"
        min={dataSignal.min ?? 0}
        max={dataSignal.max ?? 100}
        step={dataSignal.step ?? 1}
        value={dataSignal.value ?? stateSignal.value.get}
        aria-label={dataSignal.ariaLabel}
        disabled={inputSignal.disabled}
        onChange={(e) => {
          const v = Number(e.target.value);
          stateSignal.value?.set && stateSignal.value.set(v);
          dataSignal.onChange?.(v);
        }}
        onMouseUp={() =>
          stateSignal.isSliding?.set && stateSignal.isSliding.set(false)
        }
        onMouseDown={() =>
          stateSignal.isSliding?.set && stateSignal.isSliding.set(true)
        }
        onTouchStart={() =>
          stateSignal.isSliding?.set && stateSignal.isSliding.set(true)
        }
        onTouchEnd={() =>
          stateSignal.isSliding?.set && stateSignal.isSliding.set(false)
        }
        className={classes(layerSignal.slider)}
      />
      {stateSignal.isSliding?.get && (
        <div
          className={classes(layerSignal.text)}
          style={{
            "--thumb-position": thumbVars().position,
            "--thumb-margin": thumbVars().margin,
          }}
        >
          <div className={classes(layerSignal.bubble)}>
            {Math.round(stateSignal.value.get)}
          </div>
        </div>
      )}
    </div>
  );
}
