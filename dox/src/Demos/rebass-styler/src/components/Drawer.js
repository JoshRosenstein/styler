import Box from "./Box"
import { position, zIndex, height } from "../styles"
import sys from "../sys"

export const styles = {
  ...position,
  ...zIndex,
  ...height,
  options: { cx: ["side"] },
  transform: {
    open: "none",
    sideBottom: "translateY(100%)",
    sideTop: "translateY(-100%)",
    sideleft: "translateX(-100%)",
    sideRight: "translateX(100%)",
    default: "translateX(-100%)"
  },

  bottom: {
    sideLeft: 0,
    sideRight: 0,
    sideBottom: 0
  },
  top: {
    sideRight: 0,
    sideTop: 0,
    sideLeft: 0
  },
  left: {
    sideLeft: 0,
    sideTop: 0,
    sideBottom: 0
  },
  right: {
    sideRight: 0,
    sideTop: 0,
    sideBottom: 0
  },
  overflowX: "hidden",
  overflowY: "auto",
  transitionProperty: "transform",
  transitionDuration: ".2s",
  transitionTimingFunction: "ease-out"
}

export default sys(Box, styles, {
  displayName: "Drawer",
  defaultProps: {
    blacklist: ["side", "open"],
    position: "fixed",
    color: "white",
    bg: "black",
    open: false,
    side: "bottom",
    width: 320,
    zIndex: "99"
  },
  withProps: {}
})
