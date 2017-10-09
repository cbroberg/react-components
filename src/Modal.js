import React from 'react'
import Modal from 'react-modal'

const customStyles = {
	overlay: {
		position: 'fixed',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: 'rgba(255, 255, 255, 0.75)'
	},
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		transformOrigin: 'center',
		boxShadow: '0 48px 80px -32px rgba(0, 0, 0, 0.3)',
		opacity: '20',
		borderRadius: '15px',
		transition: 'transform 1.2s, opacity 1.2s'
	}
}

class ModalWindow extends React.Component {
	constructor() {
		super()

		this.state = {
			modalIsOpen: false
		}
	}

	openModal = () => {
		this.setState({ modalIsOpen: true })
	}

	afterOpenModal = () => {
		// references are now sync'd and can be accessed.
		this.subtitle.style.color = '#cdf300'
	}

	closeModal = () => {
		this.setState({ modalIsOpen: false })
	}

	render() {
		return (
			<div>
				<button onClick={this.openModal}>Open Modal</button>
				<Modal
					isOpen={this.state.modalIsOpen}
					onAfterOpen={this.afterOpenModal}
					onRequestClose={this.closeModal}
					style={customStyles}
					closeTimeoutMS={0}
					contentLabel="Example Modal"
				>

					<h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
					<button onClick={this.closeModal}>close</button>
					<div>I am a modal</div>
					<form>
						<input />
						<button>tab navigation</button>
						<button>stays</button>
						<button>inside</button>
						<button>the modal</button>
					</form>
				</Modal>
			</div>
		)
	}
}

export default ModalWindow