import { color, space, size, borderRadius } from "../styles"
import sys from "../sys"
export const styles = { ...space, ...color, ...size, ...borderRadius }

export default sys("img", styles, {
  displayName: "Avatar",
  defaultProps: {
    borderRadius: "99999px",
    size: 48
  },
  withProps: {}
})
