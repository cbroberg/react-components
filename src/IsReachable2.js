import React, { Component } from 'react'

const NO_RESPONSE_CODE = 0

const isURLReachable = (url) => {
	fetch(url).then(response => {
		if (response.ok) {
			console.log('API response ', response.status, response.statusText)
			return response.json()
		} else {

			if (response.status === NO_RESPONSE_CODE) {
				// server unavailable
				return Promise.reject(new Error('Server unavailable'))
			} else {
				// handle other API errors here, implementation
				// depends on your response format
				console.log('API errors ', response.ok, response.status, response.statusText)
			}
		}
	})
		.then(json => json)
		.catch((error) => error)
}

class IsReachable extends Component {

	componentDidMount() {
		isURLReachable('://localhost:8888/wp-json/wp/v2/posts')
	}

	render() {

		return (
			<div>

			</div>
		)
	}
}

export default IsReachable
