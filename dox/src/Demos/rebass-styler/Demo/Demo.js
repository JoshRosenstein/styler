import React from 'react'
import styled from 'react-emotion'
import LinkIcon from 'emotion-icons/feather/Link2'
import { Link as ScrollLink, Element } from 'react-scroll'
import {
  mapValuesWithValueKey as map,
  toPairs,
} from '@roseys/futils'
import Logo from 'emotion-icons/fa-solid/Code'

import Heading from '../src/components/Heading'
import FancyBox from '../src/components/FancyBox'
import Box from '../src/components/Box'
import Grid from '../src/components/Grid'
import Container from '../src/components/Container'
import Link from '../src/components/Link'
import Root from '../src/components/Root'


import * as ex from './Examples'


const examples = {}
Object.keys(ex)
  .sort()
  .forEach(key => {
    examples[key] = ex[key]
  })

const AnchorIcon = styled(LinkIcon)`
  margin-left: 30px;
  width: 20px;
  opacity: 0.7;
  margin-top: -5px;
  &:hover {
    opacity: 0.9;
  }
`
const Anchor = styled('a')`
  display: none;
  position: absolute;
  left: 0;
  color: inherit;
`

const DemoRoot = styled(Root)({
  display: 'flex',
  alignItems: 'flex-start',
  height: '100%',
})

const Main = styled(Box)({
  flex: '1 1 auto',
  height: '100%',
  overflowY: 'auto',
  WebkitOverflowScrolling: 'touch',
})

const SideBar = styled(Box)({
  flex: 'none',
  height: '99vh',
  '&:hover': {
    overflowY: 'auto',
  },
  WebkitOverflowScrolling: 'touch',
  borderRight: '1px solid #f6f6f6',
  position: 'fixed',
})

const NavItem = styled(ScrollLink)({
  cursor: 'pointer',
  display: 'block',
  paddingLeft: '8px',
  paddingRight: '8px',
  paddingTop: '4px',
  paddingBottom: '4px',
  fontSize: '12px',
  fontWeight: 'bold',
  textDecoration: 'none',
  color: 'inherit',
  WebkitUserSelect: 'none',
  userSelect: 'none',
  '&.active': {
    color: 'white',
    backgroundColor: 'black',
  },
  '&:hover': {
    color: 'white',
    backgroundColor: 'black',
  },
})
// NavLink

const InvisibleAnchor = styled('div')({
  position: 'relative',
  display: 'block',
  visibility: 'hidden',
  height: 0,
  top: '-3.8rem',
})

const AnchorHeader = styled(Heading)`
  position: relative;
  margin-left: -50px;
  padding-left: 50px;

  &:hover .Anchor {
    display: inline-block;
  }
`

const removeDemo = x => x.replace('Demo', '')

// const examples= pipe(keys, map(objOf("name")))(examples)

export const Example = ({ name, children, ...props }) => (
  <React.Fragment>
    <AnchorHeader>
      <Element name={name.toLowerCase()} />
      <InvisibleAnchor aria-hidden="true" id={name.toLowerCase()} />
      <Anchor className="Anchor" href={`#${name.toLowerCase()}`}>
        <AnchorIcon />
      </Anchor>
      {removeDemo(name)}
    </AnchorHeader>
    <FancyBox>{children}</FancyBox>
  </React.Fragment>
)

class SideNav extends React.Component {
  static defaultProps = {
    title: 'Styler',
    examples: [{ name: 'navlink' }],
  }

  render () {
    const { examples } = this.props

    return (
      <React.Fragment>
        <Link href="/">
          <Logo size="52px" />
        </Link>
        {examples.map(example => (
          <NavItem key={example} to={example.toLowerCase()}>
            {removeDemo(example)}
          </NavItem>
        ))}
      </React.Fragment>
    )
  }
}

export default () => (
  <React.Fragment>
    <Container maxWidth="1280px" pb="6">
      <DemoRoot>
        <SideBar width={['120px', '192px']}>
          <SideNav title="rebass-styler" examples={Object.keys(examples)} />
        </SideBar>
        <Main ml={['120px', '192px']}>
          <Grid>
            <FancyBox>
              {map(
                ([name, Cmp], id) => (
                  <Example key={id} name={name} >
                    <Cmp />
                  </Example>),
                toPairs(examples)
              )}
            </FancyBox>
          </Grid>
        </Main>
      </DemoRoot>
    </Container>
  </React.Fragment>
)
