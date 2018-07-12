import { focus } from "../styles"
import sys from "../sys"
import Button from "./Button"

export default sys(
  Button,
  { ...focus },
  {
    displayName: "ButtonT",
    defaultProps: {
      bg: "transparent",
      color: "inherit",
      rootEl: "button",
      focus: {
        outline: "none",
        boxShadow: "none",
        color: "blue"
      }
    },
    withProps: {
      focus: {
        outline: "none",
        boxShadow: "none",
        color: "blue"
      }
    }
  }
)
