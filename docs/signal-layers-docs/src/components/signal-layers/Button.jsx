import { useRef } from "react";
import { createSignalUtils } from "./";
export function Button(contract = {}) {
  const { layer, data, state, classes, signals } = createSignalUtils(contract);
  const { inputSignal, layerSignal, dataSignal, stateSignal } = signals;
  let btn, ripple;
  btn = {
    size: layer("size", "btn"),
    border: layer("border", "btn"),
    shape: layer("shape", "btn"),
    color: layer("color", "btn"),
    shadow: layer("shadow", "btn"),
    text: layer("text", "btn"),
    textLayer: layer("textLayer", "btn"),
    textWeight: layer("textWeight", "btn"),
    textSize: layer("textSize", "btn"),
    textTransform: layer("textTransform", "btn"),
    textDecoration: layer("textDecoration", "btn"),
    hover: layer("hover", "btn"),
    active: layer("active", "btn"),
    focus: layer("focus", "btn"),
    layout: layer("layout", "btn"),
    animation: layer("animation", "btn"),
    rippleBase: layer("ripple", "btn")
  };
  ripple = {
    base: layer("base", "ripple"),
    animation: layer("animation", "ripple")
  };
  btn.size("px-4 py-2");
  btn.border("border-0");
  btn.shape("rounded-xs");
  btn.color("bg-gray-800 text-white");
  btn.shadow("shadow-xs shadow-black/50");
  btn.text("text-xs font-light font-sans");
  btn.textLayer("text-inherit");
  btn.textWeight("font-medium");
  btn.textSize("text-sm");
  btn.textTransform("normal-case");
  btn.textDecoration("no-underline");
  btn.hover("hover:scale-105 hover:shadow-md");
  btn.active("active:scale-90 active:shadow-md");
  btn.layout("flex items-center justify-center");
  btn.animation("transition-all duration-300 cursor-pointer");
  btn.focus("focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2");
  btn.rippleBase("relative overflow-hidden");
  ripple.base("absolute bg-white/30 rounded-full pointer-events-none");
  ripple.animation("-translate-x-1/2 -translate-y-1/2 transition-all");


  inputSignal.primary && (
    btn.color("bg-blue-600 text-white"),
    btn.shadow("shadow-sm shadow-blue-500/40"),
    btn.hover("hover:bg-blue-700 hover:shadow-md"),
    btn.active("active:bg-blue-800")
  );
  inputSignal.secondary && (
    btn.color("bg-gray-200 text-gray-800 border border-gray-300"),
    btn.hover("hover:bg-gray-300 hover:border-gray-400"),
    btn.active("active:bg-gray-400")
  );
  inputSignal.outline && (
    btn.color("bg-transparent border-2 border-blue-600 text-blue-600"),
    btn.hover("hover:bg-blue-600 hover:text-white"),
    btn.active("active:bg-blue-700")
  );
  inputSignal.link && (
    btn.color("text-blue-600 underline-offset-4"),
    btn.hover("hover:underline"),
    btn.active("active:text-blue-800")
  );
  inputSignal.danger && (
    btn.color("bg-red-600 text-white"),
    btn.shadow("shadow-sm shadow-red-500/40"),
    btn.hover("hover:bg-red-700"),
    btn.active("active:bg-red-800")
  );
  inputSignal.warning && (
    btn.color("bg-yellow-500 text-gray-900"),
    btn.shadow("shadow-sm shadow-yellow-500/40"),
    btn.hover("hover:bg-yellow-600"),
    btn.active("active:bg-yellow-700")
  );
  inputSignal.success && (
    btn.color("bg-green-600 text-white"),
    btn.shadow("shadow-sm shadow-green-500/40"),
    btn.hover("hover:bg-green-700"),
    btn.active("active:bg-green-800")
  );
  inputSignal.cta && (
    btn.color("bg-blue-600/95 text-white"),
    btn.shadow("shadow-xs shadow-blue-500/40"),
    btn.hover("hover:scale-105 hover:shadow-md"),
    btn.active("active:scale-90 active:shadow-md")
  );
  inputSignal.neumorphism && (
    btn.shape("rounded-md"),
    btn.shadow("shadow-inner"),
    btn.color("bg-linear-to-r from-gray-300 to-gray-200 text-gray-800"),
    btn.hover("hover:scale-105 hover:bg-white/50 hover:shadow-inner hover:shadow-gray-500/30"),
    btn.active("active:scale-95 active:bg-white/50 active:shadow-inner active:shadow-gray-500/30"),
    btn.animation("transition-all duration-700 cursor-pointer")
  );
  inputSignal.ghost && (
    btn.shape("rounded-full"),
    btn.shadow("shadow-none"),
    btn.color("bg-transparent text-gray-800"),
    btn.hover("hover:scale-110 hover:bg-gray-100/50 hover:text-gray-900"),
    btn.active("active:scale-95 active:bg-gray-100/75 active:text-gray-900"),
    btn.animation("transition-all duration-500 cursor-pointer")
  );

  inputSignal.red && btn.color("bg-red-600 text-white");
  inputSignal.green && btn.color("bg-green-500 text-white");
  inputSignal.blue && btn.color("bg-blue-500/90 text-neutral-100");

  inputSignal.square && btn.shape("rounded-none");
  inputSignal.rounded && btn.shape("rounded-lg");
  inputSignal.pill && btn.shape("rounded-full");
  inputSignal.circle && btn.shape("rounded-full aspect-square p-0");

  inputSignal.sizeXs && (
    btn.size("px-2 py-1"),
    btn.textSize("text-xs")
  );
  inputSignal.sizeSm && (
    btn.size("px-3 py-1.5"),
    btn.textSize("text-sm")
  );
  inputSignal.sizeMd && (
    btn.size("px-4 py-2"),
    btn.textSize("text-base")
  );
  inputSignal.sizeLg && (
    btn.size("px-6 py-3"),
    btn.textSize("text-lg")
  );
  inputSignal.sizeXl && (
    btn.size("px-8 py-4"),
    btn.textSize("text-xl")
  );
  inputSignal.size2xl && (
    btn.size("px-10 py-5"),
    btn.textSize("text-2xl")
  );
  inputSignal.wAuto && btn.size("w-auto");
  inputSignal.wFull && btn.size("w-full");
  inputSignal.wFit && btn.size("w-fit");
  inputSignal.wMin && btn.size("w-min");
  inputSignal.wMax && btn.size("w-max");
  inputSignal.hAuto && btn.size("h-auto");
  inputSignal.hFull && btn.size("h-full");
  inputSignal.hFit && btn.size("h-fit");
  inputSignal.hMin && btn.size("h-min");
  inputSignal.hMax && btn.size("h-max");

  inputSignal.block && btn.layout("w-full");
  inputSignal.inline && btn.layout("inline-flex");
  inputSignal.center && btn.layout("mx-auto");

  inputSignal.innerShadow && btn.shadow("shadow-inner");
  inputSignal.noShadow && btn.shadow("shadow-none");

  inputSignal.border && btn.border("border border-gray-800");
  inputSignal.noBorder && btn.border("border-none");
  inputSignal.roundedBorder && btn.border("rounded-lg");
  inputSignal.pillBorder && btn.border("rounded-full");
  inputSignal.circleBorder && btn.border("rounded-full aspect-square p-0");

  inputSignal.radiusNone && btn.shape("rounded-none");
  inputSignal.radiusSm && btn.shape("rounded-sm");
  inputSignal.radius && btn.shape("rounded");
  inputSignal.radiusMd && btn.shape("rounded-md");
  inputSignal.radiusLg && btn.shape("rounded-lg");
  inputSignal.radiusXl && btn.shape("rounded-xl");
  inputSignal.radius2xl && btn.shape("rounded-2xl");
  inputSignal.radius3xl && btn.shape("rounded-3xl");
  inputSignal.radiusFull && btn.shape("rounded-full");
  inputSignal.aspectSquare && btn.shape("aspect-square");
  inputSignal.aspectVideo && btn.shape("aspect-video");
  inputSignal.aspect4_3 && btn.shape("aspect-4/3");
  inputSignal.aspect16_9 && btn.shape("aspect-video");

  inputSignal.hoverEnlarge && btn.hover("hover:scale-105");
  inputSignal.hoverShrink && btn.hover("hover:scale-95");
  inputSignal.hoverLift && btn.hover("hover:-translate-y-0.5");
  inputSignal.hoverFade && btn.hover("hover:opacity-40");
  inputSignal.hoverBorder && btn.hover("hover:border hover:border-black");
  inputSignal.hoverNone && btn.hover("hover:scale-100 hover:opacity-100");
  inputSignal.hoverGlow && btn.hover("hover:shadow-lg hover:shadow-blue-500/50");
  inputSignal.hoverRotate && btn.hover("hover:rotate-3");
  inputSignal.hoverScale && btn.hover("hover:scale-110");
  inputSignal.hoverBounce && btn.hover("hover:animate-bounce");
  inputSignal.hoverPulse && btn.hover("hover:animate-pulse");
  inputSignal.hoverSpin && btn.hover("hover:animate-spin");
  inputSignal.hoverPing && btn.hover("hover:animate-ping");

  inputSignal.activeShrink &&
    btn.active("active:scale-95 transition-transform");
  inputSignal.activeRipple &&
    btn.active("active:ring-4 active:ring-black active:scale-90");
  inputSignal.activeExplode &&
    btn.active("active:scale-110 active:ring-8 active:ring-black");
  inputSignal.activeSlide && btn.active("active:translate-x-0.5");
  inputSignal.activeNone && btn.active("active:scale-100 active:opacity-100");
  inputSignal.activeGlow && btn.active("active:shadow-lg active:shadow-blue-500/50");
  inputSignal.activeRotate && btn.active("active:rotate-3");
  inputSignal.activeBounce && btn.active("active:animate-bounce");
  inputSignal.activePulse && btn.active("active:animate-pulse");

  inputSignal.focusRing && btn.focus("focus:ring-4 focus:ring-blue-500");
  inputSignal.focusGlow && btn.focus("focus:shadow-lg focus:shadow-blue-500/50");
  inputSignal.focusScale && btn.focus("focus:scale-105");
  inputSignal.focusNone && btn.focus("focus:outline-none");

  inputSignal.bold && btn.textWeight("font-bold");
  inputSignal.semibold && btn.textWeight("font-semibold");
  inputSignal.light && btn.textWeight("font-light");
  inputSignal.thin && btn.textWeight("font-thin");

  inputSignal.uppercase && btn.textTransform("uppercase");
  inputSignal.lowercase && btn.textTransform("lowercase");
  inputSignal.capitalize && btn.textTransform("capitalize");

  inputSignal.underline && btn.textDecoration("underline");
  inputSignal.lineThrough && btn.textDecoration("line-through");
  inputSignal.overline && btn.textDecoration("overline");

  inputSignal.textXs && btn.textSize("text-xs");
  inputSignal.textSm && btn.textSize("text-sm");
  inputSignal.textBase && btn.textSize("text-base");
  inputSignal.textLg && btn.textSize("text-lg");
  inputSignal.textXl && btn.textSize("text-xl");
  inputSignal.text2xl && btn.textSize("text-2xl");

  inputSignal.textLeft && btn.textLayer("text-left");
  inputSignal.textCenter && btn.textLayer("text-center");
  inputSignal.textRight && btn.textLayer("text-right");
  inputSignal.textJustify && btn.textLayer("text-justify");

  inputSignal.animateSpin && btn.animation("animate-spin");
  inputSignal.animatePulse && btn.animation("animate-pulse");
  inputSignal.animateBounce && btn.animation("animate-bounce");
  inputSignal.animatePing && btn.animation("animate-ping");
  inputSignal.transitionNone && btn.animation("transition-none");
  inputSignal.transitionFast && btn.animation("transition-all duration-150");
  inputSignal.transitionSlow && btn.animation("transition-all duration-700");
  inputSignal.transitionAll && btn.animation("transition-all duration-300 ease-in-out");
  inputSignal.transitionColors && btn.animation("transition-colors duration-300");
  inputSignal.transitionTransform && btn.animation("transition-transform duration-300");
  inputSignal.transitionOpacity && btn.animation("transition-opacity duration-300");
  inputSignal.transitionNone && btn.animation("transition-none");

  inputSignal.loading && (
    btn.color("opacity-75 cursor-not-allowed"),
    data("disabled")
  );
  inputSignal.disabled && (
    btn.color("opacity-50 cursor-not-allowed"),
    data("disabled")
  );
  inputSignal.selected && btn.color("ring-2 ring-blue-500 ring-offset-2");
  inputSignal.pressed && btn.active("scale-95");

  inputSignal.relative && btn.layout("relative");
  inputSignal.absolute && btn.layout("absolute");
  inputSignal.fixed && btn.layout("fixed");
  inputSignal.sticky && btn.layout("sticky");
  inputSignal.m0 && btn.layout("m-0");
  inputSignal.m1 && btn.layout("m-1");
  inputSignal.m2 && btn.layout("m-2");
  inputSignal.m4 && btn.layout("m-4");
  inputSignal.m8 && btn.layout("m-8");
  inputSignal.p0 && btn.layout("p-0");
  inputSignal.p1 && btn.layout("p-1");
  inputSignal.p2 && btn.layout("p-2");
  inputSignal.p4 && btn.layout("p-4");
  inputSignal.p8 && btn.layout("p-8");
  inputSignal.flexRow && btn.layout("flex-row");
  inputSignal.flexCol && btn.layout("flex-col");
  inputSignal.flexWrap && btn.layout("flex-wrap");
  inputSignal.flexNowrap && btn.layout("flex-nowrap");
  inputSignal.gap1 && btn.layout("gap-1");
  inputSignal.gap2 && btn.layout("gap-2");
  inputSignal.gap4 && btn.layout("gap-4");
  inputSignal.gap8 && btn.layout("gap-8");

  inputSignal.children && data("children");
  inputSignal.onClick && data("onClick");
  inputSignal.type && data("type");
  inputSignal["aria-label"] && data("aria-label");
  inputSignal["aria-haspopup"] && data("aria-haspopup");
  inputSignal["aria-expanded"] && data("aria-expanded");
  inputSignal.onMouseEnter && data("onMouseEnter");
  inputSignal.onMouseLeave && data("onMouseLeave");

  state("ripples", 0, []);
  inputSignal.ripple && data("ripple") && state("ripples", 1, []);
  
  const rippleCounterRef = useRef(0);
  const handleRippleClick = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
    stateSignal.ripples?.set([
        ...(stateSignal.ripples?.get || []),
        {
            id: ++rippleCounterRef.current,
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        },
    ]);
  };
  const rippleStyles = ` @keyframes ripple {
        0% { width: 0; height: 0; opacity: 0.5; }
        100% { width: 400px; height: 400px; opacity: 0; }
    }`;

  return (
    <>
      <style>{rippleStyles}</style>

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

        {dataSignal.ripple &&
          (stateSignal.ripples?.get || []).map((ripple) => (
            <span
              key={ripple.id}
              className={classes(layerSignal.ripple)}
              style={{
                left: ripple.x,
                top: ripple.y,
                animation: "ripple 2s ease-out",
              }}
            />
          ))}
      </button>
    </>
  );
}