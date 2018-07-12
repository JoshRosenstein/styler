import { fontFamily, fontSize, space, color } from "../styles"
import sys from "../sys"
import merge from "../merge"

export const styles = merge(fontSize, fontFamily, space, color)
export default sys("pre", styles, {
  displayName: "Pre",
  defaultProps: {
    fontSize: "1",
    fontFamily: "mono",
    m: "0"
  },
  withProps: {}
})
