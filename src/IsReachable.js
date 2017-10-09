import React, { Component } from 'react'


const isURLReachable = (url) => {
	fetch(url).then((response) => {
				
		if (response.ok) {
			console.log('API response ', response.status, response.statusText)
			return null
		}
		throw new Error('Network response was not ok.')	
	}).catch((error) => {
		console.log('There has been a problem with your fetch operation: ' + error.message)
	})	
}

class IsReachable extends Component {

	componentDidMount() {
		
		isURLReachable('://localhost:8888')
	}

	render() {
		
		return (
			<div>
				
			</div>
		)
	}
}

export default IsReachable

