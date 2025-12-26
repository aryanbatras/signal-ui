import { Button } from "./Button";

export function FabMenu(contract = {}) {
  /* ────────────────────────────────────────────────────────────────────────────
   * CONTRACT
   * ────────────────────────────────────────────────────────────────────────────
   *
   * SIGNALS:
   *   POSITION:       bottomRight, bottomLeft, topRight, topLeft
   *   LAYOUT:         actionsTop, actionsBottom, actionsLeft, actionsRight
   *   SIZE:           sm, md, lg (via Button)
   *   STATE:          disabled (via Button)
   *   VISIBILITY:     isOpen (toggles menu)
   *
   * LEASES:
   *   icon            Icon for the FAB button
   *   actions         Array of { icon, label, onClick } objects
   *   onToggle        Callback when menu is toggled
   *
   * ──────────────────────────────────────────────────────────────────────────── */

  const [signals, signalLayers, leases] = [{ ...contract }, {}, {}];

  /* ────────────────────────────────────────────────────────────────────────────
   * CONTRACT TOOLS
   * ──────────────────────────────────────────────────────────────────────────── */

  const layer = (name, scope = "root") => (className) =>
    (signalLayers[scope] ||= {},
     signalLayers[scope][name] ||= [],
     (signalLayers[scope][name][0] = className));

  const lease = (name, key = name) =>
    signals[key] && (leases[name] = signals[key]);

  const classes = (layers = {}) =>
    Object.values(layers).map(l => l[0]).filter(Boolean).join(" ");

  /* ────────────────────────────────────────────────────────────────────────────
   * BASE LAYERS
   * ──────────────────────────────────────────────────────────────────────────── */

  const rootBase           = layer("base", "root");
  const rootPosition       = layer("position", "root");
  const escape             = layer("escape", "root");

  const fabBase            = layer("base", "fab");
  const fabLayout          = layer("layout", "fab");

  const actionsBase        = layer("base", "actions");
  const actionsLayout      = layer("layout", "actions");
  const actionsVisibility  = layer("visibility", "actions");
  const actionsAnimation   = layer("animation", "actions");

  const actionItemBase     = layer("base", "item");

  /* ────────────────────────────────────────────────────────────────────────────
   * DEFAULTS
   * ──────────────────────────────────────────────────────────────────────────── */

  (
    rootBase("fixed z-50"),
    rootPosition("bottom-6 right-6"),

    fabLayout("flex items-center justify-center z-10"),

    actionsBase("absolute flex z-40"),
    actionsLayout("flex flex-col-reverse items-center absolute gap-2 bottom-full right-1/2 translate-x-1/2 mb-3 w-auto min-w-[40px]"),
    actionsVisibility("opacity-0 pointer-events-none"),
    actionsAnimation("transition-all duration-300"),

    actionItemBase("flex items-center justify-center")
  );

  /* ────────────────────────────────────────────────────────────────────────────
   * POSITION SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */

  signals.bottomRight && rootPosition("bottom-6 right-6");
  signals.bottomLeft  && rootPosition("bottom-6 left-6");
  signals.topRight    && rootPosition("top-6 right-6");
  signals.topLeft     && rootPosition("top-6 left-6");

  /* ────────────────────────────────────────────────────────────────────────────
   * LAYOUT SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */

    signals.actionsTop && actionsLayout(
    "flex flex-col-reverse items-center absolute gap-2 bottom-full right-1/2 translate-x-1/2 mb-3 w-auto min-w-[40px]"
    );

    signals.actionsBottom && actionsLayout(
    "flex flex-col-reverse items-center absolute gap-2 top-full right-1/2 translate-x-1/2 mb-3 w-auto min-w-[40px]"
    );

    signals.actionsLeft && actionsLayout(
    "flex flex-col items-center absolute gap-2 right-full top-0 mr-2"
    );

    signals.actionsRight && actionsLayout(
    "flex flex-col items-center absolute gap-2 left-full top-0 ml-2"
    );

  /* ────────────────────────────────────────────────────────────────────────────
   * SIZE SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */

  signals.sm && fabBase("w-8 h-8");
  signals.md && fabBase("w-10 h-10");
  signals.lg && fabBase("w-12 h-12");
  signals.xl && fabBase("w-14 h-14");

  /* ────────────────────────────────────────────────────────────────────────────
   * VISIBILITY SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */

  signals.isOpen && actionsVisibility("opacity-100 pointer-events-auto");

  signals.disabled && (
    fabBase("opacity-50 pointer-events-none"),
    actionsVisibility("hidden")
  );

  /* ────────────────────────────────────────────────────────────────────────────
   * ESCAPE & LEASES
   * ──────────────────────────────────────────────────────────────────────────── */

    signals.class     && escape(signals.class);
    signals.className && escape(signals.className);

    signals.icon      && lease("icon");
    signals.actions   && lease("actions");
    signals.onToggle  && lease("onToggle");

  /* ────────────────────────────────────────────────────────────────────────────
   * INTERNAL COMPONENTS
   * ──────────────────────────────────────────────────────────────────────────── */

  const ActionButton = ({ action }) => (
    <Button
      circle
      sm
      ghost
      onClick={action.onClick}
      aria-label={action.label}
      className={classes(signalLayers.item)}
    >
      {action.icon}
    </Button>
  );

  /* ────────────────────────────────────────────────────────────────────────────
   * RENDER
   * ──────────────────────────────────────────────────────────────────────────── */

  return (
    <div className={classes(signalLayers.root)}>
      <div className={classes(signalLayers.actions)}>
        {leases.actions?.map((action, i) => (
          <ActionButton key={i} action={action} />
        ))}
      </div>

      <Button
        circle
        md
        cta
        aria-haspopup="true"
        aria-expanded={signals.isOpen}
        onClick={() => leases.onToggle?.()}
        className={classes(signalLayers.fab)}
      >
        {leases.icon}
      </Button>
    </div>
  );
}
