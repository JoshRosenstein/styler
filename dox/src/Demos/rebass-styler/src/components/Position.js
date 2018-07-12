import {
  space,
  color,
  position,
  zIndex,
  top,
  right,
  bottom,
  left
} from "../styles"
import sys from "../sys"
import merge from "../merge"

export const styles = merge(
  position,
  space,
  color,
  zIndex,
  top,
  right,
  bottom,
  left
)

export const Position = sys("div", styles, {
  displayName: "Position",
  defaultProps: {},
  withProps: {}
})

export const Relative = sys(
  Position,
  {},
  {
    displayName: "Relative",
    defaultProps: { position: "relative" },
    withProps: {}
  }
)

export const Absolute = sys(
  Position,
  {},
  {
    displayName: "Absolute",
    defaultProps: { position: "absolute" },
    withProps: {}
  }
)

export const Fixed = sys(
  Position,
  {},
  {
    displayName: "Fixed",
    defaultProps: { position: "fixed" },
    withProps: {}
  }
)

export const Sticky = sys(
  Position,
  {},
  {
    displayName: "Sticky",
    defaultProps: { position: "sticky" },
    withProps: {}
  }
)

export default Position
