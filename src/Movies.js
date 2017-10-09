import React, { Component } from 'react'
import { DisplayState } from './DisplayStateProps'
import getDisplayName from './getDisplayName'

class Movies extends Component {
	constructor(props) {
		super(props)
		this.state = {
			movies: [],
			dataLoaded: false
		}
	}
	
	
	componentDidMount() {
		let dataURL = "http://localhost:8888/wp-json/wp/v2/movies?_embed"
		fetch(dataURL)
			.then(res => res.json())
			.then(res => {
				this.setState({
					movies: res, dataLoaded: true
				})
			})
	}

	render() {
		let movies = this.state.movies.map((movie, index) => {
			return <div key={index}>				
				<p><strong>Title:</strong> {movie.title.rendered}</p>
				<p><strong>Release Year:</strong> {movie.acf.release_year}</p>
				<p><strong>Rating:</strong> {movie.acf.rating}</p>
				<div><strong>Description:</strong><div dangerouslySetInnerHTML={{ __html: movie.acf.description }} /></div>
			</div>
		})
		return (
			<div>
				{this.state.dataLoaded ? <h1>Star Wars Movies from WordPress</h1> : null}
				{this.state.dataLoaded ? movies : null}
				<DisplayState {...this.state} title={getDisplayName(Movies)} />
			</div>
		)
	}
}

export default Movies