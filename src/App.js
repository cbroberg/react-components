import React, { Component } from 'react'
import { Heading, Text, Button } from 'odeum-primitives'
import StateLift, { App1, App2 } from './Lifting_state_up'
import SwitchJSX from './SwitchJSX'
import Network from './Network'
import MouseMove from './MouseMove'
import Idle from './Idle'
// import SnipCart from './SnipCart'
// import Headless from './Headless'
import HeadlessUnmapped from './HeadlessUnmapped'
import Movies from './Movies'
import IsReachable from './IsReachable'
import { DisplayProps } from './DisplayStateProps'
// import Markdown from './Markdown'
import ScrollPosition from './ScrollPosition'


const emoji = {
	sleeping: String.fromCodePoint(0x1F634),
	sleep: String.fromCodePoint(0x1F4A4),
	icecream: String.fromCodePoint(0x1F366),
	sparkle: '\u2728',
	stophand: '\u270B'
}

class MouseMover extends Component {

	renderMouseMovement = ({ x, y }) => {
		return <Text>The mouse position is ({x}, {y})</Text>
	}

	render() {
		return (
			<MouseMove render={this.renderMouseMovement} />
		)
	}
}

// TODO: Refactor to remove all arrow functions from render 
const App = (props) => {
	
	return (
		<div>
			<IsReachable />
			<Heading>Hello World {props.name} {emoji.sparkle} {emoji.sleep}</Heading>
			<Button label={"Hello from odeum-ui"} />
			<MouseMover />
			<MouseMove render={({ x, y }) => (
				<Text>The mouse position is ({x}, {y})</Text>
			)} />
			<ScrollPosition />
			<Idle
				onChange={({ idle }) => null} // console.log({ idle })
				timeout={1000}
				render={({ idle }) =>
					<Text>
						{idle
							? `You are idle! ${emoji.sleeping} ${emoji.sleep}`
							: `Stop doing stuff for 1 second! ${emoji.stophand} ${emoji.icecream}`
						}
					</Text>
				}
			/>
			<Network
				onChange={this.handleNetworkChange}
				render={({ online }) => (
					<Text>
						{online ? 'You are online.' : 'You are offline.'}
					</Text>
				)}
			/>
			<SwitchJSX />
			<StateLift />
			<App1 />
			<App2 />
			{/* <SnipCart /> */}
			{/* <Headless /> */}
			<HeadlessUnmapped />
			<Movies />
			<DisplayProps {...props} title={'App'} />
			{/* <Markdown /> */}
		</div>
	)
}


export default App
