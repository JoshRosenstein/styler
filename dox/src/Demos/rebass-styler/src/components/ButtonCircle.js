import Button from "./Button"
import sys from "../sys"

export default sys(
  Button,
  {},
  {
    displayName: "ButtonO",
    defaultProps: {
      px: "3",
      borderRadius: 9999
    },
    withProps: {}
  }
)
