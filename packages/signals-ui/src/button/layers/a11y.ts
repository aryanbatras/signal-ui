export function a11y(props: any, classes: string[]) {
  // Focus ring color based on semantic intent
  if (props.primary) classes.push("focus-visible:ring-blue-500")
  if (props.secondary) classes.push("focus-visible:ring-gray-500")
  if (props.success) classes.push("focus-visible:ring-green-500")
  if (props.warning) classes.push("focus-visible:ring-yellow-500")
  if (props.danger) classes.push("focus-visible:ring-red-500")
  if (props.neutral) classes.push("focus-visible:ring-gray-500")
  
  // Screen reader text for loading state
  if (props.loading) {
    classes.push("aria-busy", "aria-live", "polite")
  }
}
