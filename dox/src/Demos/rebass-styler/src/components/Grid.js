import { gridGap } from "../styles"

import sys from "../sys"
import merge from "../merge"
import { px } from "@roseys/styler"
const gridHeight = {
  gridAutoRows: {
    gridAutoRows: "self",
    height: "self",
    options: {
      postFn: "px"
    }
  }
}

const gridWidth = {
  gridTemplateColumns: {
    gridTemplateColumns: "self",
    width: "self",
    options: {
      postFn: v => `repeat(auto-fit, minmax(${px(v)}, 1fr))`
    }
  }
}

export const styles = merge(gridHeight, gridWidth, gridGap)
export default sys(
  "div",
  styles,

  {
    displayName: "Grid",
    defaultProps: {
      width: 256,
      height: 192
    },
    withProps: {}
  }
)
