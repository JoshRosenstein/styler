import React from "react"
import cleanPropsByTag from "@roseys/clean-props-by-tag"
import { omit } from "@roseys/futils"

const createTag = (options = {}) => {
  const {
    defaultProps = {
      is: "div",
      blacklist: { dummy: 1 }
    },
    displayName = `Cleaned`
  } = options

  const Component = p => {
    let { innerRef, is, blacklist, theme, ...props } = p

    return React.createElement(is, {
      ref: innerRef,
      ...omit(blacklist, cleanPropsByTag(is, props))
    })
  }

  Component.displayName = displayName

  Component.styledComponentId = "lol"
  Component.defaultProps = defaultProps
  return Component
}

export default createTag()
