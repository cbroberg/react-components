import React from 'react'
import PropTypes from 'prop-types'

class MouseMove extends React.Component {
	static propTypes = {
		render: PropTypes.func.isRequired
	}

	state = { x: 0, y: 0 }

	componentDidMount() {
		window.addEventListener("mousemove", this.handleMouseMove)
	}

	componentWillUnmount() {
		window.removeEventListener("mousemove", this.handleMouseMove)
	}

	handleMouseMove = (event) => {		
		this.setState({
			x: event.clientX,
			y: event.clientY
		})
	}

	render() {
		return this.props.render(this.state)
	}
}

export default MouseMove
