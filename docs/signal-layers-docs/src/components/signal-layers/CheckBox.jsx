import { createSignalUtils } from "./";
export function CheckBox(contract = {}) {
    const { layer, data, state, classes, signals } = createSignalUtils(contract);
    const { inputSignal, layerSignal, dataSignal, stateSignal } = signals;
    const checkboxId = `checkbox-${Math.random().toString(36).substring(2, 9)}`;
    let container, checkbox, label;

    container = {
        base: layer("base", "container"),
        color: layer("color", "container"),
        size: layer("size", "container"),
        layout: layer("layout", "container")
    }

    checkbox = {
        base: layer("base", "checkbox"),
        color: layer("color", "checkbox"),
        size: layer("size", "checkbox"),
        layout: layer("layout", "checkbox"),
        checked: layer("checked", "checkbox"),
        border: layer("border", "checkbox"),
        shape: layer("shape", "checkbox"),
        hover: layer("hover", "checkbox"),
        focus: layer("focus", "checkbox"),
        active: layer("active", "checkbox"),
        interactive: layer("interactive", "checkbox")
    }

    label = {
        base: layer("base", "label"),
        color: layer("color", "label"),
        font: layer("font", "label"),
        size: layer("size", "label"),
        layout: layer("layout", "label")
    }
 
    container.base("relative flex flex-row justify-center items-center");
    container.color("bg-transparent");
    container.size("h-3 w-3");
    container.layout("gap-2");

    checkbox.base("absolute inset-0 appearance-none cursor-pointer");
    checkbox.color("border-gray-300 bg-transparent");
    checkbox.size("h-3 w-3 checked:after:text-[8px]");
    checkbox.border("border-2");
    checkbox.shape("rounded-sm");
    checkbox.layout("transition-all duration-200");
    checkbox.checked(" checked:after:leading-none checked:border-blue-600 checked:bg-gray-300 checked:after:content-['✓'] checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2");

    label.base("absolute cursor-pointer");
    label.color("text-gray-800");
    label.font("font-light");
    label.size("text-sm");
    label.layout("left-5");

    inputSignal.primary && checkbox.color("border-blue-600 checked:bg-blue-50 checked:border-blue-600");
    inputSignal.secondary && checkbox.color("border-gray-600 checked:bg-gray-50 checked:border-gray-600");
    inputSignal.danger && checkbox.color("border-red-600 checked:bg-red-50 checked:border-red-600");
    inputSignal.success && checkbox.color("border-green-600 checked:bg-green-50 checked:border-green-600");
    inputSignal.warning && checkbox.color("border-yellow-600 checked:bg-yellow-50 checked:border-yellow-600");
    inputSignal.info && checkbox.color("border-cyan-600 checked:bg-cyan-50 checked:border-cyan-600");
    inputSignal.dark && checkbox.color("border-gray-600 checked:bg-gray-700 checked:border-gray-500");
    inputSignal.light && checkbox.color("border-gray-300 checked:bg-gray-100 checked:border-gray-400");
    inputSignal.neutral && checkbox.color("border-gray-400 checked:bg-gray-200 checked:border-gray-500");
    inputSignal.brand && checkbox.color("border-brand-500 checked:bg-brand-50 checked:border-brand-600");
    inputSignal.accent && checkbox.color("border-accent-500 checked:bg-accent-50 checked:border-accent-600");
    inputSignal.ghost && checkbox.color("border-transparent bg-transparent checked:bg-transparent checked:border-transparent");
    inputSignal.outline && checkbox.color("border-2 bg-transparent checked:bg-transparent");
    inputSignal.filled && checkbox.color("border-transparent bg-gray-100 checked:bg-gray-200");
    inputSignal.glass && checkbox.color("border-white/20 bg-white/10 backdrop-blur-sm checked:bg-white/20");
    inputSignal.gradient && checkbox.color("border-transparent bg-linear-to-r from-blue-500 to-purple-500 checked:from-blue-600 checked:to-purple-600");
    inputSignal.minimal && checkbox.color("border-gray-200 bg-transparent checked:border-gray-400 checked:bg-gray-50");
 

    inputSignal.square && checkbox.shape("rounded-none");
    inputSignal.rounded && checkbox.shape("rounded-sm");
    inputSignal.pill && checkbox.shape("rounded-full");

    inputSignal.hoverScale && checkbox.hover("hover:scale-105");
    inputSignal.pressShrink && checkbox.hover("active:scale-95");

    inputSignal.focusRing && checkbox.focus("focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1");
    
    inputSignal.loading && checkbox.interactive("opacity-50 cursor-wait");
    inputSignal.readonly && checkbox.interactive("cursor-not-allowed opacity-60");

    inputSignal.borderNone && checkbox.border("border-0");
    inputSignal.borderThick && checkbox.border("border-4");
    inputSignal.borderDashed && checkbox.border("border-2 border-dashed");

    inputSignal.xs && (label.size("text-xs"), container.size("h-2 w-2"), checkbox.size("h-2 w-2 checked:after:text-[4px]"));
    inputSignal.sm && (label.size("text-sm"), container.size("h-3 w-3"), checkbox.size("h-3 w-3 checked:after:text-[8px]"));
    inputSignal.md && (label.size("text-md"), container.size("h-4 w-4"), checkbox.size("h-4 w-4 checked:after:text-[10px]"));
    inputSignal.lg && (label.size("text-lg"), container.size("h-5 w-5"), checkbox.size("h-5 w-5 checked:after:text-[12px]"));
       
    inputSignal.hoverGlow && checkbox.hover("hover:shadow-lg hover:shadow-blue-500/25");
    inputSignal.hoverLift && checkbox.hover("hover:-translate-y-0.5 hover:shadow-md");
    inputSignal.pressRotate && checkbox.active("active:rotate-90");
    inputSignal.pressPulse && checkbox.active("active:animate-pulse");
    inputSignal.focusGlow && checkbox.focus("focus:shadow-lg focus:shadow-blue-500/25");
    inputSignal.focusScale && checkbox.focus("focus:scale-110");
      
    inputSignal.labelLeft && label.layout("left-5");
    inputSignal.labelRight && label.layout("right-5");
    inputSignal.labelBottom && label.layout("top-5");
    inputSignal.labelTop && label.layout("bottom-5");
    inputSignal.labelStart && label.layout("left-5 rtl:right-5");
    inputSignal.labelEnd && label.layout("right-5 rtl:left-5");
       
    inputSignal.labelBold && label.font("font-bold");
    inputSignal.labelSemibold && label.font("font-semibold");
    inputSignal.labelMedium && label.font("font-medium");
    inputSignal.labelRegular && label.font("font-normal");
    inputSignal.labelLight && label.font("font-light");
    inputSignal.labelThin && label.font("font-thin");

    inputSignal.labelUppercase && label.font("uppercase");
    inputSignal.labelLowercase && label.font("lowercase");
    inputSignal.labelCapitalize && label.font("capitalize");

    inputSignal.labelItalic && label.font("italic");
    inputSignal.labelUnderline && label.font("underline");
    inputSignal.labelLineThrough && label.font("line-through");
    
    inputSignal.spaced && container.layout("space-x-2");
    inputSignal.compact && container.layout("space-x-1");
    inputSignal.tight && container.layout("gap-0");
    inputSignal.snug && container.layout("gap-1");
    inputSignal.normal && container.layout("gap-2");
    inputSignal.relaxed && container.layout("gap-3");
    inputSignal.loose && container.layout("gap-4");
    inputSignal.extraLoose && container.layout("gap-6");

    inputSignal.label && data("label");
    inputSignal.checked && data("checked");
    inputSignal.defaultChecked && data("defaultChecked");
    inputSignal.onChange && data("onChange");
    inputSignal.disabled && data("disabled");
    inputSignal.ariaLabel && data("ariaLabel");
    inputSignal.ariaLabelledBy && data("ariaLabelledBy");
    inputSignal.ariaDescribedBy && data("ariaDescribedBy");
    inputSignal.ariaInvalid && data("ariaInvalid");
    inputSignal.name && data("name");
    inputSignal.value && data("value");
    inputSignal.form && data("form");
    inputSignal.tabIndex && data("tabIndex");
    
    state("checked", 1, 0);

    return (
        <div className={classes(layerSignal.container)}>

        <input 
        type="checkbox" 
        id={checkboxId} 
        checked={dataSignal.checked ?? stateSignal.checked?.get}
        defaultChecked={dataSignal.defaultChecked}
        onChange={(e) => {
            const v = e.target.checked;
            stateSignal.checked?.set(v);
            dataSignal.onChange?.(v);
        }}
        disabled={dataSignal.disabled}
        aria-label={dataSignal.ariaLabel}
        aria-labelledby={dataSignal.ariaLabelledBy}
        aria-invalid={dataSignal.ariaInvalid}
        aria-describedby={dataSignal.ariaDescribedBy}
        className={`peer ${classes(layerSignal.checkbox)}`}
        />
        
        {dataSignal.label && (<label htmlFor={checkboxId} className={classes(layerSignal.label)}>{dataSignal.label}</label>)}

        </div>
  )
 
}