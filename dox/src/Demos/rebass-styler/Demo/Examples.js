import React from 'react'
import { State, Toggle } from 'react-powerplug'

import Avatar from '../src/components/Avatar'
import BackgroundImage from '../src/components/BackgroundImage'
import Badge from '../src/components/Badge'
import Banner from '../src/components/Banner'
import Heading from '../src/components/Heading'
import BlockLink from '../src/components/BlockLink'
import Text from '../src/components/Text'
import Blockquote from '../src/components/Blockquote'
import Border from '../src/components/Border'
import Button from '../src/components/Button'
import ButtonCircle from '../src/components/ButtonCircle'
import ButtonOutline from '../src/components/ButtonOutline'
import ButtonTransparent from '../src/components/ButtonTransparent'
import Caps from '../src/components/Caps'
import Box from '../src/components/Box'
import Card from '../src/components/Card'
import Container from '../src/components/Container'
import Subhead from '../src/components/Subhead'
import Link from '../src/components/Link'
import NavLink from '../src/components/NavLink'
import Close from '../src/components/Close'
import Lead from '../src/components/Lead'
import Small from '../src/components/Small'
import Pre from '../src/components/Pre'
import Code from '../src/components/Code'
import Samp from '../src/components/Samp'
import Measure from '../src/components/Measure'
import Truncate from '../src/components/Truncate'
import Label from '../src/components/Label'
import Input from '../src/components/Input'
import Select from '../src/components/Select'
import Textarea from '../src/components/Textarea'
import Radio from '../src/components/Radio'
import Checkbox from '../src/components/Checkbox'
import Slider from '../src/components/Slider'
import Image from '../src/components/Image'
import Progress from '../src/components/Progress'
import Divider from '../src/components/Divider'
import Row from '../src/components/Row'
import Column from '../src/components/Column'
import Message from '../src/components/Message'
import Group from '../src/components/Group'
import Toolbar from '../src/components/Toolbar'
import Circle from '../src/components/Circle'
import Position, {
  Relative,
  Absolute,
  Sticky,
  Fixed,
} from '../src/components/Position'
import Tab from '../src/components/Tab'
import Tabs from '../src/components/Tabs'
import Dot from '../src/components/Dot'
import Flex from '../src/components/Flex'
import Drawer from '../src/components/Drawer'
import Embed from '../src/components/Embed'
import Panel from '../src/components/Panel'
import Modal from '../src/components/Modal'
import Donut from '../src/components/Donut'
import Carousel from '../src/components/Carousel'
import Switch from '../src/components/Switch'
import Arrow from '../src/components/Arrow'
import Tooltip from '../src/components/Tooltip'
import SmartSelect from './StatefulSelect'


const image =
  'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'

const avatar = 'http://i.pravatar.cc/150?img=1'

export const FlexDemo = () => (
  <Flex mx="-3" flexWrap="wrap">
    <Box width={[1, 1 / 2]} p="3" color="white" bg="blue">
      Flex
    </Box>
    <Box width={[1, 1 / 2]} p="3" color="white" bg="violet">
      Box
    </Box>
  </Flex>
)
export const BoxDemo = () => (
  <Flex mx="-3" flexWrap="wrap">
    <Box width={[1, 1 / 2]} p="3" color="white" bg="blue">
      Flex
    </Box>
    <Box width={[1, 1 / 2]} p="3" color="white" bg="violet">
      Box
    </Box>
  </Flex>
)

export const CarouselDemo = () => (
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
)

export const SwitchDemo = () => (
  <React.Fragment>
    <Toggle initial>
      {({ on, toggle }) => <Switch checked={on} onClick={toggle} />}
    </Toggle>

    <Switch disabled />
  </React.Fragment>
)

export const ArrowDemo = () => (
  <React.Fragment>
    down<Arrow direction="down" />
    Up<Arrow direction="up" />
    Left<Arrow direction="left" />
    Right<Arrow direction="right" />
  </React.Fragment>
)

export const HeadingDemo = () => <Heading>Heading</Heading>

export const SubheadDemo = () => <Subhead children="Hello" />

export const ButtonDemo = () => <Button>Button</Button>

export const ButtonOutlineDemo = () => (
  <ButtonOutline>ButtonOutline</ButtonOutline>
)

export const ButtonCircleDemo = () => <ButtonCircle>ButtonCircle</ButtonCircle>

export const ButtonTransparentDemo = () => (
  <ButtonTransparent>ButtonTransparent</ButtonTransparent>
)

export const LinkDemo = () => <Link href="#!" children="Hello" />

export const NavLinkDemo = () => <NavLink href="#!" children="Hello" />

export const BlockLinkDemo = () => <BlockLink href="#">BlockLink</BlockLink>

export const CloseDemo = () => <Close />

export const TextDemo = () => <Text>Text</Text>

export const TextBoldDemo = () => <Text fontWeight="bold">Text bold</Text>

export const FontSizesDemo = () => (
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
)

export const LeadDemo = () => <Lead>Hello Lead</Lead>

export const CapsDemo = () => <Caps>Caps</Caps>

export const SmallDemo = () => <Small children="Hello" />

export const SampDemo = () => <Samp>1024</Samp>

export const PreDemo = () => <Pre children="const hello = 'Rebass'" />

export const CodeDemo = () => <Code children="<Hello />" />

export const BlockquoteDemo = () => <Blockquote>Blockquote</Blockquote>

export const MeasureDemo = () => (
  <Measure>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
    voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
    amet.
  </Measure>
)

export const TruncateDemo = () => (
  <Truncate>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
    voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
    amet.
  </Truncate>
)

export const LabelDemo = () => <Label>Hello Label</Label>

export const InputDemo = () => (
  <Input defaultValue="Hello" placeholder="Input" />
)

export const SelectDemo = () => (
  <Select>
    <option>Hello</option>
    <option>Beep</option>
    <option>Boop</option>
  </Select>
)

export const TextareaDemo = () => <Textarea rows={4} defaultValue="Hello" />

export const RadioDemo = () => (
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
)

export const CheckboxDemo = () => (
  <Label>
    <Checkbox defaultChecked />
    Hello
  </Label>
)

export const SliderDemo = () => <Slider />

export const ImageDemo = () => <Image src={image} />

export const BackgroundImageDemo = () => (
  <BackgroundImage ratio={1 / 2} src={image} />
)

export const AvatarDemo = () => <Avatar src={avatar} />

export const ProgressDemo = () => <Progress value={1 / 3} />

export const DividerDemo = () => <Divider w={1} borderColor="blue" />

export const ContainerDemo = () => <Container>Hello</Container>

export const RowDemo = () => (
  <Row>
    <Column>Column</Column>
    <Column>Column</Column>
  </Row>
)

export const ColumnDemo = () => (
  <Row>
    <Column>Column</Column>
    <Column>Column</Column>
    <Column>Column</Column>
  </Row>
)

export const BorderDemo = () => (
  <Border m={3} p={3}>
    Border
  </Border>
)

export const CardDemo = () => (
  <Card width={256}>
    <BackgroundImage
      ratio={1}
      src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20"
    />
    <Subhead p="2">Hello</Subhead>
  </Card>
)

export const BannerDemo = () => (
  <Banner src={image}>
    <Heading>Banner</Heading>
  </Banner>
)

export const MessageDemo = () => <Message>Hello</Message>

export const GroupDemo = () => (
  <Group>
    <Button children="Beep" />
    <ButtonOutline children="Boop" />
    <ButtonOutline children="Bop" />
  </Group>
)

export const ToolbarDemo = () => (
  <Toolbar>
    <NavLink>Hello</NavLink>
    <NavLink ml="auto">Beep</NavLink>
    <NavLink>Boop</NavLink>
  </Toolbar>
)

export const BadgeDemo = () => <Badge>Badge</Badge>

export const CircleDemo = () => <Circle>A</Circle>

export const PositionDemo = () => (
  <Position p={3} bg="green" position="relative">
    Hello
  </Position>
)

export const RelativeDemo = () => (
  <Relative>
    <Absolute bottom={0} right={0}>
      Hello
    </Absolute>
  </Relative>
)

export const AbsoluteDemo = () => (
  <Relative>
    <Absolute bottom={0} right={0}>
      Hello
    </Absolute>
  </Relative>
)

export const StickyDemo = () => (
  <Sticky m="2" top="0" right={0} bottom={0}>
    Hello
  </Sticky>
)

export const TabDemo = () => <Tab borderColor="blue">Hello</Tab>

export const TabsDemo = () => (
  <Tabs>
    <Tab borderColor="blue">Beep</Tab>
    <Tab>Boop</Tab>
    <Tab>Bop</Tab>
  </Tabs>
)

export const DotDemo = () => (
  <Flex>
    <Dot bg="black" />
    <Dot />
    <Dot />
  </Flex>
)

export const DrawerDemo = () => (
  <State initial={{ open: false, position: 'left' }}>
    {({ state, setState }) => (
      <React.Fragment>
        <Label>
          Position:
          <SmartSelect
            border={1}
            items={[
              { value: 'left', text: 'Left' },
              { value: 'right', text: 'Right' },
              { value: 'bottom', text: 'Bottom' },
              { value: 'top', text: 'Top' },
            ]}
            value={state.position}
            onChange={v => setState({ position: v })}
          />
        </Label>

        <Button m={3} onClick={() => setState({ open: !state.open })}>
          {state.open
            ? `${'Close '}${state.position}`
            : `${'Open '}${state.position}`}
        </Button>
        <Drawer
          width={
            state.position === 'top' || state.position === 'bottom'
              ? '100%'
              : 320
          }
          height={
            state.position === 'top' || state.position === 'bottom'
              ? '320px'
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
)

export const TooltipDemo = () => (
  <Flex align="center" mt={100} minHeight={100}>
    <Tooltip text="Hello">
      <Text>Hover Me</Text>
    </Tooltip>
  </Flex>
)

export const EmbedDemo = () => (
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
)

export const PanelDemo = () => (
  <Panel color="blue">
    <Panel.Header color="white" bg="blue">
      Hello
    </Panel.Header>
    <Box p={3}>
      <Subhead>Panel</Subhead>
    </Box>
    <Panel.Footer color="blue">Footer</Panel.Footer>
  </Panel>
)

export const ModalDemo = () => (
  <State initial={{ open: false }}>
    {({ state, setState }) => (
      <React.Fragment>
        <Button m={3} onClick={() => setState({ open: !state.open })}>
          Open Modal
        </Button>
        {state.open && (
          <div>
            <Fixed top={0} right={0} bottom={0} left={0} />

            <Modal width={256}>
              <Heading>Hello</Heading>

              <Button m={3} onClick={() => setState({ open: false })}>
                Close Modal
              </Button>
            </Modal>
          </div>
        )}
      </React.Fragment>
    )}
  </State>
)

export const DonutDemo = () => (
  <Donut value={2 / 3} strokeWidth={3} size={256} color="blue" />
)
