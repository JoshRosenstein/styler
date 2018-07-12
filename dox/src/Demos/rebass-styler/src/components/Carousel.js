import sys from "../sys"
import Flex from "./Flex"

export const styles = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  "& > div": {
    flex: "none",
    width: "100%"
  },

  "& > div:first-child": {
    marginLeft: {
      index: v => v * -100 + "%"
    },
    transitionProperty: "margin",
    transitionDuration: ".2s",
    transitionTimingFunction: "ease-out"
  }
}

export default sys(Flex, styles, {
  displayName: "Carousel",
  defaultProps: {
    width: 1
  },
  withProps: {}
})
