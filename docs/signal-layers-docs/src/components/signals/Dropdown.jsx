import { Button } from "./Button";
import { useState } from "react";

export function Dropdown(contract = {}) {
  /* ────────────────────────────────────────────────────────────────────────────
   * CONTRACT
   * ────────────────────────────────────────────────────────────────────────────
   *
   * Foundation: Button trigger with dropdown menu list
   *
   * Signals:
   *   Position: top, bottom, left, right
   *   Align: start, center, end
   *   Size: xs, sm, md, lg
   *   Layout: inline, block, centered
   *   State: disabled
   *   Interaction: reactClick, reactHover
   *
   * Data:
   *   menuName - Text for trigger button
   *   items - Array of {label, onClick, href?} objects
   *   onItemSelect - Callback when item selected
   *   onMenuClick - Callback when menu clicked
   *
   * Defaults: bottom, start, sm, inline, reactClick
   *
   * Usage:
   * <Dropdown menuName="Menu" items={[{label:"Item 1", onClick:() => {}}]} />
   *
   * ──────────────────────────────────────────────────────────────────────────── */

  const [inputSignal, layerSignal, dataSignal, stateSignal] = [{ ...contract }, {}, {}, {}];

  /* ────────────────────────────────────────────────────────────────────────────
   * CONTRACT TOOLS
   * ──────────────────────────────────────────────────────────────────────────── */
  const layer = (name,scope = "root") => (className) =>
    (layerSignal[scope] ||= {},
     layerSignal[scope][name] ||= [],
     (layerSignal[scope][name][0] = className));

  const data = (name, key = name) =>
    inputSignal[key] && (dataSignal[name] = inputSignal[key]);

  const state = (name, priority = 0) => (
    (stateSignal._hooks ||= {})[name] ||= (() => { const [get, set] = useState(false); return ({ get, set }); })(),
    priority && (!stateSignal._priority || priority > stateSignal._priority) && (stateSignal[name] = stateSignal._hooks[name], stateSignal._priority = priority)
  );

  const classes = (layers = {}) =>
    Object.values(layers).map(l => l[0]).filter(Boolean).join(" ");

  /* ────────────────────────────────────────────────────────────────────────────
   * BASE LAYERS
   * ──────────────────────────────────────────────────────────────────────────── */
    let root, trigger, menu, item;
    (() => 
        (
            root = {
                base:       layer("base", "root"),
                layout:     layer("layout", "root")
            }
        )
    )(),
    (() => 
        (
            trigger = {
                base:       layer("base", "trigger"),
                layout:     layer("layout", "trigger")
            }
        )
    )(),
    (() => 
        (
            menu = {
                base:       layer("base", "menu"),
                size:       layer("size", "menu"),
                layout:     layer("layout", "menu"),
                shape:      layer("shape", "menu"),
                shadow:     layer("shadow", "menu"),
                color:      layer("color", "menu"),
                position:   layer("position", "menu"),
                animation:  layer("animation", "menu"),
                visibility: layer("visibility", "menu")
            }
        )
    )(),
    (() => 
        (
            item = {
                base:       layer("base", "item"),
                hover:      layer("hover", "item")
            }
        )
    )(),
  /* ────────────────────────────────────────────────────────────────────────────
   * DEFAULTS
   * ──────────────────────────────────────────────────────────────────────────── */
    (() => 
        (
            root.base("relative"),
            root.layout("inline-block"),
            trigger.base("cursor-pointer select-none"),
            menu.base("absolute z-50"),
            menu.layout("flex flex-col"),
            menu.shape("rounded-lg"),
            menu.shadow("shadow-lg"),
            menu.color("bg-white/90 text-gray-800"),
            menu.visibility("opacity-100 pointer-events-auto"),
            menu.animation("transition-all duration-200"),
            menu.position("top-full left-0 mt-2"),
            menu.size("min-w-40 text-sm"),
            item.base("px-4 py-2 whitespace-nowrap"),
            item.hover("hover:bg-gray-100 hover:rounded-lg cursor-pointer")
        )
    )(),
  /* ────────────────────────────────────────────────────────────────────────────
   * MENU POSITION SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */
     (()=>
        (
            inputSignal.bottom      &&      menu.position("top-full left-0 mt-2"),
            inputSignal.top         &&      menu.position("bottom-full left-0 mb-2"),
            inputSignal.right       &&      menu.position("left-full top-0 ml-2"),
            inputSignal.left        &&      menu.position("right-full top-0 mr-2"),
            inputSignal.start       &&      menu.position("left-0"),
            inputSignal.center      &&      menu.position("left-1/2 -translate-x-1/2"),
            inputSignal.end         &&      menu.position("right-0")
         )
    )(),
  /* ────────────────────────────────────────────────────────────────────────────
   * MENU SIZE SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */
    (()=>
        (
            inputSignal.xs          &&      menu.size("min-w-28 text-xs"),
            inputSignal.sm          &&      menu.size("min-w-36 text-sm"),
            inputSignal.md          &&      menu.size("min-w-44 text-base"),
            inputSignal.lg          &&      menu.size("min-w-56 text-lg"),
            inputSignal.xl          &&      menu.size("min-w-64 text-xl")
        )
    )(),
   /* ────────────────────────────────────────────────────────────────────────────
    * MENU LAYOUT SIGNALS
    * ──────────────────────────────────────────────────────────────────────────── */
    (()=>
        (
            inputSignal.block       &&      root.layout("block w-full"),
            inputSignal.inline      &&      root.layout("inline-block"),
            inputSignal.centered    &&      root.layout("mx-auto")
        )
    )(),
   /* ────────────────────────────────────────────────────────────────────────────
    * MENU VISIBILITY SIGNALS
    * ──────────────────────────────────────────────────────────────────────────── */
    (()=>
        (
            inputSignal.disabled    &&      (
                trigger.base("opacity-50 pointer-events-none"),
                menu.visibility("hidden")
            )   
        )
    )(),
  /* ────────────────────────────────────────────────────────────────────────────
   * DATA & STATE
   * ──────────────────────────────────────────────────────────────────────────── */
    (()=>
        (
            inputSignal.items         && data("items"),
            inputSignal.menuName      && data("menuName"),
            inputSignal.onItemSelect  && data("onItemSelect"),
            inputSignal.onMenuClick   && data("onMenuClick"),
            state("reactHover", 0),   state("reactClick", 0),
            inputSignal.reactHover    && state("reactHover", 1),
            state("reactClick", 1)
        )
    )();
  /* ────────────────────────────────────────────────────────────────────────────
   * INTERNAL COMPONENTS
   * ──────────────────────────────────────────────────────────────────────────── */
    const DropdownItem = ({ item }) => (
    <div
        className={classes(layerSignal.item)}
        onClick={() => {
            stateSignal.reactClick?.set && stateSignal.reactClick.set(false);
            dataSignal.onItemSelect?.(item)
        }}
        {...(item.href ? { href: item.href, onClick: e => e.stopPropagation() } : {})}
    >
        {item.label}
    </div>
    );
  /* ────────────────────────────────────────────────────────────────────────────
   * RENDER
   * ──────────────────────────────────────────────────────────────────────────── */

  return (
    <div className={classes(layerSignal.root)}>
      <Button 
      className={classes(layerSignal.trigger)}
      onClick={stateSignal.reactClick?.set && (() => stateSignal.reactClick.set(!stateSignal.reactClick.get))}
      onMouseEnter={stateSignal.reactHover?.set && (() => stateSignal.reactHover.set(true))}
      onMouseLeave={stateSignal.reactHover?.set && (() => stateSignal.reactHover.set(false))}
      activeNone
      >
        {dataSignal.menuName}
      </Button>

      <div className={classes(layerSignal.menu)}>
        {(stateSignal.reactClick?.get || stateSignal.reactHover?.get) && dataSignal.items?.map((item, i) => (
          <DropdownItem key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

