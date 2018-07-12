import {
  size,
  space,
  color,
  borders,
  borderRadius,
  borderColor,
  focus,
  hover,
  disabled
} from "../styles"
import sys from "../sys"
import merge from "../merge"

export const styles = merge(
  size,
  space,
  color,
  borders,
  borderRadius,
  borderColor,
  focus,
  hover,
  disabled,
  {
    appearance: "none",
    backgroundClip: "padding-box"
  }
)

export default sys("button", styles, {
  displayName: "Dot",
  defaultProps: {
    m: "0",
    p: "0",
    size: 16,
    bg: "darken",
    borderRadius: 99999,
    border: 4,
    borderColor: "transparent",
    focus: {
      backgroundColor: "blue"
    },
    hover: {
      backgroundColor: "blue"
    },
    disabledStyle: {
      opacity: 1 / 4
    }
  },
  withProps: {}
})
