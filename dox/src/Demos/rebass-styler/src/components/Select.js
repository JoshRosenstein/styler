import {
  space,
  fontSize,
  lineHeight,
  width,
  color,
  boxShadow,
  borderColor,
  borderRadius,
  borders
} from "../styles"
import sys from "../sys"
import merge from "../merge"

const arrow = encodeURI(
  `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewbox='0 0 32 32' fill='currentcolor'> <path d='M0 6 L32 6 L16 28 z' /> </svg>`
)

export const styles = merge(
  space,
  fontSize,
  lineHeight,
  width,
  color,
  borders,
  boxShadow,
  borderColor,
  borderRadius,
  {
    fontFamily: "inherit",
    fontSize: "inherit",
    lineHeight: "inherit",
    appearance: "none",

    background: `url("${arrow}")`,
    backgroundPosition: "calc(100% - 8px) center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "8px 8px",
    "&:disabled": {
      opacity: 1 / 4
    },
    "&:focus": {
      outline: "none",
      boxShadow: "inset 0 0 0 1px {!theme.colors.blue}"
    }
  }
)

export default sys("select", styles, {
  displayName: "Card",
  defaultProps: {
    m: "0",
    px: "1",
    py: "2",
    width: 1,
    border: "0",
    borderColor: "gray",
    boxShadow: "1",
    borderRadius: "2",
    color: "inherit",
    bg: "transparent"
  },
  withProps: {}
})
