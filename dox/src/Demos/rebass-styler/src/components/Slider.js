import { space, width, color, borderRadius } from "../styles"
import sys from "../sys"
import merge from "../merge"

export const styles = merge(space, width, color, borderRadius, {
  display: "block",
  height: "4px",
  cursor: "pointer",
  appearance: "none",
  "&::-webkit-slider-thumb": {
    width: "16px",
    height: "16px",
    backgroundColor: "currentcolor",
    border: 0,
    borderRadius: "99999px",
    appearance: "none"
  }
})

export default sys("input", styles, {
  displayName: "Slider",
  defaultProps: {
    type: "range",
    width: 1,
    mx: "0",
    my: "2",
    color: "inherit",
    bg: "gray",
    borderRadius: 99999
  },
  withProps: {}
})
