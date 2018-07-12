import sys from "../sys"
import ButtonTransparent from "./ButtonTransparent"

export default sys(
  ButtonTransparent,
  {
    width: "24px",
    height: "24px"
  },
  {
    displayName: "Container",
    defaultProps: {
      p: "0",
      fontSize: "3",
      lineHeight: "1",
      children: "×"
    },
    withProps: {}
  }
)
