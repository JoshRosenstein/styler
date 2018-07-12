import Box from "./Box"
import { flexWrap, flexDirection, alignItems, justifyContent } from "../styles"
import sys from "../sys"

export const styles = {
  ...flexWrap,
  ...flexDirection,
  ...alignItems,
  ...justifyContent,
  display: "flex"
}

export default sys(Box, styles, {
  displayName: "Flex",
  defaultProps: {},
  withProps: {}
})
