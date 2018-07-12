import sys from "../sys"
import { color } from "../styles"

export const styles = {
  ...color,
  display: "inline-block",
  position: "relative",
  color: "inherit",
  backgroundColor: "transparent",
  "&::before": {
    display: "none",
    content: `"{!text}"`,
    position: "absolute",
    bottom: "100%",
    left: "50%",
    transform: "translate(-50%, -4px)",
    whiteSpace: "nowrap",
    fontSize: "{!fontSizes.0}",
    paddingTop: "4px",
    paddingBottom: "4px",
    paddingLeft: "8px",
    paddingRight: "8px",
    ...color,
    borderRadius: "{!theme.radii.1}px"
  },
  "&::after": {
    display: "none",
    position: "absolute",
    bottom: "100%",
    left: "50%",
    transform: "translate(-50%, 8px)",
    content: '" "',
    borderWidth: "6px",
    borderStyle: "solid",
    borderColor: "transparent",
    borderTopColor: {
      bg: "self",
      options: { key: "colors" }
    }
  },
  "&:hover": {
    "&::before, &::after": {
      display: "block"
    }
  }
}

export default sys("div", styles, {
  displayName: "Tooltip",
  defaultProps: {
    color: "white",
    bg: "black"
  },
  withProps: {}
})
