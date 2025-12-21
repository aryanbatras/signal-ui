/**
 * ──────────────────────────────────────────────────────────────────────────────
 * Button Component — Signal Contract & Reference Implementation
 * ──────────────────────────────────────────────────────────────────────────────
 *
 * This file defines the complete behavioral and structural contract of <Button />.
 *
 * The Button component is implemented as a signal-resolved system, where every
 * prop represents an explicit and predictable intention expressed by the caller.
 *
 * This file serves three purposes:
 *   1. Defines the public contract of the Button component
 *   2. Documents how signals are resolved and composed
 *   3. Acts as the reference pattern for building future components
 *
 * The implementation below intentionally avoids indirection, configuration
 * objects, and implicit behavior. All behavior is visible and editable here.
 *
 * ──────────────────────────────────────────────────────────────────────────────
 * BUTTON CONTRACT
 * ──────────────────────────────────────────────────────────────────────────────
 *
 * The Button component accepts a single object argument called the "contract".
 *
 *   export function Button(contract = {})
 *
 * The contract may contain the following categories of signals:
 *
 *   1. Structural Signals
 *      - Influence visual identity and layout
 *      - Mutually exclusive within defined groups (layers)
 *
 *   2. Content Signals
 *      - Provide renderable content
 *      - Preserved verbatim and never interpreted as styling
 *
 *   3. Native Attribute Signals
 *      - Passed directly to the underlying <button> element
 *      - Maintain full HTML and accessibility compatibility
 *
 * Every signal is:
 *   - Optional
 *   - Processed exactly once
 *   - Deterministically resolved
 *
 * Unknown or unused signals are intentionally ignored.
 *
 * ──────────────────────────────────────────────────────────────────────────────
 * STRUCTURAL SIGNAL GROUPS (LAYERS)
 * ──────────────────────────────────────────────────────────────────────────────
 *
 * Structural signals are organized into mutually exclusive groups called "layers".
 *
 * Layers defined by this component:
 *
 *   semantic  → visual intent / tone (primary, secondary, default)
 *   surface   → surface treatment (ghost, outline, link)
 *   size      → physical dimensions (xs → xl)
 *   shape     → geometry (pill, rounded, square, circle)
 *   layout    → layout behavior (block)
 *   override  → escape hatch for direct class injection
 *
 * Resolution Rules:
 *   - Only one signal may win per layer
 *   - If multiple signals from the same layer are provided:
 *       → The last processed signal wins
 *       → No warnings are emitted
 *
 * This guarantees deterministic output without runtime validation.
 *
 * ──────────────────────────────────────────────────────────────────────────────
 * CONTENT SIGNALS (LEASES)
 * ──────────────────────────────────────────────────────────────────────────────
 *
 * Content signals represent renderable data that must be preserved verbatim.
 *
 * Defined leases:
 *   - children
 *
 * Leased values:
 *   - Are removed from the signal pool
 *   - Do not participate in class resolution
 *   - Are rendered explicitly in JSX
 *
 * ──────────────────────────────────────────────────────────────────────────────
 * NATIVE ATTRIBUTE SIGNALS (SPREADS)
 * ──────────────────────────────────────────────────────────────────────────────
 *
 * Native signals are forwarded directly to the <button> element.
 *
 * Supported native attributes:
 *   - onClick
 *   - disabled
 *   - type
 *
 * These signals:
 *   - Are removed from the signal pool
 *   - Are spread without transformation
 *
 * ──────────────────────────────────────────────────────────────────────────────
 * EXTENSION GUARANTEES
 * ──────────────────────────────────────────────────────────────────────────────
 *
 * Developers may safely:
 *   - Add new layers
 *   - Add new structural signals
 *   - Define composite signals (presets)
 *   - Modify defaults
 *   - Remove unused signals
 *
 * All changes remain local to this file and do not affect other components.
 *
 * ──────────────────────────────────────────────────────────────────────────────
 */

export function Button(contract = {}) {

  /* ────────────────────────────────────────────────────────────────────────────
   * INTERNAL STATE
   * ──────────────────────────────────────────────────────────────────────────── */

  const signalLayers = {}; // Stores resolved classes per layer
  const leases = {};      // Stores renderable content
  const spreads = {};     // Stores native HTML attributes

  /**
   * Clone the incoming contract to ensure:
   *   - Signals can be consumed destructively
   *   - Each signal is processed exactly once
   */
  const signals = { ...contract };

  /* ────────────────────────────────────────────────────────────────────────────
   * HELPERS
   * ──────────────────────────────────────────────────────────────────────────── */

  /**
   * layer(name)
   *
   * Creates a resolver for a mutually exclusive signal group.
   *
   * Behavior:
   *   - Each layer stores exactly one resolved class
   *   - If signalKey is provided and present:
   *       → className is applied
   *       → signal is deleted
   *   - If signalKey is omitted:
   *       → className is applied unconditionally (default)
   */
  const layer = (name) => (className, signalKey) =>
    (signalLayers[name] = signalLayers[name] || [],
     signalKey && signals[signalKey]
       ? (signalLayers[name][0] = className, delete signals[signalKey])
       : !signalKey && (signalLayers[name][0] = className));

  /**
   * lease(name, key)
   *
   * Extracts content from the contract for rendering.
   */
  const lease = (name, key = name) =>
    signals[key] && (leases[name] = signals[key], delete signals[key]);

  /**
   * spread(name, key)
   *
   * Extracts native attributes for direct forwarding.
   */
  const spread = (name, key = name) =>
    signals[key] && (spreads[name] = signals[key], delete signals[key]);

  /* ────────────────────────────────────────────────────────────────────────────
   * LAYER DEFINITIONS
   * ──────────────────────────────────────────────────────────────────────────── */

  const semantic = layer("semantic");
  const surface  = layer("surface");
  const size     = layer("size");
  const shape    = layer("shape");
  const layout   = layer("layout");
  const override = layer("override");

  /* ────────────────────────────────────────────────────────────────────────────
   * DEFAULT FOUNDATION
   * ──────────────────────────────────────────────────────────────────────────── */

  shape("rounded-xs");
  surface("shadow-xl");
  size("px-4 py-2 text-base");
  semantic("bg-black text-white");

  /* ────────────────────────────────────────────────────────────────────────────
   * STRUCTURAL SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */

  signals.primary   && semantic("bg-blue-500 text-neutral-100", "primary");
  signals.secondary && semantic("bg-pink-800 text-neutral-100", "secondary");

  signals.xs && size("px-2 py-1 text-xs", "xs");
  signals.sm && size("px-3 py-1.5 text-sm", "sm");
  signals.md && size("px-4 py-2 text-base", "md");
  signals.lg && size("px-6 py-3 text-lg", "lg");
  signals.xl && size("px-8 py-4 text-xl", "xl");

  signals.pill   && shape("rounded-full", "pill");
  signals.rounded&& shape("rounded-lg", "rounded");
  signals.square && shape("rounded-none", "square");
  signals.circle && shape("rounded-full aspect-square p-0", "circle");

  signals.ghost   && surface("bg-transparent", "ghost");
  signals.outline && surface("border border-current", "outline");
  signals.link    && surface("bg-transparent underline p-0", "link");

  signals.block && layout("w-full", "block");

  /* ────────────────────────────────────────────────────────────────────────────
   * ESCAPE HATCH
   * ──────────────────────────────────────────────────────────────────────────── */

  signals.className && override(signals.className, "className");

  /* ────────────────────────────────────────────────────────────────────────────
   * COMPOSITE SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */

  signals.home && (() => (
    semantic("bg-pink-800 text-neutral-100"),
    size("px-6 py-3 text-lg"),
    shape("rounded-full"),
    layout("w-full")
  ))(), delete signals.home;
  /* ────────────────────────────────────────────────────────────────────────────
   * CONTENT & NATIVE ATTRIBUTES
   * ──────────────────────────────────────────────────────────────────────────── */

  signals.children && lease("children");

  signals.disabled && spread("disabled");
  signals.onClick  && spread("onClick");
  signals.type     && spread("type");

  /* ────────────────────────────────────────────────────────────────────────────
   * RENDER
   * ──────────────────────────────────────────────────────────────────────────── */

  return (
    <button
      {...spreads}
      className={Object.values(signalLayers)
        .map(layer => layer[0])
        .filter(Boolean)
        .join(" ")}
    >
      {leases.children}
    </button>
  );
}
