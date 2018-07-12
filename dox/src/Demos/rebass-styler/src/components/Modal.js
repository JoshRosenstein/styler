import { Fixed } from "./Position"
import { width, maxWidth, maxHeight, borderRadius } from "../styles"
import sys from "../sys"
import merge from "../merge"
const styles = merge(width, maxWidth, maxHeight, borderRadius, {
  boxShadow: `0 0 0 60vmax {!theme.colors.darken}, 0 0 32px {!theme.colors.darken}`,
  overflow: "auto",
  transform: "translate(-50%, -50%)"
})

export default sys(Fixed, styles, {
  displayName: "Modal",
  defaultProps: {
    top: "50%",
    left: "50%",
    p: "3",
    bg: "white",
    borderRadius: 2,
    maxWidth: "100vw",
    maxHeight: "100vh"
  },
  withProps: {}
})
