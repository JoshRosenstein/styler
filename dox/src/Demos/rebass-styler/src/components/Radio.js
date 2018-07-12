import { color, space } from "../styles"
import sys from "../sys"

export default sys(
  "input",
  { ...space, ...color },

  {
    displayName: "Radio",
    defaultProps: {
      type: "radio",
      m: "0",
      mr: "2"
    },
    withProps: {}
  }
)
