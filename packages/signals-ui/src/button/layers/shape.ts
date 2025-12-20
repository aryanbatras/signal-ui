export function shape(props: any, classes: string[]) {
  if (props.square) classes.push("rounded-none")
  if (props.rounded) classes.push("rounded-md")
  if (props.pill) classes.push("rounded-full")
  if (props.circle) classes.push("rounded-full", "aspect-square")
}
