export function semantic(props: any, classes: string[]) {
  if (props.primary) classes.push("text-white")
  if (props.secondary) classes.push("text-neutral-900")
  if (props.success) classes.push("text-green-700")
  if (props.warning) classes.push("text-yellow-800")
  if (props.danger) classes.push("text-red-700")
  if (props.neutral) classes.push("text-gray-700")
}
