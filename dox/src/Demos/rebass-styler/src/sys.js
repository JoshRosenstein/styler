import styled from "react-emotion"
import theme from "./theme"
import { styler } from "@roseys/styler"
import {
  withProps as WP,
  defaultProps as DP,
  compose,
  setDisplayName,
  setPropTypes
} from "recompose"
import Tag from "./Tag"
import { when, complement, isNilOrEmpty, always } from "@roseys/futils"
const isNotNilOrEmpty = complement(isNilOrEmpty)
const executeWhenDefined = (x, fn) => when(isNotNilOrEmpty(x), fn)
export const isProduction = process.env.NODE_ENV === "production"

const componentStyleReset = ({ theme }) => {
  return {
    boxSizing: "border-box",
    color: theme.color,
    fontFamily: theme.fontFamily
      ? `${theme.fontFamily}, ${theme.fontFamily_system}`
      : `${theme.fontFamily_system}`,
    fontSize: theme.fontSize_base,
    lineHeight: theme.lineHeight,
    outline: 0,
    "& *,& *::before,& *::after": {
      boxSizing: "inherit"
    }
  }
}
const callIfDefined = (obj, fn) => when(always(isNotNilOrEmpty(obj)), fn(obj))
export default function createStyledComponent(
  element,
  styles,
  {
    displayName = "",
    filterProps = [],
    forwardProps = [],
    rootEl,
    withProps = {},
    propTypes,
    defaultProps,
    includeStyleReset = false
  }
) {
  const outStyles = (props, context) => {
    let componentStyles = styler({
      options: { defaultLookup: false, defaultTransform: false },
      ...styles
    })(props)

    if (Array.isArray(componentStyles)) {
      componentStyles.unshift(componentStyleReset(props))
    } else {
      componentStyles = {
        ...(includeStyleReset ? componentStyleReset(props) : undefined),
        ...componentStyles
      }
    }

    return componentStyles
  }

  const tag = typeof element === "string" ? element : rootEl

  const is_ = typeof element === "string" ? { is: element } : {}
  defaultProps = defaultProps
    ? { theme, ...is_, ...defaultProps }
    : { ...is_, theme }
  const enhance = compose(
    callIfDefined(displayName, setDisplayName),
    callIfDefined(defaultProps, DP),
    callIfDefined(propTypes, setPropTypes),
    callIfDefined(withProps, WP)
  )

  let styledComponent
  if (typeof element !== "string") {
    styledComponent = styled(element, {
      ...(!isProduction && displayName
        ? { label: `${displayName}` }
        : undefined),
      shouldForwardProp: name => name !== "ref" && name !== "theme"
    })(outStyles)
  } else {
    styledComponent = styled(Tag, {
      ...(!isProduction && displayName
        ? { label: `${displayName}` }
        : undefined),
      shouldForwardProp: name => name !== "ref" && name !== "theme"
    })(outStyles)
  }
  return enhance(styledComponent)
}
