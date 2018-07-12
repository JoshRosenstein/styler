import { space, color, boxShadow, borderRadius } from "../styles"
import sys from "../sys"

import { merge } from "./utils"
export const styles = {
  ...space,
  ...color,
  ...boxShadow,
  ...borderRadius,
  overflow: "hidden"
}

export default sys("div", styles, {
  displayName: "Card",
  defaultProps: {
    p: "2",
    bg: "white",
    borderRadius: "2",
    boxShadow: "2"
  },
  withProps: {}
})
