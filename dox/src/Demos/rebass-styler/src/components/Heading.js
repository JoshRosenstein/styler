import {
  space,
  fontSize,
  fontWeight,
  lineHeight,
  fontFamily,
  color,
  textAlign
} from "../styles"
import sys from "../sys"
import merge from "../merge"
import { compose, setDisplayName, withProps } from "recompose"

export const styles = merge(
  space,
  fontSize,
  fontWeight,
  lineHeight,
  fontFamily,
  color,
  textAlign
)

const Heading = sys(
  "h2",
  styles,

  {
    displayName: "Heading",
    defaultProps: {
      fontSize: "5",
      fontWeight: "bold",
      lineHeight: 1.25,
      m: "0"
    },
    withProps: {}
  }
)

const enhanceC = is =>
  compose(setDisplayName(`Heading.${is}`), withProps({ is: is }))(Heading)
Heading.h1 = enhanceC("h1")
Heading.h2 = enhanceC("h2")
Heading.h3 = enhanceC("h3")
Heading.h4 = enhanceC("h4")
Heading.h5 = enhanceC("h5")
Heading.h6 = enhanceC("h6")
export default Heading
