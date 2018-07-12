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
    appearance: "none",
    "&:disabled": {
      opacity: 1 / 4
    },
    "&:focus": {
      outline: "none",
      boxShadow: "inset 0 0 0 1px {!theme.colors.blue}"
    }
  }
)

export default sys("textarea", styles, {
  displayName: "Textarea",
  defaultProps: {
    m: "0",
    px: "1",
    py: "2",
    width: 1,
    border: 0,
    borderColor: "gray",
    boxShadow: "1",
    borderRadius: "2",
    color: "inherit",
    bg: "transparent",
    fontSize: "inherit"
  },
  withProps: {}
})
