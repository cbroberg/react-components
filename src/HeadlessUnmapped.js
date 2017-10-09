import React, { Component } from 'react'
import { Heading, Text } from 'odeum-primitives'

class HeadlessUnmapped extends Component {
	constructor(props) {
		super(props)

		this.state = {
			posts: [],
			dataRoute: 'http://localhost:8888/wp-json/wp/v2/posts',
			dataLoaded: false
		}
	}

	render() {
		let posts = this.state.posts.map((posts, index) => {
			return <div key={index}>
				<Text><strong>Title:</strong> {posts.title.rendered}</Text>
				<Text>Content: {this.stripHTMLTags(posts.content.rendered)}</Text>				
			</div>
		})		
		return (
			<div>
				{this.state.dataLoaded ? <Heading>Unmapped and stripped HTML</Heading> : null}				
				{ posts }
			</div>
		)
	}

	stripHTMLTags(str) {
		var htmlEntity = require('he')
		if ((str === null) || (str === ''))
			return false
		else
			str = str.toString()
		return htmlEntity.decode(str.replace(/<[^>]*>/g, ''))
		// https://github.com/mathiasbynens/he
	}

	componentDidMount() {
		fetch(this.state.dataRoute)
			.then(res => res.json())
			.then(res => {
				this.setState({ posts: res, dataLoaded: true }) 
			})
	}
}

export default HeadlessUnmapped
