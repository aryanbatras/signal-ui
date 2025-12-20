export function surface(props: any, classes: string[]) {
  if (props.solid) classes.push("shadow-sm")
  if (props.soft) classes.push("bg-opacity-10")
  if (props.outline) classes.push("border", "border-current", "bg-transparent")
  if (props.ghost) classes.push("bg-transparent", "hover:bg-opacity-10")
  if (props.link) classes.push("underline", "p-0", "h-auto", "shadow-none")
}
