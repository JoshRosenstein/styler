import { color, space } from '../styles'
import sys from '../sys'

export const styles = {
  ...space,
  ...color,
  options: { cx: ['direction'] },
  display: 'inline-block',
  width: 0,
  height: 0,
  verticalAlign: 'middle',

  borderLeft: {
    directionRight: '.4375em solid',
    directionUp: '.3125em solid transparent',
    directionDown: '.3125em solid transparent',
  },
  borderRight: {
    directionLeft: '.4375em solid',
    directionUp: '.3125em solid transparent',
    directionDown: '.3125em solid transparent',
  },
  borderTop: {
    directionDown: '.4375em solid',
    directionLeft: '.3125em solid transparent',
    directionRight: '.3125em solid transparent',
  },
  borderBottom: {
    directionUp: '.4375em solid',
    directionLeft: '.3125em solid transparent',
    directionRight: '.3125em solid transparent',
  },
}
export default sys('div', styles, {
  displayName: 'Arrow',
  defaultProps: { direction: 'down' },
  withProps: {},
})
