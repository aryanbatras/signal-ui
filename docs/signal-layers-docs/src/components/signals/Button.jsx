import { useState, useRef } from "react";
export function Button(contract = {}) {
  /* ────────────────────────────────────────────────────────────────────────────
   * CONTRACT
   * ────────────────────────────────────────────────────────────────────────────
   * Button - Interactive button element with multiple visual styles
   *
   * Foundation: Semantic HTML button with layered styling system
   *
   * Signals:
   *   Style: cta, neumorphism, ghost
   *   Color: red, green, blue
   *   Size: xs, sm, md, lg, xl
   *   Shape: square, rounded, pill, circle
   *   Layout: block, inline, center
   *   Shadow: innerShadow, noShadow
   *   Border: border, noBorder, roundedBorder, pillBorder, circleBorder
   *   Hover: hoverEnlarge, hoverShrink, hoverLift, hoverFade, hoverBorder, hoverNone
   *   Active: activeShrink, activeRipple, activeExplode, activeSlide, activeNone
   *   Ripple: ripple
   *
   * Data:
   *   children - Button content
   *   disabled - Disable interaction
   *   onClick - Click handler
   *   type - Button type attribute
   *   aria-label - Accessibility label
   *   aria-haspopup - ARIA haspopup attribute
   *   aria-expanded - ARIA expanded state
   *   onMouseEnter - Mouse enter handler
   *   onMouseLeave - Mouse leave handler
   *
   * Defaults: md, inline, hoverEnlarge, activeShrink
   *
   * Usage:
   * <Button onClick={() => {}}>Click me</Button>
   * <Button cta blue lg>Primary Action</Button>
   * <Button ghost hoverLift>Secondary</Button>
   *
   *
   * ────────────────────────────────────────────────────────────────────────────
   * CONTRACT TOOLS
   * ──────────────────────────────────────────────────────────────────────────── */

  const [inputSignal, layerSignal, dataSignal, stateSignal] = [{ ...contract }, {}, {}, {}];
  
 const layer = (name, scope = "btn") => (className) =>
    (layerSignal[scope] ||= {},
    layerSignal[scope][name] ||= [],
    (layerSignal[scope][name][0] = className));
  
  const data = (name, key = name) =>
    inputSignal[key] && (dataSignal[name] = inputSignal[key]);

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

    const rippleCounterRef = useRef(0);
    const handleRippleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    stateSignal.ripples?.set([...(stateSignal.ripples?.get || []), { 
        id: ++rippleCounterRef.current, 
        x: e.clientX - rect.left, 
        y: e.clientY - rect.top 
    }]);
    };

  /* ────────────────────────────────────────────────────────────────────────────
   * BASE LAYER
   * ──────────────────────────────────────────────────────────────────────────── */
   let btn, ripple;
    (() => 
        (
            btn = {
                size:layer("size"),        
                border:layer("border"),      
                shape:layer("shape"),       
                color:layer("color"),      
                shadow:layer("shadow"),     
                text:layer("text"),       
                hover:layer("hover"),       
                active:layer("active"),     
                layout:layer("layout"),     
                animation:layer("animation"),
                rippleBase: layer("ripple")
            },
            ripple = {
                base: layer("base", "ripple"),
                animation: layer("animation", "ripple")
            }
        )
    )(),
  /* ────────────────────────────────────────────────────────────────────────────
   * DEFAULT
   * ──────────────────────────────────────────────────────────────────────────── */
    (() => 
        (
            btn.size("px-4 py-2"),
            btn.border("border-0"),
            btn.shape("rounded-xs"),
            btn.color("bg-gray-800 text-white"),
            btn.shadow("shadow-xs shadow-black/50"),
            btn.text("text-xs font-light font-sans"),
            btn.hover("hover:scale-105 hover:shadow-md"),
            btn.active("active:scale-90 active:shadow-md"),
            btn.layout("flex items-center justify-center"),
            btn.animation("transition-all duration-300 cursor-pointer"),
            btn.rippleBase("relative overflow-hidden"),
            ripple.base("absolute bg-white/30 rounded-full pointer-events-none"),
            ripple.animation("-translate-x-1/2 -translate-y-1/2 transition-all")
        )
    )();
  /* ────────────────────────────────────────────────────────────────────────────
   * CALL TO ACTION COMPOSITE SIGNAL
   * ──────────────────────────────────────────────────────────────────────────── */
    (()=>
        (
            inputSignal.cta && (
                btn.color("bg-blue-600/95 text-white"),
                btn.shadow("shadow-xs shadow-blue-500/40"),
                btn.hover("hover:scale-105 hover:shadow-md"),
                btn.active("active:scale-90 active:shadow-md")
            )
        )
    )(),  
  /* ────────────────────────────────────────────────────────────────────────────
   * NEUMORPHIC COMPOSITE SIGNAL
   * ──────────────────────────────────────────────────────────────────────────── */
    (()=>
        (
            inputSignal.neumorphism && (
                btn.shape("rounded-md"),
                btn.shadow("shadow-inner"),
                btn.color("bg-linear-to-r from-gray-300 to-gray-200 text-gray-800"),
                btn.hover("hover:scale-105 hover:bg-white/50 hover:shadow-inner hover:shadow-gray-500/30"),
                btn.active("active:scale-95 active:bg-white/50 active:shadow-inner active:shadow-gray-500/30"),
                btn.animation("transition-all duration-700 cursor-pointer")
            )
        )
    )(),
  /* ────────────────────────────────────────────────────────────────────────────
   * GHOST COMPOSITE SIGNAL
   * ──────────────────────────────────────────────────────────────────────────── */
    (()=>
        (
            inputSignal.ghost && (
                btn.shape("rounded-full"),
                btn.shadow("shadow-none"),
                btn.color("bg-transparent text-gray-800"),
                btn.hover("hover:scale-110 hover:bg-gray-100/50 hover:text-gray-900"),
                btn.active("active:scale-95 active:bg-gray-100/75 active:text-gray-900"),
                btn.animation("transition-all duration-500 cursor-pointer")
            )
        )
    )(),
  /* ────────────────────────────────────────────────────────────────────────────
   * COLOR SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */
    (()=>
        (
            inputSignal.red     && btn.color("bg-red-600 text-white"),
            inputSignal.green   && btn.color("bg-green-500 text-white"),
            inputSignal.blue    && btn.color("bg-blue-500/90 text-neutral-100")
        )
    )(),   
  /* ────────────────────────────────────────────────────────────────────────────
   * SIZE SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */
    (()=>
        (
            inputSignal.xs      && btn.size("px-2 py-1 text-xs"),
            inputSignal.sm      && btn.size("px-3 py-1.5 text-sm"),
            inputSignal.md      && btn.size("px-4 py-2 text-base"),
            inputSignal.lg      && btn.size("px-6 py-3 text-lg"),
            inputSignal.xl      && btn.size("px-8 py-4 text-xl")
        )
    )(),
  /* ────────────────────────────────────────────────────────────────────────────
   * SHAPE SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */
    (()=>
        (
            inputSignal.square      && btn.shape("rounded-none"),
            inputSignal.rounded     && btn.shape("rounded-lg"),
            inputSignal.pill        && btn.shape("rounded-full"),
            inputSignal.circle      && btn.shape("rounded-full aspect-square p-0")
        )
    )(),
    /* ────────────────────────────────────────────────────────────────────────────
   * LAYOUT SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */
    (()=>
        (
            inputSignal.block          && btn.layout("w-full"),
            inputSignal.inline         && btn.layout("inline-flex"),
            inputSignal.center         && btn.layout("mx-auto")
        )
    )(),
/* ────────────────────────────────────────────────────────────────────────────
   * SHADOW SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */
    (()=>(
        (
            inputSignal.innerShadow    && btn.shadow("shadow-inner"),
            inputSignal.noShadow       && btn.shadow("shadow-none")
        )
    ))(),
/* ────────────────────────────────────────────────────────────────────────────
   * BORDER SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */
    (()=>
        (
            inputSignal.border         && btn.border("border border-gray-800"),
            inputSignal.noBorder       && btn.border("border-none"),
            inputSignal.roundedBorder  && btn.border("rounded-lg"),
            inputSignal.pillBorder     && btn.border("rounded-full"),
            inputSignal.circleBorder   && btn.border("rounded-full aspect-square p-0")
        )
    )(),
/* ────────────────────────────────────────────────────────────────────────────
   * HOVER SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */
    (()=>(
        (
            inputSignal.hoverEnlarge   && btn.hover("hover:scale-105"),
            inputSignal.hoverShrink    && btn.hover("hover:scale-95"),
            inputSignal.hoverLift      && btn.hover("hover:-translate-y-0.5"),
            inputSignal.hoverFade      && btn.hover("hover:opacity-40"),
            inputSignal.hoverBorder    && btn.hover("hover:border hover:border-black"),
            inputSignal.hoverNone      && btn.hover("hover:scale-100 hover:opacity-100")
        )
    )(),
/* ────────────────────────────────────────────────────────────────────────────
   * ACTIVE SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */
    (()=>
        (
            inputSignal.activeShrink   && btn.active("active:scale-95 transition-transform"),
            inputSignal.activeRipple   && btn.active("active:ring-4 active:ring-black active:scale-90"),
            inputSignal.activeExplode  && btn.active("active:scale-110 active:ring-8 active:ring-black"),
            inputSignal.activeSlide    && btn.active("active:translate-x-0.5"),
            inputSignal.activeNone     && btn.active("active:scale-100 active:opacity-100")
        )
    )(),
  /* ────────────────────────────────────────────────────────────────────────────
   * DATA
   * ──────────────────────────────────────────────────────────────────────────── */
    (()=>
        (
            inputSignal.children         && data("children"),
            inputSignal.disabled         && data("disabled"),
            inputSignal.onClick          && data("onClick"),
            inputSignal.type             && data("type"),
            inputSignal["aria-label"]    && data("aria-label"),
            inputSignal["aria-haspopup"] && data("aria-haspopup"),
            inputSignal["aria-expanded"] && data("aria-expanded"),
            inputSignal.onMouseEnter     && data("onMouseEnter"),
            inputSignal.onMouseLeave     && data("onMouseLeave"),
            state("ripples", 0, []), inputSignal.ripple && data("ripple") && state("ripples", 1, [])
        )
    ))();

    const rippleStyles = ` @keyframes ripple {
            0% { width: 0; height: 0; opacity: 0.5; }
            100% { width: 400px; height: 400px; opacity: 0; }
        }
    `;
  /* ────────────────────────────────────────────────────────────────────────────
   * RENDER
   * ──────────────────────────────────────────────────────────────────────────── */

  return (
    <>
        <style>
            {rippleStyles}
        </style>

        <button
        type={dataSignal.type}
        onClick={(e) => {
            dataSignal.onClick?.(e);
            dataSignal.ripple && handleRippleClick(e);
        }}
        disabled={dataSignal.disabled}
        aria-label={dataSignal["aria-label"]}
        aria-haspopup={dataSignal["aria-haspopup"]}
        aria-expanded={dataSignal["aria-expanded"]}
        onMouseEnter={dataSignal.onMouseEnter}
        onMouseLeave={dataSignal.onMouseLeave}
        className={classes(layerSignal.btn)}
        >
        
        {dataSignal.children}

        {dataSignal.ripple && (stateSignal.ripples?.get || [] ).map(ripple => (
            <span
                key={ripple.id}
                className={classes(layerSignal.ripple)}
                style={{
                    left: ripple.x,
                    top: ripple.y,
                    animation: 'ripple 2s ease-out'
                }}
            />
        ))}

        </button>
    </>
  );
}

