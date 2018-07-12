import { color, space, borderRadius, width } from "../styles"
import sys from "../sys"
import merge from "../merge"

const styles = merge(color, space, borderRadius, width, {
  boxSizing: "border-box",
  diplay: "block",
  height: "4px",
  overflow: "hidden",
  appearance: "none",
  "&::-webkit-progress-bar": {
    background: "{!theme.colors.gray}"
  },
  "&::-webkit-progress-value ": {
    background: "{!theme.colors.blue}"
  },
  "&::mozProgressBar": {
    backgroundColor: "{!theme.colors.blue}"
  }
})
export default sys(
  "progress",
  styles,

  {
    displayName: "Progress",
    defaultProps: {
      type: "radio",
      width: 1,
      m: "0",
      px: "0",
      color: "blue",
      bg: "gray",
      borderRadius: "2"
    },
    withProps: {}
  }
)
