import Heading from "./Heading"
import sys from "../sys"

export default sys(
  Heading,
  {},

  {
    displayName: "subHead",
    defaultProps: { is: "h3", fontSize: "4" },
    withProps: {}
  }
)
