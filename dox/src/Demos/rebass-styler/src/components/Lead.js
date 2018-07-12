import sys from '../sys'
import Text from './Text'

export default sys(
  Text,
  {},
  {
    displayName: 'Lead',
    defaultProps: {
      fontSize: '3',
      lineHeight: 1.25,
    },
    withProps: {},
  }
)

