export function visual(props: any, classes: string[]) {
  if (props.primary) classes.push("bg-blue-600", "hover:bg-blue-700", "focus-visible:ring-blue-500")
  if (props.secondary) classes.push("bg-gray-200", "hover:bg-gray-300", "focus-visible:ring-gray-500")
  if (props.success) classes.push("bg-green-600", "hover:bg-green-700", "focus-visible:ring-green-500")
  if (props.warning) classes.push("bg-yellow-500", "hover:bg-yellow-600", "focus-visible:ring-yellow-500")
  if (props.danger) classes.push("bg-red-600", "hover:bg-red-700", "focus-visible:ring-red-500")
  if (props.neutral) classes.push("bg-gray-500", "hover:bg-gray-600", "focus-visible:ring-gray-500")
}
