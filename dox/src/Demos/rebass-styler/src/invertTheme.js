import { invertLuminance } from "./colors"
import defaultTheme from "./theme"

export default (theme = defaultTheme) => {
  const { colors = {}, ...rest } = theme
  const next = Object.keys(colors).reduce((a, key) => {
    a[key] = invertLuminance(colors[key])
    return a
  }, {})

  return {
    ...rest,
    colors: next
  }
}
