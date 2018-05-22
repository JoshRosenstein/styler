import styler from '../../src/styler'
//import styler from '../../src/unused/SS/styler'

import withTheme from './withTheme'

export default styleObj => props => styler(styleObj)(withTheme(props))
