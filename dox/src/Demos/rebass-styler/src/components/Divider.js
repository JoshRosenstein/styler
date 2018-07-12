import { space, color, border, borderColor, borders } from "../styles"
import sys from "../sys"
import merge from "../merge"

export const styles = merge(space, color, border, borders, borderColor)
export default sys("hr", styles, {
  displayName: "Divider",
  defaultProps: {
    mx: "0",
    my: "3",
    border: 0,
    borderBottom: 1,
    borderColor: "gray"
  },
  withProps: {}
})
