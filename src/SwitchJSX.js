import React, { Component } from 'react'

const jsx = 3

const Jsx1 = () => {
	return (
		<div>
			This is JSX 1
		</div>
	)
}

const Jsx2 = () => {
	return (
		<div>
			This is JSX 2
		</div>
	)
}

const Jsx3 = () => {
	return (
		<div>
			This is JSX 3
		</div>
	)
}


class SwitchJSX extends Component {
	render() {
		switch (jsx) {
			case 1:
				return (
					<div>
						<Jsx1 />
					</div>
				)
			case 2:
				return (
					<div>
						<Jsx2 />
					</div>
				)
			case 3:
				return (
					<div>
						<Jsx3 />
					</div>
				)
			default:
				break
		} 

	}
}

export default SwitchJSX