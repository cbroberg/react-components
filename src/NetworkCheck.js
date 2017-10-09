import React from 'react'
import Network from './Network'


class CheckNetwork extends React.Component {
	state = {
		online: false
	}
	
	handleNetworkChange = ({ online }) => {
		if (online) {
			this.setState({ online: true })
		} else {
			this.setState({ online: false })
		}
	}

	render() {
		return (
			<Network
				onChange={this.handleNetworkChange}
				render={({ online }) => (
					<h2>
						{online ? 'You are online.' : 'You are offline.'} 
					</h2>							
				)}
			/>
		)
	}
}

export default CheckNetwork
