import { textAlign, size, alignItems } from "../styles"
import sys from "../sys"
import Badge from "./Badge"
const styles = { ...textAlign, ...size, ...alignItems, boxSizing: "border-box" }

export default sys(Badge, styles, {
  displayName: "Circle",
  defaultProps: {
    size: 24,
    align: "center",
    borderRadius: "99999px"
  },
  withProps: {}
})
