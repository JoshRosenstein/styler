import { maxWidth } from "../styles"
import sys from "../sys"
import FlexBox from "./Box"

export default sys(FlexBox, maxWidth, {
  displayName: "Container",
  defaultProps: {
    px: "3",
    mx: "auto",
    maxWidth: 1024
  },
  withProps: {}
})
