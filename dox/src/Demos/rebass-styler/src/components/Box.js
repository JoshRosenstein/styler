import {
  width,
  space,
  fontSize,
  color,
  flex,
  order,
  alignSelf
} from "../styles"
import sys from "../sys"

export const styles = {
  ...width,
  ...space,
  ...fontSize,
  ...color,
  ...flex,
  ...order,
  ...alignSelf,
  boxSizing: "border-box"
}

export default sys(
  "div",
  styles,

  {
    displayName: "Box",
    defaultProps: {},
    withProps: {}
  }
)
