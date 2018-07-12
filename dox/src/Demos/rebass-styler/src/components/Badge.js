import { color, space, fontSize, fontWeight, borderRadius } from '../styles'
import sys from '../sys'
import merge from '../merge'

export const styles = merge(space, color, fontSize, fontWeight, borderRadius, {
  WebkitFontSmoothing: 'antialiased',
  display: 'inline-block',
  verticalAlign: 'middle',
  boxSizing: 'border-box',
})
export default sys(
  'div',
  styles,

  {
    displayName: 'Badge',
    defaultProps: {
      fontSize: '0',
      px: '2',
      py: '1',
      mx: '1',
      color: 'white',
      bg: 'blue',
      fontWeight: 'bold',
      borderRadius: '2',
    },
    withProps: {},
  }
)

