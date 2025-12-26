import { Button } from "./Button";

export function Dropdown(contract = {}) {
  /* ────────────────────────────────────────────────────────────────────────────
   * CONTRACT
   * ────────────────────────────────────────────────────────────────────────────
   *
   * SIGNALS:
   *   VISIBILITY:   isOpen
   *   POSITION:     top, bottom, left, right
   *   ALIGN:        start, center, end
   *   SIZE:         xs, sm, md, lg
   *   STYLE:        ghost, solid, outlined
   *   ANIMATION:    fade, scale, slide
   *   LAYOUT:       inline, block, centered
   *   STATE:        disabled
   *
   * LEASES:
   *   menuName
   *   items
   *   onItemSelect
   *   onMenuClick
   *
   * ESCAPE:
   *   class, className
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
  
    const rootBase        = layer("base", "root");
    const rootLayout      = layer("layout", "root");
    const escape          = layer("escape", "root");

    const triggerBase     = layer("base", "trigger");

    const menuBase        = layer("base", "menu");
    const menuSize        = layer("size", "menu");
    const menuLayout      = layer("layout", "menu");
    const menuShape       = layer("shape", "menu");
    const menuShadow      = layer("shadow", "menu");
    const menuColor       = layer("color", "menu");
    const menuPosition    = layer("position", "menu");
    const menuAnimation   = layer("animation", "menu");
    const menuVisibility  = layer("visibility", "menu");
  
    const itemBase        = layer("base", "item");
    const itemHover       = layer("hover", "item");

  /* ────────────────────────────────────────────────────────────────────────────
   * DEFAULTS
   * ──────────────────────────────────────────────────────────────────────────── */

  (
    rootBase("relative"),
    rootLayout("inline-block"),
    triggerBase("cursor-pointer select-none"),
    menuBase("absolute z-50"),
    menuLayout("flex flex-col"),
    menuShape("rounded-lg"),
    menuShadow("shadow-lg"),
    menuColor("bg-white/90 text-gray-800"),
    menuVisibility("opacity-0 pointer-events-none"),
    menuAnimation("transition-all duration-200"),
    menuPosition("top-full left-0 mt-2"),
    menuSize("min-w-40 text-sm"),
    itemBase("px-4 py-2 whitespace-nowrap"),
    itemHover("hover:bg-gray-100 hover:rounded-lg cursor-pointer")
  );

  /* ────────────────────────────────────────────────────────────────────────────
   * SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */

  signals.bottom && menuPosition("top-full left-0 mt-2");
  signals.top    && menuPosition("bottom-full left-0 mb-2");
  signals.right  && menuPosition("left-full top-0 ml-2");
  signals.left   && menuPosition("right-full top-0 mr-2");

  signals.start  && menuPosition("left-0");
  signals.center && menuPosition("left-1/2 -translate-x-1/2");
  signals.end    && menuPosition("right-0");

  signals.xs && menuSize("min-w-28 text-xs");
  signals.sm && menuSize("min-w-36 text-sm");
  signals.md && menuSize("min-w-44 text-base");
  signals.lg && menuSize("min-w-56 text-lg");
  signals.xl && menuSize("min-w-64 text-xl");

  signals.isOpen && menuVisibility("opacity-100 pointer-events-auto");

  signals.block    && rootLayout("block w-full");
  signals.inline   && rootLayout("inline-block");
  signals.centered && rootLayout("mx-auto");

  signals.disabled && (
    triggerBase("opacity-50 pointer-events-none"),
    menuVisibility("hidden")
  );

  /* ────────────────────────────────────────────────────────────────────────────
   * ESCAPE & LEASES
   * ──────────────────────────────────────────────────────────────────────────── */

  signals.class     && escape(signals.class);
  signals.className && escape(signals.className);

  signals.items         && lease("items");
  signals.menuName      && lease("menuName");
  signals.onItemSelect  && lease("onItemSelect");
  signals.onMenuClick   && lease("onMenuClick");

  /* ────────────────────────────────────────────────────────────────────────────
   * INTERNAL COMPONENTS
   * ──────────────────────────────────────────────────────────────────────────── */

    const DropdownItem = ({ item }) => (
    <div
        className={classes(signalLayers.item)}
        onClick={() => leases.onItemSelect?.(item)}
        {...(item.href ? { href: item.href, onClick: e => e.stopPropagation() } : {})}
    >
        {item.label}
    </div>
    );

  /* ────────────────────────────────────────────────────────────────────────────
   * RENDER
   * ──────────────────────────────────────────────────────────────────────────── */

  return (
    <div className={classes(signalLayers.root)}>
      <Button 
      className={classes(signalLayers.trigger)}
      onClick={() => leases.onMenuClick?.()}
      ghost  activeNone innerShadow
      >
        {leases.menuName}
      </Button>

      <div className={classes(signalLayers.menu)}>
        {leases.items?.map((item, i) => (
          <DropdownItem key={i} item={item} />
        ))}
      </div>
    </div>
  );
}
