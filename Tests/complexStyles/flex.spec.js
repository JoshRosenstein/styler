/**
 * @jest-environment node
 */

import * as R from 'ramda'
import { negate, pipe } from 'ramda'
import stylerWithTheme from '../utils/stylerWithTheme'
import {
  spaceProp,
  styler,
  returnAsIs,
  pxToRem,
  px,
  minWidth,
  width,
  maxWidth,
  minHeight,
  height,
  maxHeight,
  justifyContent,
  alignContent,
  justifyItems,
  alignItems,
  order,
  zIndex,
  flex,
  alignSelf
} from '../../src'

const positionDefs = {
  position: {
    position: returnAsIs,
    relative: 'relative',
    absolute: 'absolute',
    fixed: 'fixed',
    sticky: 'sticky'
  },
  bottom: {
    bottom: returnAsIs,
    options: {
      getter: px
    }
  },
  left: {
    left: returnAsIs,
    options: {
      getter: px
    }
  },
  right: {
    right: returnAsIs,
    options: {
      getter: px
    }
  },
  top: {
    top: returnAsIs,
    options: {
      getter: px
    }
  }
}

const overflow = {
  overflow: returnAsIs
}

const overflowX = {
  overflowX: returnAsIs
}
const overflowY = {
  overflowY: returnAsIs
}

const overflowDefs = {
  overflow,
  overflowX,
  overflowY
}

const sizingDefs = {
  minWidth,
  width,
  maxWidth,
  minHeight,
  height: {
    height: 'returnAsIs',
    options: {
      key: 'heights',
      getter: 'pxToRem'
    }
  },
  maxHeight
}

const flexGapInner = {
  boxSizing: ({ gapType }) => gapType === 'padding' && 'border-box',
  paddingTop: {
    gap: (v, { gapType }) => gapType === 'padding' && v,
    rowGap: (v, { gapType }) => gapType === 'padding' && v,

    options: { getter: 'pxToRem' }
  },
  paddingLeft: {
    gap: (v, { gapType }) => gapType === 'padding' && v,
    columnGap: (v, { gapType }) => gapType === 'padding' && v,
    options: { getter: 'pxToRem' }
  },
  marginTop: {
    gap: (v, { gapType }) => gapType !== 'padding' && v,
    rowGap: (v, { gapType }) => gapType !== 'padding' && v,
    options: { getter: 'pxToRem' }
  },
  marginLeft: {
    gap: (v, { gapType }) => gapType !== 'padding' && v,
    columnGap: (v, { gapType }) => gapType !== 'padding' && v,
    options: { getter: 'pxToRem' }
  }
}

const flexGap = {
  marginTop: {
    gap: 'returnAsIs',
    rowGap: 'returnAsIs',
    options: { getter: pxToRem }
  },
  marginLeft: {
    gap: 'returnAsIs',
    columnGap: 'returnAsIs',
    options: { getter: pipe(negate, pxToRem) }
  }
}

const isBool = R.is(Boolean)
const isTruthy = R.either(Boolean, R.equals(0))
const isTrueBool = R.both(isBool, isTruthy)

const equalsColumn = R.contains(R.__, ['column', 'column-reverse'])

const isFlexCol = R.either(
  R.pipe(
    R.props(['direction', 'flexDirection', 'fxdirection']),
    R.any(equalsColumn)
  ),
  R.pipe(R.props(['column', 'columnReverse']), R.any(isTrueBool))
)

const flexGapInnerCSSProp = R.ifElse(
  R.propEq('gapType', 'padding'),
  R.always(['paddingTop', 'paddingLeft']),
  R.always(['marginTop', 'marginLeft'])
)

const spacing = {
  mobileSm: 'sm',
  mobileMd: 'md'
}

const flexGapStyles = {
  marginTop: {
    gap: 'returnAsIs',
    rowGap: 'returnAsIs',
    options: { getter: R.pipe(R.negate, pxToRem) }
  },
  marginLeft: {
    gap: 'returnAsIs',
    columnGap: 'returnAsIs',
    options: { getter: R.pipe(R.negate, pxToRem) }
  },
  '': spaceProp(['marginTop', 'marginLeft'], R.pipe(R.negate, pxToRem)),
  '>* ': {
    boxSizing: ({ gapType }) => gapType === 'padding' && 'border-box',
    paddingTop: {
      gap: (v, { gapType }) => gapType === 'padding' && v,
      rowGap: (v, { gapType }) => gapType === 'padding' && v,

      options: { getter: pxToRem }
    },
    paddingLeft: {
      gap: (v, { gapType }) => gapType === 'padding' && v,
      columnGap: (v, { gapType }) => gapType === 'padding' && v,
      options: { getter: 'pxToRem' }
    },
    marginTop: {
      gap: (v, { gapType }) => gapType !== 'padding' && v,
      rowGap: (v, { gapType }) => gapType !== 'padding' && v,
      options: { getter: pxToRem }
    },
    marginLeft: {
      gap: (v, { gapType }) => gapType !== 'padding' && v,
      columnGap: (v, { gapType }) => gapType !== 'padding' && v,
      options: { getter: pxToRem }
    },
    '': spaceProp(flexGapInnerCSSProp, 'pxToRem')
  }
}
const flexGappInnerStyles = {
  '>*': {
    boxSizing: ({ gapType }) => gapType === 'padding' && 'border-box',
    paddingTop: {
      gap: (v, { gapType }) => gapType === 'padding' && v,
      rowGap: (v, { gapType }) => gapType === 'padding' && v,
      options: { getter: 'pxToRem' }
    },
    paddingLeft: {
      gap: (v, { gapType }) => gapType === 'padding' && v,
      columnGap: (v, { gapType }) => gapType === 'padding' && v,
      options: { getter: 'pxToRem' }
    },
    marginTop: {
      gap: (v, { gapType }) => gapType !== 'padding' && v,
      rowGap: (v, { gapType }) => gapType !== 'padding' && v,
      options: { getter: 'pxToRem' }
    },
    marginLeft: {
      gap: (v, { gapType }) => gapType !== 'padding' && v,
      columnGap: (v, { gapType }) => gapType !== 'padding' && v,
      options: { getter: 'pxToRem' }
    }
  }
}
const flexContainerStyles = {
  display: {
    display: 'returnAsIs',
    inline: 'inline-block'
  },
  ...sizingDefs,
  ...overflowDefs,
  '>:first-child': {
    minWidth: 'inherit',
    width: 'inherit',
    maxWidth: 'inherit',
    minHeight: 'inherit',
    height: 'inherit',
    maxHeight: 'inherit',
    display: {
      display: 'returnAsIs',
      inline: 'inline-flex',
      fxInline: 'inline-flex',
      default: 'flex'
    },
    flexDirection: {
      flexDirection: 'returnAsIs',
      direction: 'returnAsIs',
      fxdirection: 'returnAsIs',
      row: 'row',
      column: 'column',
      rowReverse: 'row-reverse',
      columnReverse: 'column-reverse'
    },
    flexWrap: {
      flexWrap: 'returnAsIs',
      fxWrap: 'returnAsIs',
      wrap: 'wrap',
      nowrap: 'nowrap',
      wrapReverse: 'wrapReverse'
    },
    flexFlow: {
      flexFlow: 'returnAsIs',
      fxFlow: 'returnAsIs',
      flow: 'returnAsIs'
    },
    alignContent,
    /// FlexGap
    marginTop: {
      gap: 'returnAsIs',
      rowGap: 'returnAsIs',
      options: { getter: R.pipe(R.negate, pxToRem) }
    },
    marginLeft: {
      gap: 'returnAsIs',
      columnGap: 'returnAsIs',
      options: { getter: R.pipe(R.negate, pxToRem) }
    },
    ' ': spaceProp(['marginTop', 'marginLeft'], R.pipe(R.negate, pxToRem)),
    '>* ': {
      boxSizing: ({ gapType }) => gapType === 'padding' && 'border-box',
      paddingTop: {
        gap: (v, { gapType }) => gapType === 'padding' && v,
        rowGap: (v, { gapType }) => gapType === 'padding' && v,

        options: { getter: pxToRem }
      },
      paddingLeft: {
        gap: (v, { gapType }) => gapType === 'padding' && v,
        columnGap: (v, { gapType }) => gapType === 'padding' && v,
        options: { getter: 'pxToRem' }
      },
      marginTop: {
        gap: (v, { gapType }) => gapType !== 'padding' && v,
        rowGap: (v, { gapType }) => gapType !== 'padding' && v,
        options: { getter: pxToRem }
      },
      marginLeft: {
        gap: (v, { gapType }) => gapType !== 'padding' && v,
        columnGap: (v, { gapType }) => gapType !== 'padding' && v,
        options: { getter: pxToRem }
      },
      ' ': spaceProp(flexGapInnerCSSProp, 'pxToRem')
    },
    ///
    alignItems: {
      alignItems: returnAsIs,
      center: (v, p) => isFlexCol(p) && 'center',
      middle: (v, p) => !isFlexCol(p) && 'center',
      top: (v, p) => !isFlexCol(p) && 'flex-start',
      right: (v, p) => isFlexCol(p) && 'flex-end',
      bottom: (v, p) => !isFlexCol(p) && 'flex-end',
      left: (v, p) => isFlexCol(p) && 'flex-start'
    },
    justifyContent: {
      justifyContent: returnAsIs,
      center: (v, p) => !isFlexCol(p) && 'center',
      middle: (v, p) => isFlexCol(p) && 'center',
      top: (v, p) => isFlexCol(p) && 'flex-start',
      right: (v, p) => !isFlexCol(p) && 'flex-end',
      bottom: (v, p) => isFlexCol(p) && 'flex-end',
      left: (v, p) => !isFlexCol(p) && 'flex-start'
    }
  }
}

const DEFAULTS = {
  '>:first-child': {
    display: 'flex',
    height: 'inherit',
    maxHeight: 'inherit',
    maxWidth: 'inherit',
    minHeight: 'inherit',
    minWidth: 'inherit',
    width: 'inherit'
  }
}

const WithDefaults = R.mergeDeepLeft(DEFAULTS)
describe('FlexContainer', () => {
  const FlexContainer = stylerWithTheme(flexContainerStyles)
  describe('with static features', () => {
    it('should add correct styles for default', () => {
      const a = FlexContainer({})

      expect(a).toEqual(DEFAULTS)
    })
    it('should add correct styles for gapType="padding" usage', () => {
      const a = FlexContainer({ gapType: 'padding' })
      expect(a).toEqual(
        WithDefaults({ '>:first-child >*': { boxSizing: 'border-box' } })
      )
    })
    it('should add correct styles for {wrap middle} usage', () => {
      const a = FlexContainer({ wrap: true, middle: true })
      expect(a).toEqual({
        '>:first-child': {
          alignItems: 'center',
          display: 'flex',
          flexWrap: 'wrap',
          height: 'inherit',
          maxHeight: 'inherit',
          maxWidth: 'inherit',
          minHeight: 'inherit',
          minWidth: 'inherit',
          width: 'inherit'
        }
      })
    })
    it('should add correct styles for <Flex wrap gapType="padding" gap={spacing}> ', () => {
      const a = FlexContainer({ wrap: true, gapType: 'padding', gap: spacing })
      expect(a).toEqual({
        '>:first-child': {
          '@media screen and (min-width:mobileMd)': {
            marginLeft: '-1rem',
            marginTop: '-1rem'
          },
          '@media screen and (min-width:mobileSm)': {
            marginLeft: '-0.5rem',
            marginTop: '-0.5rem'
          },
          display: 'flex',
          flexWrap: 'wrap',
          height: 'inherit',
          maxHeight: 'inherit',
          maxWidth: 'inherit',
          minHeight: 'inherit',
          minWidth: 'inherit',
          width: 'inherit'
        },
        '>:first-child >*': {
          '@media screen and (min-width:mobileMd)': {
            paddingLeft: '1rem',
            paddingTop: '1rem'
          },
          '@media screen and (min-width:mobileSm)': {
            paddingLeft: '0.5rem',
            paddingTop: '0.5rem'
          },
          boxSizing: 'border-box'
        }
      })
    })
    it('should add correct styles for  <Flex column middle right height={200}>', () => {
      const a = FlexContainer({
        column: true,
        middle: true,
        right: true,
        height: 200
      })
      expect(a).toEqual({
        '>:first-child': {
          alignItems: 'flex-end',
          display: 'flex',
          flexDirection: 'column',
          height: 'inherit',
          justifyContent: 'center',
          maxHeight: 'inherit',
          maxWidth: 'inherit',
          minHeight: 'inherit',
          minWidth: 'inherit',
          width: 'inherit'
        },
        height: '12.5rem'
      })
    })

    describe('flexGapInner', () => {
      it('should add correct styles for gap="sm" gapType:"padding" usage', () => {
        const a = stylerWithTheme(flexGapInner)({
          gap: 'sm',
          gapType: 'padding'
        })
        expect(a).toEqual({
          boxSizing: 'border-box',
          paddingLeft: '0.5rem',
          paddingTop: '0.5rem'
        })
      })
      it('should add correct styles for gap=spacing gapType:"padding"  usage', () => {
        const a = stylerWithTheme(flexGapStyles)({
          gap: spacing,
          gapType: 'padding'
        })
        expect(a).toEqual({
          '>*': {
            '@media screen and (min-width:mobileMd)': {
              paddingLeft: '1rem',
              paddingTop: '1rem'
            },
            '@media screen and (min-width:mobileSm)': {
              paddingLeft: '0.5rem',
              paddingTop: '0.5rem'
            },
            boxSizing: 'border-box'
          },
          '@media screen and (min-width:mobileMd)': {
            marginLeft: '-1rem',
            marginTop: '-1rem'
          },
          '@media screen and (min-width:mobileSm)': {
            marginLeft: '-0.5rem',
            marginTop: '-0.5rem'
          }
        })
      })
      it('should add correct styles for gap=spacing   usage', () => {
        const a = stylerWithTheme(flexGapStyles)({
          gap: spacing
        })
        expect(a).toEqual({
          '>*': {
            '@media screen and (min-width:mobileMd)': {
              marginLeft: '1rem',
              marginTop: '1rem'
            },
            '@media screen and (min-width:mobileSm)': {
              marginLeft: '0.5rem',
              marginTop: '0.5rem'
            }
          },
          '@media screen and (min-width:mobileMd)': {
            marginLeft: '-1rem',
            marginTop: '-1rem'
          },
          '@media screen and (min-width:mobileSm)': {
            marginLeft: '-0.5rem',
            marginTop: '-0.5rem'
          }
        })
      })
      it('should add correct styles for {...spacing}   usage', () => {
        const a = stylerWithTheme(flexGapStyles)({
          ...spacing
        })
        expect(a).toEqual({
          '>*': {
            '@media screen and (min-width:mobileMd)': {
              marginLeft: '1rem',
              marginTop: '1rem'
            },
            '@media screen and (min-width:mobileSm)': {
              marginLeft: '0.5rem',
              marginTop: '0.5rem'
            }
          },
          '@media screen and (min-width:mobileMd)': {
            marginLeft: '-1rem',
            marginTop: '-1rem'
          },
          '@media screen and (min-width:mobileSm)': {
            marginLeft: '-0.5rem',
            marginTop: '-0.5rem'
          }
        })
      })
    })
  })
})
