import { letterSpacing } from "../styles"
import sys from "../sys"
import Text from "./Text"
export const styles = { ...letterSpacing, textTransform: "uppercase" }
export default sys(Text, styles, {
  displayName: "Caps",
  defaultProps: {
    fontSize: 0,
    letterSpacing: "0.2em"
  },
  withProps: {}
})
