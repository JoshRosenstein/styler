import sys from "../sys"
import Flex from "./Flex"
import { borders, borderColor } from "../styles"
import merge from "../merge"

export const styles = merge(borders, borderColor)

export default sys(Flex, styles, {
  displayName: "Tabs",
  defaultProps: {
    borderBottom: 1,
    borderColor: "gray"
  },
  withProps: {}
})
