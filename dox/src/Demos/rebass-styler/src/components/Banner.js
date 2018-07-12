import Flex from './Flex'
import sys from '../sys'
import { minHeight, backgroundSize, backgroundPosition } from '../styles'
import merge from '../merge'

export const styles = merge(minHeight, backgroundSize, backgroundPosition, {
  backgroundImage: {
    image: v => `url(${v})`,
    src: v => `url(${v})`,
    radial: v => `radial-gradient(${v})`,
    linear: v => `linear-gradient(${v})`,
  },
})

export default sys(Flex, styles, {
  displayName: 'Banner',
  defaultProps: {
    p: [3, 4],
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '80vh',
    color: 'white',
    bg: 'black',
  },
  withProps: {},
})

