import sys from '../sys'
import Text from './Text'

export default sys(
  Text,
  {},
  {
    displayName: 'BlockQuote',
    defaultProps: {
      is: 'blockquote',
      fontSize: '3',
      m: '0',
    },
    withProps: {},
  }
)

// export const styles = TextStyles

// export default sys("blockquote", styles, {
//   displayName: "Blockquote",
//   fontSize: "3",
//   m: "0"
// })

