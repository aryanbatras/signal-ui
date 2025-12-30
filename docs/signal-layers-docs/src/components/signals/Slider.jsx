import { useState } from "react";

export function Slider(contract = {}) {
  /* ────────────────────────────────────────────────────────────────────────────
   * CONTRACT
   * ────────────────────────────────────────────────────────────────────────────
   *
   * Slider - Continuous range input with value bubble on interaction
   *
   * Foundation: Native HTML range input with dynamic value bubble
   *
   * Signals:
   *   Size: xs, sm, md, lg, xl
   *   Color: primary, neutral
   *   Shape: square
   *   Layout: inline, block, centered
   *   State: disabled
   *   Bubble Size: bubbleXs, bubbleSm, bubbleMd, bubbleLg, bubbleXl
   *   Bubble Shape: bubbleSquare, bubblePill, bubbleFlat, bubbleSharp
   *
   * Data:
   *   defaultValue - Initial value (uncontrolled)
   *   min - Minimum value
   *   max - Maximum value
   *   step - Step interval
   *   onChange - Change handler
   *   ariaLabel - Accessibility label
   *
   * Defaults: md, primary, block
   *
   * Usage:
   * <Slider defaultValue={40} onChange={v => {}} />
   * <Slider lg primary min={0} max={200} />
   * <Slider sm neutral square bubbleLg />
   *
   *
   * ────────────────────────────────────────────────────────────────────────────
   */

  const [inputSignal, layerSignal, dataSignal, stateSignal] = [
    { ...contract },
    {},
    {},
    {}
  ];

  /* ────────────────────────────────────────────────────────────────────────────
   * CONTRACT TOOLS
   * ──────────────────────────────────────────────────────────────────────────── */

  const layer = (name, scope = "card") => (className) =>
    (layerSignal[scope] ||= {},
    layerSignal[scope][name] ||= [],
    (layerSignal[scope][name][0] = className));

  const data = (name, key = name) =>
    inputSignal[key] !== undefined && (dataSignal[name] = inputSignal[key]);

  const state = (name, priority = 0, initial = 0) => (
    (stateSignal._hooks ||= {})[name] ||= (() => { const [get, set] = useState(initial); return ({ get, set }); })(),
    priority && (!stateSignal._priority || priority > stateSignal._priority) && (stateSignal[name] = stateSignal._hooks[name], stateSignal._priority = priority)
  );

  const classes = (layers = {}) =>
      Object.values(layers).map(l => l[0]).filter(Boolean).join(" ");

  /* ────────────────────────────────────────────────────────────────────────────
   * BASE LAYERS
   * ──────────────────────────────────────────────────────────────────────────── */

  let container, slider, text, bubble;

    (() =>
    (
        container = {
            base:layer("base", "container")
        }
    )
  )();

  (() =>
    (
      slider = {
        base: layer("base", "slider"),
        track: layer("track", "slider"),
        thumb: layer("thumb", "slider"),
        size: layer("size", "slider"),
        color: layer("color", "slider"),
        shape: layer("shape", "slider"),
        layout: layer("layout", "slider"),
        interaction: layer("interaction", "slider")
      }
    )
  )();

    (() =>
    (
      text = {
        base: layer("text-base", "text"),
        position: layer("position", "text"),
        bubble: layer("bubble", "text"),
        color: layer("color", "text")
      }
    )
  )();

  (() =>
    (
    bubble = {
        base: layer("base", "bubble"),
        color: layer("color", "bubble"),
        size: layer("size", "bubble"),
        shape: layer("shape", "bubble")
    }
    )
    )();

  /* ────────────────────────────────────────────────────────────────────────────
   * DEFAULTS
   * ──────────────────────────────────────────────────────────────────────────── */

  (() =>
    (
      container.base( "inline-flex items-center select-none relative"),
      slider.base("appearance-none outline-none focus:outline-none transition-all duration-200"),
      slider.track("[&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-runnable-track]:rounded-full [&::-moz-range-track]:h-2 [&::-moz-range-track]:rounded-full"),
      slider.thumb("[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:-mt-1 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full"),
      slider.color("[&::-webkit-slider-runnable-track]:bg-gray-900 [&::-moz-range-track]:bg-gray-900"),
      slider.interaction("cursor-pointer"),
      slider.shape("rounded-full"),
      slider.layout("block"),
      slider.size("w-48"),
      text.base("text-gray-800 font-light font-mono text-xs absolute -top-8"),
      text.position("left-(--thumb-position) -translate-x-1/2 ml-(--thumb-margin)"),
      text.color("text-gray-800"),
      bubble.base("inline-block"),
      bubble.color("bg-white"),
      bubble.size("px-2 py-1"),
      bubble.shape("rounded shadow-md")
    )
  )();

  /* ────────────────────────────────────────────────────────────────────────────
   * SLIDER SIZE SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */

  (() =>
    (
      inputSignal.xs && slider.size("w-24"),
      inputSignal.sm && slider.size("w-32"),
      inputSignal.md && slider.size("w-48"),
      inputSignal.lg && slider.size("w-64"),
      inputSignal.xl && slider.size("w-80")
    )
  )();

  /* ────────────────────────────────────────────────────────────────────────────
   * BUBBLE SIZE SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */

  (() =>
  (
    inputSignal.bubbleXs && bubble.size("px-1 py-0.5 text-2xs"),
    inputSignal.bubbleSm && bubble.size("px-1.5 py-0.5 text-xs"),
    inputSignal.bubbleMd && bubble.size("px-2 py-1 text-xs"),
    inputSignal.bubbleLg && bubble.size("px-3 py-1.5 text-sm"),
    inputSignal.bubbleXl && bubble.size("px-4 py-2 text-base")
  )
)();

  /* ────────────────────────────────────────────────────────────────────────────
   * BUBBLE SHAPE SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */

(() =>
  (
    inputSignal.bubbleSquare &&
      bubble.shape("rounded-none shadow-sm"),
    inputSignal.bubblePill &&
      bubble.shape("rounded-full shadow-lg"),
    inputSignal.bubbleFlat &&
      bubble.shape("rounded shadow-none"),
    inputSignal.bubbleSharp &&
      bubble.shape("rounded-xl shadow-2xl")
  )
)();

  /* ────────────────────────────────────────────────────────────────────────────
   * COLOR SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */

  (() =>
    (
      inputSignal.primary && (
        slider.color("[&::-webkit-slider-runnable-track]:bg-blue-500 [&::-moz-range-track]:bg-blue-500"),
        bubble.color("bg-blue-600"),
        text.color("text-white")
    ),
      inputSignal.neutral && (
        slider.color("[&::-webkit-slider-runnable-track]:bg-gray-400 [&::-moz-range-track]:bg-gray-400"),
        bubble.color("bg-gray-500"),
        text.color("text-white")
      )
    )
  )();

  /* ────────────────────────────────────────────────────────────────────────────
   * SHAPE SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */

  (() =>
    (
      inputSignal.square &&
        slider.shape("[&::-webkit-slider-runnable-track]:rounded-none [&::-webkit-slider-thumb]:rounded-none [&::-moz-range-track]:rounded-none [&::-moz-range-thumb]:rounded-none")
    )
  )();

  /* ────────────────────────────────────────────────────────────────────────────
   * LAYOUT SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */

  (() =>
    (
      inputSignal.inline && slider.layout("inline-block"),
      inputSignal.block && slider.layout("block"),
      inputSignal.centered && slider.layout("mx-auto")
    )
  )();

  /* ────────────────────────────────────────────────────────────────────────────
   * INTERACTION SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */

  (() =>
    (
      inputSignal.disabled &&
        slider.interaction("opacity-50 pointer-events-none")
    )
  )();

  /* ────────────────────────────────────────────────────────────────────────────
   * DATA & STATE
   * ──────────────────────────────────────────────────────────────────────────── */

  (() =>
    (
      inputSignal.min && data("min"),
      inputSignal.max && data("max"),
      inputSignal.step && data("step"),
      inputSignal.ariaLabel && data("ariaLabel"),
      inputSignal.onChange && data("onChange"),
      inputSignal.defaultValue && data("defaultValue"),
      state("isSliding", 1, false),
      state("value", 2, dataSignal.defaultValue ?? 0)
    )
)();

    const thumbVars = () => {
        const percentage = ((stateSignal.value.get - (dataSignal.min ?? 0)) / 
                ((dataSignal.max ?? 100) - (dataSignal.min ?? 0))) * 100;
        return {
            position: `${percentage}%`,
            margin: `${Math.max(0, 5 - (percentage * 5 / 100))}px`
        };
    }
  /* ────────────────────────────────────────────────────────────────────────────
   * RENDER
   * ──────────────────────────────────────────────────────────────────────────── */

  return (
  <div className={classes(layerSignal.container)}>
    <input
      type="range"
      min={dataSignal.min ?? 0}
      max={dataSignal.max ?? 100}
      step={dataSignal.step ?? 1}
      value={stateSignal.value.get}
      aria-label={dataSignal.ariaLabel}
      disabled={inputSignal.disabled}
      onChange={(e) => {
        const v = Number(e.target.value);
        stateSignal.value?.set && stateSignal.value.set(v);
        dataSignal.onChange?.(v);
      }}
      onMouseUp={() => stateSignal.isSliding?.set && stateSignal.isSliding.set(false)}
      onMouseDown={() => stateSignal.isSliding?.set && stateSignal.isSliding.set(true)}
      onTouchStart={() => stateSignal.isSliding?.set && stateSignal.isSliding.set(true)}
      onTouchEnd={() => stateSignal.isSliding?.set && stateSignal.isSliding.set(false)}
      className={classes(layerSignal.slider)}
    />
    {stateSignal.isSliding?.get && (
         <div 
               className={classes(layerSignal.text)} 
                style={{ 
                    "--thumb-position": thumbVars().position, 
                    "--thumb-margin": thumbVars().margin 
                }}
        >
            <div className={classes(layerSignal.bubble)}>
                {Math.round(stateSignal.value.get)}</div>
        </div>
    )}
   
  </div>
  );
}
