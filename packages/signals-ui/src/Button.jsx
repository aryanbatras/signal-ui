/**
 * Button — Signal UI (canonical)
 *
 * Foundation:
 * - semantic <button>, minimal a11y (focus-visible)
 *
 * Signals:
 * - Structural: primary, secondary
 * - Size: sm, md, lg
 * - Shape: rounded, pill
 * - Interaction: hoverEnlarge, hoverInvert, pressShrink
 * - JS-level: submitForm, confirmOnClick
 *
 * Defaults:
 * - If no size provided: md
 * - If no tone provided: neutral
 *
 * Example:
 * <Button primary lg rounded hoverEnlarge>Continue</Button>
 */

export function Button({
  // structural
  primary,
  secondary,

  // sizes
  sm,
  md,
  lg,

  // shape
  rounded,
  pill,

  // interaction
  hoverEnlarge,
  hoverInvert,
  pressShrink,

  // js-level
  submitForm,
  confirmOnClick,
  onClick,

  // escape
  className = "",
  children,
  ...props
}) {
  const classes = [];

  // -----------------------
  // Foundation
  // -----------------------
  classes.push(
    "inline-flex items-center justify-center",
    "select-none",
    "transition-all duration-150",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
  );

  // -----------------------
  // Tone / visual
  // -----------------------
  if (primary) classes.push("bg-pink-600 text-white");
  if (secondary) classes.push("bg-white text-black border");
  if (!primary && !secondary) classes.push("bg-neutral-100 text-neutral-900");

  // -----------------------
  // Sizes
  // -----------------------
  if (sm) classes.push("px-2 py-1 text-sm");
  if (md) classes.push("px-4 py-2 text-base");
  if (lg) classes.push("px-6 py-3 text-lg");
  if (!sm && !md && !lg) classes.push("px-4 py-2 text-base"); // default

  // -----------------------
  // Shape
  // -----------------------
  if (rounded) classes.push("rounded-md");
  if (pill) classes.push("rounded-full");

  // -----------------------
  // Interaction (verb-intent)
  // -----------------------
  if (hoverEnlarge) classes.push("hover:scale-105");
  if (hoverInvert) classes.push("hover:bg-white hover:text-black");
  if (pressShrink) classes.push("active:scale-95");

  // -----------------------
  // JS-level signals (tiny inline behavior)
  // -----------------------
  if (submitForm) props.type = "submit";
  if (confirmOnClick) onClick = e => { if (confirm("Are you sure?")) typeof props.onClick === "function" && props.onClick(e); };

  // -----------------------
  // Escape hatch
  // -----------------------
  if (className) classes.push(className);

  return (
    <button {...props} onClick={onClick} className={classes.join(" ")}>
      {children}
    </button>
  );
}


