import React from 'react'
import { Heading, Text } from 'odeum-primitives'
import StateLift, { App1, App2 } from './Lifting_state_up'
import SwitchJSX from './SwitchJSX'
import Network from './Network'
import MouseMove from './MouseMove'
import Idle from './Idle'
// import SnipCart from './SnipCart'
import Headless from './Headless'
import HeadlessUnmapped from './HeadlessUnmapped'


class App extends React.Component {

	state = {
		cornifyLoaded: false
	}

	preloadCornify = () => {
		const script = document.createElement('script')
		script.onload = () => this.setState({ cornifyLoaded: true })
		script.src = '//www.cornify.com/js/cornify.js'
		document.body.appendChild(script)
	}

	cornify = () => {
		window.cornify_add()
	}

	render() {
		return (
			<div>
				<Heading>Hello World {this.props.name} </Heading>
				<MouseMove render={({ x, y }) => (
					<Text>The mouse position is ({x}, {y})</Text>
				)} />
				
				<Idle
					onChange={({ idle }) => console.log({ idle })}
					timeout={1000}
					render={({ idle }) =>
						<Text>
							{idle
								? "You are idle."
								: "Stop doing stuff for 1 second."
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
				<Text>This is a paragraph of text</Text>
				<SwitchJSX />
				<StateLift />
				<App1 />
				<App2 />
				{/* <SnipCart /> */}
				<Headless />
				<HeadlessUnmapped />
			</div>
		)
	}
}


export default App