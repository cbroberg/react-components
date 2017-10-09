/* 

Site: http://localhost:8888/
Admin: http://localhost:8888/wp-admin/
API: http://localhost:8888/wp-json/wp/v2/posts
MAMP: http://localhost:8888/MAMP/
Path: /Users/cbroberg/Sites/wordpress/
Examples: https://hackernoon.com/react-js-with-wordpress-as-a-backend-wp-rest-api-example-127639a6cc41


*/

import React, { Component } from 'react'
import { Heading, Text } from 'odeum-primitives'

class Headless extends Component {
	constructor(props) {
		super(props)

		this.state = {
			posts: [],
			dataRoute: 'http://localhost:8888/wp-json/wp/v2/posts',
			dataLoaded: false
		}
	}

	render() {
		return (
			<div className="App">
				<div className="App-header">
					{this.state.dataLoaded ? <Heading>Headless WordPress CMS Experiment</Heading> : null}		
				</div>

				<div className="posts">

					{this.state.posts.map((posts) =>
						<div className="posts" key={`posts-${posts.id}}`}>
							
							<Heading>{posts.title}</Heading>
							<Text>{posts.id}</Text>
							<Text>{posts.date}</Text>
							<Text>{posts.content}</Text>
							<Text>{posts.author}</Text>
						</div>
					)}

				</div>
			</div>
		)
	}

	componentDidMount() {
		fetch(this.state.dataRoute)
			.then(res => res.json())
			.then(posts => this.setState((prevState, props) => {
				return { posts: posts.map(this.mapPosts), dataLoaded: true }
			}))
	}

	mapPosts(posts) {
		return {
			id: posts.id,
			date: posts.date,
			modified: posts.modified,
			guid: posts.guid.rendered,
			status: posts.status,
			type: posts.type,
			link: posts.link,
			title: posts.title.rendered,
			content: posts.content.rendered,
			protected: posts.content.protected,
			author: posts.author
		}
	}
}

export default Headless