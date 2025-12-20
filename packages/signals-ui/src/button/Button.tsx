import { ButtonSignals } from "./button.signals"

import { foundation } from "./layers/foundation.js"
import { semantic } from "./layers/semantic.js"
import { visual } from "./layers/visual.js"
import { surface } from "./layers/surface.js"
import { size } from "./layers/size.js"
import { shape } from "./layers/shape.js"
import { composition } from "./layers/composition.js"
import { state } from "./layers/state.js"
import { behavior } from "./layers/behavior.js"
import { a11y } from "./layers/a11y.js"

export function Button({
  children,
  className = "",
  ...props
}: ButtonSignals & {
  children: string
  className?: string
}) {
  const classes: string[] = []

  foundation(props, classes)
  semantic(props, classes)
  visual(props, classes)
  surface(props, classes)
  size(props, classes)
  shape(props, classes)
  composition(props, classes)
  state(props, classes)
  behavior(props, classes)
  a11y(props, classes)

  if (className) classes.push(className)

  return (
    <button {...props} className={classes.join(" ")}>
      {children}
    </button>
  )
}
