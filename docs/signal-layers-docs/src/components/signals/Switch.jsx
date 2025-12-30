import { useState } from "react";

export function Switch(contract = {}) {

  const [inputSignal, layerSignal, dataSignal, stateSignal] = [{ ...contract }, {}, {}, {}];
  const switchId = `switch-${Math.random().toString(36).substring(2, 9)}`;

  const layer = (name, scope = "checkbox") => (className) =>
    (layerSignal[scope] ||= {},
    layerSignal[scope][name] ||= [],
    (layerSignal[scope][name][0] = className));

  const data = (name, key = name) =>
    inputSignal[key] !== undefined && (dataSignal[name] = inputSignal[key]);

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

let container;
let button;
let thumb;
let label;

container = {
    base: layer("base", "container"),
    size: layer("size", "container"),
    color: layer("color", "container"),
    layout: layer("layout", "container")
}

button = {
    base: layer("base", "button"),
    size: layer("size", "button"),
    color: layer("color", "button"),
    shape: layer("shape", "button"),
    layout: layer("layout", "button"),
    checked: layer("checked", "button"),
    interactive: layer("interactive", "button")
}

thumb = {
    base: layer("base", "thumb"),
    color: layer("color", "thumb"),
    shape: layer("shape", "thumb"),
    size: layer("size", "thumb"),
    layout: layer("layout", "thumb"),
    position: layer("position", "thumb"),
    interactive: layer("interactive", "thumb")
}

label = {
    base: layer("base", "label"),
    color: layer("color", "label"),
    layout: layer("layout", "label"),
    size: layer("size", "label")
}

container.base("relative");
container.size("h-4 w-8");
container.color("bg-transparent");
container.layout("inline-flex items-center gap-2");

button.base("relative transition-colors duration-500 cursor-pointer");
button.size("h-4 w-8");
button.color("bg-gray-200");
button.shape("rounded-full");
button.layout("inline-flex items-center");
button.checked("checked:bg-blue-600");

thumb.base("absolute transition-transform duration-500");
thumb.color("bg-white");
thumb.shape("rounded-full");
thumb.size("h-4 w-4");
thumb.layout("inline-block");
thumb.position("translate-x-0");

label.base("absolute cursor-pointer whitespace-nowrap");
label.color("text-gray-700");
label.size("text-sm font-light");
label.layout("left-12");

inputSignal.xs && (
    container.size("h-3 w-6"), 
    button.size("h-3 w-6"), 
    thumb.size("h-3 w-3")
)
inputSignal.sm && (
    container.size("h-4 w-8"), 
    button.size("h-4 w-8"), 
    thumb.size("h-4 w-4")
)
inputSignal.md && (
    container.size("h-5 w-10"), 
    button.size("h-5 w-10"), 
    thumb.size("h-5 w-5")
)
inputSignal.lg && (
    container.size("h-6 w-12"), 
    button.size("h-6 w-12"), 
    thumb.size("h-6 w-6")
)

inputSignal.square && (button.shape("rounded-md"), thumb.shape("rounded-md"));
inputSignal.pill && (button.shape("rounded-full"), thumb.shape("rounded-full"));

inputSignal.labelLeft && label.layout("right-12 left-auto");
inputSignal.labelRight && label.layout("left-12");
inputSignal.labelTop && label.layout("bottom-8 left-0 right-0");
inputSignal.labelBottom && label.layout("top-8 left-0 right-0");
inputSignal.labelHidden && label.base("absolute opacity-0 pointer-events-none");

inputSignal.disabled && (button.interactive("cursor-not-allowed opacity-40"), thumb.interactive("opacity-40"));

inputSignal.id && data("id");
inputSignal.label && data("label");
inputSignal.name && data("name");
inputSignal.value && data("value");
inputSignal.checked && data("checked");
inputSignal.defaultChecked && data("defaultChecked");
inputSignal.disabled && data("disabled");
inputSignal.required && data("required");
inputSignal.readOnly && data("readOnly");
inputSignal.ariaLabel && data("aria-label");
inputSignal.ariaLabelledBy && data("aria-labelledby");
inputSignal.ariaDescribedBy && data("aria-describedby");
inputSignal.ariaInvalid && data("aria-invalid");
inputSignal.ariaChecked && data("aria-checked");


state("checked", 1, false);
stateSignal.checked?.get && (
    thumb.position("translate-x-4"),
    inputSignal.xs && thumb.position("translate-x-3"),
    inputSignal.sm && thumb.position("translate-x-4"),
    inputSignal.md && thumb.position("translate-x-5"),
    inputSignal.lg && thumb.position("translate-x-6"),
    button.color("bg-blue-600")
);

  return (
     <div className={classes(layerSignal.container)}>
    
        <button
        type="button"
        role="switch"
        label={dataSignal.label}
        id={dataSignal.id || switchId}
        name={dataSignal.name}
        value={dataSignal.value}
        checked={dataSignal.checked ?? stateSignal.checked?.get}
        defaultChecked={dataSignal.defaultChecked}
        disabled={dataSignal.disabled}
        required={dataSignal.required}
        readOnly={dataSignal.readOnly}
        aria-label={dataSignal.ariaLabel}
        aria-labelledby={dataSignal.ariaLabelledBy}
        aria-describedby={dataSignal.ariaDescribedBy}
        aria-invalid={dataSignal.ariaInvalid}
        aria-checked={dataSignal.ariaChecked ?? (dataSignal.checked ?? stateSignal.checked?.get)}
        onClick={() => stateSignal.checked?.set(!stateSignal.checked?.get)}
        className={classes(layerSignal.button)}
        >
        
            <span 
            className={classes(layerSignal.thumb)} 
            />
        
        </button>
    
    {dataSignal.label && 
        
        <label 
        htmlFor={dataSignal.id || switchId}
        className={classes(layerSignal.label)}
        >

            {dataSignal.label}

        </label>
    }

  </div>
  )
 
}
