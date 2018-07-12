import {
  space,
  fontSize,
  lineHeight,
  width,
  color,
  boxShadow,
  borderColor,
  borderRadius
} from "../styles"
import sys from "../sys"
import merge from "../merge"

export const styles = merge(
  space,
  fontSize,
  lineHeight,
  width,
  color,
  boxShadow,
  borderColor,
  borderRadius,
  {
    fontFamily: "inherit",
    display: "inline-block",
    verticalAlign: "middle",
    border: 0,
    appearance: "none",
    "&:focus": {
      outline: "none",
      boxShadow: "inset 0 0 0 1px {!theme.colors.blue}"
    },
    "&:disabled": {
      opacity: 1 / 4
    }
  }
)

export default sys("input", styles, {
  displayName: "Card",
  defaultProps: {
    type: "text",
    fontSize: "inherit",
    lineHeight: "inherit",
    px: "1",
    py: "2",
    m: "0",
    width: 1,
    border: 0,
    borderColor: "gray",
    boxShadow: "1",
    borderRadius: "2",
    color: "inherit",
    bg: "transparent"
  },
  withProps: {}
})
