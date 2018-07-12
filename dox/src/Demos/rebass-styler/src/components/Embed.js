import { ratio, space, color } from "../styles"
import sys from "../sys"

export const styles = {
  ...space,
  ...ratio,
  ...color,
  position: "relative",
  overflow: "hidden",
  "& > iframe": {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    bottom: 0,
    left: 0,
    border: 0
  }
}

export default sys("div", styles, {
  displayName: "Embed",
  defaultProps: { ratio: 9 / 16 },
  withProps: {}
})
