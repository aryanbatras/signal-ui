export function size(props: any, classes: string[]) {
  if (props.xs) classes.push("text-xs", "px-2", "py-1", "h-6")
  if (props.sm) classes.push("text-sm", "px-3", "py-1.5", "h-8")
  if (props.md) classes.push("text-base", "px-4", "py-2", "h-10")
  if (props.lg) classes.push("text-lg", "px-6", "py-3", "h-12")
}
