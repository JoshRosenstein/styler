import { space, width, color } from "../styles"
import sys from "../sys"
import merge from "../merge"

const styles = merge(space, width, color, {
  display: "block",
  maxWidth: "100%",
  height: "auto"
})
export default sys("img", styles, {
  displayName: "Container",
  defaultProps: {},
  withProps: {}
})
