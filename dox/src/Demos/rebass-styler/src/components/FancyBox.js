import { boxShadow, borderRadius } from "../styles"
import Box from "./Box"
import sys from "../sys"

export const styles = {
  ...boxShadow,
  ...borderRadius,
  "&:not(:last-child)": { marginBottom: "1.5rem" }
}
export default sys(
  Box,
  styles,

  {
    displayName: "BulmaBox",
    defaultProps: {
      bg: "white",
      borderRadius: "3",
      p: "1.25rem",
      boxShadow:
        "0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1)"
    },
    withProps: {}
  }
)
