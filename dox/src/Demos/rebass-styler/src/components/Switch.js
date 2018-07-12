import { space, color, borderRadius } from "../styles"
import sys from "../sys"
import merge from "../merge"

export const styles = merge(space, color, borderRadius, {
  display: "inline-flex",
  width: "40px",
  height: "24px",
  backgroundColor: {
    checked: "{!color}",
    default: "transparent",
    options: { path: "theme.colors" }
  },
  cursor: {
    disabled: "",
    default: "pointer"
  },
  boxShadow: "inset 0 0 0 2px",
  transitionProperty: "background-color",
  transitionDuration: ".2s",
  transitionTimingFunction: "ease-out",
  userSelect: "none",
  "&::after": {
    content: '" "',
    width: "16px",
    height: "16px",
    margin: "4px",
    borderRadius: "99999px",
    transitionProperty: "transform, color",
    transitionDuration: ".1s",
    transitionTimingFunction: "ease-out",
    transform: {
      checked: "translateX(16px)",
      default: "translateX(0)"
    },

    backgroundColor: {
      checked: "white",
      color: "self",
      options: { path: "theme.colors" }
    }
  },
  opacity: {
    disabled: 1 / 4
  }
})

export default sys("checkbox", styles, {
  displayName: "Switch",
  defaultProps: {
    role: "checkbox",
    color: "blue",
    borderRadius: "99999px"
  },
  withProps: {}
})
