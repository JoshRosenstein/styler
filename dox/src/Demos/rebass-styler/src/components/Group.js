import sys from "../sys"
import Flex from "./Flex"

export const styles = {
  "& > *": {
    borderRadius: 0
  },
  "& > *:first-child": {
    borderRadius: "{!theme.radii.2}px 0 0 {!theme.radii.2}px"
  },
  "& > *:last-child": {
    borderRadius: "0 {!theme.radii.2}px {!theme.radii.2}px 0"
  }
}

export default sys(Flex, styles, {
  displayName: "Group",
  defaultProps: {},
  withProps: {}
})
