import { space, width, color, border, borderColor } from "../styles"
import sys from "../sys"
import merge from "../merge"

export const styles = merge(space, width, color, border, borderColor)

export default sys("div", styles, {
  displayName: "Border",
  defaultProps: {
    border: 1,
    borderColor: "gray"
  },
  withProps: {}
})
