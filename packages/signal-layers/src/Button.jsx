export function Button(contract = {}) {
  /* ────────────────────────────────────────────────────────────────────────────
   * CONTRACT
   * ────────────────────────────────────────────────────────────────────────────
  
   * SIGNALS:    cta, neumorphism, ghost
   *             red/green/blue | xs-sm-md-lg-xl | square/rounded/pill/circle | block/inline/center | innerShadow
   *             hoverEnlarge/hoverShrink/hoverLift/hoverFade/hoverBorder | activeShrink/activeRipple/activeExplode/activeSlide
   * 
   * LEASES:     children, disabled, onClick, type | ESCAPE: className/class
   *
   * ────────────────────────────────────────────────────────────────────────────
   * CONTRACT TOOLS
   * ──────────────────────────────────────────────────────────────────────────── */

  const [signals, signalLayers, leases] = [{ ...contract }, {}, {}];
  
  const layer = (name) => (className) =>
    (signalLayers[name] ||= [],
    (signalLayers[name][0] = className));
  
  const lease = (name, key = name) =>
    signals[key] && (leases[name] = signals[key]);

  /* ────────────────────────────────────────────────────────────────────────────
   * LAYERS
   * ──────────────────────────────────────────────────────────────────────────── */

  const size        = layer("size");        
  const border      = layer("border");      
  const shape       = layer("shape");       
  const color       = layer("color");      
  const shadow      = layer("shadow");     
  const text        = layer("text");       
  const hover       = layer("hover");       
  const active      = layer("active");     
  const layout      = layer("layout");     
  const animation   = layer("animation");  
  const escape      = layer("escape");

  /* ────────────────────────────────────────────────────────────────────────────
   * DEFAULTS
   * ──────────────────────────────────────────────────────────────────────────── */

    (
        size            ("px-4 py-2"),
        border          ("border-0"),
        shape           ("rounded-xs"),
        color           ("bg-gray-800 text-white"),
        shadow          ("shadow-xs shadow-black/50"),
        text            ("text-xs font-light font-sans"),
        hover           ("hover:scale-105 hover:shadow-md"),
        active          ("active:scale-90 active:shadow-md"),
        layout          ("flex items-center justify-center"),
        animation       ("transition-all duration-300 cursor-pointer")
    );

  /* ────────────────────────────────────────────────────────────────────────────
   * COMPOSITE SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */

    signals.cta               && (
                                color("bg-blue-600/95 text-white"),
                                shadow("shadow-xs shadow-blue-500/40"),
                                hover("hover:scale-105 hover:shadow-md"),
                                active("active:scale-90 active:shadow-md")
                            );

    signals.neumorphism       && (
                                shape("rounded-md"),
                                shadow("shadow-inner"),
                                color("bg-linear-to-r from-gray-300 to-gray-200 text-gray-800"),
                                hover("hover:scale-105 hover:bg-white/50 hover:shadow-inner hover:shadow-gray-500/30"),
                                active("active:scale-95 active:bg-white/50 active:shadow-inner active:shadow-gray-500/30"),
                                animation("transition-all duration-700 cursor-pointer")
                            );

    signals.ghost             && (
                                shape("rounded-full"),
                                shadow("shadow-none"),
                                color("bg-transparent text-gray-800"),
                                hover("hover:scale-110 hover:bg-gray-100/50 hover:text-gray-900"),
                                active("active:scale-95 active:bg-gray-100/75 active:text-gray-900"),
                                animation("transition-all duration-500 cursor-pointer")
                            );

  /* ────────────────────────────────────────────────────────────────────────────
   * INTENT SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */

    signals.red            && color("bg-red-600 text-white");
    signals.green          && color("bg-green-500 text-white");
    signals.blue           && color("bg-blue-500/90 text-neutral-100");

    signals.xs             && size("px-2 py-1 text-xs");
    signals.sm             && size("px-3 py-1.5 text-sm");
    signals.md             && size("px-4 py-2 text-base");
    signals.lg             && size("px-6 py-3 text-lg");
    signals.xl             && size("px-8 py-4 text-xl");

    signals.square         && shape("rounded-none");
    signals.rounded        && shape("rounded-lg");
    signals.pill           && shape("rounded-full");
    signals.circle         && shape("rounded-full aspect-square p-0");

    signals.block          && layout("w-full");
    signals.inline         && layout("inline-flex");
    signals.center         && layout("mx-auto");

    signals.innerShadow    && shadow("shadow-inner");
    signals.noShadow       && shadow("shadow-none");

    signals.border         && border("border border-gray-800");

    signals.hoverEnlarge   && hover("hover:scale-105");
    signals.hoverShrink    && hover("hover:scale-95");
    signals.hoverLift      && hover("hover:-translate-y-0.5");
    signals.hoverFade      && hover("hover:opacity-40");
    signals.hoverBorder    && hover("hover:border hover:border-black");
    signals.hoverNone      && hover("hover:scale-100 hover:opacity-100");

    signals.activeShrink   && active("active:scale-95 transition-transform");
    signals.activeRipple   && active("active:ring-4 active:ring-black active:scale-90");
    signals.activeExplode  && active("active:scale-110 active:ring-8 active:ring-black");
    signals.activeSlide    && active("active:translate-x-0.5");
    signals.activeNone     && active("active:scale-100 active:opacity-100");


  /* ────────────────────────────────────────────────────────────────────────────
   * ESCAPE & NATIVE
   * ──────────────────────────────────────────────────────────────────────────── */

    signals.className      && escape(signals.className);
    signals.class          && escape(signals.class);

    signals.children       && lease("children");
    signals.disabled       && lease("disabled");
    signals.onClick        && lease("onClick");
    signals.type           && lease("type");
    signals["aria-label"]  && lease("aria-label");
    signals["aria-haspopup"] && lease("aria-haspopup");
    signals["aria-expanded"] && lease("aria-expanded");

  /* ────────────────────────────────────────────────────────────────────────────
   * RENDER
   * ──────────────────────────────────────────────────────────────────────────── */

  return (
    <button
      type={leases.type}
      onClick={leases.onClick}
      disabled={leases.disabled}
      aria-label={leases["aria-label"]}
      aria-haspopup={leases["aria-haspopup"]}
      aria-expanded={leases["aria-expanded"]}
      className={Object.values(signalLayers)
        .map(layer => layer[0])
        .filter(Boolean)
        .join(" ")}
    >
      {leases.children}
    </button>
  );w
}