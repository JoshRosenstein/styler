import { fontFamily, fontSize, space, color } from "../styles"
import sys from "../sys"

export const styles = { ...fontSize, ...fontFamily, ...space, ...color }
export default sys("pre", styles, {
  displayName: "Code",
  defaultProps: {
    fontSize: "1",
    fontFamily: "mono"
  },
  withProps: {}
})
