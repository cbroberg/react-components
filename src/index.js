import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { injectGlobal } from 'styled-components'
import styledNormalize from 'styled-normalize'

injectGlobal([`
	${styledNormalize}

   	html {
	   font-size: 62.5%;
	   height: 100vh;
	   min-height: 100vh;
		
	}
	
	body {
		margin: 15px;
		height: 100vh;
		min-height: 100vh;
	}

   * {
        outline: none;
		box-sizing: border-box;
		font-family: 'Source Sans Pro';
		font-size: 1.8rem;
	}
	`])


render(<App name="Christian" someprop={42} otherprop={'Foo Bar'} />, document.getElementById('root'))

