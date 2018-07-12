import React from 'react'
import styled from 'react-emotion'

import theme from './rebass-styler/src/theme'
import Box from './rebass-styler/src/components/Box'

class Root extends React.Component {
  componentWillReceiveProps (next) {
    if (next.open !== this.props.open) {
      this.root.scrollTop = 0
    }
  }

  render () {
    return <Box {...this.props} innerRef={ref => (this.root = ref)} />
  }
}

const StickyBar = styled(Root)`
  height: 100vh;
  max-height: ${props => (props.open ? '100vh' : '64px')};
  overflow-y: ${props => (props.open ? 'auto' : 'hidden')};
  -webkit-overflow-scrolling: touch;
  transition-property: max-height;
  transition-timing-function: ease-out;
  transition-duration: 0.0625s;

  ${theme('mediaQueries.sm')} {
    position: sticky;
    top: 0;
    max-height: 100vh;
    overflow-y: auto;
    flex: none;
  }
`

export default StickyBar
