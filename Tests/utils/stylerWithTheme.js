import { styler } from '../../src'

import withTheme from './withTheme'

export default styleObj => props => styler(styleObj)(withTheme(props))
