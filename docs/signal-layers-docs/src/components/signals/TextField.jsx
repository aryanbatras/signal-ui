import { useState } from "react";

export function TextField(contract = {}) {
  /* ────────────────────────────────────────────────────────────────────────────
   * CONTRACT
   * ────────────────────────────────────────────────────────────────────────────
   *
   * TextField - Text input with floating label, validation, and helper messages
   *
   * Foundation: Native HTML input with floating label and validation states
   *
   * Signals:
   *   Size: xs, sm, md, lg, xl
   *   Color: primary, neutral, danger
   *   Shape: square
   *   Layout: inline, block, full
   *   State: disabled, readonly, invalid
   *   Variant: outline, fill, underline
   *
   * Data:
   *   value - Controlled value
   *   defaultValue - Uncontrolled initial value
   *   placeholder - Placeholder text
   *   label - Field label
   *   name - Input name
   *   onChange - Change handler
   *   onFocus - Focus handler
   *   onBlur - Blur handler
   *   ariaLabel - Accessibility label
   *   disabled - Disable input
   *   readOnly - Make input read-only
   *   hintMsg - Helper hint message
   *   errorMsg - Custom error message
   *   type - Input type (text, number, etc.)
   *   required - Required field validation
   *   pattern - Regex pattern validation
   *   min - Minimum value (for number type)
   *   max - Maximum value (for number type)
   *   step - Step increment (for number type)
   *
   * Defaults: md, neutral, block
   *
   * Usage:
   * <TextField label="Email" placeholder="you@example.com" />
   * <TextField sm primary outline />
   * <TextField danger invalid errorMsg="Invalid email" />
   * <TextField type="number" min={0} max={100} />
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

  const layer = (name, scope = "field") => (className) =>
    (layerSignal[scope] ||= {},
     layerSignal[scope][name] ||= [],
     (layerSignal[scope][name][0] = className));

  const data = (name, key = name) =>
    inputSignal[key] !== undefined && (dataSignal[name] = inputSignal[key]);

  const state = (name, priority = 0, initial = false) => (
    (stateSignal._hooks ||= {})[name] ||= (() => {
      const [get, set] = useState(initial);
      return { get, set };
    })(),
    priority &&
      (!stateSignal._priority || priority > stateSignal._priority) &&
      (stateSignal[name] = stateSignal._hooks[name],
       stateSignal._priority = priority)
  );

  const classes = (layers = {}) =>
    Object.values(layers).map(l => l[0]).filter(Boolean).join(" ");

  /* ────────────────────────────────────────────────────────────────────────────
   * BASE LAYERS
   * ──────────────────────────────────────────────────────────────────────────── */

  let container, label, input, hint, error;

  (() => (
    container = {
      base: layer("base", "container"),
      layout: layer("layout", "container")
    }
  ))();

  (() => (
    label = {
      base: layer("base", "label"),
      color: layer("color", "label"),
      layout: layer("layout", "label"),
      font: layer("font", "label"),
      size: layer("size", "label")
    }
  ))();

  (() => (
    input = {
      base: layer("base", "input"),
      size: layer("size", "input"),
      border: layer("border", "input"),
      color: layer("color", "input"),
      shape: layer("shape", "input"),
      hover: layer("hover", "input"),
      focus: layer("focus", "input"),
      text: layer("text", "input")
    }
  ))();

  (() => (
    hint = {
      base: layer("base", "hint"),
      color: layer("color", "hint")
    }
  ))();

  (() => (
    error = {
      base: layer("base", "error"),
      color: layer("color", "error")
    }
  ))();

  /* ────────────────────────────────────────────────────────────────────────────
   * DEFAULTS
   * ──────────────────────────────────────────────────────────────────────────── */

  (() => (
    container.base("flex flex-col gap-1 relative"),
    container.layout("block"),

    label.base("absolute pointer-events-none transition-all duration-500 bg-transparent"),
    label.layout("left-2 top-2 px-1"),
    label.color("text-gray-600"),
    label.font("font-light"),
    label.size("text-md"),

    input.base(
      "outline-none transition-all duration-200"
    ),
    input.border("border-0 border-b"),
    input.size("px-3 py-2"),
    input.color("bg-transparent"),
    input.shape("rounded-none"),
    input.hover("hover:border-gray-400"),
    input.focus("focus:border-gray-900"),
    input.text("text-md"),

    hint.base("text-xs"),
    hint.color("text-gray-500"),

    error.base("text-xs"),
    error.color("text-red-600")
  ))();

/* ────────────────────────────────────────────────────────────────────────────
   * VARIANT SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */

(() => (
  inputSignal.outline && (
    input.border("border-2 border-black/80"),
    input.color("bg-transparent"),
    input.shape("rounded-sm"),
    input.hover("hover:border-black/50"),
    input.focus("focus:border-black focus:ring-1 focus:ring-black"),
    label.layout("left-0 top-2 px-3")
  ),
  inputSignal.fill && (
    input.border("border-0 border-b"),
    input.color("bg-gray-400/30"),
    input.hover("hover:bg-gray-400/50"),
    input.focus("focus:bg-gray-400/80 focus:border-black focus:border-b-2"),
    label.color("text-gray-800")
  ),
  inputSignal.underline && (
    input.border("border-0 border-b-2"),
    input.color("bg-transparent"),
    input.hover("hover:border-gray-400"),
    input.focus("focus:border-gray-800 focus:border-b-4")
  )
))();

  /* ────────────────────────────────────────────────────────────────────────────
   * SIZE SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */

  (() => (
    inputSignal.xs && input.size("px-2 py-1 text-xs"),
    inputSignal.sm && input.size("px-2.5 py-1.5 text-xs"),
    inputSignal.md && input.size("px-3 py-2 text-sm"),
    inputSignal.lg && input.size("px-4 py-2.5 text-base"),
    inputSignal.xl && input.size("px-5 py-3 text-lg")
  ))();

  /* ────────────────────────────────────────────────────────────────────────────
   * COLOR SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */

  (() => (
    inputSignal.primary && (
      input.color("border-blue-500 focus:border-blue-600"),
      input.focus("focus:ring-blue-500")
    ),
    inputSignal.neutral && (
      input.color("border-gray-300 focus:border-gray-700"),
      input.focus("focus:ring-gray-700")
    ),
    inputSignal.danger && (
      input.color("border-red-500 focus:border-red-600"),
      input.focus("focus:ring-red-500"),
      label.color("text-red-600")
    )
  ))();

  /* ────────────────────────────────────────────────────────────────────────────
   * SHAPE SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */

  (() => (
    inputSignal.square &&
      input.shape("rounded-none")
  ))();

  /* ────────────────────────────────────────────────────────────────────────────
   * LAYOUT SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */

  (() => (
    inputSignal.inline && container.layout("inline-flex"),
    inputSignal.block && container.layout("block"),
    inputSignal.full && input.base("w-full")
  ))();

  /* ────────────────────────────────────────────────────────────────────────────
   * INTERACTION & STATE SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */

  (() => (
    inputSignal.disabled &&
      input.focus("opacity-50 pointer-events-none"),
    inputSignal.readonly &&
      input.focus("bg-gray-100 cursor-default"),
    inputSignal.invalid &&
      input.color("border-red-500")
  ))();

  /* ────────────────────────────────────────────────────────────────────────────
   * DATA & STATE
   * ──────────────────────────────────────────────────────────────────────────── */

  (() => (
    inputSignal.value && data("value"),
    inputSignal.defaultValue && data("defaultValue"),
    inputSignal.placeHolder && data("placeholder"),
    inputSignal.label && data("label"),
    inputSignal.name && data("name"),
    inputSignal.onChange && data("onChange"),
    inputSignal.onFocus && data("onFocus"),
    inputSignal.onBlur && data("onBlur"),
    inputSignal.ariaLabel && data("ariaLabel"),
    inputSignal.disabled && data("disabled"),
    inputSignal.readOnly && data("readOnly"),
    inputSignal.hintMsg && data("hintMsg"),
    inputSignal.errorMsg && data("errorMsg"),
    inputSignal.type && data("type"),
    inputSignal.required && data("required"),
    inputSignal.pattern && data("pattern"),
    data("cachedPattern"),
    state("value", 1, dataSignal.defaultValue ?? ""),
    state("focused", 2, false),
    state("touched", 3, false),
    state("error", 4, false)
  ))();

    (() => (
    inputSignal.type === "number" && (
        inputSignal.min && data("min"),
        inputSignal.max && data("max"),
        inputSignal.step && data("step")
    )
    ))();

  /* ────────────────────────────────────────────────────────────────────────────
   * DYNAMIC CLASSES
   * ──────────────────────────────────────────────────────────────────────────── */

(() => (
        (stateSignal.focused?.get || stateSignal.value.get) && (
            label.layout("left-2 -top-4 px-1"),
            label.size("text-xs")
        )
))();

(() => (
  dataSignal.pattern && (
    dataSignal.cachedPattern = new RegExp(dataSignal.pattern)
  )
))();

  /* ────────────────────────────────────────────────────────────────────────────
   * RENDER
   * ──────────────────────────────────────────────────────────────────────────── */

  return (
    <div className={classes(layerSignal.container)}>

      {dataSignal.label && (
        <label 
            className={classes(layerSignal.label)}
        >
            {dataSignal.label}
        </label>
        )}

      <input
        type={dataSignal.type ?? "text"}
        name={dataSignal.name}
        aria-label={dataSignal.ariaLabel}
        placeholder=" "
        pattern={dataSignal.pattern}
        disabled={dataSignal.disabled}
        readOnly={dataSignal.readOnly}
        value={stateSignal.value?.get}
        required={dataSignal.required}
        min={dataSignal.min}
        max={dataSignal.max}
        step={dataSignal.step}
        onChange={(e) => {
          const v = e.target.value;
          stateSignal.value?.set && stateSignal.value.set(v);
          dataSignal.onChange?.(v);
            stateSignal.error?.set && stateSignal.error.set(
                (dataSignal.required && !(v)) ||
                (dataSignal.pattern && v && !dataSignal.cachedPattern.test(v)) ||
  (dataSignal.type === "number" && dataSignal.min && Number(v) < Number(dataSignal.min)) ||
  (dataSignal.type === "number" && dataSignal.max && Number(v) > Number(dataSignal.max))
            )
        }}
         onFocus={(e) => {
            stateSignal.focused?.set && stateSignal.focused.set(true);
            dataSignal.onFocus?.(e.target.value);
         }}
        onBlur={(e) => {
            stateSignal.focused?.set && stateSignal.focused.set(false);
            stateSignal.touched?.set && stateSignal.touched.set(true);
            dataSignal.onBlur?.(e.target.value);
        }}
        className={classes(layerSignal.input)}
      />
      
        {stateSignal.error?.get && (
        <div className={classes(layerSignal.error)}>
            {
            dataSignal.errorMsg || 
            (dataSignal.required && !(stateSignal.value?.get) ? "This field is required" : "Invalid format")
            }
        </div>
        )}

        {dataSignal.hintMsg && stateSignal.focused?.get && !stateSignal.error?.get && (
        <div className={classes(layerSignal.hint)}>
            {dataSignal.hintMsg}
        </div>
        )}


    </div>
  );
}
