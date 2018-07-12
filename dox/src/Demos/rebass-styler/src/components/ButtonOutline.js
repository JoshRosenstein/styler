import { hover } from "../styles"
import sys from "../sys"
import Button from "./Button"

export default sys(
  Button,
  {
    ...hover,
    boxShadow: {
      color: "self",
      options: {
        path: "theme.colors",
        postFn: v => "inset 0 0 0 2px" + v
      }
    }
  },
  {
    displayName: "ButtonO",
    defaultProps: {
      color: "blue",
      bg: "transparent",
      hover: {
        color: "white",
        backgroundColor: "blue"
      }
    },
    withProps: {}
  }
)
