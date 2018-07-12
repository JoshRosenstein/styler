import { pxToRem } from "@roseys/styler"
import { is } from "@roseys/futils"
import { styler } from "@roseys/styler"
const getters = {
  getWidth: n => (!is("Number", n) || n > 1 ? pxToRem(n) : n * 100 + "%"),
  getBorder: n => (is("Number", n) && n > 0 ? n + "px solid" : n),
  backgroundImage: (val, rawValue, p) => `url(${rawValue})`,
  ratio: n => n * 100 + "%"
}

export const hoverFn = styles => ({ hover, theme }) =>
  hover ? styler({ ":hover": styles })({ ...hover, theme }) : {}

export const focusFn = styles => ({ focus, theme }) =>
  focus ? styler({ ":focus": styles })({ ...focus, theme }) : {}

export const activeFn = styles => ({ active, theme }) =>
  active ? styler({ ":active": styles })({ ...active, theme }) : {}

export const disabledFn = styles => ({ disabledStyle, theme }) =>
  disabledStyle
    ? styler({ ":disabled": styles })({ ...disabledStyle, theme })
    : {}

export const width = {
  width: {
    width: "returnAsIs",
    w: "returnAsIs",
    options: {
      postFn: getters.getWidth
    }
  }
}

export const fontSize = {
  fontSize: {
    fontSize: "returnAsIs",
    f: "returnAsIs",
    options: {
      postFn: "px",
      path: "theme.fontSizes"
    }
  }
}

export const textColor = {
  color: {
    color: "returnAsIs",
    options: {
      path: "theme.colors"
    }
  }
}

export const bgColor = {
  backgroundColor: {
    bg: "returnAsIs",
    backgroundColor: "returnAsIs",
    bgColor: "returnAsIs",
    options: {
      path: "theme.colors"
    }
  }
}

export const color = {
  ...textColor,
  ...bgColor
}

export const fontFamily = {
  fontFamily: {
    fontFamily: "returnAsIs",
    font: "returnAsIs",
    options: {
      path: "theme.fonts"
    }
  }
}

export const textAlign = {
  textAlign: {
    textAlign: "returnAsIs",
    align: "returnAsIs"
  }
}

export const lineHeight = {
  lineHeight: {
    lineHeight: "returnAsIs",
    options: {
      path: "theme.lineHeights"
    }
  }
}

export const fontWeight = {
  fontWeight: {
    fontWeight: "returnAsIs",
    options: {
      path: "theme.fontWeights"
    }
  }
}

export const letterSpacing = {
  letterSpacing: {
    letterSpacing: "returnAsIs",
    options: {
      path: "theme.letterSpacings",
      postFn: "px"
    }
  }
}

export const display = {
  display: {
    display: "returnAsIs"
  }
}

export const maxWidth = {
  maxWidth: {
    maxWidth: "returnAsIs",
    options: {
      path: "theme.maxWidths",
      postFn: "px"
    }
  }
}

export const minWidth = {
  minWidth: {
    minWidth: "returnAsIs",
    options: {
      path: "theme.minWidths",
      postFn: "px"
    }
  }
}

export const height = {
  height: {
    height: "returnAsIs",
    options: {
      path: "theme.heights",
      postFn: "px"
    }
  }
}

export const maxHeight = {
  maxHeight: {
    maxHeight: "returnAsIs",
    options: {
      path: "theme.maxHeights",
      postFn: "px"
    }
  }
}

export const minHeight = {
  minHeight: {
    minHeight: "returnAsIs",
    options: {
      path: "theme.minHeights",
      postFn: "px"
    }
  }
}

export const sizeWidth = {
  width: {
    size: "returnAsIs",
    options: {
      postFn: "px"
    }
  }
}

export const sizeHeight = {
  height: {
    size: "returnAsIs",
    options: {
      postFn: "px"
    }
  }
}

export const size = {
  ...sizeWidth,
  ...sizeHeight
}

export const ratioPadding = {
  paddingBottom: {
    ratio: n => n * 100 + "%",
    paddingBottom: "returnAsIs",
    pb: "returnAsIs",
    py: "returnAsIs",
    options: {
      path: "theme.space",
      postFn: "px"
    }
  }
}

export const ratio = {
  height: {
    ratio: 0
  },
  ...ratioPadding
}

export const alignItems = {
  alignItems: {
    alignItems: "returnAsIs",
    align: "returnAsIs"
  }
}

export const alignContent = {
  alignContent: {
    alignContent: "returnAsIs"
  }
}

export const justifyContent = {
  justifyContent: {
    justifyContent: "returnAsIs",
    justify: "returnAsIs"
  }
}

export const flexWrap = {
  flexWrap: {
    flexWrap: "returnAsIs",
    wrap: "wrap",
    nowrap: "nowrap",
    wrapReverse: "wrapReverse"
  }
}

export const flexBasis = {
  flexBasis: {
    flexBasis: "returnAsIs",
    options: {
      postFn: getters.getWidth
    }
  }
}

export const flexDirection = {
  flexDirection: {
    flexDirection: "returnAsIs"
  }
}

export const flex = {
  flex: {
    flex: "returnAsIs"
  }
}

export const justifySelf = {
  justifySelf: {
    justifySelf: "returnAsIs"
  }
}

export const alignSelf = {
  alignSelf: {
    alignSelf: "returnAsIs"
  }
}

export const order = {
  order: {
    order: "returnAsIs"
  }
}

export const gridGap = {
  gridGap: {
    gridGap: "returnAsIs",
    gap: "returnAsIs",
    options: {
      postFn: "px",
      path: "theme.space"
    }
  }
}
export const gridColumnGap = {
  gridColumnGap: {
    gridColumnGap: "returnAsIs",
    options: {
      postFn: "px",
      path: "theme.space"
    }
  }
}

export const gridRowGap = {
  gridRowGap: {
    gridRowGap: "returnAsIs",
    options: {
      postFn: "px",
      path: "theme.space"
    }
  }
}

export const gridColumn = {
  gridColumn: {
    gridColumn: "returnAsIs"
  }
}
export const gridRow = {
  gridRow: {
    gridRow: "returnAsIs"
  }
}

export const gridAutoFlow = {
  gridAutoFlow: {
    gridAutoFlow: "returnAsIs"
  }
}
export const gridAutoColumns = {
  gridAutoColumns: {
    gridAutoColumns: "returnAsIs"
  }
}

export const gridAutoRows = {
  gridAutoRows: {
    gridAutoRows: "returnAsIs"
  }
}

export const gridTemplateColumns = {
  gridTemplateColumns: {
    gridTemplateColumns: "returnAsIs"
  }
}

export const gridTemplateRows = {
  gridTemplateRows: {
    gridTemplateRows: "returnAsIs"
  }
}

export const border = {
  border: {
    border: "returnAsIs",

    options: {
      path: "theme.borders",
      postFn: getters.getBorder
    }
  }
}

export const borderTop = {
  borderTop: {
    borderTop: "returnAsIs",

    options: {
      path: "theme.borders",
      postFn: getters.getBorder
    }
  }
}

export const borderRight = {
  borderRight: {
    borderRight: "returnAsIs",

    options: {
      path: "theme.borders",
      postFn: getters.getBorder
    }
  }
}

export const borderBottom = {
  borderBottom: {
    borderBottom: "returnAsIs",

    options: {
      path: "theme.borders",
      postFn: getters.getBorder
    }
  }
}

export const borderLeft = {
  borderLeft: {
    borderLeft: "returnAsIs",
    options: {
      path: "theme.borders",
      postFn: getters.getBorder
    }
  }
}

export const borders = {
  ...border,
  ...borderTop,
  ...borderRight,
  ...borderBottom,
  ...borderLeft
}

export const borderColor = {
  borderColor: {
    borderColor: "returnAsIs",
    bdC: "returnAsIs",
    options: {
      path: "theme.colors"
    }
  }
}

export const borderRadius = {
  borderRadius: {
    borderRadius: "returnAsIs",
    bdRs: "returnAsIs",
    options: {
      path: "theme.radii",
      postFn: "px"
    }
  }
}

export const background = {
  background: "returnAsIs",
  bg: "returnAsIs"
}

export const backgroundImage = {
  backgroundImage: {
    backgroundImage: "returnAsIs",
    bgImage: "returnAsIs",
    options: {
      postFn: v => `url(${v})`
    }
  }
}

export const backgroundSize = {
  backgroundSize: {
    backgroundSize: "returnAsIs",
    bgSize: "returnAsIs"
  }
}

export const backgroundPosition = {
  backgroundPosition: {
    backgroundPosition: "returnAsIs",
    bgPosition: "returnAsIs"
  }
}
export const backgroundRepeat = {
  backgroundRepeat: "returnAsIs",
  bgRepeat: "returnAsIs"
}

export const position = {
  position: {
    position: "returnAsIs"
  }
}

export const zIndex = {
  zIndex: {
    zIndex: "returnAsIs"
  }
}
export const top = {
  top: {
    top: "returnAsIs",
    options: {
      getter: "px"
    }
  }
}

export const right = {
  right: {
    right: "returnAsIs",
    options: {
      getter: "px"
    }
  }
}

export const bottom = {
  bottom: {
    bottom: "returnAsIs",
    options: {
      getter: "px"
    }
  }
}

export const left = {
  left: {
    left: "returnAsIs",
    options: {
      getter: "px"
    }
  }
}

export const boxShadow = {
  boxShadow: {
    boxShadow: "returnAsIs",
    options: {
      path: "theme.shadows"
    }
  }
}

export const padding = {
  padding: {
    padding: "returnAsIs",
    p: "returnAsIs",
    options: {
      path: "theme.space",
      postFn: "px"
    }
  }
}
export const paddingLeft = {
  paddingLeft: {
    paddingLeft: "returnAsIs",
    pl: "returnAsIs",
    px: "returnAsIs",
    options: {
      path: "theme.space",
      postFn: "px"
    }
  }
}
export const paddingRight = {
  paddingRight: {
    paddingRight: "returnAsIs",
    pr: "returnAsIs",
    px: "returnAsIs",
    options: {
      path: "theme.space",
      postFn: "px"
    }
  }
}
export const paddingTop = {
  paddingTop: {
    paddingTop: "returnAsIs",
    pt: "returnAsIs",
    py: "returnAsIs",
    options: {
      path: "theme.space",
      postFn: "px"
    }
  }
}
export const paddingBottom = {
  paddingBottom: {
    paddingBottom: "returnAsIs",
    pb: "returnAsIs",
    py: "returnAsIs",
    options: {
      path: "theme.space",
      postFn: "px"
    }
  }
}
export const margin = {
  margin: {
    margin: "returnAsIs",
    m: "returnAsIs",
    options: {
      path: "theme.space",
      postFn: "px"
    }
  }
}
export const marginLeft = {
  marginLeft: {
    marginLeft: "returnAsIs",
    ml: "returnAsIs",
    mx: "returnAsIs",
    options: {
      path: "theme.space",
      postFn: "px"
    }
  }
}
export const marginRight = {
  marginRight: {
    marginRight: "returnAsIs",
    mr: "returnAsIs",
    mx: "returnAsIs",
    options: {
      path: "theme.space",
      postFn: "px"
    }
  }
}
export const marginTop = {
  marginTop: {
    marginTop: "returnAsIs",
    mt: "returnAsIs",
    my: "returnAsIs",
    options: {
      path: "theme.space",
      postFn: "px"
    }
  }
}
export const marginBottom = {
  marginBottom: {
    marginBottom: "returnAsIs",
    mb: "returnAsIs",
    my: "returnAsIs",

    options: {
      path: "theme.space",
      postFn: "px"
    }
  }
}

export const space = {
  ...margin,
  ...marginLeft,
  ...marginBottom,
  ...marginRight,
  ...marginTop,
  ...padding,
  ...paddingLeft,
  ...paddingRight,
  ...paddingBottom,
  ...paddingTop
}

export const hover = {
  "&         ": hoverFn({ ...color, ...borderColor, ...boxShadow })
}
export const active = {
  "&          ": activeFn({ ...color, ...borderColor, ...boxShadow })
}
export const focus = {
  "&           ": focusFn({ ...color, ...borderColor, ...boxShadow })
}

export const disabled = {
  "&            ": disabledFn({ ...color, ...borderColor, ...boxShadow })
}
// export const gridArea = {
//   gridArea: 'returnAsIs'
// }

// export const gridColumnStart = {
//   gridColumnStart: 'returnAsIs'
// }
// export const gridColumnEnd = {
//   gridColumnEnd: 'returnAsIs'
// }

// export const gridRowStart = {
//   gridRowStart: 'returnAsIs'
// }

// export const gridRowEnd = {
//   gridRowEnd: 'returnAsIs'
// }

// export const gridColumn = {
//   gridColumn: 'returnAsIs'
// }

// export const gridRow = {
//   gridRow: 'returnAsIs'
// }

// export const gridAutoFlow = {
//   gridAutoFlow: 'returnAsIs',
//   row: 'row',
//   column: 'column',
//   dense: 'dense'
// }

// export const gridAutoColumns = {
//   gridAutoColumns: 'returnAsIs',
//   autoColumns: 'returnAsIs'
// }

// export const gridAutoRows = {
//   gridAutoRows: 'returnAsIs',
//   autoRows: 'returnAsIs'
// }

// export const gridTemplate = {
//   gridTemplate: 'returnAsIs',
//   template: 'returnAsIs'
// }

// export const gridTemplateAreas = {
//   gridTemplateAreas: 'returnAsIs',
//   areas: 'returnAsIs'
// }

// export const gridTemplateColumns = {
//   gridTemplateColumns: 'returnAsIs',
//   columns: 'returnAsIs'
// }
// export const gridTemplateRows = {
//   gridTemplateRows: 'returnAsIs',
//   rows: 'returnAsIs'
// }
