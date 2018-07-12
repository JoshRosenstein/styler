import sys from "../sys"
import Flex from "./Flex"
import { minHeight, fontWeight } from "../styles"

export const styles = {
  ...minHeight,
  ...fontWeight,
  WebkitFontSmoothing: "antialiased"
}

export default sys(Flex, styles, {
  displayName: "Measure",
  defaultProps: {
    px: "3",
    py: "2",
    fontWeight: "bold",
    color: "white",
    bg: "blue",
    align: "center",
    minHeight: "48px"
  },
  withProps: {}
})
