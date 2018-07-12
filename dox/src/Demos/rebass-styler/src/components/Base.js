import { color, space, fontSize } from './styles'
import sys from './sys'

export default sys(
  'div',
  {
    ...space, ...color, fontSize, '   ': p => p.css,
  },
  {
    displayName: 'Base',
    defaultProps: {},
    withProps: {},
  }
)

