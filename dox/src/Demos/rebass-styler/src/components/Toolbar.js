import sys from "../sys"
import Flex from "./Flex"
import { minHeight, fontWeight } from "../styles"

export const styles = {
  ...minHeight,
  ...fontWeight,
  WebkitFontSmoothing: "antialiased"
}

export default sys(Flex, styles, {
  displayName: "Toolbar",
  defaultProps: {
    px: "2",
    color: "white",
    bg: "black",
    align: "center",
    minHeight: "48px"
  },
  withProps: {}
})
