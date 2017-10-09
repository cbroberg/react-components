import React, { Component } from 'react'


export const Pattern1 = () =>
	<div>
		Component Content
	</div>


export const Pattern2 = () => {
	return (
		<div>
			Component Content
		</div>
	)
}


export class Pattern3 extends Component {
	render() {
		return (
			<div>
				Component Content
			</div>
		)
	}
}

export const Pattern4 = ({ name }) => {
	return (
		<div>
			Component Content
		</div>
	)
}
