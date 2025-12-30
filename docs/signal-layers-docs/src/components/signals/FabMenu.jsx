import { Button } from "./Button";
import { useState } from "react";

export function FabMenu(input = {}) {
  /* ────────────────────────────────────────────────────────────────────────────
   * CONTRACT
   * ────────────────────────────────────────────────────────────────────────────
   * Signals:
   *   React:          reactHover, reactClick
   *   Position:       bottomRight, bottomLeft, topRight, topLeft
   *   Layout:         actionsTop, actionsBottom, actionsLeft, actionsRight
   *   Size:           sm, md, lg, xl
   *   State:          disabled 
   *
   * Data:
   *   icon            Icon for the FAB button
   *   actions         Array of { icon, label, onClick } objects
   * 
   * Defaults:         bottomRight, md, reactClick
   * 
   * Usage:            <FabMenu icon="+" actions={[{icon:"", label:"Action 1", onClick:() => {}}]} />
   *
   * ──────────────────────────────────────────────────────────────────────────── */

  const [inputSignal, layerSignal, dataSignal, stateSignal] = [{ ...input }, {}, {}, {}];

  /* ────────────────────────────────────────────────────────────────────────────
   * CONTRACT TOOLS
   * ──────────────────────────────────────────────────────────────────────────── */
  const layer = (name, scope = "root") => (className) =>
    (layerSignal[scope] ||= {},
     layerSignal[scope][name] ||= [],
     (layerSignal[scope][name][0] = className));

  const data = (name, key = name) =>
    inputSignal[key] && (dataSignal[name] = inputSignal[key]);

  const classes = (layers = {}) =>
    Object.values(layers).map(l => l[0]).filter(Boolean).join(" ");

  const state = (name, priority = 0) => (
      (stateSignal._hooks ||= {})[name] ||= (() => { const [get, set] = useState(false); return ({ get, set }); })(),
      priority && (!stateSignal._priority || priority > stateSignal._priority) && (stateSignal[name] = stateSignal._hooks[name], stateSignal._priority = priority)
    );
  /* ────────────────────────────────────────────────────────────────────────────
   * BASE LAYERS
   * ──────────────────────────────────────────────────────────────────────────── */
    let root, fab, actions, item;
    (() => 
        (
            root = {
                base: layer("base", "root"),
                position: layer("position", "root")
            }
        )
    )(),
    (() => 
        (
            fab = {
                base: layer("base", "fab"),
                size: layer("size", "fab"),
                visibility: layer("visibility", "fab")
            }
        )
    )(),
    (() => 
        (
             actions = {
                base: layer("base", "actions"),
                layout: layer("layout", "actions"),
                visibility: layer("visibility", "actions"),
                animation: layer("animation", "actions")
            }
        )
    )(),
    (() => 
        (
            item = { base: layer("base", "item") }
        )
    )(),
  /* ────────────────────────────────────────────────────────────────────────────
   * DEFAULTS
   * ──────────────────────────────────────────────────────────────────────────── */
    (() => 
        (
            root.base("fixed z-50"),
            root.position("bottom-6 right-6"),
            fab.base("flex items-center justify-center z-10"),
            actions.base("absolute flex z-40"),
            actions.layout("flex flex-col-reverse items-center absolute gap-2 bottom-full right-1/2 translate-x-1/2 mb-3 w-auto min-w-[40px]"),
            actions.visibility("opacity-100 pointer-events-auto"),
            actions.animation("transition-all duration-300"),
            item.base("flex items-center justify-center")
        )
    )(),
  /* ────────────────────────────────────────────────────────────────────────────
   * POSITION SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */
    (() => 
        (
            inputSignal.bottomRight     && root.position("bottom-6 right-6"),
            inputSignal.bottomLeft      && root.position("bottom-6 left-6"),
            inputSignal.topRight        && root.position("top-6 right-6"),
            inputSignal.topLeft         && root.position("top-6 left-6")
        )
    )(),
  /* ────────────────────────────────────────────────────────────────────────────
   * LAYOUT SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */
    (() => 
        (        
            inputSignal.actionsTop      && actions.layout("flex flex-col-reverse items-center absolute gap-2 bottom-full right-1/2 translate-x-1/2 mb-3 w-auto min-w-[40px]"),
            inputSignal.actionsBottom   && actions.layout("flex flex-col-reverse items-center absolute gap-2 top-full right-1/2 translate-x-1/2 mb-3 w-auto min-w-[40px]"),
            inputSignal.actionsLeft     && actions.layout("flex flex-col items-center absolute gap-2 right-full top-0 mr-2"),
            inputSignal.actionsRight    && actions.layout("flex flex-col items-center absolute gap-2 left-full top-0 ml-2")
        )
    )(),
  /* ────────────────────────────────────────────────────────────────────────────
   * SIZE SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */
    (() => 
        (
            inputSignal.sm      && fab.size("w-8 h-8"),
            inputSignal.md      && fab.size("w-10 h-10"),
            inputSignal.lg      && fab.size("w-12 h-12"),
            inputSignal.xl      && fab.size("w-14 h-14")
        )
    )(),
  /* ────────────────────────────────────────────────────────────────────────────
   * VISIBILITY SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */
    (() =>
        (
            inputSignal.disabled && (
                fab.visibility("opacity-50 pointer-events-none"),
                actions.visibility("hidden")
            )
        )
    )(),
  /* ────────────────────────────────────────────────────────────────────────────
   * DATA & STATE
   * ──────────────────────────────────────────────────────────────────────────── */
    (() => 
         (
            inputSignal.icon      && data("icon"),
            inputSignal.actions   && data("actions"),
            state("reactHover", 0), inputSignal.reactHover && state("reactHover", 1),
            state("reactClick", 0), state("reactClick", 1)
         )
    )();
  /* ────────────────────────────────────────────────────────────────────────────
   * INTERNAL COMPONENTS
   * ──────────────────────────────────────────────────────────────────────────── */
  const ActionButton = ({ action }) => (
    <Button
      circle
      sm
      ghost
      onClick={() => {
        action.onClick();
        stateSignal.reactClick?.set && stateSignal.reactClick?.set(!stateSignal.reactClick.get);
      }}
      aria-label={action.label}
      className={classes(layerSignal.item)}
    >
      <span>{action.icon}</span>
    </Button>
  );
  /* ────────────────────────────────────────────────────────────
   * RENDER
   * ──────────────────────────────────────────────────────────── */
  return (
    <div 
      className={classes(layerSignal.root)}
    >
      <div 
        className={classes(layerSignal.actions)}
      >
        {
          (stateSignal.reactHover?.get || stateSignal.reactClick?.get) 
            && dataSignal.actions?.map((action, i) => (
              <ActionButton 
                key={i} 
                action={action} 
              />
            ))
        }
      </div>
      
      <Button
        circle
        md
        cta
        aria-haspopup="true"
        aria-expanded={stateSignal.reactClick?.get}
        onClick={() => stateSignal.reactClick?.set && stateSignal.reactClick?.set(!stateSignal.reactClick.get)}
        onMouseEnter={stateSignal.reactHover?.set && (() => stateSignal.reactHover.set(true))}
        onMouseLeave={stateSignal.reactHover?.set && (() => stateSignal.reactHover.set(false))}
        className={classes(layerSignal.fab)}
      >
        {dataSignal.icon}
      </Button>
    </div>
  );
}