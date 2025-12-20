/**
 * Button — Signal UI (Canonical Single-File Component)
 *
 * PURPOSE
 * -------
 * A complete, ownable button built on intent.
 * This file is the documentation.
 * This file is the system.
 *
 * CONTRACT (GUARANTEES)
 * --------------------
 * - Semantic <button>
 * - Keyboard accessible
 * - Focus-visible
 * - Disabled is respected
 * - Works without motion
 * - Works without icons
 * - Works without JS enhancements
 *
 * MENTAL MODEL
 * ------------
 * - Props are signals (boolean only)
 * - Signals express intent
 * - Intent is interpreted in layers
 * - Layers are independent dimensions
 * - Defaults are structural, not implicit
 *
 * HOW TO EXTEND
 * -------------
 * - Add a new signal (boolean)
 * - Decide which layer reacts to it
 * - Add one `if (signal)` line
 * - Done
 *
 * NOTHING IS HIDDEN
 * -----------------
 * - No helpers
 * - No variants
 * - No config
 * - No magic
 */

export function Button({
  /* --------------------------------------------------
   * SEMANTIC INTENT (what this button means)
   * -------------------------------------------------- */
  primary,
  secondary,
  neutral,
  success,
  warning,
  danger,

  /* --------------------------------------------------
   * SURFACE INTENT (how strong it appears)
   * -------------------------------------------------- */
  solid,
  soft,
  outline,
  ghost,
  link,

  /* --------------------------------------------------
   * SIZE / DENSITY
   * -------------------------------------------------- */
  xs,
  sm,
  md,
  lg,

  /* --------------------------------------------------
   * SHAPE
   * -------------------------------------------------- */
  square,
  rounded,
  pill,
  circle,

  /* --------------------------------------------------
   * COMPOSITION
   * -------------------------------------------------- */
  iconOnly,
  hasIcon,
  loading,

  /* --------------------------------------------------
   * LAYOUT
   * -------------------------------------------------- */
  block,

  /* --------------------------------------------------
   * BEHAVIOR (optional motion / feedback)
   * -------------------------------------------------- */
  hoverMotion,
  pressMotion,

  /* --------------------------------------------------
   * STATE
   * -------------------------------------------------- */
  disabled,
  active,

  /* --------------------------------------------------
   * JS-LEVEL INTENT
   * -------------------------------------------------- */
  submitForm,

  /* --------------------------------------------------
   * ESCAPE HATCH
   * -------------------------------------------------- */
  className = "",
  children,
  ...props
}) {
  const classes = [];

  /* ==================================================
   * FOUNDATION (always applied)
   * ================================================== */
  classes.push(
    "inline-flex items-center justify-center",
    "select-none",
    "font-medium",
    "transition-all duration-150",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:opacity-50 disabled:pointer-events-none"
  );

  /* ==================================================
   * SEMANTIC LAYER
   * ================================================== */
  if (primary) classes.push("text-white");
  if (secondary) classes.push("text-neutral-900");
  if (neutral) classes.push("text-neutral-800");
  if (success) classes.push("text-green-700");
  if (warning) classes.push("text-yellow-800");
  if (danger) classes.push("text-red-700");

  if (!primary && !secondary && !neutral && !success && !warning && !danger) {
    classes.push("text-neutral-900");
  }

  /* ==================================================
   * SURFACE LAYER
   * ================================================== */
  if (solid) classes.push("bg-current");
  if (soft) classes.push("bg-current/10");
  if (outline) classes.push("border border-current");
  if (ghost) classes.push("bg-transparent");
  if (link) classes.push("bg-transparent underline p-0");

  if (!solid && !soft && !outline && !ghost && !link) {
    classes.push("bg-neutral-100");
  }

  /* ==================================================
   * SIZE LAYER
   * ================================================== */
  if (xs) classes.push("px-2 py-1 text-xs");
  if (sm) classes.push("px-3 py-1.5 text-sm");
  if (md) classes.push("px-4 py-2 text-base");
  if (lg) classes.push("px-6 py-3 text-lg");

  if (!xs && !sm && !md && !lg) {
    classes.push("px-4 py-2 text-base");
  }

  /* ==================================================
   * SHAPE LAYER
   * ================================================== */
  if (square) classes.push("rounded-none");
  if (rounded) classes.push("rounded-md");
  if (pill) classes.push("rounded-full");
  if (circle) classes.push("rounded-full aspect-square p-0");

  if (!square && !rounded && !pill && !circle) {
    classes.push("rounded-md");
  }

  /* ==================================================
   * COMPOSITION LAYER
   * ================================================== */
  if (iconOnly) classes.push("p-2");
  if (hasIcon) classes.push("gap-2");
  if (loading) classes.push("pointer-events-none opacity-70");

  /* ==================================================
   * LAYOUT LAYER
   * ================================================== */
  if (block) classes.push("w-full");

  /* ==================================================
   * BEHAVIOR LAYER
   * ================================================== */
  if (hoverMotion) classes.push("hover:scale-105");
  if (pressMotion) classes.push("active:scale-95");

  /* ==================================================
   * STATE LAYER
   * ================================================== */
  if (active) classes.push("ring-2 ring-current");

  /* ==================================================
   * JS-LEVEL INTENT
   * ================================================== */
  if (submitForm) props.type = "submit";
  if (disabled) props.disabled = true;

  /* ==================================================
   * ESCAPE HATCH
   * ================================================== */
  if (className) classes.push(className);

  return (
    <button {...props} className={classes.join(" ")}>
      {loading ? "Loading…" : children}
    </button>
  );
}
