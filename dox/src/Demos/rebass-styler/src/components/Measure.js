import sys from "../sys"
import Text from "./Text"
import { maxWidth } from "../styles"
export default sys(Text, maxWidth, {
  displayName: "Measure",
  defaultProps: {
    maxWidth: "32em"
  },
  withProps: {}
})
