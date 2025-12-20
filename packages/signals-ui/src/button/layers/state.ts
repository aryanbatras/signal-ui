export function state(props: any, classes: string[]) {
  if (props.disabled) classes.push("opacity-50", "cursor-not-allowed", "pointer-events-none")
  if (props.active) classes.push("ring-2", "ring-offset-2")
  if (props.loading) classes.push("cursor-wait")
}
