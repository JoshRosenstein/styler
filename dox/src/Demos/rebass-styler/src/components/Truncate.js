import sys from "../sys"
import Text from "./Text"

export default sys(
  Text,
  {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
  },
  {
    displayName: "Truncate",
    defaultProps: {},
    withProps: {}
  }
)
