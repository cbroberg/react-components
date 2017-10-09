import React from 'react'
import PropTypes from 'prop-types'

class Mouse extends React.Component {
	static propTypes = {
		render: PropTypes.func.isRequired
	}

	state = { x: 0, y: 0 }

	handleMouseMove = (event) => {		
		this.setState({
			x: event.clientX,
			y: event.clientY
		})
	}

	render() {
		return (
			<div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
				{this.props.render(this.state)}
			</div>
		)
	}
}

export default Mouse
