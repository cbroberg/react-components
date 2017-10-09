import React, { Component } from 'react'
import hljs from 'highlight.js'

function highlight(str, lang) {
	if (lang && hljs.getLanguage(lang)) {
		try {
			return hljs.highlight(lang, str).value
		} catch (__) { }
	}

	try {
		return hljs.highlightAuto(str).value
	} catch (__) { }

	return '' // use external default escaping
}

class Markdown extends Component {
	render() {
		return (
			<div>{highlight(`
render() {
	return (
		<div style={{ width: this.props.width }}>
			{this.state.rows}
		</div>
	)
}
					`, 'javascript')}
			</div>
		)
	}
}

export default Markdown