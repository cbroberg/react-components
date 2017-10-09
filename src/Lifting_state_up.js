import React, { PureComponent } from 'react'
import { Heading, Text } from 'odeum-primitives'
import { DisplayState } from './DisplayStateProps'

const scaleNames = {
	c: 'Celsius',
	f: 'Fahrenheit'
}

function toCelsius(fahrenheit) {
	return (fahrenheit - 32) * 5 / 9
}

function toFahrenheit(celsius) {
	return (celsius * 9 / 5) + 32
}

function tryConvert(temperature, convert) {
	const input = parseFloat(temperature)
	if (Number.isNaN(input)) {
		return ''
	}
	const output = convert(input)
	const rounded = Math.round(output * 1000) / 1000
	return rounded.toString()
}

function BoilingVerdict(props) {
	if (props.celsius >= 100) {
		return <Text>The water would boil.</Text>
	}
	return <Text>The water would not boil.</Text>
}

class TemperatureInput extends PureComponent {
	
	handleChange = (e) => {
		this.props.onTemperatureChange(e.target.value)
	}

	render() {
		const { temperature, scale } = this.props		
		return (
			<fieldset>
				<Text>Enter temperature in {scaleNames[scale]}:</Text>
				<input value={temperature}
					onChange={this.handleChange} />
			</fieldset>
		)
	}
}

class Calculator extends PureComponent {
	constructor(props) {
		super(props)

		this.state = { temperature: '', scale: 'c' }
	}

	handleCelsiusChange = (temperature) => {
		this.setState({ scale: 'c', temperature })
	}

	handleFahrenheitChange = (temperature) => {
		this.setState({ scale: 'f', temperature })
	}

	render() {
		const { scale, temperature } = this.state		
		const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
		const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature

		return (
			<div>
				<TemperatureInput
					scale="c"
					temperature={celsius}
					onTemperatureChange={this.handleCelsiusChange} />
				<TemperatureInput
					scale="f"
					temperature={fahrenheit}
					onTemperatureChange={this.handleFahrenheitChange} />
				<BoilingVerdict
					celsius={parseFloat(celsius)} />
				<DisplayState {...this.state} title={'Calculator'}/>
			</div>
		)
	}
}

const StateLift = ({ name }) => {
	return (
		<div>
			<Heading>Lifting State Up</Heading>
			<Text>Often, several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor.</Text>
			<Text />
			<Calculator />
		</div>
	)
}

export default StateLift


const Greeting = (props) => {
	return (
		<div>
			<Text>{props.firstName} {props.lastName}</Text>
			<div>
				<Text>Here is a list:</Text>
				<ul>
					<li><Text>Item 1</Text></li>
					<li><Text>Item 2</Text></li>
				</ul>
			</div>
		</div>
	)
}

export function App1() {
	return <Greeting firstName='Ben' lastName='Hector' />
}

export function App2() {
	const props = { 
		firstName: 'Ben', 
		lastName: 'Hector' 
	}
	
	return <Greeting {...props} />
}

