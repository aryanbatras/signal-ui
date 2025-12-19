/**
 * Button — Signal UI
 *
 * This file is intentionally incomplete.
 * It declares stable foundations and open intent slots.
 *
 * You are expected to evolve this file over time.
 */

export function Button({
  /* ==================================================
   * FOUNDATIONAL INTENT (rarely changes)
   * ================================================== */

  primary,
  secondary,

  sm,
  md,
  lg,

  /* ==================================================
   * BRAND INTENT SLOT
   * Your product’s visual language lives here.
   * Start empty. Grow slowly.
   * ================================================== */

  // example:
  // brandSoft,
  // brandLoud,

  /* ==================================================
   * MOTION INTENT SLOT
   * Motion is optional and local to your taste.
   * This slot stays empty by default.
   * ================================================== */

  // example:
  // hoverFadeUp,
  // hoverSpring,

  /* ==================================================
   * EXPERIMENTAL INTENT SLOT
   * Unsafe ideas, A/B tests, wild stuff.
   * Expect churn here.
   * ================================================== */

  // example:
  // glowOnHover,
  // pulseOnIdle,

  /* ==================================================
   * NATIVE BEHAVIOR
   * ================================================== */

  submitForm,

  /* ==================================================
   * ESCAPE
   * ================================================== */

  className = "",
  children,
  ...props
}) {
  const classes = [];

  /* ==================================================
   * FOUNDATION (guarantees)
   * ================================================== */

  classes.push(
    "inline-flex items-center justify-center",
    "font-medium",
    "transition-all duration-150",
    "focus:outline-none focus-visible:ring-2",
    "disabled:opacity-50 disabled:cursor-not-allowed"
  );

  /* ==================================================
   * FOUNDATIONAL RESOLUTION
   * ================================================== */

  if (primary) classes.push("bg-neutral-900 text-white");
  else if (secondary) classes.push("bg-white text-neutral-900 border");
  else classes.push("bg-neutral-100 text-neutral-900");

  if (sm) classes.push("px-2 py-1 text-sm");
  else if (md) classes.push("px-4 py-2 text-base");
  else if (lg) classes.push("px-6 py-3 text-lg");
  else classes.push("px-4 py-2 text-base");

  /* ==================================================
   * BRAND SLOT (empty by default)
   * ================================================== */

  // if (brandSoft) classes.push(...)
  // if (brandLoud) classes.push(...)

  /* ==================================================
   * MOTION SLOT (empty by default)
   * ================================================== */

  // if (hoverFadeUp) classes.push(...)
  // if (hoverSpring) ...

  /* ==================================================
   * EXPERIMENTAL SLOT
   * ================================================== */

  // try things here, delete freely

  /* ==================================================
   * NATIVE BEHAVIOR
   * ================================================== */

  if (submitForm) props.type = "submit";

  /* ==================================================
   * FINAL OVERRIDE
   * ================================================== */

  if (className) classes.push(className);

  return (
    <button {...props} className={classes.join(" ")}>
      {children}
    </button>
  );
}
