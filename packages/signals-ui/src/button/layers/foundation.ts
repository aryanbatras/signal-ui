export function foundation(props: any, classes: string[]) {
  // Base button foundation
  classes.push("inline-flex", "items-center", "justify-center", "font-medium", "transition-colors")
  
  // Default focus styles
  classes.push("focus:outline-none", "focus-visible:ring-2", "focus-visible:ring-offset-2")
}
