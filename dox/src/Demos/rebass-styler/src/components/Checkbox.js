import { color, space } from "../styles"
import sys from "../sys"

export const styles = { ...space, ...color }
export default sys(
  "input",
  styles,

  {
    displayName: "Checkbox",
    defaultProps: {
      type: "checkbox",
      m: "0",
      mr: "2"
    },
    withProps: {}
  }
)
