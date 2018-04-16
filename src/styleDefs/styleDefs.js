// inspired by https://github.com/jxnblk/styled-system

import { pxToRem, px, returnAsIs } from '../utils'

const isNumber = n => typeof n === 'number' && !isNaN(n)

export const getters = {
  getWidth: n => (!isNumber(n) || n > 1 ? pxToRem(n) : n * 100 + '%'),
  getBorder: n => (isNumber(n) && n > 0 ? n + 'px solid' : n),
  backgroundImage: (val, rawValue, p) => `url(${rawValue})`,
  flexWrapShim: n => (n === true ? 'wrap' : null),
  flexColumnShim: n => (n === true ? 'column' : null),
  flexInlineShim: n => (n === true ? 'inline-flex' : null),
  ratio: n => n * 100 + '%'
}

export const width = {
  width: returnAsIs,
  w: returnAsIs,
  options: {
    getter: getters.getWidth
  }
}

export const fontSize = {
  fontSize: returnAsIs,
  f: returnAsIs,
  options: {
    getter: px,
    key: 'fontSizes'
  }
}

export const color = {
  color: returnAsIs,
  options: {
    key: 'colors'
  }
}

export const backgroundColor = {
  backgroundColor: returnAsIs,
  bgColor: returnAsIs,
  options: {
    key: 'colors'
  }
}

export const colors = {
  color,
  backgroundColor
}

export const fontFamily = {
  fontFamily: returnAsIs,
  font: returnAsIs,
  options: {
    key: 'fonts'
  }
}

export const textAlign = {
  textAlign: returnAsIs
}

export const lineHeight = {
  lineHeight: returnAsIs,
  options: {
    key: 'lineHeights'
  }
}

export const fontWeight = {
  fontWeight: returnAsIs,
  options: {
    key: 'fontWeights'
  }
}

export const letterSpacing = {
  letterSpacing: returnAsIs,
  options: {
    key: 'letterSpacings',
    getter: px
  }
}

export const display = {
  display: returnAsIs
}

export const maxWidth = {
  maxWidth: returnAsIs,
  options: {
    key: 'maxWidths',
    getter: px
  }
}

export const minWidth = {
  minWidth: returnAsIs,
  options: {
    key: 'minWidths',
    getter: px
  }
}

export const height = {
  height: returnAsIs,
  options: {
    key: 'heights'
  }
}

export const maxHeight = {
  maxHeight: returnAsIs,
  options: {
    key: 'maxHeights',
    getter: px
  }
}
export const minHeight = {
  minHeight: returnAsIs,
  options: {
    key: 'minHeights',
    getter: px
  }
}

export const size_width_c = {
  width: {
    size: returnAsIs,
    options: {
      getter: px
    }
  }
}

export const size_height_c = {
  height: {
    size: returnAsIs,
    options: {
      getter: px
    }
  }
}

export const size_c = {
  ...size_width_c,
  ...size_height_c
}

export const ratio_c = {
  height: 0,
  paddingBottom: {
    ratio: returnAsIs,
    options: {
      getter: n => n * 100 + '%'
    }
  }
}

export const alignItems = {
  alignItems: returnAsIs
}

export const alignContent = {
  alignContent: returnAsIs
}

export const justifyContent = {
  justifyContent: returnAsIs,
  justify: returnAsIs
}

export const flexWrap = {
  flexWrap: returnAsIs,
  wrap: 'wrap',
  nowrap: 'nowrap',
  wrapReverse: 'wrapReverse'
}

export const flexDirection = {
  flexDirection: returnAsIs,
  column: 'column',
  rowReverse: 'rowReverse',
  columnReverse: 'columnReverse'
}

export const flexBasis = {
  flexBasis: returnAsIs,
  options: {
    getter: getters.getWidth
  }
}

export const flex = {
  flex: returnAsIs
}

export const justifySelf = {
  justifySelf: returnAsIs
}

export const alignSelf = {
  alignSelf: returnAsIs
}

export const order = {
  order: returnAsIs
}

export const gridGap = {
  gridGap: returnAsIs,
  gap: returnAsIs,
  options: {
    getter: px,
    key: 'space'
  }
}
export const gridColumnGap = {
  gridColumnGap: returnAsIs,
  options: {
    getter: px,
    key: 'space'
  }
}

export const gridArea = {
  gridArea: returnAsIs
}

export const gridColumnStart = {
  gridColumnStart: returnAsIs
}
export const gridColumnEnd = {
  gridColumnEnd: returnAsIs
}

export const gridRowStart = {
  gridRowStart: returnAsIs
}

export const gridRowEnd = {
  gridRowEnd: returnAsIs
}

export const gridColumn = {
  gridColumn: returnAsIs
}

export const gridRow = {
  gridRow: returnAsIs
}

export const gridAutoFlow = {
  gridAutoFlow: returnAsIs,
  row: 'row',
  column: 'column',
  dense: 'dense'
}

export const gridAutoColumns = {
  gridAutoColumns: returnAsIs,
  autoColumns: returnAsIs
}

export const gridAutoRows = {
  gridAutoRows: returnAsIs,
  autoRows: returnAsIs
}

export const gridTemplate = {
  gridTemplate: returnAsIs,
  template: returnAsIs
}

export const gridTemplateAreas = {
  gridTemplateAreas: returnAsIs,
  areas: returnAsIs
}

export const gridTemplateColumns = {
  gridTemplateColumns: returnAsIs,
  columns: returnAsIs
}
export const gridTemplateRows = {
  gridTemplateRows: returnAsIs,
  rows: returnAsIs
}

export const border = {
  border: returnAsIs,
  bd: returnAsIs,
  options: {
    key: 'borders',
    getter: getters.getBorder
  }
}

export const borderTop = {
  borderTop: returnAsIs,
  bdT: returnAsIs,
  options: {
    key: 'borders',
    getter: getters.getBorder
  }
}

export const borderRight = {
  borderRight: returnAsIs,
  bdR: returnAsIs,
  options: {
    key: 'borders',
    getter: getters.getBorder
  }
}

export const borderBottom = {
  borderBottom: returnAsIs,
  bdB: returnAsIs,
  options: {
    key: 'borders',
    getter: getters.getBorder
  }
}

export const borderLeft = {
  borderLeft: returnAsIs,
  bdL: returnAsIs,
  options: {
    key: 'borders',
    getter: getters.getBorder
  }
}

export const borders_c = {
  border,
  borderLeft,
  borderBottom,
  borderRight,
  borderTop
}

export const borderColor = {
  borderColor: returnAsIs,
  bdC: returnAsIs,
  options: {
    key: 'colors'
  }
}

export const borderRadius = {
  borderRadius: returnAsIs,
  bdRs: returnAsIs,
  options: {
    key: 'radii',
    getter: px
  }
}

export const background = {
  background: returnAsIs,
  bg: returnAsIs
}

export const backgroundImage = {
  backgroundImage: returnAsIs,
  bgImage: returnAsIs,
  options: {
    getter: v => `url(${v})`
  }
}

export const backgroundSize = {
  backgroundSize: returnAsIs,
  bgSize: returnAsIs
}

export const backgroundPosition = {
  backgroundPosition: returnAsIs,
  bgPosition: returnAsIs
}
export const backgroundRepeat = {
  backgroundRepeat: returnAsIs,
  bgRepeat: returnAsIs
}

export const position = {
  position: returnAsIs,
  static: 'static',
  absolute: 'absolute',
  fixed: 'fixed',
  relative: 'relative',
  sticky: 'sticky'
}

export const zIndex = {
  zIndex: returnAsIs
}
export const top = {
  top: returnAsIs,
  options: {
    getter: px
  }
}

export const right = {
  right: returnAsIs,
  options: {
    getter: px
  }
}

export const bottom = {
  bottom: returnAsIs,
  options: {
    getter: px
  }
}

export const left = {
  left: returnAsIs,
  options: {
    getter: px
  }
}

export const boxShadow = {
  boxShadow: returnAsIs,
  bxSh: returnAsIs,
  options: {
    key: 'shadows'
  }
}

export const padding = {
  padding: returnAsIs,
  p: returnAsIs,
  options: {
    key: 'space',
    getter: pxToRem
  }
}
export const paddingLeft = {
  paddingLeft: returnAsIs,
  pl: returnAsIs,
  px: returnAsIs,
  options: {
    key: 'space',
    getter: pxToRem
  }
}
export const paddingRight = {
  paddingRight: returnAsIs,
  pr: returnAsIs,
  px: returnAsIs,
  options: {
    key: 'space',
    getter: pxToRem
  }
}
export const paddingTop = {
  paddingTop: returnAsIs,
  pt: returnAsIs,
  py: returnAsIs,
  options: {
    key: 'space',
    getter: pxToRem
  }
}
export const paddingBottom = {
  paddingBottom: returnAsIs,
  pb: returnAsIs,
  py: returnAsIs,
  options: {
    key: 'space',
    getter: pxToRem
  }
}
export const margin = {
  margin: returnAsIs,
  m: returnAsIs,
  options: {
    key: 'space',
    getter: pxToRem
  }
}
export const marginLeft = {
  marginLeft: returnAsIs,
  ml: returnAsIs,
  mx: returnAsIs,
  options: {
    key: 'space',
    getter: pxToRem
  }
}
export const marginRight = {
  marginRight: returnAsIs,
  mr: returnAsIs,
  mx: returnAsIs,
  options: {
    key: 'space',
    getter: pxToRem
  }
}
export const marginTop = {
  marginTop: returnAsIs,
  mt: returnAsIs,
  my: returnAsIs,
  options: {
    key: 'space',
    getter: pxToRem
  }
}
export const marginBottom = {
  marginBottom: returnAsIs,
  mb: returnAsIs,
  my: returnAsIs,
  options: {
    key: 'space',
    getter: pxToRem
  }
}

export const space = {
  padding,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  margin,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom
}
