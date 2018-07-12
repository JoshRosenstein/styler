import { space, width, color, fontSize, fontWeight } from "../styles"
import sys from "../sys"
import merge from "../merge"

export const styles = merge(space, width, color, fontSize, fontWeight, {
  display: "inline-flex",
  alignItems: "center",
  alignSelf: "stretch",
  textDecoration: "none",
  whiteSpace: "nowrap",
  cursor: "pointer",
  "&:disabled": {
    opacity: 1 / 4
  }
})
export default sys("a", styles, {
  displayName: "NavLink",
  defaultProps: {
    color: "inherit",
    bg: "transparent",
    fontSize: "1",
    fontWeight: "bold",
    p: "2"
  },
  withProps: {}
})
