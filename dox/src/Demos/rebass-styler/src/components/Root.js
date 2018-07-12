import sys from '../sys'
import { color, space, fontFamily } from '../styles'

export default sys(
  'div',
  {
    ...color,
    ...space,
    ...fontFamily,
    '& *': {
      boxSizing: 'border-box',
    },
  },
  {
    displayName: 'Root',
    defaultProps: {
      fontFamily: 'sans',
    },
    withProps: {},
  }
)

