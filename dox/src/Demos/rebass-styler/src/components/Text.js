import {
  space,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  textAlign,
  lineHeight
} from "../styles"
import sys from "../sys"
import merge from "../merge"

export const styles = merge(
  space,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  textAlign,
  lineHeight
)
export default sys("div", styles, {
  displayName: "Text",
  defaultProps: { m: "0" },
  withProps: {}
})
