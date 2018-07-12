import sys from "../sys"
import Box from "./Box"

export default sys(
  Box,
  {},
  {
    displayName: "Column",
    defaultProps: {
      px: "3",
      mb: "4",
      flex: "1 1 auto"
    },
    withProps: {}
  }
)
