import { space, width, color } from '../styles'
import sys from '../sys'

export const styles = {
  ...space,
  ...width,
  ...color,
  display: 'block',
  textDecoration: 'none',
}
export default sys('a', styles, {
  displayName: 'BlockLink',
  defaultProps: {},
  withProps: {},
})

