import {
  space,
  fontSize,
  fontWeight,
  color,
  borderRadius,
  border,
  hover,
  borderBottom,
  borderColor
} from "../styles"
import sys from "../sys"
import merge from "../merge"

export const styles = merge(
  space,
  fontSize,
  fontWeight,
  color,
  borderRadius,
  border,
  hover,
  borderBottom,
  borderColor,

  {
    textDecoration: "none"
  }
)

export default sys("a", styles, {
  displayName: "Tab",
  defaultProps: {
    fontSize: "1",
    fontWeight: "bold",
    mr: "3",
    py: "2",
    color: "inherit",
    borderBottom: 2,
    borderColor: "transparent",
    hover: {
      color: "blue"
    }
  },
  withProps: {}
})
