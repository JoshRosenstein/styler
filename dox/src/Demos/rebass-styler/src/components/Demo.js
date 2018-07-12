import React from "react"
import Avatar from "./Avatar"
import BackgroundImage from "./BackgroundImage"
import Badge from "./Badge"
import Banner from "./Banner"
import Heading from "./Heading"
import BlockLink from "./BlockLink"
import Text from "./Text"
import Blockquote from "./Blockquote"
import Border from "./Border"
import Button from "./Button"
import ButtonCircle from "./ButtonCircle"
import ButtonOutline from "./ButtonOutline"
import ButtonTransparent from "./ButtonTransparent"
import Caps from "./Caps"
import BulmaBox from "./BulmaBox"
import Box from "./Box"
import FlexBox from "./Box"
import Card from "./Card"
import Grid from "./Grid"
import Container from "./Container"
import Subhead from "./Subhead"
import Link from "./Link"
import NavLink from "./NavLink"
import Close from "./Close"
import Lead from "./Lead"
import Small from "./Small"
import Pre from "./Pre"
import Code from "./Code"
import Samp from "./Samp"
import Measure from "./Measure"
import Truncate from "./Truncate"
import Label from "./Label"
import Input from "./Input"
import Select from "./Select"
import Textarea from "./Textarea"
import Radio from "./Radio"
import Checkbox from "./Checkbox"
import Slider from "./Slider"
import Image from "./Image"
import Progress from "./Progress"
import Divider from "./Divider"
import Row from "./Row"
import Column from "./Column"
import Message from "./Message"
import Group from "./Group"
import Toolbar from "./Toolbar"
import Circle from "./Circle"
import Position, { Relative, Absolute, Sticky, Fixed } from "./Position"
import Tab from "./Tab"
import Tabs from "./Tabs"
import Dot from "./Dot"
import Flex from "../grid-styled/Flex"
import Drawer from "./Drawer"
import Embed from "./Embed"
import Panel from "./Panel"
import Modal from "./Modal"
import Donut from "./Donut"
import Carousel from "./Carousel"
import Switch from "./Switch"
import Arrow from "./Arrow"
import Root from "./Root"
import Tooltip from "./Tooltip"
import styled from "react-emotion"
import SmartSelect from "../smart/Select"
import { State, Toggle } from "react-powerplug"

const DemoRoot = styled(Root)({
  display: "flex",
  alignItems: "flex-start",
  height: "100%"
})

const Main = styled("div")({
  flex: "1 1 auto",
  height: "100%",
  overflowY: "auto",
  WebkitOverflowScrolling: "touch"
})

const SideBar = styled("div")({
  width: "192px",
  flex: "none",
  height: "100%",
  overflowY: "auto",
  WebkitOverflowScrolling: "touch",
  borderRight: "1px solid #f6f6f6"
})

const NavItem = styled(Link)({
  display: "block",
  paddingLeft: "8px",
  paddingRight: "8px",
  paddingTop: "4px",
  paddingBottom: "4px",
  fontSize: "12px",
  fontWeight: "bold",
  textDecoration: "none",
  color: "inherit",
  WebkitUserSelect: "none",
  userSelect: "none",
  "&.active": {
    color: "white",
    backgroundColor: "black"
  }
})

export const Example = ({ name, children, ...props }) => (
  <React.Fragment>
    <Heading>{name}</Heading>
    <BulmaBox>{children}</BulmaBox>
  </React.Fragment>
)

class SideNav extends React.Component {
  static defaultProps = {
    title: "Styler",
    examples: [{ name: "box" }]
  }

  render() {
    const { examples, title } = this.props

    return (
      <React.Fragment>
        <NavItem to="/">{title}</NavItem>
        {examples.map(example => (
          <NavItem key={example.name} to={"/" + example.name}>
            {example.name}
          </NavItem>
        ))}
      </React.Fragment>
    )
  }
}

export default ({
  image = "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20",
  avatar = "http://i.pravatar.cc/150?img=1"
}) => (
  <React.Fragment>
    <Container maxWidth="1280px" pb="6">
      <DemoRoot>
        <SideBar>
          <SideNav title="title" />
        </SideBar>
        <Main>
          <Grid>
            <BulmaBox>
              <Example name="Flex">
                <Flex mx="-3" flexWrap="wrap">
                  <FlexBox width={[1, 1 / 2]} p="3" color="white" bg="blue">
                    Flex
                  </FlexBox>
                  <FlexBox width={[1, 1 / 2]} p="3" color="white" bg="violet">
                    Box
                  </FlexBox>
                </Flex>
              </Example>
              <Example name="Box">
                <Box px="3" py="4" color="white" bg="blue">
                  Hello
                </Box>
              </Example>
              <Example name="Carousel">
                <State initial={{ index: 0 }}>
                  {({ state, setState }) => (
                    <React.Fragment>
                      <Carousel index={state.index}>
                        <Box bg="blue">
                          <Flex p={6} justify="center" align="center">
                            <Heading>This</Heading>
                          </Flex>
                        </Box>
                        <Box bg="gray">
                          <Flex p={6} justify="center" align="center">
                            <Heading>is</Heading>
                          </Flex>
                        </Box>
                        <Box bg="gray">
                          <Flex p={6} bg="red" justify="center" align="center">
                            <Heading>Carousel</Heading>
                          </Flex>
                        </Box>
                      </Carousel>
                      <Flex p={6} bg="white" justify="center" align="center">
                        <Dot onClick={() => setState({ index: 0 })} />
                        <Dot onClick={() => setState({ index: 1 })} />
                        <Dot onClick={() => setState({ index: 2 })} />
                      </Flex>
                    </React.Fragment>
                  )}
                </State>
              </Example>

              <Example name="Switch">
                <Toggle initial={true}>
                  {({ on, toggle }) => <Switch checked={on} onClick={toggle} />}
                </Toggle>

                <Switch disabled />
              </Example>
              <Example name="Arrow">
                down<Arrow direction="down" />
                Up<Arrow direction="up" />
                Left<Arrow direction="left" />
                Right<Arrow direction="right" />
              </Example>
              <Example name="Heading">
                <Heading>Heading</Heading>
              </Example>
              <Example name="Subhead">
                <Subhead children="Hello" />
              </Example>
              <Example name="Button">
                <Button>Button</Button>
              </Example>
              <Example name="Button a">
                <Button is="a" href="#">
                  A Button
                </Button>
              </Example>
              <Example name="ButtonOutline">
                <ButtonOutline>ButtonOutline</ButtonOutline>
              </Example>
              <Example name="ButtonCircle">
                <ButtonCircle>ButtonCircle</ButtonCircle>
              </Example>
              <Example name="ButtonTransparent">
                <ButtonTransparent>ButtonTransparent</ButtonTransparent>
              </Example>
              <Example name="Link">
                <Link href="#!" children="Hello" />
              </Example>
              <Example name="NavLink">
                <NavLink href="#!" children="Hello" />
              </Example>
              <Example name="BlockLink">
                <BlockLink href="#">BlockLink</BlockLink>
              </Example>
              <Example name="Close">
                <Close />
              </Example>

              <Example name="Text">
                <Text>Text</Text>
              </Example>
              <Example name="Text bold">
                <Text fontWeight="bold">Text bold</Text>
              </Example>
              <Example name="Font Sizes">
                <div>
                  <Text fontSize="9">fontSize 9</Text>
                  <Text fontSize="8">fontSize 8</Text>
                  <Text fontSize="7">fontSize 7</Text>
                  <Text fontSize="6">fontSize 6</Text>
                  <Text fontSize="5">fontSize 5</Text>
                  <Text fontSize="4">fontSize 4</Text>
                  <Text fontSize="3">fontSize 3</Text>
                  <Text fontSize="2">fontSize 2</Text>
                  <Text fontSize="1">fontSize 1</Text>
                  <Text fontSize="0">fontSize 0</Text>
                </div>
              </Example>

              <Example name="Lead">
                <Lead>Hello Lead</Lead>
              </Example>
              <Example name="Caps">
                <Caps>Caps</Caps>
              </Example>
              <Example name="Small">
                <Small children="Hello" />
              </Example>
              <Example name="Pre">
                <Pre children="const hello = 'Rebass'" />
              </Example>
              <Example name="Code">
                <Code children="<Hello />" />
              </Example>
              <Example name="Samp">
                <Samp>1024</Samp>
              </Example>
              <Example name="Blockquote">
                <Blockquote>Blockquote</Blockquote>
              </Example>
              <Example name="Measure">
                <Measure>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </Measure>
              </Example>
              <Example name="Truncate">
                <Truncate>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </Truncate>
              </Example>

              <Example name="Label">
                <Label>Hello Label</Label>
              </Example>
              <Example name="Input">
                <Input defaultValue="Hello" placeholder="Input" />
              </Example>
              <Example name="Select">
                <Select>
                  <option>Hello</option>
                  <option>Beep</option>
                  <option>Boop</option>
                </Select>
              </Example>
              <Example name="Textarea">
                <Textarea rows={4} defaultValue="Hello" />
              </Example>
              <Example name="Radio">
                <radiogroup>
                  <Label>
                    <Radio name="radio" defaultChecked />
                    Hello
                  </Label>
                  <Label>
                    <Radio name="radio" />
                    Beep
                  </Label>
                </radiogroup>
              </Example>
              <Example name="Checkbox">
                <Label>
                  <Checkbox defaultChecked />
                  Hello
                </Label>
              </Example>
              <Example name="Slider">
                <Slider />
              </Example>
              <Example name="Image">
                <Image src={image} />
              </Example>
              <Example name="BackgroundImage">
                <BackgroundImage ratio={1 / 2} src={image} />
              </Example>
              <Example name="Avatar">
                <Avatar src={avatar} />
              </Example>
              <Example name="Progress">
                <Progress value={1 / 3} />
              </Example>
              <Example name="Divider">
                <Divider w={1} borderColor="blue" />
              </Example>

              <Example name="Container">
                <Container>Hello</Container>
              </Example>
              <Example name="Row">
                <Row>
                  <Column>Column</Column>
                  <Column>Column</Column>
                </Row>
              </Example>
              <Example name="Column">
                <Row>
                  <Column>Column</Column>
                  <Column>Column</Column>
                  <Column>Column</Column>
                </Row>
              </Example>

              <Example name="Border">
                <Border m={3} p={3}>
                  Border
                </Border>
              </Example>
              <Example name="Card">
                <Card width={256}>
                  <BackgroundImage
                    ratio={1}
                    src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20"
                  />
                  <Subhead p="2">Hello</Subhead>
                </Card>
              </Example>
              <Example name="Banner">
                <Banner src={image}>
                  <Heading>Banner</Heading>
                </Banner>
              </Example>
              <Example name="Message">
                <Message>Hello</Message>
              </Example>
              <Example name="Group">
                <Group>
                  <Button children="Beep" />
                  <ButtonOutline children="Boop" />
                  <ButtonOutline children="Bop" />
                </Group>
              </Example>
              <Example name="Toolbar">
                <Toolbar>
                  <NavLink>Hello</NavLink>
                  <NavLink ml="auto">Beep</NavLink>
                  <NavLink>Boop</NavLink>
                </Toolbar>
              </Example>
              <Example name="Badge">
                <Badge>Badge</Badge>
              </Example>
              <Example name="Circle">
                <Circle>A</Circle>
              </Example>
              <Example name="Position">
                <Position p={3} bg="green" position="relative">
                  Hello
                </Position>
              </Example>
              <Example name="Relative">
                <Relative>
                  <Absolute bottom={0} right={0}>
                    Hello
                  </Absolute>
                </Relative>
              </Example>
              <Example name="Absolute">
                <Relative>
                  <Absolute bottom={0} right={0}>
                    Hello
                  </Absolute>
                </Relative>
              </Example>
              <Example name="Sticky">
                <Sticky m="2" top="0" right={0} bottom={0}>
                  Hello
                </Sticky>
              </Example>
              <Example name="Tab">
                <Tab borderColor="blue">Hello</Tab>
              </Example>
              <Example name="Tabs">
                <Tabs>
                  <Tab borderColor="blue">Beep</Tab>
                  <Tab>Boop</Tab>
                  <Tab>Bop</Tab>
                </Tabs>
              </Example>
              <Example name="Dot">
                <Flex>
                  <Dot bg="black" />
                  <Dot />
                  <Dot />
                </Flex>
              </Example>
              <Example name="Drawer">
                <State initial={{ open: false, position: "left" }}>
                  {({ state, setState }) => (
                    <React.Fragment>
                      <Label>
                        Position:
                        <SmartSelect
                          border={1}
                          borderColor="red"
                          items={[
                            { value: "left", text: "Left" },
                            { value: "right", text: "Right" },
                            { value: "bottom", text: "Bottom" },
                            { value: "top", text: "Top" }
                          ]}
                          value={state.position}
                          onChange={v => setState({ position: v })}
                        />
                      </Label>

                      <Button
                        m={3}
                        onClick={() => setState({ open: !state.open })}
                      >
                        {state.open
                          ? "Close" + " " + state.position
                          : "Open" + " " + state.position}
                      </Button>
                      <Drawer
                        width={
                          state.position === "top" ||
                          state.position === "bottom"
                            ? "100%"
                            : 320
                        }
                        height={
                          state.position === "top" ||
                          state.position === "bottom"
                            ? "320px"
                            : undefined
                        }
                        open={state.open}
                        side={state.position}
                        p={3}
                        color="white"
                        bg="black"
                      >
                        <Heading>Hello</Heading>
                        Drawer
                      </Drawer>
                    </React.Fragment>
                  )}
                </State>
              </Example>
              <Example name="Tooltip">
                <Flex align="center" mt={100} minHeight={100}>
                  <Tooltip text="Hello">
                    <Text>Hover Me</Text>
                  </Tooltip>
                </Flex>
              </Example>
              <Example name="Embed">
                <Embed>
                  <iframe
                    title="Demo"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/GNCd_ERZvZM"
                    frameBorder="0"
                    allowFullScreen
                  />
                </Embed>
              </Example>
              <Example name="Panel">
                <Panel color="blue">
                  <Panel.Header color="white" bg="blue">
                    Hello
                  </Panel.Header>
                  <Box p={3}>
                    <Subhead>Panel</Subhead>
                  </Box>
                  <Panel.Footer color="blue">Footer</Panel.Footer>
                </Panel>
              </Example>
              <Example name="Modal">
                <State initial={{ open: false }}>
                  {({ state, setState }) => (
                    <React.Fragment>
                      <Button
                        m={3}
                        onClick={() => setState({ open: !state.open })}
                      >
                        Open Modal
                      </Button>
                      {state.open && (
                        <div>
                          <Fixed top={0} right={0} bottom={0} left={0} />

                          <Modal width={256}>
                            <Heading>Hello</Heading>

                            <Button
                              m={3}
                              onClick={() => setState({ open: false })}
                            >
                              Close Modal
                            </Button>
                          </Modal>
                        </div>
                      )}
                    </React.Fragment>
                  )}
                </State>
              </Example>
              <Example name="Donut">
                <Donut value={2 / 3} strokeWidth={3} size={256} color="blue" />
              </Example>
            </BulmaBox>
          </Grid>{" "}
        </Main>
      </DemoRoot>
    </Container>
  </React.Fragment>
)
