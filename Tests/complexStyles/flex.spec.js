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
  alignSelf,
  Util,
  fontSize
} from '../../src'

const positionStyles = {
  position: {
    position: 'returnAsIs',
    relative: 'relative',
    absolute: 'absolute',
    fixed: 'fixed',
    sticky: 'sticky'
  },
  bottom: {
    bottom: 'returnAsIs',
    options: {
      getter: 'px'
    }
  },
  left: {
    left: 'returnAsIs',
    options: {
      getter: 'px'
    }
  },
  right: {
    right: 'returnAsIs',
    options: {
      getter: 'px'
    }
  },
  top: {
    top: 'returnAsIs',
    options: {
      getter: 'px'
    }
  }
}

const overflowStyles = {
  overflow: {
    overflow: 'returnAsIs'
  },
  overflowX: {
    overflowX: 'returnAsIs'
  },
  overflowY: {
    overflowY: 'returnAsIs'
  }
}

const colorsStyles = {
  color: {
    color: 'returnAsIs',
    options: {
      key: 'colors'
    }
  },
  backgroundColor: {
    backgroundColor: 'returnAsIs',
    bgColor: 'returnAsIs',
    bgC: 'returnAsIs',
    options: {
      key: 'colors'
    }
  }
}

const sizingStyles = {
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
  maxHeight,
  fontSize
}

const spacing = {
  mobileSm: 'sm',
  mobileMd: 'md'
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

export const flexWrapperStyles = {
  display: {
    display: 'returnAsIs',
    inline: 'inline-block'
  },
  ...sizingStyles,
  ...overflowStyles
}

const flexGapInnerCSSProp = R.ifElse(
  R.propEq('gapType', 'padding'),
  R.always(['>:first-child.>*.paddingTop', '>:first-child.>*.paddingLeft']),
  R.always(['>:first-child.>*.marginTop', '>:first-child.>*.marginLeft'])
)

const flexSpaceProps = {
  ' ': spaceProp(flexGapInnerCSSProp, pxToRem),
  '  ': spaceProp(['marginTop', 'marginLeft'], R.pipe(R.negate, pxToRem))
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

export const flexStyles = {
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
  ...flexGapStyles,
  ///
  alignItems: {
    alignItems: 'returnAsIs',
    center: (v, p) => isFlexCol(p) && 'center',
    middle: (v, p) => !isFlexCol(p) && 'center',
    top: (v, p) => !isFlexCol(p) && 'flex-start',
    right: (v, p) => isFlexCol(p) && 'flex-end',
    bottom: (v, p) => !isFlexCol(p) && 'flex-end',
    left: (v, p) => isFlexCol(p) && 'flex-start'
  },
  justifyContent: {
    justifyContent: 'returnAsIs',
    center: (v, p) => !isFlexCol(p) && 'center',
    middle: (v, p) => isFlexCol(p) && 'center',
    top: (v, p) => isFlexCol(p) && 'flex-start',
    right: (v, p) => !isFlexCol(p) && 'flex-end',
    bottom: (v, p) => isFlexCol(p) && 'flex-end',
    left: (v, p) => !isFlexCol(p) && 'flex-start'
  }
}

export const flexContainerStyles = {
  ...flexWrapperStyles,
  '>:first-child': {
    ...flexStyles
  }
}

const flexItemStyles = {
  ...sizingStyles,
  flexGrow: {
    flexGrow: returnAsIs,
    fxGrow: returnAsIs,
    grow: returnAsIs
  },
  flexShrink: {
    flexShrink: returnAsIs,
    fxShrink: returnAsIs,
    shrink: returnAsIs
  },
  flexFlow: {
    flexFlow: returnAsIs,
    fxFlow: returnAsIs,
    flow: returnAsIs
  },
  flexBasis: {
    flexBasis: returnAsIs,
    fxBasis: returnAsIs,
    basis: returnAsIs,
    options: {
      key: 'space',
      getter: n => (!Util.isNumber(n) || n > 1 ? pxToRem(n) : n * 100 + '%')
    }
  },
  flex,
  zIndex,
  order,
  alignSelf,
  /// align Item
  marginLeft: {
    center: 'auto',
    right: 'auto',
    justifySelf: val => val === 'center' || (val === 'end' && 'auto')
  },
  marginRight: {
    center: 'auto',
    left: 'auto',
    justifySelf: val => val === 'center' || (val === 'start' && 'auto')
  },
  marginBottom: {
    middle: 'auto',
    top: 'auto'
  },
  marginTop: {
    middle: 'auto',
    bottom: 'auto'
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
const FlexContainer = stylerWithTheme({
  ...flexContainerStyles,
  ...flexSpaceProps
})
const FlexItem = stylerWithTheme(flexItemStyles)
describe('FlexContainer', () => {
  describe('Flex Space Props', () => {
    it('should add correct styles for <Flex {spacing}> ', () => {
      const a = stylerWithTheme(flexSpaceProps)(spacing)
      expect(a).toEqual({
        '>:first-child >*': {
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
    it('should add correct styles for {column} usage', () => {
      const a = FlexContainer({ column: true })
      expect(a).toEqual({
        '>:first-child': {
          display: 'flex',
          flexDirection: 'column',
          height: 'inherit',
          maxHeight: 'inherit',
          maxWidth: 'inherit',
          minHeight: 'inherit',
          minWidth: 'inherit',
          width: 'inherit'
        }
      })
    })

    describe('flexGapStyles', () => {
      it('should add correct styles for gap="sm" gapType:"padding" usage', () => {
        const a = stylerWithTheme(flexGapStyles)({
          gap: 'sm',
          gapType: 'padding'
        })
        expect(a).toEqual({
          '>*': {
            boxSizing: 'border-box',
            paddingLeft: '0.5rem',
            paddingTop: '0.5rem'
          },
          marginLeft: '-0.5rem',
          marginTop: '-0.5rem'
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
        const flexGapInnerCSSProp2 = R.ifElse(
          R.propEq('gapType', 'padding'),
          R.always(['>*.paddingTop', '>*.paddingLeft']),
          R.always(['>*.marginTop', '>*.marginLeft'])
        )

        const a = stylerWithTheme({
          ...flexGapStyles,
          ' ': spaceProp(flexGapInnerCSSProp2)
        })({
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
          }
        })
      })
    })
  })
  describe('FlexItem', () => {
    const itemBasis = {
      mobileSm: '100%',
      tabletSm: '50%',
      laptopSm: '33.333%'
    }

    it('should add correct styles for <Flex.Item width={itemBasis}> usage', () => {
      const a = FlexItem({
        width: itemBasis
      })
      expect(a).toEqual({
        '@media screen and (min-width:laptopSm)': { width: '33.333%' },
        '@media screen and (min-width:mobileSm)': { width: '100%' },
        '@media screen and (min-width:tabletSm)': { width: '50%' }
      })
    })
    it('should add correct styles for <Flex.Item width={itemBasis}> usage', () => {
      const a = FlexItem({})
      expect(a).toEqual({})
    })
  })
})
