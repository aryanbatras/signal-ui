export function composition(props: any, classes: string[]) {
  if (props.iconOnly) classes.push("p-2")
  if (props.hasIcon) classes.push("gap-2")
  if (props.loading) classes.push("pointer-events-none", "opacity-70")
}
