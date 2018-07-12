import {
  width,
  ratio,
  backgroundSize,
  backgroundPosition,
  space,
  color,
} from '../styles'
import sys from '../sys'
import merge from '../merge'

export const styles = merge(
  space,
  width,
  ratio,
  backgroundSize,
  backgroundPosition,
  color,
  {
    backgroundImage: {
      image: v => `url(${v})`,
      src: v => `url(${v})`,
      radial: v => `radial-gradient(${v})`,
      linear: v => `linear-gradient(${v})`,
    },
  }
)

export default sys('div', styles, {
  displayName: 'BackgroundImage',
  defaultProps: {
    width: 1,
    ratio: 3 / 4,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  withProps: {},
})
