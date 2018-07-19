/**
 * @jest-environment node
 */

import { replace, is, startsWith, reverse, curryN } from '@roseys/futils'
import stylerWithTheme from './utils/stylerWithTheme'
import {
  spaceProp,
  pct,
  pxToRem,
  justifyContent,
  alignContent,
  justifyItems,
  alignItems
} from '../src'

const endsWith = curryN(2, (str, list) => startsWith(str, reverse(list)))

const supportsModernGrid = '@supports (grid-row-gap:0)'
const gridAutoFlowGetter = (v, p) => {
  let { dense } = p
  if (!is(String)(v) && dense) return 'dense'
  dense = dense && v !== 'dense' ? ' dense' : ''
  if (v !== 'column' && v !== 'row' && v !== 'dense') {
    v = 'row'
  }
  return v + dense
}

const gridContainerStyles = {
  display: {
    inline: 'inline-grid',
    gdInline: 'inline-grid',
    default: 'grid'
  },
  gridAutoRows: {
    gridAutoRows: 'returnAsIs',
    gdARows: 'returnAsIs',
    autoRows: 'returnAsIs',
    gdRows: 'returnAsIs',
    options: {
      getter: (v, { gridAutoRows, gdARows, gdRows }) =>
        gridAutoRows || gdARows
          ? v
          : endsWith('!', v) ? replace('!', '', v) : undefined
    }
  },
  gridTemplateRows: {
    gridTemplateRows: 'returnAsIs',
    templateRows: 'returnAsIs',
    gdTRows: 'returnAsIs',
    gdRows: 'returnAsIs',
    options: {
      getter: (v, { gridAutoRows, gdTRows, gdRows }) =>
        gridAutoRows || gdTRows ? v : !endsWith('!', v) ? v : undefined
    }
  },
  gridAutoColumns: {
    gridAutoColumns: 'returnAsIs',
    gdACols: 'returnAsIs',
    gdCols: 'returnAsIs',
    options: {
      getter: (v, { gridAutoColumns, gdACols, gdCols }) =>
        gridAutoColumns || gdACols
          ? v
          : endsWith('!', v) ? replace('!', '', v) : undefined
    }
  },
  gridTemplateColumns: {
    gridTemplateColumns: 'returnAsIs',
    gdTCols: 'returnAsIs',
    gdCols: 'returnAsIs',
    options: {
      getter: (v, { gridAutoColumns, gdTCols, gdCols }) =>
        gridAutoColumns || gdTCols ? v : !endsWith('!', v) ? v : undefined
    }
  },
  gridTemplateAreas: {
    gridTemplateAreas: 'returnAsIs',
    gdAreas: 'returnAsIs'
  },
  gridTemplate: {
    gridTemplate: 'returnAsIs',
    gdTemplate: 'returnAsIs',
    template: 'returnAsIs'
  },
  gridAutoFlow: {
    options: {
      getter: gridAutoFlowGetter
    },
    autoFlow: 'returnAsIs',
    direction: 'returnAsIs',
    gridAutoFlow: 'returnAsIs',
    gdAuto: 'returnAsIs'
  },
  grid: {
    options: {
      key: 'grids'
    },
    grid: 'returnAsIs'
  },
  gridGap: {
    options: {
      key: 'space',
      getter: pxToRem
    },
    gridGap: 'returnAsIs',
    gap: 'returnAsIs'
  },
  gridRowGap: {
    options: {
      key: 'space'
    },
    gridRowGap: 'returnAsIs',
    gdRowGap: 'returnAsIs',
    rowGap: 'returnAsIs'
  },
  gridColumnGap: {
    options: {
      key: 'space'
    },
    gridColumnGap: 'returnAsIs',
    gdColwGap: 'returnAsIs',
    colGap: 'returnAsIs',
    columnGap: 'returnAsIs'
  },
  justifyContent,
  alignContent,
  justifyItems,
  alignItems
}

const ColumnStyles = {
  '> :first-child': {
    '> *': {
      flexGrow: {
        flexGrow: 'returnAsIs',
        fxGrow: 'returnAsIs',
        grow: 'returnAsIs',
        default: 1
      },
      width: {
        columnCount: 'returnAsIs',
        columnWidth: 'returnAsIs',
        columnW: 'returnAsIs',
        colWidth: 'returnAsIs',
        colW: 'returnAsIs',

        options: {
          key: 'space',
          getter: (v, p) => (p.columnCount ? pct(100 / v) : pxToRem)
        }
      }
    },
    [supportsModernGrid]: p => ({
      '> *': {
        width: 'initial',
        paddingTop: 'initial',
        paddingLeft: 'initial'
      },
      display: 'grid',
      ...gridContainerStyles,
      'gridTemplateColumns ': {
        columnWidth: 'returnAsIs',
        options: {
          key: 'space',
          getter: (v, { columnWidth, columnCount }) =>
            columnWidth
              ? `repeat(auto-fit,minmax(${pxToRem(v)}, 1fr))`
              : `repeat(${v}, 1fr)`
        }
      },
      marginTop: 'initial',
      marginLeft: 'initial',
      ...spaceProp('gridGap')(p)
    })
  }
}

const GridContainer = stylerWithTheme(gridContainerStyles)
const Columns = stylerWithTheme(ColumnStyles)

const spacing = {
  mobileSm: 'sm',
  mobileMd: 'md'
}

describe('GridContainer', () => {
  describe('with static features', () => {
    it('should add correct styles for default', () => {
      const a = GridContainer({})

      expect(a).toEqual({ display: 'grid' })
    })
    it('should add correct styles for default', () => {
      const a = GridContainer({ gap: spacing })

      expect(a).toEqual({
        '@media screen and (min-width:mobileMd)': { gridGap: '1rem' },
        '@media screen and (min-width:mobileSm)': { gridGap: '0.5rem' },
        display: 'grid'
      })
    })
  })

  describe('Columns', () => {
    describe('with static features', () => {
      it('should add correct styles for <Flex.Item width={itemBasis}> usage', () => {
        const a = Columns({})

        expect(a).toEqual({
          '> :first-child > *': { flexGrow: 1 },
          '@supports (grid-row-gap:0)': {
            '> :first-child': {
              display: 'grid',
              marginLeft: 'initial',
              marginTop: 'initial'
            },
            '> :first-child > *': {
              paddingLeft: 'initial',
              paddingTop: 'initial',
              width: 'initial'
            }
          }
        })
      })
      it('should add correct styles for <Columns {spacing}> usage', () => {
        const a = Columns(spacing)
        const b = Columns({ gap: spacing })

        const result = {
          '> :first-child > *': { flexGrow: 1 },
          '@supports (grid-row-gap:0)': {
            '> :first-child': {
              display: 'grid',
              marginLeft: 'initial',
              marginTop: 'initial'
            },
            '> :first-child > *': {
              paddingLeft: 'initial',
              paddingTop: 'initial',
              width: 'initial'
            },
            '@media screen and (min-width:mobileMd)': {
              '> :first-child': { gridGap: '1rem' }
            },
            '@media screen and (min-width:mobileSm)': {
              '> :first-child': { gridGap: '0.5rem' }
            }
          }
        }
        expect(a).toEqual(result)
        expect(b).toEqual(result)
      })
    })
  })
})
