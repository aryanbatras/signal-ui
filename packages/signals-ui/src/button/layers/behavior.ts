export function behavior(props: any, classes: string[]) {
  if (props.hoverMotion) classes.push("transform", "hover:scale-105", "transition-transform")
  if (props.pressMotion) classes.push("active:scale-95", "transition-transform")
}
