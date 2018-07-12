import {
  space,
  fontSize,
  fontWeight,
  color,
  borderRadius,
  border
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

  {
    fontFamily: "inherit",
    WebkitFontSmoothing: "antialiased",
    display: "inline-block",
    verticalAlign: "middle",
    textAlign: "center",
    textDecoration: "none",
    appearance: "none",
    "&:disabled": {
      opacity: 1 / 4
    },
    "&:focus": {
      outline: "none",
      boxShadow: {
        bg: "self",
        options: {
          path: "theme.colors",
          postFn: v => "0 0 0 2px " + v
        }
      }
    }
  }
)

export default sys("button", styles, {
  displayName: "Button",
  defaultProps: {
    fontSize: "1",
    fontWeight: "bold",
    lineHeight: 16 / 14,
    m: "0",
    px: "3",
    py: "2",
    color: "white",
    bg: "blue",
    borderRadius: "2",
    border: "0"
  },
  withProps: {}
})
