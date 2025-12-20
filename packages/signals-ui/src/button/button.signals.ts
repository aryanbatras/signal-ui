export type ButtonSignals = {
  /* semantic */
  primary?: boolean
  secondary?: boolean
  success?: boolean
  warning?: boolean
  danger?: boolean
  neutral?: boolean

  /* surface */
  solid?: boolean
  soft?: boolean
  outline?: boolean
  ghost?: boolean
  link?: boolean

  /* size */
  xs?: boolean
  sm?: boolean
  md?: boolean
  lg?: boolean

  /* shape */
  square?: boolean
  rounded?: boolean
  pill?: boolean
  circle?: boolean

  /* composition */
  iconOnly?: boolean
  hasIcon?: boolean
  loading?: boolean

  /* layout */
  block?: boolean

  /* behavior */
  hoverMotion?: boolean
  pressMotion?: boolean

  /* state */
  disabled?: boolean
  active?: boolean

  /* contextual */
  login?: boolean
}
