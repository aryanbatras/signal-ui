import { useState } from "react";

export function CheckBox(contract = {}) {

  const [inputSignal, layerSignal, dataSignal, stateSignal] = [{ ...contract }, {}, {}, {}];
  const checkboxId = `checkbox-${Math.random().toString(36).substring(2, 9)}`;

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
    shape: layer("shape", "checkbox")
  }

  label = {
    base: layer("base", "label"),
    color: layer("color", "label"),
    font: layer("font", "label"),
    size: layer("size", "label"),
    layout: layer("layout", "label")
  }
 
  container.base("relative");
  container.color("bg-transparent");
  container.size("h-3 w-3");
  container.layout("flex flex-row justify-center items-center");

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

inputSignal.square && checkbox.shape("rounded-none");
inputSignal.rounded && checkbox.shape("rounded-sm");
inputSignal.pill && checkbox.shape("rounded-full");

inputSignal.hoverScale && checkbox.layout("hover:scale-105");
inputSignal.pressShrink && checkbox.layout("active:scale-95");
inputSignal.focusRing && checkbox.layout("focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1");
inputSignal.noTransition && checkbox.layout("transition-none");

inputSignal.loading && checkbox.color("opacity-50 cursor-wait");
inputSignal.readonly && checkbox.color("cursor-not-allowed opacity-60");
inputSignal.required && label.color("text-gray-900 font-medium");

inputSignal.borderNone && checkbox.border("border-0");
inputSignal.borderThick && checkbox.border("border-4");
inputSignal.borderDashed && checkbox.border("border-2 border-dashed");

  inputSignal.xs && (label.size("text-xs"), container.size("h-2 w-2"), checkbox.size("h-2 w-2 checked:after:text-[4px]"));
  inputSignal.sm && (label.size("text-sm"), container.size("h-3 w-3"), checkbox.size("h-3 w-3 checked:after:text-[8px]"));
  inputSignal.md && (label.size("text-md"), container.size("h-4 w-4"), checkbox.size("h-4 w-4 checked:after:text-[10px]"));
  inputSignal.lg && (label.size("text-lg"), container.size("h-5 w-5"), checkbox.size("h-5 w-5 checked:after:text-[12px]"));

  inputSignal.labelLeft && label.layout("left-5");
  inputSignal.labelRight && label.layout("right-5");
  inputSignal.labelBottom && label.layout("top-5");
  inputSignal.labelTop && label.layout("bottom-5");

  inputSignal.label && data("label");
  inputSignal.checked && data("checked");
  inputSignal.defaultChecked && data("defaultChecked");
  inputSignal.onChange && data("onChange");
  inputSignal.disabled && data("disabled");
  inputSignal.ariaLabel && data("ariaLabel");
  inputSignal.ariaLabelledBy && data("ariaLabelledBy");
  inputSignal.ariaDescribedBy && data("ariaDescribedBy");
  inputSignal.ariaInvalid && data("ariaInvalid");
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