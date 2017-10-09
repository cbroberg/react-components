import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text } from 'odeum-primitives'

// ScrollWatch - compose any component(s) that need
// to make use of the current 'x' and 'y' scroll position.
class ScrollWatch extends Component {
	state = { x: 0, y: 0 }
	
	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll)
	}

	handleScroll = e => {
		this.setState({
			x: window.scrollX,
			y: window.scrollY
		})
	}

	render() {
		const { x, y } = this.state
		return this.props.render(x, y)
	}
}

ScrollWatch.propTypes = { 
	render: PropTypes.func.isRequired 
}

// Component to display and 'x' and 'y'
const ShowPosition = ({ x, y }) => (
	<Text>
		Scroll position x: {x}, y: {y}
	</Text>
)

class ScrollPosition extends Component {

	renderPosition = (x, y) => <ShowPosition x={x} y={y} />

	render() {
		return (
			<div>
				<ScrollWatch render={(x, y) => ( <ShowPosition x={x} y={y} /> )} />
				<ScrollWatch render={this.renderPosition} />
			</div>
		)
	}
}

export default ScrollPosition