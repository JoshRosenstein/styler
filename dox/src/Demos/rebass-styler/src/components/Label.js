import { alignItems, space, color } from '../styles'
import sys from '../sys'
import merge from '../merge'

export const styles = merge(alignItems, space, color, { display: 'flex' })

export default sys('label', styles, {
  displayName: 'Label',
  defaultProps: {
    fontSize: '1',
    mb: '1',
    align: 'center',
  },
  withProps: {},
})

