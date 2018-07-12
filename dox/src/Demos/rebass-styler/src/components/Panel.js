import {
  space,
  fontSize,
  color,
  borderRadius,
  borders,
  borderColor
} from "../styles"
import sys from "../sys"
import merge from "../merge"

export const stylesRoot = merge(
  space,
  color,
  borderRadius,
  borders,
  borderColor,
  {
    overflow: "hidden"
  }
)

export const stylesHeaderFooter = merge(
  space,
  fontSize,
  color,
  borderRadius,
  borders,
  borderColor,
  {
    overflow: "hidden"
  }
)

export const Panel = sys("div", stylesRoot, {
  displayName: "NavLink",
  defaultProps: {
    bg: "white",
    borderRadius: 2,
    border: 1,
    borderColor: "gray"
  },
  withProps: {}
})

export const Header = sys("header", stylesHeaderFooter, {
  displayName: "Header",
  defaultProps: {
    fontSize: "2",
    p: "2",
    bg: "white",
    borderBottom: 1,
    borderColor: "gray"
  },
  withProps: {}
})

export const Footer = sys("footer", stylesHeaderFooter, {
  displayName: "Footer",
  defaultProps: {
    fontSize: "1",
    p: "2",
    bg: "white",
    borderTop: 1,
    borderColor: "gray"
  },
  withProps: {}
})

Panel.Header = Header
Panel.Footer = Footer
export default Panel
